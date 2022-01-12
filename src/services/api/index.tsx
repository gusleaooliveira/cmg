import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://ic2nlc1fsh.execute-api.us-east-2.amazonaws.com/dev'
})

export const ibge = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/'
})