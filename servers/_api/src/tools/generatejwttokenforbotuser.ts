import { z } from "zod"

export const toolName = `generatejwttokenforbotuser`
export const toolDescription = `Generate JWT Token for a Bot User`
export const baseUrl = `/api`
export const path = `/v1/users/generateToken/{id}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "JWTTokenExpiry"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the user"), "JWTTokenExpiry": z.enum(["OneHour","1","7","30","60","90","Unlimited"]) }).shape