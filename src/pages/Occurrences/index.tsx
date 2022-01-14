import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, InputGroup, Nav, Navbar, Row } from 'react-bootstrap'
import { NavbarHeader, NavbarLeft } from '../../components'
import { ModalCriar } from './Modals/index'
import agentImg from './agent.svg'
import civillianImg from './civillian.svg'
import alertImg from './alert.svg'
import localImg from './local.svg'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_OCCURRENCES, ADD_STATES, ADD_REGIONS,ADD_CITIES, RootState, ADD_SOURCES, ADD_REASONS, ADD_CLIPPINGS, ADD_TRANSPORTS, ADD_NEIGHBORHOODS } from '../../store'
import { getOccurrences, getStates, getRegions, getCities, getState, getByState, getSourcers, getReasons, getClippings, getTransports, getNeighborhoods } from '../../services'
import { Form } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';

const Occurrences: React.FC = ({}) => {
    const { neighborhoods, user, token, occurrences, regions, states, cities, sources , reasons, clippings, transports } = useSelector((state: RootState)=>state.clickState)

    const [isModalCriar, setModalCriar] = useState(false)

       
    const [ local, setLocal ] = useState('')
    const [ rb1, setRb1 ] = useState(true)
    const [ rb2, setRb2 ] = useState(false)
    const [ rb3, setRb3 ] = useState(false)
    const [ rb4, setRb4 ] = useState(false)
    const [ regiaoId, setRegiaoId ] = useState('')
    const [ stateId, setStateId ] = useState('')
    const [ cidade, setCidade ] = useState<null | boolean>(null)
    const [ bairro, setBairro ] = useState<null | boolean>(null)
    const [ cidadeId, setCidadeId ] = useState('')
    const [ bairroId, setBairroId ] = useState('')
    const [ pais, setPais ] = useState('')
    const [ dataOcorrencia, setDataOcorrencia ] = useState('')
    const [ descricao, setDescricao ] = useState('')

    const [ idOcorrencia, setIdOcorrencia ] = useState('')
    const [ listaTransports, setListaTransports ] = useState<any[]>([])
    const [ listaClippings, setListaClippings ] = useState<any[]>([])
    const [ feridosCivisOcorrencia, setFeridosCivisOcorrencia ] = useState<number | null>(null)
    const [ mortosCivisOcorrencia, setMortosCivisOcorrencia ] = useState<number | null>(null)
    const [ feridosAgenteOcorrencia, setFeridosAgenteOcorrencia ] = useState<number | null>(null)
    const [ descricaoOcorrencia, setDescricaoOcorrencia ] = useState<number | null>(null)    
    const [ mortosAgenteOcorrencia, setMortosAgenteOcorrencia ] = useState<string | null>(null)
    const [ tirosOcorrencia, setTirosOcorrencia ] = useState<number | null>(null)
    const [ local1Ocorrencia, setLocal1Ocorrencia ] = useState<string | null>(null)
    const [ local2Ocorrencia, setLocal2Ocorrencia ] = useState<string | null>(null)
    const [ totalVitimas, setTotalVitimas ] = useState<string | number>(0)
    const [ totalAnimais, setTotalAnimais ] = useState<string | number>(0)


    const [opcoes, setOpcoes] = useState([{}])
    const [estado, setEstado] = useState('')
    const [regiao, setRegiao] = useState('')

    const dispatch = useDispatch()

    useEffect(()=> {
        getOccurrences(token).then((resp)=> dispatch({type: ADD_OCCURRENCES, occurrences: resp}))
        getStates(token).then((resp)=> dispatch({type: ADD_STATES, states: resp}))
        getRegions(token).then((resp)=> dispatch({type: ADD_REGIONS, regions: resp}))
        getCities(token).then((resp)=> dispatch({type: ADD_CITIES, cities: resp}))
        getSourcers(token).then((resp)=> dispatch({type: ADD_SOURCES, sources: resp}))
        getReasons(token).then((resp)=> dispatch({type: ADD_REASONS, reasons: resp}))
        getClippings(token).then((resp)=> dispatch({type: ADD_CLIPPINGS, clippings: resp}))
        getTransports(token).then((resp)=> dispatch({type: ADD_TRANSPORTS, transports: resp}))
        getNeighborhoods(token).then((resp)=> dispatch({type: ADD_NEIGHBORHOODS, neighborhoods: resp}))

        getState()
            .then((resp)=>{
                resp.data.forEach((chave: any) => {
                    if(chave.nome === estado){
                        getByState(chave.sigla)
                            .then((cidades)=>{
                                setOpcoes(cidades)
                            })
                    }
                })
            })

        console.log(occurrences, 'ocorrencias')
    }, [estado])

    

    function convertData(data: any){
        if(data != ''){
            let dt =  data.split('-')
            let temp = dt[2].split('T')
            let temp1 = temp[1].split(':')
            let findt = temp[0] + '/' + dt[1] + '/' + dt[0] + ' ' + temp1[0] + ':' + temp1[1]
            // console.log(findt, temp, dt)
            return findt
        }
        else {
            return data
        }
    }

    const [isTela, setTela] = useState(true)
    const [idOcorrenciaUnica, setIdOcorrenciaUnica ] = useState(occurrences[0].id)

    return (
        <>
            <Row>
                <Col >
                    <Container fluid>
                        <Row>
                            <Col>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link onClick={()=>setTela(true)}>
                                            Aprovar ocorrências
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={()=>setTela(false)}>
                                            Todas as ocorrências
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col xs={3}>
                                <Nav>
                                    <Nav.Item>
                                        <Button variant="warning" onClick={()=>setModalCriar(true)}>
                                            Registrar ocorrências
                                        </Button>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    
                        <Row>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>
                                        <Search />
                                    </InputGroup.Text>
                                    <Form.Control placeholder="Pesquisar" />
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Control 
                                    type="datetime-local"
                                />
                            </Col>
                            <Col>
                                <Form.Select
                                    value={regiao}
                                    onChange={(e)=>{
                                        setRegiao(e.target.value)
                                        setEstado(e.currentTarget.selectedOptions[0].label)
                                    }}
                                >
                                    {regions.map((chave) => {
                                        if(chave.enabled){
                                            return <option value={chave.state}>{chave.state}</option>
                                        }
                                    })}
                                </Form.Select>
                            </Col>
                            <Col>
                                    <Form.Select>
                                        {opcoes.map((chave: any, valor: any)=> {
                                            return <option value={chave.nome}>{chave.nome}</option>
                                        })}
                                    </Form.Select>
                            </Col>
                        </Row>

                        {isTela == false ?
                            occurrences.map((chave, valor)=>{
                                return  <Row>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <div>
                                                            Registrado por
                                                                <b> {chave.user?.name} </b>
                                                        </div>
                                                        <div>
                                                            
                                                            <img src={alertImg} />  
                                                            <div>{convertData(chave.date)}</div>

                                                        </div> 
                                                        <div>

                                                            <div>
                                                                {`${chave.address}, ${chave.city?.name}`}                                                                
                                                            </div>
                                                            <div>
                                                                {`${chave.state?.name}`}
                                                            </div>
                                                                                                                        
                                                        </div>
                                                    </Col>
                                                            <Col>
                                                                <div>{`# ${chave.id}`}</div>
                                                                <div>Civis</div>
                                                                <div>
                                                                    <Image src={civillianImg} />

                                                                    <div>
                                                                        <span>
                                                                            {chave.number_civilians_wounded} feridos 
                                                                        </span>
                                                                        {'/'}
                                                                        <span>
                                                                            {chave.number_civilians_dead} mortos
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div>Agentes de segurança</div>
                                                                <div>
                                                                    <Image src={agentImg} />

                                                                    <div>
                                                                        <span>
                                                                            {chave.number_agent_wounded} feridos 
                                                                        </span>
                                                                        {'/'}
                                                                        <span>
                                                                            {chave.number_agent_dead} mortos
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col>
                                                                <div>{`Cadastrado em ${convertData(chave.date)}`}</div>
                                                            
                                                                <div>
                                                                    Descrição da ocorrência
                                                                </div>
                                                                <div>
                                                                    {chave.description}
                                                                </div>
                                                                <div>
                                                                    <Button variant="danger">
                                                                        Reprovar
                                                                    </Button>
                                                                    <Button variant="warning">
                                                                        Aprovar
                                                                    </Button>
                                                                </div>
                                                            </Col>    
                                                </Row>
                                            </Col>
                                            <Col>
                                            
                                            </Col>
                                        </Row>
                                })
                            :
                                occurrences.map((chave, valor)=>{
                                    if(chave.id == idOcorrenciaUnica){
                                        return  <Row>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <div>
                                                                    Registrado por
                                                                        <b> {chave.user?.name} </b>
                                                                </div>
                                                                <div>
                                                                    
                                                                    <img src={alertImg} />  
                                                                    <div>{convertData(chave.date)}</div>

                                                                </div> 
                                                                <div>

                                                                    <div>
                                                                        {`${chave.address}, ${chave.city?.name}`}                                                                
                                                                    </div>
                                                                    <div>
                                                                        {`${chave.state?.name}`}
                                                                    </div>
                                                                                                                                
                                                                </div>
                                                            </Col>
                                                                    <Col>
                                                                        <div>{`# ${chave.id}`}</div>
                                                                        <div>Civis</div>
                                                                        <div>
                                                                            <Image src={civillianImg} />

                                                                            <div>
                                                                                <span>
                                                                                    {chave.number_civilians_wounded} feridos 
                                                                                </span>
                                                                                {'/'}
                                                                                <span>
                                                                                    {chave.number_civilians_dead} mortos
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div>Agentes de segurança</div>
                                                                        <div>
                                                                            <Image src={agentImg} />

                                                                            <div>
                                                                                <span>
                                                                                    {chave.number_agent_wounded} feridos 
                                                                                </span>
                                                                                {'/'}
                                                                                <span>
                                                                                    {chave.number_agent_dead} mortos
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col>
                                                                        <div>{`Cadastrado em ${convertData(chave.date)}`}</div>
                                                                    
                                                                        <div>
                                                                            Descrição da ocorrência
                                                                        </div>
                                                                        <div>
                                                                            {chave.description}
                                                                        </div>
                                                                        <div>
                                                                            <Button variant="danger">
                                                                                Reprovar
                                                                            </Button>
                                                                            <Button variant="warning">
                                                                                Aprovar
                                                                            </Button>
                                                                        </div>
                                                                    </Col>    
                                                        </Row>
                                                    </Col>
                                                    <Col>
                                                    
                                                    </Col>
                                                </Row>
                                        }
                                    })
                            }   



                        <ModalCriar
                            isModal={isModalCriar}
                            onHide={()=>setModalCriar(false)}
                        />
                    </Container>
                </Col>
            </Row>
        </>
    )
} 

export default Occurrences