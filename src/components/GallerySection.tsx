import { useState, useRef, useEffect, useCallback } from "react";
import { Reveal } from "@/components/Reveal";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySectionProps {
  images: GalleryImage[];
}

export function GallerySection({ images }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    if (!touch) return;
    touchStartX.current = touch.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    if (!touch) return;
    touchEndX.current = touch.clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (total === 0) return null;

  return (
    <section className="relative z-10 border-b border-primary/20 py-16 text-center sm:py-24">
      <Reveal>
        <div className="px-6">
          <p className="font-caps text-[0.8rem] font-medium tracking-[0.28em] text-primary uppercase">
            — Our moments —
          </p>
          <h2 className="font-script mt-3 text-[3.25rem] leading-[1.08] text-foreground sm:text-6xl">
            The Gallery
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="mx-auto mt-10 max-w-md px-6 sm:max-w-lg">
          <div
            className="relative overflow-hidden rounded-[20px] p-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="min-w-full px-1 box-border">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px] border border-primary/25 bg-card/90 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.18)]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading={idx === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover select-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/15" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-center gap-5 px-4">
            <button
              onClick={prevSlide}
              aria-label="Previous photo"
              className="flex h-11 w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-foreground/30 text-primary transition-all duration-200 hover:border-primary hover:bg-foreground/5 active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`cursor-pointer transition-all duration-300 ${
                    idx === currentIndex
                      ? "h-1.5 w-6 rounded-[3px] bg-primary"
                      : "h-1.5 w-1.5 rounded-full bg-foreground/25 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next photo"
              className="flex h-11 w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-foreground/30 text-primary transition-all duration-200 hover:border-primary hover:bg-foreground/5 active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Signature gold rule with central dot divider */}
        <div className="mx-auto my-12 flex max-w-xs items-center justify-center gap-3.5 px-6">
          <span className="h-[1px] w-20 max-w-[76px] flex-1 bg-primary/25" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="h-[1px] w-20 max-w-[76px] flex-1 bg-primary/25" />
        </div>
      </Reveal>
    </section>
  );
}
