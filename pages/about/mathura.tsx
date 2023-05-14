import Head from "next/head";

export default function FirstPost() {
    return(
        <section className="isolate">
            <Head>
            <title>About Mathura - Kaladhaara</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
                <div className="flex flex-col">
            <h1 className="text-2xl text-center">ABOUT MATHURA</h1>
                <p className="mt-8 text-lg text-center leading-8 text-gray-600">
                Mathura Viswanathan is the founder and artistic director of Kaladhaara Arts Academy. Rooted with a strong foundation from eminent Gurus like Kalaimamani Smt. Krishnakumari Narendran,  Natanamamani Sri A. Lakshman and Nritya Choodamani Smt. Priyadarsini Govind, her abhinaya skills were groomed under Padma Vibhushan Smt. Kalanidhi Narayan. Presently, Mathura is delving into learning Karanas under the mentorship of Guru Sri. N. Srikanth to enhance her learning in this art form.She continues to hone her nattuvangam skills with Mridangam exponent Sri. Nagai P.Sriram. 
                </p>
                <p className="mt-8 text-lg text-center leading-8 text-gray-600">
                With a vision to create an authentic Arts academy, Mathura has formed a robust core faculty team and formulated an intensive curriculum streamlined towards passing on the cultural heritage to the next generation. Under her proficient leadership, Kaladhaara is  blossoming into enriching the greater Sacramento community with classes in Bharatanatyam, Bhajans and collaborative dance group meet ups. Mathura has also been focusing her creative energy into choreographing and directing group productions as well as enabling her students to grow into solo performing artists.
                </p>
            </div>
        </section>
    )
  }

  