import HomeButton from '../components/common/HomeButton';

const meta = {
  title: 'Common/HomeButton',
  component: HomeButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primaryFilled', 'primaryOutline'],
      control: { type: 'radio' },
    },
    isDisabled: {
      control: 'boolean',
    },
    width: { control: 'number' },
    onClick: { action: 'onClick' },
  },
};

export default meta;

export const Primary = {
  render: (args) => <HomeButton {...args} />,
};
