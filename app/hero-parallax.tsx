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

      {/* Овца — мобиле сверху, десктоп снизу */}
      <div
        className="absolute right-0 top-[30%] h-[65%] sm:top-auto sm:bottom-[60px] sm:h-[82%]"
        style={{ transform: `translateX(-80px)` }}
      >
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
