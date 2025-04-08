import { z } from "zod"

export const toolName = `logoutuser`
export const toolDescription = `Logs out current logged in user session.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/user/logout`
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

export const inputParams = {}