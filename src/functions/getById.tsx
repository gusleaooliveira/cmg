import { api } from "../services"


export function getStatesById(token: string, id: string){
    return api
                .get(`/states/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Estados) Erro:', erro); 
                    return null
                })
}


export function getRegionsById(token: string, id: string){
    return api
                .get(`/regions/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Regiões) Erro:', erro); 
                    return null
                })
}


export function getStatisticsById(token: string, id: string){
    return api
                .get(`/statistics/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Estatisticas) Erro:', erro); 
                    return null
                })
}


export function getUsersById(token: string, id: string){
    return api
                .get(`/users/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Usuários) Erro:', erro); 
                    return null
                })

}

export function getOccurrencesById(token: string, id: string){
    return api
                .get(`/occurrences/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Ocorrencias) Erro:', erro); 
                    return null
                })
}

export function getVictimsById(token: string, id: string){
    return api
                .get(`/victims/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Vitimas) Erro:', erro); 
                    return null
                })
}

export function getQuestionsById(token: string, id: string){
    return api
                .get(`/questions/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Questões) Erro:', erro); 
                    return null
                })
}

export function getPoliciesById(token: string, id: string){
    return api
                .get(`/policies/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Políticas) Erro:', erro); 
                    return null
                })
}

export function getSourcersById(token: string, id: string){
    return api
                .get(`/sources/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Fontes) Erro:', erro); 
                    return null
                })
}

export function getReasonsById(token: string, id: string){
    return api
                .get(`/reasons/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Motívo) Erro:', erro); 
                    return null
                })
}

export function getClippingsById(token: string, id: string) {
    return api
                .get(`/clippings/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Recorte) Erro:', erro); 
                    return null
                })
}

export function getTransportsById(token: string, id: string){
    return api
                .get(`/transports/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Transportes) Erro:', erro); 
                    return null
                })
}

export function getQualificationsById(token: string, id: string){
    return api
                .get(`/qualifications/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Qualificações) Erro:', erro); 
                    return null
                })
}

export function getStatusById(token: string, id: string){
    return api
                .get(`/status/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Status) Erro:', erro); 
                    return null
                })
}

export function getCircumstancesById(token: string, id: string){
    return api
                .get(`/circumstances/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Circuunstancias) Erro:', erro); 
                    return null
                })
}

export function getCitiesById(token: string, id: string){
    return api
                .get(`/cities/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Cidades) Erro:', erro); 
                    return null
                })
}

export function getNeighborhoodsById(token: string, id: string){
    return api
                .get(`/neighborhoods/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Bairro) Erro:', erro); 
                    return null
                })
}


export function getAgeGroupById(token: string, id: string){
    return api
                .get(`/age-group/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Faixa etária) Erro:', erro); 
                    return null
                })
}


export function getGenresById(token: string, id: string){
    return api
                .get(`/genres/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Generos) Erro:', erro); 
                    return null
                })
}

export function getPlacesById(token: string, id: string){
    return api
                .get(`/places/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Lugar/Local) Erro:', erro); 
                    return null
                })
}


export function getPositionsById(token: string, id: string){
    return api
                .get(`/positions/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Posições) Erro:', erro); 
                    return null
                })
}

export function getCoorporationsById(token: string, id: string){
    return api
                .get(`/coorporations/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Corporações) Erro:', erro); 
                    return null
                })
}

export function getAnimalsById(token: string, id: string){
    return api
                .get(`/animals/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Animais) Erro:', erro); 
                    return null
                })
}


export function getSocialNetworksById(token: string, id: string){
    return api
                .get(`/social-networks/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Redes sociais) Erro:', erro); 
                    return null
                })
}