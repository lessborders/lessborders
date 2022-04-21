import { defineStore } from 'pinia'
import axios from 'axios'

let apiBaseUrl = 'https://api.lessborders.com/'

if (process.client) {
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    apiBaseUrl = 'http://localhost:8081/'
  }
}

export interface IIdentityState {
  _id: number
  _email: string
  _firstName: string
  _lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    _id: null,
    _email: 'Unknown',
    _firstName: 'Billie',
    _lastName: 'Bell',
  }),
  actions: {
    setUser(id: number, email: string) {
      this._id = id
      this._email = email
    },
    unsetUser() {
      this._id = null
      this._email = 'Unknown'
    },
    async login(jwt: string) {
      try {
        const response = await axios.get(apiBaseUrl + 'user/private/0', {
          headers: {
            Authorization: 'Bearer ' + jwt,
          },
        })
        if (response.data.id) {
          this.setUser(response.data.id, response.data.email)
        } else {
          this.logout()
        }
      } catch (err) {
        this.logout()
        console.log(err)
      }
    },
    logout() {
      const tokenCookie = useCookie('token', { path: '/' })
      tokenCookie.value = null
      this.unsetUser()
    },
  },
  getters: {
    user() {
      return {
        id: this._id,
        email: this._email,
      }
    },
    isLoggedIn() {
      if (this._id !== null) {
        return true
      }
      return false
    },
    initials() {
      return this._firstName[0] + this._lastName[0]
    },
  },
})
