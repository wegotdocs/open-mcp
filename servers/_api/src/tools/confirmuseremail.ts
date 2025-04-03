import { z } from "zod"

export const toolName = `confirmuseremail`
export const toolDescription = `Confirm User Email`
export const baseUrl = `/api`
export const path = `/v1/users/registrationConfirmation`
export const method = `put`
export const security = []
export const keys = {
  "query": [
    "token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "token": z.string().describe("Token sent for Email Confirmation").optional() }).shape