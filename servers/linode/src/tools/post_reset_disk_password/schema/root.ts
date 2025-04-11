import { z } from "zod"

export const inputParams = {
  "password": z.string().describe("The new root password for the OS installed on this Disk. The password must meet the complexity strength validation requirements for a strong password.")
}