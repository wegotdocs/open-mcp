import { z } from "zod"

export const toolName = `getuserbyname`
export const toolDescription = `Get user by user name.`
export const baseUrl = `https://petstore.swagger.io/v2`
export const path = `/user/{username}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "username"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "username": z.string().describe("The name that needs to be fetched. Use user1 for testing")
}