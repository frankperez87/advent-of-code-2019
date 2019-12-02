const day1 = require("./day1");

const dayPicked = process.argv[2];

switch (dayPicked) {
     case "1":
          console.log("Day 1");
          console.log("Part 1:", day1.part1(), 'minimum fuel needed.');
          console.log("Part 2:", day1.part2(), 'total fuel needed.');
          break;
     default:
          throw new Error("Invalid day selection.");
}
