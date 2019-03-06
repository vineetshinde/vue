import Api from '@/services/Api'

export default {
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// AuthenticationService.register({
//     email: 'test@gmail.com',
//     password: '123456'
// })
