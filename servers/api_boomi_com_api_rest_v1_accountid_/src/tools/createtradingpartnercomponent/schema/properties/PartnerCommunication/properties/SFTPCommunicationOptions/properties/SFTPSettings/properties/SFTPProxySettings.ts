import { z } from "zod"

export const inputParamsSchema = {
  "host": z.string(),
  "password": z.string(),
  "port": z.number().int(),
  "proxyEnabled": z.boolean().optional(),
  "type": z.enum(["ATOM","HTTP","SOCKS4","SOCKS5"]).optional(),
  "user": z.string()
}