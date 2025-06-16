import { z } from "zod"

export const inputParamsSchema = {
  "ip": z.string().describe("IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a subnet type vswitch.")
}