import state from './state'
import * as actions from './actions'
import * as mutations from './mutation'
import * as getters from './getters'
const journalModuel = {
    namespaced: true,
    actions,
    mutations,
    getters,
    state
    
}
export default journalModuel