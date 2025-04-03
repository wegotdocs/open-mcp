import { z } from "zod"

export const toolName = `checkemailinuse`
export const toolDescription = `Check if a mail is already in use`
export const baseUrl = `/api`
export const path = `/v1/users/checkEmailInUse`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "email"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "email": z.string().regex(new RegExp("^[\\S.!#$%&’*+/=?^_`{|}~-]+@\\S+\\.\\S+$")).min(6).max(127) }).shape