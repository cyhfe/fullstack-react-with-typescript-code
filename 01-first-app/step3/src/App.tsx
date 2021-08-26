import { Column } from "./Column"
import { AppContainer } from "./styles"
import { useAppState } from "./state/AppStateContext"
import { AddNewItem } from "./AddNewItem"

export const App = () => {
  const { lists } = useAppState()

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  )
}
