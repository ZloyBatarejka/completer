import * as React from "react";
import 'src/styles/floatingButton.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    callback: () => void
}

/**
 * Button.
 * @param {ButtonProps} props button's props
 * @returns {React.ReactElement<ButtonProps>} Button.
 */

export default function Button(props: ButtonProps): React.ReactElement<ButtonProps> {
    const { label, callback } = props;
    return (
        // eslint-disable-next-line
        <button className="Button" onClick={callback}> {label} </button>
    );
}