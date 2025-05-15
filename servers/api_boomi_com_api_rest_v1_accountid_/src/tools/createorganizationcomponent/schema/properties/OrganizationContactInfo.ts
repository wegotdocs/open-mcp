import { z } from "zod"

export const inputParamsSchema = {
  "address1": z.string().describe("First line of the street address of the organization."),
  "address2": z.string().describe("Second line of the street address of the organization."),
  "city": z.string().describe("Location of the city for the organization."),
  "contactName": z.string().describe("Name of the contact for the organization."),
  "contactUrl": z.string().describe("Contact URL for the organization."),
  "country": z.string().describe("Location of the country for the organization."),
  "email": z.string().describe("Email address of the organization."),
  "fax": z.string().describe("Fax number for the organization."),
  "phone": z.string().describe("Phone number for the organization."),
  "postalcode": z.string().describe("Postal code, such as a Zip Code."),
  "state": z.string().describe("Location of the state or province for the organization.")
}