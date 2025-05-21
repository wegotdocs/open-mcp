import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User ID"),
  "typesIds": z.array(z.string()).describe("Types associated with the feeling"),
  "comments": z.string().describe("Comments").optional()
}