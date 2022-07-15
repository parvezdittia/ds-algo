function uniquePaths(m, n) {
    var store = new Map();
    store.set([1, 1], 1);
    var traverse = function (m, n) {
        if (store.has([m, n]))
            return store.get([m, n]);
        else if (store.has([n, m]))
            return store.get([n, m]);
        var a, b;
        if (m > 1)
            a = traverse(m - 1, n);
        if (n > 1)
            b = traverse(m, n - 1);
        store.set([m, n], a + b);
        store.set([n, m], a + b);
        return a + b;
    };
    return traverse(m, n);
}
console.log(uniquePaths(3, 3));
