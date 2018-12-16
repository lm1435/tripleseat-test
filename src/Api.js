import Data from './data.json'

const getDate = (date) => new Date(date);

const formatDate = (date) => {
  let d = getDate(date);
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let day = d.getDate();
  let formatted = month + ' ' + day + ' ' + year;
  return formatted;
}

const formatTime = (date) => {
  let d = getDate(date);
  let hours = d.getHours();
  let minutes = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  let startTime = hours == 12 ? hours + ':' + minutes + " PM" : hours < 12 ? hours + ':' + minutes + " AM" : hours-12 + ':' + minutes + " PM";
  return startTime;
}

const transformEvent = (event) => {
  event.normalized_name = event.name.toLowerCase();
  event.start_time_display = formatTime(event.event_start);
  event.end_time_display = formatTime(event.event_end);
  event.date_display = formatDate(event.event_start);
  return event;
}

const getEvents = () => {
  return Data.events
    .map(transformEvent)
    .sort((a, b) => (a.event_start < b.event_start) ? -1 : ((a.event_start > b.event_start) ? 1 : 0));
}

export default {
  getEvents
}