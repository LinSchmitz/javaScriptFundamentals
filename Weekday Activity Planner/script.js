const day = "sunday";

switch (day) {
  case "monday":
    console.log(`Today is ${day}. Activity: Study JavaScript.`);
    break;
  case "tuesday":
    console.log(`Today is ${day}. Activity: Practice coding.`);
    break;
  case "wednesday":
    console.log(`Today is ${day}. Activity: Work on a project.`);
    break;
  case "thursday":
    console.log(`Today is ${day}. Activity: Review old topics.`);
    break;
  case "friday":
    console.log(`Today is ${day}. Activity: Light coding & chill.`);
    break;
  case "saturday":
    console.log(`Today is ${day}. Activity: Plan next week.`);
    break;
  case "sunday":
    console.log(`Today is ${day}. Activity: Free day 🎉.`);
    break;

  default:
    console.log(" Invalid day. Please enter a valid weekday.");

    break;
}
