class Validator {

    isEmail(email) {
        var em = /\S+@\S+\.\S+/;
        return em.test(email);
    }

    isDomain(domain) {
        var dom = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return dom.test(domain);
    }

    isDate(date) {
        let dateformat = /^(0?[1-9]|1[0-2])[\.](0?[1-9]|[1-2][0-9]|3[01])[\.]\d{4}$/;

        if (date.match(dateformat)) {
            let operator = date.split('.');

            let datepart = [];
            if (operator.length > 1) {
                datepart = date.split('.');
            }
            let month = parseInt(datepart[0]);
            let day = parseInt(datepart[1]);
            let year = parseInt(datepart[2]);

            let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (month == 1 || month > 2) {
                if (day > ListofDays[month - 1]) {
                    return false;
                }
            }
        } else {
            return false;
        }
        return true;
    }

    isPhone(phoneNum) {
        const pho = /^[\+]?[(]?[995]{3}[)]?[-\s\.]?[5-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/;
        return pho.test(String(phoneNum));
    }
}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+(995)558 24-46-48'));