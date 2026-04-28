import { MapPin, Wrench, ClipboardCheck } from 'lucide-react'

const badges = [
  { Icon: MapPin, label: 'Dublin Based' },
  { Icon: Wrench, label: 'Professional Installation' },
  { Icon: ClipboardCheck, label: 'Fully Managed Service' },
]

export default function AboutCabverts() {
  return (
    <section className="w-full px-6 py-16 md:py-24" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
          About Cabverts
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mx-auto mb-12">
          Cabverts is a Dublin-based taxi advertising platform connecting brands
          with professional taxi drivers across the city. We handle everything —
          from matching drivers with campaigns to coordinating the wrap and
          removal. You just drive.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
          {badges.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-[#1a1a1a] font-semibold text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
