import React, { useState } from 'react';
import ModalCriar from './Modals/Create';

import purplePerson from '../../assets/purplePerson.png';
import lupa from '../../assets/lupa.png';

const Users: React.FC = () => {
    const [ isModalCriar, setIsModalCriar ]  = useState(false)
    const [ index, setIndex ] = useState(true);

    return (
        <>
            <div>
                <button onClick={() => setIndex(true)}>Aplicatvo</button>
                <button onClick={() => setIndex(false)}>Plataforma</button>
            </div>
            {index === true && (
                <>
                    <header>
                        <div>
                            <div>
                                <h3>50</h3>
                                <p>Total de usuários</p>
                            </div>
                            <img src={purplePerson} />
                        </div>
                        <div>
                            <h3>30</h3>
                            <p>Região Nordeste</p>
                        </div>
                        <div>
                            <h3>30</h3>
                            <p>Região Sudeste</p>
                        </div>
                        <div>
                            <h3>30</h3>
                            <p>Região Sul</p>
                        </div>
                        <div>
                            <h3>30</h3>
                            <p>Região Norte</p>
                        </div>
                        <div>
                            <h3>30</h3>
                            <p>Região Centro-oeste</p>
                        </div>
                    </header>
                    <div>
                        <h3>Usuários cadastrados no aplicativo</h3>
                        <div>
                            <div>
                                <label htmlFor="search">
                                    <img src={lupa} alt="" />
                                </label>
                                <input type="search" name='search'/>
                            </div>
                            <div>
                                <label htmlFor="state">Região</label>
                                <select name="state" id="">
                                    <option value="all">Todas as regiões</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </>

            )}
            {index == false && (
                <>
                    <button onClick={()=>setIsModalCriar(true)}>
                        Adicinar usuário
                    </button>

                    <ModalCriar 
                        isModal={isModalCriar}
                        onHide={()=>setIsModalCriar(false)}
                    />
                </>
            )}
       </>
    )
} 

export default Users