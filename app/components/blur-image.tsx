"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function BlurImage({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let transitionTimeout: NodeJS.Timeout;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      // @ts-ignore
      transitionTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 5000); // Matches animation duration
    }, 10000); // Total time between transitions

    return () => {
      clearInterval(interval);
      clearTimeout(transitionTimeout);
    };
  }, [images.length]);

  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className=" w-full aspect-[2/1] object-cover max-h-[55vh] relative overflow-hidden">
      {/* Current Image */}
      <Image
        key={currentIndex}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className={`object-cover ${isTransitioning ? "animate-blur-out" : ""}`}
        priority
      />

      {/* Next Image */}
      {isTransitioning && (
        <Image
          key={nextIndex}
          src={images[nextIndex].src}
          alt={images[nextIndex].alt}
          fill
          className="object-cover animate-blur-in"
        />
      )}
    </div>
  );
}
