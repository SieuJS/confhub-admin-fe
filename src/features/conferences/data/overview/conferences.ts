import { faker } from '@faker-js/faker'

export const conferences = Array.from({ length: 20 }, () => {
  const title = faker.company.name()
  const acronym = title
    .split(' ')
    .map((word) => word[0])
    .join('')
  const location = faker.address.city()
  const conferenceDate = faker.date.future()
  const likes = faker.number.int({ min: 0, max: 1000 })
  const followers = faker.number.int({ min: 0, max: 1000 })

  return {
    id: faker.string.uuid(),
    title,
    acronym,
    location,
    conferenceDate,
    likes,
    followers,
    status: faker.helpers.arrayElement(['active', 'inactive', 'pending']),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
