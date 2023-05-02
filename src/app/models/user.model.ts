export interface IAddress{
    city: string;
}

export interface User {
    id: string;
    name: string;
    address: IAddress;
}