function validAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let obj1 = {};

    for (let i = 0; i < str1.length; i++) {

        let character = str1.charAt(i);

        if (obj1.hasOwnProperty(character)) {
            obj1[character]++;
        } else {
            obj1[character] = 1;
        }

    }

    let obj2 = {};

    for (let i = 0; i < str2.length; i++) {

        let character = str2.charAt(i);

        if (obj2.hasOwnProperty(character)) {
            obj2[character]++;
        } else {
            obj2[character] = 1;
        }

    }

    for (let character in obj1) {

        if (!obj2.hasOwnProperty(character) || obj2[character] !== obj1[character]) {
            return false;
        }


    }

    return true;

}


console.log(validAnagram('awesome', 'awesom'))