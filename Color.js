const findOddColor = (N, B) => {
    const count = {};

    for (const color of B) {
        count[color] = (count[color] || 0) + 1;
    }

    for (const color of B) {
        if (count[color] % 2 === 1) {
            return `${color} -> '${color}' colour balloon is present odd number of times in the bunch.`;
        }
    }

    return "All are even";
};

//inputs
const N1 = 7;
const B1 = ['r', 'g', 'b', 'b', 'g', 'y', 'y';
console.log(findOddColor(N1, B1));

const N2 = 10;
const B2 = ['a', 'b', 'b', 'b', 'c', 'c', 'c', 'a', 'f', 'c'];
console.log(findOddColor(N2, B2));
