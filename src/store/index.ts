import { createContext } from 'react'
import { destroy, Instance } from 'mobx-state-tree'
import { History } from 'history'

import RootStore from './root.store'

export interface IEnv {
    history: History
}

const envDefault: IEnv = {
    history: {} as History
}

export function createStore(snapshot: object = {}, env: IEnv = envDefault): Instance<typeof RootStore> {
    if (store) {
        destroy(store)
    }

    store = RootStore.create(snapshot, env)

    if (process.env.NODE_ENV !== 'production') {
        require('mst-middlewares').connectReduxDevtools(require('remotedev'), store, {
            logArgsNearName: false,
            logChildActions: false,
            logIdempotentActionSteps: false
        })
    }
    return store
}

// to initialize types for StoreContext
let store: Instance<typeof RootStore>

export function getStore(): Instance<typeof RootStore> {
    return store
}

export const StoreContext = createContext({} as Instance<typeof RootStore>)
