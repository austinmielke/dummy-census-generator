import { RandomSSN } from 'ssn'
import { fakerEN_US as faker } from '@faker-js/faker'

const generateMembers = (number, includeDependents) => {
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
      }),
      dependents: []
    }

    if (includeDependents) {
      const dependentChance = Math.floor(Math.random() * 3)
      console.log(dependentChance)
      // Spouse
      if (dependentChance === 0 || dependentChance === 2) {
        const sex = faker.person.sex()

        const spouse = {
          employeeSsn,
          relationship: 'Spouse',
          ssn: new RandomSSN().value().toFormattedString(),
          firstName: faker.person.firstName(sex),
          middleName: faker.person.middleName(sex),
          lastName,
          dob: faker.date.birthdate({
            min: new Date(member.dob).getFullYear() - 5,
            max: new Date(member.dob).getFullYear() + 5
          }),
          sex: sex.slice(0, 1).toUpperCase(),
          genderIdentity: sex.slice(0, 1).toUpperCase() + sex.slice(1),
          address1: member.address1,
          address2: member.address2,
          state,
          zipCode: member.zipCode
        }

        member.dependents.push(spouse)
      }
      // Child(ren)
      if (dependentChance === 1 || dependentChance === 2) {
        const numberOfChildren = Math.round(3 / (Math.random() * 3 + 1))

        for (let i = 0; i < numberOfChildren; i++) {
          const sex = faker.person.sex()

          const child = {
            employeeSsn,
            relationship: 'Child',
            ssn: new RandomSSN().value().toFormattedString(),
            firstName: faker.person.firstName(sex),
            middleName: faker.person.middleName(sex),
            lastName,
            dob: faker.date.birthdate({
              min: 1,
              max: 26,
              mode: 'age'
            }),
            sex: sex.slice(0, 1).toUpperCase(),
            genderIdentity: sex.slice(0, 1).toUpperCase() + sex.slice(1),
            address1: member.address1,
            address2: member.address2,
            state,
            zipCode: member.zipCode
          }

          member.dependents.push(child)
        }
      }
    }

    members.push(member)
  }

  return members
}

export default generateMembers
