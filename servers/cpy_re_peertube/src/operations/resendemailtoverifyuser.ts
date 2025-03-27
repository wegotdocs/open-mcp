import { z } from "zod"

export const toolName = `resendemailtoverifyuser`
export const toolDescription = `Resend user verification link`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/ask-send-verify-email`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "email": z.string().describe("User email") }).optional() }).shape