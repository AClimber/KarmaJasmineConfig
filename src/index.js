define([], function MathOperations() {
    function add(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    function div(a, b) {
        return a / b;
    }

    function mul(a, b) {
        return a * b;
    }

    return {
        add: add,
        sub: sub,
        div: div,
        mul: mul
    };
});

