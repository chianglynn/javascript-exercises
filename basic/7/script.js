/*
Basic Exercise 7
Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
*/

for (let year = 2014; year <= 2050; year++) {
    let january1st = new Date(year, 0, 1);
    if (january1st.getDay() === 0) {
        console.log(`1st January is being a Sunday: ${year}`);
    }
}

