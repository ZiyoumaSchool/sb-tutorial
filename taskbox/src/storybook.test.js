import initStoryshots from '@storybook/addon-storyshots';
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from '../.storybook/preview'; // path of your preview.js file

setGlobalConfig(globalStorybookConfig);

initStoryshots();