import { Fragment } from 'react'
import { useCSVDownloader } from 'react-papaparse'
import generateCSVData from './generateCSVData'

function Table({ members }) {
  const { CSVDownloader } = useCSVDownloader()

  return (
    <Fragment>
      <CSVDownloader
        type={'button'}
        filename={'DummyCenus'}
        data={generateCSVData(members)}
      >
        <div className="btn btn-info mb-4">Download as CSV</div>
      </CSVDownloader>
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
              <th>Salary Effective Date</th>
              <th>Annual Base Salary</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <Fragment key={member.ssn}>
                <tr>
                  <td>{member.employeeSsn}</td>
                  <td>{member.relationship}</td>
                  <td>{member.ssn}</td>
                  <td>{member.firstName}</td>
                  <td>{member.middleName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.dob}</td>
                  <td>{member.sex}</td>
                  <td>{member.genderIdentity}</td>
                  <td>{member.address1}</td>
                  <td>{member.address2}</td>
                  <td>{member.city}</td>
                  <td>{member.state}</td>
                  <td>{member.zipCode}</td>
                  <td>{member.phone}</td>
                  <td>{member.email}</td>
                  <td>{member.employmentStatus}</td>
                  <td>{member.hireDate}</td>
                  <td>{member.salaryEffectiveDate}</td>
                  <td>{member.salary}</td>
                </tr>
                {member.dependents.length > 0 &&
                  member.dependents.map((dependent) => (
                    <Fragment key={dependent.ssn}>
                      <tr>
                        <td>{member.employeeSsn}</td>
                        <td>{dependent.relationship}</td>
                        <td>{dependent.ssn}</td>
                        <td>{dependent.firstName}</td>
                        <td>{dependent.middleName}</td>
                        <td>{dependent.lastName}</td>
                        <td>{dependent.dob}</td>
                        <td>{dependent.sex}</td>
                        <td>{dependent.genderIdentity}</td>
                        <td>{dependent.address1}</td>
                        <td>{dependent.address2}</td>
                        <td>{dependent.city}</td>
                        <td>{dependent.state}</td>
                        <td>{dependent.zipCode}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </Fragment>
                  ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Table
