import { z } from "zod"

export const inputParams = {
  "CustID": z.string().describe("Account Number"),
  "DOB": z.string().describe("Date of birth in DD-MM-YYYY format"),
  "finYr": z.string().describe("Financial Year")
}