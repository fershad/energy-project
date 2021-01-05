const getEmissions = require('../utils/getEmissions');

module.exports = async function() {
    const data = await getEmissions();

    return data;
};
