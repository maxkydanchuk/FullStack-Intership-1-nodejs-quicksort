const quicksort = (dataset, property, order) => {
    if (dataset.length <= 1) {
        return dataset;
    }

    let middleIndex = Math.floor(dataset.length / 2);
    let middleElement = dataset[middleIndex][property];
    let left = [];
    let right = [];

    for (let i = 0; i < dataset.length; i++) {
        if (i === middleIndex) {
            continue;
        }

        if(order === 'asc') {
            if(dataset[i][property] > middleElement) {
                left.push(dataset[i]);

            } else {
                right.push(dataset[i])
            }
        }
        if(order === 'desc') {
            if(dataset[i][property] < middleElement) {
                left.push(dataset[i]);
            } else {
                right.push(dataset[i])
            }
        }
    }
    return [...quicksort(left, 'year', 'asc'), dataset[middleIndex], ...quicksort(right, 'year', 'asc')];
}

module.exports = quicksort;
