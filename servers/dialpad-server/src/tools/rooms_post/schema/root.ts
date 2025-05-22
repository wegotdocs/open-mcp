import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().nullable().describe("[single-line only]\n\nThe name of the room."),
  "office_id": z.number().int().nullable().describe("The office in which this room resides.")
}