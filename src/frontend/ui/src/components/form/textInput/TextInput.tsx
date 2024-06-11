import React, { useRef } from 'react';
import HorizontalSpacer from '../../horizontalSpacer';

interface Props {
    readonly value: string;
    readonly onChange: (propName: string, newValue: string) => void;
    readonly propName: string;
    readonly labelText?: string;
    readonly placeholder?: string;
    readonly onBlur?: (e: any) => void;
    readonly errorText?: string;
    readonly type?: string;
    readonly disabled?: boolean;
}

const TextInput = ({ value, onChange, propName, labelText, placeholder, onBlur, errorText, type, disabled }: Props) => {
    const labelId = useRef(propName);
    return <div className='sm:col-span-12'>
        <div className='flex flex-col'>
            {labelText && <label className='m-1' htmlFor={labelId.current} >{labelText}</label>}
            <input className='border-solid border-black border px-1'
                name={propName}
                onBlur={onBlur}
                onChange={disabled ? undefined : (e: React.ChangeEvent<HTMLInputElement>) => onChange(propName, e.target.value)}
                type={type}
                id={labelId.current}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
            />
            {errorText ? <p className='text-red-600'>{errorText}</p> : <HorizontalSpacer />}
        </div>
    </div>;
}

export default TextInput;
