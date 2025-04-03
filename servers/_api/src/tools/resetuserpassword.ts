import { z } from "zod"

export const toolName = `resetuserpassword`
export const toolDescription = `Reset Password For User`
export const baseUrl = `/api`
export const path = `/v1/users/password/reset`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "confirmPassword",
    "password",
    "token",
    "username"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "confirmPassword": z.string().min(8).max(16).optional(), "password": z.string().min(8).max(16).optional(), "token": z.string().optional(), "username": z.string() }).shape