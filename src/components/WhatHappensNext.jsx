const steps = [
  {
    number: '1',
    title: 'We Review Your Details',
    description:
      'We check your vehicle details and operating area to confirm suitability for our campaigns.',
  },
  {
    number: '2',
    title: 'We Give You A Call',
    description:
      "A quick call to answer any questions and confirm you're happy to proceed. No pressure, no commitment yet.",
  },
  {
    number: '3',
    title: 'Your Campaign Is Confirmed',
    description:
      'We book your wrap appointment, confirm your monthly fee and you start earning.',
  },
]

export default function WhatHappensNext() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-12">
          What Happens After You Register
        </h2>

        <div className="relative">
          {/* Dotted connecting line on desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px border-t-2 border-dashed border-orange-300"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-5 z-10 relative">
                  <span className="text-white text-2xl font-extrabold">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
