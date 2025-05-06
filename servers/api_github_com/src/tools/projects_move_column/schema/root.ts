import { z } from "zod"

export const inputParamsSchema = {
  "column_id": z.number().int().describe("The unique identifier of the column."),
  "position": z.string().regex(new RegExp("^(?:first|last|after:\\d+)$")).describe("The position of the column in a project. Can be one of: `first`, `last`, or `after:<column_id>` to place after the specified column.")
}