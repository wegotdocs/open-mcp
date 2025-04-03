import { z } from "zod"

export const toolName = `registeruser`
export const toolDescription = `Register User`
export const baseUrl = `/api`
export const path = `/v1/users/signup`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "email",
    "firstName",
    "lastName",
    "password"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "email": z.string().regex(new RegExp("^[\\S.!#$%&’*+/=?^_`{|}~-]+@\\S+\\.\\S+$")).min(6).max(127), "firstName": z.string(), "lastName": z.string(), "password": z.string().min(8).max(16) }).shape