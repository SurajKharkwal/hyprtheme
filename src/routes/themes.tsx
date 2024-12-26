import Theme from "@/app/Themes/theme";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/themes")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Theme />;
}
