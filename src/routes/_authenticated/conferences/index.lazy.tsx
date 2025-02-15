import { createLazyFileRoute } from '@tanstack/react-router'
import Conferences from '@/features/conferences'

export const Route = createLazyFileRoute('/_authenticated/conferences/')({
  component: Conferences,
})
