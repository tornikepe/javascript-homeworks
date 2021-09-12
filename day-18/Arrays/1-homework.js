var arraySum = 0;

function f(arr) {

    var currArrayLength = arr.length;

    for (var i = 0; i < currArrayLength; i++) {

        if (!Array.isArray(arr)) {
            
            throw new TypeError('First parameter required and has to be only array')
        }

        if (typeof arr[i] === "number") {

            arraySum += arr[i];

        } else if (Array.isArray(arr[i]) === true) {

            f(arr[i]);
        }
    }

    return arraySum;
}

//Works on only one array because the variable arraySum is declared and written is significant to it

const arr = [
    [
        [1, 2],
        [1, 2]
    ],
    [
        [2, 1],
        [1, 2]
    ]
];
console.log(f(arr)); // 12

// const arr2 = [
//     [
//         [
//             [
//                 [1, 2]
//             ]
//         ]
//     ]
// ];
// console.log(f(arr2)); // 3

// const arr3 = [
//     [
//         [
//             [
//                 [1, 2]
//             ]
//         ], 2
//     ], 1
// ];
// console.log(f(arr3)); // 6

// const arr4 = [
//     [
//         [
//             [
//                 []
//             ]
//         ]
//     ]
// ];
// console.log(f(arr4)); // 0

// const arr5 = [
//     [
//         [
//             [
//                 [], 3
//             ]
//         ]
//     ]
// ];
// console.log(f(arr5)); // 3