import { profile } from "./data";

export function Footer() {
  return (
    <footer className="px-6 pb-10 text-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} — designed & built with care.
      </p>
    </footer>
  );
}
