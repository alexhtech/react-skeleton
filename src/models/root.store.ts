import { types } from 'mobx-state-tree'
import Router from './router.store'

const RootStore = types
    .model('RootStore', {
        app: '',
        router: types.optional(Router, {})
    })
    .actions(self => ({}))

export type RootStoreType = typeof RootStore.Type
export default RootStore
