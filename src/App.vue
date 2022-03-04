<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <router-view
        :books="books"
        @add-book-list="addBook" />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/global/HeaderPart";
import Footer from "@/global/FooterPart";

const STORAGE_KEY = "books";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

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
    addBook(e) {
      this.books.push({
        id: this.books.length,
        title: e.title,
        image: e.image,
        description: e.description,
        readData: "",
        memo: "",
      });
      this.saveBooks();

      this.goToEditPage(this.books.at(-1).id)
    },
    removeBook(n) {
      this.books.splice(n, 1);
      this.saveBooks();
    },
    saveBooks() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.books));
    },
    goToEditPage(id) {
      this.$router.push(`/edit/${id}`)
    }
   },
};
</script>
