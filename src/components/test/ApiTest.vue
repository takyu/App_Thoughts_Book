<template>
  <v-container>
    <h2>本を検索</h2>
    <div class="my-5">
      <v-text-field
        label="keyword"
        placeholder="Placeholder"
        v-model="keyword"
      ></v-text-field>
      <br />
      <v-btn :rounded="0" color="primary" @click="search(keyword)">
        検索する
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      searchResults: [],
    };
  },
  methods: {
    async search(keyword) {
      this.searchResults = [];

      // Query String
      const baseUrl = "https://www.googleapis.com/books/v1/volumes?";

      // params
      const params = {
        q: `intitle:${keyword}`,
        maxResults: 40,
      };

      const queryParams = new URLSearchParams(params);

      // check
      // console.log(baseUrl + queryParams);

      // get json file with fetch
      const response = await fetch(baseUrl + queryParams).then((response) =>
        response.json()
      );

      // check
      console.log(response);

      if (!response.items) {
        console.log("検索しましたが、見つかりませんでした。");
        return;
      }

      // push array
      for (let book of response.items) {
        // check
        // console.log(response.items);
        // console.log(book);

        // get title
        let title = book.volumeInfo.title;

        // get image links
        let img = book.volumeInfo.imageLinks;

        // get description
        let description = book.volumeInfo.description;

        this.searchResults.push({
          title: title ?? "",
          image: img ? img.thumbnail : "",
          description: description ? description.slice(0, 40) : "",
        });
      }
    },
  },
};
</script>
