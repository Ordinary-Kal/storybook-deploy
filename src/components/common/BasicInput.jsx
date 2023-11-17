import { Input } from '@chakra-ui/react';
import { BasicInputHelper } from './BasicInputHelper';

export function BasicInput({
  label,
  labelProps,
  placeholder,
  errorTextProps,
  errorText,
  isDisabled,
  InputProps,
  ...props
}) {
  return (
    <BasicInputHelper
      label={label}
      labelProps={labelProps}
      errorText={errorText}
      errorTextProps={errorTextProps}
      {...props}>
      <Input
        w='964px'
        h='48px'
        placeholder={placeholder}
        isDisabled={isDisabled}
        {...InputProps}
      />
    </BasicInputHelper>
  );
}
