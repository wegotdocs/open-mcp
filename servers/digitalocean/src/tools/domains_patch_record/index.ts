import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "domains_patch_record",
  "toolDescription": "Update a Domain Record",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/domains/{domain_name}/records/{domain_record_id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "domain_name": "domain_name",
      "domain_record_id": "domain_record_id"
    },
    "body": {
      "id": "id",
      "type": "type",
      "name": "name",
      "data": "data",
      "priority": "priority",
      "port": "port",
      "ttl": "ttl",
      "weight": "weight",
      "flags": "flags",
      "tag": "tag"
    }
  },
  inputParamsSchema
}

export default tool