import { getEnv, types } from 'mobx-state-tree'
import { Location } from 'history'

export enum RouterStates {
    'loading' = 'loading',
    'loaded' = 'loaded',
    'fail' = 'fail'
}

const RouterStore = types
    .model('RouterStore', {
        location: types.optional(
            types.model('LocationModel', {
                pathname: types.string,
                search: types.maybe(types.string),
                hash: types.maybe(types.string)
            }),
            {
                pathname: window.location.pathname,
                search: window.location.search,
                hash: window.location.hash
            }
        ),
        state: types.maybe(types.enumeration('State', Object.values(RouterStates)))
    })
    .actions(self => ({
        onFail: () => {
            self.state = 'fail'
        },
        onStart: () => {
            self.state = 'loading'
        },
        onSuccess: () => {
            self.state = 'loaded'
        },
        init: (location: Location) => {
            self.location = location
        },
        push: (to: Location | string) => {
            const { history } = getEnv(self)
            history.push(to)
        },
        replace: (to: Location | string) => {
            const { history } = getEnv(self)
            history.replace(to)
        },
        locationChanged: (location: Location) => {
            self.location = location
        }
    }))

export type RouterStoreType = typeof RouterStore.Type
export default RouterStore
