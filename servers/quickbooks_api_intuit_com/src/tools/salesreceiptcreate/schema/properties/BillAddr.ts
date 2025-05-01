import { z } from "zod"

export const inputParamsSchema = {
  "Id": z.string().describe("Unique identifier of the QuickBooks object for the address, used for modifying the address.").optional(),
  "PostalCode": z.string().describe("Postal code. For example, zip code for USA and Canada").optional(),
  "City": z.string().describe("City name.").optional(),
  "Country": z.string().describe("Country name. For international addresses - countries should be passed as 3 ISO alpha-3 characters or the full name of the country.").optional(),
  "Line5": z.string().describe("Fifth line of the address.").optional(),
  "Line4": z.string().describe("Fourth line of the address.").optional(),
  "Line3": z.string().describe("Third line of the address.").optional(),
  "Line2": z.string().describe("Second line of the address.").optional(),
  "Line1": z.string().describe("First line of the address.").optional(),
  "Lat": z.string().describe("Latitude coordinate of Geocode (Geospacial Entity Object Code). INVALIDis returned for invalid addresses.").optional(),
  "Long": z.string().describe("Longitude coordinate of Geocode (Geospacial Entity Object Code). INVALIDis returned for invalid addresses.").optional(),
  "CountrySubDivisionCode": z.string().describe("Region within a country. For example, state name for USA, province name for Canada.").optional()
}