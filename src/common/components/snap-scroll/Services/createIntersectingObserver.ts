export default function createIntersectingObserver({
    callback,
    options,
}: {
    callback: (entries: IntersectionObserverEntry[]) => void;
    options: {
        threshold?: number;
        rootMargin?: string;
    };
}) {
    return new IntersectionObserver(callback, options);
}
