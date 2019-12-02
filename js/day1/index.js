const fs = require("fs");

module.exports = {
     calculatedFuel() {
          const results = fs
               .readFileSync(`${__dirname}/input.txt`)
               .toString()
               .trim()
               .split("\n");

          return results.map(result => Math.floor(result / 3) - 2);
     },

     part1() {
          const result = this.calculatedFuel().reduce(
               (previousValue, currentValue) => previousValue + currentValue,
               0
          );

          return result;
     },

     part2() {
          let total = 0;

          this.calculatedFuel().forEach(mass => {
               let fuelNeeded = mass;
               while (fuelNeeded > 0) {
                    fuelNeeded = Math.floor(fuelNeeded / 3) - 2;
                    if (fuelNeeded > 0) {
                         total += fuelNeeded;
                    }
               }
          });

          return this.part1() + total;
     }
};
