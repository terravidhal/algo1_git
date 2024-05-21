function Somme(arr) {
    const SommesEns = new Set(); 
    let somme = 0;

    for (const num of arr) {
        somme += num;

        if (somme === 0 || SommesEns.has(somme)) {
            return true;
        }

        SommesEns.add(somme);
    }

    console.log(SommesEns);


    return false;
}

// Ex:
const ex1 = [4, 2, -3, 1, 6];
console.log(Somme(ex1)); // Résultat : true


const ex2 = [4, 2, 0, 1, 6];
console.log(Somme(ex2)); // Résultat : true

const ex3 = [-3, 2, 3, 1, 6];
console.log(Somme(ex3)); // Résultat : false