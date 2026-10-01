import Image from "next/image";
import { bySlug, src } from "@/data/images";

type Props = {
  slug: string;
  sizes: string;
  className?: string;
  position?: string;
  priority?: boolean;
  alt?: string;
};

/** Fills its (relatively positioned) parent with a real shop photo. */
export default function Pic({ slug, sizes, className = "", position = "center", priority, alt }: Props) {
  const img = bySlug(slug);
  return (
    <Image
      src={src(slug)}
      alt={alt ?? img.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      style={{ objectPosition: position }}
    />
  );
}
