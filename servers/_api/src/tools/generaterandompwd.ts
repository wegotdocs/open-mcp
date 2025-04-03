import { z } from "zod"

export const toolName = `generaterandompwd`
export const toolDescription = `Generate a random password`
export const baseUrl = `/api`
export const path = `/v1/users/generateRandomPwd`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape