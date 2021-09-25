<template>
  <div>
    <PageTitle title="부모컴포넌트에서 자식컴포넌트로" />
    <!-- HTML에서는 import한 컴포넌트 이름을 이용해서 태그를 만들면 됨 -->
  </div>
</template>
<script>
import PageTitle from "../components/PageTitle"; // 컴포넌트 import
export default {
  components: { PageTitle }, // 현재 컴포넌트에서 사용할 컨포넌트 등록
};
</script>
