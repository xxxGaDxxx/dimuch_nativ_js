import React from 'react';

type LessonType = {
    title: number
    name?: string
}


export type ManPropsType = {
    name: string,
    age: number,
    lessons: LessonType[],
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManPropsType
    food: Array<string>
    car: { model: string }
}


const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man, ...restProps}=props



    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}