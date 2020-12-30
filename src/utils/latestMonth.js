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

const calculateTotal = (values = []) => {
    let total = 0;
    for (let index = 0; index < values.length; index++) {
        const element = values[index] || 0;
        total += element;
    }
    return total;
};

const latestMonth = async data => {
    const lastMonth = data[data.length - 1];
    const lastYear = data[data.length - 13];

    const renewableTotal = {
        latest: calculateTotal([
            lastMonth.fields.Wind,
            lastMonth.fields.Solar,
            lastMonth.fields.Hydroelectric,
            lastMonth.fields.Geothermal,
            lastMonth.fields.Biomass,
            lastMonth.fields.Waste,
        ]),
        lastYear: calculateTotal([
            lastYear.fields.Wind,
            lastYear.fields.Solar,
            lastYear.fields.Hydroelectric,
            lastYear.fields.Geothermal,
            lastYear.fields.Biomass,
            lastYear.fields.Waste,
        ]),
    };

    const lowCarbonTotal = {
        latest: calculateTotal([
            lastMonth.fields.Wind,
            lastMonth.fields.Solar,
            lastMonth.fields.Hydroelectric,
            lastMonth.fields.Geothermal,
            lastMonth.fields.Nuclear,
        ]),
        lastYear: calculateTotal([
            lastYear.fields.Wind,
            lastYear.fields.Solar,
            lastYear.fields.Hydroelectric,
            lastYear.fields.Geothermal,
            lastYear.fields.Nuclear,
        ]),
    };

    const comparisonData = {
        latestMonth: lastMonth.fields.Month,
        latestYear: lastMonth.fields.Year,
        lastYearMonth: lastYear.fields.Month,
        lastYear: lastYear.fields.Year,
        total: {
            renewable: {
                total: renewableTotal,
                change: calculateChange(renewableTotal.latest, renewableTotal.lastYear),
            },
            lowCarbon: {
                total: lowCarbonTotal,
                change: calculateChange(lowCarbonTotal.latest, lowCarbonTotal.lastYear),
            },
        },
        wind: {
            latest: lastMonth.fields.Wind,
            lastYear: lastYear.fields.Wind,
            change: calculateChange(lastMonth.fields.Wind, lastYear.fields.Wind),
            renewable: true,
            lowCarbon: true,
        },
        solar: {
            latest: lastMonth.fields.Solar,
            lastYear: lastYear.fields.Solar,
            change: calculateChange(lastMonth.fields.Solar, lastYear.fields.Solar),
            renewable: true,
            lowCarbon: true,
        },
        hydro: {
            latest: lastMonth.fields.Hydroelectric,
            lastYear: lastYear.fields.Hydroelectric,
            change: calculateChange(lastMonth.fields.Hydroelectric, lastYear.fields.Hydroelectric),
            renewable: true,
            lowCarbon: true,
        },
        geo: {
            latest: lastMonth.fields.Geothermal,
            lastYear: lastYear.fields.Geothermal,
            change: calculateChange(lastMonth.fields.Geothermal, lastYear.fields.Geothermal),
            renewable: true,
            lowCarbon: true,
        },
        nuclear: {
            latest: lastMonth.fields.Nuclear,
            lastYear: lastYear.fields.Nuclear,
            change: calculateChange(lastMonth.fields.Nuclear, lastYear.fields.Nuclear),
            renewable: false,
            lowCarbon: true,
        },

        // Not included in clean energy but captured for display purposes
        biomass: {
            latest: lastMonth.fields.Biomass,
            lastYear: lastYear.fields.Biomass,
            change: calculateChange(lastMonth.fields.Biomass, lastYear.fields.Biomass),
            renewable: true,
            lowCarbon: false,
        },
        waste: {
            latest: lastMonth.fields.Waste,
            lastYear: lastYear.fields.Waste,
            change: calculateChange(lastMonth.fields.Waste, lastYear.fields.Waste),
            renewable: true,
            lowCarbon: false,
        },
    };

    return comparisonData;
};

module.exports = latestMonth;
