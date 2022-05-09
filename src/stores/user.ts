import { defineStore } from 'pinia'
import axios from 'axios'

const apiBaseUrl = process.env.API_BASE_URL

export interface IUser {
  _id: number
  _username: string
  _chips: number
  _bank: number
  _exp: number
}

export const useUser = defineStore('user', {
  state: (): IUser => ({
    _id: 0,
    _username: 'Unknown',
    _chips: 0,
    _bank: 0,
    _exp: 10,
  }),
  actions: {
    setUser(
      id: number,
      username: string,
      chips: number,
      bank: number,
      exp: number
    ) {
      this._id = id
      this._username = username
      this._chips = chips
      this._bank = bank
      this._exp = exp
    },
    unsetUser() {
      this._id = 0
      this._username = 'Unknown'
      this._chips = 0
      this._bank = 0
      this._exp = 0
    },
    async login(jwt: string) {
      try {
        const response = await axios.get(apiBaseUrl + 'user/private/0', {
          headers: {
            Authorization: 'Bearer ' + jwt,
          },
        })
        if (response.data.id) {
          this.setUser(
            response.data.id,
            response.data.username,
            response.data.chips,
            response.data.bank,
            response.data.exp
          )
        } else {
          this.logout()
        }
      } catch (err) {
        this.logout()
        console.log(err)
      }
    },
    logout() {
      this.unsetUser()
    },
    addChips(chips: number) {
      this._chips += chips
    },
    removeChips(chips: number) {
      this._chips -= chips
      if (this._chips < 0) {
        this._chips = 0
      }
    },
    setChips(chips: number) {
      this._chips = chips
    },
    addBank(bank: number) {
      this._bank += bank
    },
    removeBank(bank: number) {
      this._bank -= bank
      if (this._bank < 0) {
        this._bank = 0
      }
    },
    setBank(bank: number) {
      this._bank = bank
    },
    addExp(exp: number) {
      this._exp += exp
    },
    setExp(exp: number) {
      this._exp = exp
    },
  },
  getters: {
    user(this: IUser) {
      return {
        id: this._id,
        username: this._username,
        chips: this._chips,
        bank: this._bank,
        exp: this._exp,
      }
    },
    isLoggedIn(this: IUser) {
      if (this._id !== null) {
        return true
      }
      return false
    },
  },
})
