import { z } from "zod"

export const inputParamsSchema = {
  "issueTypeId": z.string().describe("The ID of the issue type."),
  "propertyKey": z.string().describe("The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.")
}