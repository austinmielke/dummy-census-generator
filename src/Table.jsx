import { Fragment } from 'react'

function Table() {
  return (
    <Fragment>
      <button className="btn btn-info mb-4">Download as CSV</button>
      <div className="mb-4 h-[400px] overflow-x-auto">
        <table className="table table-zebra table-pin-rows table-xs">
          <thead>
            <tr>
              <th>Employee SSN</th>
              <th>Relationship</th>
              <th>SSN</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Sex</th>
              <th>Gender Identity</th>
              <th>Address 1</th>
              <th>Address 2</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone (Personal)</th>
              <th>Primary Email</th>
              <th>Employment</th>
              <th>Hire Date</th>
              <th>Hours per Week</th>
              <th>Salary Effective Date</th>
              <th>Annual Base Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Table
