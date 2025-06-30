import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportcatalogdcat",
  "toolDescription": "Export a catalog in RDF/XML (DCAT)",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/exports/dcat{dcat_ap_format}",
  "method": "get",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "dcat_ap_format": "dcat_ap_format"
    },
    "query": {
      "include_exports": "include_exports",
      "use_labels_in_exports": "use_labels_in_exports"
    }
  },
  inputParamsSchema
}

export default tool