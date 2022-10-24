import { DeployOptions } from "./DeployOptions";

/** deploy */
export interface Deploy {
    /** xsd:base64Binary */
    ZipFile?: string;
    /** DeployOptions */
    DeployOptions?: DeployOptions;
}
