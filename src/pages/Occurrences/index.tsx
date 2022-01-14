import React, { useEffect, useState } from 'react';
import {
    Header,
    Nav,
    NavBtn,
    ShowOccurence,
    Content,
    List
} from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import { 
    RootState, 
    ADD_OCCURRENCES, 
    ADD_STATES, 
    ADD_REGIONS,
    ADD_CITIES, 
    ADD_SOURCES, 
    ADD_REASONS, 
    ADD_CLIPPINGS, 
    ADD_TRANSPORTS, 
    ADD_NEIGHBORHOODS, 
    ADD_QUALIFICATIONS,
    ADD_AGE_GROUP,
    ADD_GENRES,
    ADD_CIRCUMSTANCES
} from '../../store';
import { 
    getOccurrences, 
    getStates, 
    getRegions, 
    getCities, 
    getState, 
    getByState, 
    getSourcers, 
    getReasons, 
    getClippings, 
    getTransports, 
    getNeighborhoods, 
    deleteOccurrences, 
    getQualifications,
    getAgeGroup,
    getGenres,
    getCircumstances
} from '../../services';
import { 
    CardOccurrence, 
    DataInput 
} from '../../components';
import { ModalCriar } from './Modals/index';
import { Form } from 'react-bootstrap';

const Occurrences: React.FC = ({}) => {
    const dispatch = useDispatch();
    const { neighborhoods, user, token, occurrences, regions, states, cities, sources , reasons, clippings, transports } = useSelector((state: RootState)=>state.clickState)

    const [isModalCriar, setModalCriar] = useState(false);
    const [opcoes, setOpcoes] = useState([{}]);
    const [estado, setEstado] = useState('');
    const [regiao, setRegiao] = useState('');
    const [isTela, setTela] = useState(true);


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
        getQualifications(token).then((resp)=> dispatch({type: ADD_QUALIFICATIONS, qualifications: resp}))
        getAgeGroup(token).then((resp) => dispatch({type: ADD_AGE_GROUP, age_group: resp}))
        getGenres(token).then((resp)=> dispatch({type: ADD_GENRES, genres: resp}))
        getCircumstances(token).then((resp)=> dispatch({type: ADD_CIRCUMSTANCES, circumstances: resp }))

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
    }, [estado]);


    useEffect(()=>{
        getOccurrences(token)
        .then((resp)=>{
            dispatch({
                type: ADD_OCCURRENCES,
                occurrences: resp
            })
        })
    }, []);
    

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
    };

    return (
        <>
        <Header>
            <Nav>
                <NavBtn onClick={()=>setTela(true)}>
                    Aprovar ocorrências
                </NavBtn>
                <NavBtn onClick={()=>setTela(false)}>
                    Todas as ocorrências
                </NavBtn>
            </Nav>
            <ShowOccurence onClick={()=>setModalCriar(true)}>
                Registrar ocorrências
            </ShowOccurence>
        </Header>
        <Content>
            <DataInput id='data' htmlFor='data' name='data'/>     
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
            <Form.Select>
                {opcoes.map((chave: any, valor: any)=> {
                    return <option value={chave.nome}>{chave.nome}</option>
                })}
            </Form.Select>
        </Content>
        <List>
            {isTela == false ?
                occurrences.map( (id, value) => {
                    return (
                        <CardOccurrence 
                            id={value}
                            status={id.status}
                            user={id.user.name}
                            date={convertData(id.date)}
                            createdAt={convertData(id.createdAt)}
                            address={id.address}
                            civiliansWounded={id.number_civilians_wounded}
                            civiliansDead={id.number_civilians_dead}
                            agentDead={id.number_agent_dead}
                            agentWounded={id.number_agent_wounded}
                            description={id.description}
                            aprove={() => {alert('asda')}}
                            reprove={() => {
                                deleteOccurrences(token, id.id)
                                .then((resp)=>{
                                    console.log('apagado!!!!')
                                    getOccurrences(token)
                                        .then((resp)=>{
                                            dispatch({
                                                type: ADD_OCCURRENCES,
                                                occurrences: resp
                                            })
                                        })
                                })}
                            }
                        />
                    )
                })
                :
                occurrences.map(id => {
                    return(
                        <p>Mapa</p>
                    )
                })
            }
        </List>

            <ModalCriar
                isModal={isModalCriar}
                onHide={()=>setModalCriar(false)}
            />
        </>
    )
} 

export default Occurrences