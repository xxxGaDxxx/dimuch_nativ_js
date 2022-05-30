import {StudentType} from '../02-tests/02';
import {addSkill, doesStudentLiveIN, makeStudentActive} from './03';

let student: StudentType;
beforeEach(() => {
    student = {
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
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(true)

    makeStudentActive(student)

    expect(student.isActive).toBe(false)
})

test('student lives in city', () => {

    let result1 = doesStudentLiveIN(student, 'Moscov')
    let result2 = doesStudentLiveIN(student, 'Grodno')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})