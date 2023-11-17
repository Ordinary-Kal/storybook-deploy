// 실제 프로젝트 시작시 삭제 예정
/*
  1. MSW 기본 예제
  2. 기본 전역 스타일 적용된 컴포넌트 확인 -> 스토리북으로 다시 작성 예정
*/
'use client';

import { Button, Input, Text, Textarea } from '@chakra-ui/react';

const getDataPosts = async () => {
  const res = await fetch('/msw/api/posts');

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  return [];
};

export default function Home() {
  // msw /msw/api/posts
  const handleButtonMswClick = async () => {
    const result = await getDataPosts();

    console.info(result);
  };

  return (
    <>
      <Text textStyle='Subtitle_B'>데이터 정보</Text>
      <Button onClick={handleButtonMswClick}>MSW</Button>
      <Button variant='primaryOutline'>Outline</Button>
      <Button isDisabled={true} variant='primaryOutline'>
        Outline
      </Button>
      <Button variant='primaryFilled' size='sm'>
        Small Primary
      </Button>
      <Button variant='primaryFilled'>Default Primary</Button>
      <Input placeholder='주제를 입력해주세요.' />
      <Input placeholder='주제를 입력해주세요.' isInvalid />
      <Textarea placeholder='주제를 입력해주세요.' mt='30px' />
      <Textarea placeholder='주제를 입력해주세요.' mt='30px' isInvalid />
    </>
  );
}
