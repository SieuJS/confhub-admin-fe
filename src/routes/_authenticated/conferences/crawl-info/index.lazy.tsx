import { createLazyFileRoute } from '@tanstack/react-router'
import ConferenceCrawlInfo from '@/features/conferences/conference-crawl-info'

export const Route = createLazyFileRoute(
  '/_authenticated/conferences/crawl-info/'
)({
  component: ConferenceCrawlInfo,
})
