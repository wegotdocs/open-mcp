import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "products_list",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/products/",
  "method": "get",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "business_criticality": "business_criticality",
      "created": "created",
      "description": "description",
      "external_audience": "external_audience",
      "has_tags": "has_tags",
      "id": "id",
      "internet_accessible": "internet_accessible",
      "lifecycle": "lifecycle",
      "limit": "limit",
      "name": "name",
      "name_exact": "name_exact",
      "not_tag": "not_tag",
      "not_tags": "not_tags",
      "o": "o",
      "offset": "offset",
      "origin": "origin",
      "outside_of_sla": "outside_of_sla",
      "platform": "platform",
      "prefetch": "prefetch",
      "prod_numeric_grade": "prod_numeric_grade",
      "prod_type": "prod_type",
      "product_manager": "product_manager",
      "regulations": "regulations",
      "revenue": "revenue",
      "tag": "tag",
      "tags": "tags",
      "tags__and": "tags__and",
      "team_manager": "team_manager",
      "technical_contact": "technical_contact",
      "tid": "tid",
      "updated": "updated",
      "user_records": "user_records"
    }
  },
  inputParamsSchema
}

export default tool