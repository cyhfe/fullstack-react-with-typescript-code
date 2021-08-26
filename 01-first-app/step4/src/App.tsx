import { Column } from "./Column"
import { AppContainer } from "./styles"
import { useAppState } from "./state/AppStateContext"
import { AddNewItem } from "./AddNewItem"
import { addList } from "./state/actions"

export const App = () => {
  const {lists, dispatch} = useAppState()

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id}/>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch(addList(text))}
      />
    </AppContainer>
  )
}