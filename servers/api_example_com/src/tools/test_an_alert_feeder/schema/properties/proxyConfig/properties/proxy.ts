import { z } from "zod"

export const inputParamsSchema = {
  "host": z.string().min(1).max(128).optional(),
  "port": z.number().int().optional(),
  "state": z.enum(["enabled","disabled","default"]),
  "protocol": z.string().min(1).max(16).optional(),
  "principal": z.string().min(1).max(32).optional(),
  "password": z.string().min(1).max(128).optional(),
  "ntlmDomain": z.string().min(1).max(128).optional(),
  "encoding": z.string().min(1).max(32).optional(),
  "nonProxyHosts": z.array(z.string().min(1).max(128)).optional()
}