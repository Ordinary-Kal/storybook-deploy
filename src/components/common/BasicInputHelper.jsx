import LabelFormHelper from './LabelFormHelper';

export function BasicInputHelper({
  label,
  labelProps,
  children,
  errorText,
  errorTextProps,
  ...props
}) {
  return (
    <LabelFormHelper
      label={label}
      labelProps={labelProps}
      errorText={errorText}
      errorTextProps={errorTextProps}
      {...props}>
      {children}
    </LabelFormHelper>
  );
}
