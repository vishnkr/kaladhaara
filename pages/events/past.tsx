import Head from "next/head";
import { useState } from "react";

const events = [

  { date: '2023-01', event: 'Margazhi performance in Sri Venkateshwara temple' },
  { date: '2023-01', event: 'Srinivasa Kalyanam TAGS Sacramento' },
  { date: '2023-03', event: 'Sangam 2023: Annual day' },
  { date: '2023-03', event: 'Performance at “Together Women Rise”' },
  { date: '2023-03', event: 'Sargolsav Bharatanatyam competition' },
  { date: '2023-03', event: 'Rama Navami performance at Sri Venkateshwara temple' },
  { date: '2023-04', event: 'Sacramento Natyanjali' },
  { date: '2023-04', event: 'Fit to Dance workshop' },
  { date: '2023-04', event: 'Maha Rudra festival' },

  { date: '2022-02', event: 'Pongal Celebration by Sacramento Tamil Sangam, CA' },
  { date: '2022-03', event: 'ISCKON, Sacramento, CA' },
  { date: '2022-03', event: 'Shivaratri performances, Mather, CA' },
  { date: '2022-04', event: 'Sree Seetrama Kalyanam at CTS, Sacramento, CA' },
  { date: '2022-06', event: 'Stuti Chauhan Arangetram' },
  { date: '2022-08', event: 'Of love and Longing, B street theatre, Sacramento' },
  { date: '2022-08', event: 'Anika and Amritha Arangetram', img:'/arangetram/amritha.jpg'},
  { date: '2022-09', event: 'Samyuktha arangetram' },
  { date: '2022-10', event: 'Vijayadashmi performance at in-home Mather theater' },
  // Events for 2021
  { date: '2021-01', event: 'Marghazi Kala Utsavam, Kaladhaara production, Mather, CA' },
  { date: '2021-05', event: 'Vasantha Navaratri Series by Sri Kanakshi Community Center, Santa Clara, CA' },
  { date: '2021-08', event: 'Sangam, Kaladhaara production, Mather, CA' },
  { date: '2021-10', event: 'Fall Family dance by International Dance Arts Collective' },
  { date: '2021-10', event: 'Vijayadashmi performance at Sri Venkateshwara Temple, Sacramento, CA' },
  { date: '2021-10', event: 'BALLAD OF THE GODS, Kaladhaara production, Sacramento, CA' },

  // Events for 2020
  { date: '2020-01', event: 'Adavuthon/Suryanmaskar workshop' },
  { date: '2020-02', event: 'India Tour of Mathura and students of Kaladhaara' },
  { date: '2020-03', event: 'Sacramento Natyanjali' },
  { date: '2020-06', event: 'Kaladhaara Annual day Performance' },

  // Events for 2019
  { date: '2019-01', event: 'Adavuthon' },
  { date: '2019-02', event: "Mathura's India tour" },
  { date: '2019-03', event: 'Natyanjali, Sacramento, CA' },
  { date: '2019-03', event: 'iFest' },
  { date: '2019-04', event: 'VTSeva' },
  { date: '2019-06', event: 'Annual Summer Kriya' },
  { date: '2019-07', event: "Aruna's Arangetram", img: '/arangetram/aruna.jpg'},
  { date: '2019-08', event: "Anvita's Arangetram" , img: '/arangetram/anvita.jpg'},
  { date: '2019-09', event: "Stuti's Arangetram" , img: '/arangetram/stuti.jpg'},
  { date: '2019-09', event: 'Salangai poojai 2019, Saptami competitions' },
  { date: '2019-09', event: 'Saptami Competitions, San Jose, CA' },
  { date: '2019-10', event: 'Sangam 2019' },
  { date: '2019-11', event: 'Diwali Mela' },
  { date: '2019-12', event: 'Dance Make-up workshop' },

  // Events for 2018
  { date: '2018-02', event: 'HTC Tamil Chair Performance' },
  { date: '2018-03', event: 'Sacramento Natyanjili' },
  { date: '2018-04', event: 'Annamayya Day Performance for Silicon Andhra University' },
  { date: '2018-04', event: 'Samavesha by Srikanth & Aswathy Annual Summer Workshop' },
  { date: '2018-07', event: "Avanthika Panchapakesan's Arangetram" },
  { date: '2018-08', event: "Vatsalya Narayan's Arangetram", img: '/arangetram/vatsu.jpg'},
  { date: '2018-09', event: 'Salangai Poojai Performance by Anika M, Samyuktha R, Shriya, Samyuktha S, Amirtha B' },
  { date: '2018-10', event: 'Annual Vijayadasami Celebrations' },
  { date: '2018-11', event: 'Adavu Clinic Part 1' },
  { date: '2018-12', event: 'Performances at Nrithyotsav and Concord Temple fundraiser' }
];

const EventList = () => {
  const getFormattedDate = (dateString:string) => {
    const [year, month] = dateString.split('-');
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return `${monthNames[parseInt(month) - 1]} - ${year}`;
  };
  const getUniqueYears = () => {
    const uniqueYears:string[] = [];
    events.forEach((event) => {
      const year = event.date.split('-')[0];
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
    return uniqueYears;
  };

  const years = getUniqueYears();
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handleYearChange = (event:any) => {
    setSelectedYear(event.target.value);
  };

  const filteredEvents = events.filter((event) => event.date.startsWith(selectedYear));


  return (
    <div className="max-w-2xl mx-auto py-2 px-4 sm:py-24 sm:px-6 lg:max-7-xl lg:px-8">
      <Head>
        <title>Past Events - Kaladhaara</title>
      </Head>
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">PAST EVENTS</h1>
      <div className="mb-6">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="block w-full border rounded-lg py-2 px-3 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {filteredEvents.map((event, index) => (
        <div key={index} className="mb-6 grid-cols-1 gap-4 md:grid-cols-2">
          {index === 0 || filteredEvents[index - 1].date !== event.date ? (
            <div className="bg-white rounded-lg p-4 shadow-md mb-2">
              <h2 className="text-xl font-bold mb-2">{getFormattedDate(event.date)}</h2>
              <div className="grid grid-cols-1 gap-y-2">
                {filteredEvents
                  .filter((e) => e.date === event.date)
                  .map((e, idx) => (
                    <div key={idx}>
                      <p className="text-lg">{e.event}</p>
                      {e.img && (
                        <img src={e.img} className="w-full h-auto mt-4" />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};


export default function Past(){
    return <section>
            <EventList />
    </section>
}