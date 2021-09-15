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
    for (let i = 0; i < 1; i++) {

        if (Books[0].haveRead) {
            console.log(`${Books[0].author} have read ${Books[0].title} book`)
        } else {
            console.log(`${Books[0].author} haven't read ${Books[0].title} book`)
        }

        if (Books[1].haveRead) {
            console.log(`${Books[1].author} have read ${Books[1].title} book`)
        } else {
            console.log(`${Books[1].author} haven't read ${Books[1].title} book`)
        }

        if (Books[2].haveRead) {
            console.log(`${Books[2].author} have read ${Books[2].title} book`)
        } else {
            console.log(`${Books[2].author} haven't read ${Books[2].title} book`)
        }
    }
}

readingStatus();