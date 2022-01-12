import { Radio } from '@mui/material';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Label, LabelContainer } from './index.styled';
import { IProps } from './index.types';

const RadioText: React.FC<IProps> = ({
  value, color1, color2, label1, label2, onChange, value1, value2
}) => {

  const [selectedValue, setSelectedValue] = useState(value)
  const [sim, setSim] = useState(true)
  const [nao, setNao] = useState(false)

  const handleChange = (e:any) => {
    setSelectedValue(e.target.value)
    onChange(e.target.value)
    setSim(!sim)
    setNao(!nao)
  }

  const controlProps = (item: any) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item
  })

  return (
    <>
      <Col xs={1}>
      <LabelContainer color={color1}>
        <Radio {...controlProps(value1)} />
        <Label checked={sim} color={color1}>{label1}</Label>
      </LabelContainer>
      </Col>
      <Col xs={1}>
        <LabelContainer color={color2}>
          <Radio {...controlProps(value2)}  />
          <Label checked={nao} color={color2}>{label2}</Label>
        </LabelContainer>
      </Col>
    </>
  )
}

export default RadioText