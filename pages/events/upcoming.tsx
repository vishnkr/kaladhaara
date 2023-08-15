import Head from "next/head";
import { ReactNode } from "react";

const events: Event[] = [
  { date: "08/19/2023", month:"August",year:"2023", title: "Arangetram - Sahana Shankar" ,poster: '/events/sahana-arangetram.jpeg'},
  /*{ date: "08/13/2023", month:"August",year:"2023", title: "Cosmic Elements: Thematic performance by Mathura Viswanathan", 
    poster:'/events/cosmic-elements.jpg',
    jsxContent: <a href="https://www.zeffy.com/en-US/ticketing/a313ba08-eb0b-4139-a15f-ccea4176e29b" target="blank">
        <button className="rounded py-2 px-4 bg-red-800 text-white font-semibold"> Get tickets</button>
        </a>,
    id: 'cosmicElements'
  },
  { date: "08/12/2023", month:"August",year:"2023", title: "Arangetram - Hasmitha Vaibhavi Kanugula", poster: '/events/hasmitha-arangetram.jpeg'},

  { date: "08/05/2023", month:"August",year:"2023", title: "Arangetram - Samyukta and Sadhana Suresh", poster: '/events/samyukta-arangetram.jpeg' },*/
];

type Event = {
  date?: string; 
  month: string;
  year:string;
  title: string;
  poster?:string;
  jsxContent?: ReactNode; 
  id? :string;
};

export default function Upcoming() {
  const sortedEvents = events
    .filter((event) => event.date)
    .sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime());

  const eventsByDateAndMonth: { [key: string]: { [key: string]: Event[] } } = sortedEvents.reduce((acc, event) => {
    const formattedDate = new Date(event.date!).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const month = new Date(event.date!).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
    if (!acc[formattedDate]) {
      acc[formattedDate] = {};
    }
    if (!acc[formattedDate][month]) {
      acc[formattedDate][month] = [];
    }
    acc[formattedDate][month].push(event);
    return acc;
  }, {} as { [key: string]: { [key: string]: Event[] } });

  return (
    <section>
      <Head>
        <title>Upcoming Events - Kaladhaara</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-2 px-4 sm:py-24 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">UPCOMING EVENTS</h1>
        {Object.entries(eventsByDateAndMonth).map(([formattedDate, eventsByMonth]) => {
          return (
            <div key={formattedDate} className="mb-8">
              <div className="bg-red-800 rounded-lg p-2 mb-1 text-white text-center">
                <div className="text-4xl font-bold">{new Date(formattedDate).getDate()}</div>
                <div className="text-2xl font-semibold mt-1">{new Date(formattedDate).toLocaleDateString('en-US', { month: 'long' })}</div>
                <div className="text-lg mt-1">{new Date(formattedDate).getFullYear()}</div>
              </div>
              <div className="grid gap-4">
                {Object.entries(eventsByMonth).map(([month, events]) => (
                  <div key={month} className="mb-4">
                    {events.map((event) => (
                      <div key={event.title} id={event.id} className="bg-white p-6 rounded-lg shadow-md">

                        <p className="text-lg text-center md:text-2xl font-semibold mb-4">{event.title}</p>
                        {event.jsxContent && <div className="flex items-center justify-center m-2">{event.jsxContent}</div>}
                        {event.poster ?  (
                          <div className="h-auto max-w-[800px] mx-auto">
                            <img src={event.poster} alt={event.title} className="w-full h-full object-cover rounded-lg" />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

