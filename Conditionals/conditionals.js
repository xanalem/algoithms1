// Now it also checks if its Monday monrning!
function superiorGreeting(d) {
    var hour = d.getHours();
    var day = d.getDay();
    if (hour < 10) {
        if (day == 0 || day == 6) {
            return "Go back to sleep! Its the weekend!";
        } else if (day == 1) {
            return "Ugh, its a Monday monring!";
        } else {
            return "Good morning!";
        }
    } else if (hour < 18) {
        return "Good day.";
    } else {
        return "Good evening!";
    }
}


// A SWITCH conditional statement!
function dayQuote(d) {
    var quote = "";
    switch (d.getDay()) {
        case 0:
            quote = "Day off - but Monday is on the way!";
            break;
        case 1:
            quote = "Ugh - its Monday :(";
            break;
        case 2:
            quote = "It's Tuesday - the weekend is a long way off.";
            break;
        case 3:
            quote = "It's Wednesday, halfway through.";
            break;
        case 4:
            quote = "It's Thursday - only one more day...";
            break;
        case 5:
            quote = "Thank God it's Friday!";
            break;
        case 6:
            quote = "It's Saturday! My favorite day! :)";
    }
    return quote;
}


// Demonstrates the DEFUALT keyword!
function simpleDayQuote(d) {
    var quote = "";
    switch (d.getDay()) {
        case 6:
            quote = "Today is Saturday - Yea!";
            break;
        case 0:
            quote = "Today is Sunday - Yea!";
            break;
        default:
            quote = "Looking forward to the Weekend!";
    }
    return quote;
}

function switcheroo(a) {
  var roo;
  switch (a%5) {
    case 0:
      roo = "A";
      break;
    case 1:
      roo = "B";
      break;
    case 2:
      roo = "C";
      break;
    default:
      roo = "D";
    }
  return roo;
}

