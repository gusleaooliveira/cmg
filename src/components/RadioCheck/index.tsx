import React, { useState } from "react"
import { Image } from "react-bootstrap"
import { radioCheck, radioUncheck } from "../../assets"
import { RadioItem, Group } from "./index.styled"
import { IProps } from "./index.types"

const RadioGroup: React.FC<IProps> = ({
  value, onChange
}) => {
  const [sim, setSim] = useState(value)
  const [nao, setNao] = useState(!value)

  return (
    <Group>
      <RadioItem  checked={sim} onClick={()=>{ onChange(true); setSim(true); setNao(false); }} >
        <Image src={sim ? radioCheck : radioUncheck}  style={{ marginRight: '10px'}}/>          
        Sim
      </RadioItem>
      <RadioItem checked={nao} onClick={()=>{ onChange(false); setNao(true); setSim(false); }} >
        <Image src={nao ? radioCheck : radioUncheck} style={{ marginRight: '10px'}}/>
        Não
      </RadioItem>
    </Group>
  )
}

export default RadioGroup