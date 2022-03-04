<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-btn color="success" rounded="pill" size="large" to="/search"
          >本を検索する</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="my-5">
      <v-col cols="12" sm="6" v-for="book in books" :key="book.id">
        <v-card>
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col col="8">
              <v-card-title>{{ book.title }}</v-card-title>
              <div>
                <span>読んだ日：</span>
                {{ book.readDate }}
              </div>
              <div>
                <span>感想：</span>
                {{ book.memo }}
              </div>
              <v-spacer></v-spacer>
              <v-card-actions>
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
};
</script>
