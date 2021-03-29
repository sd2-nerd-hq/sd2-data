import { expectType } from 'tsd'
import { MapsData } from '.'
import * as Data from './index'

expectType<string[]>(Data.maps.allMapNames)
expectType<MapsData>(Data.maps)
expectType<Map<string, string>>(Data.misc.mode)