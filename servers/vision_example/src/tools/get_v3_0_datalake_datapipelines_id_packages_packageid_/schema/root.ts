import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique alphanumeric string that identifies a data pipeline.\n"),
  "packageId": z.string().describe("Unique alphanumeric string that identifies a package stored in a data pipeline.\n")
}