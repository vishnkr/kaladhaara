import Head from "next/head";

export default function FirstPost() {
  return (
    <section className="isolate">
      <Head>
        <title>About Mathura - Kaladhaara</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          MATHURA VISWANATHAN
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-4xl mx-auto">
          <div className="aspect-square">
            <img
              src="/mathura/mathura.jpg"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/mathura/mathura1.jpg"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/mathura/mathura6.jpg"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/mathura/mathura8.jpg"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        <p className="mt-8 text-lg text-center leading-8 text-gray-600">
          Mathura Viswanathan is the founder and artistic director of Kaladhaara Arts Academy, a dance academy based in Sacramento, California.  Rooted with a strong foundation from illustrious Gurus like: Smt. Krishnakumari Narendran, Sri. A. Lakshman, Smt. Kalanidhi Narayan, Smt. Priyadarshini Govind, Shri N. Srikanth, and Bagavatula Sri Seetharama Sharma Garu, Mathura Viswanathan brings with her a treasure trove of nuanced learning.  
Having started her journey as a performing artist, she has traveled to multiple countries as part of group productions as well as solo performances. It is this knowledge and experience that she wishes to impart to every student of Kaladhaara. With a vision to create an authentic arts academy, Mathura has formulated an intensive curriculum streamlined towards passing on the cultural heritage to the next generation. Under her proficient leadership, Kaladhaara is blossoming into enriching the greater Sacramento Community with classes in Bharatnatyam, Bhajans, and collaborative dance group meet ups. 
Mathura has been channeling her creative energy into choreographing and directing numerous group productions, showcased both locally and internationally, while nurturing her students to be confident solo performers. 
        </p>

        <div className="flex flex-col lg:flex-row mt-8">
          <div className="w-full lg:w-1/2">
            <div className="mt-8 text-lg mx-6 text-start leading-8 text-gray-600">
              <p className="font-semibold text-gray-900">
                Her very notable achievements include the following:
              </p>
              <ul className="list-disc ml-6">
                <li>ICCR Empanelled Artist</li>
                <li>Dharmavarapu Seetharama Anjaneyalu Award for Best All-Rounder (2004)</li>
                <li>Music Academy's Spirit of Youth Best Dancer Award (2006)</li>
                <li>Vazhuvoor Ramaiyah Pillai Award (2015)</li>
                <li>Nrithyajothi Award of Excellence from Karthik Fine Arts (2016)</li>
                <li>Balasaraswati Endowment Award (2016)</li>
                <li>Cambodia Cultural Ambassador Award (2024)</li>
                <li>Kalemane Kalashree Award, Mysore (2025)</li>
                <li>Sang Ratu Ugrasena Award, ICCR Bali (2025)</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="/mathura/mathura5.jpg"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        </div>

        <p className="mt-8 text-lg text-center leading-8 text-gray-600">
          With a vision to create an authentic Arts academy, Mathura has formed
          a robust core faculty team and formulated an intensive curriculum
          streamlined towards passing on the cultural heritage to the next
          generation. Under her proficient leadership, Kaladhaara is blossoming
          into enriching the greater Sacramento community with classes in
          Bharatanatyam, Bhajans and collaborative dance group meet ups. Mathura
          has also been focusing her creative energy into choreographing and
          directing group productions as well as enabling her students to grow
          into solo performing artists.
        </p>
      </div>
    </section>
  );
}
