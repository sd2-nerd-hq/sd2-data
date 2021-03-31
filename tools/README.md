# Tools

Tools need to be run with one file argument: a path to your ModData dir (for example: `E:\SteamLibrary\steamapps\common\Steel Division 2\Mods\ModData`)

Files of note:
Translations:
\Mods\Utils\LocalisationEntries\Translations.csv

Deck Id values:
\Mods\ModData\base\GameData\Generated\Gameplay\Decks\deckSerializer.ndf

divisionRules.ndf contains units per card.

unit info at
\Mods\ModData\base\GameData\Generated\Gameplay\Gfx\UniteDescriptor.ndf


for example:

from binary id deckSerializer.
-- deckSerializer ⨃ divisionRules.ndf ⨃ "Division" -> units_per_card(veterancy)(phase)
-- deckSerializer ⨃ UniteDescriptor.ndf -> alot of data.

@todo actually write data pulling tools.