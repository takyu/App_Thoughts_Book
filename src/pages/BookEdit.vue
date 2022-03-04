<template>
  <div>
    {{ books }}
  </div>
</template>

<script>
export default {
  name: "BookEdit",
  props: {
    books: Array,
  },
};
</script>
