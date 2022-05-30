import {CityType} from '../02-tests/02__02';
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from './03';

let city: CityType;


beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAT: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        }, {
            buildedAT: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
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

//1. создайте в отдельном файле функцию, чтобы тесты прошли
test('budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000);

})

//1.  тесты должны пройти
test('budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000);

})
//1. тесты должны пройти
test('house should be increased', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy();

})


//1. тесты должны пройти
test('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180);
})

//1. тесты должны пройти
test('house should be repaired', () => {
    toHireStaff(city.governmentBuildings[0], 20)
    toHireStaff(city.governmentBuildings[1], 100)

    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(1100);
})
//1. тесты должны пройти
test('greeting message should be correct foe city', () => {
    const message = createMessage(city)

    expect(message).toBe('Hello New York citizens.I want yo be happy. All 1000000 men');
})



