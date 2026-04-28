import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Will the wrap damage my car?',
    answer:
      'No. Professional vinyl wraps are fully reversible. The wrap is applied and removed by certified installers and will not affect your paintwork in any way.',
  },
  {
    question: "Do I need my leasing or finance company's permission?",
    answer:
      "If you lease your vehicle from a company like Ayvens or LeasePlan you may need written approval from them before proceeding. If you have finance or PCP on your car you own the vehicle and no permission is needed. If you rent your taxi from a private owner, we'll need to involve them in the conversation. We'll guide you through all of this when we call you.",
  },
  {
    question: 'Can I still use my car normally during the campaign?',
    answer:
      'Yes — completely. Same routes, same hours, same everything. Nothing about your working day changes except you earn an extra monthly fee on top of your normal income.',
  },
  {
    question: 'How long does the wrap take to apply?',
    answer:
      'The wrap installation typically takes one full day. We book you in at a time that suits your schedule and compensate you for that day so you lose no income.',
  },
  {
    question: 'What vehicles are eligible?',
    answer:
      'We accept saloon cars, estates, and MPVs that are actively licensed as Dublin taxis. Your vehicle should generally be less than 8 years old and in good overall condition. We will confirm suitability when we review your details.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1a1a1a] pr-4 text-base md:text-lg">
          {question}
        </span>
        {open ? (
          <ChevronUp className="flex-shrink-0 w-5 h-5 text-orange-500" />
        ) : (
          <ChevronDown className="flex-shrink-0 w-5 h-5 text-orange-500" />
        )}
      </button>

      {open && (
        <div className="pb-5">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  return (
    <section className="w-full px-6 py-16 md:py-24" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="bg-white rounded-2xl shadow-sm px-6 md:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
