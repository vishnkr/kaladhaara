import Head from "next/head";

export default function Kaladhaara(){
    return (
        <section className="isolate">
            <Head>
                <title>About Kaladhaara</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-semibold text-center">ABOUT KALADHAARA</h1>
                <p className="mt-8 text-lg text-center leading-8 text-gray-600">
                Kaladhaara, is a nonprofit registered dance Academy in Sacramento (US) to impart quality Indian classical performing 
                arts (dance and music) for the holistic development of children living abroad. 
                </p>
                <p className='mt-8 text-lg text-center leading-8 text-gray-600'>
                    Founded in 2001 by Artistic Director Mathura Viswanathan, Kaladhaara is today one of the premier classical arts institutes in the Greater Sacramento area. The academy nurtures every student’s individual talent, customizing lessons to their strengths and guiding them toward milestone performances such as pre-debut (salangai pooja), debut (arangetram) presentations and more. 
                    </p>
                    <p className='mt-8 text-lg text-center leading-8 text-gray-600'>Kaladhaara organizes yearly performances and annual showcase to present emerging talents, and regularly hosts visiting artists from India and other countries who enrich students’ learning through performances, lectures, and demonstrations. Kaladhaara’s thematic productions including Radhe Shyama (2014), Vandemataram (2015), Raghuvamsa (2016), Ballad of the Gods (2021), Of Love and Longing (2022), Cosmic Elements (2023), Anubhava (2024), Pravaahini(2025),  Varnamala (2025) have received wide acclaim from audiences, local & international art patrons.</p>
                    <p className='mt-8 text-lg text-center leading-8 text-gray-600'>Kaladhaara’s mission is to enrich and inspire individuals of all backgrounds through the beauty and discipline of Bharatanatyam and Carnatic music - bridging cultures, nurturing artistic excellence, and cultivating a lifelong love for these timeless traditions.</p>
            </div>
        </section>
        
    )
}