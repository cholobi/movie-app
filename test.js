// Utility to generate an array of years from a start to an end year
var generateYearsArray = function (startYear, endYear) {
    var years = [];
    for (var year = endYear; year >= startYear; year--) {
        years.push(year);
    }
    return years;
};
// Generate an array of years from 1900 to the current year
var currentYear = new Date().getFullYear();
var years = generateYearsArray(1900, currentYear);
console.log(years);
