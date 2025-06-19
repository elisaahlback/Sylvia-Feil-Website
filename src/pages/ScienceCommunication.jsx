import StorytellingIcon from '.././assets/Storytelling.svg';
import ErklärvideosIcon from '.././assets/Erklärvideos.svg';
import ModerationIcon from '.././assets/Moderation.svg';

function ScienceCommunication() {

    return (
      <>
        <main className="bg-light pt-12 px-6 pb-16">
          <div className="ml-4 md:ml-8 lg:ml-16 mr-4 md:mr-8 lg:mr-16">
            <h2 className="text-3xl font-bold mb-4 text-ocean">Wissenschaftskommunikation</h2>
            
            
            <section>
              <p className="text-sm pb-4">Wissen vermitteln ist das Ziel in der Lehre, aber auch von Zeitschriften und Sachbüchern im wissenschaftlichen Bereich. Ein paar Schlaglichter sollen veranschaulichen, wie der Einsatz digitaler Medien und Kreativität zusammenfinden.</p>
            </section>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <section className="flex-1">
                <img src={StorytellingIcon} className="w-10 h-10"/>
                  <h3 className="text-red font-semibold mb-2 text-xl">Storytelling</h3>
                  <div className="flex flex-wrap">
                    <p className="text-sm mb-2">Unerwartetes weckt unsere Aufmerksamkeit. Texte, Bilder, Sketchnotes und auch Videos transportieren diese Geschichten, deren Aufbau sich nach den Inhalten richtet. Beim Lerne und Lehren umfassen Lernreisen klassische Heldenepen ebenso wie Challenges, die im Team gelöst werden. Spannung entsteht durch einen Konflikt, eine Herausforderung oder eine Krise: also den Anlass der Geschichte.</p>
                    <p className="text-sm mb-2">Das Beispiel einer Rahmengeschichte liefern Ada und Gottfried, die als Lehrkräfte digitale Medien verwenden. Dabei werfen sie stellvertretend für die Lernenden Fragen auf oder reflektieren den Einsatz. Entstanden im Rahmen des <a href={`https://ilias.uni-hannover.de/goto.php?target=pg_58988_29146&client_id=ilias`} target="_blank" className="underline">Projekts digitaLe</a> an der Leibniz Universität Hannover. </p>
                  </div>
              </section>

              <section className="flex-1">
                <img src={ErklärvideosIcon} className="w-10 h-10"/>
                  <h3 className="text-red font-semibold mb-2 text-xl">Erklärvideos</h3>
                  <div className="flex flex-wrap">
                    <p className="text-sm mb-2">Sie haben digitale Lernangebote entwickelt und wollen nun Interessierte über Ihr Angebot informieren? Ein Medienpool und vielleicht sogar ein Redaktionsplan sind aufgestellt – doch wie nun auswählen? Stillleben oder bewegtes Bild?</p>
                    <p className="text-sm mb-2">In diesen Workshops geht es darum, praxisnah Ideen für die Umsetzung zu entwickeln. Ein Bild erzählt mitunter ganze Geschichten – doch wenn mehrere hintereinander gefügt werden, ergibt sich schnell ein Cartoon oder ein Video. Kurzum: Was lässt sich aus dem Fundus an Material gestalten? Was lässt sich schnell kreieren? Eignet sich auch der Mitschnitt eine Online-Seminars – und worauf ist dabei zu achten? Antworten hieraus sowie Schritte zur Umsetzung und Qualitätskriterien werden gemeinsam entwickelt. </p>
                  </div>
              </section>

              <section className="flex-1">
                <img src={ModerationIcon} className="w-10 h-10"/>
                  <h3 className="text-red font-semibold mb-2 text-xl">Moderation</h3>
                  <div className="flex flex-wrap">
                    <p className="text-sm mb-2">Medienlabor</p>
                    <p className="text-sm mb-2">Für den Journalistinnenbund organisierte Sylvia Feil in der <a href={`https://journalistinnen.de/projekte/das-medienlabor/`} target="_blank" className="underline">AG Medienlabor</a> eine medienpolitische Diskussionsveranstaltung. Die Reihe bietet einen fachlichen Austausch zu medienpolitischen Fragen.</p>
                    <p className="text-sm mb-2">Den Auftakt bildete im März 2013 in Hamburg: „Die Macht der Konzernerbinnen“, das zweite Medienlabor fand im Oktober 2013 in Berlin statt: „Journalistinnen in der Kriegs- und Krisenberichtserstattung“. Seither setzt sich diese Reihe in wechselnden Formaten fort.</p>
                  </div>
              </section>

            </div>

          </div>
      
        </main>
          
          
  
      </>
    )
  }
  
  export default ScienceCommunication
  