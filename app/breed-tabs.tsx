"use client";
import { useState } from "react";

const tabs = [
  {
    label: "Вес",
    content: "Бараны в среднем 85 кг., крупные до 120 кг. Матки 55 кг., крупные до 80 кг.",
  },
  {
    label: "Телосложение",
    content: "Крепкая конституция, длинное бочкообразное туловище, широкая грудь, прямые широко расставленные ноги, хорошо развитая мускулатура, ярко выраженные мясные формы.",
  },
  {
    label: "Шерсть",
    content: "Белая рунная по туловищу, голова и ноги чёрные. Руно штапельного строения, однородное, полутонкая.",
  },
  {
    label: "Скороспелость",
    content: "Ягнята рождаются ~5 кг. В 4 месяца баранчики 29 кг, ярки 27 кг.",
  },
  {
    label: "Плодовитость",
    content: "1-й год 110%, 2-й год 140%, 3-й год 170%.",
  },
  {
    label: "Мясо",
    content: "Диетическое, без запаха и вкуса, мраморное, напоминает телятину. Качество не зависит от возраста.",
  },
  {
    label: "Молочность",
    content: "Высокая молочность, лактация до 6 месяцев.",
  },
];

export default function BreedTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
              active === i
                ? "bg-[#faf9f5] text-[#141413]"
                : "bg-[#252320] text-[#a09d96] hover:bg-[#2e2c28] hover:text-[#faf9f5]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-[#252320] border border-[#2e2c28] rounded-2xl p-8">
        <p className="text-[#faf9f5] text-[17px] leading-[1.7]">{tabs[active].content}</p>
      </div>
    </div>
  );
}
