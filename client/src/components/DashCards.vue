<template>
  <v-flex justify-center mx-5  >
    <v-card  v-for="project in projects" :key="project.title"  @click="show = !show">
      <v-layout row wrap p-3 :class="`project ${project.title}`">
        <v-flex xs12 md4 headline>
          <div class="caption grey--text"><h3>Customer Name</h3></div>
          <div>{{ project.CustName }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2 headline>
          <div class="caption grey--text"><h3>AO Number</h3></div>
          <div>{{ project.AO_N0 }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2 headline>
          <div class="caption grey--text"><h3>PO Number</h3></div>
          <div>{{ project.PO_NO }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2 headline>
          <div class="caption grey--text"><h3> Service</h3></div>
          <div>{{ project.CompletedServ }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2 headline>
          <div class="caption grey--text"><h3> Service</h3></div>
          <div>{{ project.TotalServ }}</div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>

    

      <v-slide-y-transition>
        <v-card-text v-show="show">
            <h2>Helo Vinya</h2> 
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  data: () => ({
    projects: [
      {
        title: "Sumeet",
        AO_N0: "1",
        PO_NO: "01",
        CustName: "Ghansham",
        CompletedServ: "3",
        TotalServ: "5"
      }
    ],

    show: false
  })
};
</script>