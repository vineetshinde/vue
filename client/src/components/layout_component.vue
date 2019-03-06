<template>
  
<div>
      <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>note_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>AMC</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="rgb(204, 185, 153)" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>FlaktGroup</v-toolbar-title>
    </v-toolbar>
    <v-footer color="rgb(204, 185, 153)" app>
      <span class="white--text">&copy; All Rights Reserved.</span>
    </v-footer>
</div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  props: {
    source: String
  }
}
</script>

<style scoped>

</style>
