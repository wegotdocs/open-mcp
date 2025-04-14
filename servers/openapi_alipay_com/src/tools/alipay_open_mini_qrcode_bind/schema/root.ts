import { z } from "zod"

export const inputParams = {
  "mode": z.string().describe("匹配规则，仅支持EXACT（精确匹配）、FUZZY（模糊匹配）两个值。\t\t精确匹配：根据填写的二维码地址精确匹配，地址完全一致时才能唤起小程序（如：配置二维码地址为https://www.alipay.com/my?id=123，当用户扫这个地址的二维码可唤起小程序）。\t\t模糊匹配：根据填写的二维码地址模糊匹配，只要地址前缀匹配即可唤起小程序（如：配置二维码地址为https://www.alipay.com/my/，当用户扫的二维码地址为https://www.alipay.com/my/id=123,可唤起小程序）。").optional(),
  "page_redirection": z.string().describe("小程序功能页，配置扫描二维码后打开的小程序功能页面路径").optional(),
  "route_pattern": z.string().describe("模式，用于描述通用的路由url格式，适用于同一个host下面存在大量路由的场景，主要用于提升路由性能，其中{0}、{1} 代表路径中的变量").optional(),
  "route_url": z.string().describe("二维码域名，须通过ICP备案验证，支持http、https、ftp开头的链接").optional()
}