import { useState } from 'react'
import Form from './Form'
import Table from './Table'

function App() {
  const [members, setMembers] = useState([1])

  return (
    <div className="container prose mx-auto mt-4 text-center">
      <h1 className="text-center">Dummy Census Generator</h1>
      <Form />
      {members.length > 0 && <Table />}
    </div>
  )
}

export default App
