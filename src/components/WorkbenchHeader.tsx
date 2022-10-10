import { FunctionComponent, useMemo } from "react";
import styled from "styled-components";
import React from "react";
import { Button } from "@mui/material";

const Header = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: space-around;
    padding: 1em; 
`

interface Props {
    sid: string
    sfdcBaseUrl: string
    signout: () => Promise<any>
}
const WorkbenchHeader: FunctionComponent<Props> = (props) => {

    const orgId = useMemo(() => {
        return props.sid?.substring(0, 15)
    }, [props.sid])
    
    return <div>
        <div>
            <Header className="slds-box slds-theme_default">
                Workbench App
                {props.sid && <div>OrgId: {orgId}</div>}
                {props.sid && <div>Url: {props.sfdcBaseUrl}</div>}
                {props.sid && <Button onClick={props.signout}>Signout</Button>}
            </Header>
        </div>
    </div>
}

export default WorkbenchHeader