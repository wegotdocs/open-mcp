import { z } from "zod"

export const toolName = `getjwttokenforbotuser`
export const toolDescription = `Get JWT Token for a Bot User`
export const baseUrl = `/api`
export const path = `/v1/users/token/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the user") }).shape