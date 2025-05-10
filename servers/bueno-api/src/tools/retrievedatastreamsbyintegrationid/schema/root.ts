import { z } from "zod"

export const inputParamsSchema = {
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration"),
  "sortBy": z.enum(["STREAM_ID","STATUS","TYPE","POINT_MAPPINGS_COUNT","CREATED_AT","UPDATED_AT"]).describe("Property to sort the results by").optional(),
  "sortDir": z.enum(["ASC","DESC"]).describe("Direction to sort the results by").optional(),
  "streamId": z.string().describe("Used to filter the Data Streams on the streamId field (only exact matches are returned)").optional(),
  "streamIdRegex": z.string().describe("Used to filter the Data Streams on the streamId field, (regex matches with any part of the streamId are returned)").optional(),
  "limit": z.number().describe("Maximum number data streams to retrieve, when left unset, all Data Streams will be returned").optional(),
  "offset": z.number().describe("Offset to begin returning Data Streams from, to be used along with limit to paginate results").optional(),
  "includePointMappings": z.boolean().describe("When set to true, Point Mappings associated to each Data Stream will also be included in the response").optional()
}