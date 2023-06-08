const d = new Date();
let month = d.getMonth()
let week = d.getDay()
let day = d.getDate()
let year = d.getFullYear()


console.log(month);
console.log(week);


let b = ""

switch (month) {
    case 0:
        b = "January"
        break
    case 1:
        b = "Fabruary"
        break
    case 2:
        b = "March"
        break
    case 3:
        b = "April"
        break
    case 4:
        b = "May"
        break
    case 5:
        b = "June"
        break
    case 6:
        b = "July"
        break
    case 7:
        b = "August"
        break
    case 8:
        b = "September"
        break
    case 9:
        b = "Octber"
        break
    case 10:
        b = "November"
        break
    case 10:
        b = "Decamber"
        break
}

r = ""
switch (week) {
    case 1:
        r = "Monday"
        break
    case 2:
        r = "Thusday"
        break
    case 3:
        r = "Wednesday"
        break
    case 4:
        r = "Thusday"
        break
    case 5:
        r = "Friday"
        break
    case 6:
        r = "Saturday"
        break
    case 7:
        r = "Sunday"
        break
}



document.getElementById("p").innerHTML = b
document.getElementById("week_p").innerHTML = r
document.getElementById("day_p").innerHTML = day
document.getElementById("year_p").innerHTML = year