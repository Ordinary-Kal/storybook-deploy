export const variants = {
  outline: (props) => {
    const { colorScheme: c } = props;

    return {
      field: {
        h: '48px',
        border: '1px solid',
        borderColor: `${c}`,
        borderRadius: '6px',
        p: '0 16px',
        bg: 'white',
        textStyle: 'Text_R',
        // transition: 'all 0.3s ease-in-out',
        _placeholder: { color: 'gray.400', textStyle: 'Text_R' },
        _disabled: {
          bg: 'gray.200',
        },
        _active: {
          border: '2px solid',
          borderColor: 'primary.primary',
          _placeholder: { color: 'gray.600' },
        },
        _invalid: {
          borderColor: 'danger.primary',
          borderWidth: '2px',
        },
        _focus: {
          _invalid: {
            borderColor: 'danger ',
          },
          border: '2px solid',
          borderColor: 'primary.primary',
        },
        _focusVisible: {
          boxShadow: 'none',
          borderColor: 'inherit',
          zIndex: 0,
        },
      },
    };
  },

  unstyled: {
    field: {
      bg: 'transparent',
      px: 0,
      height: 'auto',
    },
    addon: {
      bg: 'transparent',
      px: 0,
      height: 'auto',
    },
  },
};
