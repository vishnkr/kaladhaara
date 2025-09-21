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
          Mathura Viswanathan is the founder and artistic director of Kaladhaara
          Arts Academy. Rooted with a strong foundation from eminent Gurus like
          Kalaimamani Smt. Krishnakumari Narendran, Natanamamani Sri A. Lakshman
          and Nritya Choodamani Smt. Priyadarsini Govind, her abhinaya skills
          were groomed under Padma Vibhushan Smt. Kalanidhi Narayan. Presently,
          Mathura is delving into learning Karanas under the mentorship of Guru
          Sri. N. Srikanth to enhance her learning in this art form. Having been
          initiated into the art of nattuvangam by the exponent Bhagavatula
          Seetharama Sharma, she continues to hone her nattuvangam skills with
          Mridangam vidwan Sri. Nagai P.Sriram.
        </p>

        <div className="flex flex-col lg:flex-row mt-8">
          <div className="w-full lg:w-1/2">
            <div className="mt-8 text-lg mx-6 text-start leading-8 text-gray-600">
              <p className="font-semibold text-gray-900">
                Her very notable achievements include the following:
              </p>
              <ul className="list-disc ml-6">
                <li>Kalemane Kalashree Award, Mysuru (2025)</li>
                <li>Kartik Fine Arts' Nrithyajyoti award of excellence (2016)</li>
                <li>Balasaraswathi endowment award (2016)</li>
                <li>Vazhuvoor Ramaiyah Pillai Award (2015)</li>
                <li>Music Academy's Spirit of Youth Best Dancer award (2006)</li>
                <li>Balasaraswathi prize for best performance (2005)</li>
                <li>
                  Dharmavarapu Seetharama Anjaneyalu award as the best
                  all-rounder (2004)
                </li>
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
