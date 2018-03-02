// @flow
function square(n: number): number {
    return n * n
}

square('2') // Error!

// @flow
function concat(a: string, b: string) {
    return a + b
}

concat('A', 'B') // Works!
concat(1, 2) // Error!

function sum(arr) {
    return arr.reduce((acc, curr) => (acc += curr))
}
