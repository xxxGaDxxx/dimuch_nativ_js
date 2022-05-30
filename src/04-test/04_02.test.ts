import {CityType} from '../02-tests/02__02';
import {demolistHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './04_02';

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAT: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        }, {
            id: 2,
            buildedAT: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
            id: 3,
            buildedAT: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        },],
        governmentBuildings: [{
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {street: {title: 'Central Str'}},
        }, {
            type: 'FIRE-STATION',
            budget: 500000,
            staffCount: 1000,
            address: {street: {title: 'South Str'}},
        }],
        citizensNumber: 1000000
    }
})

//1. чтобы тест прошёл
test('houses should be destroyed', () => {
    demolistHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test('buildings with correct staff count',()=>{
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings,500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})