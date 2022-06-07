export type UserType = {
    name: string
    hair: number
    address: {
        citi: string,
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }
    /*    copy.hair = u.hair /power
        return copy*/
    return copy
}

export function maveUser(u: UserWithLaptopType, citi: string) {
    return {
        ...u,
        address: {
            ...u.address, citi: citi
        },
        laptop: {       // если не будем изменять , то могли бы не делать копию laptop
            ...u.laptop
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address, house: house
        },
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
    /* const copy = {
         ...u,
         books:u.books.map(b=>b === oldBook ? newBook: b)
        /!* books: u.books.map(e => {
             if (e === oldBook) {
                 return newBook
             } else {
                 return e
             }
         })*!/
     }
     return copy*/
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookFoDelete: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== bookFoDelete)
    }
}

export function upadateCompanuTitle(u: WithCompaniesType,
                                    id: number,
                                    title: string) {
    return {
        ...u,
        companies: u.companies.map(e => e.id === id ? {...e, title: title} : e)
    }

}

export const upadateCompanuTitle2 = (
    companies: { [key:string]: Array<CompanyType> },
    userName: string,
    companiId: number,
    newTitle: string,
) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companiId ? {...c, title: newTitle} : c)


    return companyCopy
}
