// add location, instructors, and schedule (day, start_time, end_time)
const trends = {
    code: "INFO1998",
    get class_representation() {
        return `${this.location} (${this.schedule.day} ${this.schedule.start_time} - ${this.schedule.end_time})`;
    }
};

console.log(trends);
console.log(trends.code);
console.log(trends["code"]);
//console.log(trends.class_representation);

// trends.code = "INFO1999";
// trends = {}; // eslint is warning!

let x = 7;
console.log(x);
// x = 8;
// console.log(x);