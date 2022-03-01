<template>
  <div>
    <h2>Books</h2>
    <div v-for="(book, n) in books" :key="n">
      <p>
        <span class="book">{{ book }}</span>
        <button @click="removeBook(n)">Remove</button>
      </p>
    </div>
    <p>
      <input v-model="newBook" />
      <button @click="addBook">Add Book</button>
    </p>
  </div>
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
