function Form() {
  return (
    <form className="card mx-auto mb-16 w-96 bg-neutral text-neutral-content">
      <div className="card-body">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Number of Members</span>
            <input
              type="number"
              placeholder="10"
              min="1"
              max="100"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Generate Dependents</span>
            <input
              type="checkbox"
              checked="checked"
              className="checkbox ml-4 mr-auto"
            />
          </label>
        </div>
        <button className="btn btn-success">Generate</button>
      </div>
    </form>
  )
}

export default Form
