var pasport = {
    age: 26,
    gender: 'Male',
    name: {
        first: 'Serhii',
        second: 'Spasennikov',
        father: 'Igorovich',
    }
};

function cloneDeep(pasport) {
    let newPasport;
    let i;

    if (typeof pasport !== 'object') return pasport;

    if (Object.prototype.toString.apply(pasport) === '[object Array]') {
        newPasport = [];
        for (i = 0; i < pasport.length; i += 1) {
            newPasport[i] = cloneDeep(pasport[i])
        }
        return newPasport;
    }

    newPasport = {};
    for (i in pasport) {
        if (pasport.hasOwnProperty(i)) {
            newPasport[i] = cloneDeep(pasport[i])
        }
    }
    return newPasport;
}

var internationalPassport = cloneDeep(pasport);

console.log(internationalPassport.name.second);