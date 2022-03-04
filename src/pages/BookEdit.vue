<template>
  <div>
    {{ book.title }}
  </div>
</template>

<script>
export default {
  name: "BookEdit",
  props: {
    books: Array,
  },
  data() {
    return {
      book: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // access to component public instance via `vm`
      vm.$nextTick(() => {
        vm.book = vm.books[vm.$route.params.id];
        console.log(vm.book);
      });
    });
  },
};
</script>
