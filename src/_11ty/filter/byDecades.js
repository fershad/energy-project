module.exports = arr => {
    // Loop array to get each unique year
    // Loop through again & assign monthly data for each year
    const decades = [];
    let prevYear = 0;
    let prevDecade = 0;
    let years = [];
    let monthlyData = [];
    let decade;

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        const westernYear = el.fields.Year + 1911;
        const thisDecade = Math.floor(westernYear / 10) * 10;

        if (prevDecade == 0) {
            prevDecade = thisDecade;
        }

        if (thisDecade != prevDecade) {
            years.push(monthlyData);
            // This removes the first empty element of the arrays that are reset below
            if (years[0].length == 0) {
                years.shift();
            }
            const data = {
                decade,
                years,
            };
            decades.push(data);
            years = [];
            monthlyData = [];
            prevDecade = thisDecade;
        }

        decade = thisDecade;

        if (prevYear == 0) {
            prevYear = westernYear;
        }

        if (westernYear != prevYear) {
            years.push(monthlyData);
            monthlyData = [];
            prevYear = westernYear;
        }

        monthlyData.push(el);
    }

    // const uniqueYears = years.filter(unique)
    years.push(monthlyData);
    // This removes the first empty element of the arrays that are reset below
    if (years[0].length == 0) {
        years.shift();
    }
    const data = {
        decade,
        years,
    };
    decades.push(data);
    return decades;
};
