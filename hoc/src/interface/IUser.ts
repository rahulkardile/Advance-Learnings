export interface IUser {
    id: string,
    name: string,
    email: string,
    address: {
        city: string,
        zipcode: string
    },
    phoneNumber: number,
    website: string,
    company: {
        name: string
    }
}