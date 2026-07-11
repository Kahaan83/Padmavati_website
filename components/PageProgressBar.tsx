"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageProgressBar() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Whenever pathname changes, trigger a quick simulation of loading
    setActive(true);
    setWidth(20);

    const t1 = setTimeout(() => setWidth(60), 80);
    const t2 = setTimeout(() => setWidth(100), 220);
    const t3 = setTimeout(() => {
      setActive(false);
      setWidth(0);
    }, 380);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  if (!active) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 pointer-events-none">
      <div
        className="h-full bg-brand-secondary transition-all duration-300 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
