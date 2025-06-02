import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("name that need to be updated"),
  "id": z.number().int().optional(),
  "b_username": z.string().optional(),
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional(),
  "phone": z.string().optional(),
  "userStatus": z.number().int().describe("User Status").optional()
}