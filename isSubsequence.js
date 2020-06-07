function isSubsequence(seq, target) {

    for (let i = 0, j = 0; j < target.length; j++) {

        if (seq[i] === target[j]) {
            i++;
        }

        if (i === seq.length) {
            return true;
        }

    }

    return false;


}

console.log(isSubsequence('prv', 'parpasadrvez'))