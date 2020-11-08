import { Storages } from './enum'

export class LocalStorage {
  get token() {
    return window.localStorage.getItem(Storages.TOKEN)
  }

  set token(token: string | null) {
    if (token === null) {
      window.localStorage.removeItem(Storages.TOKEN)
    } else {
      window.localStorage.setItem(Storages.TOKEN, token)
    }
  }
}

export default new LocalStorage()
