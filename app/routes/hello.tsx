import type { Route } from "./+types/hello";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hello World" },
    { name: "description", content: "A simple hello world page" },
  ];
}

export default function Hello() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Hello World!</h1>
      <p>This is a test route created with Claude Code.</p>
    </div>
  );
}