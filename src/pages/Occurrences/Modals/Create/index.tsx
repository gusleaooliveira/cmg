import React, { useCallback, useEffect, useState, useMemo, useRef} from 'react'
import { Button, Card, Col, Form, Image, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { InterfaceProps } from "./index.types";
import { useForm } from "react-hook-form";
import Select from 'react-select'
import Victims from './Victims';
import Animais from './Animais'
import agentImg from './agent.svg'
import civillianImg from './civillian.svg'
import alertImg from './alert.svg'
import localImg from './local.svg'
import { useFormik } from 'formik';
import { RadioGroup, InputCity, InputNeighborhood } from '../../../../components/index'
import { createOccurrences, getCities, getCitiesById, getClippings, getNeighborhoods, getReasons, getRegions, getSourcers, getState, getStates, getStatesById, getTransports } from '../../../../services';
import { ADD_CITIES, ADD_CLIPPINGS, ADD_NEIGHBORHOODS, ADD_REASONS, ADD_REGIONS, ADD_SOURCES, ADD_STATES, ADD_TRANSPORTS, RootState } from '../../../../store';


const ModalCriar: React.FC<InterfaceProps> = ({ isModal, onHide }) =>{
    const { regions, idVictims, user, states, cities, neighborhoods, sources, reasons, clippings, transports, token } = useSelector((state : RootState) => state.clickState)
    const dispatch = useDispatch()

    const referencia = useRef<any>(null)

    useEffect(()=>{
        getCities(token).then((resp) =>  { dispatch({type: ADD_CITIES, cities: resp}) })
        getStates(token).then((resp) =>  { dispatch({type: ADD_STATES, states: resp}) })
        getNeighborhoods(token).then((resp) =>  { dispatch({type: ADD_NEIGHBORHOODS, neighborhoods: resp}) })
        getSourcers(token).then((resp) =>  { dispatch({type: ADD_SOURCES, sources: resp}) })
        getReasons(token).then((resp) =>  { dispatch({type: ADD_REASONS, reasons: resp}) })
        getClippings(token).then((resp) =>  { dispatch({type: ADD_CLIPPINGS, clippings: resp}) })
        getTransports(token).then((resp) =>  { dispatch({type: ADD_TRANSPORTS, transports: resp}) })
        getRegions(token).then((resp)=>{  dispatch({type: ADD_REGIONS, regions: resp}) })
    }, [])


    const [ idOcorrencia, setIdOcorrencia ] = useState('')
    const [ listaMotivosComplementares, setListaMotivosComplementares ] = useState<any[]>([])
    const [ listaTransports, setListaTransports ] = useState<any[]>([])
    const [ listaClippings, setListaClippings ] = useState<any[]>([])
    const [ feridosCivisOcorrencia, setFeridosCivisOcorrencia ] = useState<number | null>(null)
    const [ mortosCivisOcorrencia, setMortosCivisOcorrencia ] = useState<number | null>(null)
    const [ feridosAgenteOcorrencia, setFeridosAgenteOcorrencia ] = useState<number | null>(null)
    const [ descricaoOcorrencia, setDescricaoOcorrencia ] = useState<number | null>(null)
    const [ mortosAgenteOcorrencia, setMortosAgenteOcorrencia ] = useState<string | null>(null)
    const [ tirosOcorrencia, setTirosOcorrencia ] = useState<number | null>(null)
    const [ dataOcorrencia, setDataOcorrencia ] = useState<any | null>(null)
    const [ local1Ocorrencia, setLocal1Ocorrencia ] = useState<string | null>(null)
    const [ local2Ocorrencia, setLocal2Ocorrencia ] = useState<string | null>(null)
    const [ totalVitimas, setTotalVitimas ] = useState<string | number>(0)
    const [ totalAnimais, setTotalAnimais ] = useState<string | number>(0)

    

    function getStateByID(id: string){
        let resp = getStatesById(token, id)
            resp.then((resp)=> {
                setLocal1Ocorrencia(resp.name)
            })
    }
    function getCityByID(id: string){
        let resp = getCitiesById(token, id)
        resp.then((resp)=> {
            setLocal2Ocorrencia(resp.name)
        })
    }

    const [ listaVitimas, setListaVitimas ] = useState<any>([ <></> ])
    const [ listaAnimais, setListaAnimais ] = useState<any>([ <></> ])
    const [temp, setTemp ] = useState<number>(0)
    const [temp1, seTemp1 ] = useState<number>(0)

    function addVictims(){
        if(temp == 0){
            let aux: any[] = [...listaVitimas]
            let cont = temp 
            aux.push(
                <Victims
                    idOcurrence={idOcorrencia}
                    idVictim={(cont)}
                />
            )
            cont = cont + 1
            setTemp(cont)
            setListaVitimas([ ...aux ])
        }
        if(temp < totalVitimas){
            let aux: any[] = [...listaVitimas]
            let cont = temp 
            aux.push(
                <Victims
                    idOcurrence={idOcorrencia}
                    idVictim={(cont)}
                />
            )
            cont = cont + 1
            setTemp(cont)
            setListaVitimas([ ...aux ])
        }
        if(temp > totalVitimas){
            let aux: any[] = [...listaVitimas]
            let cont = temp
            cont = cont -1 
            aux.pop()
            setTemp(cont)
            setListaVitimas([...aux])
        }
    }

    function addAnimais(){
        if(temp == 0){
            let aux: any[] = [...listaAnimais]
            let cont = temp 
            aux.push(
                <Animais
                    idOcurrence={idOcorrencia}
                    idVictim={(cont)}
                />
            )
            cont = cont + 1
            setTemp(cont)
            setListaAnimais([ ...aux ])
        }
        if(temp < totalAnimais){
            let aux: any[] = [...listaAnimais]
            let cont = temp 
            aux.push(
                <Animais
                    idOcurrence={idOcorrencia}
                    idVictim={(cont)}
                />
            )
            cont = cont + 1
            setTemp(cont)
            setListaAnimais([ ...aux ])
        }
        if(temp > totalAnimais){
            let aux: any[] = [...listaAnimais]
            let cont = temp
            cont = cont -1 
            aux.pop()
            setTemp(cont)
            setListaAnimais([...aux])
        }
    }

    let [ latitudeCoord, setLatitudeCoord ] = useState(0)
    let [ longitudeCoord, setLongitudeCoord ] = useState(0)

    const formik =  useFormik({
        initialValues: {
            address: "",
            country: "",
            state: "",
            city: '',
            neighborhood: '',
            latitude: latitudeCoord,
            longitude: longitudeCoord,
            date: "",
            agent_presence: true,
            police_action: true,
            number_civilians_dead: 0,
            number_civilians_wounded: 0,
            number_agent_dead: 0,
            number_agent_wounded: 0,
            description: "",
            source: "",
            related_record: "",
            region: "",
            main_reason: '',
            complementary_reasons: [
              {
                id: ""
              }
            ],
            massacre: true,
            police_unit: "",
            interrupted_transport: true,
            related_news: "",
            clippings: [
              {
                id: ""
              }
            ],
            observations: "",
            transports: [
              {
                id: ""
              }
            ],
            date_interruption: "",
            release_date: "",
            transport_description: "",
            status: "Waiting"
        },
        onSubmit: (dados) => {
           
            /*
            states.forEach((resp)=>{
                if(resp.name == dados.state){
                    let aux = {...dados}
                    aux.state = resp.id
                                        
                    createOccurrences(token, aux)
                        .then((resp)=>{ 
                            setIdOcorrencia(resp.id)
                            setFeridosCivisOcorrencia(resp.number_civilians_wounded)
                            setMortosCivisOcorrencia(resp.number_civilians_dead)
                            setFeridosAgenteOcorrencia(resp.number_agent_wounded)
                            setDescricaoOcorrencia(resp.description)
                            setMortosAgenteOcorrencia(resp.number_agent_dead)
                            setDataOcorrencia(resp.date)
                            getStateByID(resp.state)
                            getCityByID(resp.city)
                            console.log(resp, 'executo')
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                }
            })
            */

        }
    })



    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitudeCoord(position.coords.latitude)
            formik.setFieldValue('latitude', position.coords.latitude)
            setLongitudeCoord(position.coords.longitude)
            formik.setFieldValue('longitude', position.coords.longitude)
        })  
        console.log(
            {
                'lat': latitudeCoord,
                'lng': longitudeCoord
            }
        )
    }, [setLatitudeCoord, setLongitudeCoord, latitudeCoord, longitudeCoord])

    const [estadoNome, setEstadoNome] = useState('')

    const [mostrarErro, setMostrarErro] = useState(false)
    const [erro, setErro] = useState('')
    const [mostrarAcerto, setMostrarAcerto] = useState(false)

    return (
        <>
            <Modal
                    show={isModal}
                    onHide={onHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    fullscreen
                >
                    <Modal.Header closeButton>


                        <Row
                            style={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '12px',
                                lineHeight: '23px'
                            }}
                        >
                            <Row>
                                <Col>
                                    <h1
                                        style={{
                                            fontFamily: 'Montserrat',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '18px',
                                            lineHeight: '25px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Registrar Ocorrências
                                    </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>

                                            <div
                                                style={{
                                                    backgroundColor: '#2C3941',
                                                    color: '#fff',
                                                    padding: '16px',
                                                    borderTopLeftRadius: '6px'
                                                }}
                                            >
                                                Registrado por <b>{user.name}</b>
                                            </div>
                                    <div style={{marginLeft: '20px', marginTop: '12px'}}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <div style={{ marginRight: '12px' }}>
                                                <Image src={alertImg} />
                                            </div>
                                            <div>
                                                <p
                                                    style={{
                                                        fontFamily: 'Montserrat',
                                                        fontStyle: 'normal',
                                                        fontWeight: '600',
                                                        fontSize: '14px',
                                                        lineHeight: '17px'
                                                    }}
                                                >
                                                    Tiros
                                                    {tirosOcorrencia == null ? <span>...</span> : <span>{tirosOcorrencia}</span>}
                                                </p>
                                                <p>{dataOcorrencia == null ? <span>--/--/-- --:--</span> : <span>{dataOcorrencia}</span>}</p>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <div style={{ marginRight: '12px' }}>
                                                <Image src={localImg} />
                                            </div>
                                            <div>
                                                <p>{local1Ocorrencia == null ? <span>---</span> : <span>{local1Ocorrencia}</span>}</p>
                                                <p>{local2Ocorrencia == null ? <span>---</span> : <span>{local2Ocorrencia}</span>}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <p><b># {idOcorrencia}</b></p>
                                    <p>Civis</p>
                                    <div>
                                        <Image src={civillianImg} />
                                        {feridosCivisOcorrencia == null ? <span> - feridos</span> : <span> {feridosCivisOcorrencia} feridos</span>}
                                        /
                                        {mortosCivisOcorrencia == null ? <span> - mortos</span> : <span> {mortosCivisOcorrencia} mortos</span>}
                                    </div>

                                    <p>Agentes de segurança</p>
                                    <div>
                                        <Image src={agentImg} />
                                        {feridosAgenteOcorrencia == null ? <span> - feridos</span> : <span> {feridosAgenteOcorrencia} feridos</span>}
                                        /
                                        {mortosAgenteOcorrencia == null ? <span> - mortos</span> : <span> {mortosAgenteOcorrencia} mortos</span>}
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <p>Descrição de ocorrências</p>
                                    {descricaoOcorrencia == null ?
                                    <p>---</p>:
                                    <p>{descricaoOcorrencia}</p>}
                                </Col>

                                <Col xs={2}>
                                    <Button variant="warning" onClick={()=>{
                                        if(formik.values.address == ''){
                                            setErro('Selecione/Preencha o/a/os/as local')
                                            setMostrarErro(true)
                                        }
                                        if(formik.values.country == ''){
                                            setErro('Selecione/Preencha o/a/os/as país')
                                            setMostrarErro(true)
                                        }
                                        if(formik.values.state == ''){
                                            setErro('Selecione/Preencha o/a/os/as estado')
                                            setMostrarErro(true)
                                        }
                                        if(formik.values.city == ''){
                                            setErro('Selecione/Preencha o/a/os/as cidade')
                                            setMostrarErro(true)
                                        }
                                        if(formik.values.neighborhood == ''){
                                            setErro('Selecione/Preencha o/a/os/as bairro')
                                            setMostrarErro(true)
                                        }
                                        if(formik.values.date == ''){
                                            setErro('Selecione/Preencha o/a/os/as data')
                                            setMostrarErro(true)
                                        }
                                        else{

                                            let obj = {
                                                "address": formik.values.address ? formik.values.address : "" ,
                                                "country": formik.values.country ? formik.values.country : "" ,
                                                "state": formik.values.state ? formik.values.state : "" ,
                                                "city": formik.values.city ? formik.values.city : "" ,
                                                "neighborhood": formik.values.neighborhood ? formik.values.neighborhood : "" ,
                                                "latitude": formik.values.latitude ? formik.values.latitude : "" ,
                                                "longitude": formik.values.longitude ? formik.values.longitude : "" ,
                                                "date": formik.values.date ? formik.values.date : "" ,
                                                "agent_presence": formik.values.agent_presence ? formik.values.agent_presence : true ,
                                                "police_action": formik.values.police_action ? formik.values.police_action : true,
                                                "number_civilians_dead": formik.values.number_civilians_dead ? formik.values.number_civilians_dead : 0 ,
                                                "number_civilians_wounded": formik.values.number_civilians_wounded ? formik.values.number_civilians_wounded : 0 ,
                                                "number_agent_dead": formik.values.number_agent_dead ? formik.values.number_agent_dead : 0 ,
                                                "number_agent_wounded": formik.values.number_agent_wounded ? formik.values.number_agent_wounded : 0 ,
                                                "description": formik.values.description ? formik.values.description : "" ,
                                                "source": formik.values.source ? formik.values.source : "" ,
                                                "related_record": formik.values.related_record ? formik.values.related_record : "" ,
                                                "region": formik.values.region ? formik.values.region : "" ,
                                                "main_reason": formik.values.main_reason ? formik.values.main_reason : "" ,
                                                "complementary_reasons": formik.values.complementary_reasons ? formik.values.complementary_reasons : "" ,
                                                "massacre": formik.values.massacre ? formik.values.massacre : true ,
                                                "police_unit": formik.values.police_unit ? formik.values.police_unit : "" ,
                                                "interrupted_transport": formik.values.interrupted_transport ? formik.values.interrupted_transport : true ,
                                                "related_news": formik.values.related_news ? formik.values.related_news : "" ,
                                                "clippings": formik.values.clippings ? formik.values.clippings : "" ,
                                                "observations": formik.values.observations ? formik.values.observations : "" ,
                                                "transports": formik.values.transports ? formik.values.transports : "" ,
                                                "date_interruption": formik.values.date_interruption ? formik.values.date_interruption : "" ,
                                                "release_date": formik.values.release_date ? formik.values.release_date : "" ,
                                                "transport_description": formik.values.transport_description ? formik.values.transport_description : "" ,
                                                "status": formik.values.status ? formik.values.status : "" 
                                                
                                            }

                                            // console.log(formik.values)
                                            console.log(obj, 'obj')
                                            createOccurrences(token, obj)
                                                .then((resp)=>{ 
                                                    setIdOcorrencia(resp.id)
                                                    setFeridosCivisOcorrencia(resp.number_civilians_wounded)
                                                    setMortosCivisOcorrencia(resp.number_civilians_dead)
                                                    setFeridosAgenteOcorrencia(resp.number_agent_wounded)
                                                    setDescricaoOcorrencia(resp.description)
                                                    setMortosAgenteOcorrencia(resp.number_agent_dead)
                                                    setDataOcorrencia(resp.date)
                                                    getStateByID(resp.state)
                                                    getCityByID(resp.city)
                                                    console.log(resp, 'executo')

                                                    setMostrarAcerto(true)
                                                })
                                                .catch((error)=>{
                                                    console.log('###############################')
                                                    console.error(error, 'erro ocorrencia')
                                                    console.log('###############################')
                                                    setMostrarErro(true)
                                                })
                                        }
                                    }}>
                                        Salvar ocorrencia
                                    </Button>
                                </Col>
                            </Row>
                        </Row>
                    </Modal.Header>
                    <Modal.Body
                        style={{
                            background: '#ccc'
                        }}
                    >

                <Modal
                        show={mostrarErro}
                        onHide={() => setMostrarErro(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Ocorreu um erro
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Verifique se todos os dados foram inseridos corretamente!</p>
                            <p>{erro}</p>
                        </Modal.Body>
                    </Modal>

                    <Modal
                        show={mostrarAcerto}
                        onHide={() => setMostrarAcerto(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            A ocorrência foi salvar com sucesso
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Ocorrência salva!</p>
                        </Modal.Body>
                    </Modal>


                    <Form onSubmit={formik.handleSubmit}>
                            <Card body>
                                <Row>
                                    <Col>
                                        <h4
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '18px',
                                                lineHeight: '22px'
                                            }}
                                        >
                                            Detalhes da ocorrência
                                        </h4>
                                        <p
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 'normal',
                                                fontSize: '14px',
                                                lineHeight: '21px'
                                            }}
                                        >
                                            Informações básicas e administrativas sobre os tiroteios/disparos de arma de fogo.
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Local</Form.Label>
                                            <Form.Control
                                                value={formik.values.address}
                                                onChange={formik.handleChange}
                                                id="address"
                                                type="text"
                                                placeholder="Digite o endereço da ocorrência"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>País</Form.Label>
                                            <Form.Control
                                                value={formik.values.country}
                                                onChange={formik.handleChange}
                                                id="country"
                                                type="text"
                                                placeholder="Digite o país  da ocorrência"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Estado</Form.Label>

                                            <Form.Select
                                                value={formik.values.region}
                                                onChange={(e)=>{
                                                    formik.setFieldValue(
                                                        "region",
                                                        e.target.value
                                                    )
                                                    let estado  = e.currentTarget.selectedOptions[0].label
                                                   
                                                    states.forEach((chave: any) => {
                                                        if(chave.name === estado){
                                                            console.log(chave, 'estado')
                                                            setEstadoNome(chave.name)
                                                            formik.setFieldValue(
                                                                "state",
                                                                chave.id
                                                            )
                                                            
                                                        }
                                                    })
                                                            
                                                    
                                                }}
                                            >
                                                {regions.map((chave: any, valor: any) => {
                                                    if(chave.enabled == true){
                                                        return <option  value={chave.id}> {chave.state} </option>
                                                    }
                                                })}
                                            </Form.Select>

                                                

                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Cidade</Form.Label>
                                            
                                            <InputCity 
                                                options={cities}
                                                value={formik.values.city}
                                                onChange={(e)=>{
                                                    formik.setFieldValue(
                                                        'city',
                                                        e
                                                    )
                                                }}   
                                                estado={estadoNome}                                         
                                            />
                                           {/* {formik.values.city} */}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Bairro</Form.Label>
                                            <InputNeighborhood
                                                options={neighborhoods}
                                                value={formik.values.neighborhood}
                                                onChange={(e)=>{
                                                    formik.setFieldValue(
                                                        'neighborhood',
                                                        e
                                                    )
                                                }}
                                                estado={estadoNome}
                                            />     
                                            {/*  {formik.values.neighborhood} */} 

                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Data e Hora da ocorrência</Form.Label>
                                            <Form.Control
                                                type="datetime-local"
                                                placeholder=""
                                                id="date"
                                                value={formik.values.date}
                                                onChange={formik.handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Houve ação/operação policial</Form.Label>
                                            <RadioGroup
                                                value={formik.values.police_action}
                                                onChange={(e: boolean)=>{
                                                    formik.setFieldValue('police_action', e)
                                                    formik.setFieldValue('agent_presence', e)
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Fonte</Form.Label>
                                            <Form.Select
                                                value={formik.values.source}
                                                id="source"
                                                onChange={formik.handleChange}
                                            >
                                                {sources.map((chave: any, valor: any) => {
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Presença de agentes</Form.Label>
                                                <RadioGroup
                                                    value={formik.values.agent_presence}
                                                    onChange={(e: boolean)=>{
                                                        formik.setFieldValue('police_action', e)
                                                        formik.setFieldValue('agent_presence', e)
                                                    }}
                                                />

                                                {/* <p>{formik.values.police_action ? 'Sim Ação policia' : 'Não Ação policia'}</p>
                                                <p>{formik.values.agent_presence ? 'Sim agente presente' : 'Não agente presente'}</p> */}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={3}  
                                                id="description"
                                                value={formik.values.description} 
                                                onChange={formik.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Registro relacionado</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={3}  
                                                id="related_record"
                                                value={formik.values.related_record}
                                                onChange={formik.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card>

                            <br/>

                            <Card body>
                                <Row>
                                    <Col>
                                        <h4
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '18px',
                                                lineHeight: '22px'
                                            }}
                                        >
                                            Informações de contexto
                                        </h4>
                                        <p
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 'normal',
                                                fontSize: '14px',
                                                lineHeight: '21px'
                                            }}
                                        >
                                            Complementação com informações de contexto dos tiroteios/disparos (apenas administradores).
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Motivo principal</Form.Label>
                                            <Form.Select
                                                value={formik.values.main_reason}
                                                onChange={(e)=>{
                                                    formik.setFieldValue(
                                                        'main_reason', 
                                                        e.target.value
                                                    )
                                                }}
                                            >
                                                {reasons.map((chave: any, valor: any) => {
                                                    return <option value={chave.id}>{chave.name}</option>
                                                })}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Motivo complementar</Form.Label>


                                            <Select
                                                options={
                                                    reasons.map((chave: any, valor: any)=>{
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
                                                        aux.push(chave.value)
                                                        aux2.push({'id': chave.value })
                                                    })
                                                    setListaMotivosComplementares([ ...aux ])
                                                    formik.setFieldValue(
                                                        'complementary_reasons',
                                                        [...aux2]    
                                                    )
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Chacina</Form.Label>
                                            <RadioGroup
                                                value={formik.values.massacre}
                                                onChange={(e: boolean)=>{
                                                    formik.setFieldValue('massacre', e)
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Unidades de polícia presentes</Form.Label>
                                            <Form.Control  
                                                id="police_unit"
                                                value={formik.values.police_unit}
                                                onChange={formik.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Links</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={3}
                                                id="related_news"
                                                value={formik.values.related_news}
                                                onChange={formik.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Outros recortes</Form.Label>

                                            <Select
                                                options={
                                                    clippings.map((chave: any, valor: any)=>{
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
                                                        aux.push(chave.value)
                                                        aux2.push({ 'id': chave.value })
                                                    })
                                                    setListaClippings([ ...aux ])
                                                    formik.setFieldValue(
                                                        'clippings',
                                                        [...aux2]
                                                    )
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Observações</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={3}  
                                                id="observations"
                                                value={formik.values.observations}
                                                onChange={formik.handleChange}    
                                            
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Transporte interrompido</Form.Label>
                                            <RadioGroup
                                                value={formik.values.interrupted_transport}
                                                onChange={(e: boolean)=>{
                                                    formik.setFieldValue('interrupted_transport', e)
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Transportes</Form.Label>

                                            <Select
                                                options={
                                                    transports.map((chave: any, valor: any)=>{
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
                                                        aux.push(chave.value)
                                                        aux2.push({'id': chave.value})
                                                    })
                                                    setListaTransports([ ...aux ])
                                                    formik.setFieldValue(
                                                        'transports',
                                                        [...aux2]
                                                    )
                                                }}
                                            />

                                        </Form.Group>

                                    </Col>
                                    <Col>
                                            <Form.Group>
                                                <Form.Label>Data e Hora da interrupção</Form.Label>
                                                <Form.Control  
                                                    type="datetime-local" 
                                                    placeholder=""
                                                    id="date_interruption"
                                                    value={formik.values.date_interruption}
                                                    onChange={(e)=>{
                                                        formik.setFieldValue(
                                                            'date_interruption',
                                                            e.target.value
                                                        )
                                                    }}
                                                />
                                            </Form.Group>
                                    </Col>
                                    <Col>
                                            <Form.Group>
                                                <Form.Label>Data e Hora da liberação</Form.Label>
                                                <Form.Control  
                                                    type="datetime-local" 
                                                    placeholder=""
                                                    id="release_date"
                                                    value={formik.values.release_date}
                                                    onChange={(e)=>{
                                                        formik.setFieldValue(
                                                            'release_date',
                                                            e.target.value
                                                        )
                                                    }}
                                                />
                                            </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={3}
                                                id="transport_description"  
                                                value={formik.values.transport_description}
                                                onChange={(e)=>{
                                                    formik.setFieldValue(
                                                        'transport_description',
                                                        e.target.value
                                                    )
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>
                            </Card>

                            <br />
                            <Button  type="submit" variant="warning" ref={referencia} style={{display: 'none'}}>
                                Salvar Ocorrência
                            </Button>

                            
                    
                    </Form>

                            <br />
                            <br />

                            <Card body>
                                <Row>
                                    <Col>
                                        <h4
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '18px',
                                                lineHeight: '22px'
                                            }}
                                        >
                                             Vitimas
                                        </h4>
                                        <p
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 'normal',
                                                fontSize: '14px',
                                                lineHeight: '21px'
                                            }}
                                        >
                                            Complementação com informações sobre pessoas baleadas em cada registro (apenas administradores).
                                        </p>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col>
                                        <OverlayTrigger overlay={
                                            idOcorrencia == '' ? 
                                                <Tooltip id="tooltip-disabled">
                                                    Clique em salvar a ocorrência primeiramente
                                                </Tooltip>
                                            : 
                                             <></>                                            
                                        }>
                                            
                                                <span className="d-inline-block">
                                                    <Form.Group>
                                                        <Form.Label>Total de vitimas</Form.Label>
                                                        <Form.Control 
                                                            type="number" 
                                                            min={0} 
                                                            value={totalVitimas} 
                                                            onChange={(e)=>{setTotalVitimas(e.target.value);addVictims()}} 
                                                            disabled={idOcorrencia == '' ? true : false}
                                                        />
                                                    </Form.Group>
                                                </span>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Civis mortos</Form.Label>
                                            <Form.Control  disabled={true} value={String(mortosCivisOcorrencia)} type="number" min={0} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Civis feridos</Form.Label>
                                            <Form.Control  disabled={true} value={String(feridosCivisOcorrencia)}  type="number" min={0} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Agentes mortos</Form.Label>
                                            <Form.Control  disabled={true} value={String(mortosAgenteOcorrencia)}  type="number" min={0} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Agentes feridos</Form.Label>
                                            <Form.Control disabled={true} value={String(feridosAgenteOcorrencia)} type="number" min={0} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {listaVitimas.map((chave: any)=>{
                                    return chave
                                })}
                            </Card>

                        <br/>

                        <Card body>
                            <Row>
                                    <Col>
                                        <h4
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '18px',
                                                lineHeight: '22px'
                                            }}
                                        >
                                             Vitimas animais
                                        </h4>
                                        <p
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 'normal',
                                                fontSize: '14px',
                                                lineHeight: '21px'
                                            }}
                                        >
                                            Complementação caso haja animais baleados (apenas administradores)
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <OverlayTrigger overlay={
                                            idOcorrencia == '' ? 
                                                <Tooltip id="tooltip-disabled">
                                                    Clique em salvar a ocorrência primeiramente
                                                </Tooltip>
                                            : 
                                             <></>                                            
                                        }>
                                            
                                            <Form.Group>
                                                <Form.Label>Total de vitimas animais</Form.Label>
                                                <Form.Control 
                                                    type="number" 
                                                    min={0}
                                                    value={totalAnimais} 
                                                    onChange={(e)=>{setTotalAnimais(e.target.value);addAnimais()}}
                                                    disabled={idOcorrencia == '' ? true : false}
                                                />
                                            </Form.Group>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Animais mortos</Form.Label>
                                            <Form.Control  disabled={true} value={String(mortosCivisOcorrencia)} type="number" min={0} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Animais feridos</Form.Label>
                                            <Form.Control  disabled={true} value={String(feridosCivisOcorrencia)}  type="number" min={0} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {listaAnimais.map((chave: any)=>{
                                    return chave
                                })}
                            </Card>


                    </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalCriar
