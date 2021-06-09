import { createContextStore, action } from 'easy-peasy'

const Dom_Element_Store = createContextStore({
  items: 0,
  flowers: 0,

  // Actions => increasing the value of items
  increaseItem: action((state: { items: number }) => {
    state.items += 1
    return
  }),

  // Actions => decreasing the value of items
  decreaseItem: action((state: { items: number }) => {
    state.items <= 0 ? state.items : (state.items -= 1)
    return
  }),

  // Actions => increasing the value of items
  increaseFlower: action((state: { flowers: number }) => {
    state.flowers += 1
    return
  }),
})

export default Dom_Element_Store
