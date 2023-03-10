import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label?: string
    error?: string
}

export const Input = (props: InputProps) => {
    return (
        <div className={props.className}>
            <input {...props} className={`form-control${props.error ? ' is-invalid' : ''}`} />
            {props.label && <label htmlFor={props.id} data-testid="input-label">{props.label}</label>}
        </div>
    );
}

