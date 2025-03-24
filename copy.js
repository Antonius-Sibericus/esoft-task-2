const oldObject = {
    array: [
        1, 2, 3
    ],
    bigArray: [
        [11, 12, 13],
        [21, 22, 23],
        [31, 32, 33]
    ],
    variable: "yellow",
    someDate: new Date(2024-12-31),
    someObject: {
        secondVariable: "red"
    },
    set: new Set([1, 2, 3]),
    map: new Map([[11, 22, 33]])
}

const createNewObj = (object) => {
    return structuredClone(object);
};

console.log(createNewObj(oldObject).map);