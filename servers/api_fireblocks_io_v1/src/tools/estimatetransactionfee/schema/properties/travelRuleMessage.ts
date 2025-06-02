import { z } from "zod"

export const inputParamsSchema = {
  "originatorVASPdid": z.string().describe("The Decentralized Identifier (DID) of the exchange (VASP) that is sending the virtual assets. This identifier is unique to the exchange and is generated when the exchange's account is  created in the Notabene network.").optional(),
  "beneficiaryVASPdid": z.string().describe("The Decentralized Identifier (DID) of the exchange (VASP) that is receiving the virtual assets. This identifier is unique to the exchange and is generated when the exchange's account is  created in the Notabene network.").optional(),
  "originatorVASPname": z.string().describe("The name of the VASP acting as the transaction originator.").optional(),
  "beneficiaryVASPname": z.string().describe("The name of the VASP acting as the transaction beneficiary.").optional(),
  "beneficiaryVASPwebsite": z.string().describe("The website of the VASP acting as the transaction beneficiary.").optional(),
  "transactionBlockchainInfo": z.string().optional(),
  "originator": z.string(),
  "beneficiary": z.string(),
  "encrypted": z.string().describe("Encrypted data related to the transaction.").optional(),
  "protocol": z.string().describe("The protocol used to perform the travel rule.").optional(),
  "skipBeneficiaryDataValidation": z.boolean().describe("Whether to skip validation of beneficiary data.").optional(),
  "travelRuleBehavior": z.boolean().describe("Whether to check if the transaction complies with the travel rule in the beneficiary VASP's jurisdiction.").optional(),
  "originatorRef": z.string().describe("A reference ID related to the originator of the transaction.").optional(),
  "beneficiaryRef": z.string().describe("A reference ID related to the beneficiary of the transaction.").optional(),
  "travelRuleBehaviorRef": z.string().describe("A reference ID related to the travel rule behavior.").optional(),
  "originatorProof": z.string().optional(),
  "beneficiaryProof": z.string().optional(),
  "beneficiaryDid": z.string().describe("The Decentralized Identifier (DID) of the person at the receiving exchange (VASP).  This identifier is generated when the customer is registered in the Notabene network,  or automatically created based on the `beneficiaryRef`.  - If neither `beneficiaryRef` nor `beneficiaryDid` is provided in the `txCreate` payload, \n  a new random DID is generated for every transaction.").optional(),
  "originatorDid": z.string().describe("The Decentralized Identifier (DID) of the person at the exchange (VASP) who is requesting the withdrawal. This identifier is generated when the customer is registered in the Notabene network or automatically created based on the `originatorRef`.  - If neither `originatorRef` nor `originatorDid` is provided in the `txCreate` payload, \n  a new random DID is generated for every transaction.").optional(),
  "isNonCustodial": z.boolean().describe("Indicates if the transaction involves a non-custodial wallet.").optional()
}