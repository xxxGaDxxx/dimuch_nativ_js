type UsersType = {
    [key: string]: { id: number, name: string }
}

export let users: UsersType = {
    '101': {id: 101, name: 'Mama'},
    '54652': {id: 54652, name: 'Wlad'},
    '8880': {id: 8880, name: 'Margo'},
    '4': {id: 4, name: 'PAscha'},
}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Mama'},
        '54652': {id: 54652, name: 'Wlad'},
        '8880': {id: 8880, name: 'Margo'},
        '4': {id: 4, name: 'PAscha'},
    }
})


test('should update corresponding user ', () => {
    users['4'].name = 'Pascha'

    expect(users['4'].name).toBe('Pascha')
    expect(users[101]).toEqual({id: 101, name: 'Mama'})

})

test('should delete corresponding user ', () => {
    delete users[4]

    expect(users['4']).toBeUndefined()
})