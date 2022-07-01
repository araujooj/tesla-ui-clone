import { useEffect, useState } from "react";

interface useIntersectionObserverParams {
  elementRef: React.RefObject<HTMLElement>;
  threshold?: number;
  root?: null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  elementRef,
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
}: useIntersectionObserverParams) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>(
    {} as IntersectionObserverEntry
  );

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: [IntersectionObserverEntry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(
      updateEntry as any,
      observerParams
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}
