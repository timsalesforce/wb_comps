import { FunctionComponent, useMemo } from "react";
import styled from "styled-components";
import React from "react";
import { Button } from "@mui/material";
import { H3 } from "../elements";

const Header = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    padding: 1em;
    align-items: flex-end;
`

const SessionDetail = styled.div`
    padding: 0 1em;
    font-size: small;
`

interface Props {
    sid: string
    sfdcBaseUrl: string
    signout?: () => Promise<any>
}
const WorkbenchHeader: FunctionComponent<Props> = (props) => {

    const orgId = useMemo(() => {
        return props.sid?.substring(0, 15)
    }, [props.sid])
    
    return <div>
        <div>
            <Header>
                <H3>Workbench App</H3>
            </Header>
            <Header>
                <SessionDetail>{props.sid && <div>OrgId: {orgId}</div>}</SessionDetail>
                <SessionDetail>{props.sid && <div>Url: {props.sfdcBaseUrl}</div>}</SessionDetail>
                <SessionDetail>{props.sid && props.signout && <Button onClick={props.signout}>Signout</Button>}</SessionDetail>
            </Header>
        </div>
    </div>
}

export default WorkbenchHeader