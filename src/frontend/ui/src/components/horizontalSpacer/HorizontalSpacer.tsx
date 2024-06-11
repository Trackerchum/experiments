interface Props {
    size?: "xs" | "sm" | "lg" | "xl"
}

const HorizontalSpacer = ({ size }: Props) => {
    let className = "h-6";
    if (size) {
        switch (size) {
            case "xs":
                className = "h-2";
                break;
            case "sm":
                className = "h-4";
                break;
            case "lg":
                className = "h-8";
                break;
            case "xl":
                className = "h-16";
                break;
            default:
                break;
        }
    }

    return <div className={className} />
}

export default HorizontalSpacer;
