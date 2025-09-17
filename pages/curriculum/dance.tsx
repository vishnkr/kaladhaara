import Card from '@/components/Card';
import Head from 'next/head';

const danceCards = [
  {
    title: 'Beginner Adavu',
    img: '/curriculum/beginner.jpg',
    content:
      'Focuses on foundational adavus, posture building, introduction to hand gestures, yoga movements to strengthen the body',
  },
  {
    title: 'Beginner Intermediate',
    img: '/curriculum/beg-int.jpg',
    content:
      'Classes move into learning items like Alarippu, Jatheeswaram where students learn to form simple dance sequences with the basic building blocks learnt in adavu classes.',
  },
  {
    title: 'Intermediate',
    img: '/curriculum/intermediate.jpg',
    content:
      "Students are introduced to Abhinaya (expressions) and learn kriti's/bhajans. This is often a starting point to some students carving a path to their Salangai Poojai.",
  },
  {
    title: 'Advanced',
    img: '/curriculum/advanced.jpg',
    content:
      'Students work towards arangetram and beyond. Here they learn complex compositions like Varnams, Padams, Javalis. Students at this level often help in mentoring younger students and inspiring the younger groups with their performances.',
  },
  {
    title: 'Adult Beginner',
    img: '/gallery/gallery5.jpg',
    content:
      'We also have beginner classes for Adults who are passionate about restarting dance or starting from scratch.',
  },
  {
    title: 'Adult Intermediate',
    img: '/events/Varnamala.jpg',
    content:
      'Classes to help adult dancers deepen their Bharatanatyam technique and expand repertoire. Focus is on refining adavus, mastering intermediate choreography, and building stage confidence',
  },
  {
    title: 'Post Arangetram',
    img: '/gallery/gallery13.jpg',
    content:
      'Designed for graduates to keep advancing their artistry. Emphasis on nuanced abhinaya, complex choreography, and sustaining professional-level practice.',
  },
];

export default function Dance() {
  return (
    <section className="font-inter">
      <Head>
        <title>Dance Curriculum - Kaladhaara</title>
      </Head>

      <div className="page-title">
        <h1 className="text-3xl font-semibold text-center">DANCE CURRICULUM</h1>
      </div>

      <p className="mt-8 text-base md:text-lg lg:text-xl text-center leading-8 text-gray-600">
        Kaladhaara's approach to teaching Bharatanatyam is based on providing a wholesome experience that 
        includes learning form and technique, foundational theory of dance, understanding the cultural 
        significance, fostering creativity, all the while making it an enjoyable experience for the students.
      </p>

      <p className="mt-8 text-base md:text-lg lg:text-xl text-center leading-8 text-gray-600">
        Based on the student's age and level, they are placed into groups with similar learning abilities. 
        These group classes and practice sessions often help students form strong friendships, learning from each other and progressing as a group. 
        Through these classes, the students learn important values like perseverance, determination, discipline, 
        time management while enjoying the learning experience.
      </p>

      <h3 className="text-center my-3 text-lg md:text-xl lg:text-2xl">
        Here are some of the dance stages our students progress through
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        {danceCards.map((card, idx) => (
          <Card {...card} key={idx} />
        ))}
      </div>

      <p className="mt-8 text-base md:text-lg lg:text-xl text-center leading-8 text-gray-600">
        Every summer, Kaladhaara hosts multiple week-long workshops where students learn special choreographic works
        from traveling artists & professionals from the Industry or thematic projects and have an opportunity to perform
        in the summer showcase. These are also accompanied by “Adavuthon” sessions to prepare the students for the intense
        workshop experience. In addition to these, students at Kaladhaara are given some additional choreography challenges
        to deepen their quest if they want to be challenged and raise the bar they set for themselves.
      </p>

      <p className="mt-8 text-base md:text-lg lg:text-xl text-center leading-8 text-gray-600">
        We are also working on creating avenues for students that transition into post arangetram learning which includes
        applying for scholarships, external performances and refining their progress. Kaladhaara embarked on their first tour
        of Natyanjali festivities in India during Feb-March 2020 where five of the students and their families traveled with
        Mathura to perform at various temples across Tamil Nadu for MahaShivarathri.
      </p>
    </section>
  );
}