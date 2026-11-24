import type { ImgHTMLAttributes } from "preact";

type PictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  avif?: string;
  webp: string;
  alt: string;
};

export default function Picture({ avif, webp, alt }: PictureProps) {
  return (
    <picture style={{ display: "contents" }}>
      {avif && <source srcSet={avif} type="image/avif" />}
      <source srcSet={webp} type="image/webp" />
      <img alt={alt} src={webp} />
    </picture>
  );
}
