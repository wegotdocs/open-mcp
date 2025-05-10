import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getallproducts",
  "toolDescription": "Get all products",
  "baseUrl": "https://fakestoreapi.com",
  "path": "/products",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool