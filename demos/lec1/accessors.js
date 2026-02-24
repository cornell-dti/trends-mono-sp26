// add location, instructors, and schedule (day, start_time, end_time)
const trends = {
    code: "INFO1998",
    location: "Upson 216",
    instructors: ["Esha", "Hannah", "Lauren"],
    schedule: {
        day: "Monday",
        start_time: "7:30 PM",
        end_time: "8:45 PM"
    },
    "ugly key": "pretty_value",
    get class_representation() {
        return `${this.location} (${this.schedule.day} ${this.schedule.start_time} - ${this.schedule.end_time})`;
    }
};

console.log(trends);
console.log(trends.code);
console.log(trends["code"]);
console.log(trends["ugly key"]);
console.log(trends.class_representation);

trends.code = "INFO1999";
console.log(trends.code);

let x = 7;
console.log(x);
x = 8;
console.log(x);