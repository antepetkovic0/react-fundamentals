// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//   //
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input

//   const usernameRef = React.useRef()

//   const handleSubmit = event => {
//     event.preventDefault()
//     // const username = event.target.elements.username.value

//     // extra credit 1 - getting input value from refs
//     // kent prefers first solution for getting input values
//     const username = usernameRef.current.value

//     onSubmitUsername(username)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={usernameRef} id="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// // extra credit 2 - validate lowercase
// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)

//   const handleSubmit = event => {
//     event.preventDefault()
//     const username = event.target.elements.username.value
//     onSubmitUsername(username)
//   }

//   const handleChange = event => {
//     const {value} = event.target
//     const isValid = value === value.toLowerCase()
//     setError(isValid ? null : 'Username must be lower case')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input id="username" type="text" onChange={handleChange} />
//       </div>
//       <div role="alert" style={{color: 'red'}}>
//         {error}
//       </div>
//       <button type="submit" disabled={!!error}>
//         Submit
//       </button>
//     </form>
//   )
// }

// extra credit 3 - control the input value
function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
