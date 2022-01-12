import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Col, Form, Row, Card, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { InterfaceProps } from './index.types'
import Select from 'react-select'
import { AnyIfEmpty, useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { RadioText } from '../../../../../components'
import trash from '../../../../../assets/trash.png'
import { createOccurrences, createVictims, getAgeGroup, getCircumstances, getCities, getCitiesById, getClippings, getCoorporations, getGenres, getNeighborhoods, getPlaces, getPositions, getQualifications, getReasons, getRegions, getSourcers, getStates, getStatesById, getStatus, getTransports } from '../../../../../services'
import { ADD_AGE_GROUP, ADD_CIRCUMSTANCES, ADD_CITIES, ADD_CLIPPINGS, ADD_COORPORATIONS, ADD_DESTROY_VICTIMS, ADD_GENRES, ADD_NEIGHBORHOODS, ADD_PLACES, ADD_POSITIONS, ADD_QUALIFICATIONS, ADD_REASONS, ADD_REGIONS, ADD_SOURCES, ADD_STATES, ADD_STATUS, ADD_TRANSPORTS, RootState } from '../../../../../store'



const Victims: React.FC<InterfaceProps> = ({
    idOcurrence, idVictim
}) => {
    const { places, token, qualifications, age_group, genres, circumstances, status, positions, coorporations } = useSelector((state: RootState) => state.clickState)
    const dispatch = useDispatch()
   
    useEffect(()=>{
        getQualifications(token).then((resp) => { dispatch({type: ADD_QUALIFICATIONS, qualifications: resp}) })
        getStatus(token).then((resp) =>  { dispatch({type: ADD_STATUS, status: resp}) })
        getGenres(token).then((resp) =>  { dispatch({type: ADD_GENRES, genres: resp}) })
        getAgeGroup(token).then((resp) =>  { dispatch({type: ADD_AGE_GROUP, age_group: resp})  })
        getCircumstances(token).then((resp) =>  { dispatch({type: ADD_CIRCUMSTANCES, circumstances: resp})  })
        getPositions(token).then((resp) =>  { dispatch({type: ADD_POSITIONS, positions: resp}) })
        getCoorporations(token).then((resp) =>  { dispatch({type: ADD_COORPORATIONS, coorporations: resp}) })
        getPlaces(token).then((resp) =>  { dispatch({type: ADD_PLACES, places: resp}) })
    }, [])

    

    const [ listaItems, setListaItems] = useState<any>([])
    const [ partidos, setPartidos ] = useState([
        {label: "PARTIDO PÁTRIA LIVRE", value:"PARTIDO PÁTRIA LIVRE" },
        {label: "CIDADANIA", value:"CIDADANIA" },
        {label: "PARTIDO POPULAR SOCIALISTA", value:"PARTIDO POPULAR SOCIALISTA" },
        {label: "PARTIDO DEMOCRÁTICO TRABALHISTA", value:"PARTIDO DEMOCRÁTICO TRABALHISTA" },
        {label: "PARTIDO REPUBLICANO DA ORDEM SOCIAL", value:"PARTIDO REPUBLICANO DA ORDEM SOCIAL" },
        {label: "PODEMOS", value:"PODEMOS" },
        {label: "PARTIDO TRABALHISTA CRISTÃO", value:"PARTIDO TRABALHISTA CRISTÃO" },
        {label: "AVANTE", value:"AVANTE" },
        {label: "PARTIDO SOCIAL LIBERAL", value:"PARTIDO SOCIAL LIBERAL" },
        {label: "PARTIDO SOCIAL DEMOCRATICO", value:"PARTIDO SOCIAL DEMOCRATICO" },
        {label: "SOLIDARIEDADE", value:"SOLIDARIEDADE" },
        {label: "PARTIDO TRABALHISTA BRASILEIRO", value:"PARTIDO TRABALHISTA BRASILEIRO" },
        {label: "PARTIDO SOCIAL DEMOCRATA CRISTÃO", value:"PARTIDO SOCIAL DEMOCRATA CRISTÃO" },
        {label: "PARTIDO COMUNISTA DO BRASIL", value:"PARTIDO COMUNISTA DO BRASIL" },
        {label: "UNIDADE POPULAR", value:"UNIDADE POPULAR" },
        {label: "PARTIDO TRABALHISTA DO BRASIL", value:"PARTIDO TRABALHISTA DO BRASIL" },
        {label: "REDE SUSTENTABILIDADE", value:"REDE SUSTENTABILIDADE" },
        {label: "PARTIDO SOCIAL CRISTÃO", value:"PARTIDO SOCIAL CRISTÃO" },
        {label: "PARTIDO DA CAUSA OPERARIA", value:"PARTIDO DA CAUSA OPERARIA" },
        {label: "PROGRESSISTAS", value:"PROGRESSISTAS" },
        {label: "DEMOCRACIA CRISTÃ", value:"DEMOCRACIA CRISTÃ" },
        {label: "PARTIDO PATRIA LIVRE", value:"PARTIDO PATRIA LIVRE" },
        {label: "PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO", value:"PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO" },
        {label: "PARTIDO COMUNISTA DO BRASIL", value:"PARTIDO COMUNISTA DO BRASIL" },
        {label: "PARTIDO TRABALHISTA CRISTAO", value:"PARTIDO TRABALHISTA CRISTAO" },
        {label: "PARTIDO PROGRESSISTA", value:"PARTIDO PROGRESSISTA" },
        {label: "PARTIDO DA MULHER BRASILEIRA", value:"PARTIDO DA MULHER BRASILEIRA" },
        {label: "MOVIMENTO DEMOCRÁTICO BRASILEIRO", value:"MOVIMENTO DEMOCRÁTICO BRASILEIRO" },
        {label: "PARTIDO SOCIALISTA BRASILEIRO", value:"PARTIDO SOCIALISTA BRASILEIRO" },
        {label: "PARTIDO DA REPÚBLICA", value:"PARTIDO DA REPÚBLICA" },
        {label: "PARTIDO DO MOVIMENTO DEMOCRATICO BRASILEIRO", value:"PARTIDO DO MOVIMENTO DEMOCRATICO BRASILEIRO" },
        {label: "PARTIDO ECOLÓGICO NACIONAL", value:"PARTIDO ECOLÓGICO NACIONAL" },
        {label: "PARTIDO REPUBLICANO PROGRESSISTA", value:"PARTIDO REPUBLICANO PROGRESSISTA" },
        {label: "PARTIDO ECOLÓGICO NACIONAL", value:"PARTIDO ECOLÓGICO NACIONAL" },
        {label: "PARTIDO LIBERAL", value:"PARTIDO LIBERAL" },
        {label: "PARTIDO NOVO", value:"PARTIDO NOVO" },
        {label: "PATRIOTA", alue:"PATRIOTA" },
        {label: "REPUBLICANOS", value:"REPUBLICANOS" },
        {label: "PARTIDO DO MOVIMENTO DEMOCRÁTICO BRASILEIRO", value:"PARTIDO DO MOVIMENTO DEMOCRÁTICO BRASILEIRO" },
        {label: "PARTIDO SOCIAL CRISTAO", value:"PARTIDO SOCIAL CRISTAO" },
        {label: "PARTIDO DA MOBILIZAÇÃO NACIONAL", value:"PARTIDO DA MOBILIZAÇÃO NACIONAL" },
        {label: "PARTIDO DA REPUBLICA", value:"PARTIDO DA REPUBLICA" },
        {label: "PARTIDO HUMANISTA DA SOLIDARIEDADE", value:"PARTIDO HUMANISTA DA SOLIDARIEDADE" },
        {label: "PARTIDO VERDE", value:"PARTIDO VERDE" },
        {label: "PARTIDO TRABALHISTA NACIONAL", value:"PARTIDO TRABALHISTA NACIONAL" },
        {label: "PARTIDO DEMOCRATICO TRABALHISTA", value:"PARTIDO DEMOCRATICO TRABALHISTA" },
        {label: "PARTIDO DA CAUSA OPERÁRIA", value:"PARTIDO DA CAUSA OPERÁRIA" },
        {label: "PARTIDO RENOVADOR TRABALHISTA BRASILEIRO", value:"PARTIDO RENOVADOR TRABALHISTA BRASILEIRO" },
        {label: "PARTIDO SOCIALISMO E LIBERDADE", value:"PARTIDO SOCIALISMO E LIBERDADE" },
        {label: "PARTIDO DA SOCIAL DEMOCRACIA BRASILEIRA", value:"PARTIDO DA SOCIAL DEMOCRACIA BRASILEIRA" },
        {label: "PARTIDO COMUNISTA BRASILEIRO", value:"PARTIDO COMUNISTA BRASILEIRO" },
        {label: "PARTIDO REPUBLICANO BRASILEIRO", value:"PARTIDO REPUBLICANO BRASILEIRO" },
        {label: "SOLIDARIEDADE", value:"SOLIDARIEDADE" },
        {label: "PARTIDO DA MOBILIZACAO NACIONAL", value:"PARTIDO DA MOBILIZACAO NACIONAL" },
        {label: "PARTIDO DOS TRABALHADORES", value:"PARTIDO DOS TRABALHADORES" },
        {label: "PARTIDO SOCIAL DEMOCRÁTICO", value:"PARTIDO SOCIAL DEMOCRÁTICO" },
        {label: "DEMOCRATAS", value:"DEMOCRATAS" },
        {label: "PARTIDO TRABALHISTA DO BRASIL", value:"PARTIDO TRABALHISTA DO BRASIL" },
        {label: "PARTIDO SOCIAL DEMOCRATA CRISTAO", value:"PARTIDO SOCIAL DEMOCRATA CRISTAO" }
    ])

    const [ situation, setSituation ] = useState(false)
    const [ typePerson, setTypePerson ] = useState('')
    const [ circunstances, setCircunstances] = useState([])

    const formik = useFormik({
        initialValues: {
            occurrence: idOcurrence,
            type: "People",
            situation: "Wounded",
            type_person: "Civilian",
            death_date: "",
            name: "",
            age: 0,
            genre: "",
            circumstances: [ { "id": "" } ],
            place: "",
            age_group: "",
            general_observation: "",
            qualifications: [ { "id": "" } ],
            service_status: "b3d692ed-edef-4e39-987b-a6e3f612eab6",
            agent_status: "b3d692ed-edef-4e39-987b-a6e3f612eab6",
            coorporation: "",
            agent_position: "",
            unit: "",
            political_status: "",
            political_position: "",
            political_party: "",
            political_observation: ""
        },
          onSubmit: (dados: any) => {
              console.log(dados)

                let aux = Object.assign({
                    'coorporation': dados.coorporation == '' ? '792dee0d-4b12-47eb-826b-8a421fec3d8e': dados.coorporation,
                    'agent_position': dados.agent_position  == '' ? '1627655d-8eca-4bc4-971c-4f11f78cbdb1': dados.agent_position ,
                    'political_status': dados.political_status  == '' ? 'b3d692ed-edef-4e39-987b-a6e3f612eab6': dados.political_status,
                    'position': dados.position  == '' ? '1627655d-8eca-4bc4-971c-4f11f78cbdb1': dados.position 
                })


            createVictims(token, aux)
            .then((resp)=>{ 
                console.log(resp, 'executo')
            })
          }
    })

   

   

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Card 
                    body 
                    style={{
                        backgroundColor: '#ccc',
                        marginTop: '20px',
                        marginBottom: '20px'                    
                    }}>
                    <Row>
                        <Col>
                            <h5
                                style={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '12px',
                                    lineHeight: '15px',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase', 
                                }}
                            >
                                Vítima #{idVictim}
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <RadioText 
                            value={formik.values.situation}
                            label1="Ferido"
                            value1="Wounded"
                            label2="Morto"
                            value2="Dead"
                            color1="#FF9F43"
                            color2="#EA5455"
                            onChange={(e)=>{
                                formik.setFieldValue(
                                    'situation',
                                    e
                                )                                 
                            }}
                        />

                        <RadioText 
                            value={formik.values.type_person}
                            label1="Civil"
                            value1="Civilian"
                            label2="Agente"
                            value2="Agent"
                            color1="#2C3941"
                            color2="#2C3941"
                            onChange={(e)=>{
                                formik.setFieldValue(
                                    'type_person',
                                    e
                                )                                 
                            }}
                        />

                        <Col xs={1}>
                            <Form.Label>Qualificação</Form.Label>   
                        </Col>
                        <Col>
                            <Select
                                options={
                                    qualifications.map((chave: any, valor: any)=>{
                                        return {
                                            value: chave.id,
                                            label: chave.name
                                        }
                                    })
                                }
                                isMulti
                                onChange={(e)=>{
                                    let aux: any[] = []
                                    let aux2: any[] = []
                                    e.map((chave: any, valor: any) => {
                                        switch(chave.label){
                                            case 'Agente de segurança':
                                                aux.push('agent_security')
                                            break;
                                            case 'Motorista de aplicativo':
                                                aux.push('service')
                                            break;
                                            case 'Moto taxista/motoboy"':
                                                aux.push('service')
                                            break;
                                            case 'Vendedor ambulante':
                                                aux.push('service')
                                            break;
                                            case 'Político':
                                                aux.push('political_status ')
                                            break;
                                            case 'Ex Detento':
                                                aux.push('')
                                            break;
                                            case 'Grávida':
                                                aux.push('')
                                            break;
                                            case 'Não identificado':
                                                aux.push('')
                                            break;
                                            case 'Outros':
                                                aux.push('service')
                                            break;
                                            default:
                                                aux.push('service')
                                        }
                                        aux2.push({id: chave.value})
                                    })
                                    console.log(aux)
                                    setListaItems([ ...aux ])
                                    formik.setFieldValue(
                                        'qualifications',
                                        [...aux2]
                                    )
                                }}    
                            />
                        </Col>
                        <Col  xs={2}>
                                <Button
                                    variant="light"
                                    style={{
                                        color: 'red',
                                        backgroundColor: 'transparent',
                                        border: 'none'
                                    }}
                                    onClick={()=>{
                                        dispatch({type: ADD_DESTROY_VICTIMS, id: idVictim})
                                    }}
                                >
                                    Excluir Bloco
                                    <img src={trash} style={{marginLeft: '10px'}}/>
                                </Button>
                        </Col>
                    </Row>
                </Card>


                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nome/Apelido da vítima</Form.Label>
                            <Form.Control  
                                type="text" 
                                placeholder=""
                                id="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Idade</Form.Label>
                            <Form.Control  
                                type="number" 
                                placeholder=""
                                min={0}
                                id="age"
                                value={formik.values.age}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Faixa Etária</Form.Label>
                            <Form.Select
                                value={formik.values.age_group}
                                onChange={(e)=>{
                                    formik.setFieldValue('age_group', e.target.value)
                                }}
                            >
                                {age_group.map((chave: any, valor: any) => {
                                    return <option value={chave.id}>{chave.name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Gênero</Form.Label>
                            <Form.Select
                                value={formik.values.genre}
                                onChange={(e)=>{
                                    formik.setFieldValue('genre', e.target.value)
                                }}
                            >
                                {genres.map((chave: any, valor: any) => {
                                    return <option value={chave.id}>{chave.name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Local</Form.Label>
                            <Form.Select
                                value={formik.values.place}
                                onChange={(e)=>{
                                    formik.setFieldValue('place', e.target.value)
                                }}
                            >
                                {places.map((chave: any, valor: any) => {
                                    return <option value={chave.id}>{chave.name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Circunstâncias</Form.Label>
                            
                            <Select
                                options={
                                    circumstances.map((chave: any, valor: any)=>{
                                        return {
                                            value: chave.id,
                                            label: chave.name
                                        }
                                    })
                                } 
                                isMulti
                                onChange={(e)=>{
                                    console.log(e)
                                    let aux: any = []
                                    let aux2: any = []
                                    e.map((chave) =>{
                                        aux.push({ id: chave.value })
                                        aux2.push({ id: chave.value})
                                    })
                                    setCircunstances(aux)
                                    formik.setFieldValue('circumstances', [...aux2])
                                }}                           
                            />
                       
                        </Form.Group>                        
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Observações</Form.Label>
                            <Form.Control  
                                type="text" 
                                placeholder=""
                                id="general_observation"
                                value={formik.values.general_observation}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Status do serviço</Form.Label>
                            <Form.Select
                                value={formik.values.service_status}
                                onChange={(e)=>{
                                    formik.setFieldValue('service_status', e.target.value)
                                }}
                            >
                                {status.map((chave: any, valor: any) => {
                                    if(listaItems.includes(chave.type)){
                                        return <option value={chave.id}>{chave.name}</option>
                                    }
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>


                {formik.values.situation == "Dead" &&
                    <Row>
                        <Form.Group>
                            <Form.Label>Data da morte</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                id="death_date"
                                value={formik.values.death_date}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                     
                    </Row>}
               
                {listaItems.includes('political_status ') &&  
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Partido político</Form.Label>
                                <Form.Select
                                    value={formik.values.political_party}
                                    onChange={(e)=>{
                                        formik.setFieldValue('political_party', e.target.value)
                                    }}
                                >
                                    {partidos.map((chave: any, valor: any) => {
                                        return <option value={chave.label}>{chave.value}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Cargo</Form.Label>
                                <Form.Select
                                    value={formik.values.political_position}
                                    onChange={(e)=>{
                                        formik.setFieldValue('political_position', e.target.value)
                                    }}
                                >
                                    {positions.map((chave: any, valor: any) => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>                            
                        </Col>  
                        <Col>
                            <Form.Group>
                                <Form.Label>Status do político</Form.Label>
                                <Form.Select
                                    value={formik.values.political_status}
                                    onChange={(e)=>{
                                        formik.setFieldValue('political_status', e.target.value)
                                    }}
                                >
                                    {status.map((chave: any, valor: any) => {
                                        if(chave.type == 'political_status '){
                                            return <option value={chave.id}>{chave.name}</option>
                                        }
                                    })}
                                </Form.Select>
                            </Form.Group>                            
                        </Col>    
                    </Row>}                   
                
                {listaItems.includes('agent_security') &&  
                <>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Coorporação do agente</Form.Label>
                                <Form.Select
                                    value={formik.values.coorporation}
                                    onChange={(e)=>{
                                        formik.setFieldValue('coorporation', e.target.value)
                                    }}
                                >
                                    {coorporations.map((chave: any, valor: any) => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>  
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Cargo</Form.Label>
                                <Form.Select
                                    value={formik.values.agent_position}
                                    onChange={(e)=>{
                                        formik.setFieldValue('agent_position', e.target.value)
                                    }}
                                >
                                    {positions.map((chave: any, valor: any) => {
                                        return <option value={chave.id}>{chave.name}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>                             
                        </Col>  
                        <Col>
                            <Form.Group>
                                <Form.Label>Status do agente</Form.Label>
                                <Form.Select
                                    value={formik.values.agent_status}
                                    onChange={(e)=>{
                                        formik.setFieldValue('agent_status', e.target.value)
                                    }}
                                >
                                    {status.map((chave: any, valor: any) => {
                                        if(chave.type == 'agent_security'){
                                            return <option value={chave.id}>{chave.name}</option>
                                        }
                                    })}
                                </Form.Select>
                            </Form.Group>                            
                        </Col>    
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Unidade</Form.Label>
                                <Form.Control  
                                    type="text" 
                                    placeholder=""
                                    id="unit"
                                    value={formik.values.unit}
                                    onChange={formik.handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </> }                       
                

                <br/>
                <Button type="submit" variant="warning">
                    Salvar vítima
                </Button>
                <br/>
                <br/>
            </Form>
        </>
    )
}

export default Victims