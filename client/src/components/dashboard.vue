<template>
  <v-app>
    <v-content>
      <layout_component/>

      <div >
        <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
          <v-tab>Service</v-tab>
          <v-tab>Invoice</v-tab>
          <v-tab>Payment</v-tab>
          <v-tab-item class="py-3" v-for="n in 3" :key="n">
            <!-- <v-card flat> -->
              <DashCards />
            <!-- </v-card> -->
          </v-tab-item>
        </v-tabs>
      </div>
    </v-content>
  </v-app>
</template>


</script>
<script>
import layout_component from "./layout_component";
import DashCards from "./DashCards"
export default {
  data() {
    return {
      active: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {},
  components: {
    layout_component,
    DashCards
  }
};
</script>