import { z } from "zod"

export const inputParams = {
  "domain": z.string().describe("The domain to import."),
  "remote_nameserver": z.string().describe("The remote nameserver that allows zone transfers (AXFR).")
}