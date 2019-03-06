<template>
 <div>
   <v-form>
    <v-flex xs4><v-text-field label="Customer Name" v-model="cname" ></v-text-field></v-flex>
    <v-text-field label="Customer Address" v-model="caddr" ></v-text-field>
    <v-text-field label="" v-model="caddr" ></v-text-field>
    <v-flex xs12>
      <v-layout>
        <v-text-field label="City" v-model="ccity" class="mr-2" ></v-text-field>
        <v-text-field label="State" v-model="cstate"  class="mr-2"></v-text-field>

        <v-text-field label="Pincode" v-model="cpin" class="mr-2" ></v-text-field>
        <v-text-field label="Country" v-model="ccountry" ></v-text-field>
      </v-layout>
      <v-layout>
        <v-text-field label="Contact-Person" v-model="contactname"  class="mr-2"></v-text-field>
        <v-text-field label="Contact-Ph No." v-model="contactnumber"  class="mr-2"></v-text-field>
        <v-text-field label="E-mail" v-model="contactmail"  class="mr-2"></v-text-field>
        <v-text-field label="Zone" v-model="zone"  class="mr-2"></v-text-field>
      </v-layout>
    </v-flex>
    <v-flex xs5>
      <v-layout>
        <v-flex>
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
            <v-text-field
            slot="activator"
            v-model="date"
            label="PO date"
            prepend-icon="event"
            readonly
            
            class="mr-2"
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
              <!-- <v-spacer></v-spacer> -->
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-text-field label="PO value" v-model="povalue"  class="mr-2"></v-text-field>
      </v-layout>
      <v-flex>
        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
          <v-text-field
          slot="activator"
          v-model="date"
          label="Setup Date"
          prepend-icon="event"
          readonly
          
          class="mr-2"
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <!-- <v-spacer></v-spacer> -->
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
      <v-text-field label="AO number" v-model="aonumber" ></v-text-field>
      <v-layout>
        <v-flex>
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
            <v-text-field
            slot="activator"
            v-model="date"
            label="AMC start"
            prepend-icon="event"
            readonly
            
            class="mr-2"
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
              <!-- <v-spacer></v-spacer> -->
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex>
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
            <v-text-field
            slot="activator"
            v-model="date"
            label="AMC end"
            prepend-icon="event"
            readonly
            
            class="mr-2"
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
              <!-- <v-spacer></v-spacer> -->
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-layout class="mb-4">
      Margin-Sheet <br>
      <v-btn color="grey" small @click="$refs.inputUpload.click()">Browse</v-btn>
      <input v-show="false" ref="inputUpload" type="file" accept=".pdf">
    </v-layout>
    <v-btn  @click="submit_form" color="success">SUBMIT</v-btn>
  </v-form>
</div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    
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
