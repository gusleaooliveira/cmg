import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Row,
    SectionTop,
    RowTop,
    RowCenter,
    RowBottom,
    Card,
    Title,
    Charts,
    ChartValuesLeft,
    ChartValuesRight,
    Text,
    Content,
    ImgStatus,
    OccurrencesMouth,
    OccurrencesTop,
    TotalOccurrences,
    TotalContent,
    ProgressContent,
    Progress,
    CardHeader
} from './index.styled';
import { 
    Image, 
    ProgressBar
} from 'react-bootstrap'
import { PieChart } from 'react-minimal-pie-chart'
import { 
    Area, 
    AreaChart,
    BarChart,
    Bar, 
    XAxis, 
    Tooltip, 
} from 'recharts'

import { getStatistics } from '../../services';
import { ADD_STATISTICS, RootState } from '../../store';

import orangeImg from '../../assets/orange.svg'
import redImg from '../../assets/red.svg'
import blueImg from '../../assets/blue.svg'
import alertImg from '../../assets/alert.svg'
import orangeAgent from '../../assets/agentesFeridos.png';
import orangePerson from '../../assets/civisFeridos.png'
import redAgent from '../../assets/agentesMortos.png'
import redPerson from '../../assets/civisMortos.png'
import semVitimas from '../../assets/semVitimas.png'
import DataInput from '../../components/DataInput';
import Select from '../../components/Select';
import MultipleSelect from '../../components/MultipleSelect';

