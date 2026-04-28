import { Shield, Calendar, Car, Trash2 } from 'lucide-react'

const items = [
  {
    Icon: Shield,
    title: 'Zero Risk To Your Paintwork',
    description:
      'Your car is professionally wrapped by a certified installer. Fully reversible — no damage to your paintwork, guaranteed.',
  },
  {
    Icon: Calendar,
    title: 'One Day Off The Road',
    description:
      "We book your wrap appointment at a time that suits you and compensate you for that day's lost earnings.",
  },
  {
    Icon: Car,
    title: 'Drive Exactly As Normal',
    description:
      'No route changes, no restrictions. Drive your normal hours in your normal areas. Nothing changes.',
  },
  {
    Icon: Trash2,
    title: 'Free Removal At Campaign End',
    description:
      'When the campaign finishes, we arrange and pay for the wrap to be professionally removed.',
  },
]

export default function WhatsInvolved() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
            What&apos;s Involved
          </h2>
          <p className="text-gray-500 text-lg">Less than you think.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map(({ Icon, title, description }) => (
            <div key={title} className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
