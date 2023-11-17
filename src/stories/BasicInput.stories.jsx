import { BasicInput } from '../components/common/BasicInput';

const meta = {
  title: 'Common/BasicInput',
  component: BasicInput,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    onChange: { action: 'onChange' },
  },
};

export default meta;

export const PrimaryTextInput = {
  render: (args) => {
    return (
      <BasicInput
        {...args}
        placeholder='주제를 입력해주세요.'
        label='주제'
        labelProps={{
          textStyle: 'Text_B',
          mb: '12px',
        }}
        is
      />
    );
  },
};

export const ErrorTextInput = {
  render: (args) => {
    return (
      <BasicInput
        {...args}
        placeholder='주제를 입력해주세요.'
        errorText='글자수를 초과했습니다.'
        label='주제'
        labelProps={{
          textStyle: 'Text_B',
          mb: '12px',
        }}
        errorTextProps={{
          textStyle: 'Text_small',
          color: 'danger.primary',
        }}
      />
    );
  },
};
