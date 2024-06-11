import { ButtonType } from "./ButtonType";

export const generateButtonClasses = (buttonType: ButtonType, disabled: boolean, className?: string, removeDefaultClasses = false): string => {
    let classNames = removeDefaultClasses ? "" : "rounded-md p-2 inline-flex items-center justify-center text-white font-semibold";
    if (className) {
        classNames += ` ${className}`;
    }
    if (disabled) {
        classNames += " cursor-not-allowed";
    }
    switch (buttonType) {
        case ButtonType.Submit:
            classNames += generateSubmitClasses(disabled);
            break;
        case ButtonType.Cancel:
            classNames += generateCancelClasses(disabled);
            break;
        default:
            console.warn(`Button type ${ButtonType[buttonType]} styles unhandled`);
            break;
    }
    return classNames;
}

const generateSubmitClasses = (disabled: boolean): string => {
    let classNames = " bg-green-500";
    if (disabled) {
        classNames += " opacity-40";
    }
    else {
        classNames += " hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
    }
    return classNames;
}

const generateCancelClasses = (disabled: boolean) => {
    let classNames = " bg-red-500";
    if (disabled) {
        classNames += " opacity-40";
    }
    else {
        classNames += " hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
    }
    return classNames;
}
