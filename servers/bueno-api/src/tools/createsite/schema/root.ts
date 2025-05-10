import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the Site"),
  "area": z.number().describe("Area of the Site in square meters").optional(),
  "latitude": z.number().describe("Latitude co-ordinates of the Site"),
  "longitude": z.number().describe("Longitude co-ordinates of the Site"),
  "address": z.string().describe("Address of the Site"),
  "city": z.string().describe("City in which the Site is located"),
  "state": z.string().describe("State in which the Site is located"),
  "country": z.string().describe("Two letter country in which the Site is located"),
  "postcode": z.string().describe("Postcode of the Site"),
  "timezone": z.string().describe("Timezone of the Site"),
  "props": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `props` to the tool, first call the tool `expandSchema` with \"/properties/props\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional key-value typed properties associated with the Site</property-description>").optional(),
  "tags": z.array(z.string()).describe("Strings applied to the Site to add context and used for analytics").optional(),
  "refs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `refs` to the tool, first call the tool `expandSchema` with \"/properties/refs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Upstream references for the Site</property-description>")
}