import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Company ID"),
  "name": z.string().describe("The name of the company"),
  "notificationEmail": z.string().email().describe("The email of the company"),
  "language": z.string().describe("The language of the company")
}