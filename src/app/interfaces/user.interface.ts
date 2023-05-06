export interface IGeo{
    lat: string;
    lng: string;
}

export interface IAddress{
    city: string;
    geo?: IGeo;
    street?: string;
    suite?: string;
    zipcode?: string;
}

export interface ICompany{
    name?: string;
    bs?: string;
    catchPhrase?: string;
}

export interface IUser {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    username?: string;
    website?: string;
    address: IAddress;
    company?: ICompany;
}