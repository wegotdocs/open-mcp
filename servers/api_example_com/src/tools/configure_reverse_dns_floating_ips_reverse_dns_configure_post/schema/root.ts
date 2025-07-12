import { z } from "zod"

export const inputParamsSchema = {
  "ip": z.string().describe("Floating IP address to configure reverse DNS for"),
  "reverse_dns": z.string().describe("Reverse DNS hostname (e.g., 'myhost.example.com'). Leave empty to delete.").optional()
}