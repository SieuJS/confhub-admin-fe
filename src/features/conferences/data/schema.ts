import {z} from 'zod'

const conferenceStatusSchema = z.union([
  z.literal('active'),
  z.literal('inactive'),
  z.literal('pending'),
])

export type ConferenceStatus = z.infer<typeof conferenceStatusSchema>

const conferenceSchema = z.object({
  id: z.string(),
  title: z.string(),
  acronym: z.string(),
  location: z.string(),
  conferenceDate: z.date(),
  likes: z.number(),
  followers: z.number(),
  status: conferenceStatusSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Conference = z.infer<typeof conferenceSchema>

export const conferenceListSchema = z.array(conferenceSchema)