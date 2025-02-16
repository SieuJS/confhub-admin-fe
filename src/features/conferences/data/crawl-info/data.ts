import { CrawlJobStatus } from "./schema";

export const callTypes = new Map<CrawlJobStatus, string>([
    ['processing', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
    ['completed', 'bg-neutral-300/40 border-neutral-300'],
    ['failed', 'bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300'],
    ['waiting', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
    ['canceled', 'bg-neutral-300/40 border-neutral-300'],
    ['paused', 'bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300'],
    ]);