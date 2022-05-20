import * as React from 'react'
import { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = useRef()
  const [error, setError] = useState(null)

  const handleSubmit = function(e) {
    e.preventDefault()

    const name = usernameInputRef.current.value
    onSubmitUsername(name)
  }

  // when user begins to type, check for lowercase
  // if input is lowercase, error state stays null, otherwise error string set
  const handleChange = function(e) {
    const {value} = e.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lowercase')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={usernameInputRef} id="username" type="text" onChange={handleChange} />
      </div>
      {/* error message appears if anything appears in error state */}
      <div style={{color: 'red'}}>{error}</div>
      {/* if error state contains anything but null, disable button */}
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
