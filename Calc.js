function calculate() {
    // console.log(cd.value.slice(0, 4)); // esase string ka value set karte h pr avi chahiye integer value. uske liye niche code likha h..

    let year;
    let month;
    let day;

    let currentDay = parseInt(cd.value.slice(8, 10), 10);
    let currentMonth = parseInt(cd.value.slice(5, 7), 10);
    let currentYear = parseInt(cd.value.slice(0, 4), 10);
    console.log('current date :- ', currentYear, currentMonth, currentDay);

    let birthDay = parseInt(DOB.value.slice(8, 10), 10);
    let birthMonth = parseInt(DOB.value.slice(5, 7), 10);
    let birthYear = parseInt(DOB.value.slice(0, 4), 10);
    console.log('DOB :-', birthYear, birthMonth, birthDay);

    if (currentDay >= birthDay) {
        day = currentDay - birthDay;
    } else {
        day = currentDay + new Date(currentYear, currentMonth).getDate() - birthDay;
        currentMonth--;
    }

    if (currentMonth >= birthMonth) {
        month = currentMonth - birthMonth;
    } else {
        month = currentMonth + 12 - birthMonth;
        year--;
    }

    year = currentYear - birthYear;

    if (year < 0) {
        ageText.innerHTML = "ABE KYA MAZAK KR RAHA HAI";
    } else {
        ageText.innerHTML = year + " years, " + " months, " + " days ";
    }

}