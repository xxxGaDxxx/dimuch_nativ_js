export const userObj = {
    '0': 'Mama',
    '1': 'Wlad',
    '2': 'Margo',
    '3': 'PAscha',
}
type UsersType={
    [key:string]:{id: number, name: string}
}

 const users:UsersType = {
    '101': {id: 101, name: 'Mama'},
    '54652': {id: 54652, name: 'Wlad'},
    '8880': {id: 8880, name: 'Margo'},
    '4': {id: 4, name: 'PAscha'},
}

let user = {id: 100220, name: 'VOVA'}
users[user.id] = user
users[user.id].name = 'Igor'
delete users[user.id]


export const usersArray = [
    {id: 101, name: 'Mama'},
    {id: 54652, name: 'Wlad'},
    {id: 8880, name: 'Margo'},
    {id: 4, name: 'PAscha'},
]


//userArray.find(u=>u.id === 1)
//let userCopy = [...userArray.filter(),user]
//let usersArray= usersArray.filter(u=>u.id !== user.id)