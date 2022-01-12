import React from "react";

export interface IProps {
    value: boolean,
    onChange: (e: boolean) => void
}

export interface IRadioItem extends React.AllHTMLAttributes<HTMLDivElement> {
    checked: boolean
}