import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_interfaces_partial_update",
  "toolDescription": "Patch a interface object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/interfaces/{id}/",
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
      "device": "device",
      "vdcs": "vdcs",
      "module": "module",
      "name": "name",
      "label": "label",
      "type": "type",
      "enabled": "enabled",
      "parent": "parent",
      "bridge": "bridge",
      "lag": "lag",
      "mtu": "mtu",
      "primary_mac_address": "primary_mac_address",
      "speed": "speed",
      "duplex": "duplex",
      "wwn": "wwn",
      "mgmt_only": "mgmt_only",
      "description": "description",
      "mode": "mode",
      "rf_role": "rf_role",
      "rf_channel": "rf_channel",
      "poe_mode": "poe_mode",
      "poe_type": "poe_type",
      "rf_channel_frequency": "rf_channel_frequency",
      "rf_channel_width": "rf_channel_width",
      "tx_power": "tx_power",
      "untagged_vlan": "untagged_vlan",
      "tagged_vlans": "tagged_vlans",
      "qinq_svlan": "qinq_svlan",
      "vlan_translation_policy": "vlan_translation_policy",
      "mark_connected": "mark_connected",
      "wireless_lans": "wireless_lans",
      "vrf": "vrf",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool