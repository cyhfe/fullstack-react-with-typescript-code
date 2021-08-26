import { selectKey } from "../../domain/keyboard"
import { notes } from "../../domain/note"
import { Key } from "../Key"
import styles from "./Keyboard.module.css"

export const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index)
        return <Key key={midi} type={type} label={label} />
      })}
    </div>
  )
}
