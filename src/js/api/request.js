import superagent from 'superagent'
import promise from 'es6-promise'
import superagentPromisePlugin from 'superagent-promise-plugin'

promise.polyfill()

export const request = superagentPromisePlugin.patch(superagent)