const names = ['abul', 'habul', 'nabul', 'kabul', 'sabul', 'dabul', 'ebul', 'babul', 'habul', 'nabul', 'tabul', 'cabul', 'kabul', 'dabul'];

function removeDuplicate(names){
    const unique =[];
    /* for (let i = 0; i < names.length; i++){
        const element = names[i];
        console.log(element);
    } */

    // OR 

    for (const element of names){       //for loop er moddhe OF
        console.log(element);
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);



DO IT SAME WITH A NUMBER 