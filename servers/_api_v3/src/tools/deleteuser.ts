import { z } from "zod"

export const toolName = `deleteuser`
export const toolDescription = `Delete user resource.`
export const baseUrl = `/api/v3`
export const path = `/user/{username}`
export const method = `delete`
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
  "username": z.string().describe("The name that needs to be deleted")
}