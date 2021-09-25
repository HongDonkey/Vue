<template>
  <child-component @send-message="sendMessage" />
</template>
<script>
import ChildComponent from "./ChildComponent";
export default {
  components: { ChildComponent },
  methods: {
    SendMessage(data) {
      console.log(data);
    },
  },
};
</script>
