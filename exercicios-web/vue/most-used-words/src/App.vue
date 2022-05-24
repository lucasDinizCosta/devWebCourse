<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <v-toolbar-title> Most Used Words </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <HomeElement />
    </v-main>
  </v-app>
</template>

<script>
import HomeElement from './components/HomeElement';

export default {
  name: 'App',

  components: {
    HomeElement,
  },

  data: () => ({
    //
  }),
};
</script>
