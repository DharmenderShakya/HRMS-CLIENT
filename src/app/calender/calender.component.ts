import { Component } from '@angular/core';
import { CalendarOptions} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list'


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  datedd:any='2024-02-21';
  showList: boolean = false;

  calendarOptions: CalendarOptions = {
    plugins: [ dayGridPlugin,timeGridPlugin, interactionPlugin,listPlugin], // include the dayGrid plugin
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    events: [ // your event data
      { title: 'Event 1', date: this.datedd },
      { title: 'Event 2', date: '2024-02-22' }
      // more events...
    ],
    dayMaxEvents: true,
    weekends: true, 
      editable: true,
      
  };

  
  constructor() { }

  ngOnInit(): void {
  }

}
