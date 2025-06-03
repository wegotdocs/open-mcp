import { z } from "zod"

export const inputParamsSchema = {
  "top": z.union([z.literal(25), z.literal(50), z.literal(100)]).describe("The number of records displayed on a page.").optional(),
  "TMV1-Filter": z.string().max(1024).describe("The filter for retrieving a subset of the Kubernetes image occurences list. Include this parameter in every request that generates paginated output\n\nSupported fields:\n| Field        | Description                           |\n| ------------ | ------------------------------------- |\n| `clusterid`  | The ID of the Kubernetes cluster      |\n| `imageid`    | The  The ID of the container image         |\n\nSupported operators:\n* `eq` - Operator \"equal to\"\n* `and` - Operator \"and\"\n* `or` - Operator \"or\"\n* `not` - Operator \"not\"\n* `()` - Symbols for grouping operands\n").optional()
}