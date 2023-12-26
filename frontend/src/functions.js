export const formatDate= (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return  day+ '-' + month + '-' + year;

  }
export const formatTime= (timestamp) => {
    const date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = (minutes<10) ? "0"+minutes : minutes;
    const time = (hours>12) ? hours-12+":"+minutes+" PM": (hours===0) ? 12+":"+minutes+" AM": hours+":"+minutes+" AM";
    return time;

}