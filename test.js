var test = require('tape')
  , Clock = require('./tiny-clock');

test("the Clock constructor should construct a new clock object", function (t) {
  var clock = new Clock; 

  t.plan(2);
  t.ok(typeof Clock === "function", "Clock is a constructor");
  t.ok(typeof clock === "object", "Clock is an object");
});

test("clock instantiates with timeStamp, startTime, and stopTime", function (t) {
  var clock = new Clock;

  t.plan(3);
  t.ok(clock.timeStamp === null, "timeStamp initialized as null");
  t.ok(clock.startTime === null, "startTime initialized as null");
  t.ok(clock.stopTime === null, "stopTime initialized as null");
});

//getElapsed
test("getElapsed returns diff between currentTime and startTime or 0",
function (t) {
  var clock = new Clock
    , startTime = Date.now()
    , newTime;

  t.plan(2);
  t.same(clock.getElapsed(), 0, "if no starttime, just return 0");
  
  clock.startTime = startTime;
  setTimeout(function () {
    newTime = Date.now();
    t.same(
      clock.getElapsed(), 
      newTime - startTime,
      "elapsed time is current time - starttime"
    ); 
  }, 20);
});
