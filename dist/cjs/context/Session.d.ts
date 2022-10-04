import React, { FunctionComponent } from 'react';
import { SfdcApi } from '../types';
interface SessionContext {
    sid?: string;
    sfdcBaseUrl: string;
    objects: string[];
    apiVersion: string;
    soapEndpoint: string;
    api: SfdcApi;
    setSid: React.Dispatch<string>;
    setApiVersion: React.Dispatch<string>;
    setObjects: React.Dispatch<string[]>;
    setSfdcBaseUrl: React.Dispatch<string>;
    setSoapEndpoint: React.Dispatch<string>;
    signin: (sid: string, baseUrl: string, apiVersion: string) => Promise<any>;
    login: (username: string, password: string, baseUrl: string, apiVersion: string) => Promise<any>;
    signout: () => Promise<any>;
    fetchObjects: () => Promise<any>;
    setApi: React.Dispatch<any>;
}
export declare const Context: React.Context<SessionContext>;
export declare const Provider: FunctionComponent<{
    children: any[];
}>;
export {};
