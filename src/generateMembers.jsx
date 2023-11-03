import { RandomSSN } from 'ssn'
import { fakerEN_US as faker } from '@faker-js/faker'

const generateMembers = (number, dependents) => {
  const members = []

  for (let i = 0; i < number; i++) {
    const employeeSsn = new RandomSSN().value().toFormattedString()
    const hireDate = new Date(faker.date.past()).toLocaleDateString('en-US')
    const sex = faker.person.sex()
    const firstName = faker.person.firstName(sex)
    const lastName = faker.person.lastName()
    const state = faker.location.state({ abbreviated: true })

    const member = {
      employeeSsn,
      relationship: 'Employee',
      ssn: employeeSsn,
      firstName,
      middleName: faker.person.middleName(sex),
      lastName,
      dob: new Date(faker.date.birthdate()).toLocaleDateString('en-US'),
      sex: sex.slice(0, 1).toUpperCase(),
      genderIdentity: sex.slice(0, 1).toUpperCase() + sex.slice(1),
      address1: faker.location.streetAddress(),
      address2:
        Math.round(Math.random() * 3) === 0
          ? faker.location.secondaryAddress()
          : '',
      state,
      zipCode: faker.location.zipCode({ state }),
      phone: faker.phone.number('###-###-####'),
      email: faker.internet.email({
        firstName,
        lastName,
        allowSpecialCharacters: false
      }),
      employmentStatus: 'Active',
      hireDate,
      hoursPerWeek: 40,
      salaryEffectiveDate: hireDate,
      salary: (
        Math.round(faker.number.int({ min: 50000, max: 150000 }) / 1000) * 1000
      ).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      })
    }

    members.push(member)
  }

  return members
}

export default generateMembers
