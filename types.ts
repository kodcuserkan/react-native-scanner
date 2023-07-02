export type productType = {
    id: number,
    title: string,
    description: string,
    price: string,
    image: string,
    category: string,
    rating: {
        rate: number,
        count: number
    }
};