<template>
  <v-app>
    <v-content>
      <layout_component />
      <v-layout id="layout">
        <v-flex xs6 offset-xs3>
<v-dialog
      v-model="dialog"
      width="700"
      
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
        class="m-3 px-3"
      >
        Add new AMC
      </v-btn>

      <v-card>
        <v-card-title
          class="headline indigo lighten-2 py-2 my-2 px-2"
          primary-title
        >
        AMC form
        </v-card-title>

        <v-card-text>
          <myform class="mx-2 my-2 px-1 py-1" />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        

        </v-flex>
      </v-layout>
      <tables />
    </v-content>
  </v-app>
</template>
<script>
import layout_component from './layout_component'
import myform from './myform'
import tables from './tables'


export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
  },
  components: {
    layout_component,
    myform,
    tables
  }
}

</script>
<style scoped>
* {
            margin: 0;
            padding: 0;
            outline: 0;
            box-sizing: border-box;
        }
        body {
            /*background-image: url(https://i.postimg.cc/DftcpyvG/1.jpg);*/
            -webkit-background-size:cover;
            background-size:cover;
            background-position: center center;
            height: 100vh;
        }
        .menu-area li a {
            text-decoration: none;
        }

        .menu-area li {
            list-style-type: none;
        }

        .custom-padding{
            padding-top: 20px;
        }

        nav {
            position: relative;
            width: calc(100% - 60px);
            margin: 0 auto;
            padding: 10px 0;
            background: #aa9578;/*header clr*/
            z-index: 1;
            text-align: right;
            padding-right: 2%;
        }

        .logo {
            width: 15%;
            float: left;
            /*text-transform: uppercase;*/
            color: #fff;
            font-size: 25px;
            text-align: left;
            padding-left: 2%;
        }

        .menu-area li {
            display: inline-block;
        }

        .menu-area a {
            color: #fff;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
            display: block;
            padding: 0 25px;
            font-size: 16px;
            line-height: 30px;
            position: relative;
            z-index: 1;
        }
        .menu-area a:hover {
            background: #917e66;
            color: #fff;
        }

        .menu-area a:hover:after {
            transform: translateY(-50%) rotate(-35deg);
        }

        nav:before {
            position: absolute;
            content: '';
            border-top: 10px solid #333;
            border-right: 10px solid #333;
            border-left: 10px solid transparent;
            border-bottom: 10px solid transparent;
            top: 100%;
            left: 0;
        }

        nav:after {
            position: absolute;
            content: '';
            border-top: 10px solid #333;
            border-left: 10px solid #333;
            border-right: 10px solid transparent;
            border-bottom: 10px solid transparent;
            top: 100%;
            right: 0;
        }
/* ignore the code below */
.link-area
{
  position:fixed;
  bottom:20px;
  left:20px;
  padding:15px;
  border-radius:40px;
  background:#917e66;
}
.link-area a
{
  text-decoration:none;
  color:#fff;
  font-size:25px;
}
#layout{
  padding-top: 40px;
}
</style>
