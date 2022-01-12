import React, {  useEffect, useState } from 'react'
import { Button, Form, Modal, Offcanvas } from "react-bootstrap"
import { InterfaceProps } from './index.types'
import { useForm } from 'react-hook-form'
import InputMask from "react-input-mask"
import { api, getStates } from "../../../../services"
import { useDispatch, useSelector } from "react-redux"
import { ADD_STATES, RootState } from '../../../../store'

const ModalCriar: React.FC<InterfaceProps> = ({ isModal, onHide }) => {
    const [ isModalErrorEmail, setModalErrorEmail ] = useState(false)
    const [ isModalSucessoEmail, setModalSucessoEmail ] = useState(false)
    const dispatch = useDispatch()
    const { token, regions } = useSelector((state: RootState) => state.clickState)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            'role': 'Administrador',
            'name': '',
            'email': '',
            'phone_number': '',
            'password': '',
            'active': true,
            'state': ''
        }
    })

    const onSubmit = (dados: any) => {  
        console.log(dados)
        api
            .post('/signup', dados)
            .then((resposta) => {
                onHide()

                setModalSucessoEmail(true)
            })
            .catch((erro) => { 
                
                console.warn('(Usuário) Erro:', erro.response.data) 
                
                erro.response.data.message.forEach((chave : any , valor : any) => {
                    if(chave === 'conta de e-mail já cadastrada'){
                        onHide()
                        setModalErrorEmail(true)
                    }
                })
            })
    }

    useEffect(()=>{
        let resp = getStates(token)
        resp.then((resp) =>  {
            dispatch({type: ADD_STATES, states: resp})
        })

    }, [])

    return (
        <>
            <Offcanvas
                show={isModal}
                onHide={onHide}
                placement="end"
            >
                <Offcanvas.Header closeButton> Adicionar moderador </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Tipo de acesso</Form.Label>
                            <Form.Select {...register('role', {required: true})}>
                                <option value="Administrador">Administrador</option>
                                <option value="Analista">Analista</option>
                                <option value="Coordenador App">Coordenador App</option>
                                <option value="Coordenador do site">Coordenador do site</option>
                            </Form.Select>
                            {errors.role && <p style={{color: 'red'}}> Selecione um tipo de acesso </p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control  
                                type="text" 
                                placeholder="Digite o nome do moderador"
                                {...register('name', {required: true})}
                            />
                            {errors.name && <p style={{color: 'red'}}> Digite o nome do moderador</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control  
                                type="text" 
                                placeholder="Digite o e-mail do moderador"
                                {...register('email', {required: true})}
                            />
                            {errors.email && <p style={{color: 'red'}}> Digite o e-mail do moderador</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telefone</Form.Label>
                            <InputMask
                                style={{width: '100%'}}
                                mask={"(99) 99999-9999"} 
                                placeholder="Digite o telefone do moderador"
                                {...register('phone_number', {required: true, pattern: /\(\d{2}\)\s\d{5}\-\d{4}/i })}
                            />
                            {errors.phone_number && <p style={{color: 'red'}}> Digite o telefone do moderador</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Select {...register('state')}>
                                {regions.map((chave:any, valor:any) => {
                                    if(chave.enabled === true){
                                        console.warn(chave.state)
                                        return <option value={chave.state}>{chave.state}</option>
                                    }
                                    else {
                                        return <></>
                                    }
                                })}
                            </Form.Select>
                            {errors.state && <p style={{color: 'red'}}>Selecione um estado para o moderador</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label></Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Senha para acesso</Form.Label>
                            <Form.Control  
                                type="password" 
                                placeholder="Digite a senha do moderador"
                            />    
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirmar as senhas</Form.Label>
                            <Form.Control  
                                type="password"
                                placeholder="Redigite a senha do moderador"
                                {...register('password', {required: true})}
                            />
                            {errors.password && <p style={{color: 'red'}}> Redigite a senha do moderador</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <div style={{
                                    marginRight: '5px'
                                }}>
                                    Não
                                </div>
                                <Form.Check  
                                    type="switch"
                                    label="Sim"
                                    {...register('active', {required: true})}
                                />
                            </div>
                            {errors.active && <p style={{color: 'red'}}> Selecione o status do moderador</p>}
                        </Form.Group>
                        
                        <Button type="submit">
                            Finalizar
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>

            <Modal
                show={isModalErrorEmail}
                onHide={()=>{setModalErrorEmail(false)}}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"            
            >   
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <h1>E-mail já cadastrado!!!!</h1>
                    <p>Conta de e-mail já cadastrada!!!</p>
                </Modal.Body>
            </Modal>

            <Modal
                show={isModalSucessoEmail}
                onHide={()=>{setModalSucessoEmail(false)}}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"            
            >   
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <h1>Moderador adicionado</h1>
                    <p>O moderador foi adicionado com sucesso!</p>
                </Modal.Body>
            </Modal>
            
        </>
        
    )
}


export default ModalCriar