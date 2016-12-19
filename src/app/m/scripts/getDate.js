function getDate(days) {
  var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var now = new Date();
  now.setDate(now.getDate() + days);
  var nowString = monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
  document.write(nowString);
}
