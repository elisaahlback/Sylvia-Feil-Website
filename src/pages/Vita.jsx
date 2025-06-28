import SylviaPortrait from '.././assets/Sylvia_portrait.jpg';

function VitaCard({ year, text }) {
  return (
    <div className="w-40 p-4 bg-white rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-50">
      <h4 className="font-semibold text-sm">{year}</h4>
      <p className="text-xs mt-2">{text}</p>
    </div>
  );
}

function Vita() {
  return (
    <main className="bg-light px-6 pt-[80px] pb-[60px]">
      <div className="ml-4 md:ml-8 lg:ml-16 mr-4 md:mr-8 lg:mr-16">
      <h2 className="text-3xl font-bold mb-8 text-ocean">Vita</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={SylviaPortrait}
          alt="Sylvia Feil"
          className="hidden md:w-48 md:h-60 md:object-cover md:rounded md:shadow-md md:inline-block"
        />
        <div className="overflow-y-auto h-110 pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-red/[.2]
                        [&::-webkit-scrollbar-thumb]:bg-red">
          
          <section className="border-l-2 border-teal pl-3 ml-2 mb-4">
            <h3 className="text-red font-semibold">2017</h3>
            <p className="text-sm">Seit 2017 arbeitet sie als Mediendidaktische Beraterin des E-Learning-Services (ZQS / elsa) der Leibniz Universität Hannover, ist dort Mitglied von „Netzwerk Lehre“ und begleitet verschiedene Projekte.</p>
          </section>

          <section className="border-l-2 border-teal pl-3 ml-2 mb-4">
            <h3 className="text-red font-semibold">2002</h3>
            <p className="text-sm">Seit 2002 schreibt Sylvia Feil für das Fachmagazin “Chemie in unserer Zeit”. Zusätzlich schrieb sie für die “Biologie in unserer Zeit”, Hannoversche Allgemeine Zeitung und andere im Bereich Naturwissenschaft und Forschung. Daneben schrieb sie Sachbücher zu Chemie und Biologie.</p>
          </section>

          <section className="border-l-2 border-teal pl-3 ml-2 mb-4">
            <h3 className="text-red font-semibold">2001–2020</h3>
            <p className="text-sm">Redaktionell betreute sie Schulbücher und Unterrichtsmaterialien für den Chemieunterricht an Gymnasien für das Bildungshaus Schulbuchverlage Westermann-Gruppe.</p>
          </section>

          <section className="border-l-2 border-teal pl-3 ml-2 mb-4">
            <h3 className="text-red font-semibold">Studium</h3>
            <p className="text-sm">SYLVIA FEIL studierte Diplom-Chemie an der Leibniz Universität Hannover. Sie war ein Semester Gasthörerin an der Universität von Wisconsin, Madison (USA) in der School of Journalism and Mass Communication.
              <br/>Das Stipendium für angehende Wissenschaftsjournalisten des Fonds der Chemischen Industrie führte sie in die Redaktionen Pressestelle der Universität Hannover, der Lokalpresse – Neue Presse Hannover –, des Rundfunks – NDR1 – und des Schroedel-Verlags. Sie nahm am Qualifizierungsprogramm “Wissenschaftsjournalismus” teil, veranstaltet von der Bertelsmann-Stiftung, Volkswagenstiftung und BASF AG.</p>
          </section>

          <section className="border-l-2 border-teal pl-3 ml-2 mb-4">
            <h3 className="text-red font-semibold">Ehrenamt</h3>
            <p className="text-sm">Ehrenamtlich engagiert sie sich für das Fundraising ihrer ev.-luth. Kirchengemeinde. Sie initiierte zusammen mit Linda Bücking das hannoversche Netzwerk "Austausch Lehre und Erwachsenenbildung". Sie lebt in der Region Hannover.</p>
          </section>

          <section className="border-l-2 border-teal pl-3 ml-2 mb-4">
            <h3 className="text-red font-semibold">2015–2019</h3>
            <p className="text-sm">Mitglied im Vorstand des Journalistinnenbundes war sie zunächst als Schriftführerin, dann als stellvertretende Vorsitzende. Im April 2019 wurde ein Beirat für das Projekt Genderleicht.de gegründet, dem sie angehörte. Das Projekt erstellte und betreute ein Portal für gendersensible Sprache für Medienschaffende.</p>
          </section>

        </div>
        <img
          src={SylviaPortrait}
          alt="Sylvia Feil"
          className="sm:hidden w-48 h-60 object-cover rounded-full mt-3 shadow-md inline-block"
        />
      </div>


</div>

    </main>
  );
}

export default Vita;
