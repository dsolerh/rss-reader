import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label?: string
    error?: string
}

export const Input = (props: InputProps) => {
    return (
        <div className="form-floating">
            <input {...props} className={`form-control${props.className ? ' ' + props.className : ''}${props.error ? ' is-invalid' : ''}`} />
            {props.label && <label htmlFor={props.id} className="">{props.label}</label>}
        </div>
    );
}

