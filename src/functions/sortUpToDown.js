export default function sortByRates(array) {
    
    return array.sort(function (a, b) {
        if (a.rate > b.rate) {
            return -1;
        }
        if (a.rate < b.rate) {
            return 1;
        }
        return 0;
    });             
}


