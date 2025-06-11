import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "include": z.string().describe("Additional information to include (bl - BitLocker status)").optional()
}