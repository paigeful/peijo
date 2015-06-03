// Find the minimum angle between two hands on a 24 hour clock.
// Sample inputs
// 6:00; 18:00; 6:17; 18:17
// Corresponding output
// 90; 90; 7.75; 172.25

var minBase = 360 / 60; // 6
var hourBase = 360 / 24; // 15
var hourDelta = hourBase / 60; // 0.25

var clock = function (time) {
   // assume the time is in format "xx:xx"
  if (!time || time.indexOf(':') === -1) {
    return;
  }
  var colIdx = time.indexOf(':');
  var h = time.slice(0, colIdx);
  var m = time.slice(colIdx + 1);
  var degreeH;
  var degreeM;
  
  if (h.length < 1) {
    h = 0;
  }
  h = parseInt(h, 10);
  m = parseInt(m, 10);
  
  degreeH = h * hourBase + m * hourDelta;
  degreeM = m * minBase;
  
  angle = Math.abs(degreeH - degreeM);
  if (angle > 180) {
    angle -= 180;
  }
    
  return angle;
};

clock("6:00");
clock("18:00");
clock("6:17");
clock("18:17");
