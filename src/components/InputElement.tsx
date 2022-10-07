import { SelectOption } from "@mui/base"
import FormControl from "@mui/material/FormControl/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel"
import Input from "@mui/material/Input/Input"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import Select from "@mui/material/Select/Select"
import React from "react"
import { FunctionComponent, useCallback, useEffect, useState } from "react"

interface IProps {
    disabled: boolean
    onChange: (e: any, label?: string, value?: string) => void
    label: string
    value: any
    type: string
    options?: SelectOption<string>[]
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

    const getComboBox = useCallback((options: SelectOption<string>[]) => {
        return <FormControl>
                  <Select
                    onChange={(event: any) => {
                            props.onChange(event, props.label, event.target.value)
                            setInputValue('')
                        }
                    }
                    label={props.label}
                    value={inputValue}>
                        {options.map(o => <MenuItem value={o.value}>{o.label}</MenuItem>)}
                    </Select>
                </FormControl>
    }, [props.label, inputValue, selection])

    return <div key={props.label}>
        {props.type === 'picklist' && 
            getComboBox(props.options || [{value: '', label: ''}]) || 
        props.type === 'boolean' && 
            getComboBox([{value: "true", label: 'true'}, {value: "true", label: 'false'}]) ||
        <FormControlLabel control={<Input></Input>} value={props.value} label={props.label} disabled={props.disabled} onChange={(e: any) => props.onChange(e)}/>}
    </div>
}

export default InputElement