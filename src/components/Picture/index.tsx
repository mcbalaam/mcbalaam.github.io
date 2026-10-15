import type { ImgHTMLAttributes } from "react";

type PictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  avif?: string;
  webp: string;
};

export default function Picture({ avif, webp, alt = "", ...rest }: PictureProps) {
  return (
    <picture style={{ display: "contents" }}>
      {avif && <source srcSet={avif} type="image/avif" />}
      <source srcSet={webp} type="image/webp" />
      <img src={webp} alt={alt} {...rest} />
    </picture>
  );
}
