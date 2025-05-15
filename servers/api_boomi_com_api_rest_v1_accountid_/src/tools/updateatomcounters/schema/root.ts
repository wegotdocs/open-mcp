import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique ID assigned by the system to the Runtime."),
  "atomId": z.string().describe("A unique ID assigned by the system to the Runtime.").optional(),
  "counter": z.array(z.object({ "name": z.string().describe("The name of the counter.").optional(), "value": z.number().int().describe("The assigned value to the counter.").optional() })).optional()
}