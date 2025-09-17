import Card from '@/components/Card';
import Head from 'next/head';

const musicCards = [
    {
    title: 'Bhajan',
    img: '/gallery/gallery2.jpg',
    content:
      'Introduces little ones to the joy of devotional music through simple bhajans and playful rhythm activities.',
  },
    {
    title: 'Carnatic Vocal',
    img: '/gallery/gallery3.jpg',
    content:
      'Beginner-friendly Carnatic vocal classes for kids aged 5+, with a focus on fun, foundation, and tradition.',
  },
  
  
];

export default function Music() {
  return (
    <section className="font-inter">
      <Head>
        <title>Music Curriculum - Kaladhaara</title>
      </Head>

      <div className="page-title">
        <h1 className="text-3xl font-semibold text-center">MUSIC CURRICULUM</h1>
      </div>

      <p className="mt-8 text-base md:text-lg lg:text-xl text-center leading-8 text-gray-600">
        From engaging bhajans for tiny tots to structured training for dedicated Carnatic music learners,
        our classes grow with each student’s age and interest. We nurture a love for melody and rhythm
        while building strong fundamentals, guiding every child from their first notes to advanced
        performance skills in a joyful and culturally rich environment.
      </p>

      <h3 className="text-center my-6 text-lg md:text-xl lg:text-2xl">
        Here are some of the musical paths our students explore
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {musicCards.map((card, idx) => (
          <Card {...card} key={idx} />
        ))}
      </div>
    </section>
  );
}
