<template>
  <v-footer class="bg-grey-lighten-1 py-3">
    <v-row justify="center" no-gutters>
      <v-col class="text-center text-white" cols="12">
        {{ new Date().getFullYear() }} — <strong>&copy; Google Book API</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
