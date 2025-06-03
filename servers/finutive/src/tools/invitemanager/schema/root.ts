import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().describe("Email of the manager to be invited"),
  "firstname": z.string().describe("First name of the manager to be invited"),
  "lastname": z.string().describe("Last name of the manager to be invited"),
  "role": z.enum(["MANAGER","ADMIN"]).describe("Role of the manager to be invited")
}