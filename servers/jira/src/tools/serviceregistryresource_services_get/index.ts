import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "serviceregistryresource_services_get",
  "toolDescription": "Retrieve the attributes of service registries",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/atlassian-connect/1/service-registry",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "serviceIds": "serviceIds"
    }
  },
  inputParamsSchema
}

export default tool