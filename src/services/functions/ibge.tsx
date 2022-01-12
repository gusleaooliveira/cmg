import { ibge } from "..";

export function getState(){
    return ibge
                .get('/estados')
                .then((resp)=>{
                    return resp
                })
}

export function getByState(uf: string){
    return ibge
                .get(`/estados/${uf}/distritos`)
                .then((resp)=>{
                    return resp.data
                })
}