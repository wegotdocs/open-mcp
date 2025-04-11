import { z } from "zod"

export const inputParams = {
  "root_pass": z.string().describe("The root user's password on this Linode. Linode passwords must meet a password strength score requirement that is calculated internally by the API. If the strength requirement is not met, you will receive a Password does not meet strength requirement error.")
}