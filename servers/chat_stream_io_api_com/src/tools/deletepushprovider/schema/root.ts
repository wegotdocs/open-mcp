import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["apn","firebase","huawei","xiaomi"]),
  "name": z.string().min(1).max(36)
}