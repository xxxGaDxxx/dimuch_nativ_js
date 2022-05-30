import {GovernmentBuildingsType, HouseType} from '../02-tests/02__02';

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: GovernmentBuildingsType[]) => {
    return buildings.map(b => b.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: HouseType[]) {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}