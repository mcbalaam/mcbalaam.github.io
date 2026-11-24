const svgNamespace = "http://www.w3.org/2000/svg";
let nextArrowId = 0;

function positionArrow(source: Element, target: Element) {
  const from = source.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  const goesRight = to.left >= from.right;
  const goesLeft = to.right <= from.left;
  const startX = goesRight ? from.right : from.left;
  const endX = goesLeft ? to.right : to.left;
  const startY = (from.top + from.bottom) / 2;
  const endY = (to.top + to.bottom) / 2;
  const bend = Math.min(100, Math.max(28, Math.abs(endX - startX) / 2 + Math.abs(endY - startY) / 8));
  const firstControl = startX + (goesRight ? bend : -bend);
  const secondControl = endX + (goesLeft ? bend : -bend);
  const forward = `M ${startX} ${startY} C ${firstControl} ${startY}, ${secondControl} ${endY}, ${endX} ${endY}`;
  const label = goesRight
    ? forward
    : `M ${endX} ${endY} C ${secondControl} ${endY}, ${firstControl} ${startY}, ${startX} ${startY}`;
  return { forward, label };
}

interface UsageArrow {
  animate(show: boolean): void;
  remove(): void;
}

function createArrow(source: Element, target: Element, label: string, onHidden: () => void): UsageArrow {
  const id = `project-usage-${++nextArrowId}`;
  const svg = document.createElementNS(svgNamespace, "svg");
  svg.classList.add("project-usage-arrow");
  svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = `
    <defs>
      <path id="${id}-label"/>
      <marker id="${id}-tip" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
        <path class="project-usage-tip" d="M 3 2 L 10 7 L 3 12"/>
      </marker>
      <mask id="${id}-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
        <path class="project-usage-mask" pathLength="1" stroke-dasharray="0 2"/>
      </mask>
    </defs>
    <g mask="url(#${id}-mask)">
      <path class="project-usage-line" marker-end="url(#${id}-tip)"/>
      <text class="project-usage-label" dy="-9" text-anchor="middle"><textPath href="#${id}-label" startOffset="50%"></textPath></text>
    </g>`;

  const line = svg.querySelector(".project-usage-line")!;
  const reveal = svg.querySelector(".project-usage-mask")!;
  const labelPath = svg.querySelector(`#${id}-label`)!;
  svg.querySelector("textPath")!.textContent = label;
  document.body.append(svg);

  const position = () => {
    const path = positionArrow(source, target);
    line.setAttribute("d", path.forward);
    reveal.setAttribute("d", path.forward);
    labelPath.setAttribute("d", path.label);
  };
  position();
  const observer = new ResizeObserver(position);
  for (const element of new Set([source, target, source.closest(".column"), target.closest(".column")])) {
    if (element) observer.observe(element);
  }
  window.addEventListener("resize", position);
  window.addEventListener("scroll", position, { capture: true, passive: true });

  let frame = 0;
  let start = 0;
  let end = 0;
  const remove = () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener("resize", position);
    window.removeEventListener("scroll", position, true);
    svg.remove();
  };

  const animate = (show: boolean) => {
    cancelAnimationFrame(frame);
    const fromStart = start;
    const fromEnd = end;
    const toStart = show ? 0 : fromEnd;
    const toEnd = show ? 1 : fromEnd;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : show ? 320 : 250;

    // Two edges let an interrupted reveal erase only the part already drawn.
    const began = performance.now();
    const tick = (now: number) => {
      const t = duration === 0 ? 1 : Math.min(1, Math.max(0, (now - began) / duration));
      const eased = t * t * (3 - 2 * t);
      start = fromStart + (toStart - fromStart) * eased;
      end = fromEnd + (toEnd - fromEnd) * eased;
      reveal.setAttribute("stroke-dasharray", `${Math.max(0, end - start)} 2`);
      reveal.setAttribute("stroke-dashoffset", `${-start}`);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else if (!show) {
        remove();
        onHidden();
      }
    };
    tick(began);
  };

  return { animate, remove };
}

export function bindUsageArrows(container: HTMLElement, label: string) {
  const cleanup: (() => void)[] = [];
  for (const source of container.querySelectorAll<HTMLElement>("[data-usage-target]")) {
    const selector = source.dataset.usageTarget;
    const target = selector && document.querySelector(selector);
    if (!target) continue;

    let arrow: UsageArrow | undefined;
    const show = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      arrow ??= createArrow(source, target, label, () => { arrow = undefined; });
      arrow.animate(true);
    };
    const hide = () => arrow?.animate(false);

    source.addEventListener("pointerenter", show);
    source.addEventListener("pointerleave", hide);
    cleanup.push(() => {
      source.removeEventListener("pointerenter", show);
      source.removeEventListener("pointerleave", hide);
      arrow?.remove();
    });
  }
  return () => cleanup.forEach((unbind) => unbind());
}
