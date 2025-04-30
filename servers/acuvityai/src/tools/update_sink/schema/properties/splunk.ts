import { z } from "zod"

export const inputParamsSchema = {
  "HECURL": z.string().describe("The HTTP event collector (HEC) URL to send the alert to."),
  "certificateAuthority": z.string().describe("If set, will use this as the CA for TLS communication.").optional(),
  "insecureSkipVerify": z.boolean().describe("If true, will attempt to skip TLS verification when communicating.").optional(),
  "token": z.string().describe("The token to communicate with the HTTP event collector.")
}