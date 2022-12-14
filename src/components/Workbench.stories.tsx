// Deploy.stories.tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Workbench from './Workbench';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Workbench',
  component: Workbench,
} as ComponentMeta<typeof Workbench>;

export const Primary: ComponentStory<typeof Workbench> = () => <Workbench apiType="stub" sid={'foobarsid'} apiVersion={'55.0'} sfdcBaseUrl={'https://na162.salesforce.com'}></Workbench>
export const NotLoggedIn: ComponentStory<typeof Workbench> = () => <Workbench apiType="stub" sid={''} apiVersion={'55.0'} sfdcBaseUrl={''}/>