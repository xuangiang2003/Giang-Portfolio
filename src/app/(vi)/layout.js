import { HtmlShell, buildMetadata } from "../shared";

export const metadata = buildMetadata("vi");

export default function Layout({ children }) {
  return <HtmlShell lang="vi">{children}</HtmlShell>;
}
