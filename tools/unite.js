
const fs = require('fs');
const readline = require('readline');
const paparse = require('papaparse');

const modDir = `E:\\SteamLibrary\\steamapps\\common\\Steel Division 2\\Mods`
const uniteDescriptorDir = modDir + `\\ModData\\base\\GameData\\Generated\\Gameplay\\Gfx\\UniteDescriptor.ndf`
const translationsDir = modDir + `\\Utils\\LocalisationEntries\\Translations.csv`
const translationsEntriesDir = modDir + `\\Utils\\LocalisationEntries\\Entries.csv`
const deckSerializerDir = modDir + `\\ModData\\base\\GameData\\Generated\\Gameplay\\Decks\\DeckSerializer.ndf`
//verify base has been unzipped
if(!fs.existsSync(modDir + "\\ModData\\base")){
    console.log("Please Unzip base.zip @\\SteamLibrary\\steamapps\\common\\Steel Division 2\\Mods\\ModData\\base.zip")
    process.exit();
}
//get deck codes
units = {};
defenses = {};
const deckRegex = new RegExp("\\((Descriptor_Unit_\\w+), (\\d+)\\)");
const deckRegex2 = new RegExp("\\((Descriptor_Production_\\W+), (\\d+)\\)");
let deckData = fs.readFileSync(deckSerializerDir,{encoding:"utf8"})
    deckData = deckData.split("\n")
    for(let line of deckData){
        let unit = deckRegex.exec(line)
        if(unit){
            units[Number(unit[2])] = String(unit[1])
        }
        unit = deckRegex2.exec(line)
        if(unit){
            defenses[Number(unit[2])] = String(unit[1])
        }
    }
    deckData = ""


//Add UniteDescriptor to Units found in file.
//{descriptor, type, name}


const readInterface = readline.createInterface({
    input: fs.createReadStream(uniteDescriptorDir),
    output: null,
    console: false
});

var access = fs.createWriteStream('raw/units.json', { flags: 'w' });

var locstr = fs.readFileSync(translationsEntriesDir).toString();

var loc = paparse.parse(locstr,{header:true});

const find = (token) => loc.data.find(v => v.TOKEN == token );

var arr =[];

var obj ;
readInterface.on('line', function(line) {
    if(line.match(/export (\S+) is \S+/)){
        //  arr = [];
        // arr.push(line.match(/export (\S+) is \S+/)[1]);
        obj = new Object();
        obj.descriptor = line.match(/export (\S+) is \S+/)[1];
    }
    // if(line.match(/\s+AcknowUnitType\s+=\s+~\/(\w+)/)){
    //     arr.push(line.match(/\s+AcknowUnitType\s+=\s+~\/(\w+)/)[1]);
    // }
    // if(line.match(/\s+MaxDamages\s+=\s+(\d+)/)){
    //     arr.push(line.match(/\s+MaxDamages\s+=\s+(\d+)/)[1]);
    // }
    if(line.match(/\s+Factory\s+=\sEDefaultFactories\/(\w+)/)){
       obj.type = line.match(/\s+Factory\s+=\sEDefaultFactories\/(\w+)/)[1];
        // arr.push(line.match(/\s+Factory\s+=\sEDefaultFactories\/(\w+)/)[1]);
    }
    if(line.match(/\s+UnitName\s+=\s+'(\w+)'/)){
        let unitToken = line.match(/\s+UnitName\s+=\s+'(\w+)'/)[1];
        let realName = find(unitToken).REFTEXT;
        obj.name = realName;
        // arr.push(realName);
    }

    
    // if(line.match(/Everything\/WeaponDescriptor([\w_]+)/)){
        // arr.push(line.match(/Everything\/WeaponDescriptor([\w_]+)/)[1]);
    // }
    // if(line.match(/UnitConcealmentBonus\s=\s+(\d+)/)){
    //     arr.push(line.match(/UnitConcealmentBonus\s=\s+(\d+(\.\d)?)/)[1]);
    // }
    // if(line.match(/OpticalStrength\s=\s+(\d+)/)){
    //     arr.push(line.match(/OpticalStrength\s=\s+(\d+)/)[1]);
    // }
    if(line.match(/\sUnitUI/)){
        arr.push(obj);
        // for(a of arr){
        //     access.write(a+'\t');
        // }
        // access.write('\n');
    }
});

readInterface.on("close",()=>{

    for( key of Object.keys(units)){
        let desc = units[key];

        let content = arr.find(v => v.descriptor == desc);
        units[key] = content; 
    }


    access.write(JSON.stringify(units,null,4));
})
