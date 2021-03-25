
//Typedefs for raw data
export type DivisionStruct = {id:string,name:string};
export type UnitStruct = {descriptor:string,type:string,name:string};

//main exports
export declare class unitById {
    unitById:Map<string,UnitStruct>;
};

export declare class units {
    units:Map<string,UnitStruct>;
};

export declare class maps {
    mapData:{
        sd2_league:string[]
        byPlayerSize:{
            "2":string[],
            "4":string[],
            "6":string[],
            "8":string[]
        }
    };
};

export declare class divisions {
    divisionAllies:[DivisionStruct];
    divisionAxis:[DivisionStruct];
    divisionById:[DivisionStruct];
};

export declare class misc {
    incomeLevel:Map<string,string>;
    mode:Map<string,string>;
    victory:Map<string,string>;
    scoreLimit:Map<string,string>;
    incomeTypes:Map<number,string>;
};
