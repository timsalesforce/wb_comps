import { FunctionComponent, useMemo } from "react";
import styled from "styled-components";
import { BrandBand, Button } from '@salesforce/design-system-react'
import React from "react";

const Header = styled.div`
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
        <BrandBand
				id="brand-band-lightning-blue"
				className="slds-p-around_small"
				theme="lightning-blue"
			>
            <Header className="slds-box slds-theme_default">
                Workbench App
                {props.sid && <div>OrgId: {orgId}</div>}
                {props.sid && <div>Url: {props.sfdcBaseUrl}</div>}
                {props.sid && <Button onClick={props.signout} label="Sign Out"/>}
            </Header>
        </BrandBand>
    </div>
}

export default WorkbenchHeader