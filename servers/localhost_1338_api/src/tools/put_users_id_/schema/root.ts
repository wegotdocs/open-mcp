import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("user Id"),
  "email": z.string(),
  "username": z.string(),
  "password": z.string()
}