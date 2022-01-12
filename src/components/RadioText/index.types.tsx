export interface IProps {
    value: string
    label1: string
    label2: string
    color1: string
    color2: string
    value1: string
    value2: string
    onChange: (e: any) => void
}

export interface ILabel {
    checked: boolean
    color: string
}