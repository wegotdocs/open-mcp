import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "offices_create",
  "toolDescription": "Office -- POST Creates a secondary office.",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/offices",
  "method": "post",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "annual_commit_monthly_billing": "annual_commit_monthly_billing",
      "auto_call_recording": "auto_call_recording",
      "billing_address": "billing_address",
      "billing_contact": "billing_contact",
      "country": "country",
      "currency": "currency",
      "e911_address": "e911_address",
      "first_action": "first_action",
      "friday_hours": "friday_hours",
      "group_description": "group_description",
      "hours_on": "hours_on",
      "international_enabled": "international_enabled",
      "invoiced": "invoiced",
      "mainline_number": "mainline_number",
      "monday_hours": "monday_hours",
      "name": "name",
      "no_operators_action": "no_operators_action",
      "plan_period": "plan_period",
      "ring_seconds": "ring_seconds",
      "routing_options": "routing_options",
      "saturday_hours": "saturday_hours",
      "sunday_hours": "sunday_hours",
      "thursday_hours": "thursday_hours",
      "timezone": "timezone",
      "tuesday_hours": "tuesday_hours",
      "unified_billing": "unified_billing",
      "use_same_address": "use_same_address",
      "voice_intelligence": "voice_intelligence",
      "wednesday_hours": "wednesday_hours"
    }
  },
  inputParamsSchema
}

export default tool