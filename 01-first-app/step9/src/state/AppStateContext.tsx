import { createContext, useContext, useEffect, Dispatch } from "react"
import { useImmerReducer } from "use-immer"
import { Action } from "./actions"
import {
  appStateReducer,
  AppState,
  List,
  Task
} from "./appStateReducer"
import { DragItem } from "../DragItem"
import { withInitialState } from "../withInitialState"
import { save } from "../api"

type AppStateContextProps = {
  draggedItem: DragItem | null
  lists: List[]
  getTasksByListId(id: string): Task[]
  dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

type AppStateProviderProps = {
  children: React.ReactNode
  initialState: AppState
}

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(
      appStateReducer,
      initialState
    )

    useEffect(() => {
      save(state)
    }, [state])

    const { draggedItem, lists } = state
    const getTasksByListId = (id: string) => {
      return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
      <AppStateContext.Provider
        value={{ draggedItem, lists, getTasksByListId, dispatch }}
      >
        {children}
      </AppStateContext.Provider>
    )
  }
)

export const useAppState = () => {
  return useContext(AppStateContext)
}
