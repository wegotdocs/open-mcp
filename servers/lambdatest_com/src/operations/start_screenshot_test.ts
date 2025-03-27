import { z } from "zod"

export const toolName = `start_screenshot_test`
export const toolDescription = `Start Screenshot Test`
export const baseUrl = `https://api.lambdatest.com/screenshots/v1`
export const path = `/`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "body": z.object({ "callback_url": z.string().optional(), "configs": z.object({ "macos mojave": z.object({ "chrome": z.array(z.string()).optional(), "firefox": z.array(z.string()).optional(), "opera": z.array(z.string()).optional() }).optional(), "windows 10": z.object({ "chrome": z.array(z.string()).optional(), "firefox": z.array(z.string()).optional(), "opera": z.array(z.string()).optional() }).optional() }).optional(), "defer_time": z.number().optional(), "email": z.boolean().optional(), "mac_res": z.string().optional(), "password": z.string().optional(), "tunnel": z.boolean().optional(), "tunnel_identifier": z.string().optional(), "url": z.string().optional(), "username": z.string().optional(), "win_res": z.string().optional() }).optional() }).shape