import {z} from 'zod'

const crawlJobStatusSchema = z.union([
    z.literal('processing'),
    z.literal('completed'),
    z.literal('failed'),
    z.literal('waiting'),
    z.literal('canceled'),
    z.literal('paused'),
])

export type CrawlJobStatus = z.infer<typeof crawlJobStatusSchema>

const crawlJobSchema = z.object({
    id: z.string(),
    conferenceId: z.string(),
    conferenceAcronym: z.string(),
    progress : z.number(), 
    status: crawlJobStatusSchema,
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
})

export type CrawlJob = z.infer<typeof crawlJobSchema>

export const CrawlJobListSchema = z.array(crawlJobSchema)