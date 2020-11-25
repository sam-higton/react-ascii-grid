import React from 'react';

import AsciiGrid from './AsciiGrid';

export default {
    title: 'AsciiGrid',
    component: AsciiGrid,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  const Template = (args) => <AsciiGrid />;
  
  export const Basic = Template.bind({});