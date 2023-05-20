const addToLocalDb = id => {
    let addToy = getAddedToy();
    const quantity = addToy[id];
    if (!quantity) {
        addToy[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        addToy[id] = newQuantity;
    }
    localStorage.setItem('newToy', JSON.stringify(addToy));
}

const removeFromLocalDb = id => {
    const addToy = getAddedToy();
    if (id in addToy) {
        delete addToy[id];
        localStorage.setItem('newToy', JSON.stringify(addToy));
    }
}

const getAddedToy = () => {
    let addToy = {};

    const storedToy = localStorage.getItem('newToy');
    if (storedToy) {
        addToy = JSON.parse(storedToy);
    }
    return addToy;
}

const deleteAddedToy = () => {
    localStorage.removeItem('newToy');
}

export {
    addToLocalDb,
    removeFromLocalDb,
    getAddedToy,
    deleteAddedToy
}