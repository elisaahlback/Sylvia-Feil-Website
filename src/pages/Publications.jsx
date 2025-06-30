import BookCard from '.././components/BookCard';
import PaperCard from '.././components/PaperCard';
import { useState } from 'react';
import publicationsData from '.././data/publicationsData';

function Publications () {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (id) => {
    setSelectedBook(id === selectedBook ? null : id);
  };

  const category1Books = publicationsData.slice(0,1);
  const category2Books = publicationsData.slice(4,8);

  const bookIds = ['book-1', 'book-4', 'book-5', 'book-6', 'book-7'];
  const selectedPapersCategory1 = ['paper-2', 'paper-3', 'paper-4'];

  const category1BookIds = category1Books.map(book => book.pubid);
  const category2BookIds = category2Books.map(book => book.pubid);

  const selectedPapersCat1 = publicationsData.filter(pub => selectedPapersCategory1.includes(pub.pubid));
  
  const selectedIsCat1 = selectedBook && category1BookIds.includes(selectedBook);
  const selectedIsCat2 = selectedBook && category2BookIds.includes(selectedBook);

  const selectedPublication = publicationsData.find(
    (pub) => pub.pubid === selectedBook
  );

  return (
    <main className="bg-light px-6 pt-[150px] pb-[80px]">
      <div className="ml-4 md:ml-8 lg:ml-16 mr-4 md:mr-8 lg:mr-16">
        <h2 className="text-3xl font-bold mb-4 text-red">Publikationen</h2>

        <div className="flex flex-col xl:flex-row gap-7">
          {/* Category 1 */}
          <section className="w-full xl:w-6/12">
            <h3 className="text-ocean font-semibold mb-2 text-xl">Lernen mit und über Medien</h3>
            <div className="flex flex-col lg:flex-row gap-4 bg-[#E9E9E9] p-4 rounded-lg">
            
              {/* Books under category 1 */}
              <div className="w-full lg:w-4/12 flex justify-center mt-2 items-center">
                
                {category1Books.map((publication) => (
                <div key={publication.pubid} className="mx-auto">
                  <BookCard
                    key={publication.pubid}
                    title={publication.title}
                    subtitle={publication.subtitle}
                    description={publication.description}
                    isbn={publication.isbn}
                    doi={publication.doi}
                    image={publication.image}
                    pubid={publication.pubid}
                    onClick={handleBookClick} 
                    selected={selectedBook === publication.pubid}
                    imageSize={publication.imageSize}
                  />
                </div>
              ))}

              {/* Show description when a book is selected at sm (to the right of the book) */}
              {selectedIsCat1 && selectedPublication && (
                <div className="hidden lg:hidden sm:block sm:bg-red sm:p-4 sm:rounded sm:ml-4 sm:text-sm sm:text-light sm:transition-all sm:duration-300 sm:mt-3 fade-in">
                  <h3 className="text-md font-semibold mb-2">{selectedPublication.title}</h3>
                  {selectedPublication.subtitle && (
                    <p className="mb-1 italic">{selectedPublication.subtitle}</p>
                  )}
                  <p className="mb-2">{selectedPublication.description}</p>
                  {selectedPublication.isbn && (
                    <p className="mb-1">ISBN: {selectedPublication.isbn}</p>
                  )}
                  {selectedPublication.doi && (
                    <p className="mb-1">
                      DOI: <a href={`https://doi.org/${selectedPublication.doi}`} target="_blank" className="underline">{selectedPublication.doi}</a>
                    </p>
                  )}
                </div>
              )}

              </div>

              {/*On "xs" screens*/}
              <div className="sm:hidden w-full flex justify-center items-center">
                {/* Show description when a book is selected at smaller than sm (directly under book) */}
                {selectedIsCat1 && selectedPublication && (
                  <div className="sm:hidden block bg-red p-4 rounded text-sm text-light transition-all duration-300 fade-in">
                    <h3 className="text-md font-semibold mb-2">{selectedPublication.title}</h3>
                    {selectedPublication.subtitle && (
                      <p className="mb-1 italic">{selectedPublication.subtitle}</p>
                    )}
                    <p className="mb-2">{selectedPublication.description}</p>
                    {selectedPublication.isbn && (
                      <p className="mb-1">ISBN: {selectedPublication.isbn}</p>
                    )}
                    {selectedPublication.doi && (
                      <p className="mb-1">
                        DOI: <a href={`https://doi.org/${selectedPublication.doi}`} target="_blank" className="underline">{selectedPublication.doi}</a>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Papers under category 1 */}
              <div className="w-full lg:w-8/12 space-y-4">
                {selectedPapersCat1.map((publication) => (
                  <PaperCard
                    key={publication.pubid}
                    title={publication.title}
                    subtitle={publication.subtitle}
                    description={publication.description}
                    isbn={publication.isbn}
                    doi={publication.doi}
                    image={publication.image}
                    pubid={publication.pubid}
                    onClick={handleBookClick}
                    selected={selectedBook === publication.pubid}
                  />
                ))} 
              </div>

            </div>

            {/* Show description when a book is selected at lg (under category 1 rectangle) */}
            {selectedIsCat1 && selectedPublication && (
              <div className="hidden xl:hidden lg:block bg-red p-4 rounded text-sm text-light transition-all duration-300 mt-3 fade-in">
                <h3 className="text-md font-semibold mb-2">{selectedPublication.title}</h3>
                {selectedPublication.subtitle && (
                  <p className="mb-1 italic">{selectedPublication.subtitle}</p>
                )}
                <p className="mb-2">{selectedPublication.description}</p>
                {selectedPublication.isbn && (
                  <p className="mb-1">ISBN: {selectedPublication.isbn}</p>
                )}
                {selectedPublication.doi && (
                  <p className="mb-1">
                    DOI: <a href={`https://doi.org/${selectedPublication.doi}`} target="_blank" className="underline">{selectedPublication.doi}</a>
                  </p>
                )}
              </div>
            )}
  
          </section>

          {/* Category 2 */}
          <section className="w-full xl:w-6/12">
            <h3 className="text-ocean font-semibold mb-2 text-xl">Sachbücher Chemie</h3>
            
            {/* Books under category 2 */}
            <div className="flex flex-col sm:flex-row gap-4 bg-[#E9E9E9] p-4 rounded-lg justify-center">
              {category2Books.map((publication) => (
                <div key={publication.pubid} className="mx-auto flex flex-col items-center">
                  <BookCard
                    title={publication.title}
                    subtitle={publication.subtitle}
                    description={publication.description}
                    isbn={publication.isbn}
                    doi={publication.doi}
                    image={publication.image}
                    pubid={publication.pubid}
                    onClick={handleBookClick}
                    selected={selectedBook === publication.pubid}
                    imageSize={publication.imageSize}
                  />

                  {/* Show description when a book is selected at smaller than sm (directly under book) */}
                  {selectedBook === publication.pubid && (
                    <div className="sm:hidden bg-red p-4 rounded text-sm text-light transition-all duration-300 mt-3 w-full">
                      <h3 className="text-md font-semibold mb-2">{publication.title}</h3>
                      {publication.subtitle && (
                        <p className="mb-1 italic">{publication.subtitle}</p>
                      )}
                      <p className="mb-2">{publication.description}</p>
                      {publication.isbn && (
                        <p className="mb-1">ISBN: {publication.isbn}</p>
                      )}
                      {publication.doi && (
                        <p className="mb-1">
                          DOI:{' '}
                          <a
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            className="underline"
                            rel="noopener noreferrer"
                          >
                            {publication.doi}
                          </a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}

            </div>

            {/* Show description when a book is selected AT XL (desktop) */}
            {selectedPublication && bookIds.includes(selectedPublication.pubid) && (
              <div className="hidden xl:block bg-red p-4 rounded text-sm text-light transition-all duration-300 mt-3 fade-in">
                <h3 className="text-md font-semibold mb-2">{selectedPublication.title}</h3>
                {selectedPublication.subtitle && (
                  <p className="mb-1 italic">{selectedPublication.subtitle}</p>
                )}
                <p className="mb-2">{selectedPublication.description}</p>
                {selectedPublication.isbn && (
                  <p className="mb-1">ISBN: {selectedPublication.isbn}</p>
                )}
                {selectedPublication.doi && (
                  <p className="mb-1">
                    DOI: <a href={`https://doi.org/${selectedPublication.doi}`} target="_blank" className="underline">{selectedPublication.doi}</a>
                  </p>
                )}
              </div>
            )}

            {/* Show description when a book is selected at sm (under category 2 rectangle) */}
            {selectedIsCat2 && selectedPublication && (
              <div className="hidden xl:hidden sm:block sm:bg-red sm:p-4 sm:rounded sm:text-sm sm:text-light sm:transition-all sm:duration-300 sm:mt-3 fade-in">
                <h3 className="text-md font-semibold mb-2">{selectedPublication.title}</h3>
                {selectedPublication.subtitle && (
                  <p className="mb-1 italic">{selectedPublication.subtitle}</p>
                )}
                <p className="mb-2">{selectedPublication.description}</p>
                {selectedPublication.isbn && (
                  <p className="mb-1">ISBN: {selectedPublication.isbn}</p>
                )}
                {selectedPublication.doi && (
                  <p className="mb-1">
                    DOI: <a href={`https://doi.org/${selectedPublication.doi}`} target="_blank" className="underline">{selectedPublication.doi}</a>
                  </p>
                )}
              </div>
            )}
          </section>

        </div>

        {/* Category 3 */}
        <section>
          <h3 className="text-ocean font-semibold mb-2 mt-8 text-xl">Zeitschriftenbeiträge</h3>
          <div className="bg-[#E9E9E9] p-6 rounded-lg">
            <p className="text-sm">
              Aktuelle Beiträge der Fachjournalistin erscheinen vor allem im Magazin 
              "<a
                href="https://onlinelibrary.wiley.com/journal/15213781?journalRedirectCheck=true"
                target="_blank"
                className="text-ocean underline hover:text-red transition"
              >
                Chemie in unserer Zeit
              </a>" im Verlag WILEY-VCH. Die Zeitschrift umfasst alle Bereiche der Chemie und daran anknüpfende Forschung. Ihr Ziel ist es, für interessierte Laien, Studenten, Lehrer, Wissenschaftler Chemie verständlich darzubieten, gleichwohl wird für die Lektüre ein fundiertes chemisches Grundwissen vorausgesetzt.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Publications;
