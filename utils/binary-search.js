const { PerformanceObserver, performance } = require('perf_hooks');
const binarySearch = (list, key) => {
    let start = 0;
    let end = list.length - 1;

    while( start <= end) {
        let middle = Math.floor((start + end) / 2);
        if(list[middle] === key) {
            return middle;
        } else if(list[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1
        }
    }
    return -1;
}

console.log(binarySearch([1,34,123,45,34,567,123], 1));
module.exports = binarySearch;