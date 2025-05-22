import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The office's id."),
  "number": z.string().nullable().describe("A phone number to unassign. (e164-formatted)")
}