import Head from "next/head";

type Event = {
  date: string; // Change this to the appropriate date format (e.g., "August")
  title: string;
};

const events: Event[] = [
  { date: "August 2023", title: "Journey: Thematic performance by Mathura Viswanathan" },
  { date: "August 2023", title: "Hasmita's Arangetram" },
  { date: "August 2023", title: "Sahana's Arangetram" },
  { date: "August 2023", title: "Samyuktha's Arangetram" },
  { date: "August 2023", title: "Sadhana's Arangetram" },
];

export default function Upcoming() {
  const eventsByMonth: { [key: string]: string[] } = events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event.title);
    return acc;
  }, {} as { [key: string]: string[] });

  return (
    <section>
      <Head>
        <title>Upcoming Events - Kaladhaara</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-4">UPCOMING EVENTS</h1>
        {Object.entries(eventsByMonth).map(([month, events]) => (
          <div key={month} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{month}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {events.map((event) => (
                <div key={event} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-md text-center md:text-lg font-bold mb-4">{event}</p>
                  <div className="bg-gray-200 h-px w-1/2 mx-auto"></div>
                  
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}