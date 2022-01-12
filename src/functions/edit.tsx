import { api } from "../services"


export function editStates(token: string, id: string, dados: any){
    return api
                .put(`/states/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Estados) Erro:', erro); 
                    return null
                })
}

export function editRegions(token: string, id: string, dados: any){
    return api
                .put(`/regions/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Regiões) Erro:', erro); 
                    return null
                })
}

export function editUsers(token: string, id: string, dados: any){
    return api
                .put(`/users/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Usuários) Erro:', erro); 
                    return null
                })

}

export function editOccurrences(token: string, id: string, dados: any){
    return api
                .put(`/occurences/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Ocorrencias) Erro:', erro); 
                    return null
                })
}

export function editVictims(token: string, id: string, dados: any){
    return api
                .put(`/victims/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Vitimas) Erro:', erro); 
                    return null
                })
}

export function editQuestions(token: string, id: string, dados: any){
    return api
                .put(`/questions/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Questões) Erro:', erro); 
                    return null
                })
}

export function editPolicies(token: string, id: string, dados: any){
    return api
                .put(`/policies/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Políticas) Erro:', erro); 
                    return null
                })
}

export function editSourcers(token: string, id: string, dados: any){
    return api
                .put(`/sources/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Fontes) Erro:', erro); 
                    return null
                })
}

export function editReasons(token: string, id: string, dados: any){
    return api
                .put(`/reasons/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Motívo) Erro:', erro); 
                    return null
                })
}

export function editClippings(token: string, id: string, dados: any) {
    return api
                .put(`/clippings/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Recorte) Erro:', erro); 
                    return null
                })
}

export function editTransports(token: string, id: string, dados: any){
    return api
                .put(`/transports/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Transportes) Erro:', erro); 
                    return null
                })
}

export function editQualifications(token: string, id: string, dados: any){
    return api
                .put(`/qualifications/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Qualificações) Erro:', erro); 
                    return null
                })
}

export function editStatus(token: string, id: string, dados: any){
    return api
                .put(`/status/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Status) Erro:', erro); 
                    return null
                })
}

export function editCircumstances(token: string, id: string, dados: any){
    return api
                .put(`/circumstances/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Circuunstancias) Erro:', erro); 
                    return null
                })
}

export function editCities(token: string, id: string, dados: any){
    return api
                .put(`/cities/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Cidades) Erro:', erro); 
                    return null
                })
}

export function editNeighborhoods(token: string, id: string, dados: any){
    return api
                .put(`/neighborhoods/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Bairro) Erro:', erro); 
                    return null
                })
}


export function editAgeGroup(token: string, id: string, dados: any){
    return api
                .put(`/age-group/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Faixa etária) Erro:', erro); 
                    return null
                })
}


export function editGenres(token: string, id: string, dados: any){
    return api
                .put(`/genres/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Generos) Erro:', erro); 
                    return null
                })
}

export function editPlaces(token: string, id: string, dados: any){
    return api
                .put(`/places/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Lugar/Local) Erro:', erro); 
                    return null
                })
}


export function editPositions(token: string, id: string, dados: any){
    return api
                .put(`/positions/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Posições) Erro:', erro); 
                    return null
                })
}

export function editCoorporations(token: string, id: string, dados: any){
    return api
                .put(`/coorporations/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Corporações) Erro:', erro); 
                    return null
                })
}

export function editAnimals(token: string, id: string, dados: any){
    return api
                .put(`/animals/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Animais) Erro:', erro); 
                    return null
                })
}


export function editSocialNetworks(token: string, id: string, dados: any){
    return api
                .put(`/social-networks/${id}`, dados, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Redes sociais) Erro:', erro); 
                    return null
                })
}