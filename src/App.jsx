import { useState } from 'react'
import Form from './Form'
import Table from './Table'
import generateMembers from './generateMembers'

function App() {
  const [members, setMembers] = useState([])
  const [formData, setFormData] = useState({
    number: 10,
    includeDependents: true
  })

  const handleGenerateMembers = ({ number, includeDependents }) => {
    setMembers(generateMembers(number, includeDependents))
  }

  return (
    <div className="container prose mx-auto mt-4 text-center">
      <h1 className="text-center">Dummy Census Generator</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        setMembers={setMembers}
        handleGenerateMembers={handleGenerateMembers}
      />
      {members.length > 0 && <Table members={members} />}
    </div>
  )
}

export default App
