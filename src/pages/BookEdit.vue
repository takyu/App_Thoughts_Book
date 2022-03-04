<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title class="ps-2 underline">
                タイトル：{{ book.title }}
              </v-card-title>
              <div class="my-2 ms-2">
                <span>読んだ日：</span>
                <datepicker v-model="picked" />
              </div>
              <div>
                <span class="ms-2">感想：</span>
                <v-textarea
                  class="mx-2"
                  filled
                  auto-grow
                  label="感想欄"
                  rows="4"
                  row-height="30"
                  shaped
                  v-model="book.memo"
                ></v-textarea>
              </div>
              <v-card-actions>
                <v-btn color="success" to="/">一覧に戻る</v-btn>
                <v-btn color="info">保存する</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Datepicker from "@/../node_modules/vue3-datepicker/src/datepicker/Datepicker";
import { ref } from "vue";

export default {
  name: "BookEdit",

  components: {
    Datepicker,
  },

  props: {
    books: Array,
  },
  data() {
    return {
      book: "",
      picked: ref(new Date()),
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // access to component public instance via `vm`
      vm.$nextTick(() => {
        vm.book = vm.books[vm.$route.params.id];
      });
    });
  },
};
</script>
