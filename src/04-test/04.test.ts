test('should take old men older then 90', () => {
    const ages = [12, 20, 22, 100, 90, 14]

    /*const predicate = (age: number) => {
        return age > 90
    }*/
    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
    const courses = [
        {title: 'JS', price: 110},
        {title: 'CSS', price: 200},
        {title: 'REACT', price: 150},
    ]

    /*const chipPredicate = (course: CourseType) => {
        return course.price < 160
    }*/
    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('JS')
    expect(chipCourses[1].title).toBe('REACT')
})

test('get only completed tasks', () => {
    const tasts = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasts.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

test('get only uncompleted tasks', () => {
    const tasts = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const uncompletedTasks = tasts.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})
