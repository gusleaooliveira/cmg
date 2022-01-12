import { api } from "../index"


export function deleteStates(token: string, id: string){
    return api
                .delete(`/states/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Estados) Erro:', erro); 
                    return null
                })
}


export function deleteRegions(token: string, id: string){
    return api
                .delete(`/regions/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Regiões) Erro:', erro); 
                    return null
                })
}


export function deleteUsers(token: string, id: string){
    return api
                .delete(`/users/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Usuários) Erro:', erro); 
                    return null
                })

}

export function deleteOccurrences(token: string, id: string){
    return api
                .delete(`/occurences/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Ocorrencias) Erro:', erro); 
                    return null
                })
}

export function deleteVictims(token: string, id: string){
    return api
                .delete(`/victims/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Vitimas) Erro:', erro); 
                    return null
                })
}

export function deleteQuestions(token: string, id: string){
    return api
                .delete(`/questions/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Questões) Erro:', erro); 
                    return null
                })
}

export function deletePolicies(token: string, id: string){
    return api
                .delete(`/policies/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Políticas) Erro:', erro); 
                    return null
                })
}

export function deleteSourcers(token: string, id: string){
    return api
                .delete(`/sources/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Fontes) Erro:', erro); 
                    return null
                })
}

export function deleteReasons(token: string, id: string){
    return api
                .delete(`/reasons/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Motívo) Erro:', erro); 
                    return null
                })
}

export function deleteClippings(token: string, id: string) {
    return api
                .delete(`/clippings/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Recorte) Erro:', erro); 
                    return null
                })
}

export function deleteTransports(token: string, id: string){
    return api
                .delete(`/transports/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Transportes) Erro:', erro); 
                    return null
                })
}

export function deleteQualifications(token: string, id: string){
    return api
                .delete(`/qualifications/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Qualificações) Erro:', erro); 
                    return null
                })
}

export function deleteStatus(token: string, id: string){
    return api
                .delete(`/status/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Status) Erro:', erro); 
                    return null
                })
}

export function deleteCircumstances(token: string, id: string){
    return api
                .delete(`/circumstances/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Circuunstancias) Erro:', erro); 
                    return null
                })
}

export function deleteCities(token: string, id: string){
    return api
                .delete(`/cities/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Cidades) Erro:', erro); 
                    return null
                })
}

export function deleteNeighborhoods(token: string, id: string){
    return api
                .delete(`/neighborhoods/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Bairro) Erro:', erro); 
                    return null
                })
}


export function deleteAgeGroup(token: string, id: string){
    return api
                .delete(`/age-group/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Faixa etária) Erro:', erro); 
                    return null
                })
}


export function deleteGenres(token: string, id: string){
    return api
                .delete(`/genres/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Generos) Erro:', erro); 
                    return null
                })
}

export function deletePlaces(token: string, id: string){
    return api
                .delete(`/places/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Lugar/Local) Erro:', erro); 
                    return null
                })
}


export function deletePositions(token: string, id: string){
    return api
                .delete(`/positions/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Posições) Erro:', erro); 
                    return null
                })
}

export function deleteCoorporations(token: string, id: string){
    return api
                .delete(`/coorporations/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Corporações) Erro:', erro); 
                    return null
                })
}

export function deleteAnimals(token: string, id: string){
    return api
                .delete(`/animals/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Animais) Erro:', erro); 
                    return null
                })
}


export function deleteSocialNetworks(token: string, id: string){
    return api
                .delete(`/social-networks/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
                .then((resposta) => {
                    let resp = resposta.data
                    return resp
                })
                .catch((erro) => { 
                    console.warn('(Redes sociais) Erro:', erro); 
                    return null
                })
}