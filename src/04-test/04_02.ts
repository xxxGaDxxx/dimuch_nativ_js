import {CityType, GovernmentBuildingsType} from '../02-tests/02__02';

export function demolistHousesOnTheStreet(city: CityType, street: string){
city.houses = city.houses.filter(h=>h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen= (buildings: GovernmentBuildingsType[], number: number)=>{
    return buildings.filter(b=>b.staffCount > number)
}