const Dashboard: React.FC = ({ children }) => {
    const { token, statistics } = useSelector((state: RootState) => state.clickState)
    const dispatch = useDispatch()
    const [ano, setAno ] = useState(2021)
    const [totalOcorrencias, setTotalOcorrencias] = useState(1000)
    const [totalFeridos, setTotalFeridos] = useState(100)
        
    useEffect(()=>{
        getStatistics(token).then((resposta) => {
            dispatch({type: ADD_STATISTICS, statistics: resposta})
        })
        console.log(statistics)
    }, [])

    const postMock = [
        {value: 'null', label: 'Selecione um estado'},
        {value: 'Rio de Janeiro', label: 'Rio de Janeiro'},
        {value: 'Pernanbuco', label: 'Pernanbuco'},
    ]

    const postMock1 = [
        {value: 'null', label: 'Selecione uma cidade'}
    ]

    const postMock2 = [
        {value: 'null', label: 'Selecione um bairro'},
    ]
    
    return (
        <Container>
            <SectionTop>
                <RowTop>
                    <h3>Estatística</h3>
                    <div>
                        <DataInput 
                            id='intialDate'                        
                            name='intialDate'
                            htmlFor='intialDate'
                        />
                        <p style={{marginLeft: '15px', marginRight: '15px'}}>a</p>
                        <DataInput 
                            id='finalDate'                        
                            name='finalDate'
                            htmlFor='finalDate'
                        />
                    </div>
                </RowTop>
                <RowCenter>
                    <Select 
                        ariaLabel='estado'
                        label='Selecione o estado'
                        list={postMock}
                    />
                    <div><Select 
                        ariaLabel='estado'
                        label='Selecione o estado'
                        list={postMock1}
                    />
                    <Select 
                        ariaLabel='estado'
                        label='Selecione o estado'
                        list={postMock2}
                    />
                    </div>
                </RowCenter>
                <RowBottom>
                    <CardHeader>
                        <img src={orangePerson} style={{width: '48px', height: '48px'}}/>
                            <div>
                                <h3>400</h3>
                                <p>Tiroteios/disparos</p>
                            </div>
                    </CardHeader>
                    <CardHeader>
                        <img src={semVitimas} style={{width: '48px', height: '48px'}}/>
                            <div>
                                <h3>200</h3>
                                <p>Sem vitimas</p>
                            </div>
                    </CardHeader>
                    <CardHeader>
                        <img src={redPerson} style={{width: '48px', height: '48px'}}/>
                            <div>
                                <h3>50</h3>
                                <p>Civis mortos</p>
                            </div>
                    </CardHeader>
                    <CardHeader>
                        <img src={redAgent} style={{width: '48px', height: '48px'}}/>
                            <div>
                                <h3>30</h3>
                                <p>Agentes mortos</p>
                            </div>
                    </CardHeader>
                    <CardHeader>
                        <img src={orangePerson} style={{width: '48px', height: '48px'}}/>
                            <div>
                                <h3>50</h3>
                                <p>Civis feridos</p>
                            </div>
                    </CardHeader>
                    <CardHeader>
                        <img src={orangeAgent} style={{width: '48px', height: '48px'}}/>
                            <div>
                                <h3>70</h3>
                                <p>Agentes feridos</p>
                            </div>
                    </CardHeader>
                </RowBottom>
            </SectionTop>
            <p style={{marginBottom: '20px'}}>Visualizando dados do período selecionado (01/10/2021 até 30/10/2021)</p>
            <Row>
                <Card>
                    <Title>Ocorrências</Title>
                    <Charts>
                        <PieChart
                            style={{
                                width: '212px'
                            }}
                            data={[
                                {title: 'Tiros sem baleados', value: 200, color: '#FF9F43'},
                                {title: 'Tiros com baleados', value: 120, color: '#EA5455'}
                            ]}
                        />
                    </Charts>
                    <Content>
                        <div>
                            <ImgStatus src={orangeImg} />
                            <Text>Tiros sem baleados</Text>
                        </div>
                        <Text>200</Text>
                    </Content>
                    <Content>
                        <div>
                            <ImgStatus src={redImg} />
                            <Text>Tiro com baleados</Text>
                        </div>
                        <Text>120</Text>
                    </Content>
                    <Content>
                        <div>
                            <ImgStatus src={blueImg} />
                            <Text>Total</Text>
                        </div>
                        <Text>320</Text>
                    </Content>

                </Card>

                <Card>
                    <Title>Vitimas Civis</Title>
                        <Charts>
                            <PieChart
                                style={{
                                    width: '212px'
                                }}
                                lineWidth={20}
                                data={[
                                    {title: 'Feridos', value: 50, color: '#FF9F43'},
                                    {title: 'Mortes', value: 30, color: '#EA5455'}
                                ]}
                            />
                        </Charts>
                        {/* <ChartValuesLeft>
                            <Text>Total</Text>
                            <Text>80</Text>
                        </ChartValuesLeft> */}

                        <Content>
                            <div>
                                <ImgStatus src={orangeImg} />
                                <Text>Feridos</Text>
                            </div>
                            <Text>50</Text>
                        </Content>
                        <Content>
                            <div>
                                <ImgStatus src={redImg} />
                                <Text>Mortes</Text>
                            </div>
                            <Text>30</Text>
                        </Content>
                </Card>

                <Card>
                    <Title>Vitimas Agentes</Title>
                    <Charts>
                        <PieChart
                            style={{
                                width: '212px'
                            }}
                            lineWidth={20}
                            data={[
                                {title: 'Feridos', value: 70, color: '#FF9F43'},
                                {title: 'Mortes', value: 50, color: '#EA5455'}
                            ]}
                        />
                    </Charts>
                    {/* <ChartValuesRight>
                        <Text>Total</Text>
                        <Text>120</Text>
                    </ChartValuesRight> */}
                    <Content>
                        <div>
                            <ImgStatus src={orangeImg} />
                            <Text>Feridos</Text>
                        </div>
                        <Text>70</Text>
                    </Content>
                    <Content>
                        <div>
                            <ImgStatus src={redImg} />
                            <Text>Mortes</Text>
                        </div>
                        <Text>50</Text>
                    </Content>
                </Card>
            </Row>

            <Row style={{marginTop: '30px', marginBottom: '30px'}}>
                <div>
                    Visualizando dados do ultimo ano <b>({ano})</b>
                </div>
                <select
                    style={{
                        width: '130px'
                    }}
                    onChange={(e)=>{
                        setAno(Number(e.target.value))
                    }}
                >
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </Row>

            <Row>
                <OccurrencesMouth>
                    <OccurrencesTop>
                        <div>
                            <div>
                                <p>Ocorrências por mês</p>
                                <h3>{ano}</h3>
                            </div>
                            <p>1000</p>
                        </div>
                        <BarChart
                            style={{backgroundColor: '#FFF'}}
                            width={650}
                            height={300}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
                            data={[
                                {
                                    name: 'Jan',
                                    uv: 4000,
                                    pv: 2400,
                                    amt: 2400,
                                },
                                {
                                    name: 'Fev',
                                    uv: 3000,
                                    pv: 1398,
                                    amt: 2210,
                                },
                                {
                                    name: 'Mar',
                                    uv: 2000,
                                    pv: 9800,
                                    amt: 2290,
                                },
                                {
                                    name: 'Abr',
                                    uv: 2780,
                                    pv: 3908,
                                    amt: 2000,
                                },
                                {
                                    name: 'Mai',
                                    uv: 1890,
                                    pv: 4800,
                                    amt: 2181,
                                },
                                {
                                    name: 'Jun',
                                    uv: 2390,
                                    pv: 3800,
                                    amt: 2500,
                                },
                                {
                                    name: 'Jul',
                                    uv: 3490,
                                    pv: 4300,
                                    amt: 2100,
                                },
                                {
                                    name: 'Jul',
                                    uv: 3490,
                                    pv: 4300,
                                    amt: 2100,
                                },
                                {
                                    name: 'Ago',
                                    uv: 3490,
                                    pv: 4300,
                                    amt: 2100,
                                },
                                {
                                    name: 'Set',
                                    uv: 3490,
                                    pv: 4300,
                                    amt: 2100,
                                },
                                {
                                    name: 'Out',
                                    uv: 3490,
                                    pv: 4300,
                                    amt: 2100,
                                },
                                {
                                    name: 'Nov',
                                    uv: 3490,
                                    pv: 4300,
                                    amt: 2100,
                                },
                                {
                                    name: 'Dez',
                                    uv: 3490,
                                    pv: 4300,
                                    amt: 2100,
                                },
                            ]}
                        >
                            <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
                            <Tooltip />
                            <Bar dataKey="pv" fill="#7367F0" background={{ fill: '#F8F8F8' }} />
                        </BarChart>
                    </OccurrencesTop>
                    <hr />
                    <div>
                        <div style={{backgroundColor: '#FFF'}}>
                            <p>Total no mês</p>
                            <h3>200</h3>
                        </div>
                        <ProgressBar now={84} max={200}  />
                        <ProgressContent>
                            <Progress>
                                <div style={{backgroundColor: '#FFF'}}>
                                    <p>Mortes Civis</p>
                                    <h3>100</h3>
                                </div>
                                <ProgressBar now={65} max={100}  />
                                <div style={{backgroundColor: '#FFF'}}>
                                    <p>Mortes Civis</p>
                                    <h3>100</h3>
                                </div>
                                <ProgressBar now={55} max={100}   />
                            </Progress>
                            <Progress>
                                <div style={{backgroundColor: '#FFF'}}>
                                    <p>Mortes Policiais</p>
                                    <h3>100</h3>
                                </div>
                                <ProgressBar now={75} max={100}   />
                                <div style={{backgroundColor: '#FFF'}}>
                                    <p>Feridos Policiais</p>
                                    <h3>100</h3>
                                </div>
                                <ProgressBar now={60} max={100}   />
                            </Progress>
                        </ProgressContent>
                    </div>
                </OccurrencesMouth>

                <div style={{width: '48%'}}>
                    <TotalOccurrences style={{marginBottom: '20px'}}>
                        <TotalContent>
                            <div>
                                <div>
                                    <Image src={alertImg} />
                                </div>
                                <h3>{totalOcorrencias}</h3>
                                <p>Total de ocorrências</p>
                            </div>
                        <p>{ano}</p>
                        </TotalContent>
                        <AreaChart 
                            width={760} 
                            height={94} 
                            style={{backgroundColor: '#FFF'}}
                            data={[
                                {
                                    "name": "",
                                    "uv": Math.floor(1 + Math.random() * 1000),
                                    "amt": 2400
                                },
                                {
                                    "name": "",
                                    "uv": Math.floor(1 + Math.random() * 1000),
                                    "amt": 2210
                                },
                                {
                                    "name": "",
                                    "uv": Math.floor(1 + Math.random() * 1000),
                                    "amt": 2290
                                },
                                {
                                    "name": "",
                                    "uv": Math.floor(1 + Math.random() * 1000),
                                    "amt": 2000
                                },
                                {
                                    "name": "",
                                    "uv": Math.floor(1 + Math.random() * 1000),
                                    "amt": 2181
                                },
                                {
                                    "name": "",
                                    "uv": Math.floor(1 + Math.random() * 1000),
                                    "amt": 2500
                                },
                                {
                                    "name": "",
                                    "uv": Math.floor(1 + Math.random() * 1000),
                                    "amt": 2100
                                }
                            ]}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorred" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#7367F0" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#7367F0" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#7367F0" fillOpacity={1} fill="url(#colorred)" />
                        </AreaChart>
                    </TotalOccurrences>
                    <Row>
                        <TotalOccurrences style={{marginRight: '20px'}}>
                            <TotalContent>
                                <div>
                                    <div>
                                        <Image src={redPerson} style={{marginRight: '10px', width: '48px', height: '48px'}}/>
                                        <Image src={redAgent} style={{width: '48px', height: '48px'}}/>
                                    </div>
                                    <h3>{totalOcorrencias}</h3>
                                    <p>Total de ocorrências</p>
                                </div>
                                <p>{ano}</p>
                            </TotalContent>
                            <AreaChart 
                                style={{backgroundColor: '#FFF'}}
                                width={350} 
                                height={200} 
                                data={[
                                    {
                                        "name": "",
                                        "uv": Math.floor(1 + Math.random() * 100),
                                        "amt": 2400
                                    },
                                    {
                                        "name": "",
                                        "uv": Math.floor(1 + Math.random() * 100),
                                        "amt": 2210
                                    },
                                    {
                                        "name": "",
                                        "uv": Math.floor(1 + Math.random() * 100),
                                        "amt": 2290
                                    },
                                    {
                                        "name": "",
                                        "uv": Math.floor(1 + Math.random() * 100),
                                        "amt": 2000
                                    },
                                    {
                                        "name": "",
                                        "uv": Math.floor(1 + Math.random() * 100),
                                        "amt": 2181
                                    },
                                    {
                                        "name": "",
                                        "uv": Math.floor(1 + Math.random() * 100),
                                        "amt": 2500
                                    },
                                    {
                                        "name": "",
                                        "uv": Math.floor(1 + Math.random() * 100),
                                        "amt": 2100
                                    }
                                    ]}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FD444E" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#FD444E" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#FD444E" fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </TotalOccurrences>
                        <TotalOccurrences>
                            <TotalContent>
                                <div>
                                    <div>
                                        <Image src={orangePerson} style={{marginRight: '10px', width: '48px', height: '48px'}}/>
                                        <Image src={orangeAgent} style={{width: '48px', height: '48px'}}/>
                                    </div>
                                    <h3>{totalFeridos}</h3>
                                    <p>Total de feridos</p>
                                </div>
                                <p>{ano}</p>
                            </TotalContent>
                            <div>
                                <AreaChart 
                                    style={{backgroundColor: '#FFF'}}
                                    width={350} 
                                    height={200} 
                                    data={[
                                        {
                                            "name": "",
                                            "uv": Math.floor(1 + Math.random() * 100),
                                            "amt": 2400
                                        },
                                        {
                                            "name": "",
                                            "uv": Math.floor(1 + Math.random() * 100),
                                            "amt": 2210
                                        },
                                        {
                                            "name": "",
                                            "uv": Math.floor(1 + Math.random() * 100),
                                            "amt": 2290
                                        },
                                        {
                                            "name": "",
                                            "uv": Math.floor(1 + Math.random() * 100),
                                            "amt": 2000
                                        },
                                        {
                                            "name": "",
                                            "uv": Math.floor(1 + Math.random() * 100),
                                            "amt": 2181
                                        },
                                        {
                                            "name": "",
                                            "uv": Math.floor(1 + Math.random() * 100),
                                            "amt": 2500
                                        }
                                    ]}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}

                                    >
                                    <defs>
                                        <linearGradient id="colorxd" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FF9920" stopOpacity={0.8}/>
                                            <stop offset="100%" stopColor="#FF9920" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#FF9920" fillOpacity={1} fill="url(#colorxd)" />
                                </AreaChart>
                            </div>
                        </TotalOccurrences>
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default Dashboard
