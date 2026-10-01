// Real photos supplied by the shop (copied from /images). Dimensions are native pixels.
export type WorkImage = {
  slug: string;
  w: number;
  h: number;
  alt: string;
  /** p = permanent tattoo, t = temporary (henna / jagua) */
  kind: "p" | "t";
};

export const work: WorkImage[] = [
  { slug: "floral-ankle", w: 382, h: 510, alt: "Fine-line floral vine tattoo wrapping the ankle", kind: "p" },
  { slug: "usmc-memorial", w: 382, h: 510, alt: "Memorial lettering tattoo on a forearm with dates and USMC initials", kind: "p" },
  { slug: "sea-turtle-arm", w: 382, h: 510, alt: "Sea turtle tattoo on the forearm with soft shading", kind: "p" },
  { slug: "henna-group", w: 680, h: 510, alt: "A group showing off henna designs on their hands", kind: "t" },
  { slug: "jagua-hibiscus", w: 680, h: 510, alt: "Bold jagua hibiscus and floral design on a forearm", kind: "t" },
  { slug: "reaper", w: 382, h: 510, alt: "Black and grey grim reaper tattoo on a forearm", kind: "p" },
  { slug: "sun-wave", w: 382, h: 510, alt: "Minimal sun and wave tattoo on the upper arm", kind: "p" },
  { slug: "henna-turtle-shoulder", w: 382, h: 510, alt: "Henna sea turtle with flowers on a shoulder", kind: "t" },
  { slug: "dagger-rose", w: 382, h: 510, alt: "Traditional dagger and rose tattoo on a forearm", kind: "p" },
  { slug: "ladybug", w: 382, h: 510, alt: "Ladybug tattoo on an arm next to a temporary ladybug transfer", kind: "p" },
  { slug: "henna-turtle-leg", w: 411, h: 510, alt: "Henna sea turtle design on a leg", kind: "t" },
  { slug: "line-portrait", w: 382, h: 510, alt: "Flowing line-art face tattoo on the upper arm", kind: "p" },
  { slug: "peony", w: 382, h: 510, alt: "Colorful pink peony tattoo on a forearm", kind: "p" },
  { slug: "dragonflies", w: 382, h: 510, alt: "Three watercolor-style dragonfly tattoos on a lower leg", kind: "p" },
  { slug: "anchor-lily", w: 382, h: 510, alt: "Anchor and lily tattoo on the upper thigh", kind: "p" },
  { slug: "sink-or-swim", w: 382, h: 510, alt: "Sink or Swim anchor banner tattoo on a forearm", kind: "p" },
  { slug: "mom-heart", w: 382, h: 510, alt: "Traditional MOM heart and arrow tattoo", kind: "p" },
  { slug: "gnome-hand", w: 382, h: 510, alt: "Gnome character tattoo on the back of a hand", kind: "p" },
  { slug: "skeleton-hand", w: 382, h: 510, alt: "Skeleton hand bones tattoo on the back of a hand", kind: "p" },
  { slug: "phoenix", w: 382, h: 510, alt: "Colorful phoenix tattoo covering a calf", kind: "p" },
  { slug: "spider-hand", w: 382, h: 510, alt: "Black spider design on the back of a hand", kind: "p" },
  { slug: "snake", w: 382, h: 510, alt: "Snake tattoo wrapping around an arm", kind: "p" },
  { slug: "sunflowers", w: 382, h: 510, alt: "Sunflower and botanical tattoo on the upper arm", kind: "p" },
  { slug: "infinity-feather", w: 382, h: 510, alt: "Infinity feather tattoo with birds on a forearm", kind: "p" },
  { slug: "swallow", w: 382, h: 510, alt: "Swallow and heart banner tattoo on an arm", kind: "p" },
  { slug: "jagua-return-to-sender", w: 382, h: 510, alt: "Jagua Return to Sender banner design on a forearm", kind: "t" },
  { slug: "turtle-color", w: 382, h: 510, alt: "Colorful sea turtle tattoo with a red flower", kind: "p" },
  { slug: "mushrooms", w: 382, h: 510, alt: "Dotted mushroom tattoo on a forearm", kind: "p" },
  { slug: "henna-turtle-hand", w: 382, h: 510, alt: "Henna sea turtle design on the back of a hand", kind: "t" },
  { slug: "rose-circle", w: 382, h: 510, alt: "Black and grey roses in a decorative circle tattoo", kind: "p" },
  { slug: "floral-hip", w: 382, h: 510, alt: "Fine floral border design along the lower back", kind: "p" },
  { slug: "sun-back", w: 382, h: 510, alt: "Sun and moon face tattoo on a back", kind: "p" },
  { slug: "three-crosses", w: 382, h: 510, alt: "Three crosses with scripture lettering on a wrist", kind: "p" },
  { slug: "ohana-turtle", w: 382, h: 510, alt: "Ohana sea turtle with lotus tattoo on a forearm", kind: "p" },
  { slug: "mom-jagua", w: 382, h: 510, alt: "Jagua MOM heart banner design", kind: "t" },
  { slug: "paw-print", w: 382, h: 510, alt: "Bear paw print tattoo on a forearm", kind: "p" },
  { slug: "pocket-watch", w: 382, h: 510, alt: "Pocket watch tattoo on a forearm", kind: "p" },
  { slug: "cheshire-cat", w: 382, h: 510, alt: "Watercolor Cheshire Cat tattoo on a shoulder", kind: "p" },
  { slug: "sternum-floral", w: 382, h: 510, alt: "Delicate floral sternum tattoo", kind: "p" },
  { slug: "anatomical-heart", w: 382, h: 510, alt: "Anatomical heart tattoo on a forearm", kind: "p" },
  { slug: "henna-fingers", w: 382, h: 510, alt: "Golden henna design on fingers", kind: "t" },
  { slug: "dandelion", w: 382, h: 510, alt: "Dandelion and initial tattoo on a forearm", kind: "p" },
  { slug: "henna-hands-pair", w: 382, h: 510, alt: "Detailed henna patterns across both hands", kind: "t" },
  { slug: "shell", w: 382, h: 510, alt: "Small ammonite shell tattoo on a wrist", kind: "p" },
  { slug: "frankie-script", w: 680, h: 510, alt: "Frankie script lettering with roses on a forearm", kind: "p" },
  { slug: "love-life-feather", w: 382, h: 510, alt: "Love and Life infinity feather tattoo", kind: "p" },
  { slug: "turtle-fu", w: 382, h: 510, alt: "Detailed fierce sea turtle tattoo on a forearm", kind: "p" },
  { slug: "henna-yinyang", w: 680, h: 510, alt: "Henna sun and yin-yang design", kind: "t" },
  { slug: "om-moon", w: 382, h: 510, alt: "Om symbol inside a crescent moon design", kind: "p" },
  { slug: "cross-back", w: 510, h: 510, alt: "Bold black cross tattoo on the upper back", kind: "p" },
  { slug: "foot-color", w: 382, h: 510, alt: "Colorful tropical tattoo on the top of a foot", kind: "p" },
  { slug: "ankle-flowers", w: 382, h: 510, alt: "Small floral tattoo on the lower leg", kind: "p" },
  { slug: "tribal-shoulder", w: 382, h: 510, alt: "Polynesian-style tribal shoulder piece", kind: "p" },
  { slug: "back-piece", w: 382, h: 510, alt: "Large detailed back piece tattoo", kind: "p" },
  { slug: "black-roses", w: 680, h: 510, alt: "Black roses tattoo on an upper arm", kind: "p" },
  { slug: "skeleton-color", w: 382, h: 510, alt: "Colorful skeleton hand tattoo", kind: "p" },
  { slug: "peace-heart", w: 382, h: 510, alt: "Flaming heart with PEACE banner tattoo", kind: "p" },
  { slug: "koi", w: 382, h: 510, alt: "Bright orange koi fish tattoo on a calf", kind: "p" },
  { slug: "deadpool", w: 382, h: 510, alt: "Chibi Deadpool tattoo with Maximum Effort lettering", kind: "p" },
  { slug: "just-keep-swimming", w: 274, h: 510, alt: "Just Keep Swimming fish tattoo on a forearm", kind: "p" },
  { slug: "frida", w: 382, h: 510, alt: "Fine-line flower crown portrait tattoo on a forearm", kind: "p" },
  { slug: "hibiscus", w: 382, h: 510, alt: "Fine-line hibiscus tattoo on a shoulder", kind: "p" },
  { slug: "spi-palm", w: 628, h: 510, alt: "Palm tree and S.P.I. tattoo on a forearm", kind: "p" },
  { slug: "jagua-hibiscus-hand", w: 382, h: 510, alt: "Jagua hibiscus design flowing across a hand and fingers", kind: "t" },
  { slug: "henna-hand-flowers", w: 680, h: 510, alt: "Henna floral design on the back of a hand", kind: "t" },];

export const bySlug = (slug: string): WorkImage => {
  const img = work.find((i) => i.slug === slug);
  if (!img) throw new Error(`Unknown image: ${slug}`);
  return img;
};

export const src = (slug: string) => `/images/work/${slug}.webp`;

