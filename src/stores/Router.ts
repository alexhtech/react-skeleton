import { Location } from 'history'
import { getEnv, types } from 'mobx-state-tree'
import { ROUTER_INIT, ROUTER_LOCATION_CHANGE } from '../constants'
import LocationModel, { ILocation } from '../models/Location'

const RouterStore = types
    .model('RouterStore', {
        location: types.maybe(LocationModel),
        state: types.maybe(types.enumeration('State', ['loading', 'loaded', 'fail']))
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
        [ROUTER_INIT]: (location: Location) => {
            self.location = location as ILocation
        },
        push: (to: Location) => {
            const { history } = getEnv(self)
            history.push(to)
        },
        replace: (to: Location) => {
            const { history } = getEnv(self)
            history.replace(to)
        },
        [ROUTER_LOCATION_CHANGE]: (location: Location) => {
            self.location = location as ILocation
        }
    }))

export type RouterStoreType = typeof RouterStore.Type
export default RouterStore
