import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier of the customer to be updated."),
  "name": z.string().describe("Client name").optional(),
  "cpfCnpj": z.string().describe("Customer CPF or CNPJ").optional(),
  "email": z.string().describe("Customer email").optional(),
  "phone": z.string().describe("Landline").optional(),
  "mobilePhone": z.string().describe("Cell phone").optional(),
  "address": z.string().describe("Public place").optional(),
  "addressNumber": z.string().describe("Address number").optional(),
  "complement": z.string().describe("Address complement").optional(),
  "province": z.string().describe("Neighborhood").optional(),
  "postalCode": z.string().describe("Address zip code").optional(),
  "externalReference": z.string().describe("Customer identifier in your system").optional(),
  "notificationDisabled": z.boolean().describe("true to disable sending billing notifications").optional(),
  "additionalEmails": z.string().describe("Additional emails for sending billing notifications separated by \",\"").optional(),
  "municipalInscription": z.string().describe("Customer municipal registration").optional(),
  "stateInscription": z.string().describe("Customer state registration").optional(),
  "observations": z.string().describe("Additional observations").optional(),
  "groupName": z.string().describe("Name of the group the customer belongs to").optional(),
  "company": z.string().describe("Company").optional(),
  "foreignCustomer": z.boolean().describe("inform true if it's a non-brazilian customer").optional()
}