import BookCard from '.././components/BookCard';


import { useState } from 'react';
import { useParams } from 'react-router-dom';

import publicationsData from '.././data/publicationsData';


function Publications () {

  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (id) => {
    setSelectedBook(id === selectedBook ? null : id);
  };

  const category1Books = publicationsData.slice(0, 3);
  const category2Books = publicationsData.slice(3);

  const selectedPublication = publicationsData.find(
    (pub) => pub.pubid === selectedBook
  );
  

  return (
    <>
    <main className="bg-light pt-12 px-6 pb-16">
      <div className="ml-4 md:ml-8 lg:ml-16 mr-4 md:mr-8 lg:mr-16">
          <h2 className="text-3xl font-bold mb-4 text-red">Publikationen</h2>
          
          {/* Row with two categories */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category 1 */}
            <section className="flex-4/12">
              <h3 className="text-ocean font-semibold mb-2 text-xl">Lernen mit und über Medien</h3>
              <div className="flex flex-wrap gap-5 bg-[#E9E9E9] p-4 rounded-lg justify-center">
                {category1Books.map((publication) => (
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
                  ))}
              </div>
            </section>

            {/* Category 2 */}
            <section className="flex-7/12">
              <h3 className="text-ocean font-semibold mb-2 text-xl">Sachbücher Chemie</h3>
              <div className="flex flex-wrap gap-5 bg-[#E9E9E9] p-4 rounded-lg justify-center">
                {category2Books.map((publication) => (
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
                ))}
              </div>
            </section>
          </div>

          {/* Show description when a book is selected at sm or bigger */}
          {selectedPublication && (
            <div className="hidden sm:block bg-red p-4 rounded text-sm text-light mt-3">
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



          {/* Category 3 */}
          <section>
            <h3 className="text-ocean font-semibold mb-2 mt-8 text-xl">Zeitschriftenbeiträge</h3>
            <div className="bg-[#E9E9E9] p-6 rounded-lg">
              <p className="text-sm">Aktuelle Beiträge der Fachjournalistin erscheinen vor allem im Magazin „Chemie in unserer Zeit“ im Verlag WILEY-VCH. Die Zeitschrift umfasst alle Bereiche der Chemie und daran anknüpfende Forschung. Ihr Ziel ist es, für interessierte Laien, Studenten, Lehrer, Wissenschaftler Chemie verständlich darzubieten, gleichwohl wird für die Lektüre ein fundiertes chemisches Grundwissen vorausgesetzt. </p>
            </div>
          </section>
        </div>
      
    </main>
          
          
    
    </>
  )
  }
  


  export default Publications
  