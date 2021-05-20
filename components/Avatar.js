import { useContext } from 'react'
import Config from '../Config'

function Avatar() {
  const { user } = useContext(Config)
  return (
    <span>
      {user.name}
    </span>
  )
}

export default Avatar