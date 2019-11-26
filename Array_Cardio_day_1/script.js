window.addEventListener("load", do_stuff);

function do_stuff() {

    const inventors = [
        { first: 'Albert', last: 'Einsteint', year: 1879, passed: 1954 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johanes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
        'Beethoven, Ludwing', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
        'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
        'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
        'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra',
        'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin'
    ];

    // Array.prototype.filter()
    //1. Filter the list of invertos for those who were born in the 1500's
    /*
    const fifteen = inventors.filter(function(inventor) {
        if (inventor.year >= 1500 && inventor.year < 1600) {
            return true; // to keepit
        }   
    });
    console.table(fifteen);*/
    // 1.1 the same, but like arrow function:
    /*
    const fift3en = inventors.filter(inventor => {
        if (inventor.year >= 1500 && inventor.year < 1600) {
            return true; // to keepit
        }   
    });*/
    // 1.2 inline arrow
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    console.table(fifteen);

    //Array.prototype.map() (map copy the array in a new one, and modify the info. The returned array always have the same lenght)
    // 2. Give us an array of the inventory first and last names
    const fullNames = inventors.map(inventor => (inventor.first + ' ' + inventor.last));
    // or
    const fullNames2 = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));
    console.log(fullNames);
    console.log(fullNames2);

    //Array.prototype.sort() two arguments
    //3. sort (long expresion)
    /*const ordered = inventors.sort(function(a, b) {
        if(a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });*/
    // 3.1 sort (short)
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);

    // Array.prototype.reduce()
    // 4. How many tears did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);

    //5. Sort the inventors by years lived
    //const yearsLived = inventors.map(inventor => (inventor.passed - inventor.year));
    const oldest = inventors.sort((a, b) => {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        //return lastGuy > nextGuy ? -1 : 1;
        if (lastGuy > nextGuy) {
            return -1;
        } else {
            return 1;
        }
    });
    console.table(oldest);


        // 6. create a list of boulevards in paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelector('a'));
    const de = links.map(link => SVGPathSegLinetoRel.textContent).filter(streetName => streetName.includes('de'));
    console.log(de);
}
