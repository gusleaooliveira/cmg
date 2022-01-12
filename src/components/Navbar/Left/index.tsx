import React, { useState, useEffect } from 'react'
import {
    Navigation,
    Nav,
    NavIcon,
    NavContent,
    Item
} from './index.styled';
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import Icone from './icone.svg'
import { RootState } from '../../../store';

const NavbarLeft: React.FC = ({}) => {
    let location = useLocation()
    let { user } = useSelector((state: RootState) => state.clickState)

    let lista = [
        {label: 'Dashboard', icon: '', path: '/dashboard'},
        {label: 'Aprovar ocorrências', icon: '', path: '/occurrences'},
        {label: 'Notificações Push', icon: '', path: '/notifications'},
        {label: 'Usuários', icon: '', path: '/users'},
        {label: 'Configurar regiões', icon: '', path: '/regions'},
        {label: 'Dashboard Gustavo', icon: '', path: '/dash'},
        // {label: '', icon: '', path: '/'},
    ]

    const [ atual, setAtual ] = useState('')

    useEffect(() => {
        setAtual(location.pathname)
    }, [])

    return (
        <>
            <Navigation> 
                <NavIcon>
                    <img src={Icone} />
                </NavIcon>
                <Nav>
                    {lista.map((chave)=> {
                        return (
                            <NavContent>
                                <img src={chave.icon} />
                                <Item to={chave.path} as={Link}>
                                    {chave.label}
                                </Item>
                            </NavContent>
                        )
                    })}
                </Nav>
            </Navigation>
        </>
    )
}

export default NavbarLeft;