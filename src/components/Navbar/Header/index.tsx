import React, { useEffect, useState } from 'react'
import {
    Container,
    Person,
    Item
} from './index.styled';
import ImgTop from './ImgTop'
import Mensagem from './mensagem.svg'
import Sino from './sino.svg'
import Linha from './linha.svg'
import Logout from './log-out.svg'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_LOGIN_USER, ADD_TOKEN, RootState } from '../../../store';
import { Image } from 'react-bootstrap';


const NavbarHeader: React.FC = ({ children }) => {
    const [alertValue, setAlertValue] = useState(0)
    const [messagesValue, setMessagesValue] = useState(0)
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')

    const { user } = useSelector((state: RootState)=>state.clickState)
    const dispatch = useDispatch()

    useEffect(()=>{
        setAlertValue(4)
        setMessagesValue(4)
        setNome(user.name)
        setTipo(user.role)
    }, [])

    return (
        <Container>
            <Item to=""style={{marginLeft: '20px'}}>
                <ImgTop src={Sino} value={alertValue} />
            </Item>
            <Item to=""style={{marginLeft: '20px'}}>
                <ImgTop src={Mensagem} value={messagesValue} />
            </Item>
            <Person>
                <p> {nome} </p>
                <p> {tipo} </p>
            </Person>

            <Image src={Linha}  style={{marginLeft: '20px'}}/>

            <Item
                to=""
                onClick={()=>{
                    dispatch({type: ADD_LOGIN_USER, user: {}})
                    dispatch({type: ADD_TOKEN, token: ''})
                }}
            >

            <Image src={Logout} style={{marginLeft: '20px'}}/>
            
            </Item>
        </Container>
    )
}

export default NavbarHeader