function readingStatus(books) {

    var Books = [{
            author: 'Bill',
            title: 'The Road Ahead',
            haveRead: true,
            dateOfRead: new Date(2020, 10, 10)
        },
        {
            author: 'Steve',
            title: 'Walter Isaacson',
            haveRead: true,
            dateOfRead: new Date(2020, 10, 5)
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
            console.log(`${items.author} have read ${items.title} book`)
        } else {
            console.log(`${items.author} haven't read ${items.title} book yet`)
        }
    }
}

readingStatus();