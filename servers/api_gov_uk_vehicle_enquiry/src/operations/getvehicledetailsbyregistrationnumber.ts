import { z } from "zod"

export const toolName = `getvehicledetailsbyregistrationnumber`
export const toolDescription = `Get vehicle details by registration number`
export const baseUrl = `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry`
export const path = `/v1/vehicles`
export const method = `post`
export const security = []

export const inputParams = z.object({ "header": z.object({ "x-api-key": z.string().describe("Client Specific API Key"), "X-Correlation-Id": z.string().describe("Consumer Correlation ID").optional() }).optional(), "body": z.object({ "registrationNumber": z.string().optional() }).optional() }).shape