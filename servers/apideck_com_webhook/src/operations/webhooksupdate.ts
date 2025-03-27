import { z } from "zod"

export const toolName = `webhooksupdate`
export const toolDescription = `Update webhook subscription`
export const baseUrl = `https://unify.apideck.com`
export const path = `/webhook/webhooks/{id}`
export const method = `patch`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.") }).optional(), "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "body": z.object({ "delivery_url": z.string().url().regex(new RegExp("^(https?)://")).describe("The delivery url of the webhook endpoint.").optional(), "description": z.string().nullable().describe("A description of the object.").optional(), "events": z.array(z.enum(["*","crm.activity.created","crm.activity.updated","crm.activity.deleted","crm.company.created","crm.company.updated","crm.company.deleted","crm.contact.created","crm.contact.updated","crm.contact.deleted","crm.lead.created","crm.lead.updated","crm.lead.deleted","crm.note.created","crm.notes.updated","crm.notes.deleted","crm.opportunity.created","crm.opportunity.updated","crm.opportunity.deleted","lead.lead.created","lead.lead.updated","lead.lead.deleted","vault.connection.created","vault.connection.updated","vault.connection.disabled","vault.connection.deleted","vault.connection.callable","vault.connection.token_refresh.failed","ats.job.created","ats.job.updated","ats.job.deleted","ats.applicant.created","ats.applicant.updated","ats.applicant.deleted","accounting.customer.created","accounting.customer.updated","accounting.customer.deleted","accounting.invoice.created","accounting.invoice.updated","accounting.invoice.deleted","accounting.invoice_item.created","accounting.invoice_item.updated","accounting.invoice_item.deleted","accounting.ledger_account.created","accounting.ledger_account.updated","accounting.ledger_account.deleted","accounting.tax_rate.created","accounting.tax_rate.updated","accounting.tax_rate.deleted","accounting.bill.created","accounting.bill.updated","accounting.bill.deleted","accounting.payment.created","accounting.payment.updated","accounting.payment.deleted","accounting.supplier.created","accounting.supplier.updated","accounting.supplier.deleted","pos.order.created","pos.order.updated","pos.order.deleted","pos.product.created","pos.product.updated","pos.product.deleted","pos.payment.created","pos.payment.updated","pos.payment.deleted","pos.merchant.created","pos.merchant.updated","pos.merchant.deleted","pos.location.created","pos.location.updated","pos.location.deleted","pos.item.created","pos.item.updated","pos.item.deleted","pos.modifier.created","pos.modifier.updated","pos.modifier.deleted","pos.modifier-group.created","pos.modifier-group.updated","pos.modifier-group.deleted","hris.employee.created","hris.employee.updated","hris.employee.deleted","hris.company.created","hris.company.updated","hris.company.deleted","file-storage.file.created","file-storage.file.updated","file-storage.file.deleted","issue-tracking.ticket.created","issue-tracking.ticket.updated","issue-tracking.ticket.deleted"])).describe("The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.").optional(), "status": z.enum(["enabled","disabled"]).describe("The status of the webhook.").optional() }).strict().optional() }).shape