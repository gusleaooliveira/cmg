import { api } from "../index"


export function createStates(token: string, dados: any){
    return api
                .post(`/states`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Estados) Erro:', erro); 
                    return null
                })
}

export function createUsers(token: string, dados: any){
    return api
                .post(`/users`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Usuários) Erro:', erro); 
                    return null
                })

}

export function createOccurrences(token: string, dados: any){
    return api
                .post(`/occurrences`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Ocorrencias) Erro:', erro); 
                    return null
                })
}

export function createVictims(token: string, dados: any){
    return api
                .post(`/victims`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Vitimas) Erro:', erro); 
                    return null
                })
}

export function createQuestions(token: string, dados: any){
    return api
                .post(`/questions`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Questões) Erro:', erro); 
                    return null
                })
}

export function createPolicies(token: string, dados: any){
    return api
                .post(`/policies`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Políticas) Erro:', erro); 
                    return null
                })
}

export function createSourcers(token: string, dados: any){
    return api
                .post(`/sources`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Fontes) Erro:', erro); 
                    return null
                })
}

export function createReasons(token: string, dados: any){
    return api
                .post(`/reasons`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Motívo) Erro:', erro); 
                    return null
                })
}

export function createClippings(token: string, dados: any) {
    return api
                .post(`/clippings`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Recorte) Erro:', erro); 
                    return null
                })
}

export function createTransports(token: string, dados: any){
    return api
                .post(`/transports`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Transportes) Erro:', erro); 
                    return null
                })
}

export function createQualifications(token: string, dados: any){
    return api
                .post(`/qualifications`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Qualificações) Erro:', erro); 
                    return null
                })
}

export function createStatus(token: string, dados: any){
    return api
                .post(`/status`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Status) Erro:', erro); 
                    return null
                })
}

export function createRegions(token: string, dados: any){
    return api
                .post(`/regions`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Regiões) Erro:', erro); 
                    return null
                })
}

export function createCircumstances(token: string, dados: any){
    return api
                .post(`/circumstances`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Circuunstancias) Erro:', erro); 
                    return null
                })
}

export function createCities(token: string, dados: any){
    return api
                .post(`/cities`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Cidades) Erro:', erro); 
                    return null
                })
}

export function createNeighborhoods(token: string, dados: any){
    return api
                .post(`/neighborhoods`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Bairro) Erro:', erro); 
                    return null
                })
}


export function createAgeGroup(token: string, dados: any){
    return api
                .post(`/age-group`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Faixa etária) Erro:', erro); 
                    return null
                })
}


export function createGenres(token: string, dados: any){
    return api
                .post(`/genres`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Generos) Erro:', erro); 
                    return null
                })
}

export function createPlaces(token: string, dados: any){
    return api
                .post(`/places`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Lugar/Local) Erro:', erro); 
                    return null
                })
}


export function createPositions(token: string, dados: any){
    return api
                .post(`/positions`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Posições) Erro:', erro); 
                    return null
                })
}

export function createCoorporations(token: string, dados: any){
    return api
                .post(`/coorporations`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Corporações) Erro:', erro); 
                    return null
                })
}

export function createAnimals(token: string, dados: any){
    return api
                .post(`/animals`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Animais) Erro:', erro); 
                    return null
                })
}


export function createSocialNetworks(token: string, dados: any){
    return api
                .post(`/social-networks`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Redes sociais) Erro:', erro); 
                    return null
                })
}