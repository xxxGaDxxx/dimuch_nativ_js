const ages = [12, 20, 22, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'JS', price: 110},
    {title: 'CSS', price: 200},
    {title: 'REACT', price: 150},
]
const chipPredicate = (courses: CourseType) => {
    return courses.price < 160
}