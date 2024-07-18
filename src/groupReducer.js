export const initialState = {
  groups: [],
  loading: true,
  errorMessage: '',
}

export const ACTIONS = {
  GET_ALL_GROUPS: 'GET_ALL_GROUPS',
  ADD_GROUP: 'ADD_GROUP',
  UPDATE_GROUP: 'UPDATE_GROUP',
  DELETE_GROUP: 'DELETE_GROUP',
  FETCH_LOADING: 'FETCH_LOADING',
  FETCH_FAILURE: 'FETCH_FAILURE',
}

export function groupReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_LOADING:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      }
    case ACTIONS.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      }
    case ACTIONS.GET_ALL_GROUPS:
      return {
        ...state,
        groups: action.payload,
        loading: false,
      }
    case ACTIONS.GET_GROUP:
      return {
        ...state,
        loading: false,
      }
    case ACTIONS.ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
        loading: false,
      }
    case ACTIONS.UPDATE_GROUP:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload.id ? action.payload : group,
        ),
        loading: false,
      }
    case ACTIONS.DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.payload),
        loading: false,
      }
    default:
      return state
  }
}
