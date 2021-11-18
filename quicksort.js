const quicksort = (dataset, property) => {
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

        if (dataset[i][property] > middleElement) {
            left.push(dataset[i]);

        } else {
            right.push(dataset[i]);
        }
    }
    return [...quicksort(left, 'year'), dataset[middleIndex], ...quicksort(right, 'year')];
}

module.exports = quicksort;
