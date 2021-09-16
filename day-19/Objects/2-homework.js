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

    for (let items of Books) {
        if (items.haveRead) {
            console.log(`${items.author} have read ${items.title} book ${items.daysAgo} days ago`)
        } else {
            console.log(`${items.author} haven't read ${items.title} book yet`)
        }
    }
}

readingStatus();