import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "token": z.string().describe("The session's token used for authentication").optional(),
  "permissions": z.string(),
  "userId": z.string().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "expiredTime": z.string().datetime({ offset: true }).describe("Session expired time. Defaults to one hour").optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}