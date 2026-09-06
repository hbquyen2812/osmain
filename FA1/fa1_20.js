function processData(numbers, arrays, objectToClone, objectsToMerge) {
    const sum = (...nums) => nums.reduce((total, current) => total + current, 0);
    const concatArrays = (...arrs) => [].concat(...arrs);
    const cloneObject = (obj) => ({ ...obj });
    const mergeObjects = (...objs) => Object.assign({}, ...objs);
    const sortNumbers = (...nums) => nums.sort((a, b) => a - b);

    return {
        sum: sum(...numbers),
        concatenatedArray: concatArrays(...arrays),
        clonedObject: cloneObject(objectToClone),
        mergedObject: mergeObjects(...objectsToMerge),
        sortedNumbers: sortNumbers(...numbers)
    };
}

const data = {
    numbers: [5, 3, 8, 1, 10, 2],
    arrays: [[1, 2, 3], [4, 5], [6, 7, 8]],
    objectToClone: { a: 1, b: 2, c: 3 },
    objectsToMerge: [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }]
};

const result = processData(
    data.numbers,
    data.arrays,
    data.objectToClone,
    data.objectsToMerge
);

console.log(result);