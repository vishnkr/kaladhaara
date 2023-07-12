const staff = [

  {
    name: "Sowmiya Ramkarthik",
    role: "Outreach",
    description:
      ["I love being a part of the Kaladhaara family and I teach an adult Adavu class.","I really enjoy seeing new students learn and grow. This also gives me an opportunity to continue practicing Bharatanatyam."],
      imageSrc: "/dog.jpg",
  },
  {
    name: "Saritha Gorjalar",
    role: "",
    description:
      ["I started learning Bharatanatyam when I was a kid and completed Arangetram at the age of 14. Since childhood, dancing has been my main hobby and it gives me lots of happiness.","My body and mind feel refreshed after every practice. I am always grateful to God and my Gurus for teaching this art to me which I could carry through in all phases of my life.","I have been connected with Kaladhaara for the past few years and I am thankful for this opportunity and space to live with the art which I love. I teach a beginners batch in Kaladhaara and thoroughly enjoy teaching little ones and am proud to be a teacher and a part of Kaladhaara family."],
    imageSrc: "/dog.jpg",
  },
  {
    name: "Raji Viswanathan",
    role: "",
    description:
      ["I have been learning dance from a very young age. Dance gives me a good workout, freedom from mundane life, inner peace and sense of satisfaction.","I am lucky to be part of Kaladhara faculty, teaching the  foundational class to the students. I am also a student at the school and I am enjoying learning and teaching this beautiful form of dance."],
    imageSrc: "/dog.jpg",
  },
  {
    name: "Anuradha Sukumaran",
    role: "",
    description:
      ["I joined Kaladhaara in 2011 and have been rejoicing working with Mathura and the team for over a decade now. At Kaladhaara, I teach advanced level students and also work as digital marketing manager handling Kaladhaara's social media accounts. I also lead the SacAdavu group initiative.",
      "I work as a full time Systems Engineer and enjoy playing with my three boys. I am grateful for the opportunity to pass down the art form to the next gen in this community. Bharatanatyam is a mind space for me to let my inner self transcend to a dimension beyond the physical realm!"],
    imageSrc: "/dog.jpg",
  },
  {
    name: "Charanya Ramaswamy",
    role: "",
    description:
      ["I am very thankful to my parents for having introduced me to this dance form as a child. Even with a few breaks in between, I found my way back to dancing when I joined Kaladhaara a few years back.",
      "At Kaladhaara, I enjoy teaching beginner and intermediate level students and this keeps me accountable for my practices and progress as well. I love learning, performing, watching and this is my biggest stress buster! I work full time as a Hardware Engineer and enjoy being outdoors hiking or biking with my kids."],
    imageSrc: "/dog.jpg",
  },
  {
    name: "Anvita Chinthada",
    role: "",
    description:
      ["Bharatanatyam is the one and only passion in my life that I was able to experience and make progress in. This passion gave me opportunities that keep me going. I have been learning Bharatanatyam with Smt. Mathura Viswanathan since the age of 8. I did my Arangetram at the age of 15 and it was one of the most accomplishing and rewarding experiences in my life.",
      "Kaladhaara has given me numerous opportunities as a dancer which aided me to give back to this community of dancers by being able to teach as well. I'm grateful for this community's support I've had for the past few years and I hope to bring inspiration in the next generation of Bharatanatyam dancers."],
    imageSrc: "/dog.jpg",
  },
  {
    name: "Aarthi Krishnamurthy",
    role: "",
    description: ["Music has been a constant in my life, be it learning or performing from a young age and I am so grateful to Kaladhaara for giving me an opportunity to be in touch with music more through teaching Bhajans.", "The enthusiasm of the kids keeps me motivated each week. I look forward to each class as it gives me a chance to unwind, destress and be present."],
    imageSrc: "/dog.jpg",
  },
];

import Head from 'next/head'
export default function Staff() {
  return (
    <section>
      <Head>
          <title>Our Team - Kaladhaara</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
       <div className="">
            <h1 className='text-3xl font-semibold text-center'>TEAM KALADHAARA</h1>
        </div>
      <div className='flex flex-wrap justify-center'>
        <div
          key={0}
          className="flex rounded overflow-hidden shadow-lg m-2"
        >
          <img
            className="h-auto"
            src="/dog.jpg"
            alt="Mathura Viswanathan"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mathura Viswanathan</div>
            <p className="text-gray-700 text-base">Founder and Artistic Director</p>
              <p className="text-gray-700 text-base mt-2">
                I am the boss here
              </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
      {staff.map((staffMember) => (
        <div
          key={staffMember.name}
          className="max-w-xs rounded overflow-hidden shadow-lg m-2"
        >
          <img
            className="w-full h-auto"
            src={staffMember.imageSrc}
            alt={staffMember.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{staffMember.name}</div>
            <p className="text-gray-700 text-base">{staffMember.role}</p>
            {staffMember.description.map((line,idx)=>{
              return <p key={idx} className="text-gray-700 text-base mt-2">
                {line}
              </p>
            })
          }
          </div>
        </div>
      ))}
    </div>
    </section>
    
  );
}