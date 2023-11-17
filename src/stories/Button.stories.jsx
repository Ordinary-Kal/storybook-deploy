import { Button } from '@chakra-ui/react';
import { MdRefreshIcon } from '@/assets/icons/MyIcons';

const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primaryFilled', 'primaryOutline'],
      control: { type: 'radio' },
    },
    isDisabled: {
      control: 'boolean',
    },
    size: {
      options: ['sm', 'lg'],
      control: { type: 'radio' },
    },
    width: { control: { type: 'number' } },
    onClick: { action: 'onClick' },
  },
};

export default meta;

export const Primary = {
  render: (args) => <Button {...args}>Button</Button>,
};

export const PrimaryFilled = {
  render: (args) => (
    <Button {...args} width='240px'>
      다음
    </Button>
  ),
};

export const PrimaryOutline = {
  render: (args) => (
    <Button {...args} width='240px' variant='primaryOutline'>
      모두 지우기
    </Button>
  ),
};

export const PrimaryOutlineSmall = {
  render: (args) => (
    <Button {...args} variant='primaryOutline' size='sm' width='116px'>
      다시 생성
      <MdRefreshIcon width='20px' height='20px' />
    </Button>
  ),
};
