import Card from '@/components/Card';
import Head from 'next/head';
const curriculumCards = [
    {
        title: 'Beginner Adavu',
        img:'/mathura/mathura.jpg',
        content: 'Focuses on foundational adavus, posture building, introduction to hand gestures, yoga movements to strengthen the body',
        color: 'linear-gradient(90deg, rgba(233,86,148,1) 0%, rgba(255,239,0,1) 100%)',
    },
    {
        title: 'Beginner Intermediate',
        img:'/other/arangetram2.jpg',
        content: 'Classes move into learning items like Alarippu, Jatheeswaram where students learn to form simple dance sequences with the basic building blocks learnt in adavu classes.',
        color: 'linear-gradient(90deg, rgba(54,147,212,1) 0%, rgba(157,228,120,1) 100%)'
    },
    {
        title: 'Intermediate',
        img:'/mathura/mathura1.jpg',
        content: "Students are introduced to Abhinaya (expressions) and learn kriti's/bhajans. This is often a starting point to some students carving a path to their Salangai Poojai.",
        color: 'linear-gradient(90deg, rgba(226,146,67,1) 0%, rgba(187,117,233,1) 100%)'
    },
    {
        title: 'Advanced',
        img:'/other/arangetram3.jpg',
        content: 'Students work towards arangetram and beyond. Here they learn complex compositions like Varnams, Padams, Javalis. Students at this level often help in mentoring younger students and inspiring the younger groups with their performances.',
        color: 'linear-gradient(90deg, rgba(249,249,249,1) 0%, rgba(70,152,176,1) 99%)'
    }
]
export default function Curriculum(){
    return <section className={`font-inter`}>
        <Head>
          <title>Curriculum - Kaladhaara</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="page-title">
            <h1 className='text-2xl text-center'>OUR CURRICULUM</h1>
        </div>
        <p className='mt-8 text-lg text-center leading-8 text-gray-600'>
        Kaladhaara's approach to teaching Bharatanatyam is based on providing a wholesome experience that 
        includes learning form and technique, foundational theory of dance, understanding the cultural 
        significance, fostering creativity, all the while making it an enjoyable experience for the students. 
        </p>
        <p className='mt-8 text-lg text-center leading-8 text-gray-600'>
        Based on the student's age and level, they are placed into groups with similar learning abilities. 
        These group classes and practice sessions often help students form strong friendships, learning from each other and progressing as a group. 
        Through these classes, the students learn important values like perseverance, determination, discipline, 
        time management while enjoying the learning experience.<br />
        </p>
        <h3 className='text-center my-3 text-xl'>Here is a sample of what some of these groups work on </h3>
       <div className="grid grid-cols-2 grid-rows-2 gap-3">
            {curriculumCards.map((cardProps,idx)=>{
                return <Card {...cardProps} key={idx}/>
            })}
       </div>
    </section>
}