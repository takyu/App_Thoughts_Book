<template>
  <div>
    <v-row class="my-5">
      <v-btn
        class="me-5"
        color="success"
        rounded="pill"
        size="large"
        to="/search"
        >本を検索する</v-btn
      >
      <v-btn
        class="ms-5"
        color="error"
        rounded="pill"
        size="large"
        @click="deleteLocalStorage"
        >本一覧を削除する</v-btn
      >
    </v-row>
    <v-row class="my-5">
      <v-col cols="12" sm="6" v-for="book in books" :key="book.id">
        <v-card>
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col col="8">
              <v-card-title class="mb-3">{{ book.title }}</v-card-title>
              <div class="ms-4">
                <span>読んだ日：</span>
                {{ displayDate(book.readDate) }}
              </div>
              <div class="ms-4">
                <span>感想：</span>
                {{ book.memo }}
              </div>
              <v-spacer></v-spacer>
              <v-card-actions class="mt-5">
                <v-btn
                  :to="{ name: 'BookEdit', params: { id: book.id } }"
                  variant="outlined"
                  size="large"
                  icon
                  color="info"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    books: Array,
  },
  methods: {
    formatDate(date) {
      let y = date.getFullYear();
      let m = ("00" + (date.getMonth() + 1)).slice(-2);
      let d = ("00" + date.getDate()).slice(-2);
      return y + "-" + m + "-" + d;
    },
    displayDate(picked) {
      return this.formatDate(new Date(picked));
    },
    deleteLocalStorage() {
      this.$emit("deleteLocalStorage");
    },
  },
};
</script>
