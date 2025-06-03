import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique alphanumeric string that identifies a data pipeline.\n"),
  "type": z.enum(["telemetry","detection"]).describe("Data type\n").optional(),
  "subType": z.array(z.enum(["endpointActivity","cloudActivity","emailActivity","mobileActivity","networkActivity","containerActivity","identityActivity","all"])).describe("Default: `\"all\"`\n\n(Optional) Allows you to specify the type of data to retrieve. If no value is specified, the pipeline retrieves all available data types.\n\nNote: Only applicable for the Telemetry data source.\n").optional(),
  "description": z.string().max(4000).describe("Notes or comments about the pipeline.\n").optional()
}