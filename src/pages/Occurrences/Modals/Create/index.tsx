import { IProps } from "./indes.types"
import { Formik } from 'formik'
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap"
import * as Yup from 'yup'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD_ANIMALS_LIST, ADD_NEIGHBORHOODS, RootState } from "../../../../store"
import { createCities, createNeighborhoods, createOccurrences, getByState, getCities, getNeighborhoods, getState, getStates, getStatesById } from "../../../../services"
import './styles.css'
import VictimsForm from './Victims/index'
import AnimalsForm from './Animals/index'

const ModalCriar : React.FC<IProps> = ({
    isModal, onHide
}) =>{
    const {neighborhoods, occurrences, token, states, regions, cities, sources, reasons, clippings, transports, qualifications, age_group, genres, circumstances  } = useSelector((state: RootState) => state.clickState)
    const dispatch = useDispatch()

    const [cidades, setCidades] = useState<any>([])
    const [idCidade, setIdCidade] = useState('')
    const [idEstado, setIdEstado] = useState('')
    const [idBairro, setIdBairro] = useState('')
    const [idRegiao, setIdRegiao] = useState('')
    
    let [ latitudeCoord, setLatitudeCoord ] = useState(0)
    let [ longitudeCoord, setLongitudeCoord ] = useState(0)


    useEffect(()=>{
        dispatch({
            type: ADD_ANIMALS_LIST,
            animalsList: []
        })
    }, [])

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitudeCoord(position.coords.latitude)
            setLongitudeCoord(position.coords.longitude)
        })  
        console.log(
            {
                'lat': latitudeCoord,
                'lng': longitudeCoord
            }
        )
    }, [setLatitudeCoord, setLongitudeCoord, latitudeCoord, longitudeCoord])


    const schemaOccurrence = Yup.object().shape({
        address: Yup.string().required('Campo  é obrigatório'),
        state_s: Yup.string().required('Campo  é obrigatório'),
        city_s: Yup.string().required('Campo  é obrigatório'),
        country: Yup.string().required('Campo  é obrigatório'),
        neighborhood: Yup.string().required('Campo  é obrigatório'),
        date: Yup.string().required('Campo  é obrigatório'),
        source_s: Yup.string().required('Campo  é obrigatório'),
        police_action: Yup.string().required('Campo  é obrigatório'),
        agent_presence: Yup.string().required('Campo  é obrigatório'),
        main_reason: Yup.string().required('Campo  é obrigatório'),
        massacre: Yup.string().required('Campo  é obrigatório'),
        clippings: Yup.array().required('Campo  é obrigatório'),
        interrupted_transport: Yup.string().required('Campo  é obrigatório'),
    })

    
    

    function getNeighborhood(neighborhood: string){
        let aux = false
        neighborhoods.forEach((chave: any)=>{
            if(chave.name == neighborhood){
                aux = true
                setIdBairro(chave.id)
                console.log('ja tinha')
            }
        })
        if(aux == false){
            createNeighborhoods(token, {name: neighborhood})
                .then((resp)=>{
                    setIdBairro(resp.id)
                    console.log('cadastrado')
                    getNeighborhoods(token)
                        .then((resp)=>{
                            dispatch({type: ADD_NEIGHBORHOODS, neighborhoods: resp})
                        })
                })
        }
    }

    function getRegion(state: string){

        regions.forEach((chave: any)=>{
            if(chave.state == state){
                console.log(chave, 'região')
                setIdRegiao(chave.id)
            }
        })
    }

    function getCidades(state: string){
        getStates(token)
            .then((resp)=>{
                resp.forEach((chave: any, valor: any)=>{
                    if(chave.name == state){
                        setIdEstado(chave.id)
                    }
                })
            })
        getState()
            .then((resp)=>{
                resp.data.forEach((chave: any, valor: any) => {
                    if(chave.nome == state){
                        getByState(chave.sigla)
                            .then((resp)=>{
                                setCidades(resp)
                            })
                    }
                })
            })
    }

    function getCidade(city: string){
        getCities(token)
            .then((resp)=>{
                resp.forEach((chave: any, valor: any)=>{
                    if(chave.name == city){
                        setIdCidade(chave.id)
                    }
                })
                console.log(idCidade, 'id')
                if(idCidade == ''){
                    createCities(token, {
                        name: city
                    })
                        .then((resp)=>{
                            setIdCidade(resp.id)
                            console.log('cidade cadastrada')
                        })
                }
            })
    }

    const [isSucessoMsg, setSucessoMsg] = useState(false)
    const [isErroMsg, setErroMsg ] = useState(false)


    return (
    <>
        <Modal
            show={isModal}
            onHide={onHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            fullscreen
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body style={{
                backgroundColor: '#796f6f'
            }}>
                <Formik
                    initialValues={
                        {
                            address: "",
                            country: "",
                            state: "",
                            state_s: "",
                            city: "",
                            city_s: "",
                            neighborhood: "",
                            latitude: latitudeCoord,
                            longitude: longitudeCoord,
                            date: "",
                            agent_presence: 'false',
                            police_action: 'false',
                            number_civilians_dead: 0,
                            number_civilians_wounded: 0,
                            number_agent_dead: 0,
                            number_agent_wounded: 0,
                            description: "",
                            source: "",
                            source_s: "",
                            related_record: "",
                            region: "",
                            main_reason: "",
                            main_reason_s: "",
                            complementary_reasons: [
                              ""
                            ],
                            massacre: 'false',
                            police_unit: "",
                            interrupted_transport: 'false',
                            related_news: "",
                            clippings: [
                                ""
                            ],
                            observations: "",
                            transports: [
                                ""
                            ],
                            date_interruption: "",
                            release_date: "",
                            transport_description: "",
                            status: "Waiting"
                          }
                    }
                    onSubmit={(dados: any)=>{
                                        
                        let clippingsList: any[] = []
                        let transportList: any[] = []
                        let complementaryReasonsList: any[] = []

                        dados.clippings.forEach((chave: any)=>{
                            clippingsList.push({
                                id: chave
                            })
                        })

                        dados.transports.forEach((chave: any) => {
                            transportList.push({
                                id: chave
                            })
                        })

                        dados.complementary_reasons.forEach((chave: any) =>{
                            complementaryReasonsList.push({
                                id: chave
                            })
                        })

                        let agent_presence = Boolean(dados.agent_presence)
                        let police_action = Boolean(dados.police_action)
                        let interrupted_transport = Boolean(dados.interrupted_transport)
                        let massacre =Boolean(dados.massacre)

                        let aux  = {}
                        
                            aux = {
                                clippings: clippingsList,
                                transports:  dados.interrupted_transport == 'true' ? transportList : null,
                                state: idEstado,
                                city: idCidade,
                                source: dados.source_s,
                                address: dados.address,
                                description: dados.description,
                                latitude: dados.latitude,
                                longitude: dados.longitude,
                                region: idRegiao,
                                status: dados.status,
                                related_news: dados.related_news,
                                related_record: dados.related_record,
                                release_date: dados.interrupted_transport == 'true'  ? dados.release_date: null ,
                                transport_description: dados.interrupted_transport == 'true' ? dados.transport_description: null ,
                                observations: dados.observations,
                                agent_presence: agent_presence,
                                police_action: police_action,
                                interrupted_transport: interrupted_transport,
                                complementary_reasons: complementaryReasonsList,
                                country: dados.country,
                                neighborhood: idBairro,
                                date: dados.date,
                                number_civilians_dead: 0,
                                number_civilians_wounded: 0,
                                number_agent_dead: 0,
                                number_agent_wounded: 0,
                                main_reason: dados.main_reason,
                                masscre: massacre,
                                police_unit: dados.police_unit,
                                date_interruption: dados.interrupted_transport == 'true'  ? dados.date_interruption : null 
                            }

                       
                            console.log('Transporte interrompido?', dados.interrupted_transport == 'false') 


                        
                        createOccurrences(token, aux)
                            .then((resp)=>{
                                console.log(resp)
                                console.log('executou')
                                setSucessoMsg(true)
                            })
                            .catch((resp)=>{
                                console.log('errou')
                                setErroMsg(true)
                            })

                        

                    }}
                    validationSchema={schemaOccurrence}
                >
                    {({ handleBlur, handleChange, handleSubmit, values, touched, errors, isValid, setFieldValue })=>(
                        <form onSubmit={handleSubmit}>  
                            <div>
                                <Button variant="warning" type="submit" >
                                    Cadastrar ocorrencia
                                </Button>
                            </div>

                            <Card body>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="address">Local*</label>
                                            <Form.Control 
                                                type="text"
                                                name="address"
                                                onChange={handleChange('address')}
                                                onBlur={handleBlur('address')}
                                                value={values.address}
                                            />  
                                            {(errors.address && touched.address) &&
                                            <p className="text-error">{errors.address}</p>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="country">País*</label>
                                            <Form.Control 
                                                name="country"
                                                type="text"
                                                onChange={handleChange('country')}
                                                onBlur={handleBlur('country')}
                                                value={values.country}
                                            />  
                                            {(errors.country && touched.country) &&
                                            <p className="text-error">{errors.country}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="state_s">Estado*</label>
                                            <Form.Select
                                                name="state_s"
                                                onChange={(e: any)=>{
                                                    console.log( e.target.value)
                                                    setFieldValue('state_s', e.target.value)
                                                    getCidades( e.target.value)
                                                    getRegion(e.target.value)
                                                }}
                                                onBlur={handleBlur('state_s')}
                                                value={values.state_s}
                                            >
                                                {regions.map((chave, valor) => {
                                                    if(chave.enabled == true){
                                                        return <option value={chave.state}>{chave.state}</option>
                                                    }
                                                })}
                                            </Form.Select>
                                            {(errors.state_s && touched.state_s) &&
                                            <p className="text-error">{errors.state_s}</p>}
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="city_s">Cidade*</label>
                                            <Form.Select
                                                name="city_s"
                                                onChange={(e: any)=>{
                                                    console.log(e.target.value)
                                                    setFieldValue('city_s', e.target.value)
                                                    getCidade(e.target.value)
                                                }}
                                                onBlur={handleBlur('city_s')}
                                                value={values.city_s}
                                                >
                                                {cidades.map((chave: any, valor: any) => {
                                                    return <option value={chave.nome}>{chave.nome}</option>
                                                })}
                                            </Form.Select>
                                            {(errors.city_s && touched.city_s) &&
                                            <p className="text-error">{errors.city_s}</p>}
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="neighborhood">Bairro*</label>
                                            <Form.Control 
                                                name="neighborhood"
                                                type="text"
                                                onChange={handleChange('neighborhood')}
                                                onBlur={(e: any)=>{
                                                    setFieldValue('neighborhood', e.target.value)
                                                    getNeighborhood(e.target.value)
                                                }}
                                                value={values.neighborhood}
                                                list="lista_bairros"
                                            />  
                                            <datalist id="lista_bairros">
                                                {neighborhoods.map((chave) =>{
                                                    return <option value={chave.name}>{chave.name}</option>
                                                })}
                                            </datalist>

                                            {(errors.neighborhood && touched.neighborhood) &&
                                            <p className="text-error">{errors.neighborhood}</p>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="date">Data da ocorrência*</label>
                                            <Form.Control
                                                type="datetime-local"
                                                name="date"
                                                onChange={handleChange('date')}
                                                onBlur={handleBlur('date')}
                                                value={values.date}
                                            />
                                            {(errors.date && touched.date) &&
                                            <p className="text-error">{errors.date}</p>}
                                        </Form.Group>
                                        <Form.Group>
                                        <Form.Group>
                                                <label htmlFor="police_action">Houve ação policial*</label>
                                                <label>
                                                    <Form.Check
                                                        type="radio"
                                                        name="police_action"
                                                        value="true"
                                                        onChange={()=> {
                                                            setFieldValue('police_action', 'true')
                                                        }}
                                                        checked={values.police_action == 'true'}
                                                        label="Sim"
                                                    />
                                                    
                                                </label>
                                                <label>
                                                    <Form.Check
                                                        type="radio"
                                                        name="police_action"
                                                        value="false"
                                                        onChange={()=> {
                                                            setFieldValue('police_action', 'false')
                                                        }}
                                                        checked={values.police_action == 'false'}
                                                        label="Não"
                                                    />
                                                    
                                                </label>
                                                {(errors.police_action && touched.police_action) &&
                                                <p className="text-error">{errors.police_action}</p>}
                                            </Form.Group>
                                        </Form.Group>

                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="source_s">Fonte de registro*</label>
                                            <Form.Select
                                                name="source_s"
                                                onChange={(e: any)=>{
                                                    console.log(e.target.value, e.currentTarget.selectedOptions[0].label)
                                                    setFieldValue('source_s', e.currentTarget.selectedOptions[0].label)
                                                    setFieldValue('source_s', e.target.value)
                                                }}
                                                onBlur={handleBlur('source_s')}
                                                value={values.source_s}
                                                >
                                                {sources.map((chave: any, valor: any) => {
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}
                                            </Form.Select>
                                            {(errors.source_s && touched.source_s) &&
                                            <p className="text-error">{errors.source_s}</p>}
                                        </Form.Group>
                                            
                                        <Form.Group>
                                            <Form.Group>                            
                                                <label htmlFor="agent_presence">Presença de agentes*</label>
                                                <label>
                                                    <Form.Check
                                                        type="radio"
                                                        name="agent_presence"
                                                        value="true"
                                                        onChange={()=> {
                                                            setFieldValue('agent_presence', 'true')
                                                        }}
                                                        checked={values.agent_presence == 'true'}
                                                        label="Sim"
                                                    />
                                                    
                                                </label>
                                                <label>
                                                    <Form.Check
                                                        type="radio"
                                                        name="agent_presence"
                                                        value="false"
                                                        onChange={()=> {
                                                            setFieldValue('agent_presence', 'false')
                                                        }}
                                                        checked={values.agent_presence == 'false'}
                                                        label="Não"
                                                    />
                                                    
                                                </label>
                                                {(errors.agent_presence && touched.agent_presence) &&
                                                <p className="text-error">{errors.agent_presence}</p>}
                                            </Form.Group>
                                        </Form.Group>   
                                    </Col>

                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="description">Descrição da ocorrência</label>
                                            <Form.Control
                                                as="textarea"
                                                name="description"
                                                onChange={handleChange('description')}
                                                onBlur={handleBlur('description')}
                                                value={values.description}
                                            />
                                            {(errors.description && touched.description) &&
                                            <p className="text-error">{errors.description}</p>}
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="related_record">Registro relacionado</label>
                                            <Form.Control
                                                name="related_record"
                                                onChange={handleChange('related_record')}
                                                onBlur={handleBlur('related_record')}
                                                value={values.related_record}
                                                as="textarea"
                                            />
                                            {(errors.related_record && touched.related_record) &&
                                            <p className="text-error">{errors.related_record}</p>}
                                        </Form.Group>
                                    
                                    </Col>

                                </Row>
                            </Card>
                            
                            <br/>

                            <Card body>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="main_reason_s">Motivo principal*</label>
                                            <Form.Select
                                                name="main_reason_s"
                                                onChange={(e: any)=>{
                                                    console.log(e.target.value, e.currentTarget.selectedOptions[0].label)
                                                    setFieldValue('main_reason_s', e.currentTarget.selectedOptions[0].label)
                                                    setFieldValue('main_reason', e.target.value)
                                                }}
                                                onBlur={handleBlur('main_reason_s')}
                                                value={values.main_reason}
                                                >
                                                {reasons.map((chave: any, valor: any) => {
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}
                                            </Form.Select>
                                            {(errors.main_reason_s && touched.main_reason_s) &&
                                            <p className="text-error">{errors.main_reason_s}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <label htmlFor="complementary_reasons">Motivos complementares</label>
                                            <Form.Select
                                                name="complementary_reasons"
                                                onChange={handleChange('complementary_reasons')}
                                                value={values.complementary_reasons}
                                                multiple
                                                >
                                                {reasons.map(chave => {
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}
                                            </Form.Select>
                                            {(errors.complementary_reasons && touched.complementary_reasons) &&
                                            <p className="text-error">{errors.complementary_reasons}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>                            
                                            <label htmlFor="massacre">Chacina*</label>
                                            <label>
                                                <Form.Check
                                                    type="radio"
                                                    name="massacre"
                                                    value="true"
                                                    onChange={()=> {
                                                        setFieldValue('massacre', 'true')
                                                    }}
                                                    checked={values.massacre == 'true'}
                                                    label="Sim"
                                                />
                                            </label>
                                            <label>
                                                <Form.Check
                                                    type="radio"
                                                    name="massacre"
                                                    value="false"
                                                    onChange={()=> {
                                                        setFieldValue('massacre', 'false')
                                                    }}
                                                    checked={values.massacre == 'false'}
                                                    label="Não"
                                                />
                                            </label>
                                            {(errors.massacre && touched.massacre) &&
                                            <p className="text-error">{errors.massacre}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="police_unit">Unidades policiais presentes</label>
                                            <Form.Control 
                                                name="police_unit"
                                                type="text"
                                                onChange={handleChange('police_unit')}
                                                onBlur={handleBlur('police_unit')}
                                                value={values.police_unit}
                                            />  
                                            {(errors.police_unit && touched.police_unit) &&
                                            <p className="text-error">{errors.police_unit}</p>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="related_news">Links de notícias relacionadas</label>
                                            <Form.Control
                                                name="related_news"
                                                onChange={handleChange('related_news')}
                                                onBlur={handleBlur('related_news')}
                                                value={values.related_news}
                                                as="textarea"
                                            />
                                            {(errors.related_news && touched.related_news) &&
                                            <p className="text-error">{errors.related_news}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="clippings">outros recortes*</label>
                                            <Form.Select
                                                name="clippings"
                                                onChange={handleChange('clippings')}
                                                onBlur={handleBlur('clippings')}
                                                value={values.clippings}
                                                multiple
                                                >
                                                {clippings.map(chave => {
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}
                                            </Form.Select>
                                            {(errors.clippings && touched.clippings) &&
                                            <p className="text-error">{errors.clippings}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="observations">Observação</label>
                                            <Form.Control
                                                as="textarea"
                                                name="observations"
                                                onChange={handleChange('observations')}
                                                onBlur={handleBlur('observations')}
                                                value={values.observations}
                                            />
                                            {(errors.observations && touched.observations) &&
                                            <p className="text-error">{errors.observations}</p>}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>                            
                                            <label htmlFor="interrupted_transport">O transporte foi interrompido?*</label>
                                            <label>
                                                <Form.Check
                                                    type="radio"
                                                    name="interrupted_transport"
                                                    value="true"
                                                    onChange={()=> {
                                                        setFieldValue('interrupted_transport', 'true')
                                                    }}
                                                    onBlur={handleBlur('interrupted_transport')}
                                                    checked={values.interrupted_transport == 'true'}
                                                    label="Sim"
                                                />
                                            </label>
                                            <label>
                                                <Form.Check
                                                    type="radio"
                                                    name="interrupted_transport"
                                                    value="false"
                                                    onChange={()=> {
                                                        setFieldValue('interrupted_transport', 'false')
                                                    }}
                                                    onBlur={handleBlur('interrupted_transport')}
                                                    checked={values.interrupted_transport == 'false'}
                                                    label="Não"
                                                />
                                            </label>
                                            {(errors.interrupted_transport && touched.interrupted_transport) &&
                                            <p className="text-error">{errors.interrupted_transport}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <label htmlFor="transports">tipo de transporte</label>
                                            <Form.Select
                                                name="transports"
                                                onChange={handleChange('transports')}
                                                onBlur={handleBlur('transports')}                                    
                                                value={values.transports}
                                                multiple
                                                disabled={values.interrupted_transport == 'false'}
                                                >
                                                {transports.map(chave => {
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}
                                            </Form.Select>
                                            {(errors.transports && touched.transports) &&
                                            <p className="text-error">{errors.transports}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="date_interruption">Data da interrupção</label>
                                            <Form.Control
                                                type="datetime-local"
                                                name="date_interruption"
                                                onChange={handleChange('date_interruption')}
                                                onBlur={handleBlur('date_interruption')}
                                                value={values.date_interruption}
                                                disabled={values.interrupted_transport == 'false'}
                                            />
                                            {(errors.date_interruption && touched.date_interruption) &&
                                            <p className="text-error">{errors.date_interruption}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="release_date">Data da liberação</label>
                                            <Form.Control
                                                type="datetime-local"
                                                name="release_date"
                                                onChange={handleChange('release_date')}
                                                onBlur={handleBlur('release_date')}
                                                value={values.release_date}
                                                disabled={values.interrupted_transport == 'false'}
                                            />
                                            {(errors.release_date && touched.release_date) &&
                                            <p className="text-error">{errors.release_date}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <label htmlFor="transport_description">Descrição do transporte</label>
                                            <Form.Control
                                                as="textarea"
                                                name="transport_description"
                                                onChange={handleChange('transport_description')}
                                                onBlur={handleBlur('transport_description')}
                                                value={values.transport_description}
                                                disabled={values.interrupted_transport == 'false'}
                                            />
                                            {(errors.transport_description && touched.transport_description) &&
                                            <p className="text-error">{errors.transport_description}</p>}
                                        </Form.Group>
                                    </Col>
                                </Row>

                            </Card>
                            
                            

                        </form>
                    )}
                </Formik> 



                <br/>

                <VictimsForm />

                <br/>
                <br/>

                <AnimalsForm />
            
            </Modal.Body>
        </Modal>


            <Modal
                show={isSucessoMsg}
                onHide={()=>setSucessoMsg(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    Sucesso ao salvar!
                </Modal.Body>
            </Modal>
            <Modal
                show={isErroMsg}
                onHide={()=>setErroMsg(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    Erro ao salvar!
                </Modal.Body>
            </Modal>
    </>
    )
}

export default ModalCriar