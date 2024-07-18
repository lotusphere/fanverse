import { createContext, useReducer, useContext } from 'react'
import { initialState, groupReducer } from './groupReducer'

const GroupContext = createContext({
  state: initialState,
  dispatch: () => null
})

function GroupProvider({ children }) {
  const [state, dispatch] = useReducer(groupReducer, initialState)
  return (
    <GroupContext.Provider value={{ state, dispatch }}>
      {children}
    </GroupContext.Provider>
  )
}

export const useGroupContext = () => useContext(GroupContext)

export default GroupProvider
