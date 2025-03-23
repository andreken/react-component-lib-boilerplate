import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import AlertBanner from '../AlertBanner';

export default {
  title: 'UI Components/AlertBanner',
  component: AlertBanner,
} as Meta<typeof AlertBanner>;

const Template: StoryFn<typeof AlertBanner> = args => <AlertBanner {...args} />;

export const BasicAlert = Template.bind({});
BasicAlert.args = {
  variant: 'error',
  title: 'Alert banner title',
  message: 'Alert banner description',
};

export const AlertWithStyleType = () => (
  <>
    <AlertBanner
      variant="success"
      title="Success!"
      message="Your operation was successful."
    />
    <AlertBanner
      variant="warning"
      title="Warning!"
      message="Please be cautious."
    />
    <AlertBanner variant="error" title="Error!" message="An error occurred." />
  </>
);
