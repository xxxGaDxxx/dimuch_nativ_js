type UserType = {
    name: string
    age: number
    adress: {
        title: string
    }
}

function icreaseAge(u: UserType) {
    u.age++
}

test('big reference type test', () => {

    let user: UserType = {
        name: 'Wlad',
        age: 24,
        adress: {
            title: 'Grodno'
        }
    }

    icreaseAge(user)

    expect(user.age).toBe(25)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
    expect(superman.age).toBe(1000)


})

test('array reference test', () => {

    let users = [
        {
            name: 'Wlad',
            age: 24
        },
        {
            name: 'Pascha',
            age: 23
        },
    ]

    let admin = users
    admin.push({name: 'bandit', age: 10})

    expect(users[2]).toEqual({name: 'bandit', age: 10})

})

test('value test', () => {

    let usersCount = 100
    let adminCount = usersCount
    adminCount = usersCount + 1

    expect(usersCount).toBe(100)
    expect(adminCount).toBe(101)

})
test(' reference type array test', () => {

    const adress = {
        title: 'Grodno'
    }

    let user: UserType = {
        name: 'Wlad',
        age: 24,
        adress: adress
    }


    let user2: UserType = {
        name: 'Margo',
        age: 21,
        adress: adress
    }

    const users = [user, user2, {name: 'Pascha', age: 23, adress: adress}]

    const admins = [user, user2]

    admins[0].name = 'Wladislav'

    expect(users[0].name).toBe('Wladislav')
    expect(user.name).toBe('Wladislav')


})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    letters.sort()

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})
test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    passpartist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function passpartist(letters: any) {
    const copy = [...letters].sort()
}

