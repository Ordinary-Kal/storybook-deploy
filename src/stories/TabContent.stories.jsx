import TabContent from '../components/Contents/TabContent';

const meta = {
  title: 'Common/TabContent',
  tags: ['autodocs'],
  argTypes: {
    isMainHeader: { control: 'boolean' },
    onChange: { action: 'onChange' },
    onDelete: { action: 'onDelete' },
  },
};

export default meta;

export const Primary = { render: (args) => <TabContent {...args} /> };

export const MainHeading = {
  render: (args) => <TabContent {...args} isMainHeader={true} />,
};

export const SubHeading = {
  render: (args) => <TabContent {...args} isMainHeader={false} />,
};

export const ErrorHeading = {
  render: (args) => (
    <TabContent
      {...args}
      errorText='최소 1개의 소제목을 포함해주세요.'
      errorTextProps={{
        textStyle: 'Text_small',
        color: 'danger.primary',
      }}
    />
  ),
};
