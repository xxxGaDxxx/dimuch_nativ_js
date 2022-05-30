export type StreetType={
    title:string
}
export type AddressType={
    number?:number
    street: StreetType
}
export type HouseType = {
    buildedAT:number
    repaired:boolean
    address: AddressType
}

export type TypeShould = 'HOSPITAL' | 'FIRE-STATION'
export type GovernmentBuildingsType={
    type: TypeShould
    budget:number
    staffCount:number
    address:AddressType

}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}