import { useEffect, useState } from "react";

interface useIntersectionObserverParams {
  elementRef: React.RefObject<HTMLElement>;
  threshold?: number; // 0 = only the top pixels must be on the screen to entry.isIntersecting === true
  root?: Element | Document | null; // element that is used as the viewport for checking visibility of the target. Null = browser viewport
  rootMargin?: string; // values serves to grow or shrink each side of the root element's bounding box before computing intersections
}

export function useIntersectionObserver({
  elementRef,
  threshold = 0,
  root = null,
  rootMargin = "0%",
}: useIntersectionObserverParams) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>(
    {} as IntersectionObserverEntry
  );

  const updateEntry = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setEntry(entry);
  };

  useEffect(() => {
    const targetElement = elementRef?.current;

    if (!targetElement) return;

    const observerParams = { threshold, root, rootMargin };

    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(targetElement);

    return () => observer.unobserve(targetElement);
  }, [elementRef, threshold, root, rootMargin]);

  return entry;
}
