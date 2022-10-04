import { Combobox, Input } from "@salesforce/design-system-react"
import React from "react"
import { FunctionComponent, useCallback, useEffect, useState } from "react"

interface IProps {
    disabled: boolean
    onChange: (e: any, label?: string, value?: string) => void
    label: string
    value: any
    type: string
    options?: any[]
}

const InputElement: FunctionComponent<IProps> = (props) => {
    const [inputValue, setInputValue] = useState<string>(props.value)
    const [selection, setSelection] = useState<any>([{label: props.value}])

    useEffect(() => {
        if (typeof props.value === 'boolean')
            setSelection([{label: props.value + ''}])
        else
            setSelection([{label: props.value}])
    }, [props.value])

    const getComboBox = useCallback((options: any) => {
        return <Combobox
                    events={{
                        onSelect: (event: any, data: any) => {
                            props.onChange(event, props.label, data.selection[0].label)
                            setInputValue('')
                            setSelection(data.selection)
                        }
                    }}
                    labels={{
                        label: props.label
                    }}
                    value={inputValue}
                    selection={selection}
                    align="left"
                    iconCategory="utility"
                    iconName="down"
                    length="10"
                    iconPosition="right"
                    variant="readonly"
                    options={options}/>
    }, [props.label, inputValue, selection])

    return <div key={props.label}>
        {props.type === 'picklist' && 
            getComboBox(props.options) || 
        props.type === 'boolean' && 
            getComboBox([{label: 'true'}, {label: 'false'}]) ||
        <Input type="text" value={props.value} label={props.label} disabled={props.disabled} onChange={(e: any) => props.onChange(e)}></Input>}
    </div>
}

export default InputElement