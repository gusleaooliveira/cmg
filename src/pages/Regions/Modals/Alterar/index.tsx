import React, { useEffect, useState } from "react"
import { Button, Col, Image, Modal, Row } from "react-bootstrap"
import checkedImg from './checked.svg'
import { IProps } from "./intex.types"
import uncheckedImg from './unchecked.svg'
import conclued from './conclued.svg'
import { useDispatch, useSelector } from "react-redux"
import { ADD_REGIONS, RootState } from "../../../../store"
import { editRegions, getRegions, getRegionsById } from "../../../../services"

const ModalAlterar: React.FC<IProps> = ({
    isModal, onHide, checked, id
}) => {
    const { token, regions } = useSelector((state: RootState)=>state.clickState)
    const [isModalSuccess, setIsModalSuccess] = useState(false)
    const dispatch = useDispatch()
    
    function alterateData(){
        getRegionsById(token, id)
            .then((resp) => {
                let aux = resp
                aux.enabled = aux.enabled ? false : true

                let data = Object.assign(resp, aux)
                editRegions(token, id, data)
                    .then((resp)=>{
                        getRegions(token)
                            .then((respR) => {
                                dispatch({type: ADD_REGIONS, regions: respR})
                                setIsModalSuccess(true)
                            })                                    
                    })
            })
    }

    return  <>
                <Modal
                    show={isModal}
                    onHide={onHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton> </Modal.Header>
                    <Modal.Body>
                        <div 
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image src={checked ? uncheckedImg : checkedImg} />
                            <h2>  {checked ? 'Desabilitar' : 'Habilitar'} região </h2>
                            <p>
                                <span>
                                    Você tem certeza que deseja 
                                    {checked ? 'desabilitar' : 'habilitar'}
                                    esta região?
                                </span>
                            </p>
                            
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}
                            >
                                <Button variant="danger" onClick={()=>onHide()}>
                                    Não, cancelar
                                </Button>
                                <Button variant="warning" onClick={()=>{
                                    onHide()
                                    alterateData()
                                }}>
                                    Sim, {checked ? 'Desabilitar' : 'Habilitar'}
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={isModalSuccess}
                    onHide={()=>setIsModalSuccess(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton> </Modal.Header>
                    <Modal.Body>
                        <div 
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                                <Image src={conclued} />
                                <h2 style={{color: '#28C76F !import'}}>
                                    Região {checked ? ' desabilitada ' : ' habilitada '}
                                </h2>
                                <p>
                                    <span>
                                        A região foi  
                                        {checked ? ' desabilitada ' : ' habilitada '} 
                                        com sucesso.
                                    </span>
                                </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </>


}

export default ModalAlterar