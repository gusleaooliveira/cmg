import { ADD_AGE_GROUP, ADD_ANIMALS, ADD_CIRCUMSTANCES, ADD_CITIES, ADD_CLIPPINGS, ADD_COORPORATIONS, ADD_DESTROY_VICTIMS, ADD_GENRES, ADD_LOGIN_USER, ADD_NEIGHBORHOODS, ADD_OCCURRENCES, ADD_PLACES, ADD_POLICIES, ADD_POSITIONS, ADD_POSTS, ADD_QUALIFICATIONS, ADD_QUESTIONS, ADD_REASONS, ADD_REGIONS, ADD_SOCIAL_NETWORKS, ADD_SOURCES, ADD_STATES, ADD_STATISTICS, ADD_STATUS, ADD_TOKEN, ADD_TRANSPORTS, ADD_USERS, ADD_VICTIMS } from '../index'
import { initialState } from '../../types/state/index'

export const reducer = (state=initialState, action: any) => {
    switch(action.type){
        case ADD_LOGIN_USER:
            return { ...state, user: action.user}
        case ADD_TOKEN:
            return { ...state, token: action.token}
        case ADD_STATES:
            return { ...state, states: action.states}
        case ADD_USERS:
            return { ...state, users: action.users}
        case ADD_OCCURRENCES:
            return { ...state, occurrences: action.occurrences}
        case ADD_VICTIMS:
            return { ...state, victims: action.victims}
        case ADD_STATISTICS:
            return { ...state, statistic: action.statistics}
        case ADD_POSTS:
            return { ...state, posts: action.posts}
        case ADD_QUESTIONS:
            return { ...state, questions: action.questions}
        case ADD_POLICIES:
            return { ...state, policies: action.policies}
        case ADD_SOURCES:
            return { ...state, sources: action.sources}
        case ADD_REASONS:
            return { ...state, reasons: action.reasons}
        case ADD_CLIPPINGS:
            return { ...state, clippings: action.clippings}
        case ADD_TRANSPORTS:
            return { ...state, transports: action.transports}
        case ADD_QUALIFICATIONS:
            return { ...state, qualifications: action.qualifications}
        case ADD_STATUS:
            return { ...state, status: action.status}
        case ADD_CIRCUMSTANCES:
            return { ...state, circumstances: action.circumstances}
        case ADD_CITIES:
            return { ...state, cities: action.cities}
        case ADD_NEIGHBORHOODS:
            return { ...state, neighborhoods: action.neighborhoods}
        case ADD_AGE_GROUP:
            return { ...state, age_group: action.age_group}
        case ADD_GENRES:
            return { ...state, genres: action.genres}
        case ADD_PLACES:
            return { ...state, places: action.places}
        case ADD_POSITIONS:
            return { ...state, positions: action.positions}
        case ADD_COORPORATIONS:
            return { ...state, coorporations: action.coorporations}
        case ADD_ANIMALS:
            return { ...state, animals: action.animals}
        case ADD_REGIONS:
            return { ...state, regions : action.regions}
        case ADD_SOCIAL_NETWORKS:
            return { ...state, social_networks: action.social_networks}
        case ADD_DESTROY_VICTIMS:
            return { ...state, idVictims: action.idVictims}
        default:
            return { ...state }
    }
}