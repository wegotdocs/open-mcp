import { z } from "zod"

export const toolName = `loginuser`
export const toolDescription = `Logs user into the system.`
export const baseUrl = `https://petstore.swagger.io/v2`
export const path = `/user/login`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "username",
    "password"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "username": z.string().describe("The user name for login").optional(),
  "password": z.string().describe("The password for login in clear text").optional()
}