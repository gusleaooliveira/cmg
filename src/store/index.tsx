import { typeState } from './index.types'

export { 
    ADD_TOKEN,
    ADD_STATES,
    ADD_USERS,
    ADD_OCCURRENCES,
    ADD_VICTIMS,
    ADD_STATISTICS,
    ADD_POSTS,
    ADD_QUESTIONS,
    ADD_POLICIES,
    ADD_SOURCES,
    ADD_REASONS,
    ADD_CLIPPINGS,
    ADD_TRANSPORTS,
    ADD_QUALIFICATIONS,
    ADD_STATUS,
    ADD_CIRCUMSTANCES,
    ADD_CITIES,
    ADD_NEIGHBORHOODS,
    ADD_AGE_GROUP,
    ADD_GENRES,
    ADD_PLACES,
    ADD_POSITIONS,
    ADD_COORPORATIONS,
    ADD_ANIMALS,
    ADD_REGIONS,
    ADD_DESTROY_VICTIMS,
    ADD_LOGIN_USER,
    ADD_SOCIAL_NETWORKS,
    ADD_VICTMS_LIST
} from './actions'

export { Store } from './Store'



export interface RootState  {
    clickState: typeState
}