// Utility to generate an array of years from a start to an end year
const generateYearsArray = (startYear: number, endYear: number): number[] => {
    const years: number[] = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  };
  
  // Generate an array of years from 1900 to the current year
  const currentYear = new Date().getFullYear();
  const years = generateYearsArray(1900, currentYear);
  
  console.log(years);
  