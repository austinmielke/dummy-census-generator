const generateCSVData = (members) => {
  const output = []

  // Headers
  output.push([
    'Employee SSN',
    'Relationship',
    'Dependent SSN',
    'First Name',
    'Middle Name',
    'Last Name',
    'DOB',
    'Sex',
    'Gender Identity',
    'Address 1',
    'Address 2',
    'City',
    'State',
    'Zip',
    'Phone Number',
    'Personal Email',
    'Employment Status',
    'Hire Date',
    'Salary Effective Date',
    'Annual Base Salary'
  ])

  // Members with Dependents
  members.map((member) => {
    output.push([
      member.employeeSsn,
      member.relationship,
      '',
      member.firstName,
      member.middleName,
      member.lastName,
      member.dob,
      member.sex,
      member.genderIdentity,
      member.address1,
      member.address2,
      member.city,
      member.state,
      member.zipCode,
      member.phone,
      member.email,
      member.employmentStatus,
      member.hireDate,
      member.salaryEffectiveDate,
      member.salary
    ])

    if (member.dependents.length > 0) {
      member.dependents.map((dependent) => {
        output.push([
          member.employeeSsn,
          dependent.relationship,
          dependent.ssn,
          dependent.firstName,
          dependent.middleName,
          dependent.lastName,
          dependent.dob,
          dependent.sex,
          dependent.genderIdentity,
          dependent.address1,
          dependent.address2,
          dependent.city,
          dependent.state,
          dependent.zipCode,
          '',
          '',
          '',
          '',
          '',
          ''
        ])
      })
    }
  })

  return output
}

export default generateCSVData
