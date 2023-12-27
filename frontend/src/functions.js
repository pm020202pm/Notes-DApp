export const formatDate= (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear().toString();
    const month_ind = date.getMonth();
    const day = date.getDate();
    return  day+ ' ' + Month[month_ind]+ '\'' + year[2] + year[3];

  }
export const formatTime= (timestamp) => {
    const date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = (minutes<10) ? "0"+minutes : minutes;
    const time = (hours>12) ? hours-12+":"+minutes+" PM": (hours===0) ? 12+":"+minutes+" AM": hours+":"+minutes+" AM";
    return time;

}


const Month = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ];