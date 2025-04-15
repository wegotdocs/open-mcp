import { z } from "zod"

export const inputParams = {
  "access": z.boolean().describe("If `true`, Linode special forces may access this Linode over ssh to respond to Issues.").optional(),
  "ip": z.string().ip().describe("The IP Linode special forces should use to access this Linode when responding to an Issue.\n\nBy default, any of a Linode's IP addresses can be used for incident response access.").optional(),
  "port": z.number().int().gte(1).lte(65535).nullable().describe("The port Linode special forces should use to access this Linode over ssh to respond to an Issue.\n\nThe default `null` value corresponds to port 22.").optional(),
  "user": z.string().min(0).max(32).nullable().describe("The specific user, if any, Linode's special forces should use when accessing this Linode to respond to an issue.\n\nThe default `null` value corresponds to the root user.").optional()
}