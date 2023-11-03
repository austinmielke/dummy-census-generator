import { useState } from 'react'
import Form from './Form'
import Table from './Table'

function App() {
  const [members, setMembers] = useState([1])
  const [form, setForm] = useState({
    number: 10,
    dependents: true
  })

  return (
    <div className="container prose mx-auto mt-4 text-center">
      <h1 className="text-center">Dummy Census Generator</h1>
      <Form form={form} setForm={setForm} setMembers={setMembers} />
      {members.length > 0 && <Table />}
    </div>
  )
}

export default App
