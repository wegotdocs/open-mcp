import { z } from "zod"

export const toolName = `createuser`
export const toolDescription = `Create user.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/user`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "username",
    "firstName",
    "lastName",
    "email",
    "password",
    "phone",
    "userStatus"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().optional(),
  "username": z.string().optional(),
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional(),
  "phone": z.string().optional(),
  "userStatus": z.number().int().describe("User Status").optional()
}