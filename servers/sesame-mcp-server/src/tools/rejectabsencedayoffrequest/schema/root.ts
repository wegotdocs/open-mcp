import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Day Off Request Id"),
  "resolutionComment": z.string().optional(),
  "managerId": z.string().uuid().optional()
}