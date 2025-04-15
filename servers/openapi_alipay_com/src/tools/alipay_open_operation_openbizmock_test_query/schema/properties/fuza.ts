import { z } from "zod"

export const inputParams = {
  "aaopen_id": z.string().describe("哈哈").optional(),
  "aauids": z.string().describe("哈哈").optional(),
  "id_type": z.string().describe("哈哈").optional(),
  "oid_open_id": z.string().describe("哈哈").optional(),
  "uid": z.string().describe("哈哈").optional()
}