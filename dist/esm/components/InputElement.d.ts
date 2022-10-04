import { FunctionComponent } from "react";
interface IProps {
    disabled: boolean;
    onChange: (e: any, label?: string, value?: string) => void;
    label: string;
    value: any;
    type: string;
    options?: any[];
}
declare const InputElement: FunctionComponent<IProps>;
export default InputElement;
