import {faker} from '@faker-js/faker'
import { CrawlJob } from './schema'

export const crawlJob = Array.from({ length: 20 }, (): CrawlJob => {

  return {
    id: faker.string.uuid(),
    conferenceId : faker.string.uuid(),
    conferenceAcronym : faker.company.name().split(' ').map((word) => word[0]).join(''),
    progress : faker.number.int({ min: 1, max: 100 }),
    status: faker.helpers.arrayElement(['processing', 'completed', 'failed', 'waiting', 'canceled', 'paused']),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})