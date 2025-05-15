import { z } from "zod"

export const inputParamsSchema = {
  "dhKeySizeMax1024": z.boolean().optional(),
  "knownHostEntry": z.string(),
  "sshkeyauth": z.boolean().optional(),
  "sshkeypassword": z.string(),
  "sshkeypath": z.string()
}