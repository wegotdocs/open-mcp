import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_edge_acl_rule_edge_acls_post",
  "toolDescription": "Create Edge Acl Rule",
  "baseUrl": "https://api.example.com",
  "path": "/edge-acls/",
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
    "query": {
      "src_ip": "src_ip",
      "src_prefixlen": "src_prefixlen",
      "src_prefix_uuid": "src_prefix_uuid",
      "ip_proto": "ip_proto",
      "dest_ip": "dest_ip",
      "dest_prefixlen": "dest_prefixlen",
      "dst_port_start": "dst_port_start",
      "dst_port_end": "dst_port_end",
      "src_port_start": "src_port_start",
      "src_port_end": "src_port_end",
      "pkt_len_start": "pkt_len_start",
      "pkt_len_end": "pkt_len_end",
      "tcp_flags": "tcp_flags",
      "action": "action",
      "rate_limit": "rate_limit",
      "comments": "comments"
    }
  },
  inputParamsSchema
}

export default tool