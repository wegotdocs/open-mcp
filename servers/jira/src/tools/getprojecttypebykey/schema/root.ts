import { z } from "zod"

export const inputParamsSchema = {
  "projectTypeKey": z.enum(["software","service_desk","business","product_discovery"]).describe("The key of the project type.")
}