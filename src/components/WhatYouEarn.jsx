const statCards = [
  { value: '€140', label: 'Per month per campaign' },
  { value: '6 Months', label: 'Standard campaign length' },
  { value: '2 Campaigns', label: 'Possible per year' },
]

export default function WhatYouEarn() {
  return (
    <section className="w-full px-6 py-16 md:py-24" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">
          What You Earn
        </h2>

        <p className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-5">
          Up To €1,960 Per Year
        </p>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Earn a monthly fee for every campaign your vehicle carries, plus we
          compensate you for the day your car is being wrapped.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {statCards.map((card) => (
            <div
              key={card.value}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500"
            >
              <p className="text-3xl font-extrabold text-[#1a1a1a] mb-2">{card.value}</p>
              <p className="text-gray-500 text-sm font-medium">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
