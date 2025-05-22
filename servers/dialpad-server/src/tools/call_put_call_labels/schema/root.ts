import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The call's id"),
  "labels": z.array(z.string()).nullable().describe("The list of labels to attach to the call").optional()
}