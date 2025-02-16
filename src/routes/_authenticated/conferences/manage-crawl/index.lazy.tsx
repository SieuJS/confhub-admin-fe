import ManageCrawl from '@/features/conferences/manage-crawl'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/_authenticated/conferences/manage-crawl/',
)({
  component: ManageCrawl,
})
