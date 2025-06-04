import { z } from "zod"

export const inputParamsSchema = {
  "host": z.string().describe("The hostname of the SMTP service. Required.").optional(),
  "password": z.string().describe("The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.").optional(),
  "port": z.number().int().describe("The port of the SMTP service. Required.").optional(),
  "securityMode": z.enum(["securityModeUnspecified","none","ssl","starttls"]).describe("The protocol that will be used to secure communication with the SMTP service. Required.").optional(),
  "username": z.string().describe("The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.").optional()
}