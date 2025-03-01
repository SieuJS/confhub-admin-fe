import { z } from 'zod'

const importedConferenceSchema = z.object({
  id: z.number(),
  title: z.string(),
  acronym: z.string(),
  source: z.string(),
  rank: z.string(),
  topicCodes: z.array(z.string()),
})

export type ImportedConference = z.infer<typeof importedConferenceSchema>

export const importedConferenceListSchema = z.array(importedConferenceSchema)
