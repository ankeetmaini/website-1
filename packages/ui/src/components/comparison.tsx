import React from 'react';
import '@compiled/css-in-js';
import { HorizontalStack } from './stack';
import { CodeBlock } from './code-block';

interface ComparisonProps {
  before: string;
  after: string;
}

export const Comparison = (props: ComparisonProps) => {
  return (
    <HorizontalStack
      gap={1}
      css={{
        display: 'flex',
        alignItems: 'stretch',
        '> *': {
          flexGrow: 1,
          flexShrink: 1,
        },
      }}>
      <CodeBlock>{props.before}</CodeBlock>
      <CodeBlock>{props.after}</CodeBlock>
    </HorizontalStack>
  );
};
