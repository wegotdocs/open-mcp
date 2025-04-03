import { z } from "zod"

export const toolName = `resendregistrationtoken`
export const toolDescription = `Resend Registration Token`
export const baseUrl = `/api`
export const path = `/v1/users/resendRegistrationToken`
export const method = `put`
export const security = []
export const keys = {
  "query": [
    "user"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "user": z.string().describe("Token sent for Email Confirmation Earlier").optional() }).shape