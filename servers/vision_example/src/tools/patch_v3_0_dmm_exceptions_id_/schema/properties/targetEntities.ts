import { z } from "zod"

export const inputParamsSchema = {
  "endpointGUID": z.array(z.string().max(128)).max(50).describe("GUID of the agent which reported the detection").optional(),
  "endpointHostName": z.array(z.string().max(128)).max(50).describe("Device name of the endpoint").optional(),
  "endpointIp": z.array(z.string().max(128)).max(50).describe("IP address of the endpoint").optional(),
  "src": z.array(z.string().max(128)).max(50).describe("Source IP address").optional(),
  "dst": z.array(z.string().max(128)).max(50).describe("Destination IP address").optional(),
  "suser": z.array(z.string().email().max(128)).max(50).describe("Email sender").optional(),
  "mailFromAddress": z.array(z.string().email().max(128)).max(50).describe("Sender address").optional(),
  "mailbox": z.array(z.string().email().max(128)).max(50).describe("The mailbox where the email is located").optional(),
  "samUser": z.array(z.string().max(128)).max(50).describe("Security Account Manager user name").optional()
}