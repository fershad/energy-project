// Tutorial: https://flaviocopes.com/airtable/
const Airtable = require('airtable');
require('dotenv').config();

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base('appPXz8YzY8JNcXIT');
const table = base('Global_Carbon_Project');

function generateData(data) {
    return {
        id: data.id,
        fields: data.fields,
    };
}

let records = [];

// called for every page of records
const processPage = (partialRecords, fetchNextPage) => {
    records = [...records, ...partialRecords];
    fetchNextPage();
};

module.exports = async function getEmissions() {
    return new Promise(
        (resolve, reject) => {
            table
                .select({
                    view: 'Grid view',
                    sort: [{ field: 'Year', direction: 'asc' }],
                })
                .eachPage(processPage, () => {
                    prepData = records.map(generateData);
                    resolve(prepData);
                });
        },
        function done(err) {
            if (err) {
                console.error(err);
                reject(err);
            }
        }
    );
};
