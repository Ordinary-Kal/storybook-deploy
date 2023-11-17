import React from 'react';
import { FormControl, FormErrorMessage, Text } from '@chakra-ui/react';

const FormHelper = ({ children, errorText, errorTextProps, props }) => {
  const isShowErrorText = !!errorText;

  return (
    <FormControl isInvalid={isShowErrorText} {...props}>
      {children}
      {isShowErrorText && (
        <FormErrorMessage {...errorTextProps}>
          <Text textStyle={errorTextProps?.textStyle}>{errorText}</Text>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormHelper;
