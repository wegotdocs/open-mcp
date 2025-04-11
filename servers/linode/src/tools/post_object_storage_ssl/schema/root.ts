import { z } from "zod"

export const inputParams = {
  "certificate": z.string().describe("Your Base64 encoded and PEM formatted SSL certificate.\n\nLine breaks must be represented as `\\n` in the string for requests (but not when using the Linode CLI)"),
  "private_key": z.string().describe("The private key associated with this TLS/SSL certificate.\n\nLine breaks must be represented as `\\n` in the string for requests (but not when using the Linode CLI)")
}