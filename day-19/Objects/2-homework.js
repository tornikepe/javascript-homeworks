function readingStatus(books) {

    var Books = [{
            author: 'Bill',
            title: 'The Road Ahead',
            haveRead: true,
            dateOfRead: new Date(2020, 10, 10),
            get daysAgo() {
                var date1 = new Date(2020, 10, 10);
                var date2 = new Date();
                var differenceInTime = date2.getTime() - date1.getTime();
                var total = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
                return total;
            }
        },
        {
            author: 'Steve',
            title: 'Walter Isaacson',
            haveRead: true,
            dateOfRead: new Date(2020, 10, 5),
            get daysAgo() {
                var date1 = new Date(2020, 10, 5);
                var date2 = new Date();
                var differenceInTime = date2.getTime() - date1.getTime();
                var total = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
                return total;
            }
        },
        {
            author: 'Jhon',
            title: 'The Hunger Games',
            haveRead: false,
            dateOfRead: NaN
        }
    ];

    for (let i = 0; i < 1; i++) {

        // 1
        if (Books[0].haveRead) {
            if (!isNaN(Books[0].dateOfRead)) {
                console.log(`${Books[0].author} have read ${Books[0].title} book ${Books[0].daysAgo} days ago`)
            } else {
                console.log(`${Books[0].author} haven't read ${Books[0].title} book yet`)
            }
        } else {
            console.log(`${Books[0].author} haven't read ${Books[0].title} book yet`)
        }

        // 2
        if (Books[1].haveRead) {
            if (!isNaN(Books[1].dateOfRead)) {
                console.log(`${Books[1].author} have read ${Books[1].title} book ${Books[1].daysAgo} days ago`)
            } else {
                console.log(`${Books[1].author} haven't read ${Books[1].title} book yet`)
            }
        } else {
            console.log(`${Books[1].author} haven't read ${Books[1].title} book yet`)
        }

        // 3
        if (Books[2].haveRead) {
            if (!isNaN(Books[2].dateOfRead)) {
                console.log(`${Books[2].author} have read ${Books[2].title} book {x} days ago`)
            } else {
                console.log(`${Books[2].author} haven't read ${Books[2].title} book yet`)
            }
        } else {
            console.log(`${Books[2].author} haven't read ${Books[2].title} book yet`)
        }
    }
}

readingStatus();