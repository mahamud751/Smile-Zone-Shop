import { useEffect, useState } from "react"
import { storeDb } from "../FakeDb/FakeDb"

const useCart = products => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (products.length) {
            const storeCart = storeDb()
            const storeArray = []
            for (const key in storeCart) {
                const addProduct = products.find(product => product.key === key)
                if (addProduct) {
                    const quantity = storeCart[key]
                    addProduct.quantity = quantity
                    storeArray.push(addProduct)
                }
            }
            setCart(storeArray)
        }
    }, [products])
    return [cart, setCart]
}
export default useCart;