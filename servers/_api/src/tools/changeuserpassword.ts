import { z } from "zod"

export const toolName = `changeuserpassword`
export const toolDescription = `Change Password For User`
export const baseUrl = `/api`
export const path = `/v1/users/changePassword`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "confirmPassword",
    "newPassword",
    "oldPassword",
    "requestType",
    "username"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "confirmPassword": z.string(), "newPassword": z.string(), "oldPassword": z.string().optional(), "requestType": z.enum(["SELF","USER"]).optional(), "username": z.string().optional() }).shape