import { FunctionComponent } from 'react';
interface Props {
    signin: (sid: string, baseUrl: string, apiVersion: string) => Promise<any>;
    login: (username: string, password: string, baseUrl: string, apiVersion: string) => Promise<any>;
}
declare const Signin: FunctionComponent<Props>;
export default Signin;
