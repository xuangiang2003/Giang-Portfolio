import { HtmlShell, buildMetadata } from "../shared";

export const metadata = buildMetadata("en");

export default function Layout({ children }) {
  return <HtmlShell lang="en">{children}</HtmlShell>;
}
