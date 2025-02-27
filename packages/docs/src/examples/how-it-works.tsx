import React from 'react';
import { readFileSync } from 'fs';
import { CodeBlock } from '@compiled/website-ui';

const before = readFileSync(
  __dirname + '../../../../examples/src/styled.tsx',
  'utf-8'
);
const after = readFileSync(
  __dirname + '../../../../examples/dist/styled.jsx',
  'utf-8'
);

export const BeforeHowItWorks = () => (
  <CodeBlock language="jsx">{before}</CodeBlock>
);

export const AfterHowItWorks = () => (
  <CodeBlock language="jsx">{after}</CodeBlock>
);
