import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configure_ddos_protection_floating_ips_ddos_protection_post",
  "toolDescription": "Configure DDoS protection",
  "baseUrl": "https://api.example.com",
  "path": "/floating_ips/ddos-protection",
  "method": "post",
  "security": [
    {
      "key": "X-API-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
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
      "ip_address": "ip_address",
      "prefix": "prefix",
      "tcp_validation_level": "tcp_validation_level",
      "tcp_validation_sym_level": "tcp_validation_sym_level",
      "udp_validation_level": "udp_validation_level",
      "fivem_protection_level": "fivem_protection_level",
      "mc_java_protection_level": "mc_java_protection_level",
      "tls_validation_level": "tls_validation_level",
      "rdp_protection_level": "rdp_protection_level"
    }
  },
  inputParamsSchema
}

export default tool