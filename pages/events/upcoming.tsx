import Head from "next/head";
import { ReactNode } from "react";

const events: Event[] = [
  { 
    year: "2025", 
    title: "Sac Valley Margazhi",
    id: 'sac-valley-margazhi-2025'
  },
  { 
    year: "2025", 
    title: "Sacramento Natyanjali",
    id: 'sacramento-natyanjali-2025'
  },
  { 
    year: "2025", 
    title: "Spring Showcase",
    id: 'spring-showcase-2025'
  },
  { 
    year: "2025", 
    title: "Natyanjali - India",
    id: 'natyanjali-india-2025'
  },
  { 
    year: "2025", 
    title: "Arangetrams",
    id: 'arangetrams-2025'
  },
  { 
    year: "2025", 
    title: "Thematic Presentation",
    id: 'thematic-presentation-2025'
  }
];


type Event = {
  date?: string; 
  month?: string;
  year: string;
  title: string;
  poster?: string;
  jsxContent?: ReactNode; 
  id? :string;
};

export default function Upcoming() {
  const sortedEvents = events
    .filter((event) => event.year)
    .sort((a, b) => {
      // If date is available, use it for sorting
      if (a.date && b.date) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      // Otherwise, sort by year
      return parseInt(b.year) - parseInt(a.year);
    });

  const eventsByDateAndMonth: { [key: string]: { [key: string]: Event[] } } = sortedEvents.reduce((acc, event) => {
    let formattedDate: string;
    let month: string;

    // If full date is available
    if (event.date) {
      formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      month = new Date(event.date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      });
    } else {
      // If only year is available
      formattedDate = `01/01/${event.year}`;
      month = event.year;
    }

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
        {events.length === 0 ? (
          <p className="text-lg text-center">There are no upcoming events at this time. Stay tuned for future event announcements!</p>
        ) : (
          Object.entries(eventsByDateAndMonth).map(([formattedDate, eventsByMonth]) => {
            const dateObj = new Date(formattedDate);
            
            return (
              <div key={formattedDate} className="mb-8">
                <div className="bg-red-800 rounded-lg p-2 mb-1 text-white text-center">
                  {/* Only show date and month if available */}
                  {dateObj.getDate() && dateObj.getDate() !== 1 ? (
                    <>
                      <div className="text-3xl font-bold">{dateObj.getDate()}</div>
                      <div className="text-xl font-semibold mt-1">
                        {dateObj.toLocaleDateString('en-US', { month: 'long' })}
                      </div>
                    </>
                  ) : null}
                  
                  {/* Always show year */}
                  <div className="text-lg mt-1">{dateObj.getFullYear()}</div>
                </div>
                
                <div className="grid gap-4">
                  {Object.entries(eventsByMonth).map(([month, events]) => (
                    <div key={month} className="mb-4">
                      {events.map((event) => (
                        <div 
                          key={event.title} 
                          id={event.id} 
                          className="bg-white p-6 rounded-lg shadow-md"
                        >
                          <p className="text-lg text-center md:text-2xl font-semibold mb-4">
                            {event.title}
                          </p>
                          
                          {event.jsxContent && (
                            <div className="flex items-center justify-center m-2">
                              {event.jsxContent}
                            </div>
                          )}
                          
                          {event.poster && (
                            <div className="h-auto max-w-[800px] mx-auto">
                              <img 
                                src={event.poster} 
                                alt={event.title} 
                                className="w-full h-full object-cover rounded-lg" 
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}