import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_device_types_create",
  "toolDescription": "Post a list of device type objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/device-types/",
  "method": "post",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "manufacturer": "manufacturer",
      "default_platform": "default_platform",
      "model": "model",
      "slug": "slug",
      "part_number": "part_number",
      "u_height": "u_height",
      "exclude_from_utilization": "exclude_from_utilization",
      "is_full_depth": "is_full_depth",
      "subdevice_role": "subdevice_role",
      "airflow": "airflow",
      "weight": "weight",
      "weight_unit": "weight_unit",
      "front_image": "front_image",
      "rear_image": "rear_image",
      "description": "description",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool