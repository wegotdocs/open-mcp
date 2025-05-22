import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The office's ID."),
  "operator_id": z.number().int().nullable().describe("ID of the operator to add."),
  "operator_type": z.enum(["room","user"]).nullable().describe("Type of the operator to add. (`user` or `room`)"),
  "role": z.enum(["admin","operator"]).nullable().describe("The role of the new operator. (`operator` or `admin`)").optional()
}