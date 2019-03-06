<template>
  <v-app>
    <v-content>
      <div style="background-color:rgb(204, 185, 153); height:100%;">
        <v-layout justify-center id="layout" transition="slide-x-transition">
        <v-flex xs5>
          <v-card class="round-card" elevation="15">
            <div>
              <v-flex xs4 offset-xs4 class="pb-3 pt-4" id="top">
              <v-img src="/static/flakt.jpg" contain></v-img>
            </v-flex>
            </div>
            <v-form>
              <v-flex xs8 offset-xs2>
                <v-text-field label="Username" v-model="email" outline class="pt-2 pb-2">
                </v-text-field>
              </v-flex>
              <v-flex xs8 offset-xs2>
                <v-text-field type="Password" label="password" v-model="password" outline class="pb-2">
                </v-text-field>
              </v-flex>
            </v-form>
            <v-btn class="mb-4" color="rgb(143, 126, 100)" dark @click="login" id="button">
              Login
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import router from '../router'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        if (response.data.validate) {
          router.replace({name: 'amc'})
        }
      } catch (err) {
        alert('Invalid Login Credentials')
      }
    }
  }

}
</script>

<style scoped>
#layout{
  padding-top:200px;
}
.round-card{
  border-radius: 30px;
}
#button{
  width: 40%;
  height: 40px;
  border-radius: 10px;
}

</style>
