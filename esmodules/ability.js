import Actor5e from '/systems/dnd5e/module/actor/entity.js'
import {DND5E} from '/systems/dnd5e/module/config.js'

// Define Sanity as an ability
DND5E.abilities['san'] = 'Sanity'
DND5E.abilities['san'].abbreviation = 'san'

// Add Sanity to the 5e Actor data model
const prep = Actor5e.prototype.prepareBaseData
function extendActorData() {
    const abl = this.data.data.abilities
    abl['san'] = abl['san'] || { value: 10, proficient: 0 }
    return prep.call(this)
}
Actor5e.prototype.prepareBaseData = extendActorData