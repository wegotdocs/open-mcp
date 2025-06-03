import { z } from "zod"

export const inputParamsSchema = {
  "robot_id": z.number().int().describe("The ID of the robot"),
  "from_date": z.string().datetime({ offset: true }).describe("Start date for the query"),
  "to_date": z.string().datetime({ offset: true }).describe("End date for the query")
}