/*
Pony Farm
A certain pony farm (cage-free) raises and keeps track of cowboys’ and cowgirls’ ponies.
Each pony has a name, id, dietary allergies, and email address (the owner’s email address).

Given an array of pony objects and an owner’s email address,
return an alphabetically ordered array of all foods (without duplicates) that the owner should avoid feeding his/her ponies.
*/

const getPonyAllergies = (ponies, ownerEmail) => {
    const allergies = [];
    for (let i = 0; i < ponies.length; i++) {
        if (ponies[i].email === ownerEmail) {
            ponies[i].allergies.forEach(item => {
                if (!allergies.includes(item)) allergies.push(item)
            })
        }
    }
    return allergies.sort();
}
