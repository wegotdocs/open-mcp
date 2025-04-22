import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "Cloud provider identifier": z.string().describe("Cloud provider identifier. One of aws, gcp, or azure."),
  "Cloud provider region": z.string().describe("Region identifier within specific cloud providers.")
}