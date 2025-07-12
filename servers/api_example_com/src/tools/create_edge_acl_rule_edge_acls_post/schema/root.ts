import { z } from "zod"

export const inputParamsSchema = {
  "src_ip": z.string().optional(),
  "src_prefixlen": z.number().int().optional(),
  "src_prefix_uuid": z.string().optional(),
  "ip_proto": z.number().int().optional(),
  "dest_ip": z.string().optional(),
  "dest_prefixlen": z.number().int().optional(),
  "dst_port_start": z.number().int().optional(),
  "dst_port_end": z.number().int().optional(),
  "src_port_start": z.number().int().optional(),
  "src_port_end": z.number().int().optional(),
  "pkt_len_start": z.number().int().optional(),
  "pkt_len_end": z.number().int().optional(),
  "tcp_flags": z.number().int().optional(),
  "action": z.number().int().optional(),
  "rate_limit": z.number().int().optional(),
  "comments": z.string().optional()
}