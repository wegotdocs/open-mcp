import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Cluster's identifier"),
  "host_id": z.string().uuid().describe("Host's identifier"),
  "operation": z.string().describe("Operation to be performed on the cluster's host")
}