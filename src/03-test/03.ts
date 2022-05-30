import {StudentType} from '../02-tests/02';
import {CityType, GovernmentBuildingsType, HouseType} from '../02-tests/02__02';

const sum = (a: number, b: number) => {
    return a + b
}

function sum2(a: number, b: number) {
    return a + b
}

const res = sum(sum(2, 3), sum(5, 6))


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

function addSkill2(st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}


export function makeStudentActive(s: StudentType) {
    s.isActive = false
}


export const doesStudentLiveIN = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}


export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}


export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}

export function toHireStaff(building: GovernmentBuildingsType, staffCountToHire: number) {
    building.staffCount += staffCountToHire
}


export function createMessage(props: CityType) {
   // return 'Hello ' + props.title + ' citizens.I want yo be happy. All ' + props.citizensNumber + ' men'
    return `Hello ${props.title} citizens.I want yo be happy. All ${props.citizensNumber} men`
}

