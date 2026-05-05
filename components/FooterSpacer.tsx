"use client";

import { useEffect, useState } from "react";

export function FooterSpacer({ footerId }: { footerId: string }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const footer = document.getElementById(footerId);
    if (!footer) return;
    const update = () => setHeight(footer.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(footer);
    return () => observer.disconnect();
  }, [footerId]);

  return (
    <div
      style={{ height }}
      className="pointer-events-none bg-black"
      aria-hidden="true"
    />
  );
}
