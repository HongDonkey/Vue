<template>
  <h2>{{ title }}</h2>
  <!-- 문자열에 대한 바인딩 -->
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "페이지 제목입니다.",
    },
    // props에는 부모 컴포넌트로 전달받은 데이터가 저장된다
    // props에 정의된 키는 저장될 데이터의 타입과 부모 컴포넌트로부커 데이터가 전달되지 않았을 때의 default를 정의함
  },
};
</script>
