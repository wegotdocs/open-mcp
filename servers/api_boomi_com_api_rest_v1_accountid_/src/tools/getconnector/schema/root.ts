import { z } from "zod"

export const inputParamsSchema = {
  "connectorType": z.string().describe("The internal and unique identifier for connector type, such as `http`, `ftp`, `greatplains`. The [Component Metadata object](/api/platformapi#tag/ComponentMetadata) refers to this field as *subType*.")
}