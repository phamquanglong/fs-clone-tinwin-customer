const useGetProductById = (id: number, data: object[]) => {

   return data.filter(item => item.id === id)[0]
}

export default useGetProductById