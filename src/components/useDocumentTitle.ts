import { useEffect } from "react";

const SITE = "ABTAM Fast Food";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : SITE;
  }, [title]);
}
