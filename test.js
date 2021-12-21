function changeToTime(time) {
  let t = time.toString();
  var second = t.split(".")[0];
  var minute = parseInt(parseInt(second) / 60);
  var sec = parseInt(parseInt(second) % 60);
  return minute + ":" + sec;
}

var t = changeToTime(245.23);
console.log(t);
