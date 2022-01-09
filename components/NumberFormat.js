import React from 'react';
import NumberFormat from 'react-number-format';

export function ReactNativeNumberFormat({ value }) {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'€'}
      renderText={formattedValue => <Text>{formattedValue}</Text>} 
    />
  );
}