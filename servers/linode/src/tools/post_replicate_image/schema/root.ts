import { z } from "zod"

export const inputParams = {
  "regions": z.array(z.string()).describe("The unique identifier for each compute `region`. See [Regions and images](https://techdocs.akamai.com/cloud-computing/docs/images#regions-and-images) for full details on support for `regions`.").optional()
}