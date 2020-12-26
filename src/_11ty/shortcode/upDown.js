module.exports = async direction => {
    let symbol;
    if (direction === 'positive') {
        symbol = '▲';
    } else if (direction === 'negative') {
        symbol = '▼';
    } else {
        symbol = '—';
    }

    return symbol;
};
