import { TextInput } from '../components/common/TextInput';

const meta = {
  title: 'Common/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    onChange: { action: 'onChange' },
  },
};

export default meta;

export const PrimaryTextarea = {
  render: (args) => {
    return (
      <TextInput
        {...args}
        placeholder='내용을 입력해주세요.'
        label='주제'
        labelProps={{
          textStyle: 'Text_B',
          mb: '12px',
        }}
      />
    );
  },
};

export const ErrorTextarea = {
  render: (args) => {
    return (
      <TextInput
        {...args}
        placeholder='내용을 입력해주세요.'
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
