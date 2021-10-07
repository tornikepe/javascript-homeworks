class DB {
    constructor() {
        this.map = new Map()
    }
    create(obj) {

        //validation
        if (typeof obj !== 'object') {
            throw new Error('it is not Object')
        }

        //validation 
        if (!(typeof obj.name === 'string' && typeof obj.country === 'string')) {
            throw new Error('required field with type string')
        } else if (!(typeof obj.age === 'number' && typeof obj.salary === 'number')) {
            throw new Error('required field with type number')
        }

        //unique id for users
        const Id = (Math.random() + 1).toString(36).substring(7)
        this.map.set(Id, obj)

        return Id;
    }

    read(id) {

        if (typeof id !== 'string') {
            throw new Error('There is no string parameter')
        } else if (arguments.length === 0) {
            throw new Error('No parameter transferred')
        }

        return this.map.has(id) ? {
            id,
            ...this.map.get(id)
        } : null
    }

    readAll() {

        if (arguments.length >= 1) {
            throw new Error('dont pass parameter');
        }
        let arr = [];
        arr.push(...this.map.entries())
        for (const value of arr) {
            console.log([value[1]])
        }
    }

    update(id, obj) {

        if (!id) {
            throw new Error('non-existing id is passed.')
        } else if (typeof id !== 'string') {
            throw new Error('There is no string parameter')
        } else if (typeof obj !== 'object') {
            throw new Error('it is not Object')
        } else {
            const uniqeId = this.read(id);
            for (const key in obj) {
                uniqeId[key] = obj[key];
            }
            this.map.set(uniqeId.id, uniqeId);
            console.log(uniqeId.id)
        }
    }

    delete(id) {

        if (!id) {
            throw new Error('non-existing id is passed.')
        } else {
            this.map.delete(id)
            console.log(true)
        }
    }
}

//////////////////////////////////////////////////////////////

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, {
    age: 22
}); // id
db.delete(id); // true