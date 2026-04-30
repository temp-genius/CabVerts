import { useState } from 'react'
import { ShieldCheck, CalendarDays, Car, Trash2, ChevronDown, CheckCircle2 } from 'lucide-react'
import { supabase } from './supabaseClient'
import cabvertsLogo from './assets/CabVerts_logo2.jpg'
import taxiWrap from './assets/taxi-wrap.png'

export default function App() {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    vehicleYear: '',
    ownershipType: '',
    daysPerWeek: '',
    operatingArea: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submittedFirstName, setSubmittedFirstName] = useState('')

  const faqs = [
    {
      question: 'Will the wrap damage my car?',
      answer:
        'No. Professional vinyl wraps are fully reversible. Applied and removed by certified installers with zero effect on your paintwork.',
    },
    {
      question: "Do I need my leasing or finance company's permission?",
      answer:
        "If you lease from a company like Ayvens or LeasePlan you may need written approval first. If you have finance or PCP you own the vehicle and no permission is needed. If you rent from a private owner we'll need to involve them. We'll guide you through all of this.",
    },
    {
      question: 'Can I still use my car normally?',
      answer:
        'Yes — completely. Same routes, same hours, same everything. Nothing changes except you earn an extra monthly fee on top of your fares.',
    },
    {
      question: 'When and how do I get paid?',
      answer:
        'Monthly, directly to your bank account, for the full duration of the campaign. Payment is made at the start of each month.',
    },
    {
      question: 'What if I want to leave a campaign early?',
      answer:
        "We ask all drivers to commit for the full campaign duration. We'll talk through the full terms when we contact you. There's no commitment at the registration stage.",
    },
  ]

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '15px',
    boxSizing: 'border-box',
    outline: 'none',
    background: '#fff',
  }

  const handleFocus = (event) => {
    event.target.style.borderColor = '#f97316'
  }

  const handleBlur = (event) => {
    event.target.style.borderColor = '#e5e7eb'
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    const { error } = await supabase.from('driver_leads').insert([
      {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        vehicle_make_model: formData.vehicleMakeModel,
        vehicle_year: Number(formData.vehicleYear),
        ownership_type: formData.ownershipType,
        days_per_week: formData.daysPerWeek,
        operating_area: formData.operatingArea,
      },
    ])

    if (error) {
      console.error(error)
      setSubmitError('Something went wrong — please try again shortly.')
      setIsSubmitting(false)
      return
    }

    const firstName = formData.fullName.trim().split(' ')[0] || 'there'
    setSubmittedFirstName(firstName)
    setIsSubmitting(false)
  }

  const timelineItem = (stepNumber, title, description, isFilled) => (
    <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
      <div
        style={{
          width: '38px',
          height: '38px',
          minWidth: '38px',
          borderRadius: '50%',
          border: isFilled ? '1px solid #f97316' : '2px solid #f97316',
          background: isFilled ? '#f97316' : '#ffffff',
          color: isFilled ? '#ffffff' : '#f97316',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '14px',
          zIndex: 1,
        }}
      >
        {stepNumber}
      </div>
      <div style={{ paddingBottom: '24px' }}>
        <div style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>{title}</div>
        <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{description}</div>
      </div>
    </div>
  )

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
      `}</style>

      <main style={{ fontFamily: 'Inter, sans-serif', background: '#ffffff', color: '#1a1a1a' }}>
        <nav
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: '#ffffff',
            borderBottom: '1px solid #f0f0f0',
            boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
            height: '60px',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img src={cabvertsLogo} alt="Cabverts" style={{ height: '36px', filter: 'none' }} />
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#how-it-works" style={{ fontSize: '13px', fontWeight: 600, color: '#555', textDecoration: 'none', padding: '0 14px' }}>How It Works</a>
            <a href="#what-you-earn" style={{ fontSize: '13px', fontWeight: 600, color: '#555', textDecoration: 'none', padding: '0 14px' }}>What You Earn</a>
            <a href="#whats-involved" style={{ fontSize: '13px', fontWeight: 600, color: '#555', textDecoration: 'none', padding: '0 14px' }}>Whats Involved</a>
            <a href="#about" style={{ fontSize: '13px', fontWeight: 600, color: '#555', textDecoration: 'none', padding: '0 14px' }}>About</a>
            <a href="#faqs" style={{ fontSize: '13px', fontWeight: 600, color: '#555', textDecoration: 'none', padding: '0 14px' }}>FAQs</a>
            <a
              href="#register"
              style={{
                background: '#f97316',
                color: '#ffffff',
                padding: '8px 18px',
                borderRadius: '50px',
                fontWeight: 700,
                marginLeft: '8px',
                textDecoration: 'none',
                fontSize: '13px',
              }}
            >
              Register
            </a>
          </div>
        </nav>

        <section style={{ background: '#ffffff', padding: '56px 24px 64px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <img
              src={cabvertsLogo}
              alt="Cabverts"
              style={{ height: '80px', display: 'block', margin: '0 auto 24px', filter: 'none', objectFit: 'contain' }}
            />
            <div style={{ fontSize: '12px', color: '#f97316', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
              DUBLIN TAXI DRIVERS
            </div>
            <h1 style={{ fontSize: 'clamp(32px,8vw,48px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-1px', lineHeight: 1.1, margin: 0 }}>
              Earn up to <span style={{ color: '#f97316' }}>€1,680</span> this year.
            </h1>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.6, maxWidth: '440px', margin: '20px auto 32px' }}>
              Display brand ads on your taxi. Drive as normal. Get paid €140 every month — plus we pay you for the day your car is wrapped.
            </p>
            <a
              href="#register"
              style={{
                background: '#f97316',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '16px',
                padding: '14px 28px',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Register Your Interest →
            </a>
          </div>
        </section>

        <section>
          <img src={taxiWrap} alt="Taxi wrap" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', background: '#111' }} />
          <div style={{ background: '#1a1a1a', padding: '10px 24px', color: '#888', fontSize: '12px', textAlign: 'center' }}>
            Example of a full wrap campaign — NTA compliant with mandatory taxi decal visible
          </div>
        </section>

        <section id="how-it-works" style={{ background: '#ffffff', padding: '64px 24px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ color: '#f97316', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>HOW IT WORKS</div>
            <h2 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.5px', margin: '10px 0 28px' }}>
              Three steps. That's it.
            </h2>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '19px', top: 0, bottom: '24px', width: '2px', background: '#f0f0f0' }} />
              {timelineItem('1', 'Register below', 'Fill in the short form and tell us about your vehicle and where you operate. Takes 2 minutes.', false)}
              {timelineItem('2', 'We notify you', "When a brand campaign is available in your area you'll receive a text and email notification to confirm your place. No phone calls.", false)}
              {timelineItem('3', 'Get wrapped and start earning', 'One day for the wrap — we compensate you for it. Then earn a monthly fee for the full duration of the campaign.', true)}
            </div>
          </div>
        </section>

        <section id="what-you-earn" style={{ background: '#1a1a1a', padding: '64px 24px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ color: '#f97316', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>WHAT YOU EARN</div>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(36px,8vw,52px)', fontWeight: 800, letterSpacing: '-1px', margin: '10px 0 18px' }}>
              Up to €1,680 per year.
            </h2>
            <p style={{ color: '#888', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
              Earn €140 every month for every campaign your vehicle carries. Campaigns run for 6 to 12 months. On top of your monthly fee we also compensate you for the day your car is being wrapped.
            </p>
          </div>
        </section>

        <section id="whats-involved" style={{ background: '#fafafa', padding: '64px 24px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ color: '#f97316', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>ZERO HASSLE</div>
            <h2 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.5px', margin: '10px 0 28px' }}>
              Less involved than you think.
            </h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', minWidth: '36px', background: '#fff7ed', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}><ShieldCheck size={18} /></div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Zero risk to your paintwork</div>
                  <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>Professional vinyl — fully reversible. Applied and removed by certified installers, guaranteed.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', minWidth: '36px', background: '#fff7ed', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}><CalendarDays size={18} /></div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>One day off — we pay you for it</div>
                  <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>Book your wrap appointment at a time that suits. We compensate you for that day's lost earnings.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', minWidth: '36px', background: '#fff7ed', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}><Car size={18} /></div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Drive exactly as normal</div>
                  <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>No route changes, no restrictions. Same hours, same areas. Nothing changes.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', minWidth: '36px', background: '#fff7ed', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}><Trash2 size={18} /></div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Free removal at campaign end</div>
                  <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>When the campaign finishes we arrange and pay for the wrap to be professionally removed.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" style={{ background: '#ffffff', padding: '64px 24px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ color: '#f97316', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>ABOUT CABVERTS</div>
            <h2 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.5px', margin: '10px 0 16px' }}>
              Dublin's taxi advertising platform.
            </h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, margin: 0 }}>
              Cabverts connects brands with professional Dublin taxi drivers. We handle everything — matching drivers with campaigns, coordinating the wrap and removal, and managing payments. You just drive.
            </p>
          </div>
        </section>

        <section style={{ background: '#fafafa', padding: '64px 24px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ color: '#f97316', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>THE PROCESS</div>
            <h2 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.5px', margin: '10px 0 28px' }}>
              What happens after you register.
            </h2>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '19px', top: 0, bottom: '24px', width: '2px', background: '#f0f0f0' }} />
              {timelineItem('1', 'We review your details', 'We check your vehicle details and operating area to confirm suitability for our campaigns.', false)}
              {timelineItem('2', 'We notify you of a campaign', "When a suitable brand campaign is available in your area you'll receive a text and email notification. You confirm your place directly.", false)}
              {timelineItem('3', 'Campaign confirmed — you start earning', 'We book your wrap appointment and you start earning from day one. Your monthly payment is fixed and paid directly to your bank account.', true)}
            </div>
          </div>
        </section>

        <section id="faqs" style={{ background: '#ffffff', padding: '64px 24px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ color: '#f97316', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>GOT QUESTIONS</div>
            <h2 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.5px', margin: '10px 0 20px' }}>
              Frequently asked questions.
            </h2>
            <div>
              {faqs.map((item, index) => {
                const isOpen = faqOpenIndex === index
                return (
                  <div key={item.question} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        border: 'none',
                        background: 'transparent',
                        padding: '18px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: '15px', color: '#1a1a1a', paddingRight: '16px' }}>{item.question}</span>
                      <ChevronDown size={18} style={{ color: '#666', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                    </button>
                    {isOpen ? <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, margin: '0 0 18px' }}>{item.answer}</p> : null}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="register" style={{ background: '#fafafa', padding: '64px 24px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ color: '#f97316', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>JOIN THE FLEET</div>
            <h2 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.5px', margin: '10px 0 8px' }}>
              Register your interest.
            </h2>
            <p style={{ fontSize: '14px', color: '#888', margin: '0 0 32px' }}>Takes less than 2 minutes. No commitment at this stage.</p>

            {submittedFirstName ? (
              <div style={{ background: '#fff', borderRadius: '14px', padding: '28px', textAlign: 'center' }}>
                <CheckCircle2 size={52} color="#f97316" style={{ marginBottom: '10px' }} />
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.5 }}>
                  Thanks {submittedFirstName}! We've received your details and we'll be in touch shortly.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
                <input name="fullName" type="text" required placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} />
                <input name="phone" type="tel" required placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} />
                <input name="email" type="email" required placeholder="Email Address" value={formData.email} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} />
                <input name="vehicleMakeModel" type="text" required placeholder="e.g. Skoda Octavia" value={formData.vehicleMakeModel} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} />
                <input name="vehicleYear" type="number" required min="2015" max="2026" placeholder="Vehicle Year" value={formData.vehicleYear} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} />

                <select name="ownershipType" required value={formData.ownershipType} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle}>
                  <option value="">Please select...</option>
                  <option value="I own it — bought outright or on finance/PCP">I own it — bought outright or on finance/PCP</option>
                  <option value="I lease it from a company e.g. Ayvens, LeasePlan">I lease it from a company e.g. Ayvens, LeasePlan</option>
                  <option value="I rent it from a private owner or another driver">I rent it from a private owner or another driver</option>
                </select>

                <select name="daysPerWeek" required value={formData.daysPerWeek} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle}>
                  <option value="">Please select...</option>
                  <option value="1–3 days">1–3 days</option>
                  <option value="4–5 days">4–5 days</option>
                  <option value="6–7 days">6–7 days</option>
                </select>

                <select name="operatingArea" required value={formData.operatingArea} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle}>
                  <option value="">Please select...</option>
                  <option value="City Centre">City Centre</option>
                  <option value="North Dublin">North Dublin</option>
                  <option value="South Dublin">South Dublin</option>
                  <option value="West Dublin">West Dublin</option>
                  <option value="Airport Corridor">Airport Corridor</option>
                  <option value="Mix of all areas">Mix of all areas</option>
                </select>

                <p style={{ color: '#999', fontSize: '12px', margin: '2px 0 0' }}>
                  Don't worry — most ownership arrangements are compatible with Cabverts. We'll confirm eligibility when we contact you.
                </p>

                {submitError ? <p style={{ color: '#dc2626', fontSize: '14px', margin: '0' }}>Something went wrong — please try again shortly.</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    background: isSubmitting ? '#fdba74' : '#f97316',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: 800,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  Register My Interest →
                </button>
              </form>
            )}
          </div>
        </section>

        <footer style={{ background: '#1a1a1a', padding: '40px 24px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <img src={cabvertsLogo} alt="Cabverts" style={{ height: '48px', filter: 'none', borderRadius: '6px', marginBottom: '16px' }} />
            <div style={{ color: '#666', fontSize: '13px' }}>© 2025 Cabverts | Moving Media | Dublin, Ireland</div>
            <div style={{ color: '#444', fontSize: '11px', marginTop: '16px' }}>
              Cabverts is a trading name. All campaigns subject to availability.
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
