import { Column } from "./Column"
import { AppContainer } from "./styles"
import { useAppState } from "./state/AppStateContext"
import { AddNewItem } from "./AddNewItem"
import { CustomDragLayer } from "./CustomDragLayer"
import { addList } from "./state/actions"

export const App = () => {
  const {lists, dispatch} = useAppState()

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id}/>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch(addList(text))}
      />
    </AppContainer>
  )
}