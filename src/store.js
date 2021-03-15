import { store } from 'freenit'


const mystore = {
  ...store,
}
mystore.auth.init('/api/v0')


export default mystore
