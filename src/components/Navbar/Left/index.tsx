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


import dashboardIcon from '../../../assets/dashboardIcon.svg';
import occurrenceIcon from '../../../assets/occurrenceIcon.svg';
import notificationIcon from '../../../assets/notificationIcon.svg';
import usersIcon from '../../../assets/usersIcon.svg';
import configIcon from '../../../assets/configIcon.svg';
import sectionSiteIcon from '../../../assets/sectionSiteIcon.svg';

const NavbarLeft: React.FC = ({}) => {
    let location = useLocation()
    let { user } = useSelector((state: RootState) => state.clickState)

    let lista = [
        {label: 'Dashboard', icon: `${dashboardIcon}`, path: '/dashboard'},
        {label: 'Aprovar ocorrências', icon: `${occurrenceIcon}`, path: '/occurrences'},
        {label: 'Notificações Push', icon: `${notificationIcon}`, path: '/notifications'},
        {label: 'Usuários', icon: `${usersIcon}`, path: '/users'},
        {label: 'Configurar regiões', icon: `${configIcon}`, path: '/regions'},
        {label: 'Dashboard Gustavo', icon: '', path: '/dash'},
        // {label: '', icon: '', path: '/'},
    ]

    let listSite = [
        {label: 'Dashboard', icon: `${sectionSiteIcon}`, path: '/dashboard'},
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
                            <NavContent to={chave.path} >
                                <img src={chave.icon} />
                                <Item>{chave.label}</Item>
                            </NavContent>
                        )
                    })}
                    <div>
                        teste
                    </div>
                </Nav>
            </Navigation>
        </>
    )
}

export default NavbarLeft;