import { Checkbox, InputLabel, TextField } from "@mui/material"
import FormControl from "@mui/material/FormControl/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select/Select"
import React, { ChangeEvent } from "react"
import { FunctionComponent, useCallback, useEffect, useState } from "react"

interface IProps {
    disabled: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>, fieldName: string) => void
    label: string
    value: any
    type: string
    options?: string[]
}

const InputElement: FunctionComponent<IProps> = (props) => {
    const [selection, setSelection] = useState<any>([{label: props.value}])

    useEffect(() => {
        if (typeof props.value === 'boolean')
            setSelection([{label: props.value + ''}])
        else
            setSelection([{label: props.value}])
    }, [props.value])

    const getComboBox = useCallback((options: string[]) => {
        return <FormControl sx={{ m: 0, minWidth: 200 }}>
                  <InputLabel>{props.label}</InputLabel>
                  <Select
                    onChange={(event: SelectChangeEvent) => {
                            props.onChange(event as ChangeEvent<HTMLInputElement>, props.label)
                        }
                    }
                    value={props.value}
                    label={props.label}>
                        {options.map(o => <MenuItem value={o}>{o}</MenuItem>)}
                    </Select>
                </FormControl>
    }, [props.label, selection])

    return <div key={props.label} style={{padding: '1em'}}>
        {props.type === 'picklist' && 
            getComboBox(props.options || ['']) || 
        props.type === 'boolean' && 
            <FormControlLabel
                control={<Checkbox></Checkbox>}
                label={props.label}
                disabled={props.disabled}
            /> ||
        <FormControl fullWidth>
            <TextField fullWidth
                value={props.value} 
                label={props.label} 
                disabled={props.disabled} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e, props.label)}/>
        </FormControl>}
    </div>
}

export default InputElement