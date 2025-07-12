import { z } from "zod"

export const inputParamsSchema = {
  "ip_address": z.string().describe("IP address to configure DDoS protection for"),
  "prefix": z.number().int().gte(1).lte(32).describe("Prefix length (e.g., 32 for single IP, 24 for /24 subnet)").optional(),
  "tcp_validation_level": z.number().int().gte(0).lte(1).describe("TCP validation level (0-1)"),
  "tcp_validation_sym_level": z.number().int().gte(0).lte(1).describe("TCP Symmetric validation level (0-1)"),
  "udp_validation_level": z.number().int().gte(0).lte(1).describe("UDP validation level (0-1)"),
  "fivem_protection_level": z.number().int().gte(0).lte(2).describe("FiveM protection level (0-2: 0=Disabled, 1=Layer7, 2=UDP+Layer7)"),
  "mc_java_protection_level": z.number().int().gte(0).lte(1).describe("Minecraft Java protection level (0-1)"),
  "tls_validation_level": z.number().int().gte(0).lte(1).describe("TLS validation level (0-1)"),
  "rdp_protection_level": z.number().int().gte(0).lte(1).describe("RDP protection level (0-1)")
}