<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/global/HeaderPart";
import Footer from "@/global/FooterPart";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },
};
</script>
