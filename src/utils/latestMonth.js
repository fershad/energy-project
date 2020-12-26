const calculateChange = (a, b) => {
    let percentChange = (a - b).toFixed(2);
    let changeDirection;

    if (percentChange > 0) {
        changeDirection = 'positive';
    } else if (percentChange === 0) {
        changeDirection = 'flat';
    } else {
        changeDirection = 'negative';
        // Make the value a positive number for display purposes
        percentChange *= -1;
    }

    return { percentChange, changeDirection };
};

const calculateTotal = (solar = 0, wind = 0, hydro = 0, geo = 0, nuclear = 0) => {
    const total = solar + wind + hydro + geo + nuclear;
    return total;
};

const latestMonth = async data => {
    const lastMonth = data[data.length - 1];
    const lastYear = data[data.length - 13];

    const comparisonData = {
        latestMonth: lastMonth.fields.Month,
        latestYear: lastMonth.fields.Year,
        lastYearMonth: lastYear.fields.Month,
        lastYear: lastYear.fields.Year,
        total: {
            latest: calculateTotal(
                lastMonth.fields.Wind,
                lastMonth.fields.Solar,
                lastMonth.fields.Hydroelectric,
                lastMonth.fields.Geothermal,
                lastMonth.fields.Nuclear
            ),
            lastYear: calculateTotal(
                lastYear.fields.Wind,
                lastYear.fields.Solar,
                lastYear.fields.Hydroelectric,
                lastYear.fields.Geothermal,
                lastYear.fields.Nuclear
            ),
            change: calculateChange(lastMonth.fields.Subtotal_Renewable, lastYear.fields.Subtotal_Renewable),
        },
        wind: {
            latest: lastMonth.fields.Wind,
            lastYear: lastYear.fields.Wind,
            change: calculateChange(lastMonth.fields.Wind, lastYear.fields.Wind),
        },
        solar: {
            latest: lastMonth.fields.Solar,
            lastYear: lastYear.fields.Solar,
            change: calculateChange(lastMonth.fields.Solar, lastYear.fields.Solar),
        },
        hydro: {
            latest: lastMonth.fields.Hydroelectric,
            lastYear: lastYear.fields.Hydroelectric,
            change: calculateChange(lastMonth.fields.Hydroelectric, lastYear.fields.Hydroelectric),
        },
        geo: {
            latest: lastMonth.fields.Geothermal,
            lastYear: lastYear.fields.Geothermal,
            change: calculateChange(lastMonth.fields.Geothermal, lastYear.fields.Geothermal),
        },
        nuclear: {
            latest: lastMonth.fields.Nuclear,
            lastYear: lastYear.fields.Nuclear,
            change: calculateChange(lastMonth.fields.Nuclear, lastYear.fields.Nuclear),
        },

        // Not included in clean energy but captured for display purposes
        biomass: {
            latest: lastMonth.fields.Biomass,
            lastYear: lastYear.fields.Biomass,
            change: calculateChange(lastMonth.fields.Biomass, lastYear.fields.Biomass),
        },
        waste: {
            latest: lastMonth.fields.Waste,
            lastYear: lastYear.fields.Waste,
            change: calculateChange(lastMonth.fields.Waste, lastYear.fields.Waste),
        },
    };

    return comparisonData;
};

module.exports = latestMonth;
