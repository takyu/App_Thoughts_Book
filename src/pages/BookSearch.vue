<template>
  <div>
    <v-row class="my-2">
      <v-col cols="12">
        <v-text-field
          label="本のタイトルを検索"
          v-model="keyword"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-btn
        class="me-5"
        rounded="pill"
        color="success"
        size="large"
        @click="search(keyword)"
      >
        検索する</v-btn
      >
      <v-btn rounded="pill" color="warning" size="large" to="/"
        >一覧に戻る</v-btn
      >
    </v-row>
    <v-row class="my-5">
      <v-col
        cols="12"
        md="6"
        v-for="(book, index) in searchResults"
        :key="book.index"
      >
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              <v-card-actions>
                <v-btn
                  variant="outlined"
                  icon
                  color="secondary"
                  @click="addBookList(index)"
                  ><v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-btn>

                <v-btn
                  :icon="book.isShow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="book.isShow = !book.isShow"
                ></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="book.isShow">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{ book.description }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BookSearch",
  data() {
    return {
      keyword: "",
      searchResults: [],
    };
  },
  methods: {
    async search(keyword) {
      this.searchResults = [];

      const baseUrl = "https://www.googleapis.com/books/v1/volumes?";
      const params = {
        q: `intitle:${keyword}`,
        maxResults: 40,
      };
      const queryParams = new URLSearchParams(params);
      const response = await fetch(baseUrl + queryParams).then((response) =>
        response.json()
      );

      if (!response.items) {
        console.log("検索しましたが、見つかりませんでした。");
        return;
      }

      for (let book of response.items) {
        let title = book.volumeInfo.title;
        let img = book.volumeInfo.imageLinks;
        let description = book.volumeInfo.description;

        this.searchResults.push({
          title: title ?? "",
          image: img ? img.thumbnail : "",
          description: description ? description.slice(0, 100) : "",
          isShow: false,
        });
      }
    },
    addBookList(index) {
      this.$emit("addBookList", this.searchResults[index]);
    },
  },
};
</script>
