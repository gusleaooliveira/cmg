import React, { useState } from 'react'
import {
    Container,
    Card,
    Button
} from './index.styled'
import { Form, Modal} from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { api } from '../../services'
import { ADD_LOGIN_USER, ADD_TOKEN } from '../../store'


const Login: React.FC = ({ children }) => {
    const { register, handleSubmit, formState: {errors } } = useForm({
        defaultValues: {
            'email': '',
            'password': ''
        }
    })
    const dispatch = useDispatch()
    const [ isModalErrorEmail, setModalErrorEmail ] = useState(false)
 
    const onSubmit = (dados: any) => {
        api
            .post('/authorize', dados)
            .then((resposta) => {
                dispatch({type: ADD_LOGIN_USER, user: resposta.data.user})
                dispatch({type: ADD_TOKEN, token: resposta.data.token})
            })
            .catch((erro) => {
                setModalErrorEmail(true)
            })
    }

    return (
        <Container>
        <Card>
            <br/>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite o email do moderador" {...register('email', {required: true})} />
                    {errors.email && <p style={{color: 'red'}}> E-mail necessáro para o login</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite a senha do moderador" {...register('password', {required: true})} />
                    {errors.password && <p style={{color: 'red'}}> Senha necessária para o login</p>}
                </Form.Group>

                <br/>
                <div className="d-grid gap-2">
                    <Button type="submit">
                        Entrar
                    </Button>
                </div>
            </Form>

            <Modal
                show={isModalErrorEmail}
                onHide={()=>{setModalErrorEmail(false)}}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"            
            >   
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <h1>E-mail/Senha invalidos!!!</h1>
                    <p>E-mail/Senha invalidos, tente novamente!!!</p>
                </Modal.Body>
            </Modal>
        </Card>
        </Container>
    )
}

export default Login