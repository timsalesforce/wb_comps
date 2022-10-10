// Deploy.stories.tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Deploy from './Deploy';
import { DeployPayload, DeployStatusPayload } from '../types';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Deploy',
  component: Deploy,
} as ComponentMeta<typeof Deploy>;

export const Primary: ComponentStory<typeof Deploy> = () => <Deploy setErrorMessage={function (message: string): void {
    throw new Error('Function not implemented.');
} } setDescribeResponse={function (response: any): void {
    throw new Error('Function not implemented.');
} } setStatus={function (staus?: string | undefined): void {
    throw new Error('Function not implemented.');
} } setObjectName={function (name: string): void {
    throw new Error('Function not implemented.');
} } sendDeploy={function (payload: DeployPayload): Promise<any> {
    throw new Error('Function not implemented.');
} } sendDeployStatus={function (payload: DeployStatusPayload): Promise<any> {
    throw new Error('Function not implemented.');
} } sid={''} soapEndpoint={''}>Button</Deploy>;