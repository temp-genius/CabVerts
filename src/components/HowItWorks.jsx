const steps = [
  {
    number: '1',
    title: 'Register Your Interest',
    description:
      'Fill in the short form below and tell us about your vehicle and where you operate.',
  },
  {
    number: '2',
    title: 'We Match You With A Campaign',
    description:
      "When a brand campaign is available in your area, we'll contact you to confirm your place.",
  },
  {
    number: '3',
    title: 'Get Wrapped And Start Earning',
    description:
      'Your car gets professionally wrapped. You drive as normal and earn a monthly fee for the duration of the campaign.',
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center px-4">
              <span className="text-6xl font-extrabold text-orange-500 leading-none mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
