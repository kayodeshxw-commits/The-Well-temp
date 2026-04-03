import { useEffect } from "react";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} — The Well`
      : "The Well | Productions & Consulting";
    return () => {
      document.title = "The Well | Productions & Consulting";
    };
  }, [title]);
}
