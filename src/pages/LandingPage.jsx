import { Link } from 'react-router-dom'
import SignetOriginal from '.././assets/Signet-Original.svg'

function LandingPage() {

    return (
      <>
      <div className="pt-[115px] pb-[120px] flex items-center justify-center bg-gradient-to-t from-[#D2F4F6] to-light">
        <div className="relative w-full max-w-6xl mx-auto text-center">
          <div className="flex justify-center fade-up fade-delay-1">
            <img src={SignetOriginal} className="h-29 md:h-29" alt="Sylvia signet" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ocean mb-2 fade-up fade-delay-2">
            Wissenschaft sichtbar machen – verständlich, kreativ & digital
          </h1>
          <p className="text-lg text-[var(--color-ocean)] opacity-80 mb-10 max-w-2xl mx-auto fade-up fade-delay-3">
          Ich kombiniere <strong className="text-red font-semibold">Chemiejournalismus</strong>, <strong className="text-red font-semibold">digitale Mediendidaktik</strong>, <strong className="text-red font-semibold">Wissenschaftskommunikation</strong> und <strong className="text-red font-semibold">Moderation & Workshops</strong> – für Lehrende, Lernende und Medien.
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
  