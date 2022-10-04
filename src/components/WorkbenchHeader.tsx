import { SessionContext } from "context";
import { FunctionComponent, useContext, useMemo } from "react";
import styled from "styled-components";
import { BrandBand, Button } from '@salesforce/design-system-react'

const Header = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1em; 
`
const WorkbenchHeader: FunctionComponent = () => {
    const {sid, sfdcBaseUrl, signout} = useContext(SessionContext)

    const orgId = useMemo(() => {
        return sid?.substring(0, 15)
    }, [sid])
    
    return <div>
        <BrandBand
				id="brand-band-lightning-blue"
				className="slds-p-around_small"
				theme="lightning-blue"
			>
            <Header className="slds-box slds-theme_default">
                Workbench App
                {sid && <div>OrgId: {orgId}</div>}
                {sid && <div>Url: {sfdcBaseUrl}</div>}
                {sid && <Button onClick={signout} label="Sign Out"/>}
            </Header>
        </BrandBand>
    </div>
}

export default WorkbenchHeader