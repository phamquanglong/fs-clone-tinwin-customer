const useTotalPrice = (data: object[]) => {
    console.log(data)
    let total = 0
    data.map((item: object) => total += item.quantity * item.price)
    return total
}

export default useTotalPrice