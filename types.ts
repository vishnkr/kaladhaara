export type Day = 'Monday' | 'Tuesday'| 'Wednesday'| 'Thursday'| 'Friday'| 'Saturday'| 'Sunday';
export interface Event{
    event:string,
    time:string
  }
export interface ScheduleData {
    locations: {
      name: string;
      schedule: any;
    }[];
  }
  
export interface ScheduleTableProps {
    scheduleData: ScheduleData;
}