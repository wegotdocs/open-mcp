import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "products_partial_update",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/products/{id}/",
  "method": "patch",
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
    "path": {
      "id": "id"
    },
    "body": {
      "tags": "tags",
      "name": "name",
      "description": "description",
      "prod_numeric_grade": "prod_numeric_grade",
      "business_criticality": "business_criticality",
      "platform": "platform",
      "lifecycle": "lifecycle",
      "origin": "origin",
      "user_records": "user_records",
      "revenue": "revenue",
      "external_audience": "external_audience",
      "internet_accessible": "internet_accessible",
      "enable_product_tag_inheritance": "enable_product_tag_inheritance",
      "enable_simple_risk_acceptance": "enable_simple_risk_acceptance",
      "enable_full_risk_acceptance": "enable_full_risk_acceptance",
      "disable_sla_breach_notifications": "disable_sla_breach_notifications",
      "product_manager": "product_manager",
      "technical_contact": "technical_contact",
      "team_manager": "team_manager",
      "prod_type": "prod_type",
      "sla_configuration": "sla_configuration",
      "regulations": "regulations"
    }
  },
  inputParamsSchema
}

export default tool