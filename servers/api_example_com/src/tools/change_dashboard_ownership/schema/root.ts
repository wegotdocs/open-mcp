import { z } from "zod"

export const inputParamsSchema = {
  "dashboardId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "user": z.string().describe("Id or login of the new user that should own the dashboard")
}