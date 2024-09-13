declare module 'sd2-data';
// Typedefs for raw data
declare type DivisionStruct = { id: number, name: string, alias: string[], nation: string };
declare type UnitStruct = { descriptor: string, type: string, name: string };

// main exports

declare interface UnitsData {
    units: Map<string, UnitStruct>;
    unitsById: { [index: number]: UnitStruct };
}

declare interface MapsData {
    allMapNames: string[];
    mapData: {
        sd2League: string[]
        byPlayerSize: {
            '2': string[],
            '4': string[],
            '6': string[],
            '8': string[]
        }
    };
}

declare interface DivisionsData {
    divisionsAllies: [DivisionStruct];
    divisionsAxis: [DivisionStruct];
    divisionsNato: [DivisionStruct];
    divisionsPact: [DivisionStruct];
    divisionsById: { [index: number]: DivisionStruct };
    divisionsByAlias: { [index: number]: DivisionStruct };
}

declare interface MiscData {
    incomeLevel: { [index: number]: string };
    mode: { [index: number]: string };
    victory: { [index: number]: string };
    scoreLimit: { [index: number]: string };
    incomeTypes: { [index: number]: string };
    map: { [index: string]: string };
    mapExceptions: { [index: string]: string };
    aiLevel: { [index: number]: string };
}

export const maps: MapsData
export const misc: MiscData
export const divisions: DivisionsData
export const units: UnitsData
