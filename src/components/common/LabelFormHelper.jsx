import React from 'react';
import { FormControl, FormErrorMessage, Text } from '@chakra-ui/react';

const LabelFormHelper = ({
  label,
  labelProps,
  children,
  errorText,
  errorTextProps,
  props,
}) => {
  const isShowErrorText = !!errorText;

  return (
    <FormControl isInvalid={isShowErrorText} {...props}>
      <Text textStyle={labelProps?.textStyle} mb={labelProps?.mb}>
        {label}
      </Text>
      {children}
      {isShowErrorText && (
        <FormErrorMessage {...errorTextProps}>
          <Text textStyle={errorTextProps?.textStyle}>{errorText}</Text>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default LabelFormHelper;
