var pasport = {
    name: "Serhii",
    age: 26,
    year: 1992,
};

var internationalPassport = {};

for (var copy in pasport) {
    internationalPassport[copy] = pasport[copy];
}

alert( internationalPassport.age );
alert( internationalPassport.year );
alert( pasport.age );
alert( pasport.year );