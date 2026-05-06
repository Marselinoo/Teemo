import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm">
      {/* Header */}
      <h2 className="text-2xl font-bold text-indigo-950 text-center mb-6">
        ❓ FAQ
      </h2>

      {/* FAQ List */}
      <div className="space-y-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                border border-slate-200
                rounded-2xl
                overflow-hidden
              "
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="
                  w-full
                  flex items-center justify-between
                  gap-3
                  text-left
                  p-4
                  bg-slate-50
                  hover:bg-slate-100
                  transition
                "
              >
                <span className="font-semibold text-slate-800 text-sm leading-relaxed">
                  {item.question}
                </span>

                <ChevronDown
                  size={18}
                  className={`
                    text-slate-500
                    shrink-0
                    transition-transform
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}