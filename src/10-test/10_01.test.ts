import {
    addNewBooksToUser,
    makeHairstyle,
    maveUser,
    moveUserToOtherHouse, removeBook, upadateCompanuTitle, upadateCompanuTitle2, updateBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';


test(' reference type test', () => {

    let user: UserType = {
        name: 'Wlad',
        hair: 24,
        address: {
            citi: 'Grodno',
        }
    }

    const awesomeUser = makeHairstyle(user, 2)


    expect(user.hair).toBe(24)
    expect(awesomeUser.hair).toBe(12)
    expect(awesomeUser.address).toBe(user.address)
})

test(' change address', () => {

    let user: UserWithLaptopType = {
        name: 'Wlad',
        hair: 24,
        address: {
            citi: 'Grodno',
            house: 1,
        },
        laptop: {
            title: 'Legion'
        },
    }

    const movedUser = maveUser(user, 'Skidel')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(movedUser.address.citi).toBe('Skidel')

})


test(' upgrade laptop to macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Wlad',
        hair: 24,
        address: {
            citi: 'Grodno',
            house: 1,
        },
        laptop: {
            title: 'Legion'
        },
    }

    const userCopy = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(userCopy)
    expect(user.address.citi).toBe(userCopy.address.citi)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Legion')

})


test(' upgrade laptop to macbook', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Wlad',
        hair: 24,
        address: {
            citi: 'Grodno',
            house: 1,
        },
        laptop: {
            title: 'Legion'
        },
        books: ['css', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})

test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Wlad',
        hair: 24,
        address: {
            citi: 'Grodno',
            house: 1,
        },
        laptop: {
            title: 'Legion'
        },
        books: ['css', 'js', 'react', 'html']
    }

    const userCopy = addNewBooksToUser(user, 'ts',)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(5)
    expect(userCopy.books[4]).toBe('ts')

})

test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Wlad',
        hair: 24,
        address: {
            citi: 'Grodno',
            house: 1,
        },
        laptop: {
            title: 'Legion'
        },
        books: ['css', 'js', 'react', 'html']
    }

    const userCopy = updateBook(user, 'js', 'ts',)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('ts')
    expect(userCopy.books.length).toBe(4)

})

test('remove js book ', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Wlad',
        hair: 24,
        address: {
            citi: 'Grodno',
            house: 1,
        },
        laptop: {
            title: 'Legion'
        },
        books: ['css', 'js', 'react', 'html']
    }

    const userCopy = removeBook(user, 'js',)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('react')
    expect(userCopy.books.length).toBe(3)

})

test('update companies ', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Wlad',
        hair: 24,
        address: {
            citi: 'Grodno',
            house: 1,
        },
        laptop: {
            title: 'Legion'
        },
        companies: [
            {id: 1, title: 'Епфм'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]
    }
    const userCopy = upadateCompanuTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update companies ', () => {

    let companies = {
        'Wlad':[
            {id: 1, title: 'Епфм'}, {id: 2, title: 'IT-INCUBATOR'},],
        'Margo':[{id: 1, title: 'Епфм'},]
    }
   const copy = upadateCompanuTitle2(companies,'Wlad',1,'EPAM')

    expect(copy['Wlad']).not.toBe(companies['Wlad'])
    expect(copy['Margo']).toBe(companies['Margo'])
    expect(copy['Wlad'][0].title).toBe('EPAM')


})