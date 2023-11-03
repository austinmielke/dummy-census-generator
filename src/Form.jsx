function Form({ form, setForm, setMembers }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setMembers([])
    setForm({
      number: 10,
      dependents: true
    })
  }

  const handleNumberChange = (e) => {
    setForm({
      ...form,
      number: parseInt(e.target.value)
    })
  }

  const handleCheckChange = (e) => {
    setForm({
      ...form,
      dependents: e.target.checked
    })
  }

  return (
    <form className="card mx-auto mb-16 w-96 bg-neutral text-neutral-content">
      <div className="card-body">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Number of Members</span>
            <input
              name="number"
              type="number"
              value={form.number}
              min="1"
              max="100"
              className="input input-bordered w-full max-w-xs"
              onChange={handleNumberChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Generate Dependents</span>
            <input
              name="dependents"
              type="checkbox"
              checked={form.dependents}
              className="checkbox ml-4 mr-auto"
              onChange={handleCheckChange}
            />
          </label>
        </div>
        <button className="btn btn-success" onClick={handleSubmit}>
          Generate
        </button>
        <button className="btn btn-error" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  )
}

export default Form
