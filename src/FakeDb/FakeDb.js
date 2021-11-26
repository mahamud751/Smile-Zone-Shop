const addDb = id => {
    const exists = getDb()
    let shop_cart = {}
    if (!exists) {
        shop_cart[id] = 1
    }
    else {
        shop_cart = JSON.parse(exists)
        if (shop_cart[id]) {
            const newCart = shop_cart[id] + 1
            shop_cart[id] = newCart
        }
        else {
            shop_cart[id] = 1
        }
    }
    updateDb(shop_cart)

}

const getDb = () => localStorage.getItem('shop')

const updateDb = cart => localStorage.setItem('shop', JSON.stringify(cart))

const storeDb = () => {
    const exists = getDb()
    return exists ? JSON.parse(exists) : {}
}

const removeFromDb = id => {
    const exists = getDb()
    if (!exists) {

    }
    else {
        const shop_cart = JSON.parse(exists)
        delete shop_cart[id]
        updateDb(shop_cart)
    }
}

const clearDb = () => {
    localStorage.removeItem('shop')
}

export { addDb, storeDb, removeFromDb, clearDb }