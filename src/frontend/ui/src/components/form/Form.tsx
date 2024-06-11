import Button from "./button/Button";

interface Props {
    readonly children: JSX.Element;
    readonly submitText: string;
    readonly onSubmit: () => void | Promise<void>;
    readonly submitDisabled?: boolean;
    readonly loading?: boolean;
}

const Form = ({ children, submitText, onSubmit, submitDisabled, loading }: Props) => {
    return <form className="grid grid-cols-12 gap-x-4 gap-y-2">
        {children}
        <Button
            text={submitText}
            onSubmit={!submitDisabled && !loading ? onSubmit : null}
            disabled={submitDisabled || loading}
            className="sm:col-span-2"
            loading={loading}
        />
    </form>;
}

export default Form;
