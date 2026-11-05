import type { ImgHTMLAttributes } from "preact";

type PictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  avif?: string;
  webp: string;
};

export default function Picture({ avif, webp }: PictureProps) {
  return (
    <picture style={{ display: "contents" }}>
      {avif && <source srcSet={avif} type="image/avif" />}
      <source srcSet={webp} type="image/webp" />
      <img src={webp} />
    </picture>
  );
}
