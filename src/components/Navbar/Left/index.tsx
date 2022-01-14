import React, { useState, useEffect } from 'react'
import {
    Navigation,
    Nav,
    NavIcon,
    NavContent,
    Item,
    Icon,
    IconSite,
    SelectSite,
    ItemsSite
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
import circleIcon from '../../../assets/circleIcon.svg';
import downIcon from '../../../assets/downIcon.png';

const NavbarLeft: React.FC = ({}) => {
    let location = useLocation()
    let { user } = useSelector((state: RootState) => state.clickState)
    const [index, setIndex] = useState(null)
    const [site, setSite] = useState<any>()
    const [atual, setAtual] = useState('')

    let lista = [
        {label: 'Dashboard', icon: `${dashboardIcon}`, path: '/dashboard'},
        {label: 'Aprovar ocorrências', icon: `${occurrenceIcon}`, path: '/occurrences'},
        {label: 'Notificações Push', icon: `${notificationIcon}`, path: '/notifications'},
        {label: 'Usuários', icon: `${usersIcon}`, path: '/users'},
        {label: 'Configurar regiões', icon: `${configIcon}`, path: '/regions'},
        // {label: '', icon: '', path: '/'},
    ]

    let listSite = [
        {label: 'Home', icon: '', path: '/dashboard'},
        {label: 'Sobre', icon: '', path: '/dashboard'},
        {label: 'Informe-se (Blog)', icon: '', path: '/dashboard'},
        {label: 'Dados', icon: '', path: '/dashboard'},
        {label: 'API', icon: '', path: '/dashboard'},
        {label: 'Impacto', icon: '', path: '/dashboard'},
        {label: 'Transparência', icon: '', path: '/dashboard'},
        {label: 'Redes Sociais', icon: '', path: '/dashboard'},

    ]


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
                                <Icon src={chave.icon} />
                                <Item>{chave.label}</Item>
                            </NavContent>
                        )
                    })}
                    <SelectSite onClick={() => {setIndex(site === index ? null : site)}}>
                        <IconSite src={sectionSiteIcon} />
                        <p>Seções do site</p>
                        <img src={downIcon} width={16}/>
                    </SelectSite>
                    <ItemsSite>
                        {site === index && (
                            <>
                                {listSite.map(id => {
                                    return(
                                        <NavContent to={id.path}> 
                                            <Icon src={circleIcon}/>
                                            <Item >{id.label}</Item>
                                        </NavContent>
                                    )
                                })}
                            </>
                        )}
                    </ItemsSite>
                </Nav>
            </Navigation>
        </>
    )
}

export default NavbarLeft;