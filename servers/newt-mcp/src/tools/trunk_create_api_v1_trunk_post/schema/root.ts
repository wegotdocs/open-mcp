import { z } from "zod"

export const inputParamsSchema = {
  "Name": z.string(),
  "CAC": z.number().int().optional(),
  "CPS": z.number().int().optional(),
  "IpSignalingProfile": z.string(),
  "PacketServiceProfile": z.string(),
  "IngressIpPrefix": z.array(z.object({ "ipAddress": z.string(), "prefixLength": z.number().int() })),
  "EgressIpPrefix": z.array(z.object({ "cmds": z.union([z.object({ "operations": z.record(z.string()) }), z.null()]).optional(), "operations": z.union([z.record(z.string()), z.null()]).optional(), "fqdn": z.union([z.string().max(63), z.null()]).describe("FQDN to use for sending egress calls/requests to the IP peer.").optional(), "fqdnPort": z.union([z.number().int().gte(0).lte(65535), z.null()]).describe("Port number for FQDN."), "ipAddress": z.union([z.string(), z.null()]).describe("IP address of the IP peer."), "ipPort": z.union([z.number().int().gte(0).lte(65535), z.null()]).describe("TCP/UDP port for the IP peer."), "sequence": z.number().int().gte(0).lte(32000).describe("Sequence."), "serviceStatus": z.union([z.enum(["inService","outOfService"]), z.null()]).describe("Select In Service to use this Ip peer.") }).catchall(z.any()).describe("Specifies the IP Signaling Peer Group configuration details.")),
  "Zone": z.string()
}