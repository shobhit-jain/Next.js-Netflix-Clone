import { createContextStore, action } from 'easy-peasy'

const Dom_Element_Store = createContextStore({
  burger: undefined,

  // Actions => updating the state from payload
  setBurger: action((state: any, payload: any) => {
    state.burger = payload
    return
  }),
})

export default Dom_Element_Store
