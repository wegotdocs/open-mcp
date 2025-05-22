import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The room's id."),
  "name": z.string().nullable().describe("[single-line only]\n\nThe name of the room.").optional(),
  "phone_numbers": z.array(z.string()).nullable().describe("A list of all phone numbers assigned to the room.\n\nNumbers can be re-ordered or removed from this list to unassign them.").optional()
}