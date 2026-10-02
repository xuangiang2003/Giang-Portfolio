import { LANGUAGES, SITE_URL } from "@/data/site";

export default function sitemap() {
  return LANGUAGES.map(({ path }) => ({ url: new URL(path, SITE_URL).href, lastModified: new Date() }));
}
