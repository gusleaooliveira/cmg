import React from "react";
import {
    Container,
    SectionLeft,
    Title,
    SectionRight,
    Date,
    Content,
    ContentLeft,
    ContentRight,
    Locale,
    SectionBtn,
    Edit,
    Aprove,
    Reprove,
    Disapproved,
    Approved
} from './index.style';
import { IProps } from "./index.types";

import person from '../../assets/personIcon2.png';
import local from '../../assets/localIcon2.png';
import police from '../../assets/policeIcon2.png';
import alertOrange from '../../assets/alertOrange2.png';
import alertRed from '../../assets/redAlert2.png';
import aceptIconGreen from '../../assets/aceptIconGreen.png';
import aceptIconWhite from '../../assets/aceptIconWhite.png';
import reproveIconRed from '../../assets/reproveIconRed.png';
import reproveIconWhite from '../../assets/reproveIconWhite.png';
import editIcon from '../../assets/editIcon.png';

const CardOccurrence: React.FC<IProps> = (props) => {

    function setButton(){
        switch(props.status){
            case "Waiting": 
                return( 
                    <>
                        <Reprove onClick={props.reprove}>
                            <img src={reproveIconWhite} />
                            <p>Reprovar</p>
                        </Reprove>
                        <Aprove onClick={props.aprove}>
                            <img src={aceptIconWhite}/>
                            <p>Aprovar</p>
                        </Aprove>
                    </>
                )
            break;

            case "Approved": 
                return (
                    <>
                        <Approved onClick={props.reprove}>
                            <img src={aceptIconGreen} />
                            <p>Registro foi aprovado</p>
                        </Approved>
                        <Edit onClick={props.aprove}>
                            <img src={editIcon} />
                            <p>Editar</p>
                        </Edit>
                    </>
                )
            break;

            case "Disapproved": 
                return (
                    <>
                        <Disapproved onClick={props.reprove}>
                            <img src={reproveIconRed} />
                            <p>Registro foi reprovado</p>
                        </Disapproved>
                        <Edit onClick={props.aprove}>
                            <img src={editIcon} />
                            <p>Alterar status</p>
                        </Edit>
                    </>
                )
            break;

            default:
                return null
            break;
        }
    }

    return (
        <Container>
            <SectionLeft
                    civiliansWounded={props.civiliansWounded}
                    civiliansDead={props.civiliansDead}
                    agentDead={props.agentDead}
                    agentWounded={props.agentWounded}
            >
                <header>
                    <p>Registrado por <b>{props.user}</b></p>
                </header>
                <Locale>
                    <div>
                        {
                            props.civiliansWounded != 0 || props.civiliansDead != 0 || props.agentDead != 0 || props.agentWounded != 0
                            ?
                            <img src={alertRed}/>
                            :
                            <img src={alertOrange}/>
                        }
                        <div>
                            {
                                props.civiliansWounded != 0 || props.civiliansDead != 0 || props.agentDead != 0 || props.agentWounded != 0
                                ?
                                <Title
                                    civiliansWounded={props.civiliansWounded}
                                    civiliansDead={props.civiliansDead}
                                    agentDead={props.agentDead}
                                    agentWounded={props.agentWounded}
                                >Tiros com baleados</Title>
                                :
                                <Title
                                    civiliansWounded={props.civiliansWounded}
                                    civiliansDead={props.civiliansDead}
                                    agentDead={props.agentDead}
                                    agentWounded={props.agentWounded}
                                >Tiros sem baleados</Title>

                            }
                            <p>{props.date}</p>
                        </div>
                    </div>
                    <div>
                        <img src={local}/>
                        <div>
                            <p>{props.address}</p>
                            <p style={{opacity: '0.6'}}>RJ - 25036-150</p>
                        </div>
                    </div>
                </Locale>
            </SectionLeft>
            <SectionRight>
                <Date>
                    <b>#{props.id}</b>
                    <p>Cadastrado em {props.createdAt}</p>
                </Date>
                <Content>
                    <ContentLeft>
                        <div>
                            <h4>Civis</h4>
                            <div>
                                <img src={person} />
                                <p>{props.civiliansWounded} feridos / </p>
                                <p style={{marginLeft: '3px'}}>{props.civiliansDead} morte</p>
                            </div>
                        </div>
                        <div>
                            <h4>Agentes de segurança</h4>
                            <div>
                                <img src={police} />
                                <p>{props.agentWounded} feridos / </p>
                                <p style={{marginLeft: '3px'}}>{props.agentDead} morte</p>
                            </div>
                        </div>
                    </ContentLeft>
                    <ContentRight>
                        <div>
                            <h3>Descrição da ocorrência</h3>
                            <p>{props.description}</p>
                        </div>
                        <SectionBtn>
                            {setButton()}
                        </SectionBtn>
                    </ContentRight>
                </Content>
            </SectionRight>
        </Container>
    );
};

export default CardOccurrence;