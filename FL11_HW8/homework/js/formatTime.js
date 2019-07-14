function formatTime(n) {
  let time = "";

  let days = Math.floor((n / 1440));
  let hours = Math.floor((n % (1440)) / 60);
  let minutes = Math.floor((n % (1440)) % 60);



  time = days + " day(s) " + hours + " hour(s)" + minutes + 'minute(s)';
  return time;
}

formatTime(120); 
formatTime(59);
formatTime(3601);