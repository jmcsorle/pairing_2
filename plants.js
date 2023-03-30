var gets_sunshine = false
var ounces_of_water = 10

if (gets_sunshine === true && ounces_of_water >= 10) {
    console.log("This plant will thrive.");
}
else if (gets_sunshine === true || ounces_of_water >= 10) {
    console.log("You only received one source of nutrients.");
}
else {
    console.log("This plant will not thrive.");
}