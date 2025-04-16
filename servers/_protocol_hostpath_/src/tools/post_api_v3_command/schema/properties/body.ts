import { z } from "zod"

export const inputParamsSchema = {
  "sendUpdatesToClient": z.boolean().optional(),
  "updateScheduledTask": z.boolean().readonly().optional(),
  "completionMessage": z.string().nullable().readonly().optional(),
  "requiresDiskAccess": z.boolean().readonly().optional(),
  "isExclusive": z.boolean().readonly().optional(),
  "isTypeExclusive": z.boolean().readonly().optional(),
  "isLongRunning": z.boolean().readonly().optional(),
  "name": z.string().nullable().readonly().optional(),
  "lastExecutionTime": z.string().datetime({ offset: true }).nullable().optional(),
  "lastStartTime": z.string().datetime({ offset: true }).nullable().optional(),
  "trigger": z.enum(["unspecified","manual","scheduled"]).optional(),
  "suppressMessages": z.boolean().optional(),
  "clientUserAgent": z.string().nullable().optional()
}