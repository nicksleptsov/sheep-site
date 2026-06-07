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
          src="/images/cover2.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Овца */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[48%] h-[44%] sm:left-auto sm:right-0 sm:-translate-x-20 sm:top-auto sm:bottom-[60px] sm:h-[82%]">
        <Image
          src="/images/cover1.png"
          alt="Черноголовая овца"
          width={1200}
          height={1200}
          className="h-full w-auto object-contain object-top sm:object-bottom"
          priority
        />
      </div>
    </>
  );
}
