const sortDates = (dates, order) => {
    if(order === 'DSC') {
        return dates.sort((a, b) => b.date - a.date);
    }
    return dates.sort((a, b) => a.date - b.date);
    
}
module.exports = sortDates;