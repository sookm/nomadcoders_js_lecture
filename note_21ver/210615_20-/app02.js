// #2.5 Arrays
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

const nonsense = [1, 2, "hello", false, null, undefined, "turi"];

console.log(daysOfWeek, nonsense);
  // > ["mon", "tue", "wed", "thu", "fri", "sat", "sund"]
  // > [1, 2, "hello", false, null, undefined, "turi"]
// you can put whatever you want such as number, variables, false, true, null so on

// *Get Item from Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek[4]);
  // > fri

// *Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);
  // > ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]


// #2.6 Objects

const player = {
    name: "turi",
    points: 10,
    fat: true
};
console.log(player["name"]);

console.log(player);


player.fat = false;
console.log(player);

// you can just create any properties that you wnat 
player.lastName = "potato";
console.log(player);