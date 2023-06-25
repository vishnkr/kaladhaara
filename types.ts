export type Day = 'Monday' | 'Tuesday'| 'Wednesday'| 'Thursday'| 'Friday'| 'Saturday'| 'Sunday';
export interface Event{
    event:string,
    time:string
  }
export interface ScheduleData {
    locations: {
      name: string;
      schedule: Record<string, Event[]>;
    }[];
  }
  
export interface ScheduleTableProps {
    scheduleData: ScheduleData;
}