import { Textarea } from '@chakra-ui/react';
import { BasicInputHelper } from './BasicInputHelper';

export function TextInput({
  label,
  labelProps,
  placeholder,
  errorTextProps,
  errorText,
  InputProps,
  isDisabled,
  ...props
}) {
  return (
    <BasicInputHelper
      label={label}
      labelProps={labelProps}
      errorText={errorText}
      errorTextProps={errorTextProps}
      {...props}>
      <Textarea
        w='980px'
        h='64px'
        resize='vertical'
        isDisabled={isDisabled}
        placeholder={placeholder}
        {...InputProps}
      />
    </BasicInputHelper>
  );
}
