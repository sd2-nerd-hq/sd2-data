import { expectType } from 'tsd'
import { MapsData } from '.'
import * as Data from './index'

expectType<string[]>(Data.maps.allMapNames)
expectType<MapsData>(Data.maps)
expectType<{[index: number]:string}>(Data.misc.mode)
expectType<[Data.DivisionStruct]>(Data.divisions.divisionsAllies)
