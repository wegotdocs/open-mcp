import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The department's id."),
  "operator_id": z.number().int().nullable().describe("ID of the operator to remove."),
  "operator_type": z.enum(["room","user"]).nullable().describe("Type of the operator to remove (`user` or `room`).")
}