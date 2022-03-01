<template>
  <div id="search-section">
    <input type="text" name="" id="" v-model="keyword" />
    <br />
    <button @click="search(keyword)">検索する</button>
  </div>
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
          description: description ? description.slice(0, 10) : "",
        });
      }
    },
  },
};
</script>
