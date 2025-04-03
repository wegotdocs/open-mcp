import { z } from "zod"

export const toolName = `loginuserwithpwd`
export const toolDescription = `Login User with email (plain-text) and Password (encoded in base 64)`
export const baseUrl = `/api`
export const path = `/v1/users/login`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "email",
    "password"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "email": z.string(), "password": z.string() }).shape