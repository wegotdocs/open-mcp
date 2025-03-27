import { z } from "zod";
export const toolName = `updatenetworkappliancefirewallcellularfirewallrules`;
export const toolDescription = `Update the cellular firewall rules of an MX network`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/networks/{networkId}/appliance/firewall/cellularFirewallRules`;
export const method = `put`;
export const security = [
    {
        "key": "X-Cisco-Meraki-API-Key",
        "value": "<mcp-env-var>X_CISCO_MERAKI_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_CISCO_MERAKI_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-Cisco-Meraki-API-Key"
    }
];
export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional(), "body": z.object({ "rules": z.array(z.object({ "comment": z.string().describe("Description of the rule (optional)").optional(), "destCidr": z.string().describe("Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'"), "destPort": z.string().describe("Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'").optional(), "policy": z.enum(["allow", "deny"]).describe("'allow' or 'deny' traffic specified by this rule"), "protocol": z.enum(["any", "icmp", "icmp6", "tcp", "udp"]).describe("The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')"), "srcCidr": z.string().describe("Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)"), "srcPort": z.string().describe("Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'").optional(), "syslogEnabled": z.boolean().describe("Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)").optional() })).describe("An ordered array of the firewall rules (not including the default rule)").optional() }).optional() }).shape;
