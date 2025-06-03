import { z } from "zod"

export const inputParamsSchema = {
  "robot_id": z.number().int().describe("The ID of the robot"),
  "page": z.number().int().describe("Page number").optional(),
  "page_size": z.number().int().describe("Number of items per page").optional()
}