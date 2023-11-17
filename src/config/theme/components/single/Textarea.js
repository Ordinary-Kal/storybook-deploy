import { defineStyle } from '@chakra-ui/react';

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    border: '1px solid',
    borderColor: `${c}`,
    borderRadius: '8px',
    p: '12px 0 8px 16px',
    textStyle: 'Text_R',
    resize: 'none',
    bg: 'white',
    // transition: 'all 0.3s ease-in-out',
    _placeholder: { color: 'rgba(0, 0, 0, 0.36)' },
    _active: {
      borderColor: 'primary.primary',
      borderWidth: '2px',
      _placeholder: { color: 'gray.600' },
    },
    _disabled: {
      bg: 'gray.200',
    },
    _invalid: {
      borderColor: 'danger.primary',
      borderWidth: '2px',
    },
    _focus: {
      _invalid: {
        borderColor: 'black',
      },
      borderColor: 'primary.primary',
      borderWidth: '2px',
    },
    _focusVisible: {
      zIndex: '0',
      boxShadow: 'none',
      borderColor: 'inherit',
    },
  };
});

const unstyled = defineStyle({
  _disabled: {
    opacity: 1,
    cursor: 'not-allowed',
  },
});
const variants = {
  outline: variantOutline,
  unstyled: unstyled,
};

export const Textarea = {
  baseStyle: {},
  defaultProps: {
    colorScheme: 'primary.0',
    variant: 'outline',
  },
  sizes: {},
  variants,
};
