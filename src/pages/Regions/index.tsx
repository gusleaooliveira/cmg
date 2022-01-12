import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ModalCriar from './Modals/Create'
import ModalApagar from './Modals/Delete'
import ModalEditar from './Modals/Edit'
import ModalAlterar from './Modals/Alterar'
import { getRegions } from '../../services'
import { ADD_REGIONS, RootState } from '../../store'



const Regions: React.FC = ({ children }) => {
    const { token, regions, user } = useSelector((state: RootState)=>state.clickState)
    const dispatch = useDispatch()

    const [isModalCriar, setIsModalCriar] = useState(false)
    const [isModalApagar, setIsModalApagar] = useState(false)
    const [isModalEditar, setIsModalEditar] = useState(false)
    const [isModalAlterar, setIsModalAlterar] = useState(false)

    const [ checkedAlterar, setCheckedAlterar ] = useState(false)
    const [ idAlterar, setIdAlterar ] = useState('')

    useEffect(()=>{
        getRegions(token).then((resp)=>{ dispatch({type: ADD_REGIONS, regions: resp }) })        
    }, [])

    return (
        <>
            <Row>
                <Col >

                    <Container fluid>

                        {user.email === "gustavo@cria.digital" &&
                            <Row>
                                <Col xs={4}>
                                    <Button 
                                        variant="warning"
                                        onClick={()=>{
                                            setIsModalCriar(true)
                                        }}>
                                        Cadastrar
                                    </Button>
                                </Col>
                                <Col xs={4}>
                                    <Button 
                                        variant="warning"
                                        onClick={()=>{
                                            setIsModalApagar(true)
                                        }}
                                    >
                                        Excluir
                                    </Button>
                                </Col>
                                <Col xs={4}>
                                    <Button
                                        variant="warning"
                                        onClick={()=>{
                                            setIsModalEditar(true)
                                        }}
                                    >
                                        Editar
                                    </Button>
                                </Col>
                            </Row>
                        }
                        <br/>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th> REGIÂO </th>
                                    <th> ESTADO </th>
                                    <th> HABILITADO </th>
                                </tr>
                            </thead>
                            <tbody>
                                {regions.map((chave, valor)=> {
                                    return  <tr>
                                                <td>{chave.region}</td>
                                                <td>{chave.state}</td>
                                                <td>
                                                    <Form.Check
                                                        type="switch"
                                                        label={chave.enabled === true ? 'Sim': 'Não'}
                                                        checked={chave.enabled}
                                                        onClick={()=>{
                                                            setIsModalAlterar(true)
                                                            setCheckedAlterar(chave.enabled)
                                                            setIdAlterar(chave.id)
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                })}
                            </tbody>
                        </Table>



                        <ModalCriar 
                            isModal={isModalCriar}
                            onHide={()=>setIsModalCriar(false)}
                        />

                        <ModalApagar
                            isModal={isModalApagar}
                            onHide={()=>setIsModalApagar(false)}
                        />

                        <ModalEditar
                            isModal={isModalEditar}
                            onHide={()=>setIsModalEditar(false)}
                        />

                        <ModalAlterar    
                            isModal={isModalAlterar}
                            onHide={()=>setIsModalAlterar(false)}
                            checked={checkedAlterar}
                            id={idAlterar}
                        />
                    </Container>                    
                </Col>
            </Row>
        </>
    )
} 

export default Regions