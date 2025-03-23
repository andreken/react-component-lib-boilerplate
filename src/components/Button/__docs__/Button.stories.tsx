import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Button from '../Button';

export default {
  title: 'UI Components/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  text: 'Click Me',
};

export const ButtonWithOnClick = Template.bind({});
ButtonWithOnClick.args = {
  text: 'Click Me',
  onClick: () => alert('Button clicked!'),
};

export const ButtonWithVariant = () => (
  <>
    <Button text="Primary Button" variant="primary" />
    <Button text="Secondary Button" variant="secondary" />
    <Button text="Ghost Button" variant="ghost" />
  </>
);

export const DisabledButtonWithVariant = () => (
  <>
    <Button text="Primary Button" variant="primary" disabled />
    <Button text="Secondary Button" variant="secondary" disabled />
    <Button text="Ghost Button" variant="ghost" disabled />
  </>
);

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  text: 'Go to Google',
  cta: { href: 'https://www.google.com', target: '_blank' },
};

export const ButtonWithSubmitType = Template.bind({});
ButtonWithSubmitType.args = {
  text: 'Submit Form',
  type: 'submit',
};
