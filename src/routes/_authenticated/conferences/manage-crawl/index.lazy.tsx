import { createLazyFileRoute } from '@tanstack/react-router'
import ManageCrawl from '@/features/conferences/manage-crawl'

export const Route = createLazyFileRoute(
  '/_authenticated/conferences/manage-crawl/'
)({
  component: ManageCrawl,
})
