import scheduleJSON from './schedule.json'
import ScheduleTable from '@/components/ScheduleTable'
import Head from 'next/head'

export default function Schedule(){
    return <section>
        <Head>
          <title>Schedule - Kaladhaara</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
            <div className="mb-5">
                <h1 className='text-2xl text-center'>SCHEDULE</h1>
            </div>
            <ScheduleTable scheduleData={scheduleJSON}/>
        </div>
    </section>
}