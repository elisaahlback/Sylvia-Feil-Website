import { Link } from 'react-router-dom'
import SignetOriginal from '.././assets/Signet-Original.svg'

function LandingPage() {

    return (
      <>
      <div className="py-30 sm:pt-40 flex flex-col items-center justify-center bg-gradient-to-t from-[#D2F4F6] to-light px-4" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className="w-full max-w-6xl mx-auto text-center">
          <div className="flex justify-center fade-up fade-delay-1">
            <img src={SignetOriginal} className="h-29 md:h-29" alt="Sylvia signet" />
          </div>
          <h1 className="text-sm md:text-sm font-bold text-ocean mb-2 fade-up fade-delay-2">
            Wissenschaft sichtbar machen – verständlich, kreativ & digital
          </h1>
          <p className="text-lg text-ocean opacity-80 mb-10 mt-5 max-w-2xl mx-auto fade-up fade-delay-3">
            Ich kombiniere <strong className="text-red font-semibold">Wissenschaftsjournalismus & -kommunikation</strong>, <strong className="text-red font-semibold">Mediendidaktik</strong> und <strong className="text-red font-semibold">Moderation & Workshops</strong> – für Interessierte, Lehrende und Lernende.
          </p>
          <Link to="/impressum" className="inline-block bg-none border-1 text-ocean px-6 py-3 rounded font-semibold hover:bg-ocean hover:text-light transition fade-up fade-delay-3">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>

      </>
    )
  }
  
  export default LandingPage
  