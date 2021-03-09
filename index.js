var i, j, p = 0,
    k = 0,
    w = 0;
var lenght_home = parseFloat(prompt("Enter your number home : "));
var number_waterWell = parseFloat(prompt("Enter your number_waterWell   : "));
var number_jump = parseFloat(prompt("Enter your number_jump: "));
var home = new Array();
var jump = new Array();
var Well = new Array()

var test = parseInt(lenght_home / 4);


while (number_waterWell > lenght_home) {
    number_waterWell = parseFloat(prompt("Enter your number_waterWell less than the number home : "));
};
while (number_jump > test) {
    number_jump = parseFloat(prompt("Your number of jumps must be less than the number in front : " + test));
};

myFunction(lenght_home, number_waterWell, number_jump);


function myFunction(lenght_home, number_waterWell, number_jump) {

    for (i = 1; i <= number_waterWell; i++) {
        // randomNumber = start + Math.floor(Math.random() * (end-start));
        random_holds = 1 + Math.floor(Math.random() * (lenght_home));
        if (home[random_holds] == null) {
            home[random_holds] = "waterWell";
            Well[w] = random_holds;
            var sortWell = Well.sort(function(a, b) { return a - b });
            document.getElementById("demo2").innerHTML = sortWell;
            w++;
        } else
            (i--)
        document.getElementById("demo1").innerHTML = home;
    }
    for (j = 0; k <= number_jump; j = j + 4) {
        if (home[j] != "waterWell") {
            jump[p] = j;
            document.getElementById("demo3").innerHTML = jump;
            p++;
        }
        k++
    }
}