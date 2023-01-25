import { ChangeEvent, ChangeEventHandler, useState } from "react";

type Result<T> = {
    value: T,
    error: string | undefined,
    invalid: boolean,
    onChangeHandler: ChangeEventHandler<HTMLInputElement>,
    onBlurHandler: () => void,
    reset: () => void,
}

type TransformationFn<T> = (val: string) => T

export default function useInput<T>(
    initialVal: T,
    errorMessage: string,
    validator: (val: T) => boolean,
    transform: TransformationFn<T> = (v) => v as T
): Result<T> {
    const [value, setValue] = useState(initialVal);
    const [touched, setTouched] = useState(false);

    const invalid = validator(value);
    const error = (invalid && touched) ? errorMessage : undefined;

    const onBlurHandler = () => setTouched(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(transform(e.target.value))
    const reset = () => {
        setTouched(false);
        setValue(initialVal)
    }

    return {
        value,
        error,
        invalid,
        onChangeHandler,
        onBlurHandler,
        reset
    }
}
