import { defineStyle } from '@chakra-ui/styled-system';

/**
 * Light & Dark mode
 * @example
 *  const bg = mode(`gray.100`, `whiteAlpha.200`)(props)
 * @see Example https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/button.ts
 */

const variantPrimaryFilled = defineStyle({
  h: '48px',
  bg: `primary.primary`,
  color: `white`,
  transition: 'background-color 0.2s ease-in-out',

  // textStyle : Text_B
  fontSize: { base: '16px', sm: '16px' },
  fontWeight: '700',
  lineHeight: '24px',

  _hover: {
    bg: `primary.4`,
    _disabled: {
      bg: `gray.200`,
    },
  },

  _active: {
    bg: `primary.5`,
  },

  _disabled: {
    bg: `gray.200`,
    color: 'gray.500',
    opacity: 1,
  },
});

const variantPrimaryOutline = defineStyle({
  h: '48px',
  border: '1px solid',
  borderColor: 'gray.600',
  color: `black`,
  transition: 'all 0.2s ease-in-out',

  // textStyle : Text_B
  fontSize: { base: '16px', sm: '16px' },
  fontWeight: '700',
  lineHeight: '24px',

  _hover: {
    borderColor: 'primary.primary',
    _disabled: {
      borderColor: 'gray.200',
      color: 'gray.500',
    },
  },

  _active: {
    borderColor: 'primary.5',
  },

  _disabled: {
    borderColor: 'gray.200',
    color: 'gray.500',
  },
});

const variantUnstyled = defineStyle({
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: '0',
  p: '0',
  minW: '0',
  minH: '0',
  height: '100%',
});

const variants = {
  primaryFilled: variantPrimaryFilled,
  primaryOutline: variantPrimaryOutline,
  unstyled: variantUnstyled,
};

const baseStyle = defineStyle({
  w: 'fit-content',
  h: 'fit-content',
  borderRadius: 'none',
  _focus: { boxShadow: 'none' },
});

const sizes = {
  lg: defineStyle({
    px: '40px',
    py: '12px',
  }),
  sm: defineStyle({
    px: '10px',
    py: '16px',
  }),
};

export const Button = {
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'primaryFilled',
    size: 'lg',
    colorScheme: 'primary',
  },
};
