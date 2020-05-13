// Questions & Answer Data is added below
data = [ // Elements include s = section,  q = question, a = answer, r = reference
  { s: "Engine Anti-Ice GROUND", q: "Visible moisture at or below OAT C", a: 10, r: "AFM 02-01-2" },
  { s: "Engine Anti-Ice FLIGHT", q: "Visible moisture below OAT 10C to SAT C", a: -40, r: "AFM 02-01-2" },
  { s: "Wing Anti-Ice GROUND", q: "Visible moisture at or below OAT C", a: 5, r: "AFM 02-01-2" },
  { s: "Wing Anti-Ice FLIGHT", q: "Visible moisture =<10C and => ?? SAT C", a: -40, r: "AFM 02-01-2" },
  { s: "Cold Weather Operations", q: "Cold Weather Operations found in FCOM supplement #", a: 1, r: "AFM 02-03-6" },
  // {s:"Wing Anti-Ice FLIGHT", q:"anytime in icing conditions below airspeed KTS", a:210, r:"AFM 02-01-3"},
  { s: "Approaches", q: "Approach PROHIBITED at or steeper than (deg)", a: 4.5, r: "AFM 02-01-3" },
  { s: "Minimum Flight Crew", q: "Minimum number of flight crew members", a: 2, r: "AFM 02-01-4" },
  { s: "Weight & CG", q: "Maximum RAMP Weight (lbs)", a: 39000, r: "AFM 02-02-1" },
  { s: "Weight & CG", q: "Maximum Certified TAKEOFF Weight (lbs)", a: 38850, r: "AFM 02-02-1" },
  { s: "Weight & CG", q: "Maximum ZERO FUEL Weight (lbs)", a: 27200, r: "AFM 02-02-1" },
  { s: "Weight & CG", q: "Maximum Certified LANDING Weight (lbs)", a: 33750, r: "AFM 02-02-1" },
  { s: "Weight & CG", q: "Minimum Flight Weight (lbs)", a: 23100, r: "AFM 02-02-1" },
  { s: "Speeds", q: "VMO up to 8000ft KIAS", a: 300, r: "AFM 02-03-1" },
  { s: "Speeds", q: "VMO 8000 to 29475 ft KIAS", a: 320, r: "AFM 02-03-1" },
  { s: "Speeds", q: "Rough Air Penetration VRA 265KIAS / Mach...", a: 0.75, r: "AFM 02-03-1" },
  { s: "Speeds", q: "VLO RETRACTION KIAS", a: 200, r: "AFM 02-03-1" },
  { s: "Speeds", q: "VLO EXTENSION KIAS", a: 250, r: "AFM 02-03-1" },
  { s: "Speeds", q: "VLE Max Gear Extended KIAS", a: 250, r: "AFM 02-03-2" },
  { s: "Speeds", q: "VFE Flaps 10", a: 210, r: "AFM 02-03-2" },
  { s: "Speeds", q: "VFE Flaps 20", a: 210, r: "AFM 02-03-2" },
  { s: "Speeds", q: "VFE Flaps 30", a: 175, r: "AFM 02-03-2" },
  { s: "Speeds", q: "Maximum Tire Ground Speed KTS", a: 182, r: "AFM 02-03-2" },
  { s: "Takeoff & Landing", q: "Max takeoff & landing pressure altitude ft", a: 10000, r: "AFM 02-03-4" },
  { s: "Takeoff & Landing", q: "Maximum aircraft tailwind component", a: 10, r: "AFM 02-03-4" },
  // {s:"Takeoff & Landing", q:"Maximum TAKEOFF Crosswind", a:28, r:"AFM 02-03-4"},
  // {s:"Takeoff & Landing", q:"Maximum LANDING Crosswind", a:24, r:"AFM 02-03-4"},
  // {s:"Takeoff & Landing", q:"Contaminated TO&L Max Crosswind", a:10, r:"AFM 02-03-4"},
  { s: "Takeoff & Landing", q: "Max takeoff & landing runway slope degrees", a: 2, r: "AFM 02-03-4" },
  { s: "Enroute", q: "Maximum Pressure Altitude ft", a: 45000, r: "AFM 02-03-6" },
  { s: "Maneuvering Load Factors", q: "With Flaps UP, max POSITIVE 'Gs'", a: 2.6, r: "AFM 02-03-6" },
  { s: "Maneuvering Load Factors", q: "With Flaps UP, max NEGATIVE 'Gs'", a: -1, r: "AFM 02-03-6" },
  { s: "Maneuvering Load Factors", q: "With Flaps EXTENDED, max POSITIVE 'Gs'", a: 2, r: "AFM 02-03-6" },
  { s: "Air Conditioning", q: "No Air Con with no bleed beyond 30mins above OAT C", a: 40, r: "AFM 02-04-1" },
  { s: "Oxygen", q: "Crew and Pax Oxygen Mask NOT APPROVED above ft", a: 40000, r: "AFM 02-04-1" },
  { s: "Oxygen", q: "Pax Oxygen Mask NOT RECOMMENDED above ft", a: 25000, r: "AFM 02-04-1" },
  { s: "Pressurization", q: "Max Differential psi ON THE GROUND", a: 0.1, r: "AFM 02-04-1" },
  { s: "Pressurization", q: "Max Differential psi DURING LANDING", a: 1, r: "AFM 02-04-1" },
  { s: "Pressurization", q: "Max POSITIVE Differential psi in flight", a: 9.4, r: "AFM 02-04-1" },
  { s: "Pressurization", q: "Max NEGATIVE Differential psi in flight", a: -0.5, r: "AFM 02-04-1" },
  { s: "Autoflight", q: "Minimum Engage Height ft", a: 700, r: "AFM 02-04-1" },
  { s: "Autoflight", q: "Angle 3.5 deg or less, Minimum Use Height ft", a: 80, r: "AFM 02-04-2" },
  { s: "Autoflight", q: "Angle between 3.5 & 4.5 deg, Minimum Use Height ft", a: 160, r: "AFM 02-04-2" },
  { s: "Autoflight", q: "Visual & nonprecision, Minimum Use Height ft", a: 200, r: "AFM 02-04-2" },
  { s: "Autoflight", q: "Maximum altitude ft with Yaw Damper OFF", a: 31000, r: "AFM 02-04-2" },
  { s: "Avionics", q: "Use of FMS V-speed PROHIBITED above ISA C", a: 33, r: "AFM 02-04-6" }, // be careful where this applies - 20003-20407
  { s: "Electrical", q: "Maximum Continuous TWO & THREE Generators amps", a: 400, r: "AFM 02-04-20" },
  { s: "Electrical", q: "Maximum Continuous Single Generator on GROUND amps", a: 400, r: "AFM 02-04-20" },
  { s: "Electrical", q: "Maximum Continuous One Generator in FLIGHT amps", a: 500, r: "AFM 02-04-20" },
  { s: "Electrical", q: "Transient (5 min) in flight max amps", a: 600, r: "AFM 02-04-20" },
  { s: "Electrical", q: "No takeoff with battery temp below C", a: -20, r: "AFM 02-04-20" },
  { s: "Flight Controls", q: "No gear OR flaps extended above ft", a: 18000, r: "AFM 02-04-20" },
  { s: "Flight Controls", q: "No flight spoilers below approach speed plus kts", a: 8, r: "AFM 02-04-20" },
  { s: "Flight Controls", q: "No flight spoilers below altitude AGL", a: 500, r: "AFM 02-04-20" },
  { s: "Fuel Additives", q: "Prist 0.1 to ? % by volume of fuel", a: 0.15, r: "AFM 02-05-2" },
  { s: "Fueling", q: "Single point max psig", a: 55, r: "AFM 02-05-2" },
  { s: "Fueling", q: "Single point DEFUELING max psig", a: -8, r: "AFM 02-05-2" },
  { s: "Fueling", q: "PRESSURE refuel - Max fuel per tank lbs", a: 7075, r: "AFM 02-05-3" },
  { s: "Fueling", q: "PRESSURE refuel - Max TOTAL fuel lbs", a: 14150, r: "AFM 02-05-3" },
  { s: "Fueling", q: "GRAVITY refuel - Max fuel per tank lbs", a: 6500, r: "AFM 02-05-3" },
  { s: "Go-Around Min Fuel", q: "Minimum Fuel per side for a Go-Around", a: 500, r: "AFM 02-05-3" },
  { s: "Fuel Temperature", q: "Max fuel temperature for takeoff C", a: 50, r: "AFM 02-05-5" },
  { s: "Fuel Temperature", q: "Fuel temp >45C, min fuel for takeoff lbs", a: 2800, r: "AFM 02-05-5" },
  { s: "Fuel Temperature", q: "Fuel temp >45C, <1000lbs/side, engine run minutes max", a: 30, r: "AFM 02-05-5" },
  { s: "Fuel Temperature", q: "Minimum Jet A temperature for takeoff", a: -30, r: "AFM 02-05-5" },
  { s: "Fuel Temperature", q: "Minimum Jet-A1, JP-5 or JP-8 temperature for takeoff", a: -35, r: "AFM 02-05-5" },
  { s: "Fuel Temperature", q: "Minimum Jet-B or JP-4 temperature for takeoff", a: -40, r: "AFM 02-05-5" },
  { s: "Engine Type", q: "Engine type AS???-1-1A", a: 907, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Max starting ITT C", a: 650, r: "AFM 02-06-1" },
  // conditional -> {s:"Engine Limits", q:"Max AIR START ITT C", a:700, r:"AFM 02-06-1"},
  { s: "Engine Limits", q: "Min oil temp C for START", a: -40, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Min oil temp for TAKEOFF WITH Prist and CWO procs", a: 15, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Min oil temp for TAKEOFF NO Prist", a: 27, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Min N2 IDLE", a: 46, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Normal Takeoff power time limit mins", a: 5, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "APR (single eng) Takeoff power time limit mins", a: 10, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Minimum oil psi at IDLE", a: 28, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Max Continuous Climb MAX N1", a: 95.2, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Max Continuous Climb MAX N2", a: 97.2, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Max Continuous Climb MAX ITT", a: 928, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Max Continuous Climb MAX OIL TEMP C", a: 138, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Normal Takeoff MAX N1", a: 96.1, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Normal Takeoff MAX N2", a: 97.2, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Normal Takeoff MAX ITT", a: 928, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Normal Takeoff MAX OIL TEMP C", a: 138, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "APR Max Pwr max N1", a: 96.1, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "APR Max Pwr max N2", a: 98.1, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "APR Max Pwr max ITT", a: 946, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "APR Max Pwr max OIL TEMP C", a: 138, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "Min temp required to operate engine above IDLE", a: 5, r: "AFM 02-06-1" },
  { s: "Engine Limits", q: "After 3 consecutive starts, cooling minutes", a: 15, r: "AFM 02-06-2" },
  { s: "Engine Limits", q: "Seconds of cooling after aborted start", a: 30, r: "AFM 02-06-2" },
  { s: "Engine Limits", q: "Engine can be 'cranked' for how many minutes", a: 5, r: "AFM 02-06-2" },
  { s: "Thrust Reverser", q: "Thrust reverser above idle prohibited below KIAS", a: 40, r: "AFM 02-06-2" },
  { s: "APU", q: "APU type Honeywell ??-150BD", a: 36, r: "AFM 02-06-3" },
  { s: "APU", q: "Max altitude for APU OPERATION", a: 37000, r: "AFM 02-06-3" },
  { s: "APU", q: "Max altitude for APU Generator", a: 30000, r: "AFM 02-06-3" },
  { s: "APU", q: "Max altitude for APU Bleed for engine start or ECS", a: 20000, r: "AFM 02-06-3" },
  { s: "APU", q: "Max alt to start left engine with APU on ground", a: 9000, r: "AFM 02-06-3" },
  { s: "APU", q: "Maximum altitude to start APU on ground", a: 14000, r: "AFM 02-06-4" },
  { s: "APU", q: "During 1st 3 APU start attempts, cooling time (mins)", a: 1, r: "AFM 02-06-4" },
  { s: "APU", q: "AFTER 1st 3 APU start attempts, cooling time (mins)", a: 20, r: "AFM 02-06-4" },
  { s: "APU", q: "6 successive APU starts with 10min intervals, then cooling time (mins)", a: 60, r: "AFM 02-06-4" },
  { s: "APU", q: "Aircraft limitation max KIAS for APU infligth start", a: 285, r: "AFM 02-06-4" },
  { s: "APU", q: "Max APU RPM %", a: 108, r: "AFM 02-06-3" },
  { s: "APU", q: "Max APU EGT for start", a: 973, r: "AFM 02-06-3" },
  { s: "APU", q: "Max APU EGT for normal operations", a: 718, r: "AFM 02-06-3" }
];

// Shuffle questions Data
data = shuffle(data);

var i = 0; // set to first question/answer.
var input = "";  // answer_box input will go here
var last_question = data.length; // set last question reference
// var timer_started_flag = false;
var strikes = 0; // count wrong answers
const question_section = document.getElementById('question_section');
const question_box = document.getElementById('question_box');
const answer_box = document.getElementById('answer_box');
const question_ref = document.getElementById('question_ref');
const info_box = document.getElementById('info');

/* -------------------FOR BUTTON SELECTION NEEDS REFACTORED----------- */
function show_instructions() {
  document.getElementById('container-title').style.display = "none";
  document.getElementById('container-instructions').style.display = "block";
}

function close_instructions() {
  document.getElementById('container-instructions').style.display = "none";
  document.getElementById('container-title').style.display = "block";
}

function show_high_score() {
  document.getElementById('container-title').style.display = "none";
  document.getElementById('container-high-score').style.display = "block";
}

function close_high_score() {
  document.getElementById('container-high-score').style.display = "none";
  document.getElementById('container-title').style.display = "block";
}

function GO() {
  document.getElementById('container-title').style.display = "none";
  document.getElementById('container-quiz').style.display = "block";
  start_timer();
}

function quit_quiz() {
  document.getElementById('container-quiz').style.display = "none";
  document.getElementById('container-title').style.display = "block";
}
/* -----------^^^^^NEEDS TO BE REFACTORED^^^^^^------------------- */


function pad_number(number){ /* USED TO PAD A TIME WITH ZEROS FOR DISPLAY */
  if (number < 10){
    number = "0" + number;
  }
  return number;
}

function time_string(t){ /* CONVERT SECONDS TO MINUTES:SECONDS WITH PADDING */
  minutes = Math.floor(t/60);
  seconds = t - (minutes*60);
  return (pad_number(minutes) + ":" + pad_number(seconds));
}

function start_timer() {
  // Start the timer
  var now = new Date(),
    start = now.getTime(),
    day = now.getUTCDate(),
    month = now.getUTCMonth(),
    year = now.getUTCFullYear(),
    elapsed = '0.0';

    document.getElementById("day-month").innerHTML = pad_number(day) + " " + pad_number(month);
    document.getElementById("year").innerHTML = year.toString().slice(2);

  window.setInterval(function () {
    var time = new Date().getTime() - start;

    elapsed = Math.floor(time / 1000);
    remaining = 600 - elapsed;


    document.getElementById("elapsed-time").innerHTML = time_string(elapsed);
    document.getElementById("remaining-time").innerHTML = time_string(remaining);

  }, 100);
}

answer_box.addEventListener("keyup", function (event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    // document.getElementById("myBtn").click();
    var input = this.value;
    // Do whatever you want with the input
    result = check_answer(input);
    if (result == "correct") {
      i++;
      if (i < last_question) {
        info_box.innerHTML = "";
        ask_question(i);
      }
      else {
        end_quiz();
      }
    }
    else {
      // If answer is incorrect, change the background color.
      document.getElementById('container-quiz').style.backgroundColor = 'rgba(255, 165, 0, 0.8)';
      // If wrong more than once, show the answer.
      if (strikes > 1) {
        info_box.innerHTML = "The answer is: " + data[i].a;
      }
      answer_box.select();
    }
  }
});

function ask_question(n) {
  var percentage_done = parseInt(i / last_question * 100);

  document.getElementById('percent-box').innerHTML = percentage_done + "%";

  // CALCULATE AND APPLY ROTATION TO GREEN PERCENTAGE ARROW ON GAUGE
  rotate_gauge = (percentage_done * 2.5) - 90;
  transform_value = "translate(60px, 60px) rotate(" + rotate_gauge + "deg)";
  document.getElementById('gauge-arrow').style.transform = transform_value;

  document.getElementById('container-quiz').style.backgroundColor = '';  //reset background after incorrect
  question_section.innerHTML = data[n].s; // write the question section to the page
  question_box.innerHTML = data[n].q; // write the question to the page
  question_ref.innerHTML = data[n].r; // write the reference to the page
  answer_box.value = "";  // empty answer_box of last answer
  answer_box.focus(); // draw focus to the answer_box
}

function check_answer(my_answer) {
  var correct_answer = data[i].a;
  if (my_answer == correct_answer) {
    strikes = 0;
    result = "correct";
  }
  else {
    strikes++;
    result = "incorrect";
  }
  return result;
}

function end_quiz() {
  let end_time = gauge.getValue();
  info_box.innerHTML = "You have finished the quiz in " + end_time + " seconds.";
}

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

ask_question(i);
