import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "status": z.enum(["active","inactive","pending"]).describe("The gateway account's status").readonly().optional(),
  "gatewayName": z.enum(["A1Gateway","AmexVPC","AuthorizeNet","Beanstream","BraintreePayments","Cashflows","Cayan","Chase","ChinaUnionPay","Credorax","DataCash","Dengi","eMerchantPay","Flexepin","FundSend","Forte","GET","GlobalCollect","GlobalOne","Gpaysafe","iCheque","Ilixium","JetPay","Jeton","Moneris","NMI","OchaPay","Optimal","PandaGateway","Payeezy","Payflow","PayPal","Payr","Payvision","Plugnpay","Realex","RealTime","RebillyProcessor","Redsys","RPN","Sagepay","SMSVoucher","Stripe","UPayCard","USAePay","VantivLitle","vegaaH","Walpay","Wirecard","Worldpay"]).describe("The gateway name"),
  "acquirerName": z.enum(["Alipay","AIB","B+S","Bank of America","Bank of Moscow","Bank of Rebilly","Bank One","Beanstream","BMO Harris Bank","Borgun","BraintreePayments","Catalunya Caixa","Chase","ChinaUnionPay","CIM","Credorax","Elavon","EMS","Fifth Third Bank","First Data Buypass","First Data Nashville","First Data North","First Data Omaha","Flexepin","Forte","FundSend","GlobalCollect","Global East","Gpaysafe","Heartland","HSBC","iCheque","Ilixium","Jeton","Masapay","Merrick","Mission Valley Bank","Moneris","NATWEST","NMI","OchaPay","Other","Panda Bank","PayPal","Payr","Payvision","Peoples Trust Company","Privatbank","RBC","RBS WorldPay","RealTime","RebillyProcessor","SMSVoucher","State Bank of Mauritius","Stripe","TBI","TrustPay","TSYS","UPayCard","Vantiv","VoicePay","WeChat Pay","Wells Fargo","Wing Hang Bank","Wirecard","WorldPay"]).describe("Acquirer name"),
  "merchantCategoryCode": z.number().int().gte(742).lte(9950).describe("The gateway account's merchant category code"),
  "dccMarkup": z.number().int().gte(1).lte(10000).describe("Dynamic currency conversion markup in basis points").optional(),
  "descriptor": z.string().describe("The gateway account's descriptor").optional(),
  "cityField": z.string().describe("The gateway account's city field (also known as line 2 descriptor)").optional(),
  "organizationId": z.string(),
  "websites": z.array(z.string()).describe("Websites IDs"),
  "excludedDccQuoteCurrencies": z.array(z.string()).describe("Excluded Dynamic Currency Conversion Quote Currencies").optional(),
  "monthlyLimit": z.number().int().gte(0).describe("Monthly Limit").optional(),
  "threeDSecure": z.boolean().describe("True, if Gateway Account allows 3DSecure").optional(),
  "dynamicDescriptor": z.boolean().describe("True, if Gateway Account allows dynamic descriptor").optional(),
  "acceptedCurrencies": z.array(z.string()).describe("Accepted currencies (array of the currency three letter code)"),
  "method": z.enum(["ach","cash","payment-card","paypal","Alipay","China UnionPay","Flexepin","Gpaysafe","Jeton","OchaPay","SMSVoucher","UPayCard","WeChat Pay"]).describe("The payment method").optional(),
  "paymentCardSchemes": z.array(z.enum(["Visa","MasterCard","American Express","Discover","Maestro","Solo","Electron","JCB","Voyager","Diners Club","Switch","Laser","China Unionpay"])).describe("Accepted payment card brands").optional(),
  "downtimeStart": z.string().datetime({ offset: true }).describe("Gateway account downtime start").optional(),
  "downtimeEnd": z.string().datetime({ offset: true }).describe("Gateway account downtime end").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.union([z.string(), z.string()])).min(1).max(2).describe("The links related to resource").readonly().optional()
}