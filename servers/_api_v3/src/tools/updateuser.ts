import { z } from "zod"

export const toolName = `updateuser`
export const toolDescription = `Update user resource.`
export const baseUrl = `/api/v3`
export const path = `/user/{username}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "username"
  ],
  "cookie": [],
  "body": [
    "id",
    "b_username",
    "firstName",
    "lastName",
    "email",
    "password",
    "phone",
    "userStatus"
  ]
}
export const flatMap = {
  "b_username": "username"
}

export const inputParams = {
  "username": z.string().describe("name that need to be deleted"),
  "id": z.number().int().optional(),
  "b_username": z.string().optional(),
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional(),
  "phone": z.string().optional(),
  "userStatus": z.number().int().describe("User Status").optional()
}