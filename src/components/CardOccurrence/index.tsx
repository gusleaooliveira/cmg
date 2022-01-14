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
    Locale
} from './index.style';
import { IProps } from "./index.types";

import person from '../../assets/personIcon2.png';
import local from '../../assets/localIcon2.png';
import police from '../../assets/policeIcon2.png';
import alertOrange from '../../assets/alertOrange2.png';
import alertRed from '../../assets/redAlert2.png';



const CardOccurrence: React.FC<IProps> = (props) => {
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
                    <p>Cadastrado em {props.date}</p>
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
                        <div>
                            <button onClick={props.reprove}>Reprovar</button>
                            <button onClick={props.aprove}>Aprovar</button>
                        </div>
                    </ContentRight>
                </Content>
            </SectionRight>
        </Container>
    );
};

export default CardOccurrence;