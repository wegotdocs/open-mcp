import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "layers_properties_layers_get",
  "toolDescription": "Gets the layer structure of soilgrids soil properties",
  "baseUrl": "/soilgrids/v2.0",
  "path": "/properties/layers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool