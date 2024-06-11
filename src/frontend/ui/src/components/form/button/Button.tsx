import * as React from 'react';
import LoadingDots from '../../loadingText';
import { ButtonType } from './ButtonType';
import { generateButtonClasses } from './generateButtonClasses';

interface Props {
    readonly text: string;
    readonly buttonType?: ButtonType;
    readonly onSubmit: () => void | Promise<void>;
    readonly disabled?: boolean;
    readonly className?: string;
    readonly removeDefaultClasses?: boolean;
    readonly loading?: boolean;
}

const Button = ({ text, buttonType = ButtonType.Submit, onSubmit, disabled = false, className, removeDefaultClasses, loading }: Props) => {
    return <button
        onClick={disabled || loading ? undefined : (e) => {
            e.preventDefault()
            onSubmit()
        }}
        disabled={disabled || loading}
        className={generateButtonClasses(buttonType, disabled, className, removeDefaultClasses)}
    >
        <>
            {loading ? <LoadingDots /> : text}
        </>
    </button>;
}

export default Button;
