import { Box, Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

const HomeButton = ({
  variant,
  width = '318px',
  isDisabled,
  onClick,
  ...props
}) => {
  return (
    <StyledBox style={{ width }}>
      <StyledButton
        variant={variant}
        isDisabled={isDisabled}
        onClick={onClick}
        {...props}>
        <Text textStyle='Subtitle_R'>체험해보기</Text>
      </StyledButton>
    </StyledBox>
  );
};

export default HomeButton;

const StyledBox = styled(Box)`
  height: 62px;
  border: 1px solid #000;

  &:hover {
    border: 1px solid #0031d2;
  }

  &:active {
    border: 1px solid #002089;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  position: relative;
  top: -8px;
  right: 8px;
`;
