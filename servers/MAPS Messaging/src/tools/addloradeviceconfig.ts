import { z } from "zod"

export const toolName = `addloradeviceconfig`
export const toolDescription = `Add a new LoRa device configuration`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/device/lora/config`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "name",
    "radio",
    "cs",
    "irq",
    "rst",
    "power",
    "cadTimeout",
    "frequency"
  ]
}
export const flatMap = {}

export const inputParams = {
  "name": z.string().describe("The name of the LoRa device.").optional(),
  "radio": z.string().describe("Type of radio module used by the LoRa device.").optional(),
  "cs": z.number().int().gte(0).describe("The chip select pin number for the LoRa device.").optional(),
  "irq": z.number().int().gte(0).describe("The interrupt request (IRQ) pin number for the LoRa device.").optional(),
  "rst": z.number().int().gte(0).describe("The reset pin number for the LoRa device.").optional(),
  "power": z.number().int().gte(0).lte(20).describe("The transmission power level setting for the LoRa device.").optional(),
  "cadTimeout": z.number().int().gte(0).describe("The Channel Activity Detection (CAD) timeout in milliseconds.").optional(),
  "frequency": z.number().gte(0).describe("The operating frequency for the LoRa device in MHz.").optional()
}