const data = {
    name: "fred",
    age: 10,
    contact: {
        email: "moo@example.com",
        meta: {
            verified: true,
            tags: ["important"],
        },
    },
};
Object.prototype.mergeDeepRight = function (args) {

    for (let items in args) {

        if (typeof args[items] === "function") {

            return;

        }
        if (Array.isArray(args[items])) {

            if (items in this) {

                this[items] = this[items].concat(args[items]);

            }

        } else if (typeof args[items] === "object") {

            this[items].mergeDeepRight(args[items]);

        } else {

            this[items] = args[items];

        }
    }
};
data.mergeDeepRight({
    age: 40,
    contact: {
        email: "baa@example.com",
        favorite: true,
        meta: {
            tags: ["vip"],
        },
    },
});

console.log(data);
// console.log(data['contact']);