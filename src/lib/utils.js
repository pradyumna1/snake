function getRandomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomCoordinate(maxX, maxY) {
    return {
        x: getRandomNumberFromRange(0, maxX),
        y: getRandomNumberFromRange(0, maxY),
    };
}
export default {
    getRandomCoordinate,
};