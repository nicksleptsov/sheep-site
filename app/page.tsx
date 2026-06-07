import Image from "next/image";
import BreedTabs from "./breed-tabs";
import HeroParallax from "./hero-parallax";
import ContactForm from "./contact-form";

export default function Home() {
  return (
    <>
      {/* Навигация */}
      <nav className="bg-[#faf9f5] border-b border-[#e6dfd8] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-20 sm:h-24 flex items-center justify-between gap-4">
          <a href="/" className="shrink-0 flex items-center">
            <Image
              src="/images/logo.png"
              alt="Овечки Подлужья"
              width={1261}
              height={627}
              className="h-14 w-auto sm:h-20 object-contain"
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "О ферме",      href: "#about"    },
              { label: "Что продаём", href: "#products" },
              { label: "Порода",       href: "#breed"    },
              { label: "Как купить",  href: "#how"      },
              { label: "Контакты",    href: "#contacts" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[#6c6a64] hover:text-[#141413] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center bg-[#cc785c] hover:bg-[#a9583e] text-white text-[14px] font-medium px-5 py-2 rounded-full transition-colors"
          >
            Оставить заявку
          </a>
        </div>
      </nav>

      <main className="text-[#141413]">

        {/* Градиентная обёртка: Hero + О ферме + Строка */}
        <div style={{ background: "radial-gradient(ellipse at 20% 50%, #f0e0cc 0%, #f7ede4 45%, #faf9f5 80%)" }}>

        {/* 1. Hero — МОБИЛЕ */}
        <div className="sm:hidden flex flex-col relative" style={{ height: "calc(100dvh - 80px)" }}>
          {/* Фон */}
          <div className="absolute inset-0">
            <Image src="/images/cover2.png" alt="" fill className="object-cover object-center" priority />
          </div>
          {/* Карточка */}
          <div className="relative z-10 p-4 pt-10 shrink-0">
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 flex flex-col text-left">
              <h1 className="font-display font-black text-[36px] leading-[1.1] tracking-[-0.02em] text-[#141413] mb-3">
                Черноголовая овца
              </h1>
              <p className="text-[#3d3d3a] text-[14px] leading-[1.6] mb-4">
                Племенное поголовье и свежее мясо от фермерского хозяйства в Коломне
              </p>
              <a href="#contact" className="inline-flex items-center justify-center bg-[#cc785c] hover:bg-[#a9583e] text-white text-[14px] font-medium px-5 py-2 rounded-full transition-colors self-start">
                Связаться с фермой
              </a>
            </div>
          </div>
          {/* Овца — занимает всё оставшееся место */}
          <div className="relative z-10 flex-1 flex items-end justify-center overflow-hidden">
            <Image src="/images/cover1.png" alt="Черноголовая овца" width={1200} height={1200} className="h-[145%] w-auto object-contain object-bottom -translate-x-16" priority />
          </div>
          {/* Бегущая строка */}
          <div className="relative z-20 bg-[#cc785c] overflow-hidden py-4 shrink-0">
            <div className="animate-marquee flex whitespace-nowrap w-max">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="inline-flex items-center font-display font-black uppercase tracking-[0.05em] text-white text-[17px]">
                  Калининградская селекция<span className="mx-12" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 1. Hero — ДЕСКТОП */}
        <section className="hidden sm:block relative overflow-hidden" style={{ height: "90vh", minHeight: "600px" }}>
          <HeroParallax />
          <div className="relative h-full flex items-center px-48">
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 w-[360px] flex flex-col text-left">
              <h1 className="font-display font-black text-[40px] leading-[1.1] tracking-[-0.02em] text-[#141413] mb-3">
                Черноголовая овца
              </h1>
              <p className="text-[#3d3d3a] text-[15px] leading-[1.6] mb-5">
                Племенное поголовье и свежее мясо от фермерского хозяйства в Коломне
              </p>
              <a href="#contact" className="inline-flex items-center justify-center bg-[#cc785c] hover:bg-[#a9583e] text-white text-[14px] font-medium px-5 py-2 rounded-full transition-colors self-start">
                Связаться с фермой
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-[#cc785c] overflow-hidden py-4 z-20">
            <div className="animate-marquee flex whitespace-nowrap w-max">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="inline-flex items-center font-display font-black uppercase tracking-[0.05em] text-white text-[17px]">
                  Калининградская селекция<span className="mx-12" />
                </span>
              ))}
            </div>
          </div>
        </section>

        </div>{/* конец градиентной обёртки hero */}
        {/* Градиент под О ферме + Что продаём */}
        <div style={{ background: "radial-gradient(ellipse at 80% 30%, #f0e0cc 0%, #f7ede4 45%, #faf9f5 80%)" }}>

        {/* 2. О ферме */}
        <section id="about" className="pt-20 pb-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/80 shadow-[0_8px_32px_rgba(200,180,160,0.15)] p-10 sm:p-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {/* Левая колонка */}
                <div className="flex flex-col">
                  <h2 className="font-display font-black text-[28px] sm:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#141413] mb-4">
                    Семейная ферма<br />в Коломне
                  </h2>
                  <p className="text-[#6c6a64] text-[16px] leading-[1.6] mb-8">
                    Занимаемся разведением овец черноголовой породы<br />из Калининградской области: от ягнения<br />до реализации. Всё поголовье — собственное,<br />без посредников.
                  </p>
                  <a
                    href="#contacts"
                    className="inline-flex items-center justify-center self-center sm:self-start bg-[#141413] hover:bg-[#2e2c28] text-white text-[14px] font-medium px-6 py-2.5 rounded-full transition-colors"
                  >
                    Узнать о ферме
                  </a>
                </div>
                {/* Правая колонка */}
                <div className="divide-y divide-[#e6dfd8]">
                  <div className="pb-6">
                    <h3 className="text-[18px] font-bold text-[#141413] mb-2">Собственное поголовье</h3>
                    <p className="text-[16px] text-[#6c6a64] leading-[1.55]">Покупаете напрямую у фермера — никаких перекупщиков и наценок.</p>
                  </div>
                  <div className="py-6">
                    <h3 className="text-[18px] font-bold text-[#141413] mb-2">Натуральное выращивание</h3>
                    <p className="text-[16px] text-[#6c6a64] leading-[1.55]">Без стимуляторов роста. Свежий воздух, натуральные корма, открытые площадки.</p>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-[18px] font-bold text-[#141413] mb-2">Контроль качества</h3>
                    <p className="text-[16px] text-[#6c6a64] leading-[1.55]">Знаем каждое животное от рождения — здоровье, характер, продуктивность.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Что продаём */}
        <section id="products" className="pt-4 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* 01 — Овцы */}
              <div className="group bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl p-10 flex flex-col transition-all duration-300 ease-out hover:bg-white/90 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(20,20,19,0.10),0_4px_12px_rgba(20,20,19,0.05)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-black text-[22px] text-[#141413]">01</span>
                  <span className="font-display font-bold text-[15px] tracking-[0.1em] uppercase text-[#8e8b82]">Живой скот</span>
                </div>
                <div className="w-full h-px bg-[#e6dfd8] group-hover:bg-[#c4b9a8] transition-colors duration-300 mb-6" />
                <h3 className="font-display font-black text-[26px] sm:text-[30px] leading-[1.15] text-[#141413] mb-2">
                  Овцы для разведения<br />и хозяйства
                </h3>
                <p className="text-[15px] text-[#8e8b82] mb-6">Племенные бараны, матки и молодняк</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Выраженные мясные формы",
                    "Скороспелость (быстрый набор веса)",
                    "Спокойный характер, хороший иммунитет",
                    "Адаптация к условиям Центральной России",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[16px] text-[#6c6a64] leading-[1.6]">
                      <span className="w-2 h-2 rounded-full bg-[#c4997e] shrink-0 mt-[5px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full h-px bg-[#e6dfd8] mb-4 mt-auto" />
                <p className="text-[15px] text-[#8e8b82]">Подберём животное под ваши цели</p>
              </div>

              {/* 02 — Мясо */}
              <div className="group bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl p-10 flex flex-col transition-all duration-300 ease-out hover:bg-white/90 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(20,20,19,0.10),0_4px_12px_rgba(20,20,19,0.05)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-black text-[22px] text-[#141413]">02</span>
                  <span className="font-display font-bold text-[15px] tracking-[0.1em] uppercase text-[#8e8b82]">Мясо</span>
                </div>
                <div className="w-full h-px bg-[#e6dfd8] group-hover:bg-[#c4b9a8] transition-colors duration-300 mb-6" />
                <h3 className="font-display font-black text-[26px] sm:text-[30px] leading-[1.15] text-[#141413] mb-2">
                  Фермерское мясо
                </h3>
                <p className="text-[15px] text-[#8e8b82] mb-6">Свежая баранина напрямую с фермы</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Туши целиком",
                    "Разделка по частям",
                    "Подбор под ваш запрос",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[16px] text-[#6c6a64] leading-[1.6]">
                      <span className="w-2 h-2 rounded-full bg-[#c4997e] shrink-0 mt-[5px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full h-px bg-[#e6dfd8] mb-4 mt-auto" />
                <p className="text-[15px] text-[#8e8b82]">Подходит для домашнего стола и ресторанной кухни</p>
              </div>

            </div>
          </div>
        </section>

        </div>{/* конец градиента О ферме + Что продаём */}

        {/* 4. Почему порода — dark premium */}
        <section id="breed" className="bg-[#181715] py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
              <div className="flex items-center justify-center pt-10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-sm object-contain"
                  style={{ background: "transparent", mixBlendMode: "screen" }}
                >
                  <source src="/images/sheepvideo_safari_small.mov" type="video/mp4; codecs=hvc1" />
                  <source src="/images/sheepvideo_final.webm" type="video/webm" />
                </video>
              </div>
              <div>
                <h2 className="font-display font-black text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.015em] text-[#faf9f5] mb-5">
                  Черноголовая овца Калининградской селекции
                </h2>
                <p className="text-[#a09d96] text-[16px] leading-[1.55] mb-10">
                  Порода отличается выраженными мясными формами и скороспелостью. Хороший иммунитет, спокойный характер, зимостойкость. Мясо — диетическое, без специфического вкуса и запаха.
                </p>
                <BreedTabs />
              </div>
            </div>
          </div>
        </section>

        {/* Градиент Преимущества + Как купить */}
        <div style={{ background: "radial-gradient(ellipse at 30% 30%, #f0e0cc 0%, #f7ede4 45%, #faf9f5 80%)" }}>

        {/* 5. Преимущества — canvas */}
        <section className="pt-20 pb-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-[28px] sm:text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-[#141413] mb-12">
              Преимущества
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ярко выраженные мясные формы и скороспелость",
                "Высокое качество мяса в любом возрасте",
                "Комолые — без рогов, безопасны в обращении",
                "Флегматичный характер, нет агрессии",
                "Хороший иммунитет, развитый материнский инстинкт",
                "Круглогодичное содержание на открытом воздухе",
                "Полиэстричность — способность входить в охоту, оплодотворяться круглый год",
                "Адаптированы к климату Калининграда и центральной России",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-white/70 backdrop-blur-xl border border-white/60 rounded-xl px-6 py-5">
                  <span className="w-2 h-2 rounded-full bg-[#cc785c] shrink-0" />
                  <span className="text-[#3d3d3a] text-[17px] leading-[1.55]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Как купить */}
        <section id="how" className="pt-8 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-[28px] sm:text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-[#141413] mb-12 max-w-xl">
              Как купить
            </h2>
            <div className="flex flex-col sm:flex-row items-stretch gap-0">
              {[
                { step: "01", text: <>Позвоните нам<br />или оставьте заявку<br />на сайте</>,                    bg: "bg-[#cc785c]", text_color: "text-white",        num_color: "text-white/60" },
                { step: "02", text: <>Уточняем наличие животных<br />объём мяса<br />или цену</>,              bg: "bg-[#e8a98a]", text_color: "text-[#3d1f0f]",    num_color: "text-[#3d1f0f]/50" },
                { step: "03", text: <>Согласовываем конкретное животное или объём</>,                          bg: "bg-[#a09278]", text_color: "text-[#faf9f5]",    num_color: "text-white/50" },
                { step: "04", text: <>Подбираем удобные дату и время самовывоза</>,                          bg: "bg-[#c8bfb2]", text_color: "text-[#3d3d3a]",    num_color: "text-[#6c6a64]" },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex flex-col sm:contents">
                  <div className={`${item.bg} rounded-2xl p-7 flex flex-col flex-1 relative overflow-hidden min-h-[120px] sm:min-h-0`}>
                    <span className="absolute -bottom-6 -right-2 font-display font-black text-[140px] leading-none select-none pointer-events-none opacity-10 text-current">
                      {parseInt(item.step)}
                    </span>
                    <p className={`${item.text_color} text-[17px] leading-[1.55] relative`}>{item.text}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center justify-center py-3 sm:py-0 sm:px-1 shrink-0 sm:self-center">
                      {/* Мобиле — вниз */}
                      <svg className="sm:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="#8e8b82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {/* Десктоп — вправо */}
                      <svg className="hidden sm:block" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M14 7l5 5-5 5" stroke="#8e8b82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        </div>{/* конец градиента Преимущества + Как купить */}

        {/* 8. Coral CTA */}
        <section className="bg-[#cc785c] py-10 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-[28px] sm:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] text-white mb-4">
                  Узнайте наличие прямо сейчас
                </h2>
                <p className="text-white/70 text-[20px] leading-[1.55] mb-8">
                  Свяжитесь с нами — расскажем об актуальном<br />наличии овец и мяса напрямую от фермера.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-[#faf9f5] hover:bg-[#efe9de] text-[#141413] text-[14px] font-medium px-5 py-3 rounded-full transition-colors"
                >
                  Оставить заявку
                </a>
              </div>
              <div className="flex justify-center items-end">
                <Image
                  src="/images/sheep3.png"
                  alt="Овца"
                  width={600}
                  height={600}
                  className="w-full max-w-[220px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. Форма — canvas */}
        <section id="contact" className="py-20 px-4" style={{ background: "radial-gradient(ellipse at 20% 50%, #f5e8dc 0%, #f8f0ea 55%, #faf9f5 85%)" }}>
          <div className="max-w-lg mx-auto">
            <h2 className="font-display text-[28px] sm:text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-[#141413] mb-2">
              Оставить заявку
            </h2>
            <p className="text-[#6c6a64] text-[15px] mb-8 leading-[1.55]">
              Заполните форму — свяжемся в течение дня
            </p>
            <ContactForm />
          </div>
        </section>

        {/* 10. Контакты — white */}
        <section id="contacts" className="bg-[#181715] py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-[28px] sm:text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-[#faf9f5] mb-10">
              Контакты
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="divide-y divide-[#2e2c28]">
                {[
                  { label: "Телефон",      value: "+7 (925) 161-86-33" },
                  { label: "Адрес фермы", value: "Московская область, городской округ Коломна,\nквартал № 0050117, д. 1" },
                  { label: "Время работы", value: "Ежедневно с 09:00 до 18:00" },
                ].map((item) => (
                  <div key={item.label} className="py-5">
                    <p className="font-display text-[11px] font-bold tracking-[0.08em] uppercase text-[#6c6a64] mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#a09d96] font-medium text-[15px] whitespace-pre-line">{item.value}</p>
                  </div>
                ))}
                <div className="py-5">
                  <p className="font-display text-[11px] font-bold tracking-[0.08em] uppercase text-[#6c6a64] mb-1">
                    Соцсети
                  </p>
                  <a
                    href="https://vk.com/ovechki_podluzhya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#a09d96] hover:text-[#faf9f5] font-medium text-[15px] transition-colors"
                  >
                    <Image src="/images/VK Logo.png" alt="VK" width={20} height={20} className="rounded-sm" />
                    Сообщество VK
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#2e2c28] min-h-56">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=38.731841%2C55.194527&z=15&pt=38.731841%2C55.194527%2Cpm2rdm"
                  width="100%"
                  height="280"
                  frameBorder="0"
                  allowFullScreen
                  title="Расположение фермы на карте"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer — dark */}
      <footer className="bg-[#181715] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#252320]">
            <p className="text-[#faf9f5] font-medium text-[15px]">Овцеводческое хозяйство</p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "О ферме",     href: "#about"    },
                { label: "Что продаём", href: "#products" },
                { label: "Порода",      href: "#breed"    },
                { label: "Как купить",  href: "#how"      },
                { label: "Контакты",    href: "#contacts" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#a09d96] hover:text-[#faf9f5] text-[13px] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 pt-6">
            <p className="text-[#a09d96] text-[15px] font-medium">Ферма «Овечки Подлужья»</p>
            <p className="text-[#6c6a64] text-[14px]">КФХ Слепцов А.Н.</p>
            <p className="text-[#6c6a64] text-[14px]">ИНН 504013539753</p>
            <p className="text-[#6c6a64] text-[14px]">© Все права защищены</p>
          </div>
        </div>
      </footer>
    </>
  );
}
