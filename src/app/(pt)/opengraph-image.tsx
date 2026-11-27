import { getContent } from "@/content/i18n";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = getContent("pt").ui.meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("pt");
}
