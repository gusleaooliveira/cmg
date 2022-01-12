import { api } from "../index"


export function getStates(token: string){
    return api
                .get('/states', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Estados) Erro:', erro); 
                    return null
                })
}


export function getRegions(token: string){
    return api
                .get('/regions', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Regiões) Erro:', erro); 
                    return null
                })
}


export function getStatistics(token: string){
    return api
                .get('/statistics', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Estatisticas) Erro:', erro); 
                    return null
                })
}


export function getUsers(token: string){
    return api
                .get('/users', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Usuários) Erro:', erro); 
                    return null
                })

}

export function getOccurrences(token: string){
    return api
                .get('/occurrences', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Ocorrencias) Erro:', erro); 
                    return null
                })
}

export function getVictims(token: string){
    return api
                .get('/victims', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Vitimas) Erro:', erro); 
                    return null
                })
}

export function getQuestions(token: string){
    return api
                .get('/questions', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Questões) Erro:', erro); 
                    return null
                })
}

export function getPolicies(token: string){
    return api
                .get('/policies', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Políticas) Erro:', erro); 
                    return null
                })
}

export function getSourcers(token: string){
    return api
                .get('/sources', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Fontes) Erro:', erro); 
                    return null
                })
}

export function getReasons(token: string){
    return api
                .get('/reasons', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Motívo) Erro:', erro); 
                    return null
                })
}

export function getClippings(token: string) {
    return api
                .get('/clippings', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Recorte) Erro:', erro); 
                    return null
                })
}

export function getTransports(token: string){
    return api
                .get('/transports', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Transportes) Erro:', erro); 
                    return null
                })
}

export function getQualifications(token: string){
    return api
                .get('/qualifications', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Qualificações) Erro:', erro); 
                    return null
                })
}

export function getStatus(token: string){
    return api
                .get('/status', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Status) Erro:', erro); 
                    return null
                })
}

export function getCircumstances(token: string){
    return api
                .get('/circumstances', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Circuunstancias) Erro:', erro); 
                    return null
                })
}

export function getCities(token: string){
    return api
                .get('/cities', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Cidades) Erro:', erro); 
                    return null
                })
}

export function getNeighborhoods(token: string){
    return api
                .get('/neighborhoods', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Bairro) Erro:', erro); 
                    return null
                })
}


export function getAgeGroup(token: string){
    return api
                .get('/age-group', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Faixa etária) Erro:', erro); 
                    return null
                })
}


export function getGenres(token: string){
    return api
                .get('/genres', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Generos) Erro:', erro); 
                    return null
                })
}

export function getPlaces(token: string){
    return api
                .get('/places', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Lugar/Local) Erro:', erro); 
                    return null
                })
}


export function getPositions(token: string){
    return api
                .get('/positions', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Posições) Erro:', erro); 
                    return null
                })
}

export function getCoorporations(token: string){
    return api
                .get('/coorporations', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Corporações) Erro:', erro); 
                    return null
                })
}

export function getAnimals(token: string){
    return api
                .get('/animals', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Animais) Erro:', erro); 
                    return null
                })
}


export function getSocialNetworks(token: string){
    return api
                .get('/social-networks', { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Redes sociais) Erro:', erro); 
                    return null
                })
}