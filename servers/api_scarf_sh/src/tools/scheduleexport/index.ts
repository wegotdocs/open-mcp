import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "scheduleexport",
  "toolDescription": "Schedule Daily Export",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/exports/{owner}/schedule-export",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "cloud_service_spec": "cloud_service_spec",
      "package_ids": "package_ids",
      "tracking_pixel_ids": "tracking_pixel_ids",
      "company_domains": "company_domains",
      "include_company_rollups": "include_company_rollups",
      "variables": "variables"
    }
  },
  inputParamsSchema
}

export default tool