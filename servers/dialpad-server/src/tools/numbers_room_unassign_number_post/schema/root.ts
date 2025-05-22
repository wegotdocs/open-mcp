import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The room's id."),
  "number": z.string().nullable().describe("A phone number to unassign. (e164-formatted)")
}