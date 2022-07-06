const string = "target";
const reverse = [];
let ri = 0;
for (let i = string.length - 1; i >= 0; i--) {
    reverse[ri] = string[i];
    ri++;
}
console.log(reverse.join(""));
