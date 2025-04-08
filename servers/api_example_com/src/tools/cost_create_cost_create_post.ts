import { z } from "zod"

export const toolName = `cost_create_cost_create_post`
export const toolDescription = `Cost Create`
export const baseUrl = `https://api.example.com`
export const path = `/cost/create`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "project_id",
    "costs",
    "wb_user_id"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "costs": z.record(z.object({ "prompt_token_cost": z.number(), "completion_token_cost": z.number(), "prompt_token_cost_unit": z.union([z.string(), z.null()]).describe("The unit of the cost for the prompt tokens"), "completion_token_cost_unit": z.union([z.string(), z.null()]).describe("The unit of the cost for the completion tokens"), "effective_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("The date after which the cost is effective for, will default to the current date if not provided").optional(), "provider_id": z.union([z.string(), z.null()]).describe("The provider of the LLM, e.g. 'openai' or 'mistral'. If not provided, the provider_id will be set to 'default'").optional() })),
  "wb_user_id": z.union([z.string(), z.null()]).describe("Do not set directly. Server will automatically populate this field.").optional()
}