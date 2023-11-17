import React from 'react';
import FormHelper from '../common/FormHelper';
import { Box, Button, Input } from '@chakra-ui/react';
import {
  MdCloseIcon,
  MdOutlineDragIndicatorIcon,
} from '../../assets/icons/MyIcons';
import styled from '@emotion/styled';

const TabContent = ({
  isMainHeader = true,
  errorText,
  errorTextProps,
  onChange,
  onDelete,
  ...props
}) => {
  const inputStyleObj = isMainHeader
    ? {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
        letterSpacing: '-0.64px',
      }
    : {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '-0.56px',
      };

  return (
    <FormHelper
      errorText={errorText}
      errorTextProps={errorTextProps}
      {...props}>
      <StyledContainer
        style={{
          background: errorText && 'rgba(255, 22, 0, 0.03)',
        }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '16px',
          }}>
          <MdOutlineDragIndicatorIcon width='24px' height='24px' />
        </Box>
        <StyledInput
          value='1. 인공지능 개요'
          style={inputStyleObj}
          onChange={onChange}
        />
        <Button
          variant='unstyled'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '11px',
          }}
          onClick={onDelete}>
          <MdCloseIcon width='24px' height='24px' />
        </Button>
      </StyledContainer>
    </FormHelper>
  );
};

export default TabContent;

const StyledContainer = styled(Box)`
  height: 44px;
  max-width: 976px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
`;

const StyledInput = styled(Input)`
  height: auto;
  border: none;
  padding: 0;
  background: none;

  &:focus {
    border: none;
  }
`;
