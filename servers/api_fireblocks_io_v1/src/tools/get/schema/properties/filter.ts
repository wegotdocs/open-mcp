import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique connection ID").optional(),
  "userId": z.string().describe("User ID that established the connection").optional(),
  "vaultAccountId": z.number().describe("Unique vault account identifier that the connection was established with").optional(),
  "connectionMethod": z.enum(["MOBILE","DESKTOP"]).describe("The method that the connection was established with.\n\n- MOBILE: for connections that were established by scanning a WalletConnect QR code \n- DESKTOP: for connection that were established by WalletConnect desktop connections\n").optional(),
  "feeLevel": z.enum(["MEDIUM","HIGH"]).describe("The fee level for the transactions over the connection").optional(),
  "appUrl": z.string().describe("The dApp URL").optional(),
  "appName": z.string().describe("dApps name").optional()
}