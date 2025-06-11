import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Identifier for the collection"),
  "groupId": z.string().uuid()
}