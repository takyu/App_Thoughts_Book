<template>
  <v-container>
    <h2>Books</h2>
    <div v-for="(book, n) in books" :key="n" class="my-5">
      <div>
        <span class="me-5">{{ book }}</span>
        <v-btn @click="removeBook(n)" rounded="lg" color="error">Remove</v-btn>
      </div>
    </div>
    <div class="my-5">
      <v-text-field
        label="bookname"
        placeholder="Placeholder"
        v-model="newBook"
      ></v-text-field>
      <v-btn @click="addBook" rounded="lg" color="primary"> Add Book </v-btn>
    </div>
  </v-container>
</template>

<script>
const STORAGE_KEY = "books";

export default {
  data() {
    return {
      books: [],
      newBook: "",
    };
  },
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY);
        console.error(e);
      }
    }
  },
  methods: {
    addBook() {
      if (!this.newBook) {
        return;
      }

      this.books.push(this.newBook);
      this.newBook = "";
      this.saveBooks();
    },
    removeBook(n) {
      this.books.splice(n, 1);
      this.saveBooks();
    },
    saveBooks() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.books));
    },
  },
};
</script>
