import {ManPropsType} from './Destructuring';


let props: ManPropsType
beforeEach(() => {
    props = {
        name: 'Wlad',
        age: 24,
        lessons: [{title: 1}, {title: 2}, {title: 3}, {title: 4, name: 'react'}],
        address: {
            street: {
                title: 'Mendeleeva street'
            }

        }
    }
})

test('', () => {
    //const age = props.age
    //const lessons = props.lessons
    const {age, lessons} = props
    const title = props.address.street.title


    expect(age).toBe(24)
    expect(lessons.length).toBe(4)


    expect(title).toBe('Mendeleeva street')
})

test('', () => {
    //const l1 = props.lessons[0];
    //const l2 = props.lessons[1];

    const [l1, l2, ...restLesons] = props.lessons

    expect(l1.title).toBe(1)
    expect(l2.title).toBe(2)
    expect(restLesons[0].title).toBe(3)
    expect(restLesons[1].title).toBe(4)

    expect(restLesons[1]).toBe({title: 4, name: 'react'})

})