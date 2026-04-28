export default function Hero() {
  const handleScrollToForm = () => {
    const formSection = document.getElementById('register')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="w-full px-6 py-16 md:py-24"
      style={{ background: 'linear-gradient(to right, #f97316, #ea580c)' }}
    >
      <div className="max-w-3xl mx-auto text-white">
        {/* Logo */}
        <div className="mb-10">
          <span className="text-3xl font-bold text-white">CabVerts</span>
          <p className="text-white/80 text-sm mt-1 font-medium tracking-wide">
            Get Paid To Drive
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
          Earn Up To €1,960 A Year — Just By Driving
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
          Cabverts pays Dublin taxi drivers a monthly fee to display brand
          advertising on their vehicle. You drive as normal. We handle
          everything else.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScrollToForm}
          className="inline-block bg-white text-orange-500 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all duration-200 cursor-pointer"
        >
          Register Your Interest
        </button>
      </div>
    </section>
  )
}
