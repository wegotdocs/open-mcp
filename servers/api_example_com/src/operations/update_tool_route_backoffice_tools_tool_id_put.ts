import { z } from "zod"

export const toolName = `update_tool_route_backoffice_tools_tool_id_put`
export const toolDescription = `Update Tool Route`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/tools/{tool_id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "tool_id": z.string() }).optional(), "body": z.object({ "id": z.string(), "publisher": z.string(), "tool_type": z.enum(["local","remote"]), "logo": z.string().regex(new RegExp("^data:image\\/svg\\+xml;base64,")), "title": z.string(), "category": z.string(), "short_description": z.string(), "long_description": z.string(), "price_per_execution": z.number().gte(0), "star_rating": z.number().gte(0).lte(5), "executions": z.number().int(), "url": z.string().url().min(1).max(2083), "description_for_model": z.string(), "arguments": z.union([z.array(z.object({ "name": z.string(), "items": z.union([z.object({ "type": z.enum(["string","number","integer","boolean"]) }).describe("Array Items"), z.null()]).optional(), "type": z.enum(["string","number","integer","array","boolean"]), "source": z.enum(["llm","user","metadata"]), "label": z.string(), "description": z.string(), "required": z.boolean() }).describe("Tool Arguments")), z.null()]).optional(), "hidden": z.boolean(), "version": z.string(), "featured": z.boolean(), "status": z.enum(["active","pending","rejected"]).describe("Tool Status"), "background_image": z.union([z.string(), z.null()]).optional() }).describe("ToolHouse Tools Configuration").optional() }).shape