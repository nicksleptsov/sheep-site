"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Фон — cover2.png (медленно уходит вверх) */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)`, willChange: "transform" }}
      >
        <Image
          src="/images/cover2-v2.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Овца — только десктоп */}
      <div className="hidden sm:block absolute right-0 bottom-[60px] h-[82%] -translate-x-20">
        <Image
          src="/images/cover1.png"
          alt="Черноголовая овца"
          width={1200}
          height={1200}
          className="h-full w-auto object-contain object-bottom"
          priority
        />
      </div>
    </>
  );
}
