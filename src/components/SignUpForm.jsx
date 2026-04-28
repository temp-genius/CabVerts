import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const initialForm = {
  full_name: '',
  email: '',
  phone: '',
  vehicle_make_model: '',
  vehicle_year: '',
  operating_area: '',
  pco_licence: '',
  consent: false,
}

export default function SignUpForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const { error } = await supabase.from('driver_signups').insert([
        {
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          vehicle_make_model: form.vehicle_make_model,
          vehicle_year: form.vehicle_year ? parseInt(form.vehicle_year, 10) : null,
          operating_area: form.operating_area,
          pco_licence: form.pco_licence,
        },
      ])

      if (error) throw error
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err?.message || 'Something went wrong. Please try again or contact us directly.'
      )
    }
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1a1a1a] text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition'

  const labelClass = 'block text-sm font-semibold text-[#1a1a1a] mb-1'

  return (
    <section
      id="register"
      className="w-full px-6 py-16 md:py-24"
      style={{ background: 'linear-gradient(to right, #f97316, #ea580c)' }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Register Your Interest
          </h2>
          <p className="text-white/85 text-lg">
            Fill in the form below and we&apos;ll be in touch once a campaign is
            available in your area.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
          {status === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Thanks for registering!
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;ve received your details. We&apos;ll be in touch when a
                campaign is available in your area. Keep an eye on your inbox and
                phone.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-orange-500 font-semibold hover:underline text-sm"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="full_name" className={labelClass}>
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.full_name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+353 87 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Vehicle Make & Model */}
                <div>
                  <label htmlFor="vehicle_make_model" className={labelClass}>
                    Vehicle Make &amp; Model <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="vehicle_make_model"
                    name="vehicle_make_model"
                    type="text"
                    required
                    placeholder="e.g. Toyota Prius"
                    value={form.vehicle_make_model}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Vehicle Year */}
                <div>
                  <label htmlFor="vehicle_year" className={labelClass}>
                    Vehicle Year <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="vehicle_year"
                    name="vehicle_year"
                    type="number"
                    required
                    min="2000"
                    max={new Date().getFullYear() + 1}
                    placeholder="e.g. 2021"
                    value={form.vehicle_year}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Operating Area */}
                <div className="sm:col-span-2">
                  <label htmlFor="operating_area" className={labelClass}>
                    Main Operating Area <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="operating_area"
                    name="operating_area"
                    type="text"
                    required
                    placeholder="e.g. Dublin City Centre, Dublin Airport"
                    value={form.operating_area}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* PCO / SPSV Licence Number */}
                <div className="sm:col-span-2">
                  <label htmlFor="pco_licence" className={labelClass}>
                    SPSV Licence Number <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="pco_licence"
                    name="pco_licence"
                    type="text"
                    placeholder="Your NTA SPSV licence number"
                    value={form.pco_licence}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Consent */}
                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      name="consent"
                      type="checkbox"
                      required
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-orange-500 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-600">
                      I agree to be contacted by Cabverts regarding driver
                      opportunities. I understand my data will be stored securely
                      and used only for this purpose. <span className="text-orange-500">*</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Error */}
              {status === 'error' && (
                <div className="mt-4 flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  'Register My Interest'
                )}
              </button>

              <p className="mt-4 text-center text-xs text-gray-400">
                No spam. No commitment. We&apos;ll only be in touch when we have
                something for you.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
