import { z } from "zod"

export const inputParamsSchema = {
  "region": z.string().describe("The [datacenter region](https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters) in which to create the namespace."),
  "label": z.string().describe("The namespace's unique name.")
}