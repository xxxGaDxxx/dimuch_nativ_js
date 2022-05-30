type AddressType = {
    streetTitle: string
    city: LocolCityType

}
type LocolCityType = {
    title: string
    countryTitle: string
}
type Technologies = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Technologies[]
}

export const student: StudentType = {
    id: 1,
    name: 'Wlad',
    age: 24,
    isActive: true,
    address: {
        streetTitle: 'Mendeleeva 1',
        city: {
            title: 'Grodno',
            countryTitle: 'Belarus',
        }

    },
    technologies: [
        {
            id: 1,
            title: 'css',
        },
        {
            id: 2,
            title: 'html',
        },
        {
            id: 3,
            title: 'react',
        },
    ]
}

