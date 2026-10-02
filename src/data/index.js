import vi from "./vi";
import en from "./en";

const CONTENT = { vi, en };

export function getContent(lang) {
  return CONTENT[lang] || vi;
}

export * from "./site";
