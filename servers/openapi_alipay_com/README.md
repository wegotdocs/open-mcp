# @open-mcp/openapi_alipay_com

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/openapi_alipay_com add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/openapi_alipay_com add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/openapi_alipay_com add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "openapi_alipay_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/openapi_alipay_com"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/openapi_alipay_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/openapi_alipay_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### alios_open_auto_info_query

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "open_id": z.string().describe("经度").optional(),
  "device_token": z.string().describe("设备token").optional()
}
```

### alipay_boss_fnc_invoice_apply

**Environment variables**



**Input schema**

```ts
{
  "biz_id": z.string().describe("调用方身份识别标记(应用名称) 与业务单据号联合唯一").optional(),
  "biz_no": z.string().describe("业务单据号，业务流水号").optional(),
  "invoice_amt": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "invoice_type": z.string().describe("申请开票类型，01：专票；02：普票").optional(),
  "memo": z.string().describe("备注").optional(),
  "mthtly_bill_nos": z.array(z.string()).describe("需开票的应收月账单号").optional(),
  "operator": z.string().describe("申请人的uid号").optional(),
  "out_biz_type": z.string().describe("01主站，02芝麻，03金融云").optional()
}
```

### alipay_boss_fnc_invoice_batchquery

**Environment variables**



**Input schema**

```ts
{
  "apply_order_id": z.string().describe("开票申请ID，唯一标识开票申请表的ID").optional(),
  "buyer_invoice_title": z.string().describe("买方发票抬头，用于打印在发票上").optional(),
  "buyer_ipid": z.string().describe("对应发票商户的ipId，在主站标示mid，在其他环境标示ip_id。").optional(),
  "buyer_ipids": z.array(z.string()).describe("购方商户ID集合").optional(),
  "buyer_iprole_id": z.string().describe("商户结算的ipRoleId，表示商户的结算对象，在主站表示pid。").optional(),
  "buyer_iprole_ids": z.array(z.string()).describe("购方PID集合").optional(),
  "inst_id": z.string().describe("对应发票所在OU的id，用于标示该发票所述的OU。").optional(),
  "invoice_channel": z.string().describe("开票渠道 01 线上;02 线下").optional(),
  "invoice_code": z.string().describe("发票代码，税务部门给予发票的编码").optional(),
  "invoice_create_date_begin": z.string().describe("发票创建日期【起始日期，格式yyyyMMdd】").optional(),
  "invoice_create_date_end": z.string().describe("发票创建日期【结束日期，格式yyyyMMdd】").optional(),
  "invoice_ids": z.array(z.string()).describe("发票ID集合，发票ID，唯一标示一张发票的ID").optional(),
  "invoice_material": z.string().describe("开票介质 01电子 02纸质").optional(),
  "invoice_no": z.string().describe("发票号码，税务部门给予发票的编码").optional(),
  "invoice_open_date_begin": z.string().describe("发票开票日期【起始日期，格式yyyyMMdd】").optional(),
  "invoice_open_date_end": z.string().describe("发票开票日期【结束日期，格式yyyyMMdd】").optional(),
  "invoice_status": z.array(z.string()).describe("发票状态：用于标示发票当前的状态，状态类型以及相关含义：01 待开票;02 开票中;03 已开票;04 作废中;05 已作废;06 红冲中;07 已红冲;08 部分红冲;09 无效").optional(),
  "invoice_types": z.array(z.string()).describe("发票类型,01专票 02普票 03营业税发票 04国际形式发票 05其它发票").optional(),
  "is_online": z.string().describe("是否能在线开票 Y能 N不能").optional(),
  "is_red": z.string().describe("是否红字 Y红字 N蓝字").optional(),
  "mail_status": z.array(z.string()).describe("邮寄状态 01 待邮寄;02 已邮寄;03 退回中;04 已退回").optional(),
  "monthly_bill_no": z.string().describe("月账单号").optional(),
  "page_no": z.number().int().describe("起始页，分页时必须提供").optional(),
  "page_size": z.number().int().describe("每页显示数，分页时必须提供").optional(),
  "tracking_no": z.string().describe("快递单号").optional()
}
```

### alipay_boss_fnc_invoice_query

**Environment variables**



**Input schema**

```ts
{
  "invoice_id": z.string().describe("查询ID：用于标示一张发票，通过发票综合查询可以查询到该ID。").optional()
}
```

### alipay_boss_fnc_invoicereceipt_batchquery

**Environment variables**



**Input schema**

```ts
{
  "bill_nos": z.array(z.string()).describe("月账单号集合，唯一性ID集合，月账单表唯一主键ID集合").optional(),
  "out_biz_type": z.string().describe("来源类型，01：主站；02：芝麻；03：金融云；04：微贷").optional()
}
```

### alipay_boss_fnc_invoicereceipt_create

**Environment variables**



**Input schema**

```ts
{
  "event_code": z.string().describe("账单金额变更消息事件码\r\tAR_MTHLY_BILL_CREATE:应收账单创建,\r\tAR_MTHLY_BILL_CHANGE:应收金额更新").optional(),
  "event_type": z.string().describe("账单金额变更消息事件类型\r\tCREATE:创建事件,UPDATE:更新事件").optional(),
  "monthly_bill": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "msg_id": z.string().describe("事件全局id，可以使用uuid").optional(),
  "out_biz_type": z.string().describe("消息来源 01:主站，02：芝麻，03:金融云,04:微贷").optional()
}
```

### alipay_boss_fnc_userinvoiceinfo_create

**Environment variables**



**Input schema**

```ts
{
  "accept_electronic": z.boolean().describe("是否接受电子票 true:是，false:否").optional(),
  "address": z.string().describe("公司注册地址，公司营业执照上登记的住址，一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "addressing": z.boolean().describe("开票资料pid寻址方式 true:pid寻址mid,优先以mid维度保存开票资料,若无mid则以pid维度保存开票资料 false:不寻址mid,以pid维度保存开票资料;非主站商户体系都是以pid（ipRoleId）维度保存开票资料，该值直接填为false").optional(),
  "auto": z.boolean().describe("是否自动申请开票 true:是，false:否").optional(),
  "bank_account": z.string().describe("银行账户，公司银行账号\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "bank_name": z.string().describe("开户行，办理银行开户手续的营业网点\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "business_licence_url": z.string().describe("营业执照地址，营业执照上传oss上的地址").optional(),
  "hold": z.boolean().describe("是否暂停开票，商户添加的开票资料就是不暂停开票，如果后续要暂停开票，只能去结算中台处理。").optional(),
  "ip_role_id": z.string().describe("商户的pid（ipRoleId）").optional(),
  "open_account_permit_url": z.string().describe("银行开户许可证附件，银行开户许可证上传oss上的地址").optional(),
  "operator": z.string().describe("当前操作人").optional(),
  "operator_type": z.string().describe("当前操作人类型,01:商户 02:管理员(小二)").optional(),
  "other_qualification_url": z.string().describe("其它资质证明地址，其他资质证明附件上传oss上的地址").optional(),
  "ou": z.boolean().describe("外部只允许添加商户开票资料，该值填写为false").optional(),
  "tax_no": z.string().describe("纳税人识别号，税务登记证上的号码。一般纳税人必须填写，小规模纳税人如果是商户也必须填写，个人无需填写").optional(),
  "tax_payer_quali_valid": z.string().describe("纳税人资格开始时间 （格式：时间戳）\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "tax_payer_qualification": z.string().describe("纳税人资格种类，01：一般纳税人；02：小规模纳税人；03：国际商户").optional(),
  "tax_qualification_url": z.string().describe("一般纳税人资格证书地址，一般纳税人资格证书上传oss上的地址").optional(),
  "tax_reg_cert_url": z.string().describe("税务登记证地址，税务登记证上传oss上的地址").optional(),
  "telephone": z.string().describe("公司注册电话（手机号和座机均可）\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "title": z.string().describe("发票抬头，票面信息上的抬头信息").optional(),
  "user_mail_info_order_list": z.array(z.object({ "city": z.string().describe("联系所在城市").optional(), "country": z.string().describe("联系人国家").optional(), "county_district": z.string().describe("联系人所在县/区").optional(), "detail_address": z.string().describe("联系所在详细地址").optional(), "email": z.string().describe("电子邮箱").optional(), "ip_role_id": z.string().describe("商户ipRole(pid)").optional(), "name": z.string().describe("联系人名字").optional(), "province": z.string().describe("联系人省份").optional(), "street": z.string().describe("联系人所在街道").optional(), "telephone": z.string().describe("联系人电话").optional() })).describe("收件人列表,若不修改此项可以不填\r\t选择非电子票时，邮寄信息必填，且保证邮寄信息的ipRoleId和开票资料的ipRoleId相等").optional()
}
```

### alipay_boss_fnc_userinvoiceinfo_modify

**Environment variables**



**Input schema**

```ts
{
  "accept_electronic": z.boolean().describe("是否接受电子票 true:是，false:否").optional(),
  "address": z.string().describe("公司注册地址，公司营业执照上登记的住址，一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "auto": z.boolean().describe("是否自动申请开票 true:是；false:否").optional(),
  "bank_account": z.string().describe("银行账户，公司银行账号\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "bank_name": z.string().describe("开户行，办理银行开户手续的营业网点\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "business_licence_url": z.string().describe("营业执照地址，营业执照上传oss上的地址").optional(),
  "hold": z.boolean().describe("是否暂停开票，商户修改无效，如果要暂停开票，只能去结算中台处理。").optional(),
  "id": z.string().describe("开票资料ID").optional(),
  "open_account_permit_url": z.string().describe("银行开户许可证附件，银行开户许可证上传oss上的地址").optional(),
  "operator": z.string().describe("当前操作人").optional(),
  "operator_type": z.string().describe("当前操作人类型,01:商户；02:管理员(小二)").optional(),
  "other_qualification_url": z.string().describe("其它资质证明地址，其他资质证明附件上传oss上的地址").optional(),
  "tax_no": z.string().describe("纳税人识别号，税务登记证上的号码。一般纳税人必须填写，小规模纳税人如果是商户也必须填写，个人无需填写").optional(),
  "tax_payer_quali_valid": z.string().describe("纳税人资格开始时间 （格式：时间戳）\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "tax_payer_qualification": z.string().describe("纳税人资格种类，01：一般纳税人；02：小规模纳税人；03：国际商户").optional(),
  "tax_qualification_url": z.string().describe("一般纳税人资格证书地址，一般纳税人资格证书上传oss上的地址").optional(),
  "tax_reg_cert_url": z.string().describe("税务登记证地址，税务登记证上传oss上的地址").optional(),
  "telephone": z.string().describe("公司注册电话\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "title": z.string().describe("发票抬头，票面信息上的抬头信息").optional(),
  "user_mail_info_order_list": z.array(z.object({ "city": z.string().describe("联系所在城市").optional(), "country": z.string().describe("联系人国家").optional(), "county_district": z.string().describe("联系人所在县/区").optional(), "detail_address": z.string().describe("联系所在详细地址").optional(), "email": z.string().describe("电子邮箱").optional(), "ip_role_id": z.string().describe("商户ipRole(pid)").optional(), "name": z.string().describe("联系人名字").optional(), "province": z.string().describe("联系人省份").optional(), "street": z.string().describe("联系人所在街道").optional(), "telephone": z.string().describe("联系人电话").optional() })).describe("收件人列表,若不修改此项可以不填\r\t选择非电子票时，邮寄信息必填，且保证邮寄信息的ipRoleId和开票资料的ipRoleId相等").optional()
}
```

### alipay_boss_fnc_userinvoiceinfo_query

**Environment variables**



**Input schema**

```ts
{
  "pid": z.string().describe("开票pid/mid/ou，唯一标识商户信息/集团用户信息的ID").optional()
}
```

### alipay_commerce_cityfacilitator_station_query

**Environment variables**



**Input schema**

```ts
{
  "city_code": z.string().describe("城市编码请参考查询 <a href=\"http://www.mca.gov.cn/article/sj/xzqh/\">中华人民共和国行政区划代码</a>。\t已支持城市：广州 440100，深圳 440300，杭州330100。").optional()
}
```

### alipay_commerce_cityfacilitator_voucher_batchquery

**Environment variables**



**Input schema**

```ts
{
  "city_code": z.string().describe("城市编码请参考查询 <a href=\"http://www.mca.gov.cn/article/sj/xzqh/\">中华人民共和国行政区划代码</a>。\t已支持城市：广州 440100，深圳 440300，杭州330100。").optional(),
  "trade_nos": z.array(z.string()).describe("支付宝交易号列表").optional()
}
```

### alipay_commerce_cityfacilitator_voucher_generate

**Environment variables**



**Input schema**

```ts
{
  "city_code": z.string().describe("城市编码请参考查询 <a href=\"http://www.mca.gov.cn/article/sj/xzqh/\">中华人民共和国行政区划代码</a>。\t已支持城市：广州 440100，深圳 440300，杭州330100。").optional(),
  "site_begin": z.string().describe("起点站站点编码").optional(),
  "site_end": z.string().describe("终点站站点编码").optional(),
  "ticket_num": z.string().describe("地铁票购票数量").optional(),
  "ticket_price": z.string().describe("单张票价，元为单价").optional(),
  "ticket_type": z.string().describe("地铁票种类，枚举支持：\t*oneway。").optional(),
  "total_fee": z.string().describe("订单总金额，元为单位").optional(),
  "trade_no": z.string().describe("支付宝交易号（交易支付时，必须通过指定sellerId：2088121612215201，将钱支付到指定的中间户中）").optional()
}
```

### alipay_commerce_cityfacilitator_voucher_refund

**Environment variables**



**Input schema**

```ts
{
  "city_code": z.string().describe("城市编码请参考查询 <a href=\"http://www.mca.gov.cn/article/sj/xzqh/\">中华人民共和国行政区划代码</a>。\t已支持城市：广州 440100，深圳 440300，杭州330100。").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}
```

### alipay_commerce_ec_balance_downloadurl_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业ID").optional(),
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "bill_type": z.string().describe("账单类型").optional(),
  "bill_date": z.string().describe("账单时间").optional()
}
```

### alipay_commerce_ec_balance_period_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账户id - 适用于在企业码小程序创建的共同账户，和agreement_no搭配使用").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "bill_day": z.number().int().describe("月账单账期").optional(),
  "enterprise_id": z.string().describe("企业ID - 适用于在企业码PC端创建的企业账号").optional()
}
```

### alipay_commerce_ec_consume_detail_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业ID").optional(),
  "pay_no": z.string().describe("支付宝账单号").optional(),
  "query_options": z.array(z.string()).describe("查询选项").optional()
}
```

### alipay_commerce_ec_department_create

**Environment variables**



**Input schema**

```ts
{
  "department_code": z.string().describe("部门编码").optional(),
  "department_name": z.string().describe("部门名称").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "parent_department_id": z.string().describe("上级部门id").optional()
}
```

### alipay_commerce_ec_department_info_modify

**Environment variables**



**Input schema**

```ts
{
  "department_code": z.string().describe("部门编码，不同部门的编码不能相同，为空则代表不修改").optional(),
  "department_id": z.string().describe("待修改部门的部门id").optional(),
  "department_name": z.string().describe("部门名称，为空则代表不修改").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "parent_department_id": z.string().describe("上级部门id，为空则代表不修改").optional()
}
```

### alipay_commerce_ec_department_delete

**Environment variables**



**Input schema**

```ts
{
  "department_id": z.string().describe("部门id").optional(),
  "enterprise_id": z.string().describe("企业id").optional()
}
```

### alipay_commerce_ec_department_info_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id").optional(),
  "department_id": z.string().describe("部门id").optional()
}
```

### alipay_commerce_ec_department_sublist_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id").optional(),
  "department_id": z.string().describe("部门id，特殊值 -1 表示查询根部门id").optional()
}
```

### alipay_commerce_ec_employee_add

**Environment variables**



**Input schema**

```ts
{
  "create_share_code": z.boolean().describe("是否需要生成吱口令，默认不生成").optional(),
  "department_ids": z.array(z.string()).describe("员工所属部门，支持多个部门，不传默认为根部门").optional(),
  "employee_cert_no": z.string().describe("员工证件号码").optional(),
  "employee_cert_type": z.string().describe("员工证件类型").optional(),
  "employee_email": z.string().describe("员工邮箱").optional(),
  "employee_mobile": z.string().describe("员工手机号").optional(),
  "employee_name": z.string().describe("员工姓名").optional(),
  "employee_no": z.string().describe("员工编号/工号").optional(),
  "encrypt_cert_no": z.string().describe("加密证件号，需与证件类型搭配使用，可替代证件号码(employee_cert_no)字段").optional(),
  "encrypt_mobile": z.string().describe("加密手机号，可替代手机号(employee_mobile)字段").optional(),
  "enterprise_id": z.string().describe("员工所属企业ID").optional(),
  "free_sign_token": z.string().describe("员工签约授权密钥；<br/>\t该密钥需联系企业码业务小二申请，当传入密钥有效，则员工添加时会默认签约企业因公付，并激活员工。").optional(),
  "identity": z.string().describe("员工身份唯一标识").optional(),
  "identity_open_id": z.string().describe("当身份类型为支付宝会员ID(identity_type=ALIPAY_USER_ID)时，传入user_id对应的open_id").optional(),
  "identity_type": z.string().describe("员工身份类型").optional(),
  "iot_check_type": z.string().describe("员工签约开通企业刷脸付时，刷脸核身的核验方式").optional(),
  "profiles": z.string().describe("个性化信息 <a href='https://opendocs.alipay.com/pre-open/0ceh47?pathHash=14fac87c'>详见文档</a>").optional(),
  "sign_return_url": z.string().describe("员工签约后回跳地址；支持 alipay scheme 协议地址，不传默认跳转企业码小程序首页").optional(),
  "sign_url_carry_info": z.boolean().describe("签约链接页面是否需要自动回显员工的身份信息（手机或邮箱），默认不显示").optional(),
  "withholding_sign_str": z.string().describe("代扣签约字符串，员工需签约开通代扣时必传，否则无需传值").optional()
}
```

### alipay_commerce_ec_employee_delete

**Environment variables**



**Input schema**

```ts
{
  "employee_id": z.string().describe("员工id").optional(),
  "enterprise_id": z.string().describe("企业id").optional()
}
```

### alipay_commerce_ec_employee_idlist_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id").optional(),
  "department_id": z.string().describe("部门id").optional(),
  "page_num": z.number().int().describe("查询页数").optional(),
  "page_size": z.number().int().describe("每页查询大小，限制最大为1000").optional()
}
```

### alipay_commerce_ec_employee_info_modify

**Environment variables**



**Input schema**

```ts
{
  "department_ids": z.array(z.string()).describe("员工所属部门。如果不传值，则不更新所属部门").optional(),
  "employee_email": z.string().describe("员工邮箱。如果不传值，则不更新邮箱。").optional(),
  "employee_id": z.string().describe("员工id").optional(),
  "employee_mobile": z.string().describe("员工手机号。如果不传值，则不更新手机号。").optional(),
  "employee_name": z.string().describe("员工姓名").optional(),
  "employee_no": z.string().describe("员工工号。如果不传值，则不更新工号。").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "profiles": z.string().describe("个性化信息。如果不传值，则不更新个性化信息。 <a href='https://opendocs.alipay.com/pre-open/0ceh47?pathHash=14fac87c'>详见文档</a>").optional(),
  "role_list": z.array(z.string()).describe("角色列表，目前只支持填一种角色。如果不传值，则不更新角色。").optional()
}
```

### alipay_commerce_ec_employee_info_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id").optional(),
  "employee_id": z.string().describe("员工id").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "mobile": z.string().describe("员工手机号码").optional()
}
```

### alipay_commerce_ec_employee_invite_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id").optional(),
  "employee_id": z.string().describe("企业码员工ID，签约适用对象为指定员工时填写").optional(),
  "page_content_code": z.string().describe("用于展示不同的页面文案，使用标准页面文案是无需传值").optional(),
  "withholding_sign_str": z.string().describe("代扣签约串。需要签约代扣协议时，必传，返回的签约链接会拼接上代扣签约串。").optional(),
  "create_share_code": z.string().describe("是否生成签约吱口令，不传默认为N").optional()
}
```

### alipay_commerce_ec_employee_title_create

**Environment variables**



**Input schema**

```ts
{
  "employee_title_list": z.array(z.object({ "account_id": z.string().describe("共同账户id,与enterprise_id两者必填其一").optional(), "create_by": z.string().describe("创建人").optional(), "employee_id": z.string().describe("企业域定义的员工id，与user_id两者必填其一").optional(), "enterprise_id": z.string().describe("企业域定义的企业id，与account_id两者必填其一").optional(), "modify_by": z.string().describe("修改人").optional(), "open_id": z.string().describe("员工支付宝账号open_id,与employee_id两者必填其一").optional(), "title_id": z.string().describe("抬头id").optional(), "title_tag": z.string().describe("关系标记").optional(), "user_id": z.string().describe("员工支付宝账号2088,与employee_id两者必填其一").optional() })).describe("员工与抬头关系列表").optional()
}
```

### alipay_commerce_ec_employee_title_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账号id，与enterprise_id两者必填其一").optional(),
  "create_by": z.string().describe("创建人").optional(),
  "employee_id": z.string().describe("企业域定义的员工id，与user_id两者必填其一").optional(),
  "enterprise_id": z.string().describe("企业域定义下的企业id，与accountId两者必填其一").optional(),
  "modify_by": z.string().describe("修改人").optional(),
  "new_title_id": z.string().describe("修改后的抬头id").optional(),
  "old_title_id": z.string().describe("修改前的抬头id").optional(),
  "open_id": z.string().describe("支付宝open_id，与employee_id两者必填其一").optional(),
  "title_tag": z.string().describe("员工抬头关系标").optional(),
  "user_id": z.string().describe("支付宝id2088，与employee_id两者必填其一").optional()
}
```

### alipay_commerce_ec_employee_title_delete

**Environment variables**



**Input schema**

```ts
{
  "employee_title_list": z.array(z.object({ "account_id": z.string().describe("共同账户id,与enterprise_id两者必填其一").optional(), "create_by": z.string().describe("创建人").optional(), "employee_id": z.string().describe("企业域定义的员工id，与user_id两者必填其一").optional(), "enterprise_id": z.string().describe("企业域定义的企业id，与account_id两者必填其一").optional(), "modify_by": z.string().describe("修改人").optional(), "open_id": z.string().describe("员工支付宝账号open_id,与employee_id两者必填其一").optional(), "title_id": z.string().describe("抬头id").optional(), "title_tag": z.string().describe("关系标记").optional(), "user_id": z.string().describe("员工支付宝账号2088,与employee_id两者必填其一").optional() })).describe("员工抬头列表").optional()
}
```

### alipay_commerce_ec_enterprise_info_modify

**Environment variables**



**Input schema**

```ts
{
  "enterprise_alias": z.string().describe("企业简称").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "enterprise_name": z.string().describe("企业名称").optional()
}
```

### alipay_commerce_ec_enterprise_address_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("通过企业码2.0签约接口签约，只填写企业id，无需填写共同账户id和授权签约协议号。").optional(),
  "account_id": z.string().describe("通过企业码1.0接口签约的共同账户，和agreement_no搭配使用。").optional(),
  "agreement_no": z.string().describe("可通过签约消息获取。配合共同账户id使用，当填写企业共同账户id时，此字段必填。").optional(),
  "address_id": z.string().describe("地址id").optional(),
  "city_code": z.string().describe("市").optional(),
  "page_num": z.number().int().describe("页码从1开始").optional(),
  "page_size": z.number().int().describe("每页数据").optional()
}
```

### alipay_commerce_ec_enterprise_address_add

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("通过企业码1.0接口签约的共同账户，和agreement_no搭配使用。").optional(),
  "address": z.string().describe("详细地址最长50个字符").optional(),
  "agreement_no": z.string().describe("可通过签约消息获取。配合共同账户id使用，当填写企业共同账户id时，此字段必填。").optional(),
  "city_code": z.string().describe("市(国家统一行政规划编码)").optional(),
  "city_name": z.string().describe("市").optional(),
  "community": z.string().describe("小区/楼宇").optional(),
  "enterprise_id": z.string().describe("通过企业码2.0签约接口签约，只填写企业id，无需填写共同账户id和授权签约协议号。").optional(),
  "latitude": z.string().describe("纬度").optional(),
  "longitude": z.string().describe("经度").optional(),
  "mark": z.string().describe("备注最长50个字符").optional(),
  "poi_id": z.string().describe("高德地图poi").optional()
}
```

### alipay_commerce_ec_enterprise_address_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("通过企业码1.0接口签约的共同账户，和agreement_no搭配使用。").optional(),
  "address": z.string().describe("详细地址最长50个字符").optional(),
  "address_id": z.string().describe("地址id").optional(),
  "agreement_no": z.string().describe("可通过签约消息获取。配合共同账户id使用，当填写企业共同账户id时，此字段必填。").optional(),
  "city_code": z.string().describe("市(国家统一行政规划编码)").optional(),
  "city_name": z.string().describe("城市名称").optional(),
  "community": z.string().describe("小区/楼宇").optional(),
  "enterprise_id": z.string().describe("通过企业码2.0签约接口签约，只填写企业id，无需填写共同账户id和授权签约协议号。").optional(),
  "latitude": z.string().describe("纬度").optional(),
  "longitude": z.string().describe("经度").optional(),
  "mark": z.string().describe("备注").optional(),
  "poi_id": z.string().describe("高德地图poi").optional(),
  "status": z.string().describe("状态(生效/失效)").optional()
}
```

### alipay_commerce_ec_enterprise_agreement_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id；enterprise_id与account_id至少传一个，如果都传了优先使用enterprise_id").optional(),
  "account_id": z.string().describe("资金共同账号id；enterprise_id与account_id至少传一个，如果都传了优先使用enterprise_id(为兼容企业码1.0老接口保留的字段，已过时，新接客户请使用enterprise_id)").optional()
}
```

### alipay_commerce_ec_enterprise_create

**Environment variables**



**Input schema**

```ts
{
  "biz_scene": z.string().describe("用于区分资金因公付协议、以及收银台文案等差异；").optional(),
  "create_fund_account": z.boolean().describe("是否设置管理员支付宝为企业出资账户").optional(),
  "create_iot_group": z.boolean().describe("是否创建企业人脸库，适用于对接团餐刷脸付、门禁刷脸通行等场景").optional(),
  "enterprise_alias": z.string().describe("企业简称").optional(),
  "enterprise_name": z.string().describe("企业名称").optional(),
  "group_app_id": z.string().describe("订购【一脸通行开通插件】的小程序appId").optional(),
  "identity": z.string().describe("管理员身份标识").optional(),
  "identity_name": z.string().describe("管理员姓名").optional(),
  "identity_open_id": z.string().describe("管理员身份openId").optional(),
  "identity_type": z.string().describe("管理员身份类型").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional(),
  "sign_return_url": z.string().describe("企业码签约后回跳地址。不传默认为空，签约后停留在当前页。").optional()
}
```

### alipay_commerce_ec_enterprise_delete

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id").optional()
}
```

### alipay_commerce_ec_enterprise_info_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id,从企业注册等接口获取，和out_biz_no参数二选一，都传优先取企业id").optional(),
  "out_biz_no": z.string().describe("服务商生成的请求唯一流水号/业务幂等号，和enterprise_id参数二选一，都传优先取企业id").optional()
}
```

### alipay_commerce_ec_enterprise_unsign

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("通过企业码2.0签约接口签约，只填写企业id，无需填写共同账户id和授权签约协议号。").optional(),
  "account_id": z.string().describe("通过企业码1.0接口签约的共同账户，和agreement_no搭配使用。(为兼容企业码1.0老接口的参数，已过时，新接客户请传企业ID)").optional(),
  "agreement_no": z.string().describe("可通过签约消息获取。配合共同账户id使用，当填写企业共同账户id时，此字段必填。(为兼容企业码1.0老接口的参数，已过时，新接客户请传企业ID)").optional()
}
```

### alipay_commerce_ec_jointaccountbill_detail_batchquery

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业ID").optional(),
  "biz_scene": z.string().describe("业务场景。不传默认为ISV_DEFAULT").optional(),
  "user_id": z.string().describe("员工支付宝UID").optional(),
  "open_id": z.string().describe("员工支付宝UID").optional(),
  "employee_id": z.string().describe("员工id").optional(),
  "page_num": z.string().describe("页码").optional(),
  "page_size": z.string().describe("每页大小").optional(),
  "start_date": z.string().describe("起始日期").optional(),
  "end_date": z.string().describe("截止日期").optional()
}
```

### alipay_commerce_ec_user_enterprise_query

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("用户id").optional(),
  "open_id": z.string().describe("用户open_id").optional()
}
```

### alipay_commerce_educate_campus_institutions_add

**Environment variables**



**Input schema**

```ts
{
  "card_pict_url": z.string().describe("事业单位法人证书或办学许可证的图片。入驻学校时，如果流入人工审核，会根据此图片进行辅助验证。").optional(),
  "city_code": z.string().describe("市").optional(),
  "inst_name": z.string().describe("入驻的学校名称，必须是完整的学校全称").optional(),
  "inst_std_code": z.string().describe("学校外标，使用统一社会信用编码").optional(),
  "learning_stage": z.string().describe("办学阶段。\t枚举值如下：\tKINDERGARTEN（幼儿园）\tPRIMARY_SCHOOL（小学） \tMIDDLE_SCHOOL（初中） \tHIGH_SCHOOL（高中）\tSECONDARY_VOCATIONAL_SCHOOL（中职中专） \t注意：如果学校兼有多种属性，可以连写用英文逗号拆分，如：MIDDLE_SCHOOL,HIGH_SCHOOL 代表兼有初中部和高中部；").optional(),
  "province_code": z.string().describe("省份").optional(),
  "school_property": z.string().describe("学校性质.枚举值如下：\t 1：公立 \t2：民办").optional()
}
```

### alipay_commerce_educate_campus_institutions_query

**Environment variables**



**Input schema**

```ts
{
  "inst_name": z.string().describe("学校名称").optional(),
  "province_code": z.string().describe("省份编码，编码标准为中华人民共和国行政区划代码，参见 2020年12月中华人民共和国县以上行政区划代码。").optional(),
  "city_code": z.string().describe("城市编码，编码标准为中华人民共和国行政区划代码，参见 2020年12月中华人民共和国县以上行政区划代码。").optional(),
  "inst_id": z.string().describe("学校内标：支付宝内部学校唯一编号。使用内标查询时，默认使用内标进行精确匹配。").optional(),
  "inst_std_code": z.string().describe("学校外标：统一社会信用编码或教育部提供的学校标识码。使用学校外标查询时，默认使用外标进行精确匹配。").optional(),
  "like_property": z.string().describe("是否使用学校名称模糊匹配进行查询，默认精确匹配。\t枚举值如下：\t1：精确匹配；\t0：模糊匹配").optional()
}
```

### alipay_commerce_educate_schoolcard_order_sync

**Environment variables**



**Input schema**

```ts
{
  "actual_amount": z.string().describe("实际金额（总支付金额），单位为【元】").optional(),
  "applet_app_id": z.string().describe("小程序appid").optional(),
  "card_balance": z.string().describe("校园卡余额").optional(),
  "card_no": z.string().describe("128").optional(),
  "card_type": z.string().describe("校园卡类型").optional(),
  "create_time": z.string().describe("该笔订单真实的创建时间，需精确到毫秒。").optional(),
  "discount_amount": z.string().describe("优惠金额").optional(),
  "goods_orders": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_name": z.string().describe("商家名称，不传默认展示学校名称").optional(),
  "modified_time": z.string().describe("订单修改时间").optional(),
  "open_id": z.string().describe("用户open_id").optional(),
  "order_amount": z.string().describe("订单金额").optional(),
  "order_detail_url": z.string().describe("订单详情链接").optional(),
  "order_status": z.string().describe("订单状态").optional(),
  "out_biz_no": z.string().describe("外部业务号，由商家自定义，128个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "pay_address": z.string().describe("支付地点").optional(),
  "pay_mode": z.string().describe("付款方式，不传默认展示学校名称+校园卡+（卡号后四位）").optional(),
  "rake_back_pid": z.string().describe("系统商编号。该参数作为系统商返佣数据提取的依据，请填写系统商签约协议的PID").optional(),
  "school_id": z.string().describe("学校内标，录入学校接口返回的参数").optional(),
  "school_pid": z.string().describe("学校收款账号").optional(),
  "service_provider_name": z.string().describe("服务提供者名称").optional(),
  "type": z.string().describe("业务类型").optional(),
  "user_id": z.string().describe("买家支付宝用户ID。\t2088开头的16位纯数字，小程序场景下获取用户ID请参考：用户授权;\t其它场景下获取用户ID请参考：网页授权获取用户信息;").optional()
}
```

### alipay_commerce_iot_device_report_upload

**Environment variables**



**Input schema**

```ts
{
  "report_content": z.string().describe("设备检测报告详情").optional(),
  "sn": z.string().describe("设备唯一标识").optional()
}
```

### alipay_commerce_iot_sdarttool_message_query

**Environment variables**



**Input schema**

```ts
{
  "message_no": z.string().describe("消息ID").optional()
}
```

### alipay_commerce_iot_sdarttool_message_send

**Environment variables**



**Input schema**

```ts
{
  "bi_da": z.boolean().describe("消息是否必达(immediate_msg为false时此字段设置有效)，消息过期时间顺延3*24h. 建议使用expire_time设置消息过期时间").optional(),
  "device_query_type": z.string().describe("设备查询条件类型 ；SUPPLIERID_SN:supplierid+sn ;\t ITEMID_SN:itemid + sn;\tSN:sn").optional(),
  "immediate_msg": z.boolean().describe("是否即时消息; true-校验设备是否在线，false-不校验设备是否在线").optional(),
  "item_id": z.string().describe("产品ID").optional(),
  "msg_content": z.string().describe("消息内容").optional(),
  "msg_content_type": z.string().describe("消息内容格式").optional(),
  "msg_expire": z.number().int().describe("消息过期时间戳(ms)， 默认为当前时间顺延24h有效。当设备在线时消息服务过期之前尝试推送。最大过期时间顺延3*24h").optional(),
  "msg_priority": z.number().int().describe("消息优先级（immediate_msg为false此字段设置有效）数字越大优先发送。").optional(),
  "msg_type": z.string().describe("消息类型：\txpaas_common-小程序消息；\truyi_ordermsg-如意订单消息").optional(),
  "service_id": z.string().describe("服务ID，当小程序消费消息时必传(传入的是小程序ID)").optional(),
  "sn": z.string().describe("设备sn号").optional(),
  "supplier_id": z.string().describe("厂商ID").optional()
}
```

### alipay_commerce_logistics_invoice_istdwaybill_create

**Environment variables**



**Input schema**

```ts
{
  "invoice": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "out_invoice_request_no": z.string().describe("开票请求流水号").optional(),
  "waybill_invoices": z.array(z.object({ "waybill_amount": z.string().describe("即时配送运单金额").optional(), "waybill_no": z.string().describe("即时配送运单编号").optional() })).describe("即时配送运单列表").optional()
}
```

### alipay_commerce_logistics_invoice_istdwaybill_query

**Environment variables**



**Input schema**

```ts
{
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "out_invoice_request_no": z.string().describe("开票请求流水号").optional()
}
```

### alipay_commerce_logistics_logisticscompany_instantdelivery_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_commerce_logistics_order_instantdelivery_cancel

**Environment variables**



**Input schema**

```ts
{
  "cancel_reason": z.string().describe("取消原因，取消原因id为i_6时必填").optional(),
  "cancel_reason_id": z.string().describe("取消原因id").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "order_no": z.string().describe("支付宝订单流水号").optional(),
  "out_order_no": z.string().describe("商家订单号，与order_no不能同时为空").optional(),
  "waybill_no": z.string().describe("即时配送运单编号").optional()
}
```

### alipay_commerce_logistics_order_instantdelivery_create

**Environment variables**



**Input schema**

```ts
{
  "consumer_id": z.string().describe("消费者id， 如果consumer_source是alipay，则consumer_id必须是支付宝用户uid；如果consumer_source是wx，则consumer_id可以为空").optional(),
  "consumer_notify": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "consumer_source": z.string().describe("消费者来源,支付宝：alipay; 微信：wx").optional(),
  "goods_details": z.array(z.object({ "count": z.number().int().describe("商品数量").optional(), "name": z.string().describe("商品名称").optional(), "price": z.string().describe("商品单价").optional(), "unit": z.string().describe("商品单位").optional() })).describe("商品明细").optional(),
  "goods_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "logistics_token": z.string().describe("下即时配送订单token, 配送公司可以返回此字段，当商家下单时候带上这个字段，保证在一段时间内运费不变").optional(),
  "open_id": z.string().describe("消费者id， 如果consumer_source是alipay，则consumer_id必须是支付宝用户openId；如果consumer_source是wx，则consumer_id可以为空").optional(),
  "order_ext_istd": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "out_order_no": z.string().describe("商家订单号").optional(),
  "receiver": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "sender": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "shop_no": z.string().describe("商家门店编号").optional()
}
```

### alipay_commerce_logistics_order_instantdelivery_precreate

**Environment variables**



**Input schema**

```ts
{
  "consumer_id": z.string().describe("消费者id， 如果consumer_source是alipay，则consumer_id必须是支付宝用户uid；如果consumer_source是wx，则consumer_id可以为空").optional(),
  "consumer_notify": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "consumer_source": z.string().describe("消费者来源, 支付宝：alipay, 微信：wx").optional(),
  "goods_details": z.array(z.object({ "count": z.number().int().describe("商品数量").optional(), "name": z.string().describe("商品名称").optional(), "price": z.string().describe("商品单价").optional(), "unit": z.string().describe("商品单位").optional() })).describe("商品明细").optional(),
  "goods_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "logistics_companies": z.array(z.object({ "logistics_code": z.string().describe("即时配送公司编码，由支付宝分配").optional(), "service_codes": z.array(z.object({ "service_code": z.string().describe("即时配送公司服务代码").optional() })).describe("即时配送公司服务代码列表").optional() })).describe("即时配送公司配置列表").optional(),
  "open_id": z.string().describe("消费者id， 如果consumer_source是alipay，则consumer_id必须是支付宝的openId；如果consumer_source是wx，则consumer_id可以为空").optional(),
  "order_ext_istd": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "out_order_no": z.string().describe("商家订单号").optional(),
  "receiver": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "sender": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "shop_no": z.string().describe("商家门店编号").optional()
}
```

### alipay_commerce_logistics_order_istdcancel_preconsult

**Environment variables**



**Input schema**

```ts
{
  "cancel_reason": z.string().describe("取消原因，取消原因id为i_6时必填").optional(),
  "cancel_reason_id": z.string().describe("取消原因id").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "order_no": z.string().describe("支付宝订单流水号").optional(),
  "out_order_no": z.string().describe("商家订单号，与order_no不能同时为空").optional(),
  "waybill_no": z.string().describe("即时配送运单编号").optional()
}
```

### alipay_commerce_logistics_order_istdretry_create

**Environment variables**



**Input schema**

```ts
{
  "consumer_id": z.string().describe("消费者id， 如果consumer_source是alipay，则consumer_id必须是支付宝用户uid；如果consumer_source是wx，则consumer_id可以为空").optional(),
  "consumer_notify": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "consumer_source": z.string().describe("消费者来源,  支付宝：alipay, 微信：wx").optional(),
  "goods_details": z.array(z.object({ "count": z.number().int().describe("商品数量").optional(), "name": z.string().describe("商品名称").optional(), "price": z.string().describe("商品单价").optional(), "unit": z.string().describe("商品单位").optional() })).describe("商品明细").optional(),
  "goods_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "logistics_token": z.string().describe("下即时配送订单token, 配送公司可以返回此字段，当商家下单时候带上这个字段，保证在一段时间内运费不变").optional(),
  "open_id": z.string().describe("消费者id， 如果consumer_source是alipay，则consumer_id必须是支付宝用户openId；如果consumer_source是wx，则consumer_id可以为空").optional(),
  "order_ext_istd": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "out_order_no": z.string().describe("商家订单号").optional(),
  "receiver": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "sender": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "shop_no": z.string().describe("商家门店编号").optional()
}
```

### alipay_commerce_logistics_waybill_istddetail_query

**Environment variables**



**Input schema**

```ts
{
  "shop_no": z.string().describe("商家门店编号").optional(),
  "out_order_no": z.string().describe("商家订单号").optional(),
  "order_no": z.string().describe("支付宝订单流水号").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "waybill_no": z.string().describe("即时配送运单编号").optional()
}
```

### alipay_commerce_operation_activity_merchant_modify

**Environment variables**



**Input schema**

```ts
{
  "consumption_threshold": z.number().int().describe("消费门槛，单位分").optional(),
  "discount_amount": z.number().int().describe("优惠金额，单位分").optional(),
  "type": z.string().describe("NORMAL 常规类型，不限制, RESTRICTED 限制报名条件").optional()
}
```

### alipay_commerce_operation_activity_merchant_sign

**Environment variables**



**Input schema**

```ts
{
  "consumption_threshold": z.number().int().describe("消费门槛（单位分）").optional(),
  "discount_amount": z.number().int().describe("优惠金额，单位分").optional(),
  "type": z.string().describe("报名类型，NORMAL 常规类型，不限制, RESTRICTED 限制报名条件").optional()
}
```

### alipay_commerce_operation_activity_merchant_unsign

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_commerce_operation_bank_activity_query

**Environment variables**



**Input schema**

```ts
{
  "open_id": z.string().describe("支付宝openId").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID").optional()
}
```

### alipay_commerce_transport_charger_chargerbindinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "bind_qrcode": z.string().describe("绑定充电桩二维码值，用户扫码绑桩扫描的二维码").optional(),
  "bind_status": z.string().describe("绑定状态 1:绑定; 2:解绑;  0:未知").optional(),
  "bind_time": z.string().describe("绑定时间，绑定成功必传").optional(),
  "connector_type": z.string().describe("1：家用插座\t2、交流接口插座\t3：交流接口插头\t4、直流接口枪头\t5、无线充电座\t6、其他").optional(),
  "current_output_type": z.string().describe("1：国标\t2：欧标\t3：美标\t4：日标\t5：其他").optional(),
  "equip_id": z.string().describe("设备编号").optional(),
  "equip_imei": z.string().describe("设备IMEI号").optional(),
  "equip_name": z.string().describe("设备名称，对用户展示，可以是设备名称，也可以是设备SN号，设备编号").optional(),
  "equip_sn": z.string().describe("设备SN号").optional(),
  "equip_status": z.string().describe("设备状态，遵循中电联协议的设备状态。0：离网;1：空闲;2：占用未充电;3：占用充电中;4：占用（预约锁定）;255：故障").optional(),
  "equip_type_no": z.string().describe("设备型号").optional(),
  "operator_id": z.string().describe("运营商编码，一般为企业组织机构代码").optional(),
  "operator_uid": z.string().describe("商户内部唯一标识用户的用户标识").optional(),
  "rated_current": z.string().describe("额定电流,单位：A").optional(),
  "rated_power": z.string().describe("额定功率，单位：kW").optional(),
  "rated_voltage": z.string().describe("额定电压，单位：V").optional(),
  "unbind_time": z.string().describe("解绑时间，解绑必传").optional()
}
```

### alipay_commerce_transport_parking_enterinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "agreement_query": z.boolean().describe("是否启用车牌代扣状态查询功能，true为启用，false为停用").optional(),
  "charge_info_list": z.array(z.object({ "charge_fee": z.string().describe("计费金额；单位元；").optional(), "charge_node": z.string().describe("START_CHARGING：开始计费\tFEE_INCREASE：费用增加\tTO_TOP：日封顶").optional(), "charge_time": z.string().describe("开始计费或者费用增加的时间；传东八区时间；").optional() })).describe("本次行程收费计划清单").optional(),
  "entrance_name": z.string().describe("车辆进入停车场的入口通道名称").optional(),
  "entrance_number": z.number().int().describe("车辆进入停车场的入口通道编号；按线下实际编号为准；").optional(),
  "free_enter_minutes": z.string().describe("当前停车场的入场免费时长分钟数").optional(),
  "in_time": z.string().describe("车辆入场的时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，入场时间不应晚于当前网络时间").optional(),
  "is_encrypt_plate_no": z.boolean().describe("车牌是否加密，true为加密，false为不加密，默认为false").optional(),
  "membership_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "need_charge": z.boolean().describe("当前行程是否需要计费。true：需要，false：不需要。不传默认为true。").optional(),
  "open_appid": z.string().describe("蚂蚁会员统一ID对应的归属应用appid").optional(),
  "open_id": z.string().describe("蚂蚁会员统一ID").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 alipay.eco.mycar.parking.parkinglotinfo.create\t(录入停车场信息)接口获取。").optional(),
  "plate_color": z.string().describe("车牌颜色，车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "plate_no": z.string().describe("车牌号（支持加密格式）").optional(),
  "service_url": z.string().describe("停车服务页面地址。\t1、服务商停车服务页面地址必须是支付宝小程序URL（无需转换https），详见：https://opendocs.alipay.com/support/01rb18#URL%20%E6%A0%BC%E5%BC%8F\t\t2、若服务商没有服务链接，可传输支付宝停车官方小程序的服务链接：alipays://platformapi/startapp?appId=2021001102642986&page=pages%2Fparking-fee%2Findex\t\t3、若此次对接的是无感支付，则服务链接传输为：alipays://platformapi/startapp?appId=2021001102642986&page=%2Fpages%2Fparking-bill%2Findex").optional()
}
```

### alipay_commerce_transport_parking_exitinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "exit_name": z.string().describe("车辆出场的出口通道名称；取实地通道名称；").optional(),
  "exit_number": z.number().int().describe("车辆出场的出口通道编号；与线下实地编码一致；").optional(),
  "is_encrypt_plate_no": z.boolean().describe("车牌是否加密，true为加密，false为不加密，默认为false").optional(),
  "open_appid": z.string().describe("蚂蚁会员统一ID对应的归属应用appid").optional(),
  "open_id": z.string().describe("蚂蚁会员统一ID").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "out_time": z.string().describe("车辆出场的时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，出场时间不应晚于当前网络时间，也不当早于入场时间。").optional(),
  "plate_color": z.string().describe("车牌颜色，车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "plate_no": z.string().describe("车牌号（支持加密格式）").optional(),
  "service_url": z.string().describe("停车服务页面地址。\t1、服务商停车服务页面地址必须是支付宝小程序URL（无需转换https），详见：https://opendocs.alipay.com/support/01rb18#URL%20%E6%A0%BC%E5%BC%8F 2、若服务商没有服务链接，可传输支付宝停车官方小程序的服务链接：alipays://platformapi/startapp?appId=2021001102642986&page=pages%2Fparking-fee%2Findex 3、若此次对接的是无感支付，则服务链接传输为：alipays://platformapi/startapp?appId=2021001102642986&page=%2Fpages%2Fparking-bill%2Findex").optional()
}
```

### alipay_commerce_transport_parking_paymentinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "alipay_trade_no": z.string().describe("支付宝交易号；").optional(),
  "discount_amount": z.string().describe("停车费折扣金额；单位元；").optional(),
  "discount_information": z.array(z.object({ "discount_amount": z.string().describe("折扣金额；单位元；").optional(), "discount_type": z.string().describe("折扣类型；\tCOMPREHENSIVE：综合；\tDISCOUNT：打折；\tVOUCHER：券；\tPOINTS：积分；").optional() })).describe("停车费缴费折扣信息；").optional(),
  "free_exit_minutes": z.string().describe("停车场内缴费后，允许出场的免费时长分钟数").optional(),
  "inactive_user": z.boolean().describe("365天未使用支付宝付停车费用户").optional(),
  "is_encrypt_plate_no": z.boolean().describe("车牌是否加密，true为加密，false为不加密，默认为false").optional(),
  "mobile_number": z.string().describe("缴费用户的手机号；").optional(),
  "open_appid": z.string().describe("蚂蚁会员统一ID对应的归属应用appid").optional(),
  "open_id": z.string().describe("蚂蚁会员统一ID").optional(),
  "out_order_no": z.string().describe("服务商停车费支付订单号；").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "pay_frequency": z.string().describe("用户在支付宝侧支付停车费次数").optional(),
  "payment_amount": z.string().describe("停车费实付金额；单位元；").optional(),
  "payment_time": z.string().describe("场内缴费时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，场内缴费不应晚于当前网络时间").optional(),
  "payment_type": z.string().describe("支付方式；\tALIPAY：支付宝\tWECHAT：微信\tCUQP：云闪付\tCASH：现金\tOTHER：其他渠道\tFREE: 免费").optional(),
  "payment_user_open_id": z.string().describe("停车缴费用户的OPENID；").optional(),
  "plate_color": z.string().describe("车牌颜色，车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "plate_no": z.string().describe("车牌号（支持加密格式）").optional(),
  "service_url": z.string().describe("停车服务页面地址。\t1、服务商停车服务页面地址必须是支付宝小程序URL（无需转换https），详见： <a href=\"https://opendocs.alipay.com/support/01rb18#URL%20%E6%A0%BC%E5%BC%8F \"> https://opendocs.alipay.com/support/01rb18#URL%20%E6%A0%BC%E5%BC%8F  </a>\t2、若服务商没有服务链接，可传输支付宝停车官方小程序的服务链接：alipays://platformapi/startapp?appId=2021001102642986&page=pages%2Fparking-fee%2Findex \t3、若此次对接的是无感支付，则服务链接传输为：alipays://platformapi/startapp?appId=2021001102642986&page=%2Fpages%2Fparking-bill%2Findex").optional(),
  "total_amount": z.string().describe("停车费总金额；单位元；理论应等于实付金额+折扣金额").optional()
}
```

### alipay_data_bill_accountbookereceipt_apply

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("协议号").optional(),
  "key": z.string().describe("明细凭证，传入流水号（转账接口查询结果）。汇总凭证，传入起止时间，格式yyyy-MM-dd_yyyy-MM-dd。").optional(),
  "store_no": z.string().describe("子账本号，或者子账本名称。模糊查询").optional(),
  "type": z.string().describe("申请的类型。可传入：FUND_PLATFORM_DETAIL - 资金明细证明，FUND_PLATFORM_SUM - 资金汇总证明").optional()
}
```

### alipay_data_bill_accountbookereceipt_query

**Environment variables**



**Input schema**

```ts
{
  "file_id": z.string().describe("根据申请id查询状态。申请接口可以参考alipay.data.bill.ereceiptagent.apply").optional(),
  "agreement_no": z.string().describe("协议号，根据不同业务协议类型，传入对应类型的协议号，用于isv授权检查并获取商户信息。如果业务类型未指定，则使用默认类型对应的协议号。").optional(),
  "agreement_type": z.string().describe("根据不同业务协议类型，传入不同参数。传入协议产品码（personal_product_code，通过协议查询接口、协议签约通知响应参数获取），不填的话默认按照示例值传入").optional()
}
```

### alipay_data_bill_accountlog_query

**Environment variables**



**Input schema**

```ts
{
  "start_time": z.string().describe("账务流水创建时间的起始范围。只能查询一年内的记录").optional(),
  "end_time": z.string().describe("账务流水创建时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "alipay_order_no": z.string().describe("支付宝订单号，通过支付宝订单号精确查询相关的流水明细，商户订单号与支付宝订单号互斥").optional(),
  "merchant_order_no": z.string().describe("商户订单号，通过商户订单号精确查询相关的流水明细，商户订单号与支付宝订单号互斥").optional(),
  "page_no": z.string().describe("分页号，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional(),
  "trans_code": z.string().describe("账务的类型代码，特殊场景下使用").optional(),
  "agreement_no": z.string().describe("协议授权码，特殊场景下使用").optional(),
  "agreement_product_code": z.string().describe("协议产品码。特殊场景下使用").optional(),
  "bill_user_id": z.string().describe("指定用户做账单查询").optional()
}
```

### alipay_data_bill_bail_query

**Environment variables**



**Input schema**

```ts
{
  "start_time": z.string().describe("保证金流水创建时间的起始范围").optional(),
  "end_time": z.string().describe("保证金流水创建时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "bail_type": z.string().describe("保证金类型，目前支持TMALL_S_BAIL-天猫保证金，TAOBAO_BAIL-淘宝保证金").optional(),
  "trans_log_id": z.string().describe("保证金流水号。如果查询参数中指定流水号，则只查询流水号相关的记录").optional(),
  "biz_orig_no": z.string().describe("业务基础订单号。如果查询参数中指定订单号，则只查询相关的记录").optional()
}
```

### alipay_data_bill_balance_query

**Environment variables**



**Input schema**

```ts
{
  "bill_user_id": z.string().describe("目标查询账户（仅支持部分场景，查询自身时候不需要传递当前字段）。").optional()
}
```

### alipay_data_bill_balancehis_query

**Environment variables**



**Input schema**

```ts
{
  "biz_date": z.string().describe("查询指定自然日的起初余额和期末余额，biz_date与biz_month传入参数互斥").optional(),
  "biz_month": z.string().describe("查询指定自然月的起初余额和期末余额，biz_date与biz_month传入参数互斥").optional()
}
```

### alipay_data_bill_bizfundagent_query

**Environment variables**



**Input schema**

```ts
{
  "start_time": z.string().describe("账单查询时间范围 -- 起始时间").optional(),
  "end_time": z.string().describe("账单查询时间范围 -- 结束范围。时间范围最大不超过31天。").optional(),
  "page_no": z.string().describe("页码，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional(),
  "agreement_type": z.string().describe("根据不同业务协议类型，传入不同参数。传入协议产品码（personal_product_code，通过协议查询接口、协议签约通知响应参数获取），不填的话默认按照示例值传入。 安全发协议：FUND_SAFT_SIGN_WITHHOLDING_P 专用金协议：FLEXIBLE_EMPLOYMENT_SERVICE_P").optional(),
  "agreement_no": z.string().describe("ISV与商户授权协议号").optional(),
  "account_book_id": z.string().describe("记账本id，服务商在帮助商户开通时候获取的唯一身份号").optional()
}
```

### alipay_data_bill_buy_query

**Environment variables**



**Input schema**

```ts
{
  "start_time": z.string().describe("交易流水创建时间的起始范围").optional(),
  "end_time": z.string().describe("交易流水创建时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "alipay_order_no": z.string().describe("支付宝交易流水号。如果查询参数中指定流水号，则只查询流水号相关的记录").optional(),
  "merchant_order_no": z.string().describe("商户交易号。如果查询参数中指定交易号，则只查询相关的记录").optional(),
  "store_no": z.string().describe("门店编号，模糊搜索").optional(),
  "page_no": z.string().describe("分页号，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional()
}
```

### alipay_data_bill_ereceipt_apply

**Environment variables**



**Input schema**

```ts
{
  "bill_user_id": z.string().describe("授权商户pid。需调用方获取商户授权，才可使用。").optional(),
  "key": z.string().describe("根据不同业务类型，传入不同参数。\t格式如下：\t* ACCOUNT_LOG_DETAIL - 传入账务流水号，示例：117007*********9151\t* ACCOUNT_FLOW_DETAIL - 传入流水日期区间示例：20220301-20220331\t* FUND_DETAIL - 传入资金单据号，示例：2022051511007***************0731\t* ACCOUNT_LOG_SUM_DAILY - 传入日期，示例：2022-01-01\t* ACCOUNT_LOG_SUM_MONTHLY - 传入月份，示例：2022-01").optional(),
  "type": z.string().describe("申请的类型。可传入：\t* ACCOUNT_LOG_DETAIL - 余额收支证明\t* ACCOUNT_FLOW_DETAIL - 余额收支流水证明\t* FUND_DETAIL - 转入转出收支证明\t* ACCOUNT_LOG_SUM_DAILY - 收支汇总证明（日汇总）\t* ACCOUNT_LOG_SUM_MONTHLY - 收支汇总证明（月汇总）").optional()
}
```

### alipay_data_bill_ereceipt_query

**Environment variables**



**Input schema**

```ts
{
  "file_id": z.string().describe("根据申请id查询状态。通过 <a href=\"https://opendocs.alipay.com/apis/api_15/alipay.data.bill.ereceipt.apply\">alipay.data.bill.ereceipt.apply(申请电子回单(incubating))</a> 接口同步响应获取。").optional()
}
```

### alipay_data_bill_ereceiptagent_apply

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("ISV与商户签约授权协议号").optional(),
  "agreement_type": z.string().describe("根据不同业务协议类型，传入不同参数。传入协议产品码（personal_product_code，通过协议查询接口、协议签约通知响应参数获取），不填的话默认按照示例值传入。 安全发协议：FUND_SAFT_SIGN_WITHHOLDING_P 专用金协议：FLEXIBLE_EMPLOYMENT_SERVICE_P 批量有密：FUND_AUTHORIZE_FLOW").optional(),
  "end_time": z.string().describe("查询时间区间的结束时间，属于闭区间。\t[start_time,end_time]").optional(),
  "key": z.string().describe("根据不同业务类型，传入不同参数。格式如下： * FUND_DETAIL - 资金业务回单。传入资金单号(fundOrderId，可通过充值、转账、提现接口获取)").optional(),
  "start_time": z.string().describe("搜索范围的起始时间").optional(),
  "type": z.string().describe("申请的类型（目前仅支持资金业务回单）。可传入： * FUND_DETAIL - 资金业务回单。").optional()
}
```

### alipay_data_bill_sell_query

**Environment variables**



**Input schema**

```ts
{
  "start_time": z.string().describe("卖出交易流水创建时间的起始范围").optional(),
  "end_time": z.string().describe("卖出交易流水创建时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "alipay_order_no": z.string().describe("支付宝交易流水号。如果查询参数中指定流水号，则只查询流水号相关的记录").optional(),
  "merchant_order_no": z.string().describe("商户交易号。如果查询参数中指定交易号，则只查询相关的记录").optional(),
  "store_no": z.string().describe("门店编号，模糊搜索").optional(),
  "page_no": z.string().describe("分页号，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional()
}
```

### alipay_data_bill_transfer_query

**Environment variables**



**Input schema**

```ts
{
  "start_time": z.string().describe("充值、转账、提现流水业务时间的起始范围").optional(),
  "end_time": z.string().describe("充值、转账、提现流水业务时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "type": z.string().describe("转账类型：充值-DEPOSIT，提现-WITHDRAW，转账-TRANSFER。").optional(),
  "page_no": z.string().describe("分页号，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional()
}
```

### alipay_data_bill_transferaccountbook_query

**Environment variables**



**Input schema**

```ts
{
  "start_time": z.string().describe("充值、转账、提现流水业务时间的起始范围").optional(),
  "end_time": z.string().describe("充值、转账、提现流水业务时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "type": z.string().describe("转账类型：充值-DEPOSIT，提现-WITHDRAW，转账-TRANSFER。").optional(),
  "agreement_no": z.string().describe("协议号").optional(),
  "store_no": z.string().describe("子账本号，或者子账本名称。模糊查询").optional(),
  "page_no": z.string().describe("分页号，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional()
}
```

### alipay_data_dataservice_ad_conversion_upload

**Environment variables**



**Input schema**

```ts
{
  "biz_token": z.string().describe("代理商访问灯火平台的token").optional(),
  "conversion_data_list": z.array(z.object({ "ad_id": z.string().describe("广告创意id，来自：<a href='https://adpub.alipay.com/lark/adrlark/qm1v2gtpvcftele4'>监测上报</a>或<a href='https://adpub.alipay.com/lark/adrlark/gw3740rggm4n5gar'>落地页宏替换</a>配置的__AD_ID__宏参发生用户点击替换后的值").optional(), "attribute_list": z.array(z.object({ "key": z.string().describe("业务转化数据属性").optional(), "name": z.string().describe("转化属性名称").optional(), "value": z.string().describe("业务转化属性实例值，\tproperty_list的value值需与转化管理里创建转化事件时填写的归因口径值保持一致<br>\tattrbute_list的value值请参考该文档：<a href='https://adpub.alipay.com/adrlark/ivdktpyh511x9r6i'>转化事件类型属性规则</a>").optional() })).describe("转化事件属性信息，用于转化事件类型相关属性规则上传。\t可支持上传属性的转化事件类型及属性规则请参考该文档：<a href='https://adpub.alipay.com/adrlark/ivdktpyh511x9r6i'>转化事件类型属性规则</a>").optional(), "attributes": z.object({ "key": z.string().describe("业务转化数据属性").optional(), "name": z.string().describe("转化属性名称").optional(), "value": z.string().describe("业务转化属性实例值，\tproperty_list的value值需与转化管理里创建转化事件时填写的归因口径值保持一致<br>\tattrbute_list的value值请参考该文档：<a href='https://adpub.alipay.com/adrlark/ivdktpyh511x9r6i'>转化事件类型属性规则</a>").optional() }).optional(), "biz_no": z.string().describe("转化流水号：由用户自定义，用于幂等").optional(), "callback_ext_info": z.string().describe("来自：<a href='https://adpub.alipay.com/lark/adrlark/qm1v2gtpvcftele4'>监测上报</a>或<a href='https://adpub.alipay.com/lark/adrlark/gw3740rggm4n5gar'>落地页宏替换</a>配置的__CALLBACK_EXT_INFO__宏参发生用户点击替换后的值，需url decode后传回。").optional(), "cid": z.string().describe("用于精准归因，来自：<a href='https://adpub.alipay.com/lark/adrlark/qm1v2gtpvcftele4'>监测上报</a>或<a href='https://adpub.alipay.com/lark/adrlark/gw3740rggm4n5gar'>落地页宏替换</a>配置的__CID__宏参发生用户点击替换后的值。<br>\t支持cid上报的转化事件类型请参见：<br>\t<a href='https://adpub.alipay.com/lark/adrlark/pg4vb1c0g0u6fx7b'>app推广类转化事件类型</a><br>\t<a href='https://adpub.alipay.com/lark/adrlark/rvzylhryxh37yplt'>通用类转化事件类型</a>").optional(), "conversion_amount": z.string().describe("转化金额，单位分。\t金额类转化事件必传").optional(), "conversion_id": z.string().describe("转化事件id，当source=COMMON_CONVERSION_ID需上传该字段，其他情况无需上传。").optional(), "conversion_time": z.number().int().describe("转化时间，UTC 时间戳，单位：秒").optional(), "conversion_type": z.string().describe("转化事件类型数字").optional(), "creative_id": z.string().describe("广告创意id，来自：<a href='https://adpub.alipay.com/lark/adrlark/qm1v2gtpvcftele4'>监测上报</a>或<a href='https://adpub.alipay.com/lark/adrlark/gw3740rggm4n5gar'>落地页宏替换</a>配置的__AD_ID__宏参发生用户点击替换后的值").optional(), "group_id": z.string().describe("广告单元id，来自：<a href='https://adpub.alipay.com/lark/adrlark/qm1v2gtpvcftele4'>监测上报</a>或<a href='https://adpub.alipay.com/lark/adrlark/gw3740rggm4n5gar'>落地页宏替换</a>配置的__GROUP_ID__宏参发生用户点击替换后的值").optional(), "join_channel": z.string().describe("XLIGHT - 灯火归因\tMERCHANT -商家自主归因\t该字段若为空则默认为XLIGHT").optional(), "plan_id": z.string().describe("广告计划id，来自：<a href='https://adpub.alipay.com/lark/adrlark/qm1v2gtpvcftele4'>监测上报</a>或<a href='https://adpub.alipay.com/lark/adrlark/gw3740rggm4n5gar'>落地页宏替换</a>配置的__PLAN_ID__宏参发生用户点击替换后的值").optional(), "principal_id": z.string().describe("商户在灯火pb端的id, 可代替principal_tag。").optional(), "principal_tag": z.string().describe("商家标志，可代替principal_id。获取方法：\t<a href='https://adpub.alipay.com/lark/adrlark/sbk3vetg6ki5m4r8'>principal_tag获取sop</a><br>").optional(), "property_list": z.array(z.object({ "key": z.string().describe("业务转化数据属性").optional(), "name": z.string().describe("转化属性名称").optional(), "value": z.string().describe("业务转化属性实例值，\tproperty_list的value值需与转化管理里创建转化事件时填写的归因口径值保持一致<br>\tattrbute_list的value值请参考该文档：<a href='https://adpub.alipay.com/adrlark/ivdktpyh511x9r6i'>转化事件类型属性规则</a>").optional() })).describe("转化归因字段列表。不同转化事件类型回传property_list不同。请参见回传示例：<br>\t<a href=\"https://adpub.alipay.com/lark/adrlark/pvbgwf72ea090877\">通用类转化事件回传示例</a><br>\t<a href=\"https://adpub.alipay.com/lark/adrlark/kgnnk94p0p1mwbgp\">APP推广类转化事件回传示例</a><br>").optional(), "source": z.string().describe("<br>\tCOMMON_TARGET：<a href='https://adpub.alipay.com/lark/adrlark/rvzylhryxh37yplt'>通用类转化事件类型</a>适用<br>\tCALLBACK：<a href='https://adpub.alipay.com/lark/adrlark/pg4vb1c0g0u6fx7b'>APP推广类转化事件类型</a>适用<br>\t不同source的参数回传规则请参考：\tCOMMON_TARGET：<a href='https://adpub.alipay.com/lark/adrlark/dxw7fkkdnhm45spm'>通用转化回传参数说明</a><br>\tCALLBACK：\t<a href='https://adpub.alipay.com/lark/adrlark/wxou6agg3z1o6wyn'>APP推广类转化回传参数说明</a>").optional(), "uuid": z.string().describe("发生转化用户的唯一标识。\tuuid_type不同，uuid传值不同：<br>\t1. 若uuid_type=【PID】：uuid为发生转化用户的2088id。若获取不到，可固定一个值后，上传callback_ext_info参数。<br>\t2. 若uuid_type=【OAID_MD5】【IDFA_MD5】【IP_UA】【CAID】【MEI】: uuid传的值为<a href='https://adpub.alipay.com/lark/adrlark/qm1v2gtpvcftele4'>监测上报</a>或<a href='https://adpub.alipay.com/lark/adrlark/gw3740rggm4n5gar'>落地页宏替换</a>配置的对应宏参下发的值<br>\t其中当uuid_type=IP_UA时：__IP__、__UA__宏参需用\"_\"拼接上传<br>").optional(), "uuid_open_id": z.string().describe("支付宝用户在应用维度下的唯一标识").optional(), "uuid_type": z.string().describe("<a href='https://adpub.alipay.com/lark/adrlark/rvzylhryxh37yplt'>通用类转化事件类型：</a><br>\tuuid_type固定为PID：表示转化用户唯一标识<br>\t<a href='https://adpub.alipay.com/lark/adrlark/pg4vb1c0g0u6fx7b'>APP推广类转化事件类型：</a><br>\tOAID_MD5：表示OAID原值MD5加密后的值<br>\tIDFA_MD5：表示IDFA原值MD5加密后的值<br>\tIP_UA：表示IP_UA拼接值，以下划线拼接<br>\tCAID：表示CAID原值<br>\tIMEI：表示IMEI原值<br>").optional() })).describe("转化数据列表, 最多1000条").optional()
}
```

### alipay_data_dataservice_ad_promotepage_batchquery

**Environment variables**



**Input schema**

```ts
{
  "biz_token": z.string().describe("代理商访问灯火平台的token").optional(),
  "principal_tag": z.string().describe("商家标志").optional(),
  "type": z.string().describe("推广页类型：COLLECT_INFO -  免费留资；TRADE - 付费留资； OPERATION_PAID - 运营商付费留资；待扩展").optional(),
  "page_no": z.number().int().describe("分页参数之页数，从1开始").optional(),
  "page_size": z.number().int().describe("分页参数之每页大小，最大1000").optional()
}
```

### alipay_data_dataservice_ad_promotepage_download

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().describe("留资开始日期，格式：yyyy-mm-dd 或 yyyy-mm-dd hh:mm:ss;不能早于30天前").optional(),
  "end_date": z.string().describe("留资结束日期，格式：yyyy-mm-dd 或 yyyy-mm-dd hh:mm:ss;不能晚于当天").optional(),
  "page_no": z.number().int().describe("分页参数之页数，从1开始").optional(),
  "page_size": z.number().int().describe("分页参数之每页大小，最大1000").optional(),
  "biz_token": z.string().describe("代理商访问灯火平台的token").optional(),
  "principal_tag": z.string().describe("商家标志").optional(),
  "promote_page_id": z.number().int().describe("推广页id").optional()
}
```

### alipay_data_dataservice_bill_downloadurl_query

**Environment variables**



**Input schema**

```ts
{
  "bill_type": z.string().describe("账单类型，商户通过接口或商户经开放平台授权后其所属服务商通过接口可以获取以下账单类型。").optional(),
  "bill_date": z.string().describe("账单时间： \t* 日账单格式为yyyy-MM-dd，最早可下载2016年1月1日开始的日账单。不支持下载当日账单，只能下载前一日24点前的账单数据（T+1），当日数据一般于次日 9 点前生成，特殊情况可能延迟。 \t* 月账单格式为yyyy-MM，最早可下载2016年1月开始的月账单。不支持下载当月账单，只能下载上一月账单数据，当月账单一般在次月 3 日生成，特殊情况可能延迟。\t* 当biz_type为settlementMerge时候，时间为汇总批次结算资金到账的日期，日期格式为yyyy-MM-dd，最早可下载2023年4月17日及以后的账单。").optional(),
  "smid": z.string().describe("二级商户smid，这个参数只在bill_type是trade_zft_merchant时才能使用").optional()
}
```

### alipay_ebpp_bill_add

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "bank_bill_no": z.string().describe("外部订单号").optional(),
  "bill_date": z.string().describe("账单的账期，格式为 yyyyMMdd。例如：202012表示2020年12月的账单。").optional(),
  "bill_key": z.string().describe("账单单据号，例如水费单号，手机号，电费号，信用卡卡号。没有唯一性要求。").optional(),
  "charge_inst": z.string().describe("支付宝给每个出账机构指定了一个对应的英文短名称来唯一表示该收费单位。").optional(),
  "extend_field": z.string().describe("扩展属性").optional(),
  "merchant_order_no": z.string().describe("输出机构的业务流水号，需要保证唯一性").optional(),
  "mobile": z.string().describe("用户的手机号").optional(),
  "order_type": z.string().describe("支付宝订单类型。枚举支持：\t*JF：公共事业缴纳。\t*WUYE：物业缴费。\t*HK：信用卡还款。\t*TX：通讯缴费。").optional(),
  "owner_name": z.string().describe("拥有该账单的用户姓名").optional(),
  "pay_amount": z.string().describe("缴费金额。用户支付的总金额。单位为 元（人民币）。取值范围为[0.01，100000000.00]，精确到小数点后两位。").optional(),
  "service_amount": z.string().describe("账单的服务费。").optional(),
  "sub_order_type": z.string().describe("子业务类型是业务类型的下一级概念。枚举支持：\t*WATER：缴水费。\t*ELECTRIC：缴电费。\t*GAS：缴燃气费。\t*COMMUN：缴固话宽带费。\t*CATV：缴有线电视费。\t*WUYE：缴物业费。\t*RC：定期还车贷代扣。\t*RH：定期还房贷代扣。\t*RR：定期还房租代扣。\t*RN：定期还网贷代扣。\t*CZ：手机充值代扣。\t例如：WATER表示JF下面的水费。").optional(),
  "traffic_location": z.string().describe("交通违章地点，sub_order_type=TRAFFIC时填写。").optional(),
  "traffic_regulations": z.string().describe("违章行为，sub_order_type=TRAFFIC时填写。").optional()
}
```

### alipay_ebpp_bill_get

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "order_type": z.string().describe("支付宝订单类型。公共事业缴纳JF,信用卡还款HK").optional(),
  "merchant_order_no": z.string().describe("输出机构的业务流水号，需要保证唯一性。").optional()
}
```

### alipay_ebpp_invoice_apply_inv_upload

**Environment variables**



**Input schema**

```ts
{
  "anti_fake_code": z.string().describe("发票防伪码/密码").optional(),
  "apply_id": z.string().describe("发票申请ID, 由阿里发票平台生成。 拆单开票后一笔申请可能对应多张发票。 source=apply时必填，其他source可为空").optional(),
  "biz_error_code": z.string().describe("开票失败错误码， 开票失败(create_result=fail)时必填").optional(),
  "biz_error_msg": z.string().describe("开票失败错误信息， 开票失败(create_result=fail)时必填").optional(),
  "business_type": z.number().int().describe("抬头类型。可选值： 0：个人 1：企业").optional(),
  "check_code": z.string().describe("校验码").optional(),
  "create_result": z.string().describe("开票结果，枚举值： success: 发票开具成功； fail: 开票失败； source=async时必填，传实际的开票结果。其他source可不传，默认为success").optional(),
  "device_no": z.string().describe("开票分机号/机器编号").optional(),
  "invoice_amount": z.string().describe("合计含税金额（开票金额），格式为2位小数。 当开红票时，该字段为负数。 开票成功时(create_result=success)必填").optional(),
  "invoice_code": z.string().describe("发票代码。 开票成功时(create_result=success)必填").optional(),
  "invoice_date": z.string().describe("开票日期，格式 yyyy-MM-dd. 开票成功时(create_result=success)必填").optional(),
  "invoice_file_content": z.string().describe("发票版式文件数据，base64化的字符串； 电子发票必填").optional(),
  "invoice_file_type": z.string().describe("发票板式文件类型。可选值： PDF, OFD。 开电票且开票成功时(create_result=success)必填").optional(),
  "invoice_items": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "invoice_kind": z.number().int().describe("开票发票类型 可选值： 0: 电票； 1：纸质普票； 2：纸质专票； 开票成功时(create_result=success)必填").optional(),
  "invoice_memo": z.string().describe("发票备注，会显示在票面").optional(),
  "invoice_no": z.string().describe("发票号码。 开票成功时(create_result=success)必填").optional(),
  "invoice_type": z.string().describe("发票(开票)类型，可选值： blue: 蓝票； red: 红票； 开票成功时(create_result=success)必填").optional(),
  "levy_type": z.string().describe("征税方式，0普通征收，1减按征收，2差额征收").optional(),
  "normal_invoice_code": z.string().describe("原发票代码。 冲红且开票成功时(create_result=success)必填").optional(),
  "normal_invoice_no": z.string().describe("原发票号码。 冲红且开票成功时(create_result=success)必填").optional(),
  "payee_address": z.string().describe("销方地址。 开票成功时(create_result=success)必填").optional(),
  "payee_bank_account_id": z.string().describe("销方银行账号").optional(),
  "payee_bank_name": z.string().describe("销方开户行名称").optional(),
  "payee_checker": z.string().describe("复核人").optional(),
  "payee_name": z.string().describe("销方名称。 开票成功时(create_result=success)必填").optional(),
  "payee_operator": z.string().describe("开票人。 开票成功时(create_result=success)必填").optional(),
  "payee_phone": z.string().describe("销方联系电话。 开票成功时(create_result=success)必填").optional(),
  "payee_receiver": z.string().describe("收款人").optional(),
  "payee_register_no": z.string().describe("销方税务登记证号。由大写字母或数字组成，长度要求15~20位。 开票成功时(create_result=success)必填").optional(),
  "payer_address": z.string().describe("购方地址， 专票且开票成功时(create_result=success)必填").optional(),
  "payer_bank_account_id": z.string().describe("购方银行账号， 专票且开票成功时(create_result=success)必填").optional(),
  "payer_bank_name": z.string().describe("购方开户行名称， 专票且开票成功时(create_result=success)必填").optional(),
  "payer_email": z.string().describe("购方电子邮箱，需满足邮箱格式。 格式要求：\\\\w+([-+.]\\\\w+)*@\\\\w+([-.]\\\\w+)*\\\\.\\\\w+([-.]\\\\w+)*").optional(),
  "payer_name": z.string().describe("购方抬头。 开票成功时(create_result=success)必填").optional(),
  "payer_phone": z.string().describe("购方联系电话， 专票且开票成功时(create_result=success)必填").optional(),
  "payer_register_no": z.string().describe("购方税务登记证号，由大写字母或数字组成，长度要求15~20位。 开企业抬头时必填， 专票且开票成功时(create_result=success)必填").optional(),
  "platform_code": z.string().describe("业务平台Code, 由发票中台分配。 用于标识需交付发票的业务平台，source=upload时必填，其他source可为空").optional(),
  "platform_tid": z.string().describe("业务平台发票申请对应的订单号。 用于区分业务平台订单号，source=upload时必填，其他source可为空").optional(),
  "platform_user_id": z.string().describe("业务平台发票申请对应的订单号。 用于区分业务平台订单号，source=upload时必填，其他source可为空").optional(),
  "qr_code": z.string().describe("二维码").optional(),
  "receive_mobile": z.string().describe("购方手机号码，用于收票").optional(),
  "red_notice_no": z.string().describe("红字通知单号； 专票冲红且开票成功时(create_result=success)必填").optional(),
  "serial_no": z.string().describe("开票流水号/序列号，唯一标志一笔开票请求，由于阿里发票中台生成。 source=async时必填，其他source可为空").optional(),
  "source": z.string().describe("发票来源，可选值： apply: 间连开票模式，ISV回传商家基于申请开具的发票； async：直连开票模式，ISV回传开票结果； upload：直接回传，进行归集与交付的发票").optional(),
  "special_flag": z.string().describe("特殊票种标识，可选值： “00”非特殊票种 （默认值） “02”农产品收购 “06”抵扣通行费 “07”其它通行费 “08”成品油销售 “18”成品油专票负数发票").optional(),
  "sum_price": z.string().describe("合计金额（不含税），格式为2位小数。 当开红票时，该字段为负数。 开票成功时(create_result=success)必填").optional(),
  "sum_tax": z.string().describe("合计税额，格式为2位小数。 当开红票时，该字段为0或负数。 开票成功时(create_result=success)必填").optional()
}
```

### alipay_ebpp_invoice_apply_result_sync

**Environment variables**



**Input schema**

```ts
{
  "apply_id": z.string().describe("支付宝发起开票申请的id，该id具有唯一性，该字段由支付宝向税控发起申请的时候带过去，作为支付宝向税控开票申请的唯一标志").optional(),
  "result": z.string().describe("支付宝向税控商或ISV发起发票申请后，对应这笔申请的发票开具结果。\r\t取值如下：\r\tSUCCESS:成功;FAIL:失败").optional(),
  "result_code": z.string().describe("结果码，支付宝向税控商或ISV发起发票申请后，对应这笔申请的发票开具结果进行详细说明的结果码。\r\t取值如下：\r\t成功(SUCCESS),\r\t参数不合法(PARAMETER_ILLEGAL),\r\t商户税控设备异常(MERCHANT_TAX_DEVICE_ERROR).").optional(),
  "result_msg": z.string().describe("结果描述，支付宝向税控商或ISV发起发票申请后，对应这笔申请的发票开具结果描述信息。").optional(),
  "tax_apply_id": z.string().describe("该字段是税控商或ISV收到支付宝开票请求后生成的申请id，由税控商或isv自己生成，该id具有唯一性\r\t当ISV接入时是按照tax_apply_id来查询发票信息时，该字段必填。").optional()
}
```

### alipay_ebpp_invoice_apply_status_notify

**Environment variables**



**Input schema**

```ts
{
  "apply_id": z.string().describe("发票申请ID，由阿里发票平台生成。字母或数字组成。\t申请单的唯一标识，幂等字段。").optional(),
  "apply_status": z.string().describe("申请状态，可选值：\tapplying: 申请中，初始状态；\tcancelled: 申请已取消、或商户已驳回；\tcreating_inv: 商户已受理/开票中，待发票结果回传；\tinv_failed: 开票失败；\tinv_success: 开票成功；\tinv_part_success: 部分成功（拆单场景下存在。举例：发票申请拆单之后有10张票，其中有1张开票成功时，此时申请状态为inv_part_success，当10张票全部成功申请状态则为inv_success）").optional(),
  "invoice_uks": z.array(z.object({ "invoice_code": z.string().describe("发票代码").optional(), "invoice_no": z.string().describe("发票号码").optional() })).describe("该申请下所有已开具成功的发票。\t状态变更为 apply_status=inv_success 时该字段必传").optional(),
  "message": z.string().describe("说明信息：驳回或失败原因\tapply_status=inv_failed 或 apply_status=cancelled 时必传").optional()
}
```

### alipay_ebpp_invoice_applystatus_query

**Environment variables**



**Input schema**

```ts
{
  "m_short_name": z.string().describe("定义商户的一级简称,用于标识商户品牌，对应于商户入驻时填写的\"商户品牌简称\"。 如：肯德基：KFC").optional(),
  "order_no_list": z.array(z.string()).describe("待查询订单开票状态列表，各订单号间通过英文逗号分割，不限于支付宝体内交易订单号。如：20200520110046966071,20200520110046966072,20200520110046966073").optional(),
  "sub_m_short_name": z.string().describe("定义商户的二级简称,用于标识商户品牌下的分支机构，如门店，对应于商户入驻时填写的\"商户门店简称\"。 如：肯德基-杭州西湖区文一西路店：KFC-HZ-19003 要求：\"商户品牌简称+商户门店简称\"作为确定商户及其下属机构的唯一标识，不可重复。").optional()
}
```

### alipay_ebpp_invoice_auth_sign

**Environment variables**



**Input schema**

```ts
{
  "authorization_type": z.string().describe("发票授权类型，可选值：INVOICE_AUTO_SYNC（发票自动回传）\tINVOICE_TWOWAY_AUTO_SYNC（发票双向自动回传）").optional(),
  "extend_fields": z.string().describe("扩展字段，格式为：KEY1=VALUE1,KEY2=VALUE2,KEY3=VALUE3\t邮箱地址KEY为EMAIL_ADDRESS").optional(),
  "m_short_name": z.string().describe("开票商户品牌简称，与商户入驻时的品牌简称保持一致。").optional(),
  "open_id": z.string().describe("支付宝用户userId").optional(),
  "user_id": z.string().describe("支付宝用户userId").optional()
}
```

### alipay_ebpp_invoice_auth_unsign

**Environment variables**



**Input schema**

```ts
{
  "authorization_type": z.string().describe("发票授权类型，可选值：INVOICE_AUTO_SYNC（发票自动回传）\tINVOICE_TWOWAY_AUTO_SYNC（发票双向自动回传）").optional(),
  "extend_fields": z.string().describe("扩展字段，格式为：KEY1=VALUE1,KEY2=VALUE2,KEY3=VALUE3\t邮箱地址KEY为EMAIL_ADDRESS").optional(),
  "m_short_name": z.string().describe("开票商户品牌简称，与商户入驻时的品牌简称保持一致。").optional(),
  "open_id": z.string().describe("支付宝用户userId").optional(),
  "user_id": z.string().describe("支付宝用户userId").optional()
}
```

### alipay_ebpp_invoice_detail_output_query

**Environment variables**



**Input schema**

```ts
{
  "invoice_code": z.string().describe("发票代码\t长度限制（10-12位），全电票则为空").optional(),
  "invoice_no": z.string().describe("发票号码\t长度限制（8-20位）").optional(),
  "open_id": z.string().describe("支付宝用户 id").optional(),
  "scene": z.string().describe("获取发票明细应用场景。固定为 INVOICE_EXPENSE  表示发票报销。").optional(),
  "skip_expense_progress_sync": z.boolean().describe("是否跳过发票报销状态同步；当为true时，跳过报销状态同步校验。默认为false，需要先做报销状态同步").optional(),
  "user_id": z.string().describe("发票归属用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional()
}
```

### alipay_ebpp_invoice_ecorder_order_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业ID").optional(),
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "order_id": z.string().describe("订单ID").optional(),
  "order_type": z.string().describe("订单类型").optional()
}
```

### alipay_ebpp_invoice_einvpackage_query

**Environment variables**



**Input schema**

```ts
{
  "encrypted_uid": z.string().describe("加密过的uid。获取详情参见 <a href=\"https://opendocs.alipay.com/open/017fwh\">\"推\"模式发票报销</a>。").optional(),
  "package_id": z.string().describe("发票包id。获取详情参见 <a href=\"https://opendocs.alipay.com/open/017fwh\">\"推\"模式发票报销</a>。").optional()
}
```

### alipay_ebpp_invoice_enterprise_merchantrelation_create

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业ID").optional(),
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "operator_id": z.string().describe("传入操作人员标识").optional(),
  "shop_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "trade_no": z.string().describe("交易流水号").optional()
}
```

### alipay_ebpp_invoice_enterpriseconsume_consume_batchquery

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "consumption_end": z.string().describe("交易结束时间，格式：yyyy-MM-dd HH:mm:ss").optional(),
  "consumption_start": z.string().describe("交易开始时间，格式：yyyy-MM-dd HH:mm:ss").optional(),
  "employee_list": z.array(z.string()).describe("员工支付宝UID列表，单次传入最大员工数量为10").optional(),
  "employee_open_ids": z.array(z.string()).describe("员工支付宝UID列表，单次传入最大员工数量为10").optional()
}
```

### alipay_ebpp_invoice_enterpriseconsume_detail_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "voucher_id": z.string().describe("账单凭证ID").optional()
}
```

### alipay_ebpp_invoice_enterpriseconsume_enterpriseopenrule_create

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "bill_month_day": z.number().int().describe("账期结束日期").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invoice_rule_name": z.string().describe("开票规则名称").optional(),
  "invoice_title_id": z.string().describe("发票抬头").optional(),
  "open_mode": z.string().describe("开票模式").optional(),
  "receive_address": z.string().describe("收件人地址").optional(),
  "receive_name": z.string().describe("收件人姓名").optional(),
  "receive_phone": z.string().describe("收件人手机号").optional(),
  "seller_type": z.string().describe("销方类型").optional(),
  "tag": z.string().describe("开票规则标记").optional()
}
```

### alipay_ebpp_invoice_enterpriseconsume_enterpriseopenrule_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invoice_rule_id": z.string().describe("开票规则ID").optional(),
  "invoice_rule_name": z.string().describe("开票规则名称").optional(),
  "invoice_title_id": z.string().describe("发票抬头").optional(),
  "receive_address": z.string().describe("收件人地址").optional(),
  "receive_name": z.string().describe("收件人姓名").optional(),
  "receive_phone": z.string().describe("收件人手机号").optional(),
  "seller_type": z.string().describe("销方类型").optional()
}
```

### alipay_ebpp_invoice_enterpriseconsume_enterpriseopenrule_query

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invoice_rule_id": z.string().describe("开票规则ID").optional(),
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional()
}
```

### alipay_ebpp_invoice_enterpriseconsume_openrulerelation_create

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invoice_rule_id": z.string().describe("开票规则ID").optional(),
  "standard_id_list": z.array(z.string()).describe("费控规则ID列表").optional()
}
```

### alipay_ebpp_invoice_enterpriseconsume_relatedetail_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "voucher_id": z.string().describe("账单凭证ID").optional()
}
```

### alipay_ebpp_invoice_enterpriseconsume_summaryinvoicedetail_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业 ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "summary_id": z.string().describe("开票批次 ID").optional()
}
```

### alipay_ebpp_invoice_enterpriseexctrl_employertitle_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id").optional(),
  "address": z.string().describe("详细地址").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "bank_account": z.string().describe("开户行账号").optional(),
  "bank_name": z.string().describe("开户行").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "tax_register_no": z.string().describe("税号").optional(),
  "telephone": z.string().describe("电话").optional(),
  "title_id": z.string().describe("抬头ID").optional(),
  "title_name": z.string().describe("企业抬头名称").optional()
}
```

### alipay_ebpp_invoice_enterpriseexctrl_employertitle_batchquery

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("每页行数").optional()
}
```

### alipay_ebpp_invoice_enterpriseexctrl_employertitle_create

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id").optional(),
  "address": z.string().describe("企业地址").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "bank_account": z.string().describe("开户行账号").optional(),
  "bank_name": z.string().describe("开户行名称").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "tax_register_no": z.string().describe("税号").optional(),
  "telephone": z.string().describe("电话").optional(),
  "title_name": z.string().describe("企业抬头名称").optional()
}
```

### alipay_ebpp_invoice_enterpriseexctrl_employertitle_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "title_id": z.string().describe("抬头ID").optional()
}
```

### alipay_ebpp_invoice_expense_progress_sync

**Environment variables**



**Input schema**

```ts
{
  "apply_id": z.string().describe("同步申请id，每次发起同步时生成，isv每次请求需要保证唯一").optional(),
  "business_time": z.string().describe("报销状态变更执行时间").optional(),
  "expense_detail_url": z.string().describe("报销详情地址，提供用户通过发票管家查看报销进度的地址\r\t如果报销企业入驻发票管家时需要isv传入报销详情地址，则必须提供").optional(),
  "expense_order_no": z.string().describe("报销单据号").optional(),
  "expense_tax_no": z.string().describe("报销企业税号").optional(),
  "invoice_code": z.string().describe("发票代码").optional(),
  "invoice_no": z.string().describe("发票号码").optional(),
  "memo": z.string().describe("备注").optional(),
  "open_id": z.string().describe("open_id，支付宝用户id").optional(),
  "status": z.string().describe("报销操作").optional(),
  "user_id": z.string().describe("发票归属用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional()
}
```

### alipay_ebpp_invoice_expensecomsue_outsource_notify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "amount": z.number().int().describe("消费金额").optional(),
  "deal_time": z.string().describe("交易发生时间").optional(),
  "employee_id": z.string().describe("员工id").optional(),
  "employee_id_type": z.number().int().describe("员工账号类型").optional(),
  "employee_open_id": z.string().describe("员工开放id").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "extend": z.string().describe("拓展参数").optional(),
  "is_off_set": z.number().int().describe("交易类型").optional(),
  "out_source_id": z.string().describe("外部交易支付单号").optional(),
  "platform": z.string().describe("外部平台编码").optional(),
  "relate_no": z.string().describe("外部交易退款单号").optional(),
  "standard_id": z.string().describe("费控规则ID").optional()
}
```

### alipay_ebpp_invoice_expensecontrol_aggregation_create

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "aggregation_name": z.string().describe("聚合关系名称\t特殊说明：敏感词校验").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "standard_id_list": z.array(z.string()).describe("费控规则ID列表").optional()
}
```

### alipay_ebpp_invoice_expensecontrol_issuebatch_cancel

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业ID").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "issue_batch_id": z.string().describe("发放批次id").optional()
}
```

### alipay_ebpp_invoice_expensecontrol_issuebatch_create

**Environment variables**



**Input schema**

```ts
{
  "batch_no": z.string().describe("发放批次号，用于幂等校验本次发放").optional(),
  "effective_end_date": z.string().describe("额度有效结束时间").optional(),
  "effective_start_date": z.string().describe("额度有效起始时间").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "issue_desc": z.string().describe("发放说明").optional(),
  "issue_name": z.string().describe("发放名称").optional(),
  "issue_target_info_list": z.array(z.object({ "issue_quota": z.string().describe("当发放余额或点券时，单位为元，币种以创建制度时填写的currency为准，不填写默认为人民币。当发放类型为次卡时，单位为次。").optional(), "owner_id": z.string().describe("切换open_id前请使用：owner类型为PHONE时该字段表示员工手机号，owner类型为EMPLOYEE时该字段表示为员工支付宝uid，owner类型为ENTERPRISE_PAY_UID时该字段表示为员工企业码id，owner类型为ENTERPRISE时可不填，如果填写仅支持填企业id").optional(), "owner_open_id": z.string().describe("切换open_id后请使用：owner类型为PHONE时，填写员工手机号，EMPLOYEE时填写员工open_id").optional(), "owner_type": z.string().describe("owner类型，用来表示owner_id的类型").optional(), "user_name": z.string().describe("员工姓名").optional() })).describe("员工发放信息列表").optional(),
  "quota_type": z.string().describe("额度类型").optional(),
  "share_mode": z.string().describe("是否可转赠").optional()
}
```

### alipay_ebpp_invoice_expensecontrol_quota_create

**Environment variables**



**Input schema**

```ts
{
  "effective_end_date": z.string().describe("额度失效时间（格式：yyyy-MM-dd HH:mm:ss）").optional(),
  "effective_start_date": z.string().describe("额度生效时间（格式：yyyy-MM-dd HH:mm:ss）").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "issue_desc": z.string().describe("批量发放时，可填写该字段").optional(),
  "issue_name": z.string().describe("批量发放时，可填写该字段作为发放名称，如果未填写取outer_source_id为默认值").optional(),
  "issue_quota_target_list": z.array(z.object({ "issue_quota": z.string().describe("当发放余额或点券时，单位为元，币种以创建制度时填写的currency为准，不填写默认为人民币。当发放类型为次卡时，单位为次。").optional(), "owner_id": z.string().describe("切换open_id前请使用：owner类型为PHONE时该字段表示员工手机号，owner类型为EMPLOYEE时该字段表示为员工支付宝uid，owner类型为ENTERPRISE_PAY_UID时该字段表示为员工企业码id，owner类型为ENTERPRISE时可不填，如果填写仅支持填企业id").optional(), "owner_open_id": z.string().describe("切换open_id后请使用：owner类型为PHONE时，填写员工手机号，EMPLOYEE时填写员工open_id").optional(), "owner_type": z.string().describe("owner类型，用来表示owner_id的类型").optional(), "user_name": z.string().describe("员工姓名").optional() })).describe("创建额度发放明细列表").optional(),
  "outer_source_id": z.string().describe("外部操作幂等ID，标识创建额度的唯一性，防止重复创建").optional(),
  "quota_type": z.string().describe("创建额度类型").optional(),
  "share_mode": z.string().describe("0:不可转赠\t1:可以转增").optional(),
  "target_id": z.string().describe("额度维度ID").optional(),
  "target_type": z.string().describe("额度维度\t枚举值：\tINSTITUTION（制度维度），\tEXPENSE_TYPE（费用类型维度）").optional()
}
```

### alipay_ebpp_invoice_expensecontrol_quota_modify

**Environment variables**



**Input schema**

```ts
{
  "action": z.string().describe("变更模式").optional(),
  "amount": z.string().describe("变更的金额/余额，日元或者韩元以（元）为单位，其他币种以（分）为单位，当变更的资产类型为次卡时，单位为次").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "outer_source_id": z.string().describe("外部操作幂等ID（接入方接口调用幂等控制ID）").optional(),
  "quota_id": z.string().describe("额度ID").optional(),
  "share_mode": z.string().describe("是否可转赠，1表示可转赠，0表示不可转赠").optional()
}
```

### alipay_ebpp_invoice_expensecontrol_quota_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "owner_id": z.string().describe("额度所属者ID").optional(),
  "owner_open_id": z.string().describe("额度所属者开放ID").optional(),
  "owner_type": z.string().describe("额度所属者类型").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("每页条数").optional(),
  "quota_id_list": z.array(z.string()).describe("额度ID列表").optional(),
  "quota_type": z.string().describe("额度类型").optional(),
  "target_id": z.string().describe("额度维度ID").optional(),
  "target_type": z.string().describe("额度维度").optional()
}
```

### alipay_ebpp_invoice_expenserules_employee_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账号ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "standard_id": z.string().describe("费控规则ID").optional(),
  "page_num": z.number().int().describe("页数").optional(),
  "page_size": z.number().int().describe("页大小").optional()
}
```

### alipay_ebpp_invoice_expenserules_employeerules_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "employee_id": z.string().describe("未切换open_id时使用此字段：员工ID").optional(),
  "employee_open_id": z.string().describe("切换open_id后使用此字段：员工的open_id").optional(),
  "page_num": z.number().int().describe("页码，默认值为1").optional(),
  "page_size": z.number().int().describe("每页行数，默认值为20").optional()
}
```

### alipay_ebpp_invoice_expenserules_groupemployee_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id").optional(),
  "add_employee_list": z.array(z.string()).describe("未切换 open_id 时请使用此字段：\t需要添加的员工UID列表\t特殊说明：一次最多50个").optional(),
  "add_employee_open_id_list": z.array(z.string()).describe("切换 open_id 后请使用此字段：\t需要添加的open_id/企业码员工ID列表 特殊说明：一次最多50个").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "group_id_list": z.array(z.string()).describe("费控规则ID列表").optional(),
  "remove_employee_list": z.array(z.string()).describe("未切换 open_id 时请使用此字段：\t需要移除的员工UID列表\t特殊说明：一次最多50个").optional(),
  "remove_employee_open_id_list": z.array(z.string()).describe("切换 open_id 后请使用此字段：\t需要移除的open_id/企业码员工ID列表 特殊说明：一次最多50个").optional()
}
```

### alipay_ebpp_invoice_expenserules_projectemployee_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账户ID").optional(),
  "add_employee_list": z.array(z.string()).describe("切换open_id前使用此字段：\t需要添加的员工UID列表\t约束：一次最多50个").optional(),
  "add_employee_open_id_list": z.array(z.string()).describe("切换open_id后使用此字段：\t需要添加的员工open_id列表\t约束：一次最多50个").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "project_id": z.string().describe("项目ID").optional(),
  "remove_employee_list": z.array(z.string()).describe("切换open_id前使用此字段：\t需要移除的员工UID列表\t约束：一次最多50个").optional(),
  "remove_employee_open_id_list": z.array(z.string()).describe("切换open_id后前使用此字段： 需要移除的员工open_id列表 约束：一次最多50个").optional()
}
```

### alipay_ebpp_invoice_expenserules_projectinfo_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "effective_end_date": z.string().describe("有效期截止（yyyy-MM-dd HH:mm:ss）\t特殊说明：\t1）与起始时间必须同时传，且大于起始时间\t2）不传则默认不修改").optional(),
  "effective_start_date": z.string().describe("有效期起始（yyyy-MM-dd HH:mm:ss）\t特殊说明：\t1）与截止时间必须同时传，且小于截止时间\t2）不传入则默认不修改").optional(),
  "project_id": z.string().describe("项目ID").optional(),
  "project_name": z.string().describe("项目名\t特殊说明：不传入则默认不修改").optional()
}
```

### alipay_ebpp_invoice_expenserules_projectrule_create

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账户id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "effective_end_date": z.string().describe("有效期截止（yyyy-MM-dd HH:mm:ss，必须大于起始时间）").optional(),
  "effective_start_date": z.string().describe("有效期起始（yyyy-MM-dd HH:mm:ss，必须小于截止时间）").optional(),
  "employee_list": z.array(z.string()).describe("切换open_id前使用此字段：员工支付宝ID列表\t特殊说明：单次传入的最大员工数为50，后续通过修改项目的员工列表接口进行员工调整").optional(),
  "employee_open_id_list": z.array(z.string()).describe("切换open_id后使用此字段：员工open_id列表 特殊说明：单次传入的最大员工数为50，后续通过修改项目的员工列表接口进行员工调整").optional(),
  "expense_ctrl_rule_info_group_list": z.array(z.object({ "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("费控条件列表").optional(), "expense_type": z.string().describe("费用类型\t特殊说明：仅支持费用类型DEFAULT").optional(), "group_id": z.string().describe("费控规则ID").optional(), "group_name": z.string().describe("费控规则名称\t约束：\t1）敏感词校验\t2）不能重复").optional() })).describe("费控规则列表").optional(),
  "project_name": z.string().describe("项目名称\t约束：\t1）敏感词校验\t2）不能重复").optional()
}
```

### alipay_ebpp_invoice_expenserules_projectrule_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账号ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "project_id": z.string().describe("项目id（可空）").optional(),
  "employee_id": z.string().describe("员工UID（可空）").optional(),
  "employee_open_id": z.string().describe("切换open_id后请使用：员工open_id（可空）").optional(),
  "page_num": z.number().int().describe("页数").optional(),
  "page_size": z.number().int().describe("页大小").optional()
}
```

### alipay_ebpp_invoice_expenserules_projectrules_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "action": z.string().describe("修改操作\t枚举值：MODIFY_RULE（修改费控条件），仅支持MODIFY_RULE").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "expense_ctrl_rule_info_group_list": z.array(z.object({ "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("费控条件列表").optional(), "expense_type": z.string().describe("费用类型\t特殊说明：仅支持费用类型DEFAULT").optional(), "group_id": z.string().describe("费控规则ID").optional(), "group_name": z.string().describe("费控规则名称\t约束：\t1）敏感词校验\t2）不能重复").optional() })).describe("费控规则列表").optional(),
  "project_id": z.string().describe("项目ID").optional()
}
```

### alipay_ebpp_invoice_expenserules_scenerule_create

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账号ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "effective_end_date": z.string().describe("有效期截止").optional(),
  "effective_start_date": z.string().describe("有效期起始").optional(),
  "employee_list": z.array(z.string()).describe("切换open_id前请使用：员工支付宝uid列表\t特殊说明：单次传入的最大员工数为50，后续通过修改费控规则员工接口进行员工调整").optional(),
  "employee_open_id_list": z.array(z.string()).describe("切换open_id后请使用：员工open_id/企业码员工ID列表 特殊说明：单次传入的最大员工数为50，后续通过修改费控规则员工接口进行员工调整").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("费控条件列表\t特殊说明：\t1）至少存在日额度（QUOTA_DAY）、月额度（QUOTA_MONTH）、有效期总额度（QUOTA_TOTAL）三者中的一个额度条件；\t2）如果费用类型为MEAL，费控维度商户（MEAL_MERCHANT）和商户类型（MCC）对应的费控条件必须存在其一且不能同时存在；\t3）如果费用类型为METRO，费控维度地铁卡类型（CARD_TYPE）对应的费控条件必须存在；\t4）如果因公场景为OVERTIME，费控维度时间段（ALARM_CLOCK_TIME）对应的费控条件必须存在；\t5）不能存在重复的费控维度对应的费控条件；\t6）非MEAL费用类型，商户仅支持MERCHANT，不支持MEAL_MERCHANT").optional(),
  "expense_type": z.string().describe("费用类型").optional(),
  "payment_policy": z.string().describe("当笔消费金额大于规则可用余额时，用于控制支付策略，该字段缺省时采取因公账户和个人账户组合支付策略， 枚举值：PERSONAL（全部个人账户支付）, COMBINATION（因公账户和个人账户组合支付）").optional(),
  "scene_type": z.string().describe("因公场景").optional(),
  "standard_desc": z.string().describe("费控规则说明\t特殊说明：敏感词校验").optional(),
  "standard_name": z.string().describe("费控规则名称\t特殊说明：\t1）敏感词校验\t2）不能重复，若需要重复联系支持人员定向放开").optional()
}
```

### alipay_ebpp_invoice_expenserules_scenerule_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "action": z.string().describe("修改操作\t枚举值：\tADD_RULE（新增费控条件），DELETE_RULE（删除费控条件），MODIFY_RULE（修改费控条件），MODIFY_STANDARD（修改费控规则基本信息）").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "effective_end_date": z.string().describe("有效期截止\t特殊说明：修改费控规则基本信息时必传").optional(),
  "effective_start_date": z.string().describe("有效期起始\t特殊说明：修改费控规则基本信息时必传").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("费控规则条件列表 特殊说明：新增费控条件/修改费控条件/删除费控条件操作时必填").optional(),
  "payment_policy": z.string().describe("当笔消费金额大于规则可用余额时，用于控制支付策略，该字段缺省时采取因公账户和个人账户组合支付策略， 枚举值：PERSONAL（全部个人账户支付）, COMBINATION（因公账户和个人账户组合支付）").optional(),
  "standard_desc": z.string().describe("费控规则说明\t特殊说明：\t1）敏感词校验\t2）修改费控规则基本信息时必传").optional(),
  "standard_id": z.string().describe("费控规则ID").optional(),
  "standard_name": z.string().describe("费控规则名称\t特殊说明：\t1）敏感词校验\t2）修改费控规则基本信息时必传\t3）不能重复，若需要重复联系支持人员定向放开").optional()
}
```

### alipay_ebpp_invoice_expenserules_scenerule_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "standard_id": z.string().describe("费控规则ID").optional(),
  "page_num": z.number().int().describe("页数").optional(),
  "page_size": z.number().int().describe("页大小").optional()
}
```

### alipay_ebpp_invoice_expensescene_merchant_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "role_id": z.string().describe("商户ID").optional(),
  "pid": z.string().describe("商户ID").optional(),
  "shop_id": z.string().describe("门店ID").optional(),
  "expense_type": z.string().describe("费用类型\tMEAL - 工作餐").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("每页行数（最大100）").optional()
}
```

### alipay_ebpp_invoice_file_output_query

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("发票归属用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "open_id": z.string().describe("发票归属用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "invoice_code": z.string().describe("发票代码\t字段长度（10-12位），全电票时为空").optional(),
  "invoice_no": z.string().describe("发票号码\t字段长度（8-10位），全电票时为20位").optional(),
  "scene": z.string().describe("发票pdf文件下载应用场景。固定为 INVOICE_EXPENSE  表示发票报销。").optional(),
  "skip_expense_progress_sync": z.boolean().describe("是否跳过发票报销状态同步；当为true时，跳过报销状态同步校验。默认为false，需要先做报销状态同步").optional()
}
```

### alipay_ebpp_invoice_info_send

**Environment variables**



**Input schema**

```ts
{
  "invoice_info_list": z.array(z.object({ "apply_id": z.string().describe("支付宝端的申请id。如果在开票过程中，是通过支付宝提交的申请到机构端，支付宝会带上开票申请在支付宝生成的申请id，机构在回传发票的时候只需要回传这个申请id，不用获取用户的uid，支付宝可以根据申请id将发票归集到对应的用户名下").optional(), "check_code": z.string().describe("票面上的校验码信息。").optional(), "checker": z.string().describe("票面上复核人信息。").optional(), "clerk": z.string().describe("票面上开票员信息。").optional(), "ex_tax_amount": z.string().describe("不含税金额，票面上的不含税金额，单位（元），保留两位小数。").optional(), "extend_fields": z.string().describe("预留的扩展字段，格式如：key1=value1\\nkey2=value2\\nkey3=value3，字段之间以\\n分隔。").optional(), "file_download_type": z.string().describe("下载版式文件类型，需要回传文件下载链接的情况下必传").optional(), "file_download_url": z.string().describe("发票版式文件下载地址。").optional(), "financial_electronic_type": z.string().describe("财政电子票据子类型").optional(), "invoice_code": z.string().describe("发票代码，该字段与invoice_no构成一张发票的唯一标识。").optional(), "invoice_content": z.array(z.object({ "item_ex_tax_amount": z.string().describe("明细行不含税金额，单位元，保留两位小数").optional(), "item_name": z.string().describe("开票项目：货物或应税劳务、服务名称").optional(), "item_no": z.string().describe("国税局制定的商品税收编码，必须是最末级").optional(), "item_quantity": z.number().int().describe("数量；\t1.当row_type=0或2且item_unit_price为空，可空；\t2.可精确到小数点后6位").optional(), "item_spec": z.string().describe("规格型号").optional(), "item_sum_amount": z.string().describe("明细行价税合计，单位元，必须保证item_sum_amount=item_ex_tax_amount+item_tax_amount。").optional(), "item_tax_amount": z.string().describe("明细行税额，单位元，保留两位小数，无税或者免税情况下输入：0.00。").optional(), "item_tax_rate": z.string().describe("明细行税率，无税或者免税情况下输入：0.00。").optional(), "item_unit": z.string().describe("单位").optional(), "item_unit_price": z.string().describe("不含税单价（元）;\t1.当row_type=0或2且item_quantity为空，可空\t2.可精确到小数点后8位；").optional(), "row_type": z.string().describe("发票行性质：0表示正常行，1表示折扣行，2表示被折扣行。").optional() })).describe("发票明细项。").optional(), "invoice_date": z.string().describe("开票日期，格式如：YYYY-MM-DD。").optional(), "invoice_kind": z.string().describe("标识发票的类型，\tPLAIN:增值税电子普通发票;\tSPECIAL:增值税专用发票;\tALL_ELECTRONIC_GENERAL:电子发票（普通发票）;\tALL_ELECTRONIC_SPECIAL:电子发票（增值税专用发票）;\tPLAIN_INVOICE:增值税普通发票;\tFINANCIAL_ELECTRONIC_BILL:财政电子票据;").optional(), "invoice_memo": z.string().describe("票面上备注信息。").optional(), "invoice_no": z.string().describe("发票号码，该字段与invoice_code构成一张发票的唯一标识。").optional(), "invoice_title": z.object({ "payer_address_tel": z.string().describe("票面上的购买方地址、电话").optional(), "payer_bank_name_account": z.string().describe("票面上的购买方开户行及账户").optional(), "payer_register_no": z.string().describe("票面上的购买方纳税人识别号").optional(), "title_name": z.string().describe("票面上的购买方名称").optional() }).optional(), "invoice_type": z.string().describe("标识是红票还是蓝票，RED:红票;BLUE:蓝票。").optional(), "open_id": z.string().describe("支付宝用户userId，当发送红字发票时，即invoice_type＝RED时，可选填；或者apply_id不为空的时候，可选填；其他情况必填。").optional(), "ori_blue_inv_code": z.string().describe("红票情况下，必须填入原始蓝票的发票代码（全电票时为空）。").optional(), "ori_blue_inv_no": z.string().describe("红票情况下，必须填入原始蓝票的发票号码。").optional(), "out_invoice_id": z.string().describe("外部发票id，isv生成发票之后所生成的发票流水号，主要用做存储。").optional(), "out_trade_no": z.string().describe("该发票基于的实际交易流水号。").optional(), "payee": z.string().describe("票面上收款人信息。").optional(), "payee_address_tel": z.string().describe("票面上销售方地址、电话信息。").optional(), "payee_bank_name_account": z.string().describe("票面上销售方开户行及账号。").optional(), "payee_register_name": z.string().describe("票面上销售方企业名称。").optional(), "payee_register_no": z.string().describe("票面上销售方税号信息。").optional(), "sum_amount": z.string().describe("价税合计，票面上的总开票金额，单位（元），保留两位小数，sum_amount=ex_tax_amount+tax_amount。").optional(), "tax_amount": z.string().describe("合计税额，票面上的合计税额，单位（元），保留两位小数。").optional(), "trade_list": z.array(z.object({ "bill_no": z.string().describe("订单编号").optional(), "bill_time": z.string().describe("下单时间").optional(), "city_name": z.string().describe("商户所在城市(经营地址)").optional(), "detail_json": z.string().describe("账单明细信息，酒店水单信息，行程单信息，餐饮小票信息").optional(), "download_url": z.string().describe("账单明细信息，酒店水单，行程单，餐饮小票等pdf原件链接").optional(), "extend_map": z.string().describe("扩展参数\t\t不同组的k-v通过换行符区分").optional(), "merchant_name": z.string().describe("商家名称（显示名称，非企业名称，餐饮店、酒店、打车平台名称）").optional(), "out_json": z.string().describe("透传字段，不做处理，用于isv向后续报销税控方传递特殊信息标记").optional(), "payee_name": z.string().describe("销方名称").optional(), "payment_amount": z.string().describe("支付金额，单位（元），\t对应账单中的交易金额").optional(), "payment_time": z.string().describe("支付时间\t\t对应账单中的账单日期").optional(), "souce": z.string().describe("交易类型来源 需要按照枚举映射").optional(), "trade_type": z.string().describe("交易类型/账单分类").optional() })).describe("交易内容，非必填但是不可以传空值，如果无需回传trade_list则不需要传该对象").optional(), "user_id": z.string().describe("支付宝用户userId，当发送红字发票时，即invoice_type＝RED时，可选填；或者apply_id不为空的时候，可选填；其他情况必填。").optional() })).describe("发票信息列表").optional(),
  "m_short_name": z.string().describe("开票商户品牌简称，与商户入驻时的品牌简称保持一致。").optional(),
  "sub_m_short_name": z.string().describe("开票商户门店简称，与商户入驻时的门店简称保持一致。").optional()
}
```

### alipay_ebpp_invoice_institution_create

**Environment variables**



**Input schema**

```ts
{
  "consult_mode": z.string().describe("费控咨询模式，默认为0。").optional(),
  "currency": z.string().describe("该字段用于管控制度下发放的资产币种，不填写默认为人民币，设置该字段后，制度下手工发放的资产币种均为设置值。").optional(),
  "effective_end_date": z.string().describe("制度生效结束时间").optional(),
  "effective_start_date": z.string().describe("制度生效起始时间").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "expense_type": z.string().describe("费用类型").optional(),
  "institution_desc": z.string().describe("制度描述").optional(),
  "institution_name": z.string().describe("制度名称").optional(),
  "institution_scope_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "issue_rule_info_list": z.array(z.object({ "effective_period": z.string().describe("生效时间段").optional(), "invalid_mode": z.number().int().describe("累计类型，默认为0\t可选值：0（不可累计）、1（可累计）、2（累计天数）、3（累计到指定日期）").optional(), "invalid_mode_value": z.string().describe("累计类型值").optional(), "issue_amount_value": z.string().describe("发放金额，单位元").optional(), "issue_end_date": z.string().describe("发放规则有效结束时间").optional(), "issue_rule_id": z.string().describe("发放规则id").optional(), "issue_rule_name": z.string().describe("发放规则名称").optional(), "issue_start_date": z.string().describe("发放规则有效起始时间").optional(), "issue_type": z.string().describe("发放类型").optional(), "outer_source_id": z.string().describe("外部发放规则id").optional(), "quota_type": z.string().describe("额度类型").optional(), "share_mode": z.number().int().describe("是否可转赠").optional(), "target_id": z.string().describe("目标id").optional(), "target_type": z.string().describe("发放规则归属的目标类型").optional() })).describe("发放规则列表").optional(),
  "outer_source_id": z.string().describe("外部唯一标识，可用于防止重复创建").optional(),
  "standard_info_list": z.array(z.object({ "asset_share_source_info": z.object({ "share_mode": z.string().describe("当前规则可用的资产来源类型，搭配source_id_list使用。").optional(), "source_id_list": z.array(z.string()).describe("资产共享来源id列表，与share_mode配合设置，如果share_mode为INSTITUTION，该值则填写制度id列表").optional() }).optional(), "consume_mode": z.string().describe("消费模式，不填为默认模式，枚举值：COUPON_ONLY（仅支持点券）\tCOUPON_AND_CAP（支持点券+余额）\tDEFAULT（默认模式）\t点券：消费时找员工的点券，没有或者用完了不可付；\t点券+余额：消费时找员工的点券，没有找员工的余额，没有或者用完了不可付。\t默认：有给员工设置员工余额以员工余额为准，用完为止。否则只受规则里的限额和企业账户资金上限管控；").optional(), "expense_type_sub_category": z.string().describe("费用类型子类").optional(), "open_rule_id": z.string().describe("开票规则id，可通过接口alipay.ebpp.invoice.enterpriseconsume.enterpriseopenrule.create 创建并得到开票规则ID").optional(), "outer_source_id": z.string().describe("外部使用规则id，制度内使用规则该字段不允许重复").optional(), "payment_policy": z.string().describe("支付策略 当笔消费金额大于规则可用余额时，用于控制支付策略，该字段缺省时采取因公账户和个人账户组合支付策略").optional(), "personal_qrcode_mode": z.number().int().describe("个人收款码转账是否支持因公付，默认为0。可选值：0（不支持）、1（支持）").optional(), "standard_condition_info_list": z.array(z.object({ "rule_factor": z.string().describe("条件类型").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("使用规则条件列表").optional(), "standard_desc": z.string().describe("使用规则描述(敏感词校验)").optional(), "standard_id": z.string().describe("制度ID（创建使用规则时非必填）").optional(), "standard_name": z.string().describe("规则名称").optional() })).describe("使用规则列表").optional()
}
```

### alipay_ebpp_invoice_institution_delete

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id（该字段将废弃，不建议使用，可用enterprise_id字段替换）(该字段将废弃，不建议使用，可用enterprise_id字段替换)").optional(),
  "agreement_no": z.string().describe("授权签约协议号\t（该字段将废弃，不建议使用，可用enterprise_id字段替换）(该字段将废弃，不建议使用，可用enterprise_id字段替换)").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_id": z.string().describe("制度id").optional()
}
```

### alipay_ebpp_invoice_institution_detailinfo_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "outer_source_id": z.string().describe("外部唯一标识").optional(),
  "owner_type": z.string().describe("适配id类型").optional()
}
```

### alipay_ebpp_invoice_institution_expenserule_create

**Environment variables**



**Input schema**

```ts
{
  "asset_share_source_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "consume_mode": z.string().describe("消费模式").optional(),
  "enterprise_id": z.string().describe("企业码id").optional(),
  "expense_ctrl_rule_info_list": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "expense_type_sub_category": z.string().describe("费用类型子类").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "open_rule_id": z.string().describe("开票规则id").optional(),
  "outer_source_id": z.string().describe("外部唯一标识，填写该字段可用于创建幂等，防止重复创建").optional(),
  "payment_policy": z.string().describe("支付策略").optional(),
  "personal_qrcode_mode": z.number().int().describe("个人收款码转账是否支持因公付，默认为0。可选值：0（不支持）、1（支持）").optional(),
  "standard_condition_info_list": z.array(z.object({ "rule_factor": z.string().describe("条件类型").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("使用规则因子列表").optional(),
  "standard_desc": z.string().describe("使用规则描述").optional(),
  "standard_name": z.string().describe("费控规则名称").optional()
}
```

### alipay_ebpp_invoice_institution_expenserule_delete

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "standard_id_list": z.array(z.string()).describe("删除的使用规则id列表").optional()
}
```

### alipay_ebpp_invoice_institution_expenserule_modify

**Environment variables**



**Input schema**

```ts
{
  "action": z.string().describe("修改使用规则").optional(),
  "asset_share_source_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "consume_mode": z.string().describe("该使用规则支持的资产消费模式，不填写则为默认模式，默认模式下有余额时使用余额，没有余额则使用规则中的限额，点券模式为只能使用点券，点券+余额模式为可以使用点券和余额。").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("使用规则条件列表（已废弃）").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "open_rule_id": z.string().describe("开票规则id").optional(),
  "payment_policy": z.string().describe("当笔消费金额大于规则可用余额时，用于控制支付策略").optional(),
  "personal_qrcode_mode": z.number().int().describe("个人收款码转账是否支持因公付，默认为0。可选值：0（不支持）、1（支持）").optional(),
  "standard_condition_info_list": z.array(z.object({ "rule_factor": z.string().describe("条件类型").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("规则条件列表").optional(),
  "standard_desc": z.string().describe("规则描述").optional(),
  "standard_id": z.string().describe("使用规则id").optional(),
  "standard_name": z.string().describe("规则名称").optional()
}
```

### alipay_ebpp_invoice_institution_modify

**Environment variables**



**Input schema**

```ts
{
  "consult_mode": z.string().describe("费控咨询模式：\t0-支付宝内部计算规则可用金额\t1-咨询外部服务商规则可用金额").optional(),
  "effective": z.string().describe("制度是否启用").optional(),
  "effective_end_date": z.string().describe("制度生效结束时间（可空），最小粒度为天，最早是当日").optional(),
  "effective_start_date": z.string().describe("制度生效起始时间").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_desc": z.string().describe("制度描述").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "institution_name": z.string().describe("制度名称").optional(),
  "modify_issue_rule_detail_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "modify_scope_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "modify_standard_detail_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_ebpp_invoice_institution_pageinfo_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id（该字段将废弃，不建议使用，可用enterprise_id字段替换）(该字段将废弃，不建议使用，可用enterprise_id字段替换)").optional(),
  "agreement_no": z.string().describe("授权签约协议号（该字段将废弃，不建议使用，可用enterprise_id字段替换）(该字段将废弃，不建议使用，可用enterprise_id字段替换)").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("页大小").optional()
}
```

### alipay_ebpp_invoice_institution_scope_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id").optional(),
  "adapter_type": z.string().describe("制度适用范围类型").optional(),
  "add_owner_id_list": z.array(z.string()).describe("增加适配id列表").optional(),
  "add_owner_open_id_list": z.array(z.string()).describe("增加适配开放id列表").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "owner_type": z.string().describe("归属类型").optional(),
  "remove_owner_id_list": z.array(z.string()).describe("删除适配id列表").optional(),
  "remove_owner_open_id_list": z.array(z.string()).describe("删除适配开放id列表").optional()
}
```

### alipay_ebpp_invoice_institution_scopepageinfo_query

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业共同账户id（该字段将废弃，不建议使用，可用enterprise_id字段替换）(该字段将废弃，不建议使用，可用enterprise_id字段替换)").optional(),
  "agreement_no": z.string().describe("授权签约协议号（该字段将废弃，不建议使用，可用enterprise_id字段替换）(该字段将废弃，不建议使用，可用enterprise_id字段替换)").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "owner_type": z.string().describe("适配id类型").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("页大小").optional()
}
```

### alipay_ebpp_invoice_issuerule_create

**Environment variables**



**Input schema**

```ts
{
  "effective": z.string().describe("是否启用，\"0\"为停用，\"1\"为启用；\t如果target_type指定INSTITUTION，则与制度一致,无需填写").optional(),
  "effective_period": z.string().describe("生效周期，时间不限格式：\"{\\\"all\\\":true}\"").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invalid_mode": z.number().int().describe("是否可累计：0（不可累计）、1（可累计），2（累计天数）、3（累计到指定日期）余额只允许可累计，按城市发放只允许不可累计，设置了生效周期只允许不可累计").optional(),
  "invalid_mode_value": z.string().describe("累计值（预留字段）").optional(),
  "issue_amount_value": z.string().describe("发放金额，单位（元）；\t按城市不同发放标准示例值：\"[{\\\"cities\\\":[\\\"321000\\\",\\\"321100\\\"],\\\"amount\\\":\\\"50\\\"},{\\\"cities\\\":[\\\"321200\\\",\\\"321300\\\"],\\\"amount\\\":\\\"150\\\"}]\"\t统一标准发放示例值：\"200\"").optional(),
  "issue_end_date": z.string().describe("发放规则的截止时间\t如果target_type指定INSTITUTION，则使用制度有效期结束时间，无需填写").optional(),
  "issue_rule_name": z.string().describe("发放规则名称").optional(),
  "issue_start_date": z.string().describe("发放规则的开始时间\t如果target_type指定INSTITUTION，则使用制度有效期起始时间，无需填写").optional(),
  "issue_type": z.string().describe("发放类型").optional(),
  "outer_source_id": z.string().describe("填写该字段可用于创建幂等，防止重复创建").optional(),
  "quota_type": z.string().describe("额度类型，枚举：COUPON（点券）、CAP（余额）").optional(),
  "share_mode": z.number().int().describe("是否可转赠：0（不可转赠）、1（可转赠）").optional(),
  "target_id": z.string().describe("发放规则关联的目标值\ttarget_type为制度时：制度id").optional(),
  "target_type": z.string().describe("发放规则关联的目标类型").optional()
}
```

### alipay_ebpp_invoice_issuerule_delete

**Environment variables**



**Input schema**

```ts
{
  "enterprise_id": z.string().describe("企业ID").optional(),
  "issue_rule_id_list": z.array(z.string()).describe("需要删除的发放规则id列表").optional(),
  "target_id": z.string().describe("目标值id").optional(),
  "target_type": z.string().describe("发放规则关联的目标类型").optional()
}
```

### alipay_ebpp_invoice_issuerule_modify

**Environment variables**



**Input schema**

```ts
{
  "action": z.string().describe("修改类型，枚举：\tMODIFY_BASIC_INFO（修改发放规则基本信息）").optional(),
  "effective": z.string().describe("是否启用，\"0\"为停用，\"1\"为启用；").optional(),
  "effective_period": z.string().describe("生效周期（不传则不修改），不限：\"{\\\"all\\\":true}\"").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invalid_mode": z.number().int().describe("是否可累计（不传则不修改）可选值：0（不可累计）、1（可累计），2（累计天数），3（累计到固定时间）").optional(),
  "invalid_mode_value": z.string().describe("累计值").optional(),
  "issue_amount_value": z.string().describe("发放金额（不传则不修改），单位（元）").optional(),
  "issue_end_date": z.string().describe("发放规则的截止时间").optional(),
  "issue_rule_id": z.string().describe("发放规则id").optional(),
  "issue_rule_name": z.string().describe("发放规则名称（不传则不修改）").optional(),
  "issue_start_date": z.string().describe("发放规则的开始时间").optional(),
  "issue_type": z.string().describe("发放类型").optional(),
  "quota_type": z.string().describe("额度类型").optional(),
  "share_mode": z.number().int().describe("是否可转赠（不传则不修改），可选值：0（不可转赠）、1（可转赠），默认为0，按城市发放不支持可转赠").optional(),
  "target_id": z.string().describe("发放规则关联的目标值 target_type为制度时：制度id").optional(),
  "target_type": z.string().describe("发放规则关联的目标类型").optional()
}
```

### alipay_ebpp_invoice_isvtoken_reim_apply

**Environment variables**



**Input schema**

```ts
{
  "isv_app_code": z.string().describe("报销软件app对应的isv app code，由支付宝进行分配。详情参见 <a href=\"https://opendocs.alipay.com/open/017fwh\">\"推\"模式发票报销</a>").optional()
}
```

### alipay_ebpp_invoice_list_expense_sync

**Environment variables**



**Input schema**

```ts
{
  "business_time": z.string().describe("报销进度变更时间").optional(),
  "expense_order_no": z.string().describe("商户报销单据号").optional(),
  "expense_tax_no": z.string().describe("报销企业税号").optional(),
  "invoice_element_list": z.array(z.object({ "apply_id": z.string().describe("同步申请id，每次发起同步时生成，isv每次请求需要保证唯一").optional(), "expense_detail_url": z.string().describe("报销详情地址，提供用户通过发票管家查看报销进度的地址\r\t如果报销企业入驻发票管家时需要isv传入报销详情地址，则必须提供").optional(), "invoice_code": z.string().describe("发票代码").optional(), "invoice_no": z.string().describe("发票号码").optional() })).describe("需要同步报销状态的发票列表").optional(),
  "memo": z.string().describe("报销审批备注").optional(),
  "open_id": z.string().describe("用户uid").optional(),
  "status": z.string().describe("EXPENSE_APPLY:报销申请提交;EXPENSE_APPROVAL_PASS:报销申请审核通过;EXPENSE_FINISHED:报销申请完成;EXPENSE_CANCEL:报销申请撤回").optional(),
  "user_id": z.string().describe("用户uid").optional()
}
```

### alipay_ebpp_invoice_merchant_enterstatus_query

**Environment variables**



**Input schema**

```ts
{
  "m_short_name": z.string().describe("商户品牌简称，只能由大写字母、下划线、数字组成，且必须以大写字母开头。").optional(),
  "product_code": z.string().describe("商户门店入驻的产品码,STANDARD_INVOICE:扫码开票，INVOICE_RETURN:企业自建-发票回传，INVOICE_EXPENSE:发票报销，PAYMENT_OPEN:支付即开票，PAY_FEE_OPEN:缴费后开票。").optional(),
  "process_id": z.string().describe("工单流水号（如果不填则默认查询最近一条工单）").optional()
}
```

### alipay_ebpp_invoice_merchantlist_enter_apply

**Environment variables**



**Input schema**

```ts
{
  "merchant_base": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "sub_merchant_common_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "sub_merchant_list": z.array(z.object({ "extend_fields": z.string().describe("扩展字段，为json字符串格式；入驻缴费后开票的产品如果需要传入自定义开票链接，由此字段传入。").optional(), "industry": z.string().describe("商户行业，枚举值如下：subway：地铁，etc：ETC，online_car_hailing：网约车，catering：餐饮，hotel：酒店，convenience_store：便利店，oil：加油，insurance：保险，service_provider：运营商，life_payment：生活缴费，political：政务，other：其他").optional(), "pid": z.string().describe("开票商户pid，入驻支付即开票场景的时候，非登录账号入驻模式，则该字段必传").optional(), "register_no": z.string().describe("商户门店税号。").optional(), "sub_m_name": z.string().describe("商户门店全称。").optional(), "sub_m_short_name": z.string().describe("商户门店简称").optional() })).describe("商户门店列表信息，最多传入30个门店信息").optional()
}
```

### alipay_ebpp_invoice_order_query

**Environment variables**



**Input schema**

```ts
{
  "order_no": z.string().describe("开票申请时所传入订单号，不限于支付宝体内交易订单号。如：20200520110046966071").optional(),
  "m_short_name": z.string().describe("定义商户的一级简称,用于标识商户品牌，对应于商户入驻时填写的\"商户品牌简称\"。 如：肯德基：KFC").optional(),
  "sub_m_short_name": z.string().describe("定义商户的二级简称,用于标识商户品牌下的分支机构，如门店，对应于商户入驻时填写的\"商户门店简称\"。 如：肯德基-杭州西湖区文一西路店：KFC-HZ-19003 要求：\"商户品牌简称+商户门店简称\"作为确定商户及其下属机构的唯一标识，不可重复。").optional()
}
```

### alipay_ebpp_invoice_sycn

**Environment variables**



**Input schema**

```ts
{
  "invoice_info": z.array(z.object({ "apply_id": z.string().describe("支付宝端的申请id。如果在开票过程中，是通过支付宝提交的申请到机构端，支付宝会带上开票申请在支付宝生成的申请id，机构在回传发票的时候只需要回传这个申请id，不用获取用户的uid，支付宝可以根据申请id将发票归集到对应的用户名下").optional(), "extend_fields": z.string().describe("key=value，每组键值对以回车分割").optional(), "file_download_type": z.string().describe("下载的发票文件类型，可选值：\tpdf（发票原文件）\tofd（发票原文件）\tjpg（发票原文件缩略图）").optional(), "file_download_url": z.string().describe("发票原文件下载地址\t1.当tax_type=PLAIN、ALL_ELECTRONIC_GENERAL或ALL_ELECTRONIC_SPECIAL时，\tfile_download_url必传\t且file_download_type取值范围为pdf或ofd；\t2.当tax_type=SPECIAL时，\tfile_download_url必传\tfile_download_type可以传入pdf，ofd，jpg\t3.当其他票种时，file_download_url可以不传").optional(), "financial_electronic_type": z.string().describe("财政电子票据子类型，当tax_type=FINANCIAL_ELECTRONIC_BILL时要求必填\t可选值如下：\t01:非税收入通用票据 \t02:非税收入专用票据\t03:非税收入一般缴款书\t04:资金往来结算票据\t05:公益事业捐赠票据\t06:医疗收费票据\t07:社会团体会费票据\t08:社会保险基金票据\t09:工会经费收入票据\t99:其他财政票据").optional(), "invoice_amount": z.string().describe("发票金额，大于0且精确到小数点两位，以元为单位\r\t需要传入税价合计金额").optional(), "invoice_code": z.string().describe("发票代码，为国税局生成的唯一值，全电票时为空，其他情况不可为空").optional(), "invoice_content": z.array(z.object({ "item_amount": z.string().describe("价税合计。(等于sumPrice和tax之和)").optional(), "item_name": z.string().describe("发票项目名称（或商品名称）").optional(), "item_no": z.string().describe("商品编号").optional(), "item_price": z.string().describe("单价，格式：100.00。新版电子发票，折扣行此参数不能传，非折扣行必传").optional(), "item_quantity": z.number().int().describe("数量。新版电子发票，折扣行此参数不能传，非折扣行必传").optional(), "item_sum_price": z.string().describe("单项总价，格式：100.00").optional(), "item_tax_price": z.string().describe("税额").optional(), "item_tax_rate": z.string().describe("税率").optional(), "item_unit": z.string().describe("台").optional(), "row_type": z.number().int().describe("发票行性质。0表示正常行，1表示折扣行，2表示被折扣行。比如充电器单价100元，折扣10元，则明细为2行，充电器行性质为2，折扣行性质为1。如果充电器没有折扣，则值应为0").optional() })).describe("发票内容项").optional(), "invoice_date": z.string().describe("发票日期，用户填写，目前精确到日").optional(), "invoice_fake_code": z.string().describe("发票防伪码").optional(), "invoice_file_data": z.string().describe("原始发票PDF/OFD文件流").optional(), "invoice_img_url": z.string().describe("发票原始文件jpg文件地址").optional(), "invoice_no": z.string().describe("发票号码，国税局生成的唯一号码，不可为空串；\r\t使用时请注意，invoice_no+invoice_code唯一，不能重复").optional(), "invoice_operator": z.string().describe("发票开具操作人").optional(), "invoice_title": z.object({ "is_default": z.boolean().describe("是否为用户设置默认抬头\r\t字段值包括两种情况：\r\tfalse（非默认）\r\ttrue（默认抬头）").optional(), "logon_id": z.string().describe("支付宝用户登录名").optional(), "open_bank_account": z.string().describe("银行账号").optional(), "open_bank_name": z.string().describe("开户银行").optional(), "open_id": z.string().describe("支付宝用户id").optional(), "tax_register_no": z.string().describe("纳税人识别号").optional(), "tele_phone_no": z.string().describe("用户私人手机号").optional(), "title_name": z.string().describe("抬头名称").optional(), "title_type": z.string().describe("抬头类型\t字段值有两种情况抬:\tPERSONAL（个人） \tCORPORATION（企业）").optional(), "user_address": z.string().describe("地址").optional(), "user_email": z.string().describe("邮箱").optional(), "user_id": z.string().describe("支付宝用户id").optional(), "user_mobile": z.string().describe("电话号码").optional() }).optional(), "invoice_type": z.string().describe("发票类型，按照可选值只传入英文部分，该字段严格要求大小写\r\t可选值:\r\tblue（蓝票）\r\tred（红票）").optional(), "open_id": z.string().describe("支付宝用户id，支付宝端的申请id存在的时候也不需要传，其他情况下，当同步的是蓝票时，必传，红票时不需传。").optional(), "original_blue_invoice_code": z.string().describe("仅用于同步红票，原始蓝票发票代码，同步红票时必传（全电票时为空）").optional(), "original_blue_invoice_no": z.string().describe("仅用于同步红票，原始蓝票发票号码，同步红票时必传").optional(), "out_biz_no": z.string().describe("商户交易流水号，不可为空串;\r\t传入红票时请注意，此字段的值要和蓝票保持一致").optional(), "out_invoice_id": z.string().describe("商户唯一开票申请业务流水号，同一个isv下不能重复").optional(), "register_address": z.string().describe("开票单位地址").optional(), "register_bank_account": z.string().describe("开票单位开户行账号").optional(), "register_bank_name": z.string().describe("开票单位开户行名称").optional(), "register_name": z.string().describe("开票单位").optional(), "register_no": z.string().describe("纳税人识别号，不可为空串").optional(), "register_phone_no": z.string().describe("开票人电话，支持座机和手机两种格式").optional(), "sum_amount": z.string().describe("价税合计").optional(), "tax_amount": z.string().describe("税额").optional(), "tax_type": z.string().describe("税种\t可选值：\tPLAIN：增值税电子普通发票\tALL_ELECTRONIC_GENERAL：电子发票（普通发票）\tALL_ELECTRONIC_SPECIAL：电子发票（增值税专用发票）\tSPECIAL：增值税专用发票\tPLAIN_INVOICE:增值税普通发票\tFINANCIAL_ELECTRONIC_BILL:财政电子票据").optional(), "user_id": z.string().describe("支付宝用户id，支付宝端的申请id存在的时候也不需要传，其他情况下，当同步的是蓝票时，必传，红票时不需传。").optional() })).describe("同步发票信息模型").optional(),
  "m_short_name": z.string().describe("商户的品牌名称简称,该字段需要接入前向发票管家申请，\r\tm_short_name+sub_m_short_name具有唯一约束\r\t如：肯德基：KFC").optional(),
  "sub_m_short_name": z.string().describe("支付宝为商户分配的商户门店简称，该字段需要接入前在发票管家申请\r\t如：肯德基-杭州西湖区文一西路店：KFC-HZ-XH001").optional()
}
```

### alipay_ebpp_invoice_sync_simple_send

**Environment variables**



**Input schema**

```ts
{
  "invoice_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "m_short_name": z.string().describe("开票商户品牌简称，与商户入驻时的品牌简称保持一致。详情参见 <a href=\"https://opendocs.alipay.com/open/10691/welcome-to-lark\">电子发票</a>").optional(),
  "sub_m_short_name": z.string().describe("开票商户门店简称，与商户入驻时的门店简称保持一致。").optional()
}
```

### alipay_ebpp_invoice_taxno_batchquery

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "enable_trade_out": z.string().describe("默认值为false。true为输出交易信息，false为不输出交易信息。").optional(),
  "end_invoice_date": z.string().describe("查询结束时间，精确到天（按开票日期查询）\tstart_invoice_date和end_invoice_date传值要求\t1.同时为空时，返回最近半年200条数据\t2.必须同时为空 或 同时不为空\t3.结束日期不能大于当前日期\t4.开始时间和结束时间跨度不能超过6个月").optional(),
  "invoice_kind_list": z.array(z.string()).describe("查询票种列表").optional(),
  "limit_size": z.number().int().describe("查询结果上限笔数，最大值20").optional(),
  "page_num": z.number().int().describe("当前页码，为空时默认第一页").optional(),
  "scene": z.string().describe("发票要素获取应用场景。<a href=\"https://opendocs.alipay.com/open/10691/bv8s88\">\"拉\"模式报销</a> 固定为 INVOICE_EXPENSE 表示发票报销。").optional(),
  "start_invoice_date": z.string().describe("查询起始时间，精确到天（按开票日期查询）\tstart_invoice_date和end_invoice_date传值要求\t1.同时为空时，返回最近半年200条数据\t2.必须同时为空 或 同时不为空\t3.结束日期不能大于当前日期\t4.开始时间和结束时间跨度不能超过6个月").optional(),
  "tax_no": z.string().describe("企业税号").optional()
}
```

### alipay_ebpp_invoice_title_dynamic_get

**Environment variables**



**Input schema**

```ts
{
  "bar_code": z.string().describe("抬头动态码").optional()
}
```

### alipay_ebpp_invoice_title_list_get

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "user_id": z.string().describe("支付宝用户id").optional(),
  "open_id": z.string().describe("支付宝用户id").optional()
}
```

### alipay_ebpp_invoice_token_batchquery

**Environment variables**



**Input schema**

```ts
{
  "invoice_token": z.string().describe("查询请求令牌。通过唤起支付宝钱包后用户进入发票管家选择发票列表后创建，并通过isv接收url回传给isv。详见 <a href=\"https://opendocs.alipay.com/open/01m6z5\">\"选\"模式发票报销</a>。").optional(),
  "scene": z.string().describe("发票要素获取应用场景。固定为 INVOICE_EXPENSE 表示发票报销。").optional()
}
```

### alipay_ebpp_pdeduct_async_pay

**Environment variables**



**Input schema**

```ts
{
  "agent_channel": z.string().describe("分配给外部机构发起扣款时的渠道码。朗新为LANGXIN").optional(),
  "agent_code": z.string().describe("二级渠道码，预留字段").optional(),
  "agreement_id": z.string().describe("支付宝代扣协议Id").optional(),
  "bill_date": z.string().describe("账期").optional(),
  "bill_key": z.string().describe("户号").optional(),
  "extend_field": z.string().describe("扩展字段").optional(),
  "fine_amount": z.string().describe("滞纳金").optional(),
  "memo": z.string().describe("备注信息").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_order_no": z.string().describe("商户外部业务流水号").optional(),
  "pay_amount": z.string().describe("扣款金额，支付总金额，包含滞纳金").optional(),
  "pid": z.string().describe("商户partnerId").optional(),
  "user_id": z.string().describe("用户ID").optional()
}
```

### alipay_ebpp_pdeduct_bill_pay_status

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("支付宝用户ID").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_order_no": z.string().describe("商户代扣业务流水").optional()
}
```

### alipay_ebpp_pdeduct_pay

**Environment variables**



**Input schema**

```ts
{
  "agent_channel": z.string().describe("渠道码，如用户通过机构通过服务窗进来签约则是PUBLICFORM，此值可随意传，只要不空就行").optional(),
  "agent_code": z.string().describe("二级渠道码，预留字段").optional(),
  "agreement_id": z.string().describe("支付宝代扣协议Id").optional(),
  "bill_date": z.string().describe("账期").optional(),
  "bill_key": z.string().describe("户号，缴费单位用于标识每一户的唯一性的").optional(),
  "extend_field": z.string().describe("扩展参数。必须以key value形式定义，\r\t转为json为格式：{\"key1\":\"value1\",\"key2\":\"value2\",\r\t\"key3\":\"value3\",\"key4\":\"value4\"}\r\t 后端会直接转换为MAP对象，转换异常会报参数格式错误").optional(),
  "fine_amount": z.string().describe("滞纳金").optional(),
  "memo": z.string().describe("备注信息").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_order_no": z.string().describe("商户外部业务流水号").optional(),
  "pay_amount": z.string().describe("扣款金额，支付总金额，包含滞纳金").optional(),
  "pid": z.string().describe("商户PartnerId").optional(),
  "user_id": z.string().describe("用户ID").optional()
}
```

### alipay_ebpp_pdeduct_sign_add

**Environment variables**



**Input schema**

```ts
{
  "agent_channel": z.string().describe("机构签约代扣来源渠道\r\tPUBLICPLATFORM：服务窗").optional(),
  "agent_code": z.string().describe("从服务窗发起则为publicId的值").optional(),
  "bill_key": z.string().describe("户号，机构针对于每户的水、电都会有唯一的标识户号").optional(),
  "biz_type": z.string().describe("业务类型。枚举支持：\t*JF：公共事业缴纳。\t*WUYE：物业缴费。\t*HK：信用卡还款。\t*TX：通讯缴费。\t*IND：保险缴费。").optional(),
  "charge_inst": z.string().describe("支付宝缴费系统中的出账机构ID").optional(),
  "deduct_prod_code": z.string().describe("代扣产品码。 缴费业务场景中，传入INST_DIRECT_DEDUCT。保险业务场景中, 传入INSURANCE_MERCHANT_DEDUCT。").optional(),
  "deduct_type": z.string().describe("签约类型可为空").optional(),
  "ext_user_info": z.string().describe("外部用户实名认证相关信息, 用于做签约时的实名校验。 \r\t注： \r\t\r\tname: 姓名\r\tcert_type: 身份证：IDENTITY_CARD、护照：PASSPORT、军官证：OFFICER_CARD、士兵证：SOLDIER_CARD、户口本：HOKOU等\r\tcert_no: 证件号码\r\tneed_check_info取值 T/F，只有为T时才做强制校验。\r\tmobile:手机号，目前暂不使用此字段做校验\r\tmin_age: 允许的最小买家年龄,min_age为整数，必须大于等于0.").optional(),
  "extend_field": z.string().describe("扩展字段").optional(),
  "notify_config": z.string().describe("通知方式设置，可为空").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_agreement_id": z.string().describe("外部产生的协议ID").optional(),
  "owner_name": z.string().describe("户名，户主真实姓名").optional(),
  "pay_config": z.string().describe("支付工具设置，目前可为空").optional(),
  "pay_password_token": z.string().describe("支付密码鉴权token，需要用户首先处于登陆态，然后访问https://ebppprod.alipay.com/deduct/enterMobileicPayPassword.htm?cb=自己指定的回跳连接地址，访问页面后会进到独立密码校验页，用户输入密码校验成功后，会生成token回调到指定的回跳地址，如果设置cb=www.alipay.com则最后回调的内容是www.alipay.com?token=312314ADFDSFAS，然后签约时直接取得地址后token的值即可。").optional(),
  "pid": z.string().describe("商户id，商户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "sign_expire_date": z.string().describe("签约到期时间。空表示无限期，一期固定传空。").optional(),
  "sub_biz_type": z.string().describe("业务子类型。业务子类型是业务类型的下一级概念。枚举支持：\t*WATER：缴水费。\t*ELECTRIC：缴电费。\t*GAS：缴燃气费。\t*COMMUN：缴固话宽带费。\t*CATV：缴有线电视费。\t*TRAFFIC：缴交通罚款。\t*WUYE：缴物业费。\t*RC：定期还车贷代扣。\t*RH：定期还房贷代扣。\t*RR：定期还房租代扣。\t*RN：定期还网贷代扣。\t*CZ：手机充值代扣。\t*CAR：车险。\t*LIFE：寿险。\t*HEALTH：健康险。\t例如：WATER表示JF下面的水费。").optional(),
  "user_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional()
}
```

### alipay_ebpp_pdeduct_sign_cancel

**Environment variables**



**Input schema**

```ts
{
  "agent_channel": z.string().describe("此值只是供代扣中心做最后的渠道统计用，并不做值是什么的强校验，只要不为空就可以").optional(),
  "agent_code": z.string().describe("标识发起方的ID，从服务窗发起则为appId的值，appId即开放平台分配给接入ISV的id，此处也可以随便真其它值，只要能标识唯一即可").optional(),
  "agreement_id": z.string().describe("支付宝代扣协议ID").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "pay_password_token": z.string().describe("需要用户首先处于登陆态，然后访问https://ebppprod.alipay.com/deduct/enterMobileicPayPassword.htm?cb=自己指定的回跳连接地址,访问页面后会进到独立密码校验页，用户输入密码校验成功后，会生成token回调到指定的回跳地址，如果设置cb=www.baidu.com则最后回调的内容是www.baidu.com?token=312314ADFDSFAS,然后签约时直接取得地址后token的值即可").optional(),
  "user_id": z.string().describe("用户ID").optional()
}
```

### alipay_ebpp_pdeduct_sign_query

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("用户ID").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "agreement_id": z.string().describe("支付宝代扣协议Id。若协议id不传递，则需要保证业务类型、子业务类型、出账机构、户号必传").optional(),
  "biz_type": z.string().describe("业务类型。\r\tJF：缴水、电、燃气、固话宽带、有线电视、交通罚款费用\r\tWUYE：缴物业费\r\tHK：信用卡还款\r\tTX：手机充值").optional(),
  "sub_biz_type": z.string().describe("业务子类型。\r\tWATER：缴水费\r\tELECTRIC：缴电费\r\tGAS：缴燃气费\r\tCOMMUN：缴固话宽带\r\tCATV：缴有线电视费\r\tTRAFFIC：缴交通罚款\r\tWUYE：缴物业费\r\tHK：信用卡还款\r\tCZ：手机充值").optional(),
  "charge_inst": z.string().describe("支付宝缴费系统中的出账机构ID").optional(),
  "bill_key": z.string().describe("户号，机构针对于每户的水、电都会有唯一的标识户号").optional()
}
```

### alipay_ebpp_pdeduct_sign_validate

**Environment variables**



**Input schema**

```ts
{
  "agent_channel": z.string().describe("机构签约代扣来源渠道\r\tPUBLICPLATFORM：服务窗").optional(),
  "agent_code": z.string().describe("从服务窗发起则为该服务窗的appid的值").optional(),
  "bill_key": z.string().describe("户号，机构针对于每户的水、电都会有唯一的标识户号").optional(),
  "biz_type": z.string().describe("业务类型。\r\tJF：缴水、电、燃气、固话宽带、有线电视、交通罚款费用\r\tWUYE：缴物业费\r\tHK：信用卡还款\r\tTX：手机充值").optional(),
  "charge_inst": z.string().describe("支付宝缴费系统中的出账机构ID").optional(),
  "deduct_type": z.string().describe("签约类型,可为空。目前类型有INST_DIRECT_DEDUCT").optional(),
  "extend_field": z.string().describe("扩展字段").optional(),
  "notify_config": z.string().describe("通知方式设置，本期预留字段，固定传空。").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_agreement_id": z.string().describe("外部机构签约的协议id").optional(),
  "owner_name": z.string().describe("户名，户主真实姓名").optional(),
  "pay_config": z.string().describe("支付工具设置，目前可为空。类型有：BALANCE;CARTOON;BIGAMOUNT_CREDIT_CARTOON;DEBIT_EXPRESS;OPTIMIZED_MOTO;PCREDIT_PAY;MONEY_FUND").optional(),
  "pid": z.string().describe("商户签约支付宝账号的userid，2088开头16位长度的字符串，在支付宝系统中唯一").optional(),
  "sign_expire_date": z.string().describe("签约到期时间。空表示无限期，一期固定传空。").optional(),
  "sub_biz_type": z.string().describe("业务子类型。\r\tWATER：缴水费\r\tELECTRIC：缴电费\r\tGAS：缴燃气费\r\tCOMMUN：缴固话宽带\r\tCATV：缴有线电视费\r\tTRAFFIC：缴交通罚款\r\tWUYE：缴物业费\r\tHK：信用卡还款\r\tCZ：手机充值").optional(),
  "user_id": z.string().describe("用户支付宝账号id，2088开头16位长度的字符串，在支付宝系统中唯一").optional()
}
```

### alipay_eco_contract_signflows_create

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "attachments": z.array(z.object({ "attachment_name": z.string().describe("流程附件名称").optional(), "file_id": z.string().describe("流程附件id").optional() })).describe("附件信息（附件可作为合同的辅助证明材料，无需签署。需通过文件直传接口上传附件，获取文件id后添加）。注意事项参见 <a href=\"https://opendocs.alipay.com/mini/00kr2w\">文件流上传方法</a>。").optional(),
  "business_scene": z.string().describe("流程主题（简要概括合同的签署内容）").optional(),
  "config_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "template_infos": z.array(z.object({ "fill_contents": z.array(z.object({ "struct_key": z.string().describe("模板组件自定义key").optional(), "value": z.string().describe("模板值,该值长度取决于配置模板时该字段的限制").optional() })).describe("模板填充项，根据组件key值传入填写内容").optional(), "name": z.string().describe("签署文件名称").optional(), "signfields": z.array(z.object({ "sign_field_type": z.string().describe("签署类型：\t\tplatform-平台自动签：无需指定签署人。创建流程后，系统将自动盖上商户的默认企业印章。\t\tperson-个人签署：需要指定签署人个人信息。创建流程后，需通过签署插件完成签署。\torg-企业签署：需要指定签署企业信息与经办人个人信息。创建流程后，需经办人代企业完成签署。（企业暂不支持插件签署，可通过获取签署地址接口获取企业签署地址）").optional(), "signer": z.object({ "email": z.string().describe("个人邮箱").optional(), "id_number": z.string().describe("个人证件号").optional(), "id_type": z.string().describe("个人证件类型（证件号不为空时必填，详见个人证件类型说明 ）").optional(), "mobile": z.string().describe("个人手机号").optional(), "name": z.string().describe("个人姓名").optional(), "org": z.object({ "org_id_number": z.string().describe("企业证件号").optional(), "org_id_type": z.string().describe("企业证件类型，（证件号不为空时必填，详见企业证件类型）").optional(), "org_legal_id_number": z.string().describe("法定代表人证件号").optional(), "org_legal_id_type": z.string().describe("法定代表人证件类型").optional(), "org_legal_name": z.string().describe("法定代表人名称").optional(), "org_name": z.string().describe("企业名称").optional(), "third_party_user_id": z.string().describe("企业唯一标识：可传入平台机构id、企业证件号、企业邮箱等（个人用户与企业的唯一标识不可重复）").optional() }).optional(), "third_party_user_id": z.string().describe("个人唯一标识：可传入平台的个人用户id、支付宝userid、证件号、手机号、邮箱等。").optional() }).optional(), "struct_key": z.string().describe("签署区key值").optional() })).describe("签署区，根据签署区key值传入对应的签署人信息").optional(), "template_id": z.string().describe("模板id，通过创建合同模板获取").optional() })).describe("模板信息（基于合同模板填充内容生成待签文件，并指定签署人）").optional()
}
```

### alipay_eco_doc_template_create

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "content_md_5": z.string().describe("模版文件的md5值。示例代码参见 <a href=\"https://opendocs.alipay.com/mini/00arl2#%E5%88%9B%E5%BB%BA%E5%90%88%E5%90%8C%E6%A8%A1%E6%9D%BF\">创建合同模板</a>").optional(),
  "content_type": z.string().describe("目标文件的MIME类型。示例代码参见 <a href=\"https://opendocs.alipay.com/mini/00arl2#%E5%88%9B%E5%BB%BA%E5%90%88%E5%90%8C%E6%A8%A1%E6%9D%BF\">创建合同模板</a>").optional(),
  "convert_to_pdf": z.string().describe("是否需要转成pdf，如果模板文件为.doc/.docx 传true，为pdf传false").optional(),
  "file_name": z.string().describe("文件名称，必须带上文件扩展名如 .pdf、.doc、.docx，否则会导致后续发起流程校验异常。").optional()
}
```

### alipay_eco_doctemplate_settingurl_query

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "template_id": z.string().describe("合同模板id。通过<a href =\"https://opendocs.alipay.com/apis/api_50/alipay.eco.doc.template.create\">创建合同模版</a>（alipay.eco.doc.template.create）接口获取。").optional()
}
```

### alipay_eco_edu_kt_billing_modify

**Environment variables**



**Input schema**

```ts
{
  "bank_success": z.string().describe("成功Y，失败N").optional(),
  "buyer_logon_id": z.string().describe("退款时，支付宝返回的用户的登录id").optional(),
  "buyer_user_id": z.string().describe("支付宝返回的买家支付宝用户id").optional(),
  "buyer_user_open_id": z.string().describe("支付宝返回的买家支付宝用户id加密后信息").optional(),
  "fund_change": z.string().describe("本次退款是否发生了资金变化").optional(),
  "gmt_refund": z.string().describe("支付宝返回的退款时间，而不是商户退款申请的时间").optional(),
  "out_request_no": z.string().describe("标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传。（若退款时填写，则同步退款状态时也必须填写）").optional(),
  "out_trade_no": z.string().describe("isv系统的订单号").optional(),
  "refund_amount": z.string().describe("需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数").optional(),
  "refund_detail_item_list": z.string().describe("支付宝返回的退款资金渠道，json格式字符串").optional(),
  "refund_reason": z.string().describe("退款原因，商家根据客户实际退款原因填写（若退款时填写，则同步退款状态时也必须填写）").optional(),
  "status": z.string().describe("状态：1:缴费成功，2:关闭账单，3、退费\r\t如果为退款状态，需要填写fund_change, \r\trefund_amount, refund_reason,\r\tout_request_no, buyer_logon_id,\r\tgmt_refund,\r\tbuyer_user_id, refund_detail_item_list;\r\t4、同步网商返回的状态,如果是网商银行的账单，bank_success这个字段必填").optional(),
  "trade_no": z.string().describe("支付宝返回的交易号").optional()
}
```

### alipay_eco_edu_kt_billing_query

**Environment variables**



**Input schema**

```ts
{
  "isv_pid": z.string().describe("Isv pid").optional(),
  "school_pid": z.string().describe("学校支付宝pid，直付通填写smid").optional(),
  "out_trade_no": z.string().describe("ISV调用发送账单接口，返回给商户的order_no").optional()
}
```

### alipay_eco_edu_kt_billing_send

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]，\r\t如果是非多选项，是要和缴费项的总和相同，多选模式不做验证").optional(),
  "charge_bill_title": z.string().describe("缴费账单名称").optional(),
  "charge_item": z.array(z.object({ "item_mandatory": z.string().describe("缴费项是否必选\r\t如果缴费项是多选模式，此参数生效。 “Y”表示必填，“N”或空表示非必填。").optional(), "item_maximum": z.number().int().describe("缴费项最大可选数\r\t如果缴费项是多选模式，此参数生效，范围是1-9，如果为空，则最大项默认为9").optional(), "item_name": z.string().describe("缴费项名称").optional(), "item_price": z.string().describe("缴费项金额").optional(), "item_serial_number": z.number().int().describe("缴费项序号，如果缴费项是多选模式，此项为必填，建议从1开始的连续数字，\r\t用户支付成功后，通过passback_params参数带回已选择的缴费项。例如:orderNo=uoo234234&isvOrderNo=24werwe&items=1-2|2-1|3-5\r\t1-2|2-1|3-5 表示：缴费项序列号-缴费项数|缴费项序列号-缴费项数").optional() })).describe("缴费详情：输入json格式字符串。Json定义：key填写缴费项名称，value填写缴费项金额，金额保留2位小数（单位：元）").optional(),
  "charge_type": z.string().describe("缴费项模式：空或\"N\"，表示缴费项不可选，\r\t\"M\"表示缴费项为可选 ，支持单选和多选。").optional(),
  "child_name": z.string().describe("孩子名字").optional(),
  "class_in": z.string().describe("孩子所在班级").optional(),
  "end_enable": z.string().describe("截止日期是否生效，与gmt_end发布配合使用,N为gmt_end不生效，用户过期后仍可以缴费；Y为gmt_end生效，用户过期后，不能再缴费。").optional(),
  "ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "gmt_end": z.string().describe("缴费截止时间，格式\"yyyy-MM-dd HH:mm:ss\"，日期要大于当前时间。请注意，过期时间不宜设置过短。").optional(),
  "grade": z.string().describe("孩子所在年级").optional(),
  "out_trade_no": z.string().describe("ISV端的缴费账单编号").optional(),
  "partner_id": z.string().describe("Isv支付宝pid, 支付宝签约后，返回给ISV编号").optional(),
  "school_no": z.string().describe("学校编码，录入学校接口返回的参数").optional(),
  "school_pid": z.string().describe("学校支付宝pid,直付通填写smid").optional(),
  "student_code": z.string().describe("学生的学号，只支持字母和数字类型，一般以教育局学号为准，作为学生的唯一标识。此字段与student_identify、家长user_mobile至少选一个").optional(),
  "student_identify": z.string().describe("学生的身份证号，如果ISV有学生身份证号，则同步身份证号作为学生唯一标识。此字段与student_code、家长user_mobile至少选一个。\r\t大陆身份证必须是18位 ， 其它地区或国家的身份证开头需要加\"IC\"开头区分并且不超过18位，但查询账单的时候不要带\"IC\"").optional(),
  "users": z.array(z.object({ "user_change_mobile": z.string().describe("用户变更手机号，替换旧的手机号").optional(), "user_mobile": z.string().describe("孩子家长的手机号").optional(), "user_name": z.string().describe("张三").optional(), "user_relation": z.string().describe("孩子与家长的关系： 1、爸爸  2、妈妈  3、爷爷  4、奶奶  5、外公  6、外婆  7、家长").optional() })).describe("孩子的家长信息，最多一次输入10个家长，此字段做为识别家长的孩子用，与student_identify、student_code至少选一个").optional()
}
```

### alipay_eco_edu_kt_parent_query

**Environment variables**



**Input schema**

```ts
{
  "school_pid": z.string().describe("学校支付宝pid").optional(),
  "school_no": z.string().describe("学校编码，录入学校接口返回的school_no参数").optional(),
  "partner_id": z.string().describe("Isv的支付宝pid").optional(),
  "child_name": z.string().describe("孩子或学生姓名").optional(),
  "user_mobile": z.string().describe("用户手机号，发账单时填写users数组中的一个手机号。结果返回用户是否通过此手机号添加此学生的缴费账户。user_mobile、student_code 、student_identify 必须并且只能填一项。").optional(),
  "student_code": z.string().describe("学生的学号，一个学校的学号必须是唯一。结果返回用户是否通过此学号添加此学生的缴费账户。user_mobile、student_code 、student_identify 必须并且只能填一项。").optional(),
  "student_identify": z.string().describe("学生的身份证号，使用身份证规则验证。结果返回用户是否通过此身份证号添加此学生的缴费账户。user_mobile、student_code 、student_identify 必须并且只能填一项。").optional()
}
```

### alipay_eco_edu_kt_schoolinfo_modify

**Environment variables**



**Input schema**

```ts
{
  "bank_notify_url": z.string().describe("与浙江网商交易见证平台有交互ISV输入网商交易异步通知回调URL，教育缴费同步账单信息给网商，网商会回调此url，ISV即可获取网商相关的参数，根据教育缴费平台账单发送接口返回的 order_no和网商返回的outer_trade_no来对应账单信息。").optional(),
  "bank_partner_id": z.string().describe("与浙江网商交易见证平台有交互的ISV,由交易见证平台分配给合作方业务平台 签约唯一ID ，由网商分配给ISV的渠道参数").optional(),
  "bank_uid": z.string().describe("与浙江网商交易见证平台有交互的ISV在创建账户时的uid，也就是ISV平台上的用户ID（字母或数字）").optional(),
  "bankcard_no": z.string().describe("对应集团到卡模式的银行编号.学校与支付宝后台签约时，由学校提交给支付宝的编号").optional(),
  "batch_no": z.string().describe("集团收单模式：分账批次号，支付宝配置后提供的银行卡批次号").optional(),
  "card_alias_no": z.string().describe("学校开通直付通卡编号，smid与card_alias_no必须同时填写").optional(),
  "city_code": z.string().describe("城市的国家编码。参见 <a href=\"http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/\">国家统计局出版的行政区划代码</a>。").optional(),
  "city_name": z.string().describe("城市名称").optional(),
  "corporate_branch_pid": z.string().describe("集团收单模式：BD批量上传银行卡信息后，支付宝系统分配给ISV的每个卡分配的唯一标识").optional(),
  "district_code": z.string().describe("区县的国家编码。参见 <a href=\"http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/\">国家统计局出版的行政区划代码</a>。").optional(),
  "district_name": z.string().describe("区县名称").optional(),
  "isv_name": z.string().describe("ISV公司名称 ， 会在账单详情页面展示给用户").optional(),
  "isv_no": z.string().describe("注意：本参数于2017-08-03开始已经废弃，不再需要传递。\t由支付宝提供的给已经签约的isv的编码，业务上一般直接采用isv的支付宝PID。").optional(),
  "isv_notify_url": z.string().describe("此通知地址是为了保持教育缴费平台与ISV商户支付状态一致性。用户支付成功后，支付宝会根据本isv_notify_url(异步通知说明https://docs.open.alipay.com/203/105286/)，通过POST请求的形式将支付结果作为参数通知到商户系统，ISV商户可以根据返回的参数更新账单状态。").optional(),
  "isv_phone": z.string().describe("ISV的联系方式 ， 会在账单详情页面展示给用户，用户有问题可以直接联系此电话获取帮助").optional(),
  "isv_pid": z.string().describe("填写已经签约教育缴费的isv的支付宝PID").optional(),
  "province_code": z.string().describe("省份的国家编码，参见 <a href=\"http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/\">国家统计局出版的行政区划代码</a>。").optional(),
  "province_name": z.string().describe("省名称").optional(),
  "school_icon": z.string().describe("学校的校徽或logo，在学校展示页面作为学校的标识。该字段为图片的链接地址，只支持png或jpg图片格式，图片高度为108，宽度为108 ，不大于20k。\r\t注意：此链接要求公网可以访问，否则无法正常展示。").optional(),
  "school_icon_type": z.string().describe("如果填写了school_icon参数，则此字段不能为空。目前只支持png和jpg两种格式").optional(),
  "school_name": z.string().describe("学校名称").optional(),
  "school_pid": z.string().describe("学校签约支付宝教育缴费支付宝pid,如果是直付通学校，填写直付通返回的smid").optional(),
  "school_stdcode": z.string().describe("学校(机构)标识码（由教育部按照国家标准及编码规则编制，可以在教育局官网查询）").optional(),
  "school_type": z.string().describe("学校的类型。枚举值如下：\t*1：代表托儿所。\t*2：代表幼儿园。\t*3：代表小学。\t*4：代表初中。\t*5：代表高中。\t注意：如果学校兼有多种属性，可以连写，比如：45：代表兼有初中部高中部；34：代表兼有小学部初中部。").optional(),
  "smid": z.string().describe("学校开通直付通返回的二级商户id，smid与card_alias_no必须同时填写").optional(),
  "trans_in": z.string().describe("集团收单模式：分账批次号，支付宝配置后提供的银行卡批次号").optional(),
  "white_channel_code": z.string().describe("与浙江网商交易见证平台有交互的ISV,由网商分配给ISV的渠道参数").optional()
}
```

### alipay_eco_edu_kt_student_modify

**Environment variables**



**Input schema**

```ts
{
  "child_name": z.string().describe("修改后的学生姓名\r\t本接口调用时，child_name、student_code、student_identify、users这几个参数至少需要填写其中一个，不能同时为空").optional(),
  "isv_pid": z.string().describe("已经签约教育缴费的isv的支付宝PID").optional(),
  "school_no": z.string().describe("学校编号，调用alipay.eco.edu.kt.schoolinfo.modify接口录入学校信息时，接口返回的编号").optional(),
  "school_pid": z.string().describe("学校用来签约支付宝教育缴费的支付宝PID").optional(),
  "status": z.string().describe("区分ISV操作，“D”表示删除，“U”表示更新，区分大小写。\r\t如果为U，则学生名字，学号，身份证至少填写一项").optional(),
  "student_code": z.string().describe("修改后的学号\r\t本接口调用时，child_name、student_code、student_identify、users这几个参数至少需要填写其中一个，不能同时为空").optional(),
  "student_identify": z.string().describe("修改后的身份证号码\r\t本接口调用时，child_name、student_code、student_identify、users这几个参数至少需要填写其中一个，不能同时为空").optional(),
  "student_no": z.string().describe("支付宝-中小学-教育缴费生成的学生唯一编号").optional(),
  "users": z.array(z.object({ "user_change_mobile": z.string().describe("用户变更手机号，替换旧的手机号").optional(), "user_mobile": z.string().describe("孩子家长的手机号").optional(), "user_name": z.string().describe("张三").optional(), "user_relation": z.string().describe("孩子与家长的关系： 1、爸爸  2、妈妈  3、爷爷  4、奶奶  5、外公  6、外婆  7、家长").optional() })).describe("孩子的家长信息，最多一次输入20个家长。如果输入的家长信息不存在，则该改学生增加家长信息\r\t本接口调用时，child_name、student_code、student_identify、users这几个参数至少需要填写其中一个，不能同时为空").optional()
}
```

### alipay_eco_file_path_query

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "content_md_5": z.string().describe("先计算文件md5值，在对该md5值进行base64编码").optional(),
  "content_type": z.string().describe("目标文件的MIME类型").optional(),
  "file_name": z.string().describe("文件名称。\t注意：必须带上文件扩展名，不然会导致后续发起流程校验不通过。示例：合同.pdf。").optional(),
  "file_size": z.number().int().describe("文件大小，单位byte。最大允许上传30Mb").optional()
}
```

### alipay_eco_mycar_parking_chargeinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "business_hours": z.string().describe("营业时间").optional(),
  "car_daylight_advanced_price": z.string().describe("小车-白天 非首个计费单元价格").optional(),
  "car_daylight_base_price": z.string().describe("小车-白天 首个计费单元价格").optional(),
  "car_night_advanced_price": z.string().describe("小车-夜间 非首个计费单元价格").optional(),
  "car_night_base_price": z.string().describe("小车-夜间 首个计费单元价格").optional(),
  "car_onetime_price": z.string().describe("小车 计次收费价格\r\txx元 / 次，按次收费的车场填写").optional(),
  "daily_price_upperbound": z.string().describe("单日停车封顶价格：具体值或“不封顶”").optional(),
  "daylight_business_hours": z.string().describe("车场白天（收费）营业时间段").optional(),
  "free_period": z.string().describe("单次停车免费时长").optional(),
  "has_charging_pile": z.string().describe("是否有充电桩: -1 未知,0 否,1 是").optional(),
  "is_charge": z.string().describe("是否收费：-1 未知,0 否,1 是").optional(),
  "night_business_hours": z.string().describe("车场夜间（收费）营业时间段").optional(),
  "parking_id": z.string().describe("停车场ID").optional(),
  "parking_space_count": z.number().int().describe("总车位数").optional(),
  "remark": z.string().describe("复杂计费补充描述\r\t收费复杂无法格式化的车场填写，以文本形式表述").optional(),
  "truck_daylight_advanced_price": z.string().describe("大车-白天 非首个计费单元价格").optional(),
  "truck_daylight_base_price": z.string().describe("大车-白天 首个计费单元价格").optional(),
  "truck_night_advanced_price": z.string().describe("大车-夜间 非首个计费单元价格").optional(),
  "truck_night_base_price": z.string().describe("大车-夜间 首个计费单元价格").optional(),
  "truck_onetime_price": z.string().describe("大车 计次收费价格\r\txx元 / 次，按次收费的车场填写").optional()
}
```

### alipay_eco_mycar_parking_charginginfo_sync

**Environment variables**



**Input schema**

```ts
{
  "car_number": z.string().describe("车牌号").optional(),
  "isv_url": z.string().describe("智能助理当前的跳转链接").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 alipay.eco.mycar.parking.parkinglotinfo.create(录入停车场信息)接口获取。").optional(),
  "serial_no": z.string().describe("支付宝业务流水号，用于记录车辆从驶入到驶出的全流程。通过 alipay.eco.mycar.parking.enterinfo.sync\t(车辆驶入接口)接口获取。").optional()
}
```

### alipay_eco_mycar_parking_config_query

**Environment variables**



**Input schema**

```ts
{
  "interface_name": z.string().describe("接口名称。H5传入参数固定值：alipay.eco.mycar.parking.userpage.query；\t小程序传入参数固定值：alipay.eco.mycar.parking.isv.homepage；\t协议状态变更通知传入参数固定值： alipay.eco.mycar.parking.agreement.notify。").optional(),
  "interface_type": z.string().describe("接口类型。H5、小程序传入参数固定值：interface_page；\t通知接口传入参数固定值：interface_service。").optional()
}
```

### alipay_eco_mycar_parking_config_set

**Environment variables**



**Input schema**

```ts
{
  "account_no": z.string().describe("签约支付宝账号").optional(),
  "interface_info_list": z.array(z.object({ "interface_name": z.string().describe("H5传入参数固定值：alipay.eco.mycar.parking.userpage.query;\t\t小程序传入参数固定值：alipay.eco.mycar.parking.isv.homepage;\t\t协议状态变更通知传入参数固定值：\talipay.eco.mycar.parking.agreement.notify;").optional(), "interface_type": z.string().describe("H5、小程序传入参数固定值:interface_page；\t通知接口传入参数固定值:interface_service;").optional(), "interface_url": z.string().describe("H5 SPI接口的调用地址url，协议必须为https，对整个url字符串必须进行UrlEncode编码。编码为UTF-8;\t\t小程序SPI接口的调用地址ur格式：小程序|小程序缴费页面地址;\t\t协议状态变更通知SPI接口的调用地址url，同H5格式;").optional() })).describe("接口信息列表，停车业务需要配置的接口列表，该值为JSON数据格式的LIST对象，现阶段只需要配置一个页面接口即可 。每次请将所有的接口配置信息都传入，未传的接口信息将会被置空。").optional(),
  "merchant_logo": z.string().describe("商户在停车平台首页露出的LOGO。\t注意：\t*该图片为PNG格式，内容为BASE64的字符串，建议图片尺寸27px*27px，大小不要超过60K。\t*若为空则停车平台首页将不露出商户LOGO。").optional(),
  "merchant_name": z.string().describe("商户简称，由开发者提供").optional(),
  "merchant_service_phone": z.string().describe("商户客服电话").optional()
}
```

### alipay_eco_mycar_parking_enterinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "agreement_query": z.boolean().describe("是否启用车牌代扣状态查询功能，true为启用，false为停用").optional(),
  "car_color": z.string().describe("车牌颜色，车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "car_number": z.string().describe("车牌号").optional(),
  "entrance_id": z.string().describe("用于识别车辆进口，多出入口车场适用").optional(),
  "free_minutes": z.number().int().describe("当前停车场的入场免费时长分钟数").optional(),
  "in_time": z.string().describe("车辆入场的时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，入场时间不应晚于当前网络时间").optional(),
  "is_encrypt_car_number": z.boolean().describe("是否加密，默认为false").optional(),
  "isv_url": z.string().describe("智能助理当前的跳转链接。为ISV/<a href=\"https://opendocs.alipay.com/support/01rb18\">商家小程序scheme地址</a>或H5页面地址。").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口获取。").optional(),
  "space_number": z.string().describe("用于标识车辆停放车位编号，路侧适用").optional(),
  "store_id": z.string().describe("与parking_id对应的外部停车场编号，在门店中维护").optional()
}
```

### alipay_eco_mycar_parking_exitinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "actual_amount": z.string().describe("实际金额").optional(),
  "car_color": z.string().describe("车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "car_number": z.string().describe("车牌号").optional(),
  "discount_amount": z.string().describe("折扣金额").optional(),
  "exit_id": z.string().describe("用于识别车辆出口，多出入口车场适用").optional(),
  "is_encrypt_car_number": z.boolean().describe("是否加密，默认为false").optional(),
  "isv_url": z.string().describe("智能助理当前的跳转链接").optional(),
  "order_amount": z.string().describe("订单总金额").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "out_time": z.string().describe("车辆离场时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个ISV或商户范围内唯一。通过 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口获取。").optional(),
  "serial_no": z.string().describe("支付宝业务流水号，用于记录车辆从驶入到驶出的全流程。通过 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.enterinfo.sync\">alipay.eco.mycar.parking.enterinfo.sync</a>(车辆驶入接口)接口获取。").optional(),
  "space_number": z.string().describe("用于标识车辆停放车位编号，路侧适用").optional(),
  "store_id": z.string().describe("与parking_id对应的外部停车场编号，在门店中维护").optional()
}
```

### alipay_eco_mycar_parking_order_sync

**Environment variables**



**Input schema**

```ts
{
  "agent_pid": z.string().describe("该笔停车交易需要返佣的对象实体PID，可能是商户，可能是ISV；只做下沉，用于离线表层面对账。").optional(),
  "car_number": z.string().describe("车牌").optional(),
  "card_number": z.string().describe("如果是停车卡缴费，则填入停车卡卡号，否则为'*'").optional(),
  "in_duration": z.string().describe("停车时长（以分为单位）").optional(),
  "in_time": z.string().describe("入场时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制").optional(),
  "open_id": z.string().describe("应用用户ID，唯一标识").optional(),
  "order_no": z.string().describe("支付宝支付流水，系统唯一").optional(),
  "order_status": z.string().describe("设备商订单状态，枚举支持：\t* 0：成功。\t* 1：失败。").optional(),
  "order_time": z.string().describe("订单创建时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制").optional(),
  "out_order_no": z.string().describe("设备商订单号，由ISV系统生成").optional(),
  "out_parking_id": z.string().describe("ISV停车场ID，由ISV定义的停车场标识，同一个isv或商户范围内唯一。需与 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口传入值一致。").optional(),
  "out_time": z.string().describe("出场时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口获取。").optional(),
  "parking_name": z.string().describe("停车场名称，需与<a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口传入值一致。").optional(),
  "parking_record_id": z.string().describe("支付宝业务流水号，用于记录车辆从驶入到驶出的全流程。通过 alipay.eco.mycar.parking.enterinfo.sync(车辆驶入接口)接口获取。").optional(),
  "pay_money": z.string().describe("缴费金额，保留小数点后两位").optional(),
  "pay_scene": z.string().describe("支付场景：INPARKINGLOT_PAY：场内在线缴费；ENTRANCE_EXIT_PAY：出入口缴费、VEH_DEVICE_PAY：车机缴费；会根据场景判断是否发放能量，当前只有场内支付场景会发能量，需要能量发放请与服务接入支持同学提前沟通。").optional(),
  "pay_time": z.string().describe("缴费时间, 格式\"YYYYMM-DD HH:mm:ss\"，24小时制").optional(),
  "pay_type": z.string().describe("付款方式，枚举支持：\t*1：支付宝在线缴费。").optional(),
  "smid": z.string().describe("间连商户ID").optional(),
  "user_id": z.string().describe("停车缴费用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。\t注意：ISV需保证用户 id的正确性，以免导致用户在停车平台查询不到相关的订单信息。").optional()
}
```

### alipay_eco_mycar_parking_order_update

**Environment variables**



**Input schema**

```ts
{
  "open_id": z.string().describe("应用用户ID，唯一标识").optional(),
  "order_no": z.string().describe("支付宝支付流水号，系统唯一").optional(),
  "order_status": z.string().describe("用户停车订单状态，枚举支持：\t*0：成功。\t*1：失败。").optional(),
  "user_id": z.string().describe("停车缴费用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。\t注意：ISV需保证用户 id 的正确性，以免导致用户在停车平台查询不到相关的订单信息。").optional()
}
```

### alipay_eco_mycar_parking_overtimecharginginfo_sync

**Environment variables**



**Input schema**

```ts
{
  "car_number": z.string().describe("车牌号").optional(),
  "isv_url": z.string().describe("智能助理当前的跳转链接").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 alipay.eco.mycar.parking.parkinglotinfo.create(录入停车场信息)接口获取。").optional(),
  "serial_no": z.string().describe("支付宝业务流水号，用于记录车辆从驶入到驶出的全流程").optional()
}
```

### alipay_eco_mycar_parking_parkinglotbiz_transfer

**Environment variables**



**Input schema**

```ts
{
  "business_isv": z.array(z.object({ "business_appid": z.string().describe("业务归属appid").optional(), "business_payee_id": z.string().describe("业务收款pid，business_type为AGREEMENT_PAY时，此参数必传").optional(), "business_pid": z.string().describe("业务归属pid").optional(), "business_type": z.string().describe("业务类型ONLINE_PAY(在线缴费) 、AGREEMENT_PAY(无感停车)\tDEVICE_ONLINE_PAY(车机在线缴费)").optional() })).describe("车场业务归属关系列表").optional(),
  "parking_id": z.string().describe("车场创建返回的parking_id字段").optional()
}
```

### alipay_eco_mycar_parking_parkinglotinfo_create

**Environment variables**



**Input schema**

```ts
{
  "agent_id": z.string().describe("服务商的支付宝账号ID（2088开头的16位纯数字，<a href=\"https://opendocs.alipay.com/common/02ncut\">获取方式</a>），由服务商提供给ISV").optional(),
  "business_isv": z.array(z.object({ "business_appid": z.string().describe("业务归属appid").optional(), "business_payee_id": z.string().describe("业务收款pid，business_type为AGREEMENT_PAY时，此参数必传").optional(), "business_pid": z.string().describe("业务归属pid").optional(), "business_type": z.string().describe("业务类型ONLINE_PAY(在线缴费) 、AGREEMENT_PAY(无感停车)\tDEVICE_ONLINE_PAY(车机在线缴费)").optional() })).describe("车场业务归属列表").optional(),
  "charging_rule": z.array(z.object({ "charging_period": z.string().describe("停车收费时间段，输入24小时制的小时时间段格式: \t开始时间-结束时间,\t结束时间必须大于开始时间\t时间取值范围：0到24").optional(), "charging_strategy": z.string().describe("计费策略；\tUP：向上取整\tDOMN：向下取整").optional(), "charging_unit_fee": z.string().describe("跳费金额 单位元").optional(), "charging_unit_minutes": z.string().describe("跳费间隔分钟数").optional(), "enable_rollover_charge_period": z.boolean().describe("超时是否顺延到下个计费区间").optional(), "first_charging_span_minutes": z.string().describe("首段计费周期分钟数").optional(), "first_charging_unit_fee": z.string().describe("首段计费周期跳费金额 单位: 元").optional(), "first_charging_unit_minutes": z.string().describe("首段计费周期跳费间隔 单位分钟").optional(), "free_enter_minutes": z.string().describe("入场免费时间 单位:分钟").optional(), "free_exit_minutes": z.string().describe("离场免费时间 单位:分钟").optional(), "max_fee_per_day": z.string().describe("日封顶金额 单位: 元").optional() })).describe("停车场详细计费规则").optional(),
  "city_id": z.string().describe("该参数废弃").optional(),
  "contact_alipay": z.string().describe("该参数废弃").optional(),
  "contact_emali": z.string().describe("该参数废弃").optional(),
  "contact_mobile": z.string().describe("该参数废弃").optional(),
  "contact_name": z.string().describe("该参数废弃").optional(),
  "contact_tel": z.string().describe("该参数废弃").optional(),
  "contact_weixin": z.string().describe("该参数废弃").optional(),
  "equipment_name": z.string().describe("该参数废弃").optional(),
  "is_support_invoice": z.string().describe("是否支持电子发票。枚举支持：\t0：表示不支持。\t1：表示支持。").optional(),
  "isv_mobile": z.string().describe("ISV电话，传入original_isv_pid、original_isv_appid时，此处为服务商电话").optional(),
  "latitude": z.string().describe("纬度 单位:度").optional(),
  "longitude": z.string().describe("经度 单位:度").optional(),
  "mchnt_id": z.string().describe("收款方的支付宝账号ID（2088开头的16位纯数字，<a href=\"https://opendocs.alipay.com/common/02ncut\">获取方式</a>），由停车场收款的业主方提供给ISV，该字段暂用于机具和物料申领").optional(),
  "original_isv_appid": z.string().describe("ISV的APPID,服务商调用必传，由ISV提供给服务商").optional(),
  "original_isv_mobile": z.string().describe("ISV电话，此值与isv_mobile组合使用").optional(),
  "original_isv_name": z.string().describe("ISV的名称，服务商调用必传，由ISV提供给服务商").optional(),
  "original_isv_pid": z.string().describe("ISV的PID，服务商调用必传,由ISV提供给服务商").optional(),
  "out_parking_id": z.string().describe("ISV停车场ID，由ISV 自定义，同一个isv或商户范围内唯一").optional(),
  "parking_address": z.string().describe("停车场地址").optional(),
  "parking_end_time": z.string().describe("该参数废弃").optional(),
  "parking_fee_description": z.string().describe("收费说明").optional(),
  "parking_fee_description_img": z.string().describe("商户在停车平台露出的停车价格图片；注意：该图片为PNG格式内容为BASE64的字符串，大小不要超过1MB").optional(),
  "parking_lot_type": z.string().describe("停车场类型，1为居民小区、2为商圈停车场（购物中心商业广场商场等）、3为路侧停车、4为公园景点（景点乐园公园老街古镇等）、5为商务楼宇（酒店写字楼商务楼园区等）、6为其他、7为交通枢纽（机场火车站汽车站码头港口等）、8为市政设施（体育场博物图书馆医院学校等）").optional(),
  "parking_mobile": z.string().describe("停车场客服电话").optional(),
  "parking_name": z.string().describe("停车场名称，由ISV定义，尽量与高德地图上的一致。").optional(),
  "parking_number": z.string().describe("该参数废弃").optional(),
  "parking_poiid": z.string().describe("如何获取parking_poiid（高德地图唯一标标识）参考文档 <a href=\"https://opendocs.alipay.com/support/01rghx\">https://opendocs.alipay.com/support/01rghx</a> ；若无法成功获取高德POI时，也可选用经纬度的方式注册。").optional(),
  "parking_start_time": z.string().describe("该参数废弃").optional(),
  "parking_type": z.string().describe("该参数废弃").optional(),
  "pay_type": z.string().describe("支付方式。枚举支持：\t1：表示支付宝在线缴费。\t2：表示支付宝代扣缴费。\t3：表示当面付。\t4:  现金\t说明：如支持多种方式以 ',' 进行分隔。").optional(),
  "payment_mode": z.string().describe("该参数废弃").optional(),
  "serivce_url": z.string().describe("提供用户查看停车状态、缴费功能").optional(),
  "service_list": z.array(z.object({ "service_name": z.string().describe("在线缴费服务名称").optional(), "service_type": z.string().describe("停车场可提供的服务类型\t发票服务：INVOICE_SERVICE\t优惠套餐: DISCOUNT_PACKAGE\t预约停车: RESERVED_PARKING").optional(), "service_url": z.string().describe("商户提供服务对应的跳转链接").optional() })).describe("停车场服务信息列表").optional(),
  "shopingmall_id": z.string().describe("商圈id").optional(),
  "sum_space": z.string().describe("停车场车位数 单位:个").optional(),
  "support_after_pay": z.string().describe("是否支持先离后付。枚举支持：\tY：支持。\tN：不支持。\t说明：默认为空不支持，此参数适用于签约信用代扣的商户。").optional(),
  "time_out": z.string().describe("用户支付未离场的超时时间(以分钟为单位)").optional()
}
```

### alipay_eco_mycar_parking_parkinglotinfo_query

**Environment variables**



**Input schema**

```ts
{
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个ISV或商户范围内唯一。通过 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口获取。\t注意：parking_id和out_parking_id不能同时为空。").optional(),
  "out_parking_id": z.string().describe("ISV停车场ID，由ISV定义的停车场标识，同一个ISV或商户范围内唯一。需与 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口传入值一致。\t注意：parking_id和out_parking_id不能同时为空。").optional()
}
```

### alipay_eco_mycar_parking_parkinglotinfo_update

**Environment variables**



**Input schema**

```ts
{
  "agent_id": z.string().describe("服务商ID（2088开头的16位纯数字），由服务商提供给ISV").optional(),
  "business_isv": z.array(z.object({ "business_appid": z.string().describe("业务归属appid").optional(), "business_payee_id": z.string().describe("业务收款pid，business_type为AGREEMENT_PAY时，此参数必传").optional(), "business_pid": z.string().describe("业务归属pid").optional(), "business_type": z.string().describe("业务类型ONLINE_PAY(在线缴费) 、AGREEMENT_PAY(无感停车)\tDEVICE_ONLINE_PAY(车机在线缴费)").optional() })).describe("车场业务归属列表").optional(),
  "charging_rule": z.array(z.object({ "charging_period": z.string().describe("停车收费时间段，输入24小时制的小时时间段格式: \t开始时间-结束时间,\t结束时间必须大于开始时间\t时间取值范围：0到24").optional(), "charging_strategy": z.string().describe("计费策略；\tUP：向上取整\tDOMN：向下取整").optional(), "charging_unit_fee": z.string().describe("跳费金额 单位元").optional(), "charging_unit_minutes": z.string().describe("跳费间隔分钟数").optional(), "enable_rollover_charge_period": z.boolean().describe("超时是否顺延到下个计费区间").optional(), "first_charging_span_minutes": z.string().describe("首段计费周期分钟数").optional(), "first_charging_unit_fee": z.string().describe("首段计费周期跳费金额 单位: 元").optional(), "first_charging_unit_minutes": z.string().describe("首段计费周期跳费间隔 单位分钟").optional(), "free_enter_minutes": z.string().describe("入场免费时间 单位:分钟").optional(), "free_exit_minutes": z.string().describe("离场免费时间 单位:分钟").optional(), "max_fee_per_day": z.string().describe("日封顶金额 单位: 元").optional() })).describe("停车场详细计费规则详细说明").optional(),
  "city_id": z.string().describe("该参数废弃").optional(),
  "contact_alipay": z.string().describe("该参数废弃").optional(),
  "contact_email": z.string().describe("该参数废弃").optional(),
  "contact_mobile": z.string().describe("该参数废弃").optional(),
  "contact_name": z.string().describe("该参数废弃").optional(),
  "contact_tel": z.string().describe("该参数废弃").optional(),
  "contact_weixin": z.string().describe("该参数废弃").optional(),
  "equipment_name": z.string().describe("该参数废弃").optional(),
  "is_support_invoice": z.string().describe("是否支持电子发票。枚举支持： \t*0：表示不支持。 \t*1：表示支持。").optional(),
  "isv_mobile": z.string().describe("ISV电话，传入original_isv_pid、original_isv_appid时，此处为服务商电话").optional(),
  "latitude": z.string().describe("纬度，单位:度").optional(),
  "longitude": z.string().describe("经度 单位:度").optional(),
  "mchnt_id": z.string().describe("收款方ID（2088开头的16位纯数字），由停车场收款的业主方提供给ISV，该字段暂用于机具和物料申领，更新时不影响交易接口中的收款方值。").optional(),
  "original_isv_appid": z.string().describe("ISV的APPID,服务商调用必传，由ISV提供给服务商").optional(),
  "original_isv_mobile": z.string().describe("ISV电话，此值与isv_mobile组合使用").optional(),
  "original_isv_name": z.string().describe("ISV的名称，服务商调用必传，由ISV提供给服务商").optional(),
  "original_isv_pid": z.string().describe("ISV的PID，服务商调用必传,由ISV提供给服务商").optional(),
  "out_parking_id": z.string().describe("该参数废弃").optional(),
  "parking_address": z.string().describe("停车场地址").optional(),
  "parking_end_time": z.string().describe("该参数废弃").optional(),
  "parking_fee_description": z.string().describe("收费说明").optional(),
  "parking_fee_description_img": z.string().describe("商户在停车平台露出的停车价格图片；注意：该图片为PNG格式内容为BASE64的字符串，大小不要超过1MB").optional(),
  "parking_id": z.string().describe("支付宝返回停车场id，系统唯一").optional(),
  "parking_lot_type": z.string().describe("停车场类型，COMMUNITY为居民小区、BUSINESS_AREA为商圈停车场（购物中心商业广场商场等）、ROADSIDE为路侧停车、PARK_SCENIC为公园景点（景点乐园公园老街古镇等）、OFFICE_BUILDING为商务楼宇（酒店写字楼商务楼园区等）、OTHER为其他、TRANSPORTATION为交通枢纽（机场火车站汽车站码头港口等）、PUBLIC_FACILITIES为市政设施（体育场博物图书馆医院学校等）、TERRITORY独立园区（办公工业物流园区等）、BUSINESS_PLACE经营场所（4S店、门市餐饮等").optional(),
  "parking_mobile": z.string().describe("停车场客服电话").optional(),
  "parking_name": z.string().describe("停车场名称，由ISV定义，尽量与高德地图上的一致").optional(),
  "parking_number": z.string().describe("该参数废弃").optional(),
  "parking_poiid": z.string().describe("如何获取parking_poiid（高德地图唯一标标识）参考文档 <a href=\"https://opendocs.alipay.com/support/01rghx\">https://opendocs.alipay.com/support/01rghx</a> ；若无法成功获取高德POI时，也可选用经纬度的方式注册。").optional(),
  "parking_start_time": z.string().describe("该参数废弃").optional(),
  "parking_type": z.string().describe("该参数废弃").optional(),
  "pay_type": z.string().describe("支付方式。枚举支持：\t*1：表示支付宝在线缴费。 \t*2：表示支付宝代扣缴费。 \t*3：表示当面付。 \t*4：表示现金。 \t\t说明：如支持多种方式以 ',' 进行分隔。").optional(),
  "payment_mode": z.string().describe("该参数废弃").optional(),
  "serivce_url": z.string().describe("提供用户查看停车状态、缴费功能").optional(),
  "service_list": z.array(z.object({ "service_name": z.string().describe("在线缴费服务名称").optional(), "service_type": z.string().describe("停车场可提供的服务类型\t发票服务：INVOICE_SERVICE\t优惠套餐: DISCOUNT_PACKAGE\t预约停车: RESERVED_PARKING").optional(), "service_url": z.string().describe("商户提供服务对应的跳转链接").optional() })).describe("停车场场内服务信息").optional(),
  "shopingmall_id": z.string().describe("商圈id").optional(),
  "sum_space": z.string().describe("停车场车位数 ，单位:个").optional(),
  "support_after_pay": z.string().describe("是否支持先离后付。枚举支持： \t*Y：支持。 \t*N：不支持。 \t说明：默认为空不支持，此参数适用于签约信用代扣的商户。").optional(),
  "time_out": z.string().describe("用户支付未离场的超时时间(以分钟为单位)").optional()
}
```

### alipay_eco_mycar_parking_paymentinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "car_number": z.string().describe("车牌号").optional(),
  "isv_url": z.string().describe("停车消息透出后，消息详情的落地承接页链接，可配置ISV维度的统一值").optional(),
  "out_serial_no": z.string().describe("外部业务停车流水号(用于串通进场与出场信息)。如果\tout_serial_no与serial_no都传递，则一起校验。\t● serial_no与out_serial_no二选一必填。\t● 入参有serial_no和out_serial_no，则优先根据serial_no和out_serial_no一起匹配进出场事件\t● 入参仅有serial_no，则优先根据serial_no匹配进出场事件\t● 入参仅有out_serial_no，则根据out_serial_no匹配进出场事件").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 alipay.eco.mycar.parking.parkinglotinfo.create(录入停车场信息)接口获取。").optional(),
  "payment_free_minutes": z.number().int().describe("停车场内缴费后，允许出场的免费时长分钟数").optional(),
  "payment_time": z.string().describe("场内缴费时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，场内缴费不应晚于当前网络时间").optional(),
  "serial_no": z.string().describe("支付宝业务流水号(用于串通进场与出场信息)。可通过 alipay.eco.mycar.parking.enterinfo.sync\t(车辆驶入接口)接口获取。\t● serial_no与out_serial_no二选一必填。\t● 入参有serial_no和out_serial_no，则优先根据serial_no和out_serial_no一起匹配进出场事件\t● 入参仅有serial_no，则优先根据serial_no匹配进出场事件\t● 入参仅有out_serial_no，则根据out_serial_no匹配进出场事件").optional()
}
```

### alipay_eco_mycar_parking_spaceinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "free_charging_pile": z.number().int().describe("空闲充电桩车位数").optional(),
  "free_parking_space": z.number().int().describe("车场空闲可用的车位数").optional(),
  "parking_id": z.string().describe("停车场ID").optional(),
  "parking_space_status": z.string().describe("停车场实时状态: 0 拥堵,1 正常，2 空闲").optional()
}
```

### alipay_eco_mycar_parking_vehicle_query

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "car_id": z.string().describe("支付宝用户车辆ID，系统唯一。（该参数会在停车平台用户点击查询缴费，跳转到ISV停车缴费查询页面时，从请求中传递）").optional()
}
```

### alipay_eco_sign_flow_cancel

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "flow_id": z.string().describe("流程id，通过 <a href =\"https://opendocs.alipay.com/apis/api_50/alipay.eco.contract.signflows.create\">创建电子合同签署流程</a>(alipay.eco.contract.signflows.create)接口获取。").optional(),
  "revoke_reason": z.string().describe("撤销原因，默认为\"撤销\"。商家可自定义。").optional()
}
```

### alipay_eco_sign_flow_create

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "attachments": z.array(z.object({ "attachment_name": z.string().describe("流程附件名称").optional(), "file_id": z.string().describe("流程附件id").optional() })).describe("附件信息").optional(),
  "business_scene": z.string().describe("流程主题").optional(),
  "config_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "template_infos": z.array(z.object({ "fill_contents": z.array(z.object({ "struct_key": z.string().describe("模板组件自定义key").optional(), "value": z.string().describe("模板值,该值长度取决于配置模板时该字段的限制").optional() })).describe("模板填充项").optional(), "name": z.string().describe("文件名称").optional(), "signfields": z.object({ "auto_execute": z.string().describe("平台自动签").optional(), "signer": z.object({ "email": z.string().describe("邮箱").optional(), "id_number": z.string().describe("证件号").optional(), "id_type": z.string().describe("证件类型,详见个人证件类型说明（http://open.esign.cn/docs/xy/%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/%E9%99%84%E5%BD%95/%E4%B8%AA%E4%BA%BA%E8%AF%81%E4%BB%B6%E7%B1%BB%E5%9E%8B.html），默认CRED_PSN_CH_IDCARD (证件号不为空，则必填)").optional(), "mobile": z.string().describe("手机号").optional(), "name": z.string().describe("姓名").optional(), "user_id": z.string().describe("支付宝userId").optional() }).optional(), "struct_key": z.string().describe("模板组件id").optional() }).optional(), "template_id": z.string().describe("模板id").optional() })).describe("模板信息").optional()
}
```

### alipay_eco_sign_flow_finish

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "flow_id": z.string().describe("流程id").optional()
}
```

### alipay_eco_sign_flow_query

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "flow_id": z.string().describe("流程id，通过 <a href =\"https://opendocs.alipay.com/apis/api_50/alipay.eco.contract.signflows.create\">创建电子合同签署流程</a>(alipay.eco.contract.signflows.create)接口获取。").optional()
}
```

### alipay_eco_signflows_detail_query

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "flow_id": z.string().describe("流程id，通过 <a href =\"https://opendocs.alipay.com/apis/api_50/alipay.eco.contract.signflows.create\">创建电子合同签署流程</a>(alipay.eco.contract.signflows.create)接口获取。").optional()
}
```

### alipay_eco_signflows_url_query

**Environment variables**



**Input schema**

```ts
{
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "flow_id": z.string().describe("流程id，通过 <a href =\"https://opendocs.alipay.com/apis/api_50/alipay.eco.contract.signflows.create\">创建电子合同签署流程</a>(alipay.eco.contract.signflows.create)接口获取。").optional(),
  "third_party_user_id": z.string().describe("创建流程时指定个人唯一标识").optional(),
  "org_third_party_user_id": z.string().describe("创建流程时指定企业唯一标识").optional()
}
```

### alipay_fund_account_query

**Environment variables**



**Input schema**

```ts
{
  "merchant_user_id": z.string().describe("商户会员的唯一标识。如果传入的user_id为虚拟账户userId，此字段必传并比对一致性。").optional(),
  "alipay_user_id": z.string().describe("支付宝会员 id。").optional(),
  "alipay_open_id": z.string().describe("支付宝openId").optional(),
  "account_product_code": z.string().describe("开户产品码。如果查询托管子户余额，必传且必须传入与开户时传入的值一致。").optional(),
  "account_type": z.string().describe("查询的账号类型，查询余额账户值为ACCTRANS_ACCOUNT。必填。").optional(),
  "account_scene_code": z.string().describe("开户场景码，与开户产品码不可同时传递。").optional(),
  "ext_info": z.string().describe("JSON格式，传递业务扩展参数。").optional()
}
```

### alipay_fund_accountbook_create

**Environment variables**



**Input schema**

```ts
{
  "ext_info": z.string().describe("JSON格式，传递业务扩展参数").optional(),
  "merchant_user_id": z.string().describe("外部商户系统会员的唯一标识，自定义传入").optional(),
  "merchant_user_type": z.string().describe("外部商户用户类型:BUSINESS_EMPLOYEE").optional(),
  "scene_code": z.string().describe("资金记账本的业务场景").optional()
}
```

### alipay_fund_accountbook_notify_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("产品码。固定为SATF_FUND_BOOK").optional(),
  "biz_scene": z.string().describe("场景码。固定为DEFAULT").optional(),
  "account_book_id": z.string().describe("记账本ID").optional(),
  "agreement_no": z.string().describe("协议号。 若是基于协议的记账本，则agreement_no必传； 若是自创建的记账本，则agreement_no不传；").optional()
}
```

### alipay_fund_accountbook_notify_subscribe

**Environment variables**



**Input schema**

```ts
{
  "account_book_id": z.string().describe("记账本ID").optional(),
  "agreement_no": z.string().describe("协议号。 若是基于协议的记账本，则agreement_no必传； 若是自创建的记账本，则agreement_no不传；").optional(),
  "biz_scene": z.string().describe("场景码。固定为DEFAULT").optional(),
  "product_code": z.string().describe("产品码。固定为SATF_FUND_BOOK").optional()
}
```

### alipay_fund_accountbook_notify_unsubscribe

**Environment variables**



**Input schema**

```ts
{
  "account_book_id": z.string().describe("记账本ID").optional(),
  "agreement_no": z.string().describe("协议号。\t若是基于协议的记账本，则agreement_no必传；\t若是自创建的记账本，则agreement_no不传；").optional(),
  "biz_scene": z.string().describe("场景码。固定为DEFAULT").optional(),
  "product_code": z.string().describe("产品码。固定为SATF_FUND_BOOK").optional()
}
```

### alipay_fund_accountbook_query

**Environment variables**



**Input schema**

```ts
{
  "account_book_id": z.string().describe("记账账簿id").optional(),
  "merchant_user_id": z.string().describe("商户会员的唯一标识，如果传入account_book_id此字段必传并比对一致性。").optional(),
  "scene_code": z.string().describe("资金记账本的开通场景码").optional(),
  "ext_info": z.string().describe("JSON格式，传递业务扩展参数").optional()
}
```

### alipay_fund_agreement_quota_modify

**Environment variables**



**Input schema**

```ts
{
  "agreement_quota_modify_list": z.array(z.object({ "agreement_no": z.string().describe("授权协议号").optional(), "quota_details": z.array(z.object({ "quota_amount": z.string().describe("具体额度，单位：元。如金额为空，表示删除已有的额度设置，无已有额度设置则忽略。").optional(), "quota_dimension": z.string().describe("额度维度\tMONTH/DAY/SINGLE\t分别代表月、日、单次").optional(), "role": z.string().describe("PAYER/PAYEE\t额度管控的角色，收or付款方，目前只支持付款方").optional() })).describe("设置额度明细").optional() })).describe("协议额度设置信息").optional(),
  "biz_scene": z.string().describe("场景码，非固定值，使用的对应的资金场景码保持一致").optional(),
  "product_code": z.string().describe("额度产品码，非固定值，使用的对应的资金产品码保持一致").optional()
}
```

### alipay_fund_agreement_quota_query

**Environment variables**



**Input schema**

```ts
{
  "agreement_no_list": z.array(z.string()).describe("授权协议号").optional(),
  "biz_scene": z.string().describe("场景码，非固定值，使用的对应的资金场景码保持一致").optional(),
  "product_code": z.string().describe("额度产品码，非固定值，使用的对应的资金产品码保持一致").optional()
}
```

### alipay_fund_auth_operation_cancel

**Environment variables**



**Input schema**

```ts
{
  "auth_no": z.string().describe("支付宝授权资金订单号。\t与商户的授权资金订单号不能同时为空，二者都传入时，以支付宝资金授权订单号为准，该参数与支付宝授权资金操作流水号配对使用。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operation_id": z.string().describe("支付宝的授权资金操作流水号。\t与商户的授权资金操作流水号不能同时为空，二者都传入时，以支付宝的授权资金操作流水号为准，该参数与支付宝授权资金订单号配对使用。").optional(),
  "out_order_no": z.string().describe("商户的授权资金订单号。\t与支付宝的授权资金订单号不能同时为空，二者都传入时，以支付宝的授权资金订单号为准，该参数与商户的授权资金操作流水号配对使用。\t该值与资金冻结时 out_order_no一致。").optional(),
  "out_request_no": z.string().describe("商户的授权资金操作流水号。\t与支付宝的授权资金操作流水号不能同时为空，二者都传入时，以支付宝的授权资金操作流水号为准，该参数与商户的授权资金订单号配对使用。\t该值与资金冻结时out_request_no一致").optional(),
  "remark": z.string().describe("商户对本次撤销操作的附言描述。\t长度不超过100个字母或50个汉字。").optional()
}
```

### alipay_fund_auth_operation_detail_query

**Environment variables**



**Input schema**

```ts
{
  "auth_no": z.string().describe("支付宝授权资金订单号。\t与商户的授权资金订单号不能同时为空，二者都传入时，以支付宝资金授权订单号为准，该参数与支付宝授权资金操作流水号配对使用。").optional(),
  "operation_id": z.string().describe("支付宝的授权资金操作流水号。\t与商户的授权资金操作流水号不能同时为空，二者都传入时，以支付宝的授权资金操作流水号为准，该参数与支付宝授权资金订单号配对使用。").optional(),
  "operation_type": z.string().describe("需要查询的授权资金操作类型。\t未传入本参数时，如果仅查询出单笔明细则直接返回，如果查询出多笔则优先返回冻结明细、无冻结明细时返回解冻明细；\t当传入本参数时，则严格按照该操作类型返回对应明细").optional(),
  "out_order_no": z.string().describe("商户的授权资金订单号。\t与支付宝的授权资金订单号不能同时为空，二者都传入时，以支付宝的授权资金订单号为准，该参数与商户的授权资金操作流水号配对使用。\t该值与资金冻结时 out_order_no一致。").optional(),
  "out_request_no": z.string().describe("商户的授权资金操作流水号。\t与支付宝的授权资金操作流水号不能同时为空，二者都传入时，以支付宝的授权资金操作流水号为准，该参数与商户的授权资金订单号配对使用。\t查询冻结明细时，该值与发起冻结操作时传入的out_request_no一致；\t查询解冻明细时，该值与发起解冻操作时传入的out_request_no一致；\t查询支付明细时，该值与发起转支付操作时传入的out_trade_no一致。").optional(),
  "query_options": z.array(z.string()).describe("需要查询的额外信息").optional()
}
```

### alipay_fund_auth_order_app_freeze

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("需要冻结的金额，单位为：元（人民币），精确到小数点后两位。\t取值范围：[0.01,100000000.00]").optional(),
  "business_params": z.string().describe("业务参数，如风控参数outRiskInfo等。").optional(),
  "deposit_product_mode": z.string().describe("免押受理台模式，使用免押产品必传该字段。根据免押不同业务模式将开通受理台区分三种模式，商家可根据调用预授权冻结接口传入的参数决定该笔免押订单选择哪种受理台模式。不同受理台模式需要传入不同参数，其中：POSTPAY 表示后付金额已知，POSTPAY_UNCERTAIN 表示后付金额未知，DEPOSIT_ONLY 表示纯免押。\t具体规则参考文档：<a href=\"https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545\">https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545</a>").optional(),
  "disable_pay_channels": z.string().describe("无特殊需要请勿传入；商户可用该参数禁用支付渠道。\t传入后用户不可使用列表中的渠道进行支付，目前支持两种禁用渠道：信用卡快捷（OPTIMIZED_MOTO）、信用卡卡通（BIGAMOUNT_CREDIT_CARTOON）。与可用支付渠道不能同时传入").optional(),
  "enable_pay_channels": z.string().describe("无特殊需要请勿传入；商户可用该参数指定支付渠道。\t传入后用户仅能使用列表中的渠道进行支付，目前支持三种渠道，余额宝（MONEY_FUND）、花呗（PCREDIT_PAY）以及芝麻信用（CREDITZHIMA）。与禁用支付渠道不可同时传入").optional(),
  "extra_param": z.string().describe("业务扩展参数，用于特定业务信息的传递，json格式。\t1、category，信用类目，信用预授权场景必传，具体类目信息见<a href=\"https://opendocs.alipay.com/open/10719\">https://opendocs.alipay.com/open/10719</a>；\t2、serviceId，信用服务ID：信用预授权场景必传。需要商家在 <a href=\"https://b.alipay.com/page/zmgaia/pre-auth/index\">开放平台-芝麻免押-信用服务管理</a> 创建信用服务获取，详情可查看 <a href=\"https://opendocs.alipay.com/open/03w0a7?pathHash=51f6b4f2&ref=api#%E7%94%B3%E8%AF%B7%E4%BF%A1%E7%94%A8%E6%9C%8D%E5%8A%A1\">创建信用服务</a>。在创建过程中如果有其它疑问，可以咨询芝麻客服小二（0571-88158055 转 2）；\t3、creditExtInfo，信用参数，可选，如有需要请与芝麻约定后传入，信用服务说明见<a href=\"https://opendocs.alipay.com/open/11157/qlsxya\">https://opendocs.alipay.com/open/11157/qlsxya</a>").optional(),
  "identity_params": z.string().describe("无特殊需要请勿传入；买家实名信息。\t传入后支付宝会比对买家在支付宝端的实名信息。包含两个可选key：\t1.identity_hash，买家姓名拼接身份证号后，使用SHA256摘要方式与UTF8编码后的hash值，返回的十六进制字符串，例如 “张三4566498798498498498498”对应的identity_hash应为“acc2b92ffc5ed9b472faa19748f10045c30434132784f774b00216a56b8841c6”\t2.alipay_user_id，买家uid").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "order_title": z.string().describe("订单标题。\t业务订单的简单描述，如商品名称等").optional(),
  "out_order_no": z.string().describe("商户授权资金订单号。\t商家自定义需保证在商户端不重复。仅支持字母、数字、下划线。").optional(),
  "out_request_no": z.string().describe("商户本次资金操作的请求流水号，用于标示请求流水的唯一性。\t可与out_order_no相同，仅支持字母、数字、下划线。").optional(),
  "pay_timeout": z.string().describe("预授权订单相对超时时间。从商户客户端请求时间开始计算。\t预授权订单允许的最晚授权时间，逾期将关闭该笔订单。取值范围：1m～15d。m-分钟，h-小时，d-天。 该参数数值不接受小数点， 如 1.5h，可转换为90m。\t默认为15m。").optional(),
  "payee_logon_id": z.string().describe("收款账户的支付宝登录号（email或手机号）。\t如果传入则会校验该登录号对应的账号是否具备当前商户收款权限，如果商户希望用户能够使用花呗，则用户号(payee_user_id)和登录号(payee_logon_id)两者必须传入其一").optional(),
  "payee_user_id": z.string().describe("收款账户的支付宝用户号。\t以2088开头的16位纯数字，如果传入则会校验该账号是否具备当前商户收款权限，如果商户希望用户能够使用花呗，则用户号(payee_user_id)和登录号(payee_logon_id)两者必须传入其一").optional(),
  "post_payments": z.array(z.object({ "amount": z.string().describe("后付费金额，单位为：元（人民币），精确到小数点后两位。").optional(), "description": z.string().describe("计费说明").optional(), "name": z.string().describe("后付费项目名称").optional() })).describe("后付费项目， 有付费项目时需要传入该字段。不同受理台模式需要传入不同参数，后付费项目名称和计费说明需要通过校验规则，同时计费说明将展示在开通受理台上。当受理台模式（deposit_product_mode）传入POSTPAY 时，后付费项目名称（name）、金额（amount）必传，计费说明（description）选传；当传入 POSTPAY_UNCERTAIN 时，后付费项目名称（name）、计费说明（description）必传，金额（amount）不传。\t具体规则参考文档：\t<a href=\"https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545\">https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545</a>").optional(),
  "product_code": z.string().describe("销售产品码。\t支付宝预授权产品固定为 PRE_AUTH_ONLINE").optional(),
  "scene_code": z.string().describe("场景码，用于区分预授权不同业务场景。如：当面预授权通用场景（O2O_AUTH_COMMON_SCENE）、支付宝预授权通用场景（ONLINE_AUTH_COMMON_SCENE）、境外当面预授权通用场景（OVERSEAS_O2O_AUTH_COMMON_SCENE）、境外支付预授权通用场景（OVERSEAS_ONLINE_AUTH_COMMON_SCENE）等").optional(),
  "settle_currency": z.string().describe("商户指定的结算币种。支持澳元：AUD, 新西兰元：NZD, 台币：TWD, 美元：USD, 欧元：EUR, 英镑：GBP").optional(),
  "timeout_express": z.string().describe("预授权订单相对超时时间。从商户客户端请求时间开始计算。\t预授权订单允许的最晚授权时间，逾期将关闭该笔订单。取值范围：1m～15d。m-分钟，h-小时，d-天。 该参数数值不接受小数点， 如 1.5h，可转换为90m。\t默认为15m。").optional(),
  "trans_currency": z.string().describe("标价币种,  amount 对应的币种单位。支持澳元：AUD, 新西兰元：NZD, 台币：TWD, 美元：USD, 欧元：EUR, 英镑：GBP, 人民币：CNY").optional()
}
```

### alipay_fund_auth_order_freeze

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("需要冻结的金额，单位为：元（人民币），精确到小数点后两位。\t取值范围：[0.01,100000000.00]").optional(),
  "auth_code": z.string().describe("用户付款码。\t1.条码场景：25~30开头的长度为16~24位的数字，实际字符串长度以开发者获取的付款码长度为准；\t2.刷脸场景：\t1）fp开头的35位字符串；\t2）300-700字符的随机字符串；\t注：刷脸场景考虑到未来可能拓展更多格式，建议外围不必做规则拦截，由支付宝统一做有效性校验").optional(),
  "auth_code_type": z.string().describe("付款码类型。\t1.条码场景：bar_code\t2.刷脸场景：security_code").optional(),
  "business_params": z.string().describe("业务参数，如风控参数outRiskInfo等。").optional(),
  "deposit_product_mode": z.string().describe("免押受理台模式，使用免押产品必传该字段。根据免押不同业务模式将开通受理台区分三种模式，商家可根据调用预授权冻结接口传入的参数决定该笔免押订单选择哪种受理台模式。不同受理台模式需要传入不同参数，其中：POSTPAY 表示后付金额已知，POSTPAY_UNCERTAIN 表示后付金额未知，DEPOSIT_ONLY 表示纯免押。\t具体规则参考文档：<a href=\"https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545\">https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545</a>").optional(),
  "disable_pay_channels": z.string().describe("无特殊需要请勿传入；商户可用该参数禁用支付渠道。\t传入后用户不可使用列表中的渠道进行支付，目前支持两种禁用渠道：信用卡快捷（OPTIMIZED_MOTO）、信用卡卡通（BIGAMOUNT_CREDIT_CARTOON）。与可用支付渠道不能同时传入").optional(),
  "enable_pay_channels": z.string().describe("无特殊需要请勿传入；商户可用该参数指定支付渠道。\t传入后用户仅能使用列表中的渠道进行支付，目前支持三种渠道，余额宝（MONEY_FUND）、花呗（PCREDIT_PAY）以及芝麻信用（CREDITZHIMA）。与禁用支付渠道不可同时传入").optional(),
  "extra_param": z.string().describe("业务扩展参数，用于特定业务信息的传递，json格式。\t1、category，信用类目，信用预授权场景必传，具体类目信息见<a href=\"https://opendocs.alipay.com/open/10719\">https://opendocs.alipay.com/open/10719</a>；\t2、serviceId，信用服务ID：信用预授权场景必传。需要商家在 <a href=\"https://b.alipay.com/page/zmgaia/pre-auth/index\">开放平台-芝麻免押-信用服务管理</a> 创建信用服务获取，详情可查看 <a href=\"https://opendocs.alipay.com/open/03w0a7?pathHash=51f6b4f2&ref=api#%E7%94%B3%E8%AF%B7%E4%BF%A1%E7%94%A8%E6%9C%8D%E5%8A%A1\">创建信用服务</a>。在创建过程中如果有其它疑问，可以咨询芝麻客服小二（0571-88158055 转 2）；\t3、creditExtInfo，信用参数，可选，如有需要请与芝麻约定后传入，信用服务说明见<a href=\"https://opendocs.alipay.com/open/11157/qlsxya\">https://opendocs.alipay.com/open/11157/qlsxya</a>").optional(),
  "identity_params": z.string().describe("用户实名信息参数，包含：姓名+身份证号的hash值、指定用户的uid。商户传入用户实名信息参数，支付宝会对比用户在支付宝端的实名信息。\t姓名+身份证号hash值使用SHA256摘要方式与UTF8编码,返回十六进制的字符串。\tidentity_hash和alipay_user_id都是可选的，如果两个都传，则会先校验identity_hash，然后校验alipay_user_id。其中identity_hash的待加密字样如\"张三4566498798498498498498\"").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "order_title": z.string().describe("订单标题。\t业务订单的简单描述，如商品名称等").optional(),
  "out_order_no": z.string().describe("商户授权资金订单号。\t商家自定义需保证在商户端不重复。仅支持字母、数字、下划线。").optional(),
  "out_request_no": z.string().describe("商户本次资金操作的请求流水号，用于标示请求流水的唯一性。\t可与out_order_no相同，仅支持字母、数字、下划线。").optional(),
  "pay_timeout": z.string().describe("预授权订单相对超时时间，从商户请求时间开始计算。\t预授权订单允许的最晚授权时间，逾期将关闭该笔订单。取值范围：1m～15d。m-分钟，h-小时，d-天。 该参数数值不接受小数点， 如 1.5h，可转换为90m。\t默认为15m。").optional(),
  "payee_logon_id": z.string().describe("收款账户的支付宝登录号（email或手机号）。\t如果传入则会校验该登录号对应的账号是否具备当前商户收款权限，如果商户希望用户能够使用花呗，则用户号(payee_user_id)和登录号(payee_logon_id)两者必须传入其一").optional(),
  "payee_user_id": z.string().describe("收款账户的支付宝用户号。\t以2088开头的16位纯数字，如果传入则会校验该账号是否具备当前商户收款权限，如果商户希望用户能够使用花呗，则用户号(payee_user_id)和登录号(payee_logon_id)两者必须传入其一").optional(),
  "post_payments": z.array(z.object({ "amount": z.string().describe("后付费金额，单位为：元（人民币），精确到小数点后两位。").optional(), "description": z.string().describe("计费说明").optional(), "name": z.string().describe("后付费项目名称").optional() })).describe("后付费项目， 有付费项目时需要传入该字段。不同受理台模式需要传入不同参数，后付费项目名称和计费说明需要通过校验规则，同时计费说明将展示在开通受理台上。当受理台模式（deposit_product_mode）传入POSTPAY 时，后付费项目名称（name）、金额（amount）必传，计费说明（description）选传；当传入 POSTPAY_UNCERTAIN 时，后付费项目名称（name）、计费说明（description）必传，金额（amount）不传。\t具体规则参考文档：\t<a href=\"https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545\">https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545</a>").optional(),
  "product_code": z.string().describe("销售产品码。\t当面资金预授权固定为 PRE_AUTH").optional(),
  "scene_code": z.string().describe("场景码。\t刷脸场景下传入HOTEL，其他情况下无需传入").optional(),
  "settle_currency": z.string().describe("商户指定的结算币种。支持澳元：AUD, 新西兰元：NZD, 台币：TWD, 美元：USD, 欧元：EUR, 英镑：GBP").optional(),
  "terminal_params": z.string().describe("机具管控sdk加签参数，参数示例 \"terminal_params\":\"{\"terminalType\":\"IOT\",\"signature\":\"QIIAX8DqbFbNf2oe97FI1RSLAycC/tU4GVjer3bN8K4qLtAB\",\"apdidToken\":\"xPA3ptuArwYc3F6Va_pjVwv7Qx7Tg5TJdrA_Jb_moYte9AqGZgEAAA==\",\"hardToken\":\"\",\"time\":\"1539847253\",\"bizCode\":\"11000200040004000121\",\"bizTid\":\"010100F01i1XyacMgpOinHerfdBw1xA9dNDocctlnqhLD8lfODr1A7Q\",\"signedKeys\":\"authCode,totalAmount,apdidToken,hardToken,time,bizCode,bizTid\"}\"").optional(),
  "timeout_express": z.string().describe("预授权订单相对超时时间，从商户请求时间开始计算。\t预授权订单允许的最晚授权时间，逾期将关闭该笔订单。取值范围：1m～15d。m-分钟，h-小时，d-天。 该参数数值不接受小数点， 如 1.5h，可转换为90m。\t默认为15m。").optional(),
  "trans_currency": z.string().describe("标价币种,  amount 对应的币种单位。支持澳元：AUD, 新西兰元：NZD, 台币：TWD, 美元：USD, 欧元：EUR, 英镑：GBP").optional()
}
```

### alipay_fund_auth_order_unfreeze

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("本次操作解冻的金额，单位为：元（人民币），精确到小数点后两位。\t取值范围：[0.01,100000000.00]").optional(),
  "auth_no": z.string().describe("支付宝资金授权订单号。").optional(),
  "extra_param": z.string().describe("解冻扩展信息。map<string, string>的json格式，目前支持如下key：\tunfreezeBizInfo：由芝麻消费，当前支持value如下：\t\"bizComplete\":\"true\"——标识本次解冻用户已履约，true表示信用单履约完结").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "out_request_no": z.string().describe("解冻请求流水号。\t如果是针对同一笔授权单不同的解冻请求，如第一次解冻1元，第二次解冻2元，则解冻请求流水号必须不重复；\t如果是针对同一笔解冻请求的多次发起，则需要保证每次发起，解冻请求流水号和解冻金额都相同").optional(),
  "remark": z.string().describe("商户对本次解冻操作的附言描述").optional()
}
```

### alipay_fund_auth_order_voucher_create

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("需要冻结的金额，单位为：元（人民币），精确到小数点后两位。\t取值范围：[0.01,100000000.00]").optional(),
  "business_params": z.string().describe("业务参数，如风控参数outRiskInfo等。").optional(),
  "deposit_product_mode": z.string().describe("免押受理台模式，使用免押产品必传该字段。根据免押不同业务模式将开通受理台区分三种模式，商家可根据调用预授权冻结接口传入的参数决定该笔免押订单选择哪种受理台模式。不同受理台模式需要传入不同参数，其中：POSTPAY 表示后付金额已知，POSTPAY_UNCERTAIN 表示后付金额未知，DEPOSIT_ONLY 表示纯免押。\t具体规则参考文档：<a href=\"https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545\">https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545</a>").optional(),
  "disable_pay_channels": z.string().describe("无特殊需要请勿传入；商户可用该参数禁用支付渠道。\t传入后用户不可使用列表中的渠道进行支付，目前支持两种禁用渠道：信用卡快捷（OPTIMIZED_MOTO）、信用卡卡通（BIGAMOUNT_CREDIT_CARTOON）。与可用支付渠道不能同时传入").optional(),
  "enable_pay_channels": z.string().describe("无特殊需要请勿传入；商户可用该参数指定支付渠道。\t传入后用户仅能使用列表中的渠道进行支付，目前支持三种渠道，余额宝（MONEY_FUND）、花呗（PCREDIT_PAY）以及芝麻信用（CREDITZHIMA）。与禁用支付渠道不可同时传入").optional(),
  "extra_param": z.string().describe("业务扩展参数，用于特定业务信息的传递，json格式。 1、category，信用类目，信用预授权场景必传，具体类目信息见<a href=\"https://opendocs.alipay.com/open/10719\">https://opendocs.alipay.com/open/10719</a>； 2、serviceId，信用服务ID：信用预授权场景必传。需要商家在 <a href=\"https://b.alipay.com/page/zmgaia/pre-auth/index\">开放平台-芝麻免押-信用服务管理</a> 创建信用服务获取，详情可查看 <a href=\"https://opendocs.alipay.com/open/03w0a7?pathHash=51f6b4f2&ref=api#%E7%94%B3%E8%AF%B7%E4%BF%A1%E7%94%A8%E6%9C%8D%E5%8A%A1\">创建信用服务</a>。在创建过程中如果有其它疑问，可以咨询芝麻客服小二（0571-88158055 转 2）； 3、creditExtInfo，信用参数，可选，如有需要请与芝麻约定后传入，信用服务说明见<a href=\"https://opendocs.alipay.com/open/11157/qlsxya\">https://opendocs.alipay.com/open/11157/qlsxya</a>").optional(),
  "identity_params": z.string().describe("无特殊需要请勿传入；买家实名信息。\t传入后支付宝会比对买家在支付宝端的实名信息。包含两个可选key：\t1.identity_hash，买家姓名拼接身份证号后，使用SHA256摘要方式与UTF8编码后的hash值，返回的十六进制字符串，例如 “张三4566498798498498498498”对应的identity_hash应为“acc2b92ffc5ed9b472faa19748f10045c30434132784f774b00216a56b8841c6”\t2.alipay_open_id，买家支付宝openId\t3.alipay_user_id，买家支付宝uid").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "order_title": z.string().describe("订单标题。\t业务订单的简单描述，如商品名称等").optional(),
  "out_order_no": z.string().describe("商户授权资金订单号。\t商家自定义需保证在商户端不重复。仅支持字母、数字、下划线。").optional(),
  "out_request_no": z.string().describe("商户本次资金操作的请求流水号，用于标示请求流水的唯一性。\t可与out_order_no相同，仅支持字母、数字、下划线。").optional(),
  "pay_timeout": z.string().describe("预授权订单相对超时时间，从商户请求时间开始计算。\t预授权订单允许的最晚授权时间，逾期将关闭该笔订单。取值范围：1m～15d。m-分钟，h-小时，d-天。 该参数数值不接受小数点， 如 1.5h，可转换为90m。\t默认为15m。").optional(),
  "payee_logon_id": z.string().describe("收款账户的支付宝登录号（email或手机号）。\t如果传入则会校验该登录号对应的账号是否具备当前商户收款权限，如果商户希望用户能够使用花呗，则用户号(payee_user_id)和登录号(payee_logon_id)两者必须传入其一，二者无需同时传入").optional(),
  "payee_user_id": z.string().describe("收款账户的支付宝用户号。\t以2088开头的16位纯数字，如果传入则会校验该账号是否具备当前商户收款权限，如果商户希望用户能够使用花呗，则用户号(payee_user_id)和登录号(payee_logon_id)两者必须传入其一，二者无需同时传入").optional(),
  "post_payments": z.array(z.object({ "amount": z.string().describe("后付费金额，单位为：元（人民币），精确到小数点后两位。").optional(), "description": z.string().describe("计费说明").optional(), "name": z.string().describe("后付费项目名称").optional() })).describe("后付费项目，有付费项目时需要传入该字段。不同受理台模式需要传入不同参数，后付费项目名称和计费说明需要通过校验规则，同时计费说明将展示在开通受理台上。当受理台模式（deposit_product_mode）传入POSTPAY 时，后付费项目名称（name）、金额（amount）必传，计费说明（description）选传；当传入 POSTPAY_UNCERTAIN 时，后付费项目名称（name）、计费说明（description）必传，金额（amount）不传。\t具体规则参考文档：<a href=\"https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545\">https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545</a>").optional(),
  "product_code": z.string().describe("销售产品码。\t当面资金预授权固定为 PRE_AUTH").optional(),
  "settle_currency": z.string().describe("商户指定的结算币种。支持澳元：AUD, 新西兰元：NZD, 台币：TWD, 美元：USD, 欧元：EUR, 英镑：GBP").optional(),
  "timeout_express": z.string().describe("预授权订单相对超时时间，从商户请求时间开始计算。\t预授权订单允许的最晚授权时间，逾期将关闭该笔订单。取值范围：1m～15d。m-分钟，h-小时，d-天。 该参数数值不接受小数点， 如 1.5h，可转换为90m。\t默认为15m。").optional(),
  "trans_currency": z.string().describe("标价币种,  amount 对应的币种单位。支持澳元：AUD, 新西兰元：NZD, 台币：TWD, 美元：USD, 欧元：EUR, 英镑：GBP").optional()
}
```

### alipay_fund_enterprisepay_group_add

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业签约账户ID").optional(),
  "agreement_no": z.string().describe("平台和企业的三方授权协议号").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "fund_ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "name": z.string().describe("群组名称").optional(),
  "out_biz_no": z.string().describe("外部业务号，外部群组号").optional(),
  "product_code": z.string().describe("产品码，默认值\tENTERPRISE_PAY").optional()
}
```

### alipay_fund_enterprisepay_group_delete

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("产品码，默认值\tENTERPRISE_PAY").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "account_id": z.string().describe("企业签约账户ID").optional(),
  "agreement_no": z.string().describe("平台和企业的三方授权协议号").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional()
}
```

### alipay_fund_enterprisepay_group_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业签约账户ID").optional(),
  "agreement_no": z.string().describe("平台和企业的三方授权协议号").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "fund_ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "name": z.string().describe("群组名称").optional(),
  "operation_type_list": z.array(z.string()).describe("更新操作类型：多个时逗号分隔\tNAME-群组名称\tFUND-出资信息\t字段不传时，默认全量更新").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional(),
  "product_code": z.string().describe("产品码，默认值\tENTERPRISE_PAY").optional()
}
```

### alipay_fund_enterprisepay_group_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("产品码，默认值 ENTERPRISE_PAY").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "account_id": z.string().describe("企业签约账户ID").optional(),
  "agreement_no": z.string().describe("平台和企业的三方授权协议号").optional(),
  "out_biz_no": z.string().describe("外部业务号，外部群组号").optional()
}
```

### alipay_fund_enterprisepay_member_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业签约账户ID").optional(),
  "agreement_no": z.string().describe("平台和企业的三方授权协议号").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "fund_ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "group_id_list": z.array(z.string()).describe("员工当前关联的群组ID，支持多个").optional(),
  "open_id": z.string().describe("蚂蚁统一会员openId").optional(),
  "operation_type_list": z.array(z.string()).describe("更新操作类型：多个时逗号分隔\tGROUP-群组信息\tFUND-出资信息\t字段不传时，默认全量更新").optional(),
  "product_code": z.string().describe("产品码，默认值\tENTERPRISE_PAY").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID").optional()
}
```

### alipay_fund_enterprisepay_sign

**Environment variables**



**Input schema**

```ts
{
  "account_name": z.string().describe("企业简称，传空采用默认规则命名，使用公司名称").optional(),
  "appoint_sign_terminal": z.string().describe("指定签约终端类型\tPC-电脑浏览器\tMOBILE-手机端").optional(),
  "biz_scene": z.string().describe("业务场景，联系支付宝分配").optional(),
  "ext_params": z.string().describe("特殊场景下扩展字段").optional(),
  "identity": z.string().describe("开户账号：\t当identity_type是ALIPAY_USER_ID时填支付宝会员ID（2088开头）；\t当identity_type是ALIPAY_LOGON_ID 时填支付宝登录号；\t当identity_type是OUT_USER_ID时填外部平台的用户uid;\t当identity_type是ALIPAY_OPEN_ID时填用户openId").optional(),
  "identity_name": z.string().describe("开户用户名称，identity_type为ALIPAY_LOGON_ID时必填").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型：\t1、ALIPAY_USER_ID 支付宝的会员ID\t2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式\t3、OUT_USER_ID：外部用户uid").optional(),
  "out_biz_no": z.string().describe("商户侧单号（幂等字段）\t，补充说明：幂等逻辑（商户appid+out_biz_no），商户集成时需注意，如换号重复发起，则认为是一笔新的请求").optional(),
  "out_entity_id": z.string().describe("外部实体ID，一般表述为外部操作人操作某个外部实体。比如企业码2284号").optional(),
  "out_source": z.string().describe("ISV平台定义的共同账户开户来源").optional(),
  "product_code": z.string().describe("产品码").optional()
}
```

### alipay_fund_enterprisepay_unsign

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业账号").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "product_code": z.string().describe("销售产品码").optional()
}
```

### alipay_fund_jointaccount_bill_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("因公付产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "account_id": z.string().describe("账户ID").optional(),
  "page_num": z.string().describe("采用分页查询，本参数为空或0默认显示第一页。如果输入的值大于总页数，则支付宝返回最后一页数据").optional(),
  "page_size": z.string().describe("每页大小，不传的情况下默认20条，超过20条默认按20条查询；不足20条则按实际记录数返回").optional(),
  "user_id": z.string().describe("员工ID").optional(),
  "open_id": z.string().describe("员工的openId").optional(),
  "start_date": z.string().describe("起始日期").optional(),
  "end_date": z.string().describe("截止日期").optional(),
  "agreement_no": z.string().describe("授权协议号").optional()
}
```

### alipay_fund_jointaccount_detail_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("销售产品码").optional(),
  "biz_scene": z.string().describe("业务场景码").optional(),
  "account_id": z.string().describe("合花群ID（查询方式二：通过传入account_id+agreement_no查询）<br>\t补充说明：<br>\t-该字段可在签约接口alipay.fund.jointaccount.sign调用后，由账户变更结果通知接口alipay.fund.jointaccount.account.completed中返回。<br>\t-该字段可在签约接口调用后，由查询账户详情接口alipay.fund.jointaccount.detail.query中返回。").optional(),
  "agreement_no": z.string().describe("授权协议号（查询方式二：通过传入account_id+agreement_no查询）<br>\t补充说明：<br>\t-该字段可在签约接口alipay.fund.jointaccount.sign调用后，由账户变更结果通知接口alipay.fund.jointaccount.account.completed中返回。<br>\t-该字段可在签约接口调用后，由查询账户详情接口alipay.fund.jointaccount.detail.query中返回。").optional(),
  "out_biz_no": z.string().describe("商户侧单号（查询方式一：通过传入\tout_biz_no查询）<br>\t补充说明：<br>\t-该字段与签约接口alipay.fund.jointaccount.sign请求参数中传入值保持一致").optional(),
  "channel": z.string().describe("业务渠道</br>\t补充说明：</br>\t需要商户侧必传，支付宝侧不做强校验").optional()
}
```

### alipay_fund_jointaccount_list_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "operate_role": z.string().describe("角色：创建方(CREATOR)、参与方(PARTICIPANT)").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "identity": z.string().describe("员工账号：\t\tidentity_type是ALIPAY_USER_ID填支付宝会员ID（2088开头）；\t\t是ALIPAY_LOGON_ID 填支付宝登录号").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型： 1、ALIPAY_USER_ID 支付宝的会员ID 2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式").optional()
}
```

### alipay_fund_jointaccount_member_batchquery

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("三方授权协议号").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "identity": z.string().describe("企业账号：identity_type是ALIPAY_USER_ID填支付宝会员ID（2088开头）；\t是ALIPAY_LOGON_ID 填支付宝登录号").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型： 1、ALIPAY_USER_ID 支付宝的会员ID 2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式").optional(),
  "last_open_id": z.string().describe("按游标查询，传入上次查询最后一个用户的openId").optional(),
  "last_user_id": z.string().describe("按游标查询，传入上次查询最后一个用户ID，适用于逐页查询。优先级大于page_num").optional(),
  "page_num": z.string().describe("采用分页查询，本参数为空或0默认显示第一页。如果输入的值大于总页数，则支付宝返回最后一页数据。").optional(),
  "page_size": z.string().describe("每页大小，不传的情况下默认20条，上限100；不足20条则按实际记录数返回").optional(),
  "product_code": z.string().describe("销售产品码").optional()
}
```

### alipay_fund_jointaccount_member_bind

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("账本ID").optional(),
  "account_quota": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "agreement_sign_info": z.string().describe("关联代扣协议签约串").optional(),
  "biz_scene": z.string().describe("业务场景，联系支付宝分配").optional(),
  "business_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "identity": z.string().describe("该字段为被邀请方账号ID：\t当identity_type为ALIPAY_USER_ID时，需要填支付宝ID；当identity_type为ALIPAY_LOGON_ID时，需要填支付宝登录号；当identity_type为ALIPAY_OPEN_ID时，需要填支付宝openId").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型：\t1、ALIPAY_USER_ID 支付宝的会员ID \t2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式\t3、ALIPAY_OPEN_ID：支付宝openId").optional(),
  "identity_verified_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "name": z.string().describe("成员姓名，账号类型为ALIPAY_LOGON_ID时必填").optional(),
  "product_code": z.string().describe("产品码").optional()
}
```

### alipay_fund_jointaccount_member_consult

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("协议号").optional(),
  "business_params": z.string().describe("扩展参数，如需使用请联系支付宝开放同学").optional(),
  "open_id_list": z.array(z.string()).describe("要检查的员工openId").optional(),
  "user_id_list": z.array(z.string()).describe("要检查的员工ID").optional()
}
```

### alipay_fund_jointaccount_member_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "account_id": z.string().describe("账户ID").optional(),
  "page_num": z.string().describe("采用分页查询，本参数为空或0默认显示第一页。如果输入的值大于总页数，则支付宝返回最后一页数据。").optional(),
  "page_size": z.string().describe("每页大小，不传的情况下默认20条，超过20条默认按20条查询；不足20条则按实际记录数返回").optional(),
  "user_id": z.string().describe("员工id").optional(),
  "open_id": z.string().describe("员工的openId").optional(),
  "agreement_no": z.string().describe("授权协议号").optional()
}
```

### alipay_fund_jointaccount_member_unbind

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("账本id").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "biz_scene": z.string().describe("场景码").optional(),
  "identity": z.string().describe("成员账号：\tidentity_type是ALIPAY_USER_ID填支付宝会员ID（2088开头）；\t是ALIPAY_LOGON_ID 填支付宝登录号").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型： 1、ALIPAY_USER_ID 支付宝的会员ID 2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式").optional(),
  "name": z.string().describe("姓名，账号类型为ALIPAY_LOGON_ID时必填").optional(),
  "product_code": z.string().describe("产品码").optional(),
  "status": z.string().describe("成员当前状态：\t邀请中（PROCESSING）、正常（NORMAL）").optional()
}
```

### alipay_fund_jointaccount_memberrule_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("账户ID").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "member_list": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "product_code": z.string().describe("产品码").optional()
}
```

### alipay_fund_jointaccount_quota_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "account_id": z.string().describe("账户ID").optional(),
  "member_id": z.string().describe("员工ID").optional(),
  "member_open_id": z.string().describe("员工的openid").optional(),
  "operate_role": z.string().describe("角色：创建方(CREATOR)、参与方(PARTICIPANT)").optional(),
  "agreement_no": z.string().describe("授权协议号").optional()
}
```

### alipay_fund_jointaccount_rule_modify

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.string().describe("账本ID").optional(),
  "account_name": z.string().describe("账本名称").optional(),
  "account_quota": z.array(z.object({ "custom_begin_date": z.string().describe("自定义周期起始日期，精确到分钟，yyyy-MM-dd HH:mm").optional(), "custom_end_date": z.string().describe("自定义周期结束日期，精确到分钟，yyyy-MM-dd HH:mm").optional(), "quota_dimension": z.string().describe("额度维度\t单笔上限：ONCE\t日：DAY\t月：MONTH\t季度：QUARTER\t年：YEAR\t终身：LIFETIME\t一次性使用额度：ONLYONE").optional(), "quota_total": z.string().describe("协议额度").optional() })).describe("账户额度").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "authorized_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_scene": z.string().describe("场景码").optional(),
  "product_code": z.string().describe("产品码").optional()
}
```

### alipay_fund_jointaccount_sign_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("产品码，默认值\tENTERPRISE_PAY").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "out_biz_no": z.string().describe("外部业务号，查询对应账户状态，优先级高于account_id").optional(),
  "account_id": z.string().describe("企业签约账户ID,用于外部商户已获取企业签约ID，查询账户状态").optional()
}
```

### alipay_fund_jointaccount_trade_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("销售产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "member_id": z.string().describe("成员ID，消费发起人").optional(),
  "member_open_id": z.string().describe("消费发起人的openId").optional(),
  "account_id": z.string().describe("企业账户ID").optional(),
  "agreement_no": z.string().describe("三方授权协议号").optional(),
  "trade_no": z.string().describe("支付宝交易订单号").optional(),
  "platform_order_id": z.string().describe("外部平台订单号。使用该参数查询时，返回结果见trade_info_list").optional()
}
```

### alipay_fund_trans_common_query

**Environment variables**



**Input schema**

```ts
{
  "product_code": z.string().describe("销售产品码，商家和支付宝签约的产品码，如果传递了out_biz_no则该字段为必传。可传值如下：\tSTD_RED_PACKET：现金红包\tTRANS_ACCOUNT_NO_PWD：单笔无密转账到支付宝账户\tTRANS_BANKCARD_NO_PWD：单笔无密转账到银行卡").optional(),
  "biz_scene": z.string().describe("描述特定的业务场景，如果传递了out_biz_no则该字段为必传。可取的业务场景如下：\r\tPERSONAL_PAY：C2C现金红包-发红包；\r\tPERSONAL_COLLECTION：C2C现金红包-领红包；\r\tREFUND：C2C现金红包-红包退回；\r\tDIRECT_TRANSFER：B2C现金红包、单笔无密转账").optional(),
  "out_biz_no": z.string().describe("商户转账唯一订单号，发起转账来源方定义的转账单据ID。 \t本参数和order_id（支付宝转账单据号）、pay_fund_order_id（支付宝支付资金流水号）三者不能同时为空。\t当三者同时传入时，将用pay_fund_order_id（支付宝支付资金流水号）进行查询，忽略其余两者；\t当本参数和支付宝转账单据号同时提供时，将用支付宝转账单据号进行查询，忽略本参数。").optional(),
  "order_id": z.string().describe("支付宝转账单据号。 本参数和out_biz_no（商户转账唯一订单号）、pay_fund_order_id（支付宝支付资金流水号）三者不能同时为空。 \t当三者同时传入时，将用pay_fund_order_id（支付宝支付资金流水号）进行查询，忽略其余两者；\t当本参数和pay_fund_order_id（支付宝支付资金流水号）同时提供时，将用支付宝支付资金流水号进行查询，忽略本参数； \t当本参数和out_biz_no（商户转账唯一订单号）同时提供时，将用本参数进行查询，忽略商户转账唯一订单号。").optional(),
  "pay_fund_order_id": z.string().describe("支付宝支付资金流水号。本参数和支付宝转账单据号、商户转账唯一订单号三者不能同时为空。 \t当本参数和out_biz_no（商户转账唯一订单号）、order_id（支付宝转账单据号）同时提供时，将用本参数进行查询，忽略其余两者；\t当本参数和order_id（支付宝转账单据号）同时提供时，将用本参数进行查询，忽略支付宝转账单据号； \t当本参数和out_biz_no（商户转账唯一订单号）同时提供时，将用本参数进行查询，忽略商户转账唯一订单号。").optional()
}
```

### alipay_fund_trans_order_query

**Environment variables**



**Input schema**

```ts
{
  "out_biz_no": z.string().describe("商户转账唯一订单号：发起转账来源方定义的转账单据ID。\r\t和支付宝转账单据号不能同时为空。当和支付宝转账单据号同时提供时，将用支付宝转账单据号进行查询，忽略本参数。").optional(),
  "order_id": z.string().describe("支付宝转账单据号：和商户转账唯一订单号不能同时为空。当和商户转账唯一订单号同时提供时，将用本参数进行查询，忽略商户转账唯一订单号。").optional()
}
```

### alipay_fund_trans_pay

**Environment variables**



**Input schema**

```ts
{
  "auth_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_scene": z.string().describe("业务场景，比如群收款、红包等").optional(),
  "business_params": z.string().describe("JSON格式，传递业务扩展参数，使用前请与支付宝工程师联系！").optional(),
  "order_title": z.string().describe("订单的标题，用于在收银台和消费记录展示").optional(),
  "out_biz_no": z.string().describe("商户端的唯一订单号，对于同一笔转账请求，商户需保证该订单号唯一。").optional(),
  "passback_params": z.string().describe("回传参数，如果请求时传递了该参数，则异步通知商户时会回传该参数。").optional(),
  "payee_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "payer_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "product_code": z.string().describe("销售产品码，商家和支付宝签约的产品码").optional(),
  "refund_time_expire": z.string().describe("退款超时时间，格式yyyy-MM-dd HH:mm。到指定时间后，系统会自动触发退款，并原路退回到付款账户。如果指定了退款时间，必须早于销售方案里设置的最晚退款时间。").optional(),
  "remark": z.string().describe("备注").optional(),
  "time_expire": z.string().describe("绝对超时时间，格式为yyyy-MM-dd HH:mm").optional(),
  "trans_amount": z.string().describe("订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]").optional()
}
```

### alipay_fund_trans_payee_bind_query

**Environment variables**



**Input schema**

```ts
{
  "identity": z.string().describe("证件号").optional(),
  "identity_type": z.string().describe("证件类型,暂仅支持 IDENTITY_CARD （身份证）").optional()
}
```

### alipay_fund_trans_refund

**Environment variables**



**Input schema**

```ts
{
  "biz_scene": z.string().describe("场景码").optional(),
  "business_params": z.string().describe("JSON格式，传递业务扩展参数，使用前请与支付宝工程师联系！").optional(),
  "order_id": z.string().describe("发红包时支付宝返回的支付宝订单号order_id。").optional(),
  "out_request_no": z.string().describe("标识一次资金退回请求，一笔资金退回失败后重新提交，要采用原来的资金退回单号。总退款金额不能超过用户实际支付金额。").optional(),
  "passback_params": z.string().describe("公用回传参数，如果请求时传递了该参数，则异步通知商户时会回传该参数。").optional(),
  "product_code": z.string().describe("产品码").optional(),
  "refund_amount": z.string().describe("需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数").optional(),
  "remark": z.string().describe("资金退回备注").optional()
}
```

### alipay_fund_trans_toaccount_transfer

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("转账金额，单位：元。\r\t只支持2位小数，小数点前最大支持13位，金额必须大于等于0.1元。 \r\t最大转账金额以实际签约的限额为准。").optional(),
  "ext_param": z.string().describe("扩展参数，json字符串格式，目前仅支持的key=order_title，表示收款方的转账账单标题，value可以根据自己的业务定制。").optional(),
  "out_biz_no": z.string().describe("商户转账唯一订单号。发起转账来源方定义的转账单据ID，用于将转账回执通知给来源方。\r\t不同来源方给出的ID可以重复，同一个来源方必须保证其ID的唯一性。\r\t只支持半角英文、数字，及“-”、“_”。").optional(),
  "payee_account": z.string().describe("收款方账户。与payee_type配合使用。付款方和收款方不能是同一个账户。").optional(),
  "payee_real_name": z.string().describe("收款方真实姓名（最长支持100个英文/50个汉字）。\r\t如果本参数不为空，则会校验该账户在支付宝登记的实名是否与收款方真实姓名一致。").optional(),
  "payee_type": z.string().describe("收款方账户类型。可取值：\t1、ALIPAY_USERID：支付宝账号对应的支付宝唯一用户号。以2088开头的16位纯数字组成。\t2、ALIPAY_LOGONID：支付宝登录号，支持邮箱和手机号格式。\t2、ALIPAY_OPENID：支付宝openid").optional(),
  "payer_real_name": z.string().describe("付款方真实姓名（最长支持100个英文/50个汉字）。\r\t如果本参数不为空，则会校验该账户在支付宝登记的实名是否与付款方真实姓名一致。").optional(),
  "payer_show_name": z.string().describe("付款方姓名（最长支持100个英文/50个汉字）。显示在收款方的账单详情页。如果该字段不传，则默认显示付款方的支付宝认证姓名或单位名称。").optional(),
  "remark": z.string().describe("转账备注（支持200个英文/100个汉字）。\r\t当付款方为企业账户，且转账金额达到（大于等于）50000元，remark不能为空。收款方可见，会展示在收款用户的收支详情中。").optional()
}
```

### alipay_fund_trans_uni_transfer

**Environment variables**



**Input schema**

```ts
{
  "biz_scene": z.string().describe("描述特定的业务场景，可传的参数如下：\tDIRECT_TRANSFER：单笔无密转账到支付宝，B2C现金红包;\tPERSONAL_COLLECTION：C2C现金红包-领红包").optional(),
  "business_params": z.string().describe("转账业务请求的扩展参数，支持传入的扩展参数如下：\tsub_biz_scene 子业务场景，红包业务必传，C2C现金红包、B2C现金红包均需传入，取值REDPACKET").optional(),
  "mutiple_currency_detail": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "order_title": z.string().describe("转账业务的标题，用于在支付宝用户的账单里显示").optional(),
  "original_order_id": z.string().describe("原支付宝业务单号。").optional(),
  "out_biz_no": z.string().describe("商家侧唯一订单号，由商家自定义。对于不同转账请求，商家需保证该订单号在自身系统唯一。").optional(),
  "passback_params": z.string().describe("公用回传参数，如果请求时传递了该参数，则异步通知商户时会回传该参数。").optional(),
  "payee_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "payer_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "product_code": z.string().describe("业务产品码，\t单笔无密转账到支付宝账户固定为:\tTRANS_ACCOUNT_NO_PWD；\t收发现金红包固定为:\tSTD_RED_PACKET；").optional(),
  "remark": z.string().describe("业务备注").optional(),
  "sign_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "trans_amount": z.string().describe("订单总金额，单位为元，精确到小数点后两位，STD_RED_PACKET产品取值范围[0.01,100000000]；\tTRANS_ACCOUNT_NO_PWD产品取值范围[0.1,100000000]").optional()
}
```

### alipay_fund_usertrade_batchquery

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "biz_scene": z.string().describe("查询交易数据场景码").optional(),
  "end_time": z.string().describe("拉取的结算时间，格式yyyy-MM-dd HH:mm:ss，拉取逻辑包含该时刻。").optional(),
  "page_index": z.string().describe("分页页码，从1开始，必须大于0").optional(),
  "page_size": z.string().describe("分页大小，必须大于0，最大设置100").optional(),
  "product_code": z.string().describe("查询交易数据产品码").optional(),
  "start_time": z.string().describe("拉取的起始时间，格式yyyy-MM-dd HH:mm:ss，时间必须早于拉取的截止时间，并且，接口仅限查询用户30天内交易数据，拉取逻辑包含该时刻。").optional()
}
```

### alipay_iservice_ccm_agent_create

**Environment variables**



**Input schema**

```ts
{
  "answering_mode": z.string().describe("热线接入方式，取值0，1，2").optional(),
  "ccs_instance_ids": z.array(z.string()).describe("部门id列表").optional(),
  "chat_configs": z.array(z.object({ "ccs_instance_id": z.string().describe("数据权限id(租户实例id)").optional(), "extended_group_ids": z.array(z.string()).describe("在线扩展技能组id列表").optional(), "group_id": z.string().describe("在线技能组id").optional(), "level_id": z.string().describe("在线服务等级").optional() })).describe("在线技能组设置，技能组部门间隔离，此设置应与ccs_instance_ids对应").optional(),
  "creator_id": z.string().describe("操作人客服id").optional(),
  "email": z.string().describe("客服邮箱").optional(),
  "external_user_id": z.string().describe("客服账号id，当user_channel=ALIPAY时，external_user_id为支付宝账号id").optional(),
  "hotline_configs": z.array(z.object({ "ccs_instance_id": z.string().describe("数据权限id(租户实例id)").optional(), "group_ids": z.array(z.string()).describe("热线技能组id").optional() })).describe("热线技能组设置，技能组部门间隔离，此设置应与ccs_instance_ids对应").optional(),
  "job_number": z.string().describe("客服工号，新增后不可变更。4位数字，不可重复").optional(),
  "mobile": z.string().describe("客服手机号").optional(),
  "nick_name": z.string().describe("客服昵称").optional(),
  "real_name": z.string().describe("客服姓名").optional(),
  "role_ids": z.array(z.object({ "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(), "role_id": z.string().describe("角色ID").optional() })).describe("角色id列表").optional(),
  "user_channel": z.string().describe("客服账号渠道 ALIPAY:支付宝账号").optional()
}
```

### alipay_iservice_ccm_agent_delete

**Environment variables**



**Input schema**

```ts
{
  "id": z.string().describe("客服id").optional()
}
```

### alipay_iservice_ccm_agent_get

**Environment variables**



**Input schema**

```ts
{
  "id": z.string().describe("客服id").optional(),
  "job_number": z.string().describe("客服工号").optional(),
  "user_channel": z.string().describe("客服账号渠道, ALIPAY:支付宝账号\tuser_channel和external_user_id必须配对使用").optional(),
  "external_user_id": z.string().describe("客服账号id，当user_channel=ALIPAY时，此id为支付宝2088id\texternal_user_id和user_channel必须配对使用").optional()
}
```

### alipay_iservice_ccm_agent_modify

**Environment variables**



**Input schema**

```ts
{
  "answering_mode": z.string().describe("热线接入方式，取值0，1，2").optional(),
  "ccs_instance_ids": z.array(z.string()).describe("部门id列表").optional(),
  "chat_configs": z.array(z.object({ "ccs_instance_id": z.string().describe("数据权限id(租户实例id)").optional(), "extended_group_ids": z.array(z.string()).describe("在线扩展技能组id列表").optional(), "group_id": z.string().describe("在线技能组id").optional(), "level_id": z.string().describe("在线服务等级").optional() })).describe("在线技能组设置，技能组部门间隔离，此设置应与ccs_instance_ids对应").optional(),
  "email": z.string().describe("客服邮箱").optional(),
  "hotline_configs": z.array(z.object({ "ccs_instance_id": z.string().describe("数据权限id(租户实例id)").optional(), "group_ids": z.array(z.string()).describe("热线技能组id").optional() })).describe("热线技能组设置，技能组部门间隔离，此设置应与ccs_instance_ids对应").optional(),
  "id": z.string().describe("客服id").optional(),
  "mobile": z.string().describe("客服手机号").optional(),
  "nick_name": z.string().describe("客服昵称").optional(),
  "real_name": z.string().describe("客服姓名").optional(),
  "role_ids": z.array(z.object({ "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(), "role_id": z.string().describe("角色ID").optional() })).describe("客服角色id列表").optional(),
  "updater_id": z.string().describe("操作人客服id").optional()
}
```

### alipay_iservice_ccm_agent_query

**Environment variables**



**Input schema**

```ts
{
  "answering_mode": z.string().describe("热线接入方式").optional(),
  "ccs_instance_id": z.string().describe("部门id").optional(),
  "chat_ext_group_ids": z.array(z.string()).describe("在线扩展技能组id").optional(),
  "chat_group_ids": z.array(z.string()).describe("在线技能组id").optional(),
  "chat_level_ids": z.array(z.string()).describe("在线服务等级").optional(),
  "email": z.string().describe("客服邮箱").optional(),
  "hotline_group_ids": z.array(z.string()).describe("热线扩展技能组id").optional(),
  "page_num": z.number().int().describe("查询结果的页码，起始值为 1，默认值为 1").optional(),
  "page_size": z.number().int().describe("分页查询时设置的每页记录数，最大值 100 行，默认为 10").optional(),
  "real_name": z.string().describe("客服姓名").optional(),
  "role_ids": z.array(z.string()).describe("客服角色id").optional()
}
```

### alipay_iservice_ccm_agent_schedulelog_query

**Environment variables**



**Input schema**

```ts
{
  "agent_ids": z.array(z.string()).describe("客服id集合,限制最多100个id,不传查询部门下所有客服的状态变更流水日志").optional(),
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(),
  "end_time": z.string().describe("客服状态变更结束时间,开始时间与结束时间间隔不能超过1天,采用UTC时间，按照ISO8601标准表示，格式为：yyyy-MM-dd'T'HH:mm:ss'Z'").optional(),
  "limit": z.number().int().describe("查询条数,最大100, 不传默认100").optional(),
  "page_num": z.number().int().describe("查询结果的页码，起始值为 1，默认值为 1").optional(),
  "page_size": z.number().int().describe("分页查询时设置的每页记录数，最大值 100 行，默认为 100").optional(),
  "start_id": z.number().int().describe("起始id,分页导出的起始客服状态变更流水id,第一页传0,翻页时传上一页结果的最大id").optional(),
  "start_time": z.string().describe("客服状态变更开始时间,采用UTC时间，按照ISO8601标准表示，格式为：yyyy-MM-dd'T'HH:mm:ss'Z'").optional()
}
```

### alipay_iservice_ccm_function_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_iservice_ccm_instance_create

**Environment variables**



**Input schema**

```ts
{
  "creator_id": z.string().describe("创建人id").optional(),
  "description": z.string().describe("租户实例（数据权限）描述信息").optional(),
  "external_id": z.string().describe("外部id").optional(),
  "name": z.string().describe("租户实例（数据权限）名称，如果名称已经存在，将创建失败").optional()
}
```

### alipay_iservice_ccm_instance_get

**Environment variables**



**Input schema**

```ts
{
  "id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(),
  "external_id": z.string().describe("外部id").optional()
}
```

### alipay_iservice_ccm_instance_query

**Environment variables**



**Input schema**

```ts
{
  "page_num": z.number().int().describe("查询结果的页码，起始值为 1，默认值为 1").optional(),
  "page_size": z.number().int().describe("分页查询时设置的每页记录数，最大值 100 行，默认为 10").optional()
}
```

### alipay_iservice_ccm_isv_initialize

**Environment variables**



**Input schema**

```ts
{
  "isv_pub_key": z.string().describe("用于接入CCM iframe接口安全认证的 ISV 公钥，采用 base64 编码，秘钥对生成算法为 RSA2048。").optional()
}
```

### alipay_iservice_ccm_ols_chatrecord_query

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("租户实例id（数据权限id），不填，则使用默认的租户实例id").optional(),
  "id": z.string().describe("在线服务记录id").optional()
}
```

### alipay_iservice_ccm_robot_avatarbase_query

**Environment variables**



**Input schema**

```ts
{
  "commodity_code": z.string().describe("开通的数字人的商品码").optional(),
  "method_params": z.string().describe("method_params:对应target_method请求方法的具体传参值k-v map").optional(),
  "target_method": z.string().describe("targetMethod；数字人目标方法调用").optional(),
  "tenant_code": z.string().describe("租户code&租户id，对于子部门客户需要上传子部门id").optional()
}
```

### alipay_iservice_ccm_role_create

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(),
  "creator_id": z.string().describe("创建人id").optional(),
  "description": z.string().describe("角色描述信息").optional(),
  "function_ids": z.array(z.string()).describe("角色关联额功能点id").optional(),
  "name": z.string().describe("角色名").optional()
}
```

### alipay_iservice_ccm_role_delete

**Environment variables**



**Input schema**

```ts
{
  "id": z.string().describe("角色id").optional(),
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID），如果不传入，使用租户id").optional()
}
```

### alipay_iservice_ccm_role_get

**Environment variables**



**Input schema**

```ts
{
  "id": z.string().describe("角色id").optional(),
  "ccs_instance_id": z.string().describe("部门id，不传默认用租户ID").optional()
}
```

### alipay_iservice_ccm_role_modify

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID），不传默认使用租户id").optional(),
  "description": z.string().describe("描述信息").optional(),
  "function_ids": z.array(z.string()).describe("角色关联额功能点id").optional(),
  "id": z.string().describe("角色id").optional(),
  "updater_id": z.string().describe("最后修改人id").optional()
}
```

### alipay_iservice_ccm_role_page_query

**Environment variables**



**Input schema**

```ts
{
  "name": z.string().describe("角色名称").optional(),
  "page_num": z.number().int().describe("查询结果的页码，起始值为 1，默认值为 1").optional(),
  "page_size": z.number().int().describe("分页查询时设置的每页记录数，最大值 100 行，默认为 10").optional(),
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional()
}
```

### alipay_iservice_ccm_service_buy

**Environment variables**



**Input schema**

```ts
{
  "service_code": z.string().describe("服务代码。通过<a href=\"https://opendocs.alipay.com/apis/01dmgh\">alipay.iservice.ccm.service.initialize</a>(isv服务初始化接口) 获取。").optional()
}
```

### alipay_iservice_ccm_service_close

**Environment variables**



**Input schema**

```ts
{
  "service_code": z.string().describe("服务代码。通过<a href=\"https://opendocs.alipay.com/apis/01dmgh\">alipay.iservice.ccm.service.initialize</a>(isv服务初始化接口) 获取。").optional()
}
```

### alipay_iservice_ccm_service_initialize

**Environment variables**



**Input schema**

```ts
{
  "description": z.string().describe("服务描述").optional(),
  "icon": z.string().describe("服务图标url。支持 http(s) 链接。").optional(),
  "service_code": z.string().describe("服务编码。可在服务上架后，在服务市场上查询此信息。").optional(),
  "service_name": z.string().describe("服务名称。可在服务上架后，在服务市场上查询此信息。").optional(),
  "service_order_url": z.string().describe("服务订购二维码链接").optional(),
  "spis": z.array(z.object({ "biz_code": z.string().describe("ISV自定义的标识功能的业务代码，不可重复").optional(), "description": z.string().describe("spi功能描述").optional(), "icon": z.string().describe("功能图标文件url").optional(), "spi_endpoint": z.string().describe("spi接口服务地址").optional(), "spi_ext_property": z.string().describe("spi接口扩展参数，json格式字符串").optional(), "spi_key": z.string().describe("CCM预先定义的spi key，与插件位置有关").optional(), "spi_name": z.string().describe("SPI 名称").optional() })).describe("spi定义列表").optional()
}
```

### alipay_iservice_ccm_servicerecord_create

**Environment variables**



**Input schema**

```ts
{
  "acid": z.string().describe("来电唯一标识").optional(),
  "aid": z.string().describe("客服坐席号(软电话中定义的)").optional(),
  "ani": z.string().describe("主叫号码").optional(),
  "asid": z.string().describe("恒生专用来电唯一标识").optional(),
  "category_list": z.array(z.object({ "cat_name": z.string().describe("类目名称(需要每一级用;分隔封装)").optional(), "first_cat": z.string().describe("一级类目编码").optional(), "fourth_cat": z.string().describe("四级类目编码").optional(), "instence_code": z.string().describe("类目树编码").optional(), "second_cat": z.string().describe("二级类目编码").optional(), "third_cat": z.string().describe("三级类目编码").optional() })).describe("类目信息(详细信息请参考具体类型描述)").optional(),
  "chat_begin_time": z.string().describe("标准时间格式：yyyy-MM-dd HH:mm:ss").optional(),
  "chat_end_time": z.string().describe("标准时间格式：yyyy-MM-dd HH:mm:ss").optional(),
  "city": z.string().describe("来电地址").optional(),
  "creator_id": z.string().describe("创建者ID").optional(),
  "discon_symbol": z.string().describe("先挂断方\tAGENT:客服\tCUSTOMER:客户").optional(),
  "dnis": z.string().describe("被叫号码").optional(),
  "file_size": z.number().int().describe("文件大小").optional(),
  "gmt_create": z.string().describe("创建时间(yyyy-MM-dd HH:mm:ss)").optional(),
  "gmt_modified": z.string().describe("修改时间").optional(),
  "memo": z.string().describe("服务记录备注信息").optional(),
  "modifier_id": z.string().describe("修改人ID").optional(),
  "outbound_task_id": z.string().describe("外呼任务ID").optional(),
  "satisfaction": z.string().describe("满意度\t0:非常满意\t1:满意\t2:一般\t3:不满意\t4:非常不满意").optional(),
  "satisfaction_memo": z.string().describe("满意度补充信息").optional(),
  "service_source": z.string().describe("1:客户来电\t4:电话回访\t5:网点服务\t6:在线服务\t7:外呼任务\t8:手动外呼\t9:在线离线留言").optional(),
  "service_time": z.number().int().describe("服务时长(单位:秒)").optional(),
  "skillgroup_id": z.string().describe("技能组ID").optional(),
  "skillgroup_name": z.string().describe("技能组名称(技能组ID对应的技能组名称)").optional(),
  "tnt_inst_id": z.string().describe("业务租户").optional(),
  "user_id": z.string().describe("来访用户唯一标识ID").optional(),
  "verify_result": z.string().describe("IVR验证结果\tROLE_N:未定位到用户\tCERTNO_Y_PWD_Y:证件号码+交易密码验证通过\tCERTNO_Y_PWD_N:证件号码验证通过+交易密码不通过\tCERTNO_Y_PWD_UNKNOW:证件号码验证通过\tPHONE_Y_PWD_Y:来电手机+交易密码验证通过\tPHONE_Y_PWD_N:来电手机+交易密码未通过\tPHONE_Y_PWD_UNKNOW:来电手机账户\tSEARCH_Y_PWD_Y:搜索定位用户+推屏交易密码通过\tSEARCH_Y_PWD_N:搜索定位用户+推屏交易密码未通过\tSEARCH_Y_PWD_UNKNOW:搜索定位用户").optional()
}
```

### alipay_iservice_ccm_servicerecord_modify

**Environment variables**



**Input schema**

```ts
{
  "acid": z.string().describe("来电唯一标识").optional(),
  "aid": z.string().describe("客服坐席号(软电话中定义的)").optional(),
  "ani": z.string().describe("主叫号码").optional(),
  "asid": z.string().describe("恒生专用来电唯一标识").optional(),
  "category_list": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "chat_begin_time": z.string().describe("标准时间格式：yyyy-MM-dd HH:mm:ss").optional(),
  "chat_end_time": z.string().describe("标准时间格式：yyyy-MM-dd HH:mm:ss").optional(),
  "city": z.string().describe("来电地址").optional(),
  "creator_id": z.string().describe("创建者ID").optional(),
  "discon_symbol": z.string().describe("先挂断方 AGENT:客服 CUSTOMER:客户").optional(),
  "dnis": z.string().describe("被叫号码").optional(),
  "file_size": z.number().int().describe("文件大小").optional(),
  "gmt_create": z.string().describe("创建时间(yyyy-MM-dd HH:mm:ss)").optional(),
  "gmt_modified": z.string().describe("修改时间").optional(),
  "id": z.string().describe("云客服服务记录ID").optional(),
  "memo": z.string().describe("服务记录备注信息").optional(),
  "modifier_id": z.string().describe("修改人ID").optional(),
  "outbound_task_id": z.string().describe("外呼任务ID").optional(),
  "satisfaction": z.string().describe("满意度 0:非常满意 1:满意 2:一般 3:不满意 4:非常不满意").optional(),
  "satisfaction_memo": z.string().describe("满意度补充信息").optional(),
  "service_source": z.string().describe("1:客户来电 4:电话回访 5:网点服务 6:在线服务 7:外呼任务 8:手动外呼 9:在线离线留言").optional(),
  "service_time": z.number().int().describe("服务时长(单位:秒)").optional(),
  "skillgroup_id": z.string().describe("技能组ID").optional(),
  "skillgroup_name": z.string().describe("技能组名称(技能组ID对应的技能组名称)").optional(),
  "status": z.string().describe("1:待处理\t2:暂存\t3:完结\t4:废除\t5:无效\t6:未知").optional(),
  "tnt_inst_id": z.string().describe("业务租户").optional(),
  "user_id": z.string().describe("来访用户唯一标识ID").optional(),
  "verify_result": z.string().describe("IVR验证结果 ROLE_N:未定位到用户 CERTNO_Y_PWD_Y:证件号码+交易密码验证通过 CERTNO_Y_PWD_N:证件号码验证通过+交易密码不通过 CERTNO_Y_PWD_UNKNOW:证件号码验证通过 PHONE_Y_PWD_Y:来电手机+交易密码验证通过 PHONE_Y_PWD_N:来电手机+交易密码未通过 PHONE_Y_PWD_UNKNOW:来电手机账户 SEARCH_Y_PWD_Y:搜索定位用户+推屏交易密码通过 SEARCH_Y_PWD_N:搜索定位用户+推屏交易密码未通过 SEARCH_Y_PWD_UNKNOW:搜索定位用户").optional()
}
```

### alipay_iservice_ccm_sw_article_batchquery

**Environment variables**



**Input schema**

```ts
{
  "category_id": z.number().int().describe("所属类目ID，如果search_all_category为true则不用填").optional(),
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "end_time": z.string().describe("结束时间，并且开始时间不能为空").optional(),
  "ids": z.array(z.number().int()).describe("文章ID集合").optional(),
  "keyword": z.string().describe("关键字").optional(),
  "keywords": z.array(z.string()).describe("标签").optional(),
  "library_id": z.number().int().describe("知识库ID").optional(),
  "page_num": z.number().int().describe("页数，page_size不能为空").optional(),
  "page_size": z.number().int().describe("页大小，page_num不能为空").optional(),
  "search_all_category": z.boolean().describe("是否搜索所有类目，如果为true则不用填写category_id值").optional(),
  "search_category_type": z.string().describe("Current（搜索当前节点）；\tChildren（搜索当前节点以及子节点）").optional(),
  "start_time": z.string().describe("开始时间，并且结束时间不能为空").optional(),
  "status": z.string().describe("状态，PUBLISHED（已发布），UNPUBLISH（未发布），EXPIRED（失效），DELETED（已删除）").optional()
}
```

### alipay_iservice_ccm_sw_article_create

**Environment variables**



**Input schema**

```ts
{
  "attachments": z.array(z.object({ "file_name": z.string().describe("文章附件").optional(), "id": z.number().int().describe("附件id").optional(), "key": z.string().describe("附件完整Key").optional(), "url": z.string().describe("附件的url").optional() })).describe("附件列表").optional(),
  "category_id": z.number().int().describe("所属类目ID，如果search_all_category为true则不用填").optional(),
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "content": z.string().describe("内容").optional(),
  "extend_titles": z.array(z.string()).describe("扩展标题").optional(),
  "keywords": z.array(z.string()).describe("标签").optional(),
  "library_id": z.string().describe("知识库ID").optional(),
  "publish_end": z.string().describe("默认为 2999-12-31 23:59:59").optional(),
  "publish_start": z.string().describe("默认为当前时间").optional(),
  "related_articles": z.array(z.object({ "id": z.number().int().describe("知识点id").optional(), "title": z.string().describe("知识点标题").optional() })).describe("关联知识点").optional(),
  "scene_codes": z.array(z.string()).describe("场景ID。KNOWLEDGE（内部知识库）；ROBOT（机器人）;HELP（帮助中心）；WHELP（无线帮助中心）").optional(),
  "title": z.string().describe("标题").optional()
}
```

### alipay_iservice_ccm_sw_article_delete

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_iservice_ccm_sw_article_get

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "id": z.number().int().describe("文章ID").optional()
}
```

### alipay_iservice_ccm_sw_article_modify

**Environment variables**



**Input schema**

```ts
{
  "attachments": z.array(z.object({ "file_name": z.string().describe("文章附件").optional(), "id": z.number().int().describe("附件id").optional(), "key": z.string().describe("附件完整Key").optional(), "url": z.string().describe("附件的url").optional() })).describe("附件列表").optional(),
  "category_id": z.number().int().describe("所属类目ID，如果search_all_category为true则不用填").optional(),
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "content": z.string().describe("内容").optional(),
  "extend_titles": z.array(z.string()).describe("扩展标题").optional(),
  "id": z.number().int().describe("文章ID").optional(),
  "keywords": z.array(z.string()).describe("标签").optional(),
  "publish_end": z.string().describe("有效期结束时间").optional(),
  "publish_start": z.string().describe("有效期开始时间").optional(),
  "related_articles": z.array(z.object({ "id": z.number().int().describe("知识点id").optional(), "title": z.string().describe("知识点标题").optional() })).describe("关联知识点列表").optional(),
  "scene_codes": z.array(z.string()).describe("场景ID。1（内部知识库）；2（机器人）;3（帮助中心）；4（无线帮助中心）").optional(),
  "title": z.string().describe("标题").optional()
}
```

### alipay_iservice_ccm_sw_knowledge_modify

**Environment variables**



**Input schema**

```ts
{
  "category_id": z.number().int().describe("所属类目ID").optional(),
  "category_name": z.string().describe("知识点所属类目").optional(),
  "content": z.string().describe("知识点答案内容").optional(),
  "ext_id": z.string().describe("外部知识点ID").optional(),
  "extend_titles": z.array(z.string()).describe("扩展标题（问法）").optional(),
  "icon": z.string().describe("问答关联图片附件地址").optional(),
  "id": z.number().int().describe("知识点ID").optional(),
  "is_delete": z.boolean().describe("默认为false，为true且id非空时，表示删除知识点").optional(),
  "is_searchable": z.boolean().describe("是否被检索到，默认false，系统希望为true").optional(),
  "library_id": z.number().int().describe("知识库ID").optional(),
  "library_name": z.string().describe("知识库名称").optional(),
  "spu": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "tags": z.array(z.string()).describe("以逗号分割的字符串列表").optional(),
  "title": z.string().describe("知识点标题").optional()
}
```

### alipay_iservice_ccm_sw_library_batchquery

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional()
}
```

### alipay_iservice_ccm_sw_library_create

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "instance_code": z.string().describe("知识库对应的类目树名称，与treeId不可同时为空").optional(),
  "name": z.string().describe("知识库名称").optional(),
  "tree_id": z.number().int().describe("知识库对应的类目树Id，与instanceCode不可同时为空").optional()
}
```

### alipay_iservice_ccm_sw_library_delete

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_iservice_ccm_sw_library_modify

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "id": z.string().describe("知识库Id").optional(),
  "name": z.string().describe("知识库名称").optional()
}
```

### alipay_iservice_ccm_sw_order_sync

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("订单金额").optional(),
  "link_url": z.string().describe("订单链接").optional(),
  "logistic_count": z.number().int().describe("订单物流数量").optional(),
  "logistics": z.array(z.object({ "channel": z.string().describe("物流公司名称").optional(), "detail": z.string().describe("物流详情").optional(), "logistic_id": z.string().describe("物流id").optional(), "ship_area": z.string().describe("发货地").optional(), "ship_period": z.string().describe("发货时效").optional(), "status": z.string().describe("物流状态").optional(), "stop_update_time": z.string().describe("物流停更时间").optional() })).describe("物流信息列表").optional(),
  "order_create_time": z.string().describe("订单创建时间").optional(),
  "order_id": z.string().describe("订单id").optional(),
  "order_type": z.string().describe("普通订单：NORMAL\t预售订单：PRE_SALE").optional(),
  "spu_count": z.number().int().describe("订单商品种类").optional(),
  "spus": z.array(z.object({ "brand": z.string().describe("品牌名称").optional(), "category": z.string().describe("类目").optional(), "count": z.number().int().describe("商品数量").optional(), "icon": z.string().describe("图片链接").optional(), "price": z.string().describe("商品单价(单位:元)").optional(), "provider": z.string().describe("商品提供方，店铺或品牌方").optional(), "spu_id": z.string().describe("商品ID").optional() })).describe("订单商品信息").optional(),
  "status": z.string().describe("订单状态，目前支持以下几种状态\t下单未支付\tWAIT_PAY\t支付未发货\tPAIED\t已发货\tIN_DELIVERY\t售后中\tIN_AFTER_SALE\t订单完成\tFINISHED").optional(),
  "sub_status": z.string().describe("订单子状态").optional(),
  "user_id": z.string().describe("下单用户id(外部系统ID)").optional()
}
```

### alipay_iservice_ccm_sw_spu_sync

**Environment variables**



**Input schema**

```ts
{
  "attribute": z.array(z.object({ "name": z.string().describe("商品属性名").optional(), "value": z.array(z.string()).describe("商品属性值").optional() })).describe("商品属性列表").optional(),
  "brand": z.string().describe("商品品牌").optional(),
  "category": z.string().describe("商品类目，用于商品库中分类").optional(),
  "description": z.string().describe("商品描述").optional(),
  "icon": z.string().describe("商品图片链接\t特殊可选规则：is_delete=false的情况下必填").optional(),
  "is_delete": z.string().describe("默认为false，为true，表示删除知识点").optional(),
  "library_id": z.number().int().describe("知识库id").optional(),
  "library_name": z.string().describe("知识库名称").optional(),
  "link_url": z.string().describe("商品链接\t特殊可选规则：is_delete=false的情况下必填").optional(),
  "original_price": z.string().describe("商品原价").optional(),
  "price": z.string().describe("商品售价\t特殊可选规则：is_delete=false的情况下必填").optional(),
  "spu_id": z.string().describe("商品ID").optional(),
  "status": z.string().describe("商品状态：AVAILABLE 表示可售卖,SOLD_OUT为售罄/不可卖，默认可售卖").optional(),
  "title": z.string().describe("商品名称\t特殊可选规则：is_delete=false的情况下必填").optional()
}
```

### alipay_iservice_ccm_sw_tree_batchquery

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional()
}
```

### alipay_iservice_ccm_sw_tree_create

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "name": z.string().describe("类目名称").optional()
}
```

### alipay_iservice_ccm_sw_tree_delete

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_iservice_ccm_sw_tree_get

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "id": z.number().int().describe("类目ID").optional()
}
```

### alipay_iservice_ccm_sw_tree_modify

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "id": z.number().int().describe("类目ID").optional(),
  "name": z.string().describe("类目名称").optional()
}
```

### alipay_iservice_ccm_sw_tree_publish

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "id": z.number().int().describe("类目ID").optional()
}
```

### alipay_iservice_ccm_sw_treecategory_batchquery

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "library_id": z.number().int().describe("知识库ID").optional(),
  "name": z.string().describe("节点名称").optional(),
  "page_num": z.number().int().describe("页数，page_size不能为空").optional(),
  "page_size": z.number().int().describe("页显示大小，page_num不能为空").optional()
}
```

### alipay_iservice_ccm_sw_treecategory_create

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "description": z.string().describe("描述").optional(),
  "father_id": z.number().int().describe("父节点ID").optional(),
  "name": z.string().describe("节点名称").optional(),
  "tags": z.array(z.string()).describe("标签。KNOWLEDGE（知识库）；PLATFORM（公有云工作台）；HELP（公有云帮助中心）").optional()
}
```

### alipay_iservice_ccm_sw_treecategory_delete

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_iservice_ccm_sw_treecategory_modify

**Environment variables**



**Input schema**

```ts
{
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "description": z.string().describe("描述").optional(),
  "father_id": z.string().describe("父节点ID").optional(),
  "id": z.number().int().describe("节点ID").optional(),
  "name": z.string().describe("节点名称").optional(),
  "tags": z.string().describe("标签。KNOWLEDGE（知识库）；PLATFORM（公有云工作台）；HELP（公有云帮助中心）").optional()
}
```

### alipay_marketing_activity_batchquery

**Environment variables**



**Input schema**

```ts
{
  "activity_status": z.string().describe("活动状态 。 ACTIVE:活动已激活，表示活动已经生效，等到活动开始(publish_start_time)之后用户就可以参与活动。 PAUSE:活动已暂停，表示商户临时暂停该活动，该状态下用户不能参与活动。").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式。").optional(),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "page_num": z.number().int().describe("分页查询页码。").optional(),
  "page_size": z.number().int().describe("分页查询单页数据条数。").optional()
}
```

### alipay_marketing_activity_consult

**Environment variables**



**Input schema**

```ts
{
  "consult_activity_info_list": z.array(z.object({ "activity_id": z.string().describe("活动id").optional() })).describe("待咨询的活动信息列表").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "open_id": z.string().describe("领券的支付宝用户openId").optional(),
  "user_id": z.string().describe("领券的用户uid").optional()
}
```

### alipay_marketing_activity_deliverychannel_query

**Environment variables**



**Input schema**

```ts
{
  "belong_merchant_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "booth_code": z.string().describe("展位码。\t\tboothCode含义：boothCode表达的是某个渠道可以投放的展位码。例如：支付结果页PAY_RESULT\t\t枚举值：\tPAY_RESULT：支付结果页。\t\t后续新增可投放的展位后，会在文档中新增描述信息").optional(),
  "page_num": z.number().int().describe("查询的页码。\t\t特别说明：\t页码从1开始。").optional(),
  "page_size": z.number().int().describe("每页查询的个数，最大值为 100。").optional()
}
```

### alipay_marketing_activity_ordervoucher_associate

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。 幂等作用： 参数不变的情况下，再次请求返回与上一次相同的结果。 外部接入方需保证业务单号唯一。").optional(),
  "trade_no": z.string().describe("支付宝支付下单时的商户订单号，欲与该商家券关联的支付宝支付").optional(),
  "voucher_code": z.string().describe("商家券券码。\t限制:\t券码必须已发放给用户。").optional()
}
```

### alipay_marketing_activity_ordervoucher_disassociate

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。 幂等作用： 参数不变的情况下，再次请求返回与上一次相同的结果。 外部接入方需保证业务单号唯一。").optional(),
  "trade_no": z.string().describe("该交易在支付宝系统中的交易流水号。").optional(),
  "voucher_code": z.string().describe("券码。 限制: 券码必须已发放给用户。").optional()
}
```

### alipay_marketing_activity_ordervoucher_query

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}
```

### alipay_marketing_activity_user_batchqueryvoucher

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("支付宝用户 id").optional(),
  "open_id": z.string().describe("支付宝用户openId").optional(),
  "activity_id": z.string().describe("活动 id").optional(),
  "belong_merchant_id": z.string().describe("券归属商户").optional(),
  "sender_merchant_id": z.string().describe("券发放商户").optional(),
  "voucher_status": z.string().describe("券状态，其中已过期状态可查询6个月内的数据").optional(),
  "page_num": z.number().int().describe("分页查询页码").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "page_size": z.number().int().describe("分页查询单页数据条数").optional()
}
```

### alipay_marketing_activity_user_queryvoucher

**Environment variables**



**Input schema**

```ts
{
  "merchant_id": z.string().describe("商户 PID，默认为当前接口调用商户。").optional(),
  "user_id": z.string().describe("支付宝user_id账号").optional(),
  "open_id": z.string().describe("领券的支付宝用户openId").optional(),
  "activity_id": z.string().describe("活动id").optional(),
  "voucher_id": z.string().describe("用户券 id。支付宝为用户优惠券唯一分配的 id。").optional(),
  "voucher_code": z.string().describe("用户领取的商家券券码。").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式。").optional()
}
```

### alipay_marketing_activity_voucher_append

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional(),
  "voucher_quantity": z.number().int().describe("发行券的数量。。 限制： 券总预算<= 99999999 特别说明： 该字段的含义是追加到的数量。 不可减少，只能增加。").optional()
}
```

### alipay_marketing_activity_voucher_create

**Environment variables**



**Input schema**

```ts
{
  "activity_base_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "activity_name": z.string().describe("活动名称。").optional(),
  "belong_merchant_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional(),
  "publish_end_time": z.string().describe("券发放结束时间。 格式为：yyyy-MM-dd HH:mm:ss 限制： 券发放结束时间 publish_end_time 与 券发放开始时间  publish_start_time 间隔必须小于等于180天").optional(),
  "publish_start_time": z.string().describe("券发放开始时间。 格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "voucher_available_scope_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_budget_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_budget_supply_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_customer_guide_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_deduct_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_display_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_display_pattern_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_send_mode_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_send_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_type": z.string().describe("券类型").optional(),
  "voucher_use_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_use_rule_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_activity_voucher_modify

**Environment variables**



**Input schema**

```ts
{
  "activity_base_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。 幂等作用： 参数不变的情况下，再次请求返回与上一次相同的结果。").optional(),
  "publish_end_time": z.string().describe("券发放结束时间。格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "voucher_available_scope_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_send_mode_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_use_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_use_rule_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_activity_voucher_publish

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("用作幂等控制\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t外部接入方需保证业务单号唯一。").optional()
}
```

### alipay_marketing_activity_voucher_query

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式。").optional()
}
```

### alipay_marketing_activity_voucher_send

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "open_id": z.string().describe("领券的支付宝用户openId").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional(),
  "user_id": z.string().describe("领券的支付宝user_id账号").optional()
}
```

### alipay_marketing_activity_voucher_stop

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("64\t外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional()
}
```

### alipay_marketing_activity_voucherpackage_batchquery

**Environment variables**



**Input schema**

```ts
{
  "page_num": z.number().int().describe("分页参数，需要查询的页码，起始页是1").optional(),
  "page_size": z.number().int().describe("分页参数，每页记录数，最大不可超过30").optional(),
  "voucher_package_purchase_start_time": z.string().describe("券包购买开始时间。 格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "voucher_package_status": z.string().describe("券包状态").optional()
}
```

### alipay_marketing_activity_voucherpackage_consult

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "voucher_package_id_list": z.array(z.string()).describe("券包id列表").optional()
}
```

### alipay_marketing_activity_voucherpackage_query

**Environment variables**



**Input schema**

```ts
{
  "voucher_package_id": z.string().describe("券包id").optional()
}
```

### alipay_marketing_activity_query

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式。").optional()
}
```

### alipay_marketing_activity_app_batchquery

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户 \t限制: \t接口调用者必须有商户代运营权限。 \t<a href=\"https://opendocs.alipay.com/mini/01hm6i#%E4%BB%A3%E8%BF%90%E8%90%A5%E6%8E%88%E6%9D%83\">代运营授权流程</a>").optional(),
  "page_num": z.number().int().describe("分页查询页码。 \t限制:\t必须为大于0的整数").optional(),
  "page_size": z.string().describe("分页查询单页数据条数。 \t限制: \t1.必须为大于0的整数 \t2.每页最大值为20").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}
```

### alipay_marketing_activity_goods_batchquery

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "goods_use_type": z.string().describe("活动单品类型。").optional(),
  "page_num": z.number().int().describe("分页查询页码。\t限制:\t必须为大于0的整数").optional(),
  "page_size": z.number().int().describe("分页查询单页数据条数。\t限制:\t1.必须为大于0的整数\t2.每页最大值为20").optional(),
  "product_version": z.string().describe("版本号\t\t枚举值:\t2.0.0").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}
```

### alipay_marketing_activity_merchant_batchquery

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "page_num": z.number().int().describe("分页查询页码。 \t限制: \t必须为大于0的整数").optional(),
  "page_size": z.number().int().describe("分页查询单页数据条数。 \t限制: \t1.必须为大于0的整数 \t2.每页最大值为20").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}
```

### alipay_marketing_activity_shop_batchquery

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "page_num": z.number().int().describe("分页查询页码。 \t限制: \t必须为大于0的整数").optional(),
  "page_size": z.number().int().describe("分页查询单页数据条数。 \t限制: \t1.必须为大于0的整数 \t2.每页最大值为20").optional(),
  "product_version": z.string().describe("版本号\t\t枚举值:\t2.0.0").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}
```

### alipay_marketing_campaign_cash_create

**Environment variables**



**Input schema**

```ts
{
  "coupon_name": z.string().describe("红包名称,商户在查询列表、详情看到的名字,同时也会显示在商户付款页面。").optional(),
  "end_time": z.string().describe("活动结束时间,必须大于活动开始时间, 基本格式:yyyy-MM-dd HH:mm:ss,活动有效时间最长为6个月，过期后需要创建新的活动。").optional(),
  "merchant_link": z.string().describe("商户打款后的跳转链接，从支付宝收银台打款成功后的跳转链接。不填时，打款后停留在支付宝支付成功页。商户实际跳转会自动添加crowdNo作为跳转参数。示例: http://www.yourhomepage.com?crowdNo=XXX").optional(),
  "prize_msg": z.string().describe("活动文案，用户在账单、红包中看到的账单描述、红包描述。").optional(),
  "prize_type": z.string().describe("现金红包的发放形式,。枚举支持：\t*fixed：固定金额。\t*random：随机金额。选择随机金额时，单个红包的金额在平均金额的0.5~1.5倍之间浮动。\t").optional(),
  "send_freqency": z.string().describe("用户在当前活动参与次数、频率限制。支持日(D)、周(W)、月(M)、终身(L)维度的限制，整个字段不填时默认值为L1（即用户终生仅能参与1次）。\t注意：\t 1. 终身(L)限制必选且最大值为 100。\t 2. 日(D)、周(W)、月(M)限制可选且最多只能选择一个（即限制日领取次数就不能再限制月领取次数），频率设置必须小于等于终身(L)的次数。\t 3. 多个配置之间使用\"|\"进行分隔。如 D3|L4（表示限制用户终生只能参与4次，单日只能参与3次）。\t 4. 允许多次领取时，活动触发接口需要传入out_biz_no来配合。").optional(),
  "start_time": z.string().describe("活动开始时间，必须大于活动创建的时间。入参支持如下两种形式：\t 1. 填入固定时间，时间格式为 yyyy-MM-dd HH:mm:ss，如 2020-12-10 22:28:30\t 2. 填字符串 NowTime，表示创建即生效。").optional(),
  "total_money": z.string().describe("活动发放的现金总金额,最小金额1.00元,最大金额10000000.00元。每个红包的最大金额不允许超过200元,最小金额不得低于0.20元。 实际的金额限制可能会根据业务进行动态调整。").optional(),
  "total_num": z.string().describe("红包发放个数，最小为 1 个，最大10000000个。\t说明：不同的发放形式（即prize_type）会使得发放个数含义不同：\t 1. 若prize_type 为 fixed（固定金额），则每个用户领取的红包金额为total_money除以total_num得到固定金额。\t 2. 若prize_type为 random（随机金额），则每个用户领取的红包金额为total_money除以total_num得到的平均金额值的0.5~1.5倍。由于金额是随机的，在红包金额全部被领取完时，有可能total_num有所剩余、或者大于设置值的情况。").optional()
}
```

### alipay_marketing_campaign_cash_detail_query

**Environment variables**



**Input schema**

```ts
{
  "crowd_no": z.string().describe("现金活动号，通过<a href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.campaign.cash.create\">alipay.marketing.campaign.cash.create</a>(创建现金活动)接口创建现金活动获取。").optional()
}
```

### alipay_marketing_campaign_cash_list_query

**Environment variables**



**Input schema**

```ts
{
  "camp_status": z.string().describe("要查询的活动状态,不填默认为 ALL 返回所有类型。枚举支持:\t*ALL：所有类型的活动。\t*CREATED：已创建未打款。\t*PAID：已打款。\t*READY：活动已开始。\t*PAUSE：活动已暂停。\t*CLOSED：活动已结束。\t*SETTLE：活动已清算。").optional(),
  "page_size": z.string().describe("分页查询时每页返回的列表大小，每页数据最大为 50。").optional(),
  "page_index": z.string().describe("分页查询时的页码，从1开始").optional()
}
```

### alipay_marketing_campaign_cash_status_modify

**Environment variables**



**Input schema**

```ts
{
  "camp_status": z.string().describe("金活动修改后的状态。支持修改为：\t*PAUSE：活动暂停。\t*READY：活动开始。\t*CLOSED：活动结束。").optional(),
  "crowd_no": z.string().describe("现金活动号，通过<a href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.campaign.cash.create\">alipay.marketing.campaign.cash.create</a>(创建现金活动)接口创建现金活动获取。").optional()
}
```

### alipay_marketing_campaign_cash_trigger

**Environment variables**



**Input schema**

```ts
{
  "crowd_no": z.string().describe("现金活动号，通过<a href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.campaign.cash.create\">alipay.marketing.campaign.cash.create</a>(创建现金活动)接口创建现金活动获取。").optional(),
  "login_id": z.string().describe("用户登录账号名，一般为邮箱或手机号。\t注意：user_id与login_id二选一必填，同时传入时以user_id为准。").optional(),
  "open_id": z.string().describe("open_id").optional(),
  "order_price": z.string().describe("此字段如果传入金额，就忽略prize_type算法，按照传入的金额发奖。如果不传或者小于等于0，则按照活动创建时指定的prize_type为fixed或者random算法发奖").optional(),
  "out_biz_no": z.string().describe("领取红包的外部业务号，只由可由字母、数字、下划线组成。同一个活动中不可重复，相同的外部业务号会被幂等并返回之前的结果。不填时，系统会生成一个默认固定的外部业务号。").optional(),
  "user_id": z.string().describe("用户支付宝唯一标识，2088开头。\t注意：user_id与login_id二选一必填，同时传入时以user_id为准。").optional()
}
```

### alipay_marketing_campaign_order_voucher_consult

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "business_param": z.string().describe("业务参数大字段，优惠咨询的控制参数，json格式；目前支持传入useBigAmountSkipOrderThold为N来控制不使用大金额跳过优惠的订单门槛检查；默认不传；").optional(),
  "item_consult_list": z.array(z.object({ "item_id": z.string().describe("商品id").optional(), "price": z.string().describe("商品单价，单位为元，最多2位小数").optional(), "quantity": z.string().describe("商品数量").optional() })).describe("商品咨询请求列表（当需要咨询单品券时必传，如果某商品不希望参与本次单品优惠咨询则不传递对应信息即可）").optional(),
  "order_amount": z.string().describe("订单金额（如同时享受商户自有优惠请先扣除后传入），单位为元，最多2位小数").optional(),
  "scene_code": z.array(z.string()).describe("场景码：默认(DEFAULT)").optional(),
  "specified_app_id": z.string().describe("券指定的核销appid（如果配券时指定了核销范围为线上小程序及相应的appid则此处必传）").optional()
}
```

### alipay_marketing_card_activateform_query

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "biz_type": z.string().describe("开放表单信息查询业务类型").optional(),
  "template_id": z.string().describe("会员卡模板id。使用会员卡模板创建接口(alipay.marketing.card.template.create)返回的结果").optional(),
  "request_id": z.string().describe("查询用户表单提交信息的请求id。\t\t网页移动应用&小程序应用：与auth_code  一起通过alipay.marketing.card.activateurl.apply(获取会员卡领卡投放链接)接口callback地址回传。\t\t注意：auth_code（用户授权码）用于换取用户授权令牌 accessToken，后续调用接口需传入accessToken。").optional()
}
```

### alipay_marketing_card_activateurl_apply

**Environment variables**



**Input schema**

```ts
{
  "callback": z.string().describe("会员卡开卡表单提交后回调地址。要求必须是单纯的服务端接收回调。\t说明：\t1.该地址不可带参数，如需回传参数，可设置out_string入参。").optional(),
  "follow_app_id": z.string().describe("需要关注的生活号AppId。若需要在领卡页面展示“关注生活号”提示，需开通生活号并绑定会员卡。生活号快速接入详见：https://doc.open.alipay.com/docs/doc.htm?treeId=193&articleId=105933&docType=1").optional(),
  "out_string": z.string().describe("该值为商家拉起开卡组件的传递的 out_string  值。通常可用于区分不同业务场景，禁止将该字段作为开卡流程的必要字段，否则会导致会员推广场景下的入会失败").optional(),
  "template_id": z.string().describe("会员卡模板id。使用会员卡模板创建接口(alipay.marketing.card.template.create)返回的结果").optional()
}
```

### alipay_marketing_card_benefit_create

**Environment variables**



**Input schema**

```ts
{
  "mcard_template_benefit": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_card_benefit_delete

**Environment variables**



**Input schema**

```ts
{
  "template_id": z.string().describe("会员卡模板ID，通过 <a  href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.card.template.create\">alipay.marketing.card.template.create</a>（会员卡模板创建)接口创建会员卡模板获取。").optional(),
  "benefit_id": z.string().describe("权益ID，通过 <a  href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.card.benefit.create\">alipay.marketing.card.benefit.create</a>(会员卡模板外部权益创建)接口创建获取。").optional()
}
```

### alipay_marketing_card_benefit_modify

**Environment variables**



**Input schema**

```ts
{
  "benefit_id": z.string().describe("权益ID，通过 <a  href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.card.benefit.create\">alipay.marketing.card.benefit.create</a>(会员卡模板外部权益创建)接口创建获取。").optional(),
  "mcard_template_benefit": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_card_benefit_query

**Environment variables**



**Input schema**

```ts
{
  "template_id": z.string().describe("会员卡模板ID，通过 <a  href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.card.template.create\">alipay.marketing.card.template.create</a>（会员卡模板创建)接口创建会员卡模板获取。").optional(),
  "benefit_id": z.string().describe("权益ID，通过 <a  href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.card.benefit.create\">alipay.marketing.card.benefit.create</a>(会员卡模板外部权益创建)接口创建获取。").optional()
}
```

### alipay_marketing_card_consume_sync

**Environment variables**



**Input schema**

```ts
{
  "act_pay_amount": z.string().describe("用户实际付的现金金额\t\t1.针对预付卡面额的核销金额在use_benefit_list展现，作为权益金额\t\t2.权益金额不叠加在该金额上").optional(),
  "card_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "gain_benefit_list": z.array(z.object({ "amount": z.string().describe("PRE_FUND：实际核销或者商户赠送的金额\t\tDISCOUNT：实际折扣掉的金额（获取权益不支持该类型）\t\tCOUPON：实际核销或者商户赠送的券").optional(), "benefit_type": z.string().describe("权益类型").optional(), "count": z.string().describe("COUPON：当核销或者赠送券时，可以设置该值").optional(), "description": z.string().describe("产生核销或者赠送权益的描述").optional() })).describe("获取权益列表").optional(),
  "memo": z.string().describe("备注信息，现有直接填写门店信息").optional(),
  "shop_code": z.string().describe("门店编号").optional(),
  "swipe_cert_type": z.string().describe("产生该笔交易时，用户出具的凭证类型。枚举支持：\t*ALIPAY：支付宝电子卡；\t*ENTITY：实体卡；\t*OTHER：其他。").optional(),
  "target_card_no": z.string().describe("支付宝业务卡号，即通过<a  href=\"https://opendocs.alipay.com/apis/009zw3\">alipay.marketing.card.open</a>(会员卡开卡)接口开卡后获取的  card_info.biz_card_no 值。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型。支持：\t*BIZ_CARD：支付宝业务卡号（商户会员卡场景使用）。").optional(),
  "trade_amount": z.string().describe("交易金额：本次交易的实际总金额（可认为标价金额）").optional(),
  "trade_name": z.string().describe("交易名称。为空时支付宝将根据交易类型提供默认名称。").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional(),
  "trade_time": z.string().describe("线下交易时间，为用户付款的交易时间。\t说明：当交易时间晚于上次消费记录同步时间时，将变更会员卡信息。").optional(),
  "trade_type": z.string().describe("交易类型。枚举支持：\t*开卡：OPEN；\t*消费：TRADE；\t*充值：DEPOSIT；\t*退卡：RETURN。").optional(),
  "use_benefit_list": z.array(z.object({ "amount": z.string().describe("PRE_FUND：实际核销或者商户赠送的金额\t\tDISCOUNT：实际折扣掉的金额（获取权益不支持该类型）\t\tCOUPON：实际核销或者商户赠送的券").optional(), "benefit_type": z.string().describe("权益类型").optional(), "count": z.string().describe("COUPON：当核销或者赠送券时，可以设置该值").optional(), "description": z.string().describe("产生核销或者赠送权益的描述").optional() })).describe("实际消耗的权益").optional()
}
```

### alipay_marketing_card_delete

**Environment variables**



**Input schema**

```ts
{
  "out_serial_no": z.string().describe("商户端删卡业务流水号，商户自定义且需确保流水号唯一性。").optional(),
  "target_card_no": z.string().describe("支付宝业务卡号。即开卡接口返回结果中的card_info.biz_card_no。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型").optional(),
  "reason_code": z.string().describe("删卡原因\t\tUSER_UNBUND：用户解绑（可以重新绑定）\t\tCANCEL：销户（完成销户后，就不能再重新绑定）\t\tPRESENT：转赠（可以重新绑定）").optional(),
  "ext_info": z.string().describe("删卡扩展参数，json格式。\t\t用于商户的特定业务信息的传递，只有商户与支付宝约定了传递此参数且约定了参数含义，此参数才有效。\t\t目前支持如下key：\t\tnew_card_no：新卡号\t\tdonee_user_id：受赠人userId").optional()
}
```

### alipay_marketing_card_formtemplate_set

**Environment variables**



**Input schema**

```ts
{
  "fields": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "template_id": z.string().describe("会员卡模板id。调用alipay.marketing.card.template.create（会员卡模板创建接口）创建模板后同步返回。").optional()
}
```

### alipay_marketing_card_message_notify

**Environment variables**



**Input schema**

```ts
{
  "notify_info": z.string().describe("消息通知详情，包含消息通知需要的信息，map 格式存储。\t积分过期提醒：\t<br>expired_point 过期积分值\t<br>expired_time 过期时间").optional(),
  "notify_no": z.string().describe("消息通知幂等标识，业务流水号").optional(),
  "notify_type": z.string().describe("消息通知类型,\t<br>POINT_REMIND 积分过期提醒").optional(),
  "occur_time": z.string().describe("标识业务发生时间，时间格式为\"yyyy-MM-dd HH:mm:ss\"。").optional(),
  "target_card_no": z.string().describe("支付宝业务卡号，即通过 alipay.marketing.card.open 接口开卡后获取的 card_info.biz_card_no 值。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型").optional()
}
```

### alipay_marketing_card_open

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "card_ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "card_template_id": z.string().describe("支付宝分配的卡模板Id（卡模板创建接口返回的模板ID）").optional(),
  "card_user_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "member_ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "open_card_channel": z.string().describe("领卡渠道，用于记录外部商户端领卡来源的渠道信息，渠道值可自行定义（仅限数字、字母、下划线） \t\t可直接标识领卡渠道，也可配合open_card_channel_id标识领卡渠道类型：\t\t例如：\t\t线下门店领取:20161534000000000008863（直接标识领卡渠道，门店shopId）\t\t线下扫二维码领取:QR（标识领卡类型）;\t\t线下活动领取:20170522000000000003609（直接标识领卡渠道，商户活动ID）").optional(),
  "open_card_channel_id": z.string().describe("领卡来源的渠道id，注意区别于open_card_channel领卡渠道；\t\t一般使用场景：\t\topen_card_channel用于区分渠道类型，例如取值为\"SHOP\"（门店），\"ACTIVITY\"（活动）；\t\t则open_card_channel_id可用于区分同渠道的不同实体，对应取各门店ID或各活动的标识ID等；").optional(),
  "out_serial_no": z.string().describe("外部商户流水号。由商户自定义，需保证商户系统中唯一。").optional(),
  "paid_outer_card_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_card_query

**Environment variables**



**Input schema**

```ts
{
  "card_user_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ext_info": z.string().describe("扩展信息，暂时没有").optional(),
  "target_card_no": z.string().describe("操作卡号。\t若target_card_no_type为  BIZ_CARD，则该值为业务卡号，即alipay.marketing.card.open(会员卡开卡)返回结果中的card_info#biz_card_no。\t若target_card_no_type为 D_QR_CODE 或D_BAR_CODE，则该值为动态码值。\t若target_card_no_type为 EXTERNAL_CARD，则该值为外部卡号。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型").optional(),
  "template_id": z.string().describe("会员卡模板id。调用<a href=\"https://opendocs.alipay.com/open/03sx80?scene=common&pathHash=04270a28\" target=\"_blank\">alipay.marketing.card.template.create</a>（会员卡模板创建接口）创建模板后同步返回。").optional()
}
```

### alipay_marketing_card_template_batchquery

**Environment variables**



**Input schema**

```ts
{
  "page_no": z.number().int().describe("查询起始页码，如第1页，单位：/页").optional(),
  "page_size": z.number().int().describe("每页数据大小，默认 20条，最大支持20个，单位：/个").optional()
}
```

### alipay_marketing_card_template_create

**Environment variables**



**Input schema**

```ts
{
  "access_version": z.string().describe("接入版本").optional(),
  "biz_no_prefix": z.string().describe("业务卡号前缀，由商户指定\t\t支付宝业务卡号生成规则：biz_no_prefix(商户指定)卡号前缀 + biz_no_suffix(实时生成）卡号后缀").optional(),
  "biz_no_suffix_len": z.string().describe("业务卡号后缀长度，与biz_no_prefix配合，扣除系统预留2位，剩下对应seq长度。在生成卡号时，若seq位数不足前置补0，若seq位数超出则以实际为准。举例：设为10，其中8位用于生成seq，可覆盖1亿用户，即使seq超过1亿，生成卡号也不报错，但总长度不得超过32位。建议按需设置合适的值，以获得长度一致的业务卡号，建议长度20，性能更好。").optional(),
  "card_action_list": z.array(z.object({ "code": z.string().describe("行动点业务CODE，商户自定义").optional(), "mini_app_url": z.object({ "display_on_list": z.string().describe("行动点按钮是否在列表页展示，true 或 false，不填则默认false；\t\t列表页可以配置展示最多2项小程序跳转行动点。").optional(), "mini_app_id": z.string().describe("小程序appId").optional(), "mini_page_param": z.string().describe("指定小程序页面，不填则默认跳转至对应小程序首页").optional(), "mini_query_param": z.string().describe("query参数，商户自定义传参，填入值将以\"query\"为参数名提交至指定小程序页面").optional() }).optional(), "text": z.string().describe("行动点展示文案").optional(), "url": z.string().describe("行动点跳转链接，当url_type填\"url\"或不填时必填，支持http(s)和支付宝schema地址等").optional(), "url_type": z.string().describe("跳转链接类型，不填则默认为url类型：\t\turl：对应填写url参数\t\tminiAppUrl: 对应填写mini_app_url参数，跳转至指定的支付宝小程序页面").optional() })).describe("\"卡行动点配置； 行动点，即用户可点击跳转的区块，类似按钮控件的交互； 单张卡最多定制3个行动点。如果各项的配置内容完全一样，展示时会进行去重。\"").optional(),
  "card_level_conf": z.array(z.object({ "level": z.string().describe("会员级别 该级别和开卡接口中的level要一致").optional(), "level_desc": z.string().describe("会员级别描述").optional(), "level_icon": z.string().describe("会员级别对应icon图片，\t\t会员信息预留字段，暂不在用户端展示；\t\t通过接口（alipay.offline.material.image.upload）上传图片").optional(), "level_show_name": z.string().describe("会员级别显示名称").optional() })).describe("卡级别配置").optional(),
  "card_spec_tag": z.string().describe("卡特定标签，只供特定业务使用，通常接入无需关注").optional(),
  "card_type": z.string().describe("卡类型").optional(),
  "column_info_list": z.array(z.object({ "code": z.string().describe("标准栏位：行为由支付宝统一定，同时已经分配标准Code\t\tBALANCE：会员卡余额\t\tPOINT：积分\t\tLEVEL：等级\t\tTELEPHONE：联系方式\t\t自定义栏位：行为由商户定义，自定义Code码（只要无重复）").optional(), "group_title": z.string().describe("若template_style_info.column_info_layout\t的值为grid，此项为宫格项所属分组标题。可空。如果需要展示该项，还需支付宝内部进行特殊配置。").optional(), "icon_id": z.string().describe("当template_style_info.column_info_layout\t的值为grid时，此参数必填。此项为宫格项的展示icon。通过接口（alipay.offline.material.image.upload）上传图片。").optional(), "more_info": z.object({ "descs": z.array(z.string()).describe("描述，当operate_type为openNative必填").optional(), "params": z.string().describe("扩展参数，需要URL地址回带的值，JSON格式(openweb时填)").optional(), "title": z.string().describe("二级页面标题，只有当operate_type为openNative时有效。").optional(), "url": z.string().describe("超链接(选择openweb的时候必须填写url参数内容)").optional() }).optional(), "operate_type": z.string().describe("1、openNative：打开二级页面，展现 more中descs\t\t2、openWeb：打开URL\t\t3、staticinfo：静态信息\t\t注意：\t\t不填则默认staticinfo；\t\t标准code尽量使用staticinfo，例如TELEPHONE商家电话栏位就只支持staticinfo；").optional(), "tag": z.string().describe("只有当template_style_info.column_info_layout\t的值为grid时，此参数有效。此项为宫格项标签，最多只会展示一个标签。").optional(), "title": z.string().describe("栏目标题").optional(), "value": z.string().describe("卡包详情页面，卡栏位右边展现的值\t\t\t\tTELEPHONE栏位的商家联系电话号码由此value字段传入").optional() })).describe("栏位信息").optional(),
  "field_rule_list": z.array(z.object({ "field_name": z.string().describe("模板字段规则\t字段名称(用于定义会员卡开卡接口时卡相应的参数)\t余额：Balance\t积分：Point\t等级：Level\t开卡日期：OpenDate\t过期日期：ValidDate").optional(), "rule_name": z.string().describe("规则名\t\t1、ASSIGN_FROM_REQUEST:   以rule_value为key值，表示该栏位的值从会员卡开卡接口中获取，会员卡开卡接口的card_info中获取对应参数值\t\t2、DATE_IN_FUTURE: 生成一个未来的日期（格式YYYY-MM-DD)，当选择DATE_IN_FUTURE的时候，field_name  必须是OpenDate或ValidDate， 值为(10m或10d 分别表示10个月或10天)\t\t3、CONST: 常量，会员卡开卡接口进行开卡的时候使用模板创建时候设置的值，即取rule_value的值").optional(), "rule_value": z.string().describe("规则值，根据rule_name，采取相应取值策略\t\tCONST：直接取rule_value作为卡属性值\t\tDATE_IN_FUTURE：10m或10d 分别表示10个月或10天\t\tASSIGN_FROM_REQUEST：在开卡Reuqest请求中按rule_value取值，现在和field_name对应的为（OpenDate、ValidDate、Level、Point、Balance）").optional() })).describe("\"字段规则列表，会员卡开卡过程中，会员卡信息的生成规则， 例如：卡有效期为开卡后两年内有效，则设置为：DATE_IN_FUTURE\"").optional(),
  "mdcode_notify_conf": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "open_card_conf": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "paid_outer_card_conf": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "pub_channels": z.array(z.object({ "ext_info": z.string().describe("扩展信息，无需配置").optional(), "pub_channel": z.string().describe("投放渠道类型（选择需要推广投放的渠道）\tSHOP_DETAIL：店铺详情页").optional() })).describe("卡模板投放渠道").optional(),
  "request_id": z.string().describe("请求ID，商家自定义且并保证唯一性。").optional(),
  "service_label_list": z.array(z.string()).describe("服务标签列表").optional(),
  "shop_ids": z.array(z.string()).describe("会员卡上架门店id（支付宝门店id），即发放会员卡的商家门店id").optional(),
  "spi_app_id": z.string().describe("spi应用id，为实现spi.alipay.user.opencard.get接口的app_id。若是第三方代理模式，可以设置成服务商的 APPID 或者是商家自己的 APPID；\t若不是第三方代理模式，只能设置商家自己的 APPID。").optional(),
  "template_benefit_info": z.array(z.object({ "benefit_desc": z.array(z.string()).describe("权益描述信息").optional(), "end_date": z.string().describe("权益结束时间").optional(), "start_date": z.string().describe("权益开始时间").optional(), "title": z.string().describe("权益描述").optional() })).describe("\"权益信息， 1、在卡包的卡详情页面会自动添加“会员权益”栏位，展现此字段配置的会员卡权益信息， 2、如果添加门店渠道，则可在门店页展现会员卡的权益\"").optional(),
  "template_form_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "template_style_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "write_off_type": z.string().describe("卡包详情页面中展现出的卡码（可用于扫码核销）\t\t(1) 静态码\tqrcode: 二维码，扫码得商户开卡传入的external_card_no\tbarcode: 条形码，扫码得商户开卡传入的external_card_no\t\t(2) 动态码-支付宝生成码值(动态码会在2分钟左右后过期)\tdqrcode: 动态二维码，扫码得到的码值可配合会员卡查询接口使用\tdbarcode: 动态条形码，扫码得到的码值可配合会员卡查询接口使用\t\t(3) 动态码-商家自主生成码值（码值、时效性都由商户控制）\tmdqrcode: 商户动态二维码，扫码得商户自主传入的码值\tmdbarcode: 商户动态条码，扫码得商户自主传入的码值\t如需使用商户动态码，对接详情参见 <a  href=\"https://opendocs.alipay.com/open/02y7gt\">商户动态发码</a>。").optional()
}
```

### alipay_marketing_card_template_modify

**Environment variables**



**Input schema**

```ts
{
  "access_version": z.string().describe("接口接入版本").optional(),
  "biz_no_prefix": z.string().describe("业务卡号前缀，由商户指定\t\t支付宝业务卡号生成规则：biz_no_prefix(商户指定)卡号前缀 + biz_no_suffix(实时生成）卡号后缀").optional(),
  "biz_no_suffix_len": z.string().describe("业务卡号后缀长度，与biz_no_prefix配合，扣除系统预留2位，剩下对应seq长度。在生成卡号时，若seq位数不足前置补0，若seq位数超出则以实际为准。举例：设为10，其中8位用于生成seq，可覆盖1亿用户，即使seq超过1亿，生成卡号也不报错，但总长度不得超过32位。建议按需设置合适的值，以获得长度一致的业务卡号，建议长度20，性能更好。单位：/位").optional(),
  "card_action_list": z.array(z.object({ "code": z.string().describe("行动点业务CODE，商户自定义").optional(), "mini_app_url": z.object({ "display_on_list": z.string().describe("行动点按钮是否在列表页展示，true 或 false，不填则默认false；\t\t列表页可以配置展示最多2项小程序跳转行动点。").optional(), "mini_app_id": z.string().describe("小程序appId").optional(), "mini_page_param": z.string().describe("指定小程序页面，不填则默认跳转至对应小程序首页").optional(), "mini_query_param": z.string().describe("query参数，商户自定义传参，填入值将以\"query\"为参数名提交至指定小程序页面").optional() }).optional(), "text": z.string().describe("行动点展示文案").optional(), "url": z.string().describe("行动点跳转链接，当url_type填\"url\"或不填时必填，支持http(s)和支付宝schema地址等").optional(), "url_type": z.string().describe("跳转链接类型，不填则默认为url类型：\t\turl：对应填写url参数\t\tminiAppUrl: 对应填写mini_app_url参数，跳转至指定的支付宝小程序页面").optional() })).describe("\"卡行动点配置； 行动点，即用户可点击跳转的区块，类似按钮控件的交互； 单张卡最多定制4个行动点。\"").optional(),
  "card_level_conf": z.array(z.object({ "level": z.string().describe("会员级别 该级别和开卡接口中的level要一致").optional(), "level_desc": z.string().describe("会员级别描述").optional(), "level_icon": z.string().describe("会员级别对应icon图片，\t\t会员信息预留字段，暂不在用户端展示；\t\t通过接口（alipay.offline.material.image.upload）上传图片").optional(), "level_show_name": z.string().describe("会员级别显示名称").optional() })).describe("卡级别配置").optional(),
  "card_spec_tag": z.string().describe("卡特定标签，只供特定业务使用，通常接入无需关注").optional(),
  "column_info_list": z.array(z.object({ "code": z.string().describe("标准栏位：行为由支付宝统一定，同时已经分配标准Code\t\tBALANCE：会员卡余额\t\tPOINT：积分\t\tLEVEL：等级\t\tTELEPHONE：联系方式\t\t自定义栏位：行为由商户定义，自定义Code码（只要无重复）").optional(), "group_title": z.string().describe("若template_style_info.column_info_layout\t的值为grid，此项为宫格项所属分组标题。可空。如果需要展示该项，还需支付宝内部进行特殊配置。").optional(), "icon_id": z.string().describe("当template_style_info.column_info_layout\t的值为grid时，此参数必填。此项为宫格项的展示icon。通过接口（alipay.offline.material.image.upload）上传图片。").optional(), "more_info": z.object({ "descs": z.array(z.string()).describe("描述，当operate_type为openNative必填").optional(), "params": z.string().describe("扩展参数，需要URL地址回带的值，JSON格式(openweb时填)").optional(), "title": z.string().describe("二级页面标题，只有当operate_type为openNative时有效。").optional(), "url": z.string().describe("超链接(选择openweb的时候必须填写url参数内容)").optional() }).optional(), "operate_type": z.string().describe("1、openNative：打开二级页面，展现 more中descs\t\t2、openWeb：打开URL\t\t3、staticinfo：静态信息\t\t注意：\t\t不填则默认staticinfo；\t\t标准code尽量使用staticinfo，例如TELEPHONE商家电话栏位就只支持staticinfo；").optional(), "tag": z.string().describe("只有当template_style_info.column_info_layout\t的值为grid时，此参数有效。此项为宫格项标签，最多只会展示一个标签。").optional(), "title": z.string().describe("栏目标题").optional(), "value": z.string().describe("卡包详情页面，卡栏位右边展现的值\t\t\t\tTELEPHONE栏位的商家联系电话号码由此value字段传入").optional() })).describe("栏位信息（卡包详情页面展现的栏位）").optional(),
  "field_rule_list": z.array(z.object({ "field_name": z.string().describe("模板字段规则\t字段名称(用于定义会员卡开卡接口时卡相应的参数)\t余额：Balance\t积分：Point\t等级：Level\t开卡日期：OpenDate\t过期日期：ValidDate").optional(), "rule_name": z.string().describe("规则名\t\t1、ASSIGN_FROM_REQUEST:   以rule_value为key值，表示该栏位的值从会员卡开卡接口中获取，会员卡开卡接口的card_info中获取对应参数值\t\t2、DATE_IN_FUTURE: 生成一个未来的日期（格式YYYY-MM-DD)，当选择DATE_IN_FUTURE的时候，field_name  必须是OpenDate或ValidDate， 值为(10m或10d 分别表示10个月或10天)\t\t3、CONST: 常量，会员卡开卡接口进行开卡的时候使用模板创建时候设置的值，即取rule_value的值").optional(), "rule_value": z.string().describe("规则值，根据rule_name，采取相应取值策略\t\tCONST：直接取rule_value作为卡属性值\t\tDATE_IN_FUTURE：10m或10d 分别表示10个月或10天\t\tASSIGN_FROM_REQUEST：在开卡Reuqest请求中按rule_value取值，现在和field_name对应的为（OpenDate、ValidDate、Level、Point、Balance）").optional() })).describe("\"字段规则列表，会员卡开卡过程中，会员卡信息的生成规则， 例如：卡有效期为开卡后两年内有效，则设置为：DATE_IN_FUTURE 注意：商家会员卡场景不支持修改该内容。 \"").optional(),
  "mdcode_notify_conf": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "open_card_conf": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "paid_outer_card_conf": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "pub_channels": z.array(z.object({ "ext_info": z.string().describe("扩展信息，无需配置").optional(), "pub_channel": z.string().describe("投放渠道类型（选择需要推广投放的渠道）\tSHOP_DETAIL：店铺详情页").optional() })).describe("卡模板投放渠道").optional(),
  "request_id": z.string().describe("请求 ID，商户自定义且需确保每次请求唯一。").optional(),
  "shop_ids": z.array(z.string()).describe("会员卡上架门店 id（支付宝门店id），即发放会员卡的商家门店id。不传则保持创建模板时信息。\t注意：不支持删除已有shop_id，仅支持新增。").optional(),
  "spi_app_id": z.string().describe("spi应用id，为实现spi.alipay.user.opencard.get接口的app_id。若是第三方代理模式，可以设置成服务商的 APPID 或者是商家自己的 APPID；\t若不是第三方代理模式，只能设置商家自己的 APPID。").optional(),
  "template_benefit_info": z.array(z.object({ "benefit_desc": z.array(z.string()).describe("权益描述信息").optional(), "end_date": z.string().describe("权益结束时间").optional(), "start_date": z.string().describe("权益开始时间").optional(), "title": z.string().describe("权益描述").optional() })).describe("\"权益信息， 1、在卡包的卡详情页面会自动添加权益栏位，展现会员卡特权， 2、如果添加门店渠道，则可在门店页展现会员卡的权益\"").optional(),
  "template_form_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "template_id": z.string().describe("会员卡模板id。调用alipay.marketing.card.template.create（会员卡模板创建接口）创建模板后同步返回。").optional(),
  "template_style_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "write_off_type": z.string().describe("卡包详情页面中展现出的卡码（可用于扫码核销）\t\t(1) 静态码\tqrcode: 二维码，扫码得商户开卡传入的external_card_no\tbarcode: 条形码，扫码得商户开卡传入的external_card_no\t\t(2) 动态码-支付宝生成码值(动态码会在2分钟左右后过期)\tdqrcode: 动态二维码，扫码得到的码值可配合会员卡查询接口使用\tdbarcode: 动态条形码，扫码得到的码值可配合会员卡查询接口使用\t\t(3) 动态码-商家自主生成码值（码值、时效性都由商户控制）\tmdqrcode: 商户动态二维码，扫码得商户自主传入的码值\tmdbarcode: 商户动态条码，扫码得商户自主传入的码值。\t如需使用商户动态码，请联系支付宝技术支持获取相关文档。").optional()
}
```

### alipay_marketing_card_template_query

**Environment variables**



**Input schema**

```ts
{
  "template_id": z.string().describe("会员卡模板id。调用alipay.marketing.card.template.create（会员卡模板创建接口）创建模板后同步返回。").optional()
}
```

### alipay_marketing_card_update

**Environment variables**



**Input schema**

```ts
{
  "card_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ext_info": z.string().describe("扩展信息(暂时无用)").optional(),
  "mcard_style_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_card_msg_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "notify_messages": z.array(z.object({ "change_reason": z.string().describe("用户提醒信息，按如下格式拼装，需要ISV提供change_reason。\t\t积分变动模板：{change_reason}，您的积分有变动\t\t余额变动模板：{change_reason}，您的余额有变动\t\t等级变更无需提供原因。").optional(), "ext_info": z.string().describe("JSON格式扩展信息，主要是发送消息中的变量").optional(), "message_type": z.string().describe("消息类型，每种消息都定义了固定消息模板").optional() })).describe("注意：此字段已废弃。\t卡信息变更通知消息\t1、在列表中定义的消息，才会发送给用户，消息格式一定。\t2、根据卡信息变更情况，一次可发送多个消息").optional(),
  "occur_time": z.string().describe("业务发生时间，时间格式为\"yyyy-MM-dd HH:mm:ss\"。").optional(),
  "paid_outer_card_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "target_card_no": z.string().describe("支付宝业务卡号：1、3.0（历史版本）版本来源于alipay.marketing.card.open(会员卡开卡)接口开卡后获取的 card_info.biz_card_no 值；2、极速版来源于spi.alipay.user.opencard.get(会员卡开通，获取会员卡信息)请求参数中的biz_card_no值。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型").optional()
}
```

### alipay_marketing_activity_delivery_create

**Environment variables**



**Input schema**

```ts
{
  "belong_merchant_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "delivery_base_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "delivery_booth_code": z.string().describe("投放的展位编码。").optional(),
  "delivery_config_list": z.array(z.object({ "activity_id": z.string().describe("活动id").optional(), "booth_code": z.string().describe("展位码:boothCode表达的是具体渠道所属的展位码。例如：支付结果页PAYMENT_RESULT").optional(), "channel": z.string().describe("可投放的渠道标识.").optional() })).describe("[已废弃]\t待创建的投放配置列表。\t最大数量限制20个。").optional(),
  "delivery_play_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "delivery_target_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "idem_no": z.string().describe("商品卖货推广创建幂等号，用作幂等控制。 幂等作用：请求返回与上一次相同的结果。 外部接入方需保证幂等号唯一。").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。 幂等作用：请求返回与上一次相同的结果。 外部接入方需保证业务单号唯一。").optional()
}
```

### alipay_marketing_activity_delivery_query

**Environment variables**



**Input schema**

```ts
{
  "delivery_id": z.string().describe("推广计划id"),
  "belong_merchant_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "delivery_config_list": z.array(z.object({ "activity_id": z.string().describe("活动id").optional(), "booth_code": z.string().describe("展位码:boothCode表达的是具体渠道所属的展位码。例如：支付结果页PAYMENT_RESULT").optional(), "channel": z.string().describe("可投放的渠道标识.").optional() })).describe("\"[已废弃] 待查询的投放配置列表。 最大数量限制20个。\"").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}
```

### alipay_marketing_activity_delivery_stop

**Environment variables**



**Input schema**

```ts
{
  "delivery_id": z.string().describe("推广计划id"),
  "belong_merchant_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "delivery_config_list": z.array(z.object({ "activity_id": z.string().describe("活动id").optional(), "booth_code": z.string().describe("展位码:boothCode表达的是具体渠道所属的展位码。例如：支付结果页PAYMENT_RESULT").optional(), "channel": z.string().describe("可投放的渠道标识.").optional() })).describe("\"[已废弃] 待停止的投放配置列表。 最大数量限制20个。\"").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。 幂等作用： 再次请求返回与上一次相同的结果。 外部接入方需保证业务单号唯一。").optional()
}
```

### alipay_marketing_material_create

**Environment variables**



**Input schema**

```ts
{
  "material_fields": z.array(z.object({ "field_name": z.string().describe("素材字段名称，来源于素材规范定义的字段名称。注意一次素材提报中字段名称不能重复。").optional(), "field_value": z.array(z.string()).describe("素材字段值，素材字段提报的实际值，支持多值，具体的要求请查看素材规范或对应的产品文档。").optional() })).describe("素材字段列表，素材提报的具体内容，包含三种类型：图片、文本、链接。图片类型，则根据“图片资源上传接口”中返回的resource_id字段值进行素材字段的设值。文本或链接类型，则按照实际需要设值即可，需满足具体的规范要求。规范要求详情请参见产品文档。").optional(),
  "material_name": z.string().describe("素材名称，接入方自行生成，建议命名时遵循一定的规律以方便管理。").optional(),
  "material_spec_id": z.string().describe("素材规范ID，用于标识具体场景下的素材规范，根据具体的使用场景获取对应的素材规范ID。").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制，相同单号会返回上一次的结果，接入方需保证单号唯一。").optional()
}
```

### alipay_marketing_material_image_upload

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_marketing_activity_ordervoucher_create

**Environment variables**



**Input schema**

```ts
{
  "activity_base_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "activity_name": z.string().describe("活动名称。不对用户进行展示，仅供商家在后台管理活动使用。").optional(),
  "belong_merchant_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_tag": z.string().describe("该字段废弃！后续不要使用该字段！商家券业务标签，影响商家券对C端用户的展示形式。").optional(),
  "code_mode": z.string().describe("码模式。MERCHANT_UPLOAD：商户上传自定义code，发券时系统随机选取上传的券code发放。MERCHANT_API：发奖时指定券码发奖，此模式无须提前上传券码。").optional(),
  "customer_guide": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t幂等作用：参数不变的情况下，再次请求返回与上一次相同的结果。").optional(),
  "publish_end_time": z.string().describe("券发放结束时间。格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "publish_start_time": z.string().describe("券发放开始时间。格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "voucher_available_scope_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_customer_guide_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_deduct_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_display_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_display_pattern_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_send_mode_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_send_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_type": z.string().describe("券类型。\t兑换券仅支持一类券类型：EXCHANGE_VOUCHER: 兑换券；").optional(),
  "voucher_use_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_use_rule_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_activity_ordervoucher_modify

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id1"),
  "activity_base_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "activity_name": z.string().describe("活动名称。").optional(),
  "customer_guide": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。").optional(),
  "publish_end_time": z.string().describe("券发放结束时间。该值为空表示不修改\t格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "publish_start_time": z.string().describe("券发放开始时间。 格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "voucher_available_scope_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_available_scope_modify_type": z.string().describe("可用范围修改类型。").optional(),
  "voucher_customer_guide_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_display_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_display_pattern_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_send_mode_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_send_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_use_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "voucher_use_rule_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_activity_ordervoucher_append

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional(),
  "voucher_quantity": z.number().int().describe("发行券的数量。\t\t限制：\t券总预算<= 999999\t\t特别说明：\t该字段的含义是追加到的数量。\t不可减少，只能增加。\t\tcode_mode=\tMERCHANT_UPLOAD 的情况下，voucher_quantity 需要与导入码的总数量保持一致（即历史导入数量 + 追加导入数量）。").optional()
}
```

### alipay_marketing_activity_ordervoucher_stop

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional()
}
```

### alipay_marketing_activity_ordervoucher_codecount

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}
```

### alipay_marketing_activity_ordervoucher_codedeposit

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional(),
  "voucher_codes": z.array(z.string()).describe("券码的数量列表。接口参数为列表类型。\t\t限制：\t目前最大上传 1000 个。\t\t单个code最长64位。\t\t商户上传的券code列表，code允许包含的字符有0-9、a-z、A-Z、-、_、+、=、|。").optional()
}
```

### alipay_marketing_activity_ordervoucher_refund

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "voucher_code": z.string().describe("已核销待退券的券码"),
  "biz_dt": z.string().describe("当前订单的退券时间。\t\t\t\t格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t\t\t幂等作用：\t\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t\t\t外部接入方需保证业务单号唯一").optional(),
  "total_fee": z.string().describe("当前订单的退款总金额(包含优惠券金额)，单位为元。").optional(),
  "voucher_refund_detail_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_activity_ordervoucher_use

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("活动id"),
  "voucher_code": z.string().describe("待核销的券码。"),
  "biz_dt": z.string().describe("外部优惠券的核销时间，用于流水记录。 格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "goods_detail": z.array(z.object({ "goods_id": z.string().describe("商品编号").optional(), "goods_name": z.string().describe("商品名称").optional(), "price": z.string().describe("商品单价。单位 元\t\t精确到小数点后2位。").optional(), "quantity": z.number().int().describe("商品数量").optional() })).describe("商品明细信息").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t\t\t幂等作用：\t\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t\t\t外部接入方需保证业务单号唯一。").optional(),
  "real_shop_id": z.string().describe("用户核销优惠券的代运营商业关系门店id，调用接口alipay.business.relation.shop.create创建门店返回的real_shop_id。\t限制:\t传入的门店id必须是创建商家券voucher_use_rule. voucher_available_scope.  order_voucher_available_shop对象中real_shop_ids中的门店id").optional(),
  "store_id": z.string().describe("用户核销优惠券的支付门店id,调用接口<a href=\"https://opendocs.alipay.com/open/03s3jk?pathHash=04312530&scene=common\" target=\"_blank\">ant.merchant.expand.shop.create</a>创建门店返回的门店id。\t限制:\t传入的门店id必须是创建商家券voucher_use_rule. voucher_available_scope.  order_voucher_available_shop对象中shop_ids中的门店id").optional(),
  "total_fee": z.string().describe("订单总金额").optional(),
  "trade_channel": z.string().describe("交易渠道。").optional(),
  "trade_no": z.string().describe("该交易在支付宝系统中的交易流水号。\t注意：若用户使用支付宝为交易的渠道，本参数必填。").optional(),
  "voucher_use_detail_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_marketing_recruit_enroll_close

**Environment variables**



**Input schema**

```ts
{
  "enroll_id": z.string().describe("活动报名ID").optional()
}
```

### alipay_marketing_recruit_enroll_create

**Environment variables**



**Input schema**

```ts
{
  "enroll_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "enroll_scene_type": z.string().describe("活动报名场景配置。\t枚举值：\tVOUCHER：券报名场景的报名；\tMINI_APP：小程序报名场景的报名；").optional(),
  "out_biz_no": z.string().describe("外部操作流水号。由商家/ISV 自定义，仅支持字母、数字、下划线且需保证每次操作唯一。").optional(),
  "plan_id": z.string().describe("要报名的招商方案ID").optional()
}
```

### alipay_marketing_recruit_enroll_query

**Environment variables**



**Input schema**

```ts
{
  "out_biz_no": z.string().describe("外部操作流水号，创建招商报名时传入。由商家/ISV 自定义，仅支持字母、数字、下划线且需保证每次操作唯一。").optional(),
  "enroll_id": z.string().describe("报名ID，此参数和out_biz_no至少传一个，优先取enroll_id").optional()
}
```

### alipay_marketing_recruit_plan_query

**Environment variables**



**Input schema**

```ts
{
  "enroll_merchant": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "plan_id": z.string().describe("招商方案ID").optional()
}
```

### alipay_marketing_recruit_planlist_query

**Environment variables**



**Input schema**

```ts
{
  "enroll_merchant": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "enroll_scene_type": z.string().describe("活动报名场景配置。 \t枚举值：\tVOUCHER：券报名场景查询；\tMINI_APP：小程序报名场景查询；\tVOUCHER,MINI_APP：同时进行券报名场景和小程序报名场景的查询；").optional(),
  "page_num": z.number().int().describe("第几页，默认1（需要在1和999之间）").optional(),
  "page_size": z.number().int().describe("每页记录条数，默认20，需要在1和100之间").optional()
}
```

### alipay_merchant_anchor_info_query

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "public_id": z.string().describe("生活号ID").optional()
}
```

### alipay_merchant_image_upload

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_merchant_indirect_authorder_close

**Environment variables**



**Input schema**

```ts
{
  "order_no": z.string().describe("意愿申请单号，参数二选一").optional(),
  "out_biz_no": z.string().describe("外部业务号，参数二选一，业务自定义，保证唯一").optional()
}
```

### alipay_merchant_indirect_authorder_create

**Environment variables**



**Input schema**

```ts
{
  "auth_identity_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "benefit_person_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "contact_person_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "extra_credentials": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "legal_person_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "out_biz_no": z.string().describe("外部业务号。支持out_biz_no和outBizNo两种格式").optional(),
  "source": z.string().describe("1. 收单机构调用API提交申请单时，可选择是否指定单个服务商范围。非收单机构无需填写此字段。\t2. 此字段填写单个服务商pid信息：填写（即：单服务商提交认证方式），查询申请单返回的认证二维码qr_code和填写服务商对应，仅能认证填写服务商下的商户；不填写（即：全服务商提交认证方式），查询申请单返回的认证二维码qr_code和收单机构对应，可认证收单机构下全部商户。").optional()
}
```

### alipay_merchant_indirect_authorder_querystatus

**Environment variables**



**Input schema**

```ts
{
  "order_no": z.string().describe("商家认证申请单号，参数二选一").optional(),
  "out_biz_no": z.string().describe("外部业务号，参数二选一，业务自定义，保证唯一").optional(),
  "source": z.string().describe("1. 收单机构调用API提交申请单时，可选择是否指定单个服务商范围。非收单机构无需填写此字段。\t2. 此字段填写单个服务商pid信息：填写（即：单服务商提交认证方式），查询申请单返回的认证二维码qr_code和填写服务商对应，仅能认证填写服务商下的商户；不填写（即：全服务商提交认证方式），查询申请单返回的认证二维码qr_code和收单机构对应，可认证收单机构下全部商户。").optional()
}
```

### alipay_merchant_indirect_smidbind_query

**Environment variables**



**Input schema**

```ts
{
  "sub_merchant_id": z.string().describe("支付宝商户id").optional()
}
```

### alipay_merchant_iot_device_bind

**Environment variables**



**Input schema**

```ts
{
  "biz_tid": z.string().describe("设备 ID ，仅device_id_type 为 ID 时填写。").optional(),
  "device_id_type": z.string().describe("可选方式。枚举支持：\t*  ID：表示使用 biztid 作为设备唯一识别标识，\t*  SN：表示使用 supplier_id、device_sn联合作为设备唯一识别标识。\t注意：由于不同机型的supplier_id不同，推荐使用 ID 。").optional(),
  "device_sn": z.string().describe("设备序列号 ，device_id_type 为 SN 时填写。需配合supplier_id使用。").optional(),
  "merchant_type": z.string().describe("商户类型。枚举支持：\t*  direct：直连商户；\t*  indirect：间连商户。").optional(),
  "pid": z.string().describe("直连场景填写商户收单pid。间连场景填写smid绑定的pid（可通过代运营授权API获取）。").optional(),
  "shop_id": z.string().describe("商户pid名下的门店 ID。可通过门店管理API获取，需注意请勿使用smid创建门店 ID。").optional(),
  "smid": z.string().describe("直连场景不填，间连场景填写商户收单smid").optional(),
  "supplier_id": z.string().describe("设备供应商ID ，device_id_type 为 SN 时填写。需注意不同机型的供应商ID可能不同。").optional()
}
```

### alipay_merchant_iot_device_query

**Environment variables**



**Input schema**

```ts
{
  "device_id_type": z.string().describe("可选方式 [ID,SN]。ID-使用biztid作为设备唯一识别标识；SN-使用supplier_id、device_sn联合作为设备唯一识别标识。由于不同机型的supplier_id不同，推荐使用 ID 。").optional(),
  "biz_tid": z.string().describe("设备 ID ，device_id_type 为 ID 时填写。").optional(),
  "supplier_id": z.string().describe("设备供应商ID ，device_id_type 为 SN 时填写。需注意不同机型的供应商ID可能不同。").optional(),
  "device_sn": z.string().describe("设备序列号 ，device_id_type 为 SN 时填写。需配合supplier_id使用。").optional()
}
```

### alipay_merchant_iot_device_verify

**Environment variables**



**Input schema**

```ts
{
  "biz_tid": z.string().describe("设备 ID ，device_id_type 为 ID 时填写。").optional(),
  "device_id_type": z.string().describe("可选方式 [ID,SN]。ID-使用biztid作为设备唯一识别标识；SN-使用supplier_id、device_sn联合作为设备唯一识别标识。由于不同机型的supplier_id不同，推荐使用 ID 。").optional(),
  "device_sn": z.string().describe("设备序列号 ，device_id_type 为 SN 时填写。需配合supplier_id使用。").optional(),
  "merchant_type": z.string().describe("商户类型，直连商户填写direct，间连商户填写indirect").optional(),
  "pid": z.string().describe("直连场景填写商户收单pid，间连场景不填").optional(),
  "smid": z.string().describe("直连场景不填，间连场景填写商户收单smid").optional(),
  "supplier_id": z.string().describe("设备供应商ID ，device_id_type 为 SN 时填写。需注意不同机型的供应商ID可能不同。").optional()
}
```

### alipay_merchant_item_file_upload

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_merchant_live_channel_query

**Environment variables**



**Input schema**

```ts
{
  "secret": z.string().describe("渠道下单参数(orderStartId)").optional()
}
```

### alipay_merchant_live_itemplan_modify

**Environment variables**



**Input schema**

```ts
{
  "content": z.array(z.object({ "codes": z.array(z.string()).describe("对应服务库编码").optional(), "type": z.string().describe("条目类型，必须， 商品：ITEM").optional() })).describe("投放内容，数组，内容为具体条目").optional(),
  "end_time": z.string().describe("可空，计划截止时间").optional(),
  "op_type": z.string().describe("针对投放内容的操作， 包含3种类型：\t覆盖:OVERRIDE \t追加:APPEND \t删除:DELETE").optional(),
  "operator_appid": z.string().describe("投放方标识，一般为小程序id").optional(),
  "operator_type": z.string().describe("投放方类型，生活号：LIFE_APP 达人：CONTENT_USER 小程序：TINYAPP").optional(),
  "plan_name": z.string().describe("投放计划名，可空").optional(),
  "start_time": z.string().describe("可空，计划生效时间").optional(),
  "status": z.number().int().describe("计划状态 0待生效 1生效中 -1已作废").optional(),
  "target_id": z.string().describe("投放目标，一般为生活号id，多个逗号隔开").optional(),
  "target_range": z.string().describe("投放范围， 指主体内的具体子渠道，为空则任意子渠道").optional(),
  "target_type": z.string().describe("投放目标类型\t生活号：LIFE_APP \t达人：CONTENT_USER \t小程序:TINYAPP").optional()
}
```

### alipay_merchant_order_sync

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("订单总金额：某笔交易订单优惠前的总金额，单位为【元】</br>\t<a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*UuuWRpmekegAAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例一</a>\t<br><a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*kBkOTZpqP40AAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例二</a>\t<br><a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*ZpkjTJQlFVAAAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例三</a>").optional(),
  "buyer_id": z.string().describe("买家userId").optional(),
  "buyer_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "buyer_open_id": z.string().describe("用户open_id").optional(),
  "category_id": z.string().describe("标准服务类目").optional(),
  "discount_amount": z.string().describe("商户总计优惠金额：代表商户侧给予用户的总计优惠金额 （不包含选择支付宝付款时，支付宝给予的优惠减免金额），单位为【元】。</br>\t<a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*UuuWRpmekegAAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例一</a>\t<br><a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*kBkOTZpqP40AAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例二</a>\t<br><a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*ZpkjTJQlFVAAAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例三</a>").optional(),
  "discount_info_list": z.array(z.object({ "discount_amount": z.string().describe("优惠金额").optional(), "discount_name": z.string().describe("优惠名称").optional(), "discount_page_link": z.string().describe("优惠跳转链接地址").optional(), "discount_quantity": z.number().int().describe("优惠数量").optional(), "external_discount_id": z.string().describe("外部优惠id").optional() })).describe("订单优惠信息").optional(),
  "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息，请参见 <a href=\"https://opendocs.alipay.com/mini/04zsxt?pathHash=654d4f10\">小程序订单中心模板</a>").optional(),
  "item_order_list": z.array(z.object({ "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息，请参见产品文档。小程序订单助手业务中，扩展参数必须传递素材id；其他业务场景参见对应的产品文档。").optional(), "item_id": z.string().describe("商品ID").optional(), "item_name": z.string().describe("商品名称").optional(), "quantity": z.number().int().describe("商品数量（单位：自拟）").optional(), "sku_id": z.string().describe("商品 sku id").optional(), "status": z.string().describe("商品状态枚举").optional(), "status_desc": z.string().describe("商品状态描述，默认无需传入，如需使用请联系业务负责人").optional(), "unit": z.string().describe("商品规格").optional(), "unit_price": z.string().describe("商品单价（单位：元）").optional() })).describe("商品信息列表").optional(),
  "journey_order_list": z.array(z.object({ "action": z.string().describe("操作动作").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "journey_create_time": z.string().describe("行程创建时间").optional(), "journey_desc": z.string().describe("行程描述").optional(), "journey_elements": z.array(z.object({ "arrival": z.object({ "aoi_id": z.string().describe("支付宝域内aoiId").optional(), "city": z.string().describe("城市名").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "location_id": z.string().describe("支付宝侧地点id").optional(), "location_id_type": z.string().describe("地点id类型").optional(), "merchant_division_id": z.string().describe("商户侧行政区划代码").optional(), "merchant_id": z.string().describe("(废弃)商户侧地点id").optional(), "merchant_poi": z.string().describe("商户侧poi信息").optional(), "name": z.string().describe("地点名称").optional(), "poi_id": z.string().describe("支付宝域内poiId").optional() }).optional(), "departure": z.object({ "aoi_id": z.string().describe("支付宝域内aoiId").optional(), "city": z.string().describe("城市名").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "location_id": z.string().describe("支付宝侧地点id").optional(), "location_id_type": z.string().describe("地点id类型").optional(), "merchant_division_id": z.string().describe("商户侧行政区划代码").optional(), "merchant_id": z.string().describe("(废弃)商户侧地点id").optional(), "merchant_poi": z.string().describe("商户侧poi信息").optional(), "name": z.string().describe("地点名称").optional(), "poi_id": z.string().describe("支付宝域内poiId").optional() }).optional(), "duration": z.string().describe("行程时长").optional(), "end_time": z.string().describe("结束时间").optional(), "end_time_desc": z.string().describe("结束时间描述（非结构化）").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "functional_services": z.array(z.object({ "content": z.string().describe("功能内容").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "function_code": z.string().describe("功能码\t支持的功能码请与产品或对应技术确认").optional(), "function_name": z.string().describe("功能名称").optional(), "function_type": z.string().describe("功能类型").optional(), "function_url": z.string().describe("功能入口").optional(), "memo": z.string().describe("备注信息").optional() })).describe("功能服务列表").optional(), "passagers": z.array(z.object({ "cert_no": z.string().describe("证件号").optional(), "cert_type": z.string().describe("证件类型。").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "mobile": z.string().describe("手机号").optional(), "name": z.string().describe("姓名").optional(), "open_id": z.string().describe("支付宝用户openId").optional(), "user_id": z.string().describe("支付宝用户ID，可以通过支付结果通知、用户授权等渠道获取").optional() })).describe("出行人").optional(), "service_change_info": z.object({ "change_status": z.string().describe("变更状态").optional(), "detail_url": z.string().describe("详情url").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "remind_content": z.string().describe("提醒内容").optional() }).optional(), "service_provider": z.object({ "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "logo": z.string().describe("商户logo链接").optional(), "name": z.string().describe("商家名称").optional(), "short_name": z.string().describe("商家简称").optional() }).optional(), "start_time": z.string().describe("开始时间").optional(), "start_time_desc": z.string().describe("开始时间描述（非结构化）").optional() })).describe("行程元素列表").optional(), "journey_index": z.string().describe("描述本行程为整个行程中的第几程").optional(), "journey_modify_time": z.string().describe("行程修改时间").optional(), "merchant_journey_no": z.string().describe("商户行程单号").optional(), "status": z.string().describe("行程状态").optional(), "status_desc": z.string().describe("行程状态描述").optional(), "sub_type": z.string().describe("行程子类型").optional(), "title": z.string().describe("行程标题").optional(), "type": z.string().describe("行程类型").optional() })).describe("行程信息").optional(),
  "logistics_info_list": z.array(z.object({ "logistics_code": z.string().describe("物流公司编号。物流公司编号值请查看<a href=\"https://opendocs.alipay.com/mini/00au7e?highlight_field=logistics_code\" target=\"_blank\">产品文档</a>").optional(), "phone_no": z.string().describe("手机号后四位").optional(), "tracking_no": z.string().describe("物流单号").optional() })).describe("物流信息列表").optional(),
  "order_create_time": z.string().describe("订单创建时间").optional(),
  "order_modified_time": z.string().describe("订单修改时间").optional(),
  "order_pay_time": z.string().describe("订单支付时间").optional(),
  "order_type": z.string().describe("订单类型").optional(),
  "out_biz_no": z.string().describe("外部订单号\tout_biz_no唯一对应一笔订单，相同的订单需传入相同的out_biz_no").optional(),
  "pay_amount": z.string().describe("用户应付金额 ：用户最终结算时需要支付金额（不包含选择支付宝付款时，支付宝给予的优惠减免金额），单位为【元】</br>\t<a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*UuuWRpmekegAAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例一</a>\t<br><a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*kBkOTZpqP40AAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例二</a>\t<br><a href=\"https://mdn.alipayobjects.com/portal_ykdvdu/afts/img/A*ZpkjTJQlFVAAAAAAAAAAAAAAAQAAAQ/original\" target=\"_blank\">实际案例三</a>").optional(),
  "pay_timeout_express": z.string().describe("支付超时时间，超过时间支付宝自行关闭订单").optional(),
  "send_msg": z.string().describe("是否需要小程序订单代理发送模版消息。不传默认不发送").optional(),
  "service_code": z.string().describe("服务code：传入小程序后台提报的服务id，将订单与服务关联，有利于提高服务曝光机会；入参服务id的类目须与订单类型相符，若不相符将会报错；如订单类型为“外卖”，则入参的服务ID所对应的服务类目也必须得是”外卖“；service_code 通过 <a href=\"https://opendocs.alipay.com/mini/e1c835a1_alipay.open.app.service.apply\" target=\"_blank\">alipay.open.app.service.apply</a> ，(服务提报申请)接口创建服务后获取。").optional(),
  "shop_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "source_app": z.string().describe("用于区分用户下单的订单来源").optional(),
  "sync_content": z.string().describe("同步内容").optional(),
  "ticket_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ticket_order_list": z.array(z.object({ "arrival": z.object({ "aoi_id": z.string().describe("支付宝域内aoiId").optional(), "city": z.string().describe("城市名").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "location_id": z.string().describe("支付宝侧地点id").optional(), "location_id_type": z.string().describe("地点id类型").optional(), "merchant_division_id": z.string().describe("商户侧行政区划代码").optional(), "merchant_id": z.string().describe("(废弃)商户侧地点id").optional(), "merchant_poi": z.string().describe("商户侧poi信息").optional(), "name": z.string().describe("地点名称").optional(), "poi_id": z.string().describe("支付宝域内poiId").optional() }).optional(), "content": z.string().describe("凭证内容").optional(), "departure": z.object({ "aoi_id": z.string().describe("支付宝域内aoiId").optional(), "city": z.string().describe("城市名").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "location_id": z.string().describe("支付宝侧地点id").optional(), "location_id_type": z.string().describe("地点id类型").optional(), "merchant_division_id": z.string().describe("商户侧行政区划代码").optional(), "merchant_id": z.string().describe("(废弃)商户侧地点id").optional(), "merchant_poi": z.string().describe("商户侧poi信息").optional(), "name": z.string().describe("地点名称").optional(), "poi_id": z.string().describe("支付宝域内poiId").optional() }).optional(), "effective_num": z.number().int().describe("凭证有效数").optional(), "end_time": z.string().describe("凭证结束时间").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "face_value": z.string().describe("票面价").optional(), "functional_services": z.array(z.object({ "content": z.string().describe("功能内容").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "function_code": z.string().describe("功能码\t支持的功能码请与产品或对应技术确认").optional(), "function_name": z.string().describe("功能名称").optional(), "function_type": z.string().describe("功能类型").optional(), "function_url": z.string().describe("功能入口").optional(), "memo": z.string().describe("备注信息").optional() })).describe("功能服务信息").optional(), "invalid_reason": z.string().describe("凭证失效原因").optional(), "locations": z.array(z.object({ "aoi_id": z.string().describe("支付宝域内aoiId").optional(), "city": z.string().describe("城市名").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "location_id": z.string().describe("支付宝侧地点id").optional(), "location_id_type": z.string().describe("地点id类型").optional(), "merchant_division_id": z.string().describe("商户侧行政区划代码").optional(), "merchant_id": z.string().describe("(废弃)商户侧地点id").optional(), "merchant_poi": z.string().describe("商户侧poi信息").optional(), "name": z.string().describe("地点名称").optional(), "poi_id": z.string().describe("支付宝域内poiId").optional() })).describe("凭证可使用地点").optional(), "merchant_ticket_no": z.string().describe("商户侧凭证ID或核销码").optional(), "seat_infos": z.array(z.object({ "seat_class": z.string().describe("座位等级").optional(), "seat_no": z.string().describe("座位号").optional() })).describe("座位信息").optional(), "service_provider": z.object({ "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "logo_material_id": z.string().describe("参与方logo素材id\t开发者通过 alipay.merchant.item.file.upload(商品文件上传接口)上传图片，获取到对应的素材 ID( material_id )").optional(), "name": z.string().describe("参与方名称").optional(), "short_name": z.string().describe("参与方简称").optional(), "type": z.string().describe("参与方类型").optional(), "uid": z.string().describe("参与方支付宝uid").optional() }).optional(), "shops": z.array(z.object({ "address": z.string().describe("店铺地址").optional(), "alipay_shop_id": z.string().describe("蚂蚁门店shop_id").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("门店其他业务属性，不同业务场景KEY枚举值不同，使用前请参考产品文档").optional(), "merchant_shop_id": z.string().describe("商户门店id\t支持英文、数字的组合").optional(), "merchant_shop_link_page": z.string().describe("店铺详情链接地址").optional(), "name": z.string().describe("店铺名称").optional(), "phone_num": z.string().describe("联系电话-支持固话或手机号 仅支持数字、+、- 。例如 手机：1380***1111、固话：021-888**888").optional(), "type": z.string().describe("仅当alipay_shop_id字段值为非标准蚂蚁门店时使用，其他场景无需传入").optional() })).describe("凭证可使用门店列表").optional(), "start_time": z.string().describe("凭证开始时间").optional(), "status": z.string().describe("凭证状态").optional(), "ticket_create_time": z.string().describe("凭证创建时间").optional(), "ticket_modify_time": z.string().describe("凭证修改时间").optional(), "ticket_num": z.number().int().describe("凭证购买数").optional(), "ticket_users": z.array(z.object({ "cert_no": z.string().describe("证件号").optional(), "cert_type": z.string().describe("证件类型。").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(), "mobile": z.string().describe("手机号").optional(), "name": z.string().describe("姓名").optional(), "open_id": z.string().describe("支付宝用户openId").optional(), "user_id": z.string().describe("支付宝用户ID，可以通过支付结果通知、用户授权等渠道获取").optional() })).describe("凭证使用者信息").optional(), "title": z.string().describe("凭证标题").optional(), "vehicle_info": z.object({ "license_plate_no": z.string().describe("交通工具牌照号，如车牌号等").optional(), "memo": z.string().describe("备注信息").optional(), "shift_no": z.string().describe("班次").optional() }).optional() })).describe("凭证信息").optional(),
  "trade_no": z.string().describe("订单所对应的支付宝交易号").optional(),
  "trade_type": z.string().describe("交易号类型").optional()
}
```

### alipay_merchant_tradecomplain_batchquery

**Environment variables**



**Input schema**

```ts
{
  "begin_time": z.string().describe("查询开始时间\t时间格式：yyyy-MM-dd HH:mm:ss\t若不填写，则默认当前时间30天前。\t注意：begin_time和end_time时间跨度最大一年").optional(),
  "end_time": z.string().describe("查询结束时间\t时间格式：yyyy-MM-dd HH:mm:ss\t若不填写，则默认当前时间。\t注意：begin_time和end_time时间跨度最大一年").optional(),
  "page_num": z.number().int().describe("当前页，从1开始").optional(),
  "page_size": z.number().int().describe("每页条数，默认10条，最多支持20条").optional(),
  "status": z.string().describe("状态如下\t待处理：MERCHANT_PROCESSING \t已处理：MERCHANT_FEEDBACKED \t投诉完结：FINISHED \t投诉关闭：CANCELLED \t客服处理中：PLATFORM_PROCESSING \t客服处理完结：PLATFORM_FINISH \t投诉关闭：CLOSED").optional(),
  "target_infos": z.array(z.object({ "target_id": z.string().describe("应用id，例如小程序id").optional(), "target_type": z.string().describe("应用类型\t小程序传入：APPID\t生活号传入：PUBLICID").optional() })).describe("应用信息").optional()
}
```

### alipay_merchant_tradecomplain_feedback_submit

**Environment variables**



**Input schema**

```ts
{
  "complain_event_id": z.string().describe("支付宝侧投诉单号").optional(),
  "feedback_code": z.string().describe("反馈类目ID\t00:使用体验保障金退款；\t02:通过其他方式退款;\t03:已发货;\t04:其他;\t05:已完成售后服务;\t06:非我方责任范围；").optional(),
  "feedback_content": z.string().describe("反馈内容，字数不超过200个字").optional(),
  "feedback_images": z.string().describe("商家处理投诉时反馈凭证的图片id，多个逗号隔开（图片id可以通过\"商户上传处理图片\"接口获取）").optional(),
  "operator": z.string().describe("处理投诉人，字数不超过6个字").optional()
}
```

### alipay_merchant_tradecomplain_reply_submit

**Environment variables**



**Input schema**

```ts
{
  "complain_event_id": z.string().describe("支付宝侧投诉单号").optional(),
  "reply_content": z.string().describe("回复留言内容").optional(),
  "reply_images": z.string().describe("商家处理问题反馈时的回复凭证的图片id，多个逗号隔开（图片id可以通过\"商户上传处理图片\"接口获取）").optional()
}
```

### alipay_merchant_tradecomplain_supplement_submit

**Environment variables**



**Input schema**

```ts
{
  "complain_event_id": z.string().describe("支付宝侧投诉单号").optional(),
  "supplement_content": z.string().describe("回复内容，最多不超过200个字").optional(),
  "supplement_images": z.string().describe("商家补充凭证时的图片id，多个逗号隔开（图片id可以通过\"商户上传处理图片\"接口获取）").optional()
}
```

### alipay_merchant_tradecomplain_query

**Environment variables**



**Input schema**

```ts
{
  "complain_event_id": z.string().describe("支付宝侧投诉单号")
}
```

### alipay_mobile_public_follow_list

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("当nextUserId为空时,代表查询第一组,如果有值时以当前值为准查询下一组\r\t<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.eZqycg&treeId=53&articleId=103525&docType=1\">详情请见</a>").optional()
}
```

### alipay_mobile_public_info_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_mobile_public_menu_add

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("json串，<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.1l7WMo&treeId=53&articleId=103480&docType=1\">详情请见</a>").optional()
}
```

### alipay_mobile_public_menu_get

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_mobile_public_menu_update

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("json串，<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.1l7WMo&treeId=53&articleId=103481&docType=1\">详情请见</a>").optional()
}
```

### alipay_mobile_public_message_custom_send

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("业务内容，其中包括消息类型msgType、消息体和消息接受人toUserId三大块，在toUserId这一层级新加eventType参数，该字段取值为follow:表示关注事件，click：表示菜单点击事件，enter_ppchat:代表进入事件。具体参见“表1-2 服务窗单发客服消息的biz_content参数说明”。\r\t<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.eZqycg&treeId=53&articleId=103448&docType=1\">详情请见</a>").optional()
}
```

### alipay_mobile_public_message_single_send

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("业务内容，其中包括模板template和消息接收人toUserId两大块，具体参见“表1-2 服务窗单发模板消息的biz_content参数说明”。\r\t<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.eZqycg&treeId=53&articleId=103463&docType=1\">详情请见</a>").optional()
}
```

### alipay_mobile_public_message_total_send

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("业务内容，其中包括消息类型msgType和消息体两部分，具体参见“表1-2 服务窗群发消息的biz_content参数说明”。").optional()
}
```

### alipay_mobile_public_qrcode_create

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("json串，<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.1l7WMo&treeId=53&articleId=103490&docType=1\">详情请见</a>").optional()
}
```

### alipay_mobile_public_shortlink_create

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("json串，<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.pGdb8h&treeId=53&articleId=103491&docType=1\">详情请见</a>").optional()
}
```

### alipay_mobile_public_template_message_delete

**Environment variables**



**Input schema**

```ts
{
  "template_id": z.string().describe("模板id").optional()
}
```

### alipay_mobile_public_template_message_get

**Environment variables**



**Input schema**

```ts
{
  "template_id": z.string().describe("消息母板id").optional()
}
```

### alipay_mobile_public_template_message_query

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "template": z.string().describe("模板").optional(),
  "template_id": z.string().describe("模板id").optional()
}
```

### alipay_mobile_std_public_message_custom_send

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("业务内容，其中包括消息类型msgType、消息体和消息接受人toUserId三大块，具体参见“表1-2 服务窗单发客服消息的biz_content参数说明”。").optional()
}
```

### alipay_offline_market_applyorder_batchquery

**Environment variables**



**Input schema**

```ts
{
  "action": z.string().describe("操作动作").optional(),
  "apply_ids": z.array(z.string()).describe("支付宝流水ID列表，最大不超过100个").optional(),
  "biz_id": z.string().describe("业务主体ID。根据biz_type不同可能对应shop_id或item_id。").optional(),
  "biz_type": z.string().describe("业务类型：SHOP-店铺，ITEM-商品。").optional(),
  "end_time": z.string().describe("查询的流水创建时间最后值。格式：yyyy-MM-dd HH:mm:ss").optional(),
  "op_id": z.string().describe("操作用户的支付账号id").optional(),
  "op_role": z.string().describe("系统集成商统一传入ISV").optional(),
  "page_no": z.number().int().describe("页码，留空标示第一页，默认20个结果为一页").optional(),
  "page_size": z.number().int().describe("每页记录数。默认20，最大100。").optional(),
  "request_ids": z.array(z.string()).describe("请求ID列表，最大不超过100个。\r\t注意：暂时不支持此字段查询。").optional(),
  "start_time": z.string().describe("查询的流水创建时间起始值，只能查询近3个月数据。格式：yyyy-MM-dd HH:mm:ss").optional(),
  "status": z.string().describe("流水状态：INIT-初始，PROCESS-处理中，SUCCESS-成功，FAIL-失败。").optional()
}
```

### alipay_offline_market_shop_batchquery

**Environment variables**



**Input schema**

```ts
{
  "biz_channel": z.string().describe("表示接口查询门店的业务渠道限制：ALL、 POS、不传。不传代表只查询普通门店，传入POS代表只查询简易门店，传入ALL代表查询普通门店和简易门店。").optional(),
  "page_no": z.string().describe("页码，第一页传入\"1\"，默认500个结果为一页。此参数必须是大于0的正整数，为0时将查询报错。").optional()
}
```

### alipay_offline_market_shop_category_query

**Environment variables**



**Input schema**

```ts
{
  "category_id": z.string().describe("类目ID，如果为空则查询全部类目。").optional(),
  "op_role": z.string().describe("表示接口业务的调用方身份,默认不填标识为ISV。").optional()
}
```

### alipay_offline_market_shop_create

**Environment variables**



**Input schema**

```ts
{
  "address": z.string().describe("门店详细地址，地址字符长度在4-50个字符，注：不含省市区。门店详细地址按规范格式填写地址，以免影响门店搜索及活动报名：例1：道路+门牌号，“人民东路18号”；例2：道路+门牌号+标志性建筑+楼层，“四川北路1552号欢乐广场1楼”。").optional(),
  "audit_images": z.string().describe("门店审核时需要的图片；至少包含一张门头照片，两张内景照片，必须反映真实的门店情况，审核才能够通过；多个图片之间以英文逗号分隔。").optional(),
  "auth_letter": z.string().describe("门店授权函,营业执照与签约账号主体不一致时需要。").optional(),
  "biz_version": z.string().describe("店铺接口业务版本号，新接入的ISV，请统一传入2.0。").optional(),
  "box": z.string().describe("门店是否有包厢，T表示有，F表示没有，不传在客户端不作展示。").optional(),
  "branch_shop_name": z.string().describe("分店名称，比如：万塘路店，与主门店名合并在客户端显示为：肯德基(万塘路店)。").optional(),
  "brand_logo": z.string().describe("品牌LOGO; 图片ID，不填写则默认为门店首图main_image。").optional(),
  "brand_name": z.string().describe("品牌名，不填写则默认为“其它品牌”。").optional(),
  "business_certificate": z.string().describe("许可证，各行业所需的证照资质参见<a href=\"https://doc.open.alipay.com/doc2/detail.htm?treeId=205&articleId=104497&docType=1\">商户入驻要求</a>；该字段只能上传一张许可证，一张以外的许可证、除营业执照和许可证之外其他证照请放在其他资质字段上传。").optional(),
  "business_certificate_expires": z.string().describe("许可证有效期，格式：2020-03-20或长期。严格按照格式填写。").optional(),
  "business_time": z.string().describe("请严格按\"周一-周五 09:00-20:00,周六-周日 10:00-22:00\"的格式进行填写，时间段不能重复，最多支持两个时间段，24小时营业请填写\"00:00-23:59\"").optional(),
  "category_id": z.string().describe("类目id，请参考<a href=\"https://doc.open.alipay.com/doc2/detail.htm?treeId=205&articleId=104497&docType=1\">商户入驻要求</a>。").optional(),
  "city_code": z.string().describe("城市编码，国标码，详见国家统计局数据 <a href=\"https://gw.alipayobjects.com/os/basement_prod/92d874c4-39a9-4977-b710-d55dad374b7f.csv\">点此下载</a>。").optional(),
  "contact_number": z.string().describe("门店电话号码；支持座机和手机，只支持数字和+-号，在客户端对用户展现， 支持多个电话， 以英文逗号分隔。").optional(),
  "creator": z.string().describe("（支付宝内部参数）小二的支付宝账号。").optional(),
  "district_code": z.string().describe("区县编码，国标码，详见国家统计局数据 <a href=\"https://gw.alipayobjects.com/os/basement_prod/92d874c4-39a9-4977-b710-d55dad374b7f.csv\">点此下载</a>。").optional(),
  "enterprise_logon_id": z.string().describe("（支付宝内部参数）企业支付宝账号。").optional(),
  "enterprise_name": z.string().describe("（支付宝内部参数）企业支付宝账户名称。").optional(),
  "implement_id": z.string().describe("机具号，多个之间以英文逗号分隔。").optional(),
  "is_operating_online": z.string().describe("是否在其他平台开店，T表示有开店，F表示未开店。").optional(),
  "isv_uid": z.string().describe("ISV返佣id，门店创建、或者门店交易的返佣将通过此账号反给ISV，如果有口碑签订了返佣协议，则该字段作为返佣数据提取的依据。此字段必须是个合法uid，2088开头的16位支付宝会员账号，如果传入错误将无法创建门店。").optional(),
  "latitude": z.string().describe("纬度；最长15位字符（包括小数点）， 注：高德坐标系。经纬度是门店搜索和活动推荐的重要参数，录入时请确保经纬度参数准确。高德经纬度查询：http://lbs.amap.com/console/show/picker").optional(),
  "leads_id": z.string().describe("（支付宝内部参数）leads的编号。").optional(),
  "licence": z.string().describe("门店营业执照图片，各行业所需的证照资质参见<a href=\"https://doc.open.alipay.com/doc2/detail.htm?treeId=205&articleId=104497&docType=1\">商户入驻要求</a>。").optional(),
  "licence_code": z.string().describe("门店营业执照编号，只支持输入中文，英文和数字，营业执照信息与is_operating_online至少填一项。").optional(),
  "licence_expires": z.string().describe("营业执照过期时间。格式：2020-10-20或长期。严格按照格式填写。").optional(),
  "licence_name": z.string().describe("门店营业执照名称。").optional(),
  "longitude": z.string().describe("经度；最长15位字符（包括小数点）， 注：高德坐标系。经纬度是门店搜索和活动推荐的重要参数，录入时请确保经纬度参数准确。高德经纬度查询：http://lbs.amap.com/console/show/picker").optional(),
  "main_image": z.string().describe("门店首图，非常重要，推荐尺寸2000*1500。").optional(),
  "main_shop_name": z.string().describe("主门店名  比如：肯德基；主店名里不要包含分店名，如“万塘路店”。主店名长度不能超过20个字符。").optional(),
  "no_smoking": z.string().describe("是否有无烟区，T表示有无烟区，F表示没有无烟区，不传在客户端不展示。").optional(),
  "notify_mobile": z.string().describe("门店店长电话号码；用于接收门店状态变更通知，收款成功通知等通知消息， 不在客户端展示。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "online_image": z.string().describe("废弃字段，请使用online_url字段替代。").optional(),
  "online_url": z.string().describe("其他平台开店的店铺链接url，多个url使用英文逗号隔开,isv迁移到新接口使用此字段，与is_operating_online=T配套使用。").optional(),
  "op_role": z.string().describe("表示以系统集成商的身份开店，开放平台现在统一传入ISV。").optional(),
  "operate_notify_url": z.string().describe("当商户的门店审核状态发生变化时，会向该地址推送消息。").optional(),
  "other_authorization": z.string().describe("其他资质。用于上传营业证照、许可证照外的其他资质，除已上传许可证外的其他许可证也可以在该字段上传。").optional(),
  "parking": z.string().describe("门店是否支持停车，T表示支持，F表示不支持，不传在客户端不作展示。").optional(),
  "partner_id": z.string().describe("（支付宝内部参数）服务商要操作的商户PID。").optional(),
  "pay_type": z.string().describe("（支付宝内部参数）付款方式：code_scanned_pay：付款码 \r\tonline_pay：在线买单。ISV不可以指定此字段，ISV泛行业开店默认为在线买单，云纵开店可以指定支付方式。").optional(),
  "province_code": z.string().describe("省份编码，国标码，详见国家统计局数据 <a href=\"https://gw.alipayobjects.com/os/basement_prod/92d874c4-39a9-4977-b710-d55dad374b7f.csv\">点此下载</a>。").optional(),
  "ref_apply_id": z.string().describe("（支付宝内部参数）leads开店重试支付宝流水ID。").optional(),
  "request_id": z.string().describe("支持英文字母和数字，由开发者自行定义（不允许重复），在门店notify消息中也会带有该参数，以此标明本次notify消息是对哪个请求的回应。").optional(),
  "store_id": z.string().describe("外部门店编号；最长32位字符，该编号将作为收单接口的入参， 请开发者自行确保其唯一性。").optional(),
  "value_added": z.string().describe("门店其他的服务，门店与用户线下兑现。").optional(),
  "version": z.string().describe("废弃字段，使用biz_version字段替代。").optional(),
  "wifi": z.string().describe("门店是否支持WIFI，T表示支持，F表示不支持，不传在客户端不作展示。").optional()
}
```

### alipay_offline_market_shop_modify

**Environment variables**



**Input schema**

```ts
{
  "address": z.string().describe("门店详细地址，地址字符长度在4-50个字符。门店详细地址，格式（不含省市区）：例1：道路+门牌号，“人民东路18号”；例2：道路+门牌号+标志性建筑+楼层；注：门店详细地址按规范格式填写地址，以免影响门店搜索及活动报名").optional(),
  "audit_images": z.string().describe("门店审核时需要的图片; 至少包含一张门头照片，两张内景照片，必须反映真实的门店情况，审核才能够通过， 多个以英文逗号分隔。").optional(),
  "auth_letter": z.string().describe("门店授权函。").optional(),
  "avg_price": z.string().describe("人均消费价格，最少1元，最大不超过99999元，请按实际情况填写，单位元。").optional(),
  "biz_version": z.string().describe("店铺接口业务版本号，新接入的ISV，请统一传入2.0。").optional(),
  "box": z.string().describe("包厢支持，T表示有包厢，F表示无包厢；不传值默认F。").optional(),
  "branch_shop_name": z.string().describe("分店名称，比如：万塘路店，与主门店名合并在客户端显示为：肯德基(万塘路店)。分店名长度需在2~20个字符之间。").optional(),
  "brand_logo": z.string().describe("品牌LOGO; 图片ID，不填写则默认为门店首图main_image。").optional(),
  "brand_name": z.string().describe("品牌名称；不填写则默认为“其它品牌”。").optional(),
  "business_certificate": z.string().describe("许可证，各行业所需的证照资质参见<a href=\"https://doc.open.alipay.com/doc2/detail.htm?treeId=205&articleId=104497&docType=1\">商户入驻要求</a>；该字段只能上传一张许可证，一张以外的许可证、除营业执照和许可证之外其他证照请放在其他资质字段上传。").optional(),
  "business_certificate_expires": z.string().describe("许可证有效期，格式：2020-03-20或长期。严格按照格式填写。").optional(),
  "business_time": z.string().describe("请严格按\"周一-周五 09:00-20:00,周六-周日 10:00-22:00\"的格式进行填写，时间段不能重复，最多支持两个时间段，24小时营业请填写\"00:00-23:59\"").optional(),
  "category_id": z.string().describe("废弃字段，不支持修改类目。\r\t类目id，请参考<a href=\"https://doc.open.alipay.com/doc2/detail.htm?treeId=205&articleId=104497&docType=1\">商户入驻要求</a>。").optional(),
  "city_code": z.string().describe("城市编码，国标码，详见国家统计局数据 <a href=\"http://aopsdkdownload.cn-hangzhou.alipay-pub.aliyun-inc.com/doc/2016.xls\">点此下载</a>。").optional(),
  "contact_number": z.string().describe("门店电话号码；支持座机和手机，在客户端对用户展现，支持多个电话，以英文逗号分隔。").optional(),
  "district_code": z.string().describe("区县编码，国标码，详见国家统计局数据 <a href=\"http://aopsdkdownload.cn-hangzhou.alipay-pub.aliyun-inc.com/doc/2016.xls\">点此下载</a>。").optional(),
  "implement_id": z.string().describe("店铺使用的机具编号，多个以英文逗号分隔。").optional(),
  "is_operating_online": z.string().describe("是否在其他平台开店，T表示有开店，F表示未开店。").optional(),
  "is_show": z.string().describe("废弃字段，T表示显示，F表示隐藏，默认为T。").optional(),
  "latitude": z.string().describe("纬度，注：高德坐标系。经纬度是门店搜索和活动推荐的重要参数，录入时请确保经纬度参数准确。高德经纬度查询：http://lbs.amap.com/console/show/picker").optional(),
  "licence": z.string().describe("门店营业执照图片，各行业所需的证照资质参见：https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7629140.0.0.NBvQVP&treeId=78&articleId=104497&docType=1。").optional(),
  "licence_code": z.string().describe("门店营业执照编号。只支持输入中文，英文和数字。").optional(),
  "licence_expires": z.string().describe("营业执照过期时间。格式：2020-10-20或长期。严格按照格式填写。").optional(),
  "licence_name": z.string().describe("门店营业执照名称。").optional(),
  "longitude": z.string().describe("经度，注：高德坐标系。经纬度是门店搜索和活动推荐的重要参数，录入时请确保经纬度参数准确。高德经纬度查询：http://lbs.amap.com/console/show/picker").optional(),
  "main_image": z.string().describe("门店首图；非常重要，推荐尺寸2000*1500。").optional(),
  "main_shop_name": z.string().describe("主门店名  比如：肯德基；主店名里不要包含分店名，如“万塘路店”。主店名长度不能超过20个字符。【xxx店】、(xxx店)、（xxx店）、[xxx店]、<xxx店>、xxx店，等类似的主店名都是不合法的，如果需要录入分店，请填写到branch_shop_name字段中。").optional(),
  "no_smoking": z.string().describe("无烟区支持，T表示禁烟，F表示不禁烟；不传值默认F。").optional(),
  "notify_mobile": z.string().describe("门店店长电话号码；用于接收门店状态变更通知，收款成功通知等通知消息，不在客户端展示；多个以引文逗号分隔。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "online_image": z.string().describe("废弃字段，请使用online_url字段替代。").optional(),
  "online_url": z.string().describe("其他平台开店的店铺链接url,多个url使用英文逗号隔开，isv迁移到新接口使用此字段，与is_operating_online=T配套使用。").optional(),
  "op_id": z.string().describe("（支付宝内部参数）操作员的支付账号ID(服务商ID、城市经理ID)。").optional(),
  "op_role": z.string().describe("表示以系统集成商的身份开店，开放平台现在统一传入ISV。").optional(),
  "operate_notify_url": z.string().describe("通知发送url;当商户的门店审核状态发生变化时，会向该地址推送消息。").optional(),
  "other_authorization": z.string().describe("其他资质。用于上传营业证照、许可证照外的其他资质，除已上传许可证外的其他许可证也可以在该字段上传。").optional(),
  "parking": z.string().describe("门店是否支持停车，T表示支持，F表示不支持，不传在客户端不作展示。").optional(),
  "partner_id": z.string().describe("（支付宝内部参数）服务商要操作的商户PID。").optional(),
  "pay_type": z.string().describe("（支付宝内部参数）付款方式：code_scanned_pay：付款码 \r\tonline_pay：在线买单。ISV不可以指定此字段，ISV泛行业开店默认为在线买单，云纵开店可以指定支付方式。").optional(),
  "province_code": z.string().describe("省份编码，国标码，详见国家统计局数据 <a href=\"http://aopsdkdownload.cn-hangzhou.alipay-pub.aliyun-inc.com/doc/2016.xls\">点此下载”</a>。").optional(),
  "request_id": z.string().describe("外部请求ID; 标识ISV本次修改的请求，由开发者自定义，不同的请求使用不同的ID，在门店notify消息中也会带有该参数，以此标明本次notify消息是对哪个请求的回应").optional(),
  "shop_id": z.string().describe("支付宝门店ID。").optional(),
  "store_id": z.string().describe("外部门店编号；最长32位字符，该编号将作为收单接口的入参， 请开发者自行确保其唯一性。").optional(),
  "value_added": z.string().describe("门店其他的服务，门店与用户线下兑现。").optional(),
  "version": z.string().describe("废弃字段，使用biz_version字段替代。").optional(),
  "wifi": z.string().describe("门店是否支持WIFI，T表示支持，F表示不支持，不传在客户端不作展示。").optional()
}
```

### alipay_offline_market_shop_querydetail

**Environment variables**



**Input schema**

```ts
{
  "shop_id": z.string().describe("支付宝门店ID").optional(),
  "op_role": z.string().describe("服务商及商户调用情况下务必传递。操作人角色，默认商户操作:MERCHANT；服务商操作：PROVIDER；ISV: 不需要填写").optional()
}
```

### alipay_offline_market_shop_summary_batchquery

**Environment variables**



**Input schema**

```ts
{
  "biz_channel": z.string().describe("表示接口查询门店的业务渠道限制：ALL、 POS、不传。不传代表只查询普通门店，传入POS代表只查询简易门店，传入ALL代表查询普通门店和简易门店。").optional(),
  "brand_name": z.string().describe("品牌名").optional(),
  "city_code": z.string().describe("城市编码，国标码，如：120100表示天津市").optional(),
  "district_code": z.string().describe("区域编码，如：120104表示南开区").optional(),
  "op_role": z.string().describe("表示接口业务的调用方身份：ISV、 服务商身份标识。传入ISV代表系统集成商身份。传入PROVIDER代表服务商。").optional(),
  "page_no": z.number().int().describe("页码，留空标示第一页，默认 20个结果为一页").optional(),
  "page_size": z.number().int().describe("每页记录数，默认20，最大 100").optional(),
  "province_code": z.string().describe("省份编码，国标码，如：120000表示天津").optional(),
  "query_type": z.string().describe("门店数据查询类型，根据类型可以返回指定的门店数据，目前支持的类型如下：\r\tBRAND_RELATION ： 品牌商关联店铺\r\tMALL_SELF ：MALL自己的门店\r\tMALL_RELATION：MALL关联下的门店\r\tMERCHANT_SELF:商户自己的门店\r\tKB_PROMOTER：口碑客推广者").optional(),
  "related_partner_id": z.string().describe("query_type查询类型下所关联的商户PID").optional(),
  "shop_id": z.string().describe("门店ID").optional(),
  "shop_status": z.string().describe("门店状态，传入多个状态，多个状态使用英文逗号隔开，例如：PAUSED,OPEN\r\t店铺状态：OPEN（营业）、PAUSED（暂停）、INIT（初始）、FREEZE（冻结）、CLOSED（关店）").optional()
}
```

### alipay_offline_material_image_upload

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_agent_cancel

**Environment variables**



**Input schema**

```ts
{
  "batch_no": z.string().describe("ISV 代商户操作事务编号，通过事务开启接口alipay.open.agent.create调用返回。").optional()
}
```

### alipay_open_agent_common_sign

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_agent_commonsign_confirm

**Environment variables**



**Input schema**

```ts
{
  "batch_no": z.string().describe("ISV 代商户操作事务编号，通过事务开启接口alipay.open.agent.create调用返回。").optional()
}
```

### alipay_open_agent_confirm

**Environment variables**



**Input schema**

```ts
{
  "batch_no": z.string().describe("ISV 代商户操作事务编号，通过调用alipay.open.agent.create(开启代商户签约、创建应用事务)接口返回，详见 https://opendocs.alipay.com/apis/api_50/alipay.open.agent.create/  。").optional()
}
```

### alipay_open_agent_create

**Environment variables**



**Input schema**

```ts
{
  "account": z.string().describe("isv代操作的商户账号，可以是支付宝账号，也可以是pid（2088开头）").optional(),
  "contact_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "order_ticket": z.string().describe("订单授权凭证。若传入本参数，则对应事务提交后进入预授权模式。").optional(),
  "sign_mode": z.string().describe("签约模式：目前只支持批量签约并不通知商户确认 使用场景：批量签约并授权场景，先调用签约接口进行签约，然后调用授权接口授权，在批量模式下，一次性签约多个产品，要么都成功要么都失败，同时在授权接口传入orderNo，会一起发送签约确认和授权确认，商户只需要确认一次；如果不是批量签约并授权场景，不要传此参数，否则商户无法收到确认签约通知；").optional()
}
```

### alipay_open_agent_facetoface_sign

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_agent_mini_create

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_agent_mobilepay_sign

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_agent_offlinepayment_sign

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_agent_order_query

**Environment variables**



**Input schema**

```ts
{
  "batch_no": z.string().describe("ISV 代商户操作事务编号，通过调用alipay.open.agent.create(开启代商户签约、创建应用事务)接口返回，详见 https://opendocs.alipay.com/apis/api_50/alipay.open.agent.create/ 。").optional()
}
```

### alipay_open_agent_signstatus_query

**Environment variables**



**Input schema**

```ts
{
  "pid": z.string().describe("isv要查询签约状态的商户账号，可以是支付宝账号pid（2088开头），也可以是商户的登录账号（邮箱或手机号）").optional(),
  "product_codes": z.array(z.string()).describe("isv要查询商户签约状态的产品码，产品码是支付宝内部对产品的唯一标识。目前支持查询产品及产品码详情参见 https://opendocs.alipay.com/isv/01cv77#%E8%83%BD%E5%8A%9B%E4%BA%A7%E5%93%81%E7%A0%81 。\t").optional()
}
```

### alipay_open_app_api_field_apply

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_app_api_field_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_app_api_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_app_api_scene_query

**Environment variables**



**Input schema**

```ts
{
  "field_name": z.string().describe("接口出参字段英文名。").optional(),
  "api_name": z.string().describe("接口英文名。").optional()
}
```

### alipay_open_app_members_create

**Environment variables**



**Input schema**

```ts
{
  "logon_id": z.string().describe("支付宝登录账号。").optional(),
  "role": z.string().describe("为成员添加的角色类型").optional()
}
```

### alipay_open_app_members_delete

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("被删除成员的支付宝账户唯一标识，以2088开头。").optional(),
  "open_id": z.string().describe("被删除成员的openId。").optional(),
  "role": z.string().describe("被删除成员的角色类型").optional()
}
```

### alipay_open_app_members_query

**Environment variables**



**Input schema**

```ts
{
  "role": z.string().describe("查询的成员角色类型").optional()
}
```

### alipay_open_app_messagetemplate_subscribe_query

**Environment variables**



**Input schema**

```ts
{
  "open_id": z.string().describe("支付宝openId，用于支付宝用户在当前应用下的用户标识。").optional(),
  "template_id_list": z.array(z.string()).describe("消息模板id，可以填写多个，最多不超过3个。模板id需要保持同一个应用主体，并且展示在同一个订阅组件中的模板id。\t模板id获取详情参见<a href=\"https://opendocs.alipay.com/mini/01rnqx\">模板消息</a>。").optional(),
  "user_id": z.string().describe("订阅消息模板用户的支付宝唯一标识，2088开头。").optional()
}
```

### alipay_open_app_mini_templatemessage_send

**Environment variables**



**Input schema**

```ts
{
  "data": z.string().describe("模板消息内容。商家/开发者将模板占位符替换为自定义内容").optional(),
  "form_id": z.string().describe("支付消息模板：需传入用户发生的交易行为的支付宝交易号 trade_no；</br>表单提交模板：需传入用户在小程序触发表单提交事件获得的表单号；</br>刷脸消息模板：需传入在IOT刷脸后得到的ftoken等，用于信息发送的校验。</br>").optional(),
  "page": z.string().describe("小程序的跳转页面。用于用户点击模板消息 进入小程序查看 按钮后，跳转至商家小程序对应页面。").optional(),
  "to_open_id": z.string().describe("支付宝openId，用于支付宝用户在当前应用下的用户标识。").optional(),
  "to_user_id": z.string().describe("接收模板消息用户支付宝 user_id，可通过 <a href=\"https://opendocs.alipay.com/mini/api/openapi-authorize\">用户授权</a> 获取").optional(),
  "user_template_id": z.string().describe("商家在商家自运营中心选用的消息模板ID，详情参见 <a href=\"https://opendocs.alipay.com/mini/03l9bb?pathHash=19d2e0aa&ref=api#%E9%A2%86%E7%94%A8%E8%AE%A2%E9%98%85%E6%B6%88%E6%81%AF%E6%A8%A1%E6%9D%BF\">选用消息模板</a> 。").optional()
}
```

### alipay_open_app_qrcode_create

**Environment variables**



**Input schema**

```ts
{
  "color": z.string().describe("圆形二维码颜色（十六进制颜色色值），仅圆形二维码支持颜色设置，方形二维码默认为黑色。").optional(),
  "describe": z.string().describe("对应的二维码描述").optional(),
  "query_param": z.string().describe("小程序启动参数，内容按照格式为参数名=参数值&参数名=参数值。打开小程序的query ，在小程序 onLaunch的方法中获取。可查看 <a href=\"https://opendocs.alipay.com/support/01rb2a\">如何获取各种场景的启动参数</a>。").optional(),
  "size": z.string().describe("合成后图片的大小规格，有s、m、l三档可选。").optional(),
  "url_param": z.string().describe("page/component/component-pages/view/view为小程序中能访问到的页面路径").optional()
}
```

### alipay_open_app_service_apply

**Environment variables**



**Input schema**

```ts
{
  "category_id": z.string().describe("行业类目id,获取请参考<a href=\"https://opendocs.alipay.com/mini/03ci0w?pathHash=ed3c875c\">各个行业场景服务接入资料</a>").optional(),
  "out_biz_no": z.string().describe("外部业务编号,平台会基于appId+out_biz_no做幂等控制，如果出现幂等，会返回幂等的service_code").optional(),
  "schema_version": z.string().describe("服务schema版本").optional(),
  "service_code": z.string().describe("服务编码, 首次提报时设置空值，支付宝侧返回ServiceCode；当传入serviceCode，则对已提报服务做编辑操作。").optional(),
  "service_xml": z.string().describe("服务xml,格式请参考<a href=\"https://opendocs.alipay.com/mini/03cj40?pathHash=a5de4bd9\">Schema 规则介绍</a>").optional(),
  "template_type": z.string().describe("默认值:DEFAULT。").optional(),
  "user_service_delivery_type": z.string().describe("商户提报服务履约类型").optional()
}
```

### alipay_open_app_service_delete

**Environment variables**



**Input schema**

```ts
{
  "service_code": z.string().describe("服务id").optional()
}
```

### alipay_open_app_service_list_query

**Environment variables**



**Input schema**

```ts
{
  "service_name": z.string().describe("服务名称").optional(),
  "category_id": z.string().describe("类目").optional(),
  "page_size": z.number().int().describe("每页记录数").optional(),
  "page_num": z.number().int().describe("页码").optional()
}
```

### alipay_open_app_service_query

**Environment variables**



**Input schema**

```ts
{
  "service_code": z.string().describe("服务id").optional()
}
```

### alipay_open_app_service_schema_query

**Environment variables**



**Input schema**

```ts
{
  "category_id": z.string().describe("类目id, 获取请参考<a href=\"https://opendocs.alipay.com/mini/03ci0w?pathHash=ed3c875c\">各个行业场景服务接入资料</a>").optional(),
  "template_type": z.string().describe("服务模版类型，默认值:DEFAULT").optional()
}
```

### alipay_open_auth_app_aes_get

**Environment variables**



**Input schema**

```ts
{
  "merchant_app_id": z.string().describe("商家应用appId").optional()
}
```

### alipay_open_auth_app_aes_set

**Environment variables**



**Input schema**

```ts
{
  "merchant_app_id": z.string().describe("商家应用appId").optional()
}
```

### alipay_open_auth_token_app

**Environment variables**



**Input schema**

```ts
{
  "code": z.string().describe("应用授权码，传入应用授权后得到的  app_auth_code。\t说明：\tgrant_type 为 authorization_code 时，本参数必填；\tgrant_type 为 refresh_token 时不填。").optional(),
  "grant_type": z.string().describe("授权方式。支持：\tauthorization_code：使用应用授权码换取应用授权令牌app_auth_token。\trefresh_token：使用app_refresh_token刷新获取新授权令牌。").optional(),
  "refresh_token": z.string().describe("刷新令牌，上次换取访问令牌时得到。本参数在 grant_type 为 authorization_code 时不填；为 refresh_token 时必填，且该值来源于此接口的返回值 app_refresh_token（即至少需要通过 grant_type=authorization_code 调用此接口一次才能获取）。").optional()
}
```

### alipay_open_auth_token_app_query

**Environment variables**



**Input schema**

```ts
{
  "app_auth_token": z.string().describe("应用授权令牌").optional()
}
```

### alipay_open_auth_userauth_relationship_query

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("蚂蚁统一会员ID，如果未开启openid改造，则此值必传").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID，蚂蚁统一会员ID，如果已完成openid改造，则此值必传").optional(),
  "scopes": z.string().describe("查询授权关系所关联的scope，半角逗号分隔的列表，且不允许有重复值").optional()
}
```

### alipay_open_biz_create

**Environment variables**



**Input schema**

```ts
{
  "a": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "b": z.string().describe("1").optional(),
  "de": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "stringbuff": z.string().describe("1").optional()
}
```

### alipay_open_fee_adjust_apply

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_file_upload

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_instantdelivery_account_create

**Environment variables**



**Input schema**

```ts
{
  "logistics_codes": z.array(z.string()).describe("配送公司编码").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional()
}
```

### alipay_open_instantdelivery_account_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_instantdelivery_merchantagreement_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_instantdelivery_merchantagreement_sign

**Environment variables**



**Input schema**

```ts
{
  "open_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID").optional()
}
```

### alipay_open_instantdelivery_merchantshop_batchquery

**Environment variables**



**Input schema**

```ts
{
  "page_no": z.number().int().describe("当前页码").optional(),
  "page_size": z.number().int().describe("分页数量, 最大50。").optional(),
  "shop_name": z.string().describe("门店名称").optional(),
  "shop_no": z.string().describe("商家门店编码。").optional()
}
```

### alipay_open_instantdelivery_merchantshop_create

**Environment variables**



**Input schema**

```ts
{
  "contact_name": z.string().describe("联系人姓名").optional(),
  "detail_address": z.string().describe("地址。商户详细经营地址或人员所在地点").optional(),
  "enterprise_city": z.string().describe("城市编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "enterprise_district": z.string().describe("区县编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "enterprise_province": z.string().describe("省份编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "latitude": z.string().describe("纬度，浮点型,小数点后最多保留6位 如需要录入经纬度，请以高德坐标系为准，录入时请确保经纬度参数准确。高德经纬度查询：http://lbs.amap.com/console/show/picker").optional(),
  "longitude": z.string().describe("经度，浮点型, 小数点后最多保留6位。 如需要录入经纬度，请以高德坐标系为准，录入时请确保经纬度参数准确。高德经纬度查询：http://lbs.amap.com/console/show/picker").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional(),
  "phone": z.string().describe("联系人电话/手机号").optional(),
  "poiid": z.string().describe("高德poiid").optional(),
  "shop_category": z.string().describe("店铺类目，取值参见文件https://mif-pub.alipayobjects.com/ShopCategory.xlsx 中的三级门店类目").optional(),
  "shop_name": z.string().describe("门店名称，最长不超过256个字符。名称+地址需要全局唯一。").optional(),
  "shop_no": z.string().describe("商家门店编码，可自定义，但必须唯一").optional()
}
```

### alipay_open_instantdelivery_merchantshop_modify

**Environment variables**



**Input schema**

```ts
{
  "contact_name": z.string().describe("联系人姓名").optional(),
  "logistics_codes": z.array(z.string()).describe("要更新的配送公司列表，必须包含已经创建过该门店的配送公司，可以新增开通了账户的配送公司").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional(),
  "phone": z.string().describe("联系人电话/手机号").optional(),
  "shop_no": z.string().describe("商家门店编码").optional()
}
```

### alipay_open_instantdelivery_merchantshop_query

**Environment variables**



**Input schema**

```ts
{
  "shop_no": z.string().describe("商家门店编码。").optional()
}
```

### alipay_open_invite_order_query

**Environment variables**



**Input schema**

```ts
{
  "isv_biz_id": z.string().describe("isv业务系统单据编号").optional(),
  "alipay_logon_id": z.string().describe("商家的支付宝账号，如果调用alipay.open.invite.order.create接口时有传入支付宝账号，则这里查询签约状态时必须要传").optional()
}
```

### alipay_open_mini_appdeploy_byappid_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("小程序应用ID").optional(),
  "bundle_id": z.string().describe("端标识").optional(),
  "inst_code": z.string().describe("租户标识").optional(),
  "page_num": z.number().int().describe("当前页，从1开始").optional(),
  "page_size": z.number().int().describe("每页个数").optional()
}
```

### alipay_open_mini_appdeploy_byappversion_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "bundle_id": z.string().describe("端标识").optional(),
  "inst_code": z.string().describe("租户").optional(),
  "app_version": z.string().describe("小程序版本").optional()
}
```

### alipay_open_mini_appdeploy_bydeployversion_query

**Environment variables**



**Input schema**

```ts
{
  "bundle_id": z.string().describe("客户端标识").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "inst_code": z.string().describe("租户").optional(),
  "deploy_version": z.string().describe("发布标识").optional()
}
```

### alipay_open_mini_baseinfo_modify

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_mini_baseinfo_name_check

**Environment variables**



**Input schema**

```ts
{
  "app_name": z.string().describe("小程序名字，长度限制 3~30 个字符，仅支持包含简体中文、数字、英文、下划线、+、-。").optional()
}
```

### alipay_open_mini_baseinfo_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_mini_category_query

**Environment variables**



**Input schema**

```ts
{
  "is_filter": z.boolean().describe("是否过滤小程序不可用类目。枚举值如下： true：表示过滤不可用类目。 false：表示不过滤不可用类目。").optional()
}
```

### alipay_open_mini_category_require_query

**Environment variables**



**Input schema**

```ts
{
  "category_code_list": z.array(z.string()).describe("类目列表，不超过五个").optional()
}
```

### alipay_open_mini_experience_cancel

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("小程序版本号").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_experience_create

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序版本号。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_experience_query

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序版本号。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_individual_business_certify

**Environment variables**



**Input schema**

```ts
{
  "license_no": z.string().describe("营业执照注册号即营业执照的编号。").optional(),
  "license_pic": z.string().describe("营业执照图片的Base64编码字符串，图片大小不能超过2M").optional()
}
```

### alipay_open_mini_inner_experience_cancel

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本号").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "mini_app_id": z.string().describe("业务小程序appid").optional(),
  "oid": z.string().describe("oid").optional(),
  "operator_id": z.string().describe("操作员id").optional()
}
```

### alipay_open_mini_inner_members_add

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "domain_account": z.string().describe("域账号（不为空时会添加联系人）").optional(),
  "login_id": z.string().describe("支付宝登陆账号").optional(),
  "mini_app_id": z.string().describe("业务appId").optional(),
  "type": z.string().describe("成员类型").optional()
}
```

### alipay_open_mini_inner_members_delete

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("业务小程序id").optional(),
  "app_origin": z.string().describe("业务来源").optional(),
  "domain_account": z.string().describe("域账号（如传入则删除联系人）").optional(),
  "login_id": z.string().describe("登陆支付宝账号").optional(),
  "type": z.string().describe("成员类型").optional()
}
```

### alipay_open_mini_inner_members_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("业务小程序id").optional(),
  "app_origin": z.string().describe("业务来源").optional()
}
```

### alipay_open_mini_innerapp_create

**Environment variables**



**Input schema**

```ts
{
  "app_category_ids": z.string().describe("小程序类目，二级类目与三级类目下划线隔开，最多可以选择3个类目，类目之间以;隔开").optional(),
  "app_desc": z.string().describe("小程序描述，20-200个字符").optional(),
  "app_english_name": z.string().describe("小程序英文名称，插件不填").optional(),
  "app_logo": z.string().describe("小程序logo").optional(),
  "app_name": z.string().describe("小程序名称").optional(),
  "app_origin": z.string().describe("来源的业务方,接入文档中申请的业务来源").optional(),
  "app_slogan": z.string().describe("小程序简介，在搜索透出,插件不需要填").optional(),
  "app_sub_type": z.string().describe("应用子类型").optional(),
  "app_type": z.string().describe("应用类型").optional(),
  "isv_app_id": z.string().describe("三方应用ID，仅在创建模板小程序时需要传入").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "mini_category_ids": z.string().describe("新小程序前台类目，格式为 第一个一级类目_第一个二级类目;第二个一级类目_第二个二级类目_第二个三级类目，详细类目可以通过 https://docs.open.alipay.com/api_49/alipay.open.mini.category.query接口查询mini_category_list。使用后不再读取app_category_ids值，老前台类目将废弃").optional(),
  "pid": z.string().describe("创建的小程序所属的PID").optional(),
  "service_email": z.string().describe("邮箱，与客服电话二选一").optional(),
  "service_phone": z.string().describe("客服电话，插件不需要").optional()
}
```

### alipay_open_mini_innerapp_plugin_order

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "merchandise_id": z.string().describe("订购的服务商品ID").optional(),
  "mini_app_id": z.string().describe("一二方支持传入appId").optional(),
  "request_id": z.string().describe("业务幂等号，规则为商品id+appOrigin+requestId 作为幂等流水号\t非必填,不传则默认生成一个8位requestId").optional()
}
```

### alipay_open_mini_innerapp_pluginrelation_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id_list": z.array(z.string()).describe("应用ID列表").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("页大小").optional(),
  "plugin_id": z.string().describe("插件ID").optional(),
  "plugin_relation_status_list": z.array(z.string()).describe("插件使用关系状态，取值包括WORKING/WAIT_WORKING/STOP_WORKING/EXECUTING").optional(),
  "run_model_type": z.string().describe("运行类型，取值包括ONLINE/TRIAL/REVIEW/DEBUG").optional(),
  "show_beta_info": z.boolean().describe("是否展示邀测信息").optional()
}
```

### alipay_open_mini_innerapp_pluginservice_publish

**Environment variables**



**Input schema**

```ts
{
  "ability_type_list": z.array(z.string()).describe("功能类型，目前支持的有：1039支付, 1040会员, 1041基础, 1056资金, 1058信用, 1111口碑, 330120安全, 360101营销").optional(),
  "app_logo": z.string().describe("服务发布logo").optional(),
  "app_origin": z.string().describe("业务来源").optional(),
  "description": z.string().describe("服务描述").optional(),
  "detail_for_client": z.string().describe("移动端详情，用于能力中心展示").optional(),
  "detail_for_pc": z.string().describe("pc端详情，用于能力中心展示").optional(),
  "mini_app_id": z.string().describe("插件id").optional(),
  "sell_crowd": z.string().describe("可订购人群，1003个人, 1004企业，-1无限制").optional(),
  "show_type": z.string().describe("发布后是否展示，01展示（默认）、02隐藏").optional(),
  "title": z.string().describe("服务标题").optional(),
  "visit_url_for_pc": z.string().describe("pc端url地址，不需要则为空").optional()
}
```

### alipay_open_mini_innerapp_pluginsyncmode_modify

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("来源").optional(),
  "mini_app_id": z.string().describe("小程序应用 ID，").optional(),
  "plugin_id": z.string().describe("插件id").optional(),
  "sync_mode": z.string().describe("模式，SYNC/NONE").optional()
}
```

### alipay_open_mini_innerapp_pluginuseconfig_cancel

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("来源").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "mini_app_id": z.string().describe("小程序应用 ID").optional(),
  "plugin_dev_version": z.string().describe("插件研发版本").optional(),
  "plugin_id": z.string().describe("插件id").optional()
}
```

### alipay_open_mini_innerapp_pluginuseconfig_online

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("来源").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "mini_app_id": z.string().describe("小程序应用 ID").optional(),
  "plugin_dev_version": z.string().describe("插件研发版本").optional(),
  "plugin_id": z.string().describe("插件id").optional()
}
```

### alipay_open_mini_innerapp_pluginuseconfig_upgrade

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("来源").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "mini_app_id": z.string().describe("小程序应用 ID").optional(),
  "plugin_dev_version": z.string().describe("插件研发版本").optional(),
  "plugin_id": z.string().describe("插件id").optional(),
  "strategy_value": z.string().describe("灰度值").optional()
}
```

### alipay_open_mini_innerapp_service_publish

**Environment variables**



**Input schema**

```ts
{
  "app_logo": z.string().describe("服务发布logo").optional(),
  "app_origin": z.string().describe("业务来源").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "pid": z.string().describe("小程序模板所属PID").optional(),
  "sub_title": z.string().describe("服务子标题").optional(),
  "title": z.string().describe("服务名称").optional()
}
```

### alipay_open_mini_innerapp_service_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("插件id或模板id").optional(),
  "app_sub_type": z.string().describe("小程序应用子类型").optional(),
  "show_type": z.string().describe("是否在服务市场透出，SHOW展示、HIDE隐藏").optional(),
  "keyword": z.string().describe("关键词").optional(),
  "page_num": z.string().describe("页码，默认第一页").optional(),
  "page_size": z.string().describe("分页数，默认每页10个").optional(),
  "app_origin": z.string().describe("业务来源，新接入方需要向支付宝申请专用来源，否则不予接入。https://yuque.antfin-inc.com/tinyapp-all/qddncu/bidushixiang").optional(),
  "include_offline": z.boolean().describe("是否需要展示offline状态插件，不传默认为false（不展示）").optional()
}
```

### alipay_open_mini_innerbaseinfo_applogo_upload

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_mini_innerbaseinfo_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("小程序ID，mini_app_id 和 mini_app_name 两个需要有其中一个必填，当填了mini_app_id时只使用id去进行查询。").optional(),
  "inst_code": z.string().describe("租户code，alipay or taobao").optional(),
  "mini_app_name": z.string().describe("小程序name，mini_app_id 和 mini_app_name 两个需要有其中一个必填，当填了mini_app_id时只使用id去进行查询。").optional(),
  "app_sub_type": z.string().describe("小程序类型，TINYAPP_TEMPLATE，TINYAPP_NORMAL，TINYAPP_PLUGIN，使用mini_app_name查询的时候，该字段要求必传。").optional()
}
```

### alipay_open_mini_innerversion_audit_cancel

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional()
}
```

### alipay_open_mini_innerversion_audit_submit

**Environment variables**



**Input schema**

```ts
{
  "app_category_ids": z.string().describe("小程序类目，格式为 第一个一级类目_第一个二级类目;第二个一级类目_第二个二级类目，详细类目可以参考<a href=‘https://opendocs.alipay.com/b/03al2m’>开放服务类目</a>，如果不填默认采用当前小程序应用类目。使用默认应用类目后不需要再次上传营业执照号、营业执照名、营业执照截图、营业执照有效期。").optional(),
  "app_desc": z.string().describe("小程序应用描述，20-200个字，如果不填默认采用当前小程序的应用描述").optional(),
  "app_english_name": z.string().describe("小程序应用英文名称，如果不填默认采用当前小程序应用英文名称，3～30个字符。插件不填").optional(),
  "app_logo": z.string().describe("小程序logo图标，图片格式必须为：png、jpeg、jpg，比例必须为1:1，建议上传像素为180*180，不超过256kb， 如果不填默认采用当前小程序应用logo图标").optional(),
  "app_name": z.string().describe("小程序应用名称，如果不填默认采用当前小程序应用名称，名称3-40个字符，一个中文算两个字符").optional(),
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入，申请方式请参见接入手册。").optional(),
  "app_slogan": z.string().describe("小程序应用简介，一句话描述小程序功能，如果不填默认采用当前小程序应用简介，10~32个字符").optional(),
  "app_version": z.string().describe("需要提交审核的小程序版本号，格式为: x.y.z，其中x、y、z均为整型数字，一个应用最多只能有一个审核中、审核通过或者审核驳回的版本。").optional(),
  "bundle_id": z.string().describe("端ID，多端场景下区分不同端").optional(),
  "license_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "memo": z.string().describe("小程序备注").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "mini_category_ids": z.string().describe("新小程序前台类目，格式为 第一个一级类目_第一个二级类目;第二个一级类目_第二个二级类目_第二个三级类目，详细类目可以通过 <a href='https://opendocs.alipay.com/mini/03l8c6'>alipay.open.mini.category.query</a>（小程序类目树查询接口）查询mini_category_list，如果不填默认采用当前小程序应用类目。使用默认应用类目后不需要再次上传营业执照号、营业执照名、营业执照截图、营业执照有效期。使用后不再读取app_category_ids值，老前台类目将废弃").optional(),
  "open_id": z.string().describe("小程序所属PID").optional(),
  "out_door_pic": z.string().describe("门头照图片地址，部分小程序类目需要提交，参照 <a href=‘https://opendocs.alipay.com/b/03al2m’>开放服务类目</a> 中是否需要营业执照信息，如果不填默认采用当前小程序门头照图片").optional(),
  "pid": z.string().describe("小程序所属PID").optional(),
  "screen_shot_list": z.array(z.string()).describe("小程序应用截图列表，逗号分割，需要2-5张图片，单张图片不能超过4MB，图片格式只支持jpg，png；通过模板实例化小程序不需要传递此参数。").optional(),
  "service_email": z.string().describe("小程序客服邮箱，如果不填默认采用当前小程序的应用客服邮箱，和客服电话至少填写一个").optional(),
  "service_phone": z.string().describe("小程序客服电话，如果不填默认采用当前小程序的应用客服电话，和客服邮箱至少填写一个。插件不填").optional(),
  "special_license_pic_list": z.string().describe("特殊资质图片地址列表，逗号分隔；部分类目需要特殊资质，如果需要特殊资质，最少一张，最多三张。模板和插件不需要特殊资质").optional(),
  "version_desc": z.string().describe("小程序版本变更描述，30-500个字符，区分于app_desc").optional()
}
```

### alipay_open_mini_innerversion_backdev_publish

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional()
}
```

### alipay_open_mini_innerversion_beta_confirm

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "memo": z.string().describe("拒绝理由").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "operate": z.string().describe("操作：pass/reject。接受或者拒绝").optional(),
  "pid": z.string().describe("小程序所属PID").optional(),
  "plugin_id": z.string().describe("要确认邀测结果的插件appid").optional()
}
```

### alipay_open_mini_innerversion_betainfo_query

**Environment variables**



**Input schema**

```ts
{
  "plugin_id": z.string().describe("插件ID").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "plugin_version": z.string().describe("查询版本号").optional(),
  "app_origin": z.string().describe("业务来源").optional()
}
```

### alipay_open_mini_innerversion_buildaudit_submit

**Environment variables**



**Input schema**

```ts
{
  "app_category_ids": z.string().describe("小程序类目，可不传，不传取基础信息中的小程序类目").optional(),
  "app_desc": z.string().describe("小程序描述，可不传，不传取基础信息中的小程序描述").optional(),
  "app_english_name": z.string().describe("小程序在从未上架过版本之前，英文名称是可以修改的，该字段用于在提交审核时候修改小程序英文名称。注意：小程序一旦有过上架版本之后就不可以修改英文名称。").optional(),
  "app_logo": z.string().describe("小程序logo，可不传，不传取基础信息中的小程序logo，请调用专用的logo上传接口上传logo文件，并将返回的地址作为本字段传入").optional(),
  "app_name": z.string().describe("小程序在从未上架过版本之前，中文名称是可以修改的，该字段用于在提交审核时候修改小程序中文名称。注意：小程序一旦有过上架版本之后就不可以修改中文名称。").optional(),
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入，申请方式请参见接入手册。").optional(),
  "app_slogan": z.string().describe("小程序应用简介，一句话描述小程序功能，如果不填默认采用当前小程序应用简介，10~32个字符").optional(),
  "app_version": z.string().describe("小程序版本号").optional(),
  "build_ext": z.string().describe("构建扩展参数").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "isv_app_id": z.string().describe("三方应用ID").optional(),
  "license_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "mini_category_ids": z.string().describe("新小程序前台类目，格式为 第一个一级类目_第一个二级类目;第二个一级类目_第二个二级类目_第二个三级类目，详细类目可以通过 https://docs.open.alipay.com/api_49/alipay.open.mini.category.query接口查询mini_category_list，如果不填默认采用当前小程序应用类目。使用默认应用类目后不需要再次上传营业执照号、营业执照名、营业执照截图、营业执照有效期。使用后不再读取app_category_ids值，老前台类目将废弃").optional(),
  "pid": z.string().describe("小程序开发者ID，可不传，不传取基础信息中的小程序开发者ID").optional(),
  "region_type": z.string().describe("服务区域类型,可不传，不传取基础信息中的小程序服务区域类型").optional(),
  "screen_shot_list": z.string().describe("版本截图，最少2张，最多5张，必传").optional(),
  "service_phone": z.string().describe("客服电话，可不传，不传取基础信息中的小程序客服电话").optional(),
  "special_license_pic_list": z.string().describe("特殊资质图片地址列表，逗号分割,").optional(),
  "template_id": z.string().describe("小程序模板ID").optional(),
  "template_version": z.string().describe("模板的版本号，如果不填写，则默认用模板当前最新的在架版本").optional(),
  "version_desc": z.string().describe("小程序版本描述，30-500个字符，一个中文占两个字符，一个英文或者数字占一个字符").optional()
}
```

### alipay_open_mini_innerversion_condition_batchquery

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "bundle_id": z.string().describe("com.alipay.alipaywallet:支付宝，com.amap.app:高德").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "page_num": z.string().describe("页码").optional(),
  "page_size": z.string().describe("分页数").optional(),
  "version_status": z.string().describe("INIT:开发中，RELEASE:上架，OFFLINE:下架，AUDITING:审核中，AUDIT_REJECT:审核驳回，WAIT_RELEASE:待上架，GRAY:灰度中，以,号隔开").optional()
}
```

### alipay_open_mini_innerversion_content_rollback

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务场景来源").optional(),
  "app_version": z.string().describe("小程序当前上架版本号").optional(),
  "bundle_id": z.string().describe("端").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "pid": z.string().describe("小程序所属主体").optional()
}
```

### alipay_open_mini_innerversion_gray_finish

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional()
}
```

### alipay_open_mini_innerversion_gray_publish

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "beta_app_id_list": z.array(z.string()).describe("待邀测应用列表，灰度插件时使用，如无邀测必要请不要传入").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "gray_strategy": z.string().describe("灰度值").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional()
}
```

### alipay_open_mini_innerversion_info_delete

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "app_origin": z.string().describe("业务场景来源").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "app_version": z.string().describe("小程序版本号").optional(),
  "pid": z.string().describe("操作者ID，支付宝租户必填").optional(),
  "inst_code": z.string().describe("租户信息").optional()
}
```

### alipay_open_mini_innerversion_info_query

**Environment variables**



**Input schema**

```ts
{
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "app_version": z.string().describe("查询版本号").optional(),
  "app_origin": z.string().describe("业务来源，新接入方需要向支付宝申请专用来源，否则不予接入。https://yuque.antfin-inc.com/tinyapp-all/qddncu/bidushixiang").optional()
}
```

### alipay_open_mini_innerversion_instantiation_query

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入，申请方式请参见接入手册。").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "app_version": z.string().describe("实例化小程序版本号").optional()
}
```

### alipay_open_mini_innerversion_last_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "app_origin": z.string().describe("业务来源场景").optional(),
  "pid": z.string().describe("小程序主体").optional()
}
```

### alipay_open_mini_innerversion_modelforoffline_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "app_version": z.string().describe("版本号").optional(),
  "bundle_id": z.string().describe("com.alipay.alipaywallet:支付包").optional(),
  "inst_code": z.string().describe("alipay:支付宝").optional()
}
```

### alipay_open_mini_innerversion_nobuild_upload

**Environment variables**



**Input schema**

```ts
{
  "build_extra_info": z.string().describe("扩展信息，比如adaptorName、tinycliVersion、tinycliName、import-module、allowPrecompile、extJson、allowInstallDependency、aggregationMainAppId，如果没有特殊要求，tinycliVersion版本请用最新的： https://registry.npm.alibaba-inc.com/@alipay/tiny-cli/huoban-prod").optional(),
  "build_js_permission": z.string().describe("jsapi权限文件").optional(),
  "build_main_url": z.string().describe("小程序页面主入口。/index.html#page/component/index，该值需要和extendInfo中的page参数保持一致").optional(),
  "build_qcloud_info": z.string().describe("打包平台扩展信息").optional(),
  "build_version": z.string().describe("小程序版本").optional(),
  "builded_package_size": z.string().describe("已经构建过的amr包大小，单位是字节，建议如实填写").optional(),
  "builded_package_url": z.string().describe("已经构建的包地址，目前主要自行构建的场景使用").optional(),
  "builded_plugin_size": z.string().describe("构建好的插件包amr大小").optional(),
  "builded_plugin_url": z.string().describe("构建好的插件包地址").optional(),
  "bundle_id": z.string().describe("一个端的标识，用于区分不同的客户端，每接入一个客户端，都需要向小程序应用中心申请bundleId入驻").optional(),
  "components": z.string().describe("组件参数").optional(),
  "inst_code": z.string().describe("上传调试版的接入租户类型").optional(),
  "mini_app_id": z.string().describe("小程序id").optional(),
  "new_builded_package_size": z.string().describe("2.0已经构建过的amr包大小，单位是字节，主要是给自行构建的场景使用").optional(),
  "new_builded_package_url": z.string().describe("2.0产物包地址").optional(),
  "new_builded_plugin_size": z.string().describe("构建好的插件包amr大小").optional(),
  "new_builded_plugin_url": z.string().describe("构建好的插件包地址").optional(),
  "no_sign": z.boolean().describe("否免加签, true的时候代表传过来的是加签后的包地址").optional(),
  "plugin_refs": z.array(z.object({ "lazy": z.boolean().describe("是否懒加载").optional(), "plugin_id": z.string().describe("插件id，即插件的唯一标识，形如小程序的appId").optional(), "plugin_lazy": z.boolean().describe("是否懒加载").optional(), "plugin_version": z.string().describe("小程序引用的插件版本，可以指定插件版本，如：1.0.11；也可以填*，表示引用最新的插件版本，此时，当插件发布新版本后，小程序内的插件会自动更新到最新的版本。").optional() })).describe("小程序代码中引用的插件列表，包含插件id和插件版本信息，业务方需要自行解析源码包的app.json里面的plugins信息").optional(),
  "sub_packages": z.array(z.object({ "builded_package_url": z.string().describe("构建好的结果地址").optional(), "new_builded_package_url": z.string().describe("构建好的分包地址").optional(), "new_size": z.string().describe("2.0分包大小，单位字节").optional(), "path": z.string().describe("分包路径").optional(), "size": z.string().describe("分包大小，单位字节").optional(), "source_url": z.string().describe("源码地址").optional(), "type": z.string().describe("分包类型： MAIN ｜ SUB").optional() })).describe("构建好的分包信息").optional()
}
```

### alipay_open_mini_innerversion_offline_publish

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("版本号").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional()
}
```

### alipay_open_mini_innerversion_online

**Environment variables**



**Input schema**

```ts
{
  "app_offline_version": z.string().describe("下架版本").optional(),
  "app_online_version": z.string().describe("上架版本").optional(),
  "app_origin": z.string().describe("业务来源").optional(),
  "bundle_id": z.string().describe("一个端的标识，用于区分不同的客户端，每接入一个客户端，都需要向小程序应用中心申请bundelId入驻").optional(),
  "inst_code": z.string().describe("租户code，alipay or taobao").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional()
}
```

### alipay_open_mini_innerversion_online_publish

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "downgrade": z.boolean().describe("否服务降级，如果降级，拉包策略如果端上有本地包，则使用本地包打开，同时异步下载新包，待下次打开则使用新包").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional(),
  "release_type": z.string().describe("normal默认普通发布，high 高保发布").optional()
}
```

### alipay_open_mini_innerversion_package_create

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "package_type": z.string().describe("打包类型。预发包和覆盖率包").optional(),
  "pid": z.string().describe("pid. 伙伴链路（app_origin='HUOBAN'）时必填").optional()
}
```

### alipay_open_mini_innerversion_sync

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务参数来源").optional(),
  "app_version": z.string().describe("推送的小程序版本号").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "dev_id": z.string().describe("操作人ID").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "sync_type": z.string().describe("同送方式").optional()
}
```

### alipay_open_mini_innerversion_templated_upload

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入。").optional(),
  "app_version": z.string().describe("格式为: x.y.z，其中x、y、z均为整型数字，版本不能重复构建，且新版本号必须高于旧版本").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "ext": z.string().describe("模板的配置参数，完整内容请参见：https://docs.alipay.com/mini/isv/ortga1").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "template_id": z.string().describe("模板id，模板必须已经处于上架/下架状态").optional(),
  "template_version": z.string().describe("模板版本，必须处于上架/下架状态。如果为空，默认取当前在架，或者最新下架的版本。").optional()
}
```

### alipay_open_mini_innerversion_upgrade

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入。").optional(),
  "bundle_id": z.string().describe("端ID，多端场景下区分不同端").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "template_id": z.string().describe("用于升级的模板id").optional(),
  "template_version": z.string().describe("用于升级的模板版本号，版本号必须满足 x.y.z, 且均为数字").optional()
}
```

### alipay_open_mini_innerversion_upload

**Environment variables**



**Input schema**

```ts
{
  "app_origin": z.string().describe("业务来源，新接入方需要向支付宝申请专用来源，否则不予接入。https://yuque.antfin-inc.com/tinyapp-all/qddncu/bidushixiang").optional(),
  "build_app_type": z.string().describe("IDE开发打包类型，写死tinyApp").optional(),
  "build_extra_info": z.string().describe("扩展信息，比如adaptorName、tinycliVersion、tinycliName、import-module、allowPrecompile、extJson、allowInstallDependency、aggregationMainAppId，如果没有特殊要求，tinycliVersion版本请用最新的：\thttps://registry.npm.alibaba-inc.com/@alipay/tiny-cli/huoban-prod").optional(),
  "build_extra_mini_project_config": z.string().describe("用于覆盖开发者配置字段，实现止血和灰度逻辑").optional(),
  "build_js_permission": z.string().describe("jsapi 权限文件,钉钉外请勿传").optional(),
  "build_main_url": z.string().describe("小程序页面主入口。/index.html#page/component/index，该值需要和extendInfo中的page参数保持一致").optional(),
  "build_max_android_client_version": z.string().describe("最大Android客户端版本号，禁止使用，如果需要使用请联系小程序平台评估，否则端上会出现问题").optional(),
  "build_max_ios_client_version": z.string().describe("最大iOS客户单版本号，禁止使用，如果需要使用请联系小程序平台评估，否则端上会出现问题").optional(),
  "build_min_android_client_version": z.string().describe("最小Android客户端版本号，禁止使用，如果需要使用请联系小程序平台评估，否则端上会出现问题").optional(),
  "build_min_ios_client_version": z.string().describe("最小iOS客户单版本号，禁止使用，如果需要使用请联系小程序平台评估，否则端上会出现问题").optional(),
  "build_package_md_5": z.string().describe("源码包文件流的MD5字符串").optional(),
  "build_package_name": z.string().describe("包名称").optional(),
  "build_package_stream": z.string().describe("base64编码后的小程序源码包文件流").optional(),
  "build_qcloud_info": z.string().describe("打包平台扩展信息").optional(),
  "build_signed_pkg_url": z.string().describe("已经构建加签过的包地址").optional(),
  "build_source_pkg_size": z.string().describe("源码包大小").optional(),
  "build_source_pkg_url": z.string().describe("源码包地址，源码包大小不能超过20M且地址必须永久有效，若超20M，将限制业务来源调用。将源码文件夹整个用zip格式压缩成后缀amr文件传至文件服务器").optional(),
  "build_sub_url": z.string().describe("子入口").optional(),
  "build_version": z.string().describe("小程序版本").optional(),
  "builded_package_size": z.string().describe("已经构建过的包大小，单位是字节，主要是给自行构建的场景使用").optional(),
  "builded_package_url": z.string().describe("已经构建的包地址，目前主要自行构建的场景使用").optional(),
  "bundle_id": z.string().describe("一个端的标识，用于区分不同的客户端，每接入一个客户端，都需要向小程序应用中心申请bundleId入驻").optional(),
  "client_type": z.string().describe("多端类型，除了钉钉外其他业务方禁止使用").optional(),
  "inst_code": z.string().describe("上传调试版的接入租户类型。").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "plugin_refs": z.array(z.object({ "lazy": z.boolean().describe("是否懒加载").optional(), "plugin_id": z.string().describe("插件id，即插件的唯一标识，形如小程序的appId").optional(), "plugin_lazy": z.boolean().describe("是否懒加载").optional(), "plugin_version": z.string().describe("小程序引用的插件版本，可以指定插件版本，如：1.0.11；也可以填*，表示引用最新的插件版本，此时，当插件发布新版本后，小程序内的插件会自动更新到最新的版本。").optional() })).describe("小程序代码中引用的插件列表，包含插件id和插件版本信息，业务方需要自行解析源码包的app.json里面的plugins信息").optional()
}
```

### alipay_open_mini_innerversion_uploadstatus_query

**Environment variables**



**Input schema**

```ts
{
  "build_package_id": z.string().describe("包管理ID，用于查询打包状态").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "build_version": z.string().describe("小程序版本").optional(),
  "inst_code": z.string().describe("租户id").optional(),
  "bundle_id": z.string().describe("端信息").optional()
}
```

### alipay_open_mini_isv_create

**Environment variables**



**Input schema**

```ts
{
  "create_mini_request": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_open_mini_isv_fastregister_create

**Environment variables**



**Input schema**

```ts
{
  "app_name": z.string().describe("小程序名称，昵称半自动设定，强制后缀“的试用小程序”。且该参数会进行关键字检查，如果命中品牌关键字则会报错。\t如遇到品牌大客户要用试用小程序，建议用户先换个名字，认证后再修改成品牌名。").optional(),
  "auth_notify_url": z.string().describe("授权确认成功后回调h5链接或小程序页面").optional(),
  "out_order_no": z.string().describe("开发者外部订单号，通过开发者账号+外部订单号做业务幂等").optional(),
  "uid": z.string().describe("商户uid").optional()
}
```

### alipay_open_mini_isv_fastregister_query

**Environment variables**



**Input schema**

```ts
{
  "order_no": z.string().describe("代创建试用小程序单号").optional()
}
```

### alipay_open_mini_isv_query

**Environment variables**



**Input schema**

```ts
{
  "order_no": z.string().describe("服务商代商家创建小程序，由支付宝开放平台返回的订单号用于后续查询处理进展。").optional()
}
```

### alipay_open_mini_miniapp_brand_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_mini_miniapp_brand_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_mini_miniapp_brand_submit

**Environment variables**



**Input schema**

```ts
{
  "apply_type": z.string().describe("申请的资质类型\tSELF_BRAND_APPLY 自有品牌申请(当需要一个新的品牌时选择此项)\tAUTHORIZE_BRAND_APPLY 授权品牌申请(当需要授权一个已有的品牌给商户时选择此项)\tEXIST_BRAND_BIND 品牌绑定，适用于品牌已申请成功的情况(当需要将已有品牌绑定到无品牌小程序时选择此项)").optional(),
  "authorize_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "brand_id": z.string().describe("商户已有品牌Id(只有申请的资质类型为EXIST_BRAND_BIND 时需要填写)").optional(),
  "brand_name": z.string().describe("品牌名称").optional(),
  "brand_registration_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "id_materials": z.array(z.string()).describe("申请人身份证明材料(当前只支持图片类型，请调用alipay.open.mini.miniapp.brand.upload接口上传图片，可以上传多个身份证明材料)").optional()
}
```

### alipay_open_mini_miniapp_brand_upload

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_mini_miniapp_serviceconfig_modify

**Environment variables**



**Input schema**

```ts
{
  "home_open": z.boolean().describe("云客服是否在小程序首页透出，true-开启，false-不开启").optional(),
  "service_config": z.string().describe("客服方式，目前支持ANTCLOUD-云客服").optional()
}
```

### alipay_open_mini_qrcode_bind

**Environment variables**



**Input schema**

```ts
{
  "mode": z.string().describe("匹配规则，仅支持EXACT（精确匹配）、FUZZY（模糊匹配）两个值。\t\t精确匹配：根据填写的二维码地址精确匹配，地址完全一致时才能唤起小程序（如：配置二维码地址为https://www.alipay.com/my?id=123，当用户扫这个地址的二维码可唤起小程序）。\t\t模糊匹配：根据填写的二维码地址模糊匹配，只要地址前缀匹配即可唤起小程序（如：配置二维码地址为https://www.alipay.com/my/，当用户扫的二维码地址为https://www.alipay.com/my/id=123,可唤起小程序）。").optional(),
  "page_redirection": z.string().describe("小程序功能页，配置扫描二维码后打开的小程序功能页面路径").optional(),
  "route_pattern": z.string().describe("模式，用于描述通用的路由url格式，适用于同一个host下面存在大量路由的场景，主要用于提升路由性能，其中{0}、{1} 代表路径中的变量").optional(),
  "route_url": z.string().describe("二维码域名，须通过ICP备案验证，支持http、https、ftp开头的链接").optional()
}
```

### alipay_open_mini_qrcode_query

**Environment variables**



**Input schema**

```ts
{
  "page_no": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("每页条数，最大为10").optional()
}
```

### alipay_open_mini_qrcode_unbind

**Environment variables**



**Input schema**

```ts
{
  "route_group": z.string().describe("路由规则组，用于唯一标记一条路由规则。调用 https://opendocs.alipay.com/apis/00rkye 接口关联普通二维码后的返回值。").optional()
}
```

### alipay_open_mini_resource_promotionsource_notify

**Environment variables**



**Input schema**

```ts
{
  "author_id": z.string().describe("媒体唤起时传入的支付宝id").optional(),
  "params": z.string().describe("媒体唤起时提供的额外参数值列表，这里可能有多个值，打平以后拼入。即url_decode(authcbparams)").optional(),
  "promotion_id": z.string().describe("推广位id").optional(),
  "promotion_name": z.string().describe("推广位名称").optional(),
  "source": z.string().describe("媒体来源，标识调用方").optional()
}
```

### alipay_open_mini_resource_record_notify

**Environment variables**



**Input schema**

```ts
{
  "author_id": z.string().describe("媒体唤起时传入的支付宝id").optional(),
  "mini_app_id": z.string().describe("支付宝appid，代表一个小程序的唯一标识").optional(),
  "params": z.string().describe("媒体唤起时提供的额外参数值列表，这里可能有多个值，打平以后拼入。即url_decode(authcbparams)").optional(),
  "site_id": z.string().describe("回调的siteid 淘宝账号唯一").optional(),
  "source": z.string().describe("媒体来源，标识调用方").optional(),
  "taobao_id": z.string().describe("淘宝id").optional(),
  "taobao_nick": z.string().describe("淘宝昵称").optional()
}
```

### alipay_open_mini_safedomain_create

**Environment variables**



**Input schema**

```ts
{
  "safe_domain": z.string().describe("服务器域名白名单。支付宝小程序在HTTP请求、上传文件等场景只能与域名白名单中的域名进行通讯 。\t新添加域白名单后需重新上传应用版本（模板模式下小程序模板及商家应用都需重新上传、实例化版本）才会生效。老版本应用继续使用老版本名单。\t每个应用最多可添加30个 URL。").optional()
}
```

### alipay_open_mini_safedomain_delete

**Environment variables**



**Input schema**

```ts
{
  "safe_domain": z.string().describe("服务器域名白名单。支付宝小程序在HTTP请求、上传文件等场景只能与域名白名单中的域名进行通讯 。\t删除域白名单后需重新上传应用版本（模板模式下小程序模板及商家应用都需重新上传、实例化版本）才会生效。老版本应用继续使用老版本名单（即删除域名可继续使用）。").optional()
}
```

### alipay_open_mini_template_marketing_create

**Environment variables**



**Input schema**

```ts
{
  "activity_id": z.string().describe("营销活动id").optional(),
  "gmt_end": z.string().describe("活动结束时间").optional(),
  "gmt_start": z.string().describe("活动开始时间").optional(),
  "template_ids": z.array(z.string()).describe("消息模板id列表，最多50个模板id").optional(),
  "title": z.string().describe("消息运营位名称，不填默认使用券名称").optional()
}
```

### alipay_open_mini_template_usage_query

**Environment variables**



**Input schema**

```ts
{
  "template_id": z.string().describe("小程序模板APPID").optional(),
  "page_num": z.number().int().describe("查询的页数，起始为 1（第一页） 。默认第一页。").optional(),
  "page_size": z.number().int().describe("每页的数量，最多查询50个，默认查询10个").optional(),
  "template_version": z.string().describe("模板小程序的版本号").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_templatemessage_usertemplate_apply

**Environment variables**



**Input schema**

```ts
{
  "keyword_list": z.string().describe("开发者自行组合好的模板关键词列表，关键词之间使用英文的逗号“,”进行分割，关键词顺序可以自由搭配，最多支持10个关键词组合,这里组织的关键词，在发送模板消息接口中，按照这里的顺序进行占位符替换").optional(),
  "template_library_id": z.string().describe("模板库id，可登录小程序后台查看获取").optional()
}
```

### alipay_open_mini_templatemsg_maketing_batchquery

**Environment variables**



**Input schema**

```ts
{
  "page_num": z.number().int().describe("分页查询页码").optional(),
  "page_size": z.number().int().describe("每页展示条数，最大支持50个").optional()
}
```

### alipay_open_mini_templatemsg_maketingstatus_modify

**Environment variables**



**Input schema**

```ts
{
  "detail_id": z.string().describe("营销投放详情id").optional(),
  "status": z.string().describe("投放详情状态值，如：INIT:下线状态，ON_LINE:上线状态，DELETED:删除状态").optional()
}
```

### alipay_open_mini_templatemsg_tinypayswitch_confirm

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_mini_tips_delivery_batchquery

**Environment variables**



**Input schema**

```ts
{
  "page_number": z.string().describe("每页记录条数，最小1，最大20").optional(),
  "page_size": z.string().describe("查询的页数，从1开始，最大1000").optional()
}
```

### alipay_open_mini_tips_delivery_create

**Environment variables**



**Input schema**

```ts
{
  "delivery_content": z.string().describe("收藏引导文案内容，不得超过14个字").optional(),
  "delivery_name": z.string().describe("收藏引导活动名称").optional(),
  "end_time": z.string().describe("活动结束时间").optional(),
  "match_type": z.string().describe("匹配类型").optional(),
  "match_url": z.string().describe("目标页面地址，当匹配类型为TARGETURL时，投放文案仅在当前页面生效").optional(),
  "start_time": z.string().describe("活动开始时间").optional()
}
```

### alipay_open_mini_tips_delivery_modify

**Environment variables**



**Input schema**

```ts
{
  "delivery_id": z.string().describe("收藏引导投放活动ID").optional(),
  "operate_type": z.string().describe("活动投放操作类型").optional()
}
```

### alipay_open_mini_tips_delivery_query

**Environment variables**



**Input schema**

```ts
{
  "delivery_id": z.string().describe("收藏引导投放活动ID，查询收藏引导活动必填参数").optional()
}
```

### alipay_open_mini_tips_statistic_query

**Environment variables**



**Input schema**

```ts
{
  "delivery_id": z.string().describe("收藏引导投放活动ID，供查询收藏引导活动配置接口调用\t，当以小程序维度查询数据（query_type为app）时delivery_id为空").optional(),
  "query_type": z.string().describe("查询类型，表示以当前维度进行数据聚合。").optional(),
  "start_date": z.string().describe("查询开始日期，精度为天").optional(),
  "end_date": z.string().describe("查询截止日期，精度为天").optional()
}
```

### alipay_open_mini_version_audit_apply

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_mini_version_audit_cancel

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序审核中的版本号, 不传默认撤消正在审核中的版本。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_version_audited_cancel

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序版本号。可将已过审、审核被驳回的小程序版本退回到开发中的状态。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_version_build_query

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("小程序版本号").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_version_delete

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("小程序版本号。只有状态为开发中的版本才能被删除。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_version_detail_query

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("小程序版本号").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_version_gray_cancel

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家灰度中的小程序版本号，结束灰度后小程序将回到审核通过状态。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_version_gray_online

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序版本号，需为审核通过状态的小程序版本。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional(),
  "gray_strategy": z.string().describe("小程序灰度策略值").optional()
}
```

### alipay_open_mini_version_list_query

**Environment variables**



**Input schema**

```ts
{
  "bundle_id": z.string().describe("端参数，用于查询多端版本，不传默认为支付宝端。如需查看小程序版本信息，则为必传。常见支持如下客户端： com.alipay.alipaywallet：支付宝端； com.alibaba.android.rimet：DINGDING端； com.amap.app：高德端； com.alibaba.ailabs.genie.webapps：天猫精灵端； com.alipay.iot.xpaas：支付宝IoT端。 如需更多端投放，请联系业务BD。").optional(),
  "version_status": z.string().describe("版本状态列表，用英文逗号\",\"分割，可选；不填默认不返回。如需查看小程序版本信息，则为必传。").optional()
}
```

### alipay_open_mini_version_offline

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序已上架版本号。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_version_online

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序版本号，需为审核通过状态或灰度中版本。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional(),
  "downgrade": z.boolean().describe("true - 性能优先； false - 覆盖优先（默认）").optional(),
  "permit_registration_limit_release": z.boolean().describe("如果该字段为true，在首次发版的小程序在备案未完成的情况下，允许小程序上架，但小程序上架后只可以上架可扫码进行使用，但不可被搜索、限制访问人数（50人/每天）、限制公域（无法进行商品、服务、营促销）、限制上架后90天不完成备案自动下架。\t默认为false").optional()
}
```

### alipay_open_mini_version_rollback

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序已上架版本。下架后将自动回滚至上一（已上架）小程序版本。\t例如：商家小程序有 0.01（上一上架版本）、0.02（未上架版本）、0.03（当前上架版本） 三个版本，回滚时需传入商家小程序版本 0.03 表示将 0.03 版本回滚至上一个已上架版本即此处 0.01 版本，同时 0.03 版本将自动下架，0.01 版本自动上架（无需审核）。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}
```

### alipay_open_mini_version_upload

**Environment variables**



**Input schema**

```ts
{
  "app_version": z.string().describe("商家小程序版本号。版本号必须满足 x.y.z, 且均为数字。要求版本号比商户之前最新的版本号高。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional(),
  "ext": z.string().describe("自定义参数，用于配置商家小程序的个性化内容，具体使用方法参见示例代码。\t在小程序中可以通过 <a href=\"https://opendocs.alipay.com/mini/api/getExtConfig\">my.getExtConfig()</a> 或 <a href=\"https://opendocs.alipay.com/mini/api/getExtConfigSync\">my.getExtConfigSync()</a> 获取 ext 参数内容（建议支付宝版本 > 10.1.38，并使用 <a href=\"https://opendocs.alipay.com/mini/api/can-i-use\">my.canIUse</a> 做兼容处理）。").optional(),
  "template_id": z.string().describe("小程序模板 APPID。").optional(),
  "template_version": z.string().describe("小程序模板版本号。版本号必须满足 x.y.z, 且均为数字。不传默认使用最新在架（已上架）模板版本。").optional()
}
```

### alipay_open_mini_widget_data_sync

**Environment variables**



**Input schema**

```ts
{
  "activity_list": z.array(z.object({ "activity_click_url": z.string().describe("活动点击跳转到小程序的链接地址").optional(), "activity_id": z.string().describe("活动的唯一标识，同一个小程序橱窗下，该标识唯一，请开发者自行保证").optional(), "activity_name": z.string().describe("活动名称").optional(), "activity_picture_urls": z.array(z.string()).describe("活动图片链接,最多不能超过5个").optional() })).describe("活动信息列表").optional(),
  "data_type": z.string().describe("数据类型，可选值：ACTIVITY(活动数据)、GOODS(商品数据)").optional(),
  "goods_list": z.array(z.object({ "buying_url": z.string().describe("该商品的小程序购买链接，如果需要进行公域推广，请字段请必填").optional(), "goods_brand": z.string().describe("商品品牌，如果需要进行公域推广，该字段请必填").optional(), "goods_comment": z.string().describe("商品辅助说明文案").optional(), "goods_description_label": z.string().describe("商品说明标签（如-随心退）").optional(), "goods_id": z.string().describe("商品的唯一标识，同一个小部件下，该标识唯一，请开发者自行保证").optional(), "goods_label": z.string().describe("营销标签（如-限量特价），每个商品仅支持一个营销标签").optional(), "goods_name": z.string().describe("商品名称").optional(), "goods_type": z.string().describe("商品所属品类").optional(), "main_pic_url": z.string().describe("商品主图片地址，如果需要进行公域推广，该字段请必填。").optional(), "need_public_promo": z.boolean().describe("是否需要进行公域推广，默认情况下为false").optional(), "order_number": z.number().int().describe("商品排序，自然整数, 数字越小越靠前").optional(), "original_price": z.string().describe("单位\"元\"的商品原价，传入数字，不需要传入\"元\"。如果需要进行公域推广，该字段请必填。").optional(), "publish_cities": z.string().describe("投放城市的列表，详见https://www.mca.gov.cn/article/sj/xzqh/2020/2020/202007170301.html，有多个用英文,分隔。如果没有限制则不传入").optional(), "remaining_quantity": z.number().int().describe("剩余库存，如果需要进行公域推广，该字段请必填，并且当剩余库存为0时，请及时同步。").optional(), "sell_price": z.string().describe("单位\"元\"的售价，传入数字，不需要传入\"元\"。如果需要进行公域推广，该字段请必填。").optional(), "sell_tag_list": z.array(z.string()).describe("商品的卖点标签，如果需要进行公域推广，请至少填写两个卖点标签。").optional(), "sold_quantity": z.number().int().describe("已售数量").optional(), "status": z.string().describe("商品状态，商品的上下架，默认情况为上架，上架为ONLINE,下架为OFFLINE").optional(), "total_quantity": z.number().int().describe("总库存量").optional() })).describe("商品信息列表").optional(),
  "mini_app_id": z.string().describe("商家小程序ID").optional(),
  "pid": z.string().describe("小程序背后的商家，和mini_app_id要求对应").optional()
}
```

### alipay_open_mini_widget_goods_modify

**Environment variables**



**Input schema**

```ts
{
  "buying_url": z.string().describe("需要修改的商品小程序购买链接").optional(),
  "goods_brand": z.string().describe("需要修改的商品品牌").optional(),
  "goods_comment": z.string().describe("需要修改的商品辅助说明文案").optional(),
  "goods_description_label": z.string().describe("需要修改的商品说明标签（如-随心退）").optional(),
  "goods_id": z.string().describe("商品的唯一标识，根据该字段修改商品").optional(),
  "goods_label": z.string().describe("需要修改的商品营销标签（如-限量特价），每个商品仅支持一个营销标签").optional(),
  "goods_name": z.string().describe("需要修改的商品名称").optional(),
  "goods_type": z.string().describe("需要修改的商品所属品类").optional(),
  "main_pic_url": z.string().describe("需要修改的商品主图片地址").optional(),
  "need_public_promo": z.boolean().describe("是否需要进行公域推广").optional(),
  "order_number": z.number().int().describe("需要修改的商品排序，自然整数, 数字越小越靠前").optional(),
  "original_price": z.string().describe("需要修改的商品原价，单位\"元\"，传入数字，不需要传入\"元\"").optional(),
  "publish_cities": z.string().describe("需要修改的商品投放城市的列表，详见https://www.mca.gov.cn/article/sj/xzqh/2020/2020/202007170301.html，有多个用英文,分隔。如果没有限制则不传入").optional(),
  "sell_price": z.string().describe("需要修改的商品售价，位\"元\"，传入数字，不需要传入\"元\"").optional(),
  "sell_tag_list": z.array(z.string()).describe("需要修改的商品卖点标签").optional()
}
```

### alipay_open_mini_widget_goods_query

**Environment variables**



**Input schema**

```ts
{
  "mini_app_id": z.string().describe("根据承接品的商家小程序ID查询").optional(),
  "pid": z.string().describe("根据承接该品的小程序背后的商家查询").optional(),
  "goods_id": z.string().describe("根据商品的唯一标识查询").optional(),
  "page_num": z.number().int().describe("查询第几页，最小值为1").optional(),
  "page_size": z.number().int().describe("查询页面数量，最大值为50").optional()
}
```

### alipay_open_mini_widget_goods_upload

**Environment variables**



**Input schema**

```ts
{
  "goods_list": z.array(z.object({ "buying_url": z.string().describe("该商品的小程序购买链接，如果需要进行公域推广，请字段请必填").optional(), "goods_brand": z.string().describe("商品品牌，如果需要进行公域推广，该字段请必填").optional(), "goods_comment": z.string().describe("商品辅助说明文案").optional(), "goods_description_label": z.string().describe("商品说明标签（如-随心退）").optional(), "goods_id": z.string().describe("商品的唯一标识，同一个小部件下，该标识唯一，请开发者自行保证").optional(), "goods_label": z.string().describe("营销标签（如-限量特价），每个商品仅支持一个营销标签").optional(), "goods_name": z.string().describe("商品名称").optional(), "goods_type": z.string().describe("商品所属品类").optional(), "main_pic_url": z.string().describe("商品主图片地址，如果需要进行公域推广，该字段请必填。").optional(), "need_public_promo": z.boolean().describe("是否需要进行公域推广，默认情况下为false").optional(), "order_number": z.number().int().describe("商品排序，自然整数, 数字越小越靠前").optional(), "original_price": z.string().describe("单位\"元\"的商品原价，传入数字，不需要传入\"元\"。如果需要进行公域推广，该字段请必填。").optional(), "publish_cities": z.string().describe("投放城市的列表，详见https://www.mca.gov.cn/article/sj/xzqh/2020/2020/202007170301.html，有多个用英文,分隔。如果没有限制则不传入").optional(), "remaining_quantity": z.number().int().describe("剩余库存，如果需要进行公域推广，该字段请必填，并且当剩余库存为0时，请及时同步。").optional(), "sell_price": z.string().describe("单位\"元\"的售价，传入数字，不需要传入\"元\"。如果需要进行公域推广，该字段请必填。").optional(), "sell_tag_list": z.array(z.string()).describe("商品的卖点标签，如果需要进行公域推广，请至少填写两个卖点标签。").optional(), "sold_quantity": z.number().int().describe("已售数量").optional(), "status": z.string().describe("商品状态，商品的上下架，默认情况为上架，上架为ONLINE,下架为OFFLINE").optional(), "total_quantity": z.number().int().describe("总库存量").optional() })).describe("商品信息列表").optional(),
  "mini_app_id": z.string().describe("用于承接品的商家小程序ID").optional(),
  "pid": z.string().describe("品的售卖商家，即承接该品的小程序背后的商家。和mini_app_id要求对应").optional()
}
```

### alipay_open_operation_openbizmock_delete_query

**Environment variables**



**Input schema**

```ts
{
  "b_query": z.string().describe("纬度").optional()
}
```

### alipay_open_operation_openbizmock_patch_query

**Environment variables**



**Input schema**

```ts
{
  "b_query": z.string().describe("test2222").optional(),
  "c_body": z.string().describe("test").optional(),
  "complex_a": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "complex_b": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "complex_c": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "complex_d": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "id_type_modify_open_id": z.string().describe("1").optional(),
  "id_typea": z.string().describe("id_type").optional(),
  "price": z.string().describe("元").optional(),
  "uida": z.string().describe("1").optional()
}
```

### alipay_open_operation_openbizmock_put_query

**Environment variables**



**Input schema**

```ts
{
  "b_query": z.string().describe("test").optional(),
  "c_body": z.string().describe("test").optional()
}
```

### alipay_open_operation_openbizmock_test_query

**Environment variables**



**Input schema**

```ts
{
  "fuza": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "out_open_id": z.string().describe("哈哈").optional(),
  "u_test": z.string().describe("哈哈").optional()
}
```

### alipay_open_operation_openbizmock_testpathkey_query

**Environment variables**



**Input schema**

```ts
{
  "keykey": z.string().describe("ceshi"),
  "a": z.string().describe("测试"),
  "b": z.string().describe("ceshi").optional(),
  "c": z.string().describe("测试").optional()
}
```

### alipay_open_public_account_create

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("账户添加成功，在支付宝与其对应的协议号。如果账户重复添加，接口保证幂等依然视为添加成功，返回此前该账户在支付宝对应的协议号。其他异常该字段不存在。").optional(),
  "bind_account_no": z.string().describe("绑定帐号，建议在开发者的系统中保持唯一性").optional(),
  "display_name": z.string().describe("开发者期望在服务窗首页看到的关于该用户的显示信息，最长10个字符").optional(),
  "from_user_id": z.string().describe("要绑定的商户会员对应的支付宝userid，2088开头长度为16位的字符串").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional(),
  "real_name": z.string().describe("要绑定的商户会员的真实姓名，最长10个汉字").optional(),
  "remark": z.string().describe("备注信息，开发者可以通过该字段纪录其他的额外信息").optional()
}
```

### alipay_open_public_account_delete

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("协议号，商户会员在支付宝服务窗账号中的唯一标识，与bind_account_no不能同时为空").optional(),
  "bind_account_no": z.string().describe("绑定帐号，建议在开发者的系统中保持唯一性，与agreement_id不能同时为空").optional(),
  "from_user_id": z.string().describe("绑定用户的支付宝userid，2088开头16位长度的字符串，与agreementId不能同时为空").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional()
}
```

### alipay_open_public_account_query

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("用户的支付宝用户号，2088开头。").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional()
}
```

### alipay_open_public_account_reset

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("需要重置的协议号，商户会员在支付宝生活号账号中的唯一标识。").optional(),
  "bind_account_no": z.string().describe("绑定帐号，建议在开发者的系统中保持唯一性").optional(),
  "display_name": z.string().describe("商户期望在生活号首页看到的关于该用户的显示信息，最长10个字符。\t").optional(),
  "from_user_id": z.string().describe("要绑定的商户会员对应的支付宝唯一标识，2088开头长度为16位的字符串。\t").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional(),
  "real_name": z.string().describe("要绑定的商户会员的真实姓名，最长10个汉字").optional(),
  "remark": z.string().describe("备注信息，开发者可以通过该字段纪录其他的额外信息").optional()
}
```

### alipay_open_public_advert_batchquery

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_advert_create

**Environment variables**



**Input schema**

```ts
{
  "advert_items": z.array(z.object({ "img_url": z.string().describe("广告图片url, 尺寸为996*240，最大不超过5M，支持格式:.jpg、.png ，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "link_type": z.string().describe("跳转类型，网页:HTTP、小程序:APP，不传默认HTTP").optional(), "link_url": z.string().describe("跳转链接，点击广告图片跳到的链接url").optional(), "name": z.string().describe("广告帧名称，可选").optional() })).describe(" 广告位轮播内容列表。数量限制：大于1个，小于5个。广告位轮播内容顺序：与接口传入的顺序排列一致。").optional()
}
```

### alipay_open_public_advert_delete

**Environment variables**



**Input schema**

```ts
{
  "advert_id": z.string().describe("待删除的广告位id，删除通投广告位需传递此参数").optional(),
  "advert_group": z.string().describe("待删除的广告位分组标识，删除个性化广告位需传递此参数。").optional()
}
```

### alipay_open_public_advert_modify

**Environment variables**



**Input schema**

```ts
{
  "advert_id": z.string().describe("广告位id，通过<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.advert.create\">alipay.open.public.advert.create</a>(生活号广告位添加接口)添加广告位获取。").optional(),
  "advert_items": z.array(z.object({ "img_url": z.string().describe("广告图片url, 尺寸为996*240，最大不超过5M，支持格式:.jpg、.png ，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "link_type": z.string().describe("跳转类型，网页:HTTP、小程序:APP，不传默认HTTP").optional(), "link_url": z.string().describe("跳转链接，点击广告图片跳到的链接url").optional(), "name": z.string().describe("广告帧名称，可选").optional() })).describe("广告位轮播内容列表。数量限制：大于1个，小于5个。广告位轮播内容顺序：与接口传入的顺序排列一致。").optional()
}
```

### alipay_open_public_articlesummary_data_batchquery

**Environment variables**



**Input schema**

```ts
{
  "begin_date": z.string().describe("数据开始日期，时间格式为 \"yyyyMMdd\" 。").optional(),
  "end_date": z.string().describe("数据结束日期，时间格式为\"yyyyMMdd\"。查询数据开始日期/结束日期时间跨度最大30天。").optional()
}
```

### alipay_open_public_contact_follow_batchquery

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional()
}
```

### alipay_open_public_default_extension_create

**Environment variables**



**Input schema**

```ts
{
  "areas": z.array(z.object({ "goto_url": z.string().describe("跳转链接，当type为\"image\"时必传，必须是https或alipays开头的url链接。已废弃").optional(), "height": z.number().int().describe("扩展区高度，当type值为\"h5\"时必填，取值范围为200-500的整数,单位是px").optional(), "name": z.string().describe("扩展区名字").optional(), "type": z.string().describe("扩展区类型，当前支持的值为h5，表示扩展区内容类型为h5。").optional(), "url": z.string().describe("扩展区url，传入h5页面url，必须是https开头的链接").optional() })).describe("默认扩展区列表，最多包含3个扩展区").optional()
}
```

### alipay_open_public_follow_batchquery

**Environment variables**



**Input schema**

```ts
{
  "next_user_id": z.string().describe("当关注者数量超过10000时使用，本次拉取数据中第一个用户的userId，从上次接口调用返回值中获取。第一次调用置空").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional()
}
```

### alipay_open_public_group_batchquery

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_group_create

**Environment variables**



**Input schema**

```ts
{
  "label_rule": z.array(z.object({ "label_id": z.string().describe("标签id").optional(), "label_value": z.string().describe("标签取值，当有多个取值时用英文\",\"分隔（比如使用in操作符时）；不允许传入下划线\"_\"、竖线\"|\"或者空格\" \"").optional(), "operator": z.string().describe("目前支持EQ（等于）、NEQ（不等于）、LT（小于），GT（大于）、LTEQ（小于等于）、GTEQ（大于等于）、LIKE（匹配）、BETWEEN（范围）、IN（包含）、NOTIN（不包含）操作").optional() })).describe("标签规则，满足该规则的粉丝将被圈定，标签id不能重复").optional(),
  "name": z.string().describe("分组名称，仅支持中文、字母、数字、下划线的组合。").optional()
}
```

### alipay_open_public_group_crowd_query

**Environment variables**



**Input schema**

```ts
{
  "label_rule": z.array(z.object({ "label_id": z.string().describe("标签id").optional(), "label_value": z.string().describe("标签取值，当有多个取值时用英文\",\"分隔（比如使用in操作符时）；不允许传入下划线\"_\"、竖线\"|\"或者空格\" \"").optional(), "operator": z.string().describe("目前支持EQ（等于）、NEQ（不等于）、LT（小于），GT（大于）、LTEQ（小于等于）、GTEQ（大于等于）、LIKE（匹配）、BETWEEN（范围）、IN（包含）、NOTIN（不包含）操作").optional() })).describe("用户分组的规则项列表，规则项之间元素是与的逻辑，每个规则项内部用多个值表示或的逻辑").optional()
}
```

### alipay_open_public_group_delete

**Environment variables**



**Input schema**

```ts
{
  "group_id": z.string().describe("分组ID，通过<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.group.create\">alipay.open.public.group.create</a>（用户分组创建接口)\t创建用户分组获取。").optional()
}
```

### alipay_open_public_group_modify

**Environment variables**



**Input schema**

```ts
{
  "group_id": z.string().describe("分组ID，通过<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.group.create\">alipay.open.public.group.create</a>（用户分组创建接口)\t创建用户分组获取。").optional(),
  "label_rule": z.array(z.object({ "label_id": z.string().describe("标签id").optional(), "label_value": z.string().describe("标签取值，当有多个取值时用英文\",\"分隔（比如使用in操作符时）；不允许传入下划线\"_\"、竖线\"|\"或者空格\" \"").optional(), "operator": z.string().describe("目前支持EQ（等于）、NEQ（不等于）、LT（小于），GT（大于）、LTEQ（小于等于）、GTEQ（大于等于）、LIKE（匹配）、BETWEEN（范围）、IN（包含）、NOTIN（不包含）操作").optional() })).describe("标签规则，满足该规则的粉丝将被圈定，标签id不能重复").optional(),
  "name": z.string().describe("分组名称，仅支持中文、字母、数字、下划线的组合。").optional()
}
```

### alipay_open_public_info_modify

**Environment variables**



**Input schema**

```ts
{
  "app_name": z.string().describe("生活号名称，2-20个字之间。注意：\t* 不得含有违反法律法规和公序良俗的相关信息；\t* 不得侵害他人名誉权、知识产权、商业秘密等合法权利；\t* 不得以太过广泛的、或产品、行业词组来命名，如：女装、皮革批发；\t* 不得以实名认证的媒体资质账号创建服务窗，或媒体相关名称命名服务窗，如：XX电视台、XX杂志等。").optional(),
  "auth_pic": z.string().describe("授权运营书图片地址，企业商户若为被经营方授权，需上传加盖公章的扫描件。支持 .jpg、 .jpeg、 .png 格式，需小于1M。使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional(),
  "background_url": z.string().describe("背景图片地址，建议尺寸 1600 x 1000px，支持.jpg .jpeg .png格式，小于1M。使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional(),
  "introduction": z.string().describe("简介").optional(),
  "license_url": z.string().describe("营业执照地址，建议尺寸 320*320 px，支持 .jpg、 .jpeg、 .png 格式，需小于1M。\t使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional(),
  "logo_url": z.string().describe("生活号头像地址，建议尺寸 320*320 px，支持 .jpg、 .jpeg、 .png 格式，需小于1M。\t使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "public_greeting": z.string().describe("欢迎语").optional(),
  "shop_pics": z.array(z.string()).describe("门店照片地址，支持 .jpg、 .jpeg、 .png 格式，需小于1M。\t使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional()
}
```

### alipay_open_public_info_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_label_create

**Environment variables**



**Input schema**

```ts
{
  "name": z.string().describe("标签名").optional()
}
```

### alipay_open_public_label_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_label_user_query

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("支付宝用户的userid，2088开头长度为16位的字符串").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional()
}
```

### alipay_open_public_life_aboard_apply

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_life_agentcreate_query

**Environment variables**



**Input schema**

```ts
{
  "out_biz_no": z.string().describe("由开发者创建的外部入驻申请单据号，需与<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.life.agent.create\">alipay.open.public.life.agent.create</a>(isv代创建生活号接口)的out_biz_no一致。").optional()
}
```

### alipay_open_public_life_debark_apply

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_life_label_batchquery

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_life_label_create

**Environment variables**



**Input schema**

```ts
{
  "data_type": z.string().describe("标签值类型，不填默认为 string 类型。\t注意：目前只支持 string（字符串类型）。").optional(),
  "label_name": z.string().describe("自定义标签名。\t注意：每个生活号最多创建 100 个自定义标签。").optional()
}
```

### alipay_open_public_life_label_delete

**Environment variables**



**Input schema**

```ts
{
  "label_id": z.string().describe("标签 id，只支持生活号自定义标签。通过 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.life.label.create\">alipay.open.public.life.label.create</a>(创建标签接口)创建自定义标签后获取。").optional()
}
```

### alipay_open_public_life_label_modify

**Environment variables**



**Input schema**

```ts
{
  "label_id": z.string().describe("标签 id，只支持生活号自定义标签。通过 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.life.label.create\">alipay.open.public.life.label.create</a>(创建标签接口)创建自定义标签后获取。").optional(),
  "label_name": z.string().describe("标签名").optional()
}
```

### alipay_open_public_life_msg_recall

**Environment variables**



**Input schema**

```ts
{
  "message_id": z.string().describe("消息id，可在调用<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.message.total.send\">群发消息</a>、<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.message.group.send\">组发消息</a>接口时会返回，请注意保存留用。").optional()
}
```

### alipay_open_public_life_msg_send

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_matchuser_label_create

**Environment variables**



**Input schema**

```ts
{
  "label_id": z.string().describe("标签 id，只支持生活号自定义标签。通过 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.life.label.create\">alipay.open.public.life.label.create</a>(创建标签接口)创建自定义标签后获取。").optional(),
  "label_value": z.string().describe("标签值，由开发者自主指定，标签值类型要满足 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.life.label.create\">alipay.open.public.life.label.create</a>(创建标签接口)中data_type参数的限定。").optional(),
  "matchers": z.array(z.object({ "identity_card": z.string().describe("身份证号码，与user_id、mobile_no不能同时为空").optional(), "mobile_no": z.string().describe("手机号码，与user_id、identity_card不能同时为空").optional(), "open_id": z.string().describe("支付宝用户openid").optional(), "user_id": z.string().describe("支付宝用户id，2088开头16位长度的字符串，与mobile_no、identity_card不能同时为空").optional() })).describe("支付宝用户匹配器列表，最多传入10条").optional()
}
```

### alipay_open_public_matchuser_label_delete

**Environment variables**



**Input schema**

```ts
{
  "label_id": z.string().describe("标签 id，只支持生活号自定义标签。通过 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.life.label.create\">alipay.open.public.life.label.create</a>(创建标签接口)创建自定义标签后获取。").optional(),
  "matchers": z.array(z.object({ "identity_card": z.string().describe("身份证号码，与user_id、mobile_no不能同时为空").optional(), "mobile_no": z.string().describe("手机号码，与user_id、identity_card不能同时为空").optional(), "open_id": z.string().describe("支付宝用户openid").optional(), "user_id": z.string().describe("支付宝用户id，2088开头16位长度的字符串，与mobile_no、identity_card不能同时为空").optional() })).describe("支付宝用户匹配器列表，最多传入10条").optional()
}
```

### alipay_open_public_menu_batchquery

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_menu_create

**Environment variables**



**Input schema**

```ts
{
  "button": z.array(z.object({ "action_param": z.string().describe("当actionType为link时，该参数为url链接；\r\t当actionType为out时，该参数为用户自定义参数；\r\t当actionType为tel时，该参数为电话号码。\r\t当action_type为map时，该参数为查看地图的关键字。\r\t当action_type为consumption时，该参数可不传。\r\t该参数最长255个字符，不允许冒号等特殊字符。").optional(), "action_type": z.string().describe("菜单类型：\r\tout——事件型菜单；\r\tlink——链接型菜单；\r\ttel——点击拨打电话；\r\tmap——点击查看地图；\r\tconsumption——点击查看用户与生活号管理员账号之间的消费记录").optional(), "icon": z.string().describe("icon图片url，必须是http协议的url，尺寸为60X60，最大不超过5M，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "name": z.string().describe("菜单名称，icon菜单名称不超过5个汉字，文本菜单名称不超过9个汉字，编码格式为GBK").optional(), "sub_button": z.array(z.object({ "action_param": z.string().describe("当actionType为link时，该参数为url链接； \r\t当actionType为out时，该参数为用户自定义参数； \r\t当actionType为tel时，该参数为电话号码。 \r\t当action_type为map时，该参数为查看地图的关键字。\r\t 当action_type为consumption时，该参数可不传。 \r\t该参数最长255个字符，不允许冒号等特殊字符。").optional(), "action_type": z.string().describe("菜单类型：\r\tout——事件型菜单；\r\tlink——链接型菜单；\r\ttel——点击拨打电话；\r\tmap——点击查看地图；\r\tconsumption——点击查看用户与生活号管理员账号之间的消费记录").optional(), "icon": z.string().describe("icon图片url，必须是http协议的url，尺寸为60X60，最大不超过5M，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "name": z.string().describe("菜单名称，icon菜单名称不超过5个汉字，文本菜单名称不超过9个汉字，编码格式为GBK").optional() })).describe("二级菜单数组，若sub_button为空，则一级菜单必须指定action_type和action_param的值，二级菜单个数可以为1~5个。").optional() })).describe("一级菜单列表。说明：\t* 如果是文本菜单，最多有4个一级菜单，若开发者在后台打开了\"咨询反馈\"的开关，则只能有3个一级菜单。\t* 如果是 ICON 菜单信息，最多有80个一级菜单(忽略二级菜单)。").optional(),
  "type": z.string().describe("菜单类型，不填时默认为 text（文本型菜单）。枚举值如下：\t* text：文本型菜单。\t* icon：表示 icon 型菜单，当传值为\"icon\"时，菜单节点的icon字段必传。").optional()
}
```

### alipay_open_public_menu_data_batchquery

**Environment variables**



**Input schema**

```ts
{
  "begin_date": z.string().describe("数据开始日期，时间格式为 \"yyyyMMdd\" 。").optional(),
  "end_date": z.string().describe("数据结束日期，时间格式为\"yyyyMMdd\"。查询数据开始日期/结束日期时间跨度最大30天。").optional()
}
```

### alipay_open_public_menu_modify

**Environment variables**



**Input schema**

```ts
{
  "button": z.array(z.object({ "action_param": z.string().describe("当actionType为link时，该参数为url链接；\r\t当actionType为out时，该参数为用户自定义参数；\r\t当actionType为tel时，该参数为电话号码。\r\t当action_type为map时，该参数为查看地图的关键字。\r\t当action_type为consumption时，该参数可不传。\r\t该参数最长255个字符，不允许冒号等特殊字符。").optional(), "action_type": z.string().describe("菜单类型：\r\tout——事件型菜单；\r\tlink——链接型菜单；\r\ttel——点击拨打电话；\r\tmap——点击查看地图；\r\tconsumption——点击查看用户与生活号管理员账号之间的消费记录").optional(), "icon": z.string().describe("icon图片url，必须是http协议的url，尺寸为60X60，最大不超过5M，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "name": z.string().describe("菜单名称，icon菜单名称不超过5个汉字，文本菜单名称不超过9个汉字，编码格式为GBK").optional(), "sub_button": z.array(z.object({ "action_param": z.string().describe("当actionType为link时，该参数为url链接； \r\t当actionType为out时，该参数为用户自定义参数； \r\t当actionType为tel时，该参数为电话号码。 \r\t当action_type为map时，该参数为查看地图的关键字。\r\t 当action_type为consumption时，该参数可不传。 \r\t该参数最长255个字符，不允许冒号等特殊字符。").optional(), "action_type": z.string().describe("菜单类型：\r\tout——事件型菜单；\r\tlink——链接型菜单；\r\ttel——点击拨打电话；\r\tmap——点击查看地图；\r\tconsumption——点击查看用户与生活号管理员账号之间的消费记录").optional(), "icon": z.string().describe("icon图片url，必须是http协议的url，尺寸为60X60，最大不超过5M，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "name": z.string().describe("菜单名称，icon菜单名称不超过5个汉字，文本菜单名称不超过9个汉字，编码格式为GBK").optional() })).describe("二级菜单数组，若sub_button为空，则一级菜单必须指定action_type和action_param的值，二级菜单个数可以为1~5个。").optional() })).describe("一级菜单列表。说明：\t* 如果是文本菜单，最多有4个一级菜单，若开发者在后台打开了\"咨询反馈\"的开关，则只能有3个一级菜单。\t* 如果是 ICON 菜单信息，最多有80个一级菜单(忽略二级菜单)。").optional(),
  "type": z.string().describe("菜单类型，不填时默认为 text（文本型菜单）。枚举值如下：\t* text：文本型菜单。\t* icon：表示 icon 型菜单，当传值为\"icon\"时，菜单节点的icon字段必传。").optional()
}
```

### alipay_open_public_menu_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_message_content_create

**Environment variables**



**Input schema**

```ts
{
  "benefit": z.string().describe("活动利益点，最多10个字符。仅 ctype 为 activity 类型时才需传入。").optional(),
  "content": z.string().describe("消息正文（支持富文本）").optional(),
  "could_comment": z.string().describe("是否允许评论。枚举支持：\t*T：允许。\t*F：不允许，默认不允许。").optional(),
  "cover": z.string().describe("封面图url，需传入 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">图片上传接口</a>上传图片获取的 image_url。\t注意：尺寸为 996*450，最大不超过3M，支持格式：jpg、.png 。").optional(),
  "ctype": z.string().describe("图文类型，不填默认普通图文。还支持 activity（活动图文）。").optional(),
  "ext_tags": z.string().describe("关键词列表，英文逗号分隔，最多不超过5个").optional(),
  "login_ids": z.string().describe("可预览支付宝账号列表，需要预览时才填写， 英文逗号分隔，最多不超过10个").optional(),
  "title": z.string().describe("标题").optional()
}
```

### alipay_open_public_message_content_modify

**Environment variables**



**Input schema**

```ts
{
  "benefit": z.string().describe("活动利益点，图文类型ctype为activity类型时才需要传，最多10个字符").optional(),
  "content": z.string().describe("消息正文（支持富文本）").optional(),
  "content_id": z.string().describe("内容id").optional(),
  "could_comment": z.string().describe("是否允许评论 T:允许 F:不允许，默认不允许").optional(),
  "cover": z.string().describe("封面图url, 尺寸为996*450，最大不超过3M，支持格式:.jpg、.png ，请先调用<ahref=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url。").optional(),
  "ctype": z.string().describe("图文类型  activity: 活动图文，不填默认普通图文").optional(),
  "ext_tags": z.string().describe("关键词列表，英文逗号分隔，最多不超过5个").optional(),
  "login_ids": z.string().describe("可预览支付宝账号列表，需要预览时才填写， 英文逗号分隔，最多不超过10个").optional(),
  "title": z.string().describe("标题").optional()
}
```

### alipay_open_public_message_custom_send

**Environment variables**



**Input schema**

```ts
{
  "articles": z.array(z.object({ "action_name": z.string().describe("链接文字").optional(), "desc": z.string().describe("图文消息内容").optional(), "image_url": z.string().describe("图片链接，对于多条图文消息的第一条消息，该字段不能为空; 请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "title": z.string().describe("图文消息标题").optional(), "url": z.string().describe("点击图文消息跳转的链接").optional() })).describe("msg_type为image-text，本参数必填。\t").optional(),
  "chat": z.string().describe("是否为聊天消息。枚举支持：\t*0：代表非聊天消息，消息显示在生活号主页，默认为 0。\t*1：代表是聊天消息，消息显示在咨询反馈列表页。").optional(),
  "event_type": z.string().describe("触发消息的事件类型，默认为空。代表商户未改造。如果是follow，代表关注消息。click代表菜单点击，enter_ppchat代表进入事件；请注意事件类型的大小写").optional(),
  "msg_type": z.string().describe("消息类型。枚举支持：\t* text：表示文本消息；\t* image-text：表示图文消息。").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional(),
  "text": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "to_user_id": z.string().describe("消息接收用户的userid").optional()
}
```

### alipay_open_public_message_group_send

**Environment variables**



**Input schema**

```ts
{
  "articles": z.array(z.object({ "action_name": z.string().describe("链接文字").optional(), "desc": z.string().describe("图文消息内容").optional(), "image_url": z.string().describe("图片链接，对于多条图文消息的第一条消息，该字段不能为空; 请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "title": z.string().describe("图文消息标题").optional(), "url": z.string().describe("点击图文消息跳转的链接").optional() })).describe("图文消息，当 msg_type为image-text，本参数必填。").optional(),
  "group_id": z.string().describe("分组ID，通过<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.group.create\">alipay.open.public.group.create</a>（用户分组创建接口)\t创建用户分组获取。").optional(),
  "image": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "msg_type": z.string().describe("消息类型。枚举支持：\t* text：表示文本消息；\t* image-text：表示图文消息。\t").optional(),
  "text": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_open_public_message_label_send

**Environment variables**



**Input schema**

```ts
{
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "material": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_open_public_message_single_send

**Environment variables**



**Input schema**

```ts
{
  "template": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "to_open_id": z.string().describe("支付宝openId，用于支付宝用户在当前应用下的用户标识。").optional(),
  "to_user_id": z.string().describe("消息接收用户的支付宝用户id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional()
}
```

### alipay_open_public_message_total_send

**Environment variables**



**Input schema**

```ts
{
  "articles": z.array(z.object({ "action_name": z.string().describe("链接文字").optional(), "desc": z.string().describe("图文消息内容").optional(), "image_url": z.string().describe("图片链接，对于多条图文消息的第一条消息，该字段不能为空; 请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "title": z.string().describe("图文消息标题").optional(), "url": z.string().describe("点击图文消息跳转的链接").optional() })).describe("图文消息，当 msg_type为image-text，本参数必填。\t").optional(),
  "msg_type": z.string().describe("消息类型。枚举支持：\t* text：表示文本消息；\t* image-text：表示图文消息。").optional(),
  "text": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_open_public_payee_bind_create

**Environment variables**



**Input schema**

```ts
{
  "login_id": z.string().describe("收款账号，需要绑定的收款支付宝账号，请勿与 pid 同时传入。").optional(),
  "pid": z.string().describe("支付宝用户id，2088开头的16位长度字符串，请勿与 login_id 同时传入。").optional()
}
```

### alipay_open_public_payee_bind_delete

**Environment variables**



**Input schema**

```ts
{
  "login_id": z.string().describe("收款账号，需要绑定的收款支付宝账号，请勿与 pid 同时传入。").optional(),
  "pid": z.string().describe("支付宝用户id，2088开头的16位长度字符串，请勿与 login_id 同时传入。").optional()
}
```

### alipay_open_public_personalized_extension_batchquery

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_personalized_extension_create

**Environment variables**



**Input schema**

```ts
{
  "areas": z.array(z.object({ "goto_url": z.string().describe("跳转链接，当type为\"image\"时必传，必须是https或alipays开头的url链接。已废弃").optional(), "height": z.number().int().describe("扩展区高度，当type值为\"h5\"时必填，取值范围为200-500的整数,单位是px").optional(), "name": z.string().describe("扩展区名字").optional(), "type": z.string().describe("扩展区类型，当前支持的值为h5，表示扩展区内容类型为h5。").optional(), "url": z.string().describe("扩展区url，传入h5页面url，必须是https开头的链接").optional() })).describe("扩展区列表，最大条数为3").optional(),
  "label_rule": z.array(z.object({ "label_id": z.string().describe("标签id").optional(), "label_value": z.string().describe("标签值，当有多个取值时用英文\",\"分隔，不允许传入下划线\"_\"、竖线\"|\"或者空格\" \"和方括号\"[\"、\"]\"").optional(), "operator": z.string().describe("目前支持EQ（等于）、BETWEEN（范围）、IN（包含）三种操作符；每个标签支持的运算符可以通过<a href=\"https://docs.open.alipay.com/api_6/alipay.open.public.life.label.batchquery#sintq\">标签列表查询接口</a>获得。该字段允许为空，默认运算符为IN").optional() })).describe("标签规则，目前限定只能传入1条，在扩展区上线后，满足该标签规则的用户进入生活号首页，将看到该套扩展区。生成标签及打标详情参见<a href=\"https://opendocs.alipay.com/fw/api/106877\">标签管理</a>。").optional()
}
```

### alipay_open_public_personalized_extension_delete

**Environment variables**



**Input schema**

```ts
{
  "extension_key": z.string().describe("一套扩展区的key，删除默认扩展区时传入default ，查询扩展区列表可以获得每套扩展区的key").optional()
}
```

### alipay_open_public_personalized_menu_create

**Environment variables**



**Input schema**

```ts
{
  "button": z.array(z.object({ "action_param": z.string().describe("当actionType为link时，该参数为url链接；\r\t当actionType为out时，该参数为用户自定义参数；\r\t当actionType为tel时，该参数为电话号码。\r\t当action_type为map时，该参数为查看地图的关键字。\r\t当action_type为consumption时，该参数可不传。\r\t该参数最长255个字符，不允许冒号等特殊字符。").optional(), "action_type": z.string().describe("菜单类型：\r\tout——事件型菜单；\r\tlink——链接型菜单；\r\ttel——点击拨打电话；\r\tmap——点击查看地图；\r\tconsumption——点击查看用户与生活号管理员账号之间的消费记录").optional(), "icon": z.string().describe("icon图片url，必须是http协议的url，尺寸为60X60，最大不超过5M，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "name": z.string().describe("菜单名称，icon菜单名称不超过5个汉字，文本菜单名称不超过9个汉字，编码格式为GBK").optional(), "sub_button": z.array(z.object({ "action_param": z.string().describe("当actionType为link时，该参数为url链接； \r\t当actionType为out时，该参数为用户自定义参数； \r\t当actionType为tel时，该参数为电话号码。 \r\t当action_type为map时，该参数为查看地图的关键字。\r\t 当action_type为consumption时，该参数可不传。 \r\t该参数最长255个字符，不允许冒号等特殊字符。").optional(), "action_type": z.string().describe("菜单类型：\r\tout——事件型菜单；\r\tlink——链接型菜单；\r\ttel——点击拨打电话；\r\tmap——点击查看地图；\r\tconsumption——点击查看用户与生活号管理员账号之间的消费记录").optional(), "icon": z.string().describe("icon图片url，必须是http协议的url，尺寸为60X60，最大不超过5M，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "name": z.string().describe("菜单名称，icon菜单名称不超过5个汉字，文本菜单名称不超过9个汉字，编码格式为GBK").optional() })).describe("二级菜单数组，若sub_button为空，则一级菜单必须指定action_type和action_param的值，二级菜单个数可以为1~5个。").optional() })).describe("一级菜单列表。说明：\t* 如果是文本菜单，最多有4个一级菜单，若开发者在后台打开了\"咨询反馈\"的开关，则只能有3个一级菜单。\t* 如果是 ICON 菜单信息，最多有80个一级菜单(忽略二级菜单)。").optional(),
  "group_id": z.string().describe("人群分组id。分组创建及管理接入详情参见 <a href=\"https://opendocs.alipay.com/fw/api/106931\">分组管理</a>。\t注意：group_id 与 label_rule（标签规则）不能同时为空。").optional(),
  "label_rule": z.array(z.object({ "label_id": z.string().describe("标签id").optional(), "label_value": z.string().describe("标签值，当有多个取值时用英文\",\"分隔，不允许传入下划线\"_\"、竖线\"|\"或者空格\" \"和方括号\"[\"、\"]\"").optional(), "operator": z.string().describe("目前支持EQ（等于）、BETWEEN（范围）、IN（包含）三种操作符；每个标签支持的运算符可以通过<a href=\"https://docs.open.alipay.com/api_6/alipay.open.public.life.label.batchquery#sintq\">标签列表查询接口</a>获得。该字段允许为空，默认运算符为IN").optional() })).describe("标签规则，目前限定只能传入1条，在个性化菜单创建成功后，满足该标签规则的用户进入生活号首页，将看到该套菜单。生成标签及打标详情参见<a href=\"https://opendocs.alipay.com/fw/api/106877\">标签管理</a>。\t注意：group_id（人群分组id） 与 label_rule 不能同时为空。").optional(),
  "mobile_client_type": z.string().describe("手机客户端类型，枚举支持：\t*iphone；\t*android；\t*wp；\t说明：不填为不区分机型。").optional(),
  "type": z.string().describe("菜单类型，不填时默认为 text（文本型菜单）。枚举值如下：\t* text：文本型菜单。\t* icon：表示 icon 型菜单，当传值为\"icon\"时，菜单节点的icon字段必传。").optional()
}
```

### alipay_open_public_personalized_menu_delete

**Environment variables**



**Input schema**

```ts
{
  "menu_key": z.string().describe("要删除的个性化菜单key。通过 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.personalized.menu.create\">alipay.open.public.personalized.menu.create</a>(个性化菜单创建)接口创建个性化菜单后获取。").optional()
}
```

### alipay_open_public_qrcode_create

**Environment variables**



**Input schema**

```ts
{
  "code_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "code_type": z.string().describe("二维码类型，目前只支持两种类型：\r\tTEMP：临时的（默认）；\r\tPERM：永久的").optional(),
  "expire_second": z.string().describe("临时码过期时间，以秒为单位，最大不超过1800秒；\r\t永久码置空").optional(),
  "show_logo": z.string().describe("二维码中间是否显示服务窗logo，Y：显示；N：不显示（默认）").optional()
}
```

### alipay_open_public_setting_category_query

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_shortlink_create

**Environment variables**



**Input schema**

```ts
{
  "remark": z.string().describe("对于场景 ID 的描述，由商户自定义。").optional(),
  "scene_id": z.string().describe("短链接对应的场景 ID。由商户自定义，仅支持数字、字母及下划线。").optional()
}
```

### alipay_open_public_singlearticle_data_batchquery

**Environment variables**



**Input schema**

```ts
{
  "begin_date": z.string().describe("数据开始日期，时间格式为 \"yyyyMMdd\" 。").optional(),
  "end_date": z.string().describe("数据结束日期，时间格式为\"yyyyMMdd\"。查询数据开始日期/结束日期时间跨度最大30天。").optional()
}
```

### alipay_open_public_template_message_get

**Environment variables**



**Input schema**

```ts
{
  "template_id": z.string().describe("消息母板id，登陆生活号后台(fuwu.alipay.com)，点击菜单“模板消息”，点击“模板库”，即可看到相应模板的消息母板id").optional()
}
```

### alipay_open_public_template_message_industry_modify

**Environment variables**



**Input schema**

```ts
{
  "primary_industry_code": z.string().describe("服务窗消息模板所属主行业一/二级编码，参见 <a href=\"https://alipay.open.taobao.com/doc2/detail?treeId=197&docType=1&articleId=105043\">查看行业信息</a>。").optional(),
  "primary_industry_name": z.string().describe("服务窗消息模板所属主行业一/二级名称，参见 <a href=\"https://alipay.open.taobao.com/doc2/detail?treeId=197&docType=1&articleId=105043\">查看行业信息</a>。").optional(),
  "secondary_industry_code": z.string().describe("服务窗消息模板所属副行业一/二级编码，参见 <a href=\"https://alipay.open.taobao.com/doc2/detail?treeId=197&docType=1&articleId=105043\">查看行业信息</a>。").optional(),
  "secondary_industry_name": z.string().describe("服务窗消息模板所属副行业一/二级名称，参见 <a href=\"https://alipay.open.taobao.com/doc2/detail?treeId=197&docType=1&articleId=105043\">查看行业信息</a>。").optional()
}
```

### alipay_open_public_topic_batchquery

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_public_topic_create

**Environment variables**



**Input schema**

```ts
{
  "img_url": z.string().describe("营销位图片url, 尺寸为996*450，最大不超过5M，支持格式:.jpg、.png ，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url。营销位需要展示头图时，必须填写该参数。").optional(),
  "link_type": z.string().describe("跳转类型，网页:HTTP、小程序:APP，不传默认HTTP").optional(),
  "link_url": z.string().describe("营销位跳转地址，点击营销位头图跳到的链接url。营销位需要展示头图时，必须填写该参数。").optional(),
  "sub_title": z.string().describe("营销位描述。营销位需要展示头图时，必须填写该参数。").optional(),
  "title": z.string().describe("营销位名称").optional(),
  "topic_items": z.array(z.object({ "img_url": z.string().describe("内容图片url, 尺寸为300*300，最大不超过3M，支持格式:.jpg、.png ，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "link_type": z.string().describe("跳转类型，网页:HTTP、小程序:APP，不传默认HTTP").optional(), "link_url": z.string().describe("跳转链接，点击营销位内容图片跳到的链接url").optional(), "sub_title": z.string().describe("内容说明").optional(), "title": z.string().describe("内容标题").optional() })).describe("营销位内容，数量限制：大于4个，小于8个").optional()
}
```

### alipay_open_public_topic_delete

**Environment variables**



**Input schema**

```ts
{
  "topic_id": z.string().describe("营销位id").optional()
}
```

### alipay_open_public_topic_modify

**Environment variables**



**Input schema**

```ts
{
  "img_url": z.string().describe("营销位图片url, 尺寸为996*450，最大不超过5M，支持格式:.jpg、.png ，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url。营销位需要展示头图时，必须填写该参数。").optional(),
  "link_type": z.string().describe("跳转类型，网页:HTTP、小程序:APP，不传默认HTTP").optional(),
  "link_url": z.string().describe("营销位跳转地址，点击营销位头图跳到的链接url。营销位需要展示头图时，必须填写该参数。").optional(),
  "sub_title": z.string().describe("营销位描述。营销位需要展示头图时，必须填写该参数").optional(),
  "title": z.string().describe("营销位名称").optional(),
  "topic_id": z.string().describe("营销位id").optional(),
  "topic_items": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_open_public_user_data_batchquery

**Environment variables**



**Input schema**

```ts
{
  "begin_date": z.string().describe("数据开始日期，时间格式为 \"yyyyMMdd\" 。\t").optional(),
  "end_date": z.string().describe("数据结束日期，时间格式为\"yyyyMMdd\"。查询数据开始日期/结束日期时间跨度最大30天。").optional()
}
```

### alipay_open_public_user_follow_query

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().describe("支付宝用户id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "open_id": z.string().describe("支付宝用户唯一的标识").optional()
}
```

### alipay_open_search_ability_batchquery

**Environment variables**



**Input schema**

```ts
{
  "biz_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_type": z.string().describe("表示修改内容的业务类型").optional(),
  "opt_type": z.string().describe("进行具体操作的类型比如：query").optional()
}
```

### alipay_open_search_appkeyword_apply

**Environment variables**



**Input schema**

```ts
{
  "config_id": z.string().describe("关键词配置id，由支付宝生成，关键词申请通过后会通知接口返回，也可以申请单状态获取").optional(),
  "key_words": z.array(z.string()).describe("提报的关键词").optional(),
  "target_appid": z.string().describe("小程序id").optional()
}
```

### alipay_open_search_appkeyword_batchquery

**Environment variables**



**Input schema**

```ts
{
  "target_appid": z.string().describe("小程序id").optional(),
  "status": z.string().describe("关键词的状态，枚举值，不传该字段表示查询所有状态").optional(),
  "page_number": z.number().int().describe("当前页").optional(),
  "page_size": z.number().int().describe("每页显示条数").optional()
}
```

### alipay_open_search_appkeyword_delete

**Environment variables**



**Input schema**

```ts
{
  "config_id": z.string().describe("关键词配置ID").optional(),
  "key_words": z.array(z.string()).describe("需要删除的生效关键词").optional(),
  "target_appid": z.string().describe("小程序id").optional()
}
```

### alipay_open_search_appkeyword_querystatus

**Environment variables**



**Input schema**

```ts
{
  "target_appid": z.string().describe("小程序id").optional(),
  "apply_no": z.string().describe("审核工单id，提报接口的返回值").optional()
}
```

### alipay_open_search_appkeywordquota_query

**Environment variables**



**Input schema**

```ts
{
  "target_appid": z.string().describe("小程序id").optional()
}
```

### alipay_open_search_baseorder_modify

**Environment variables**



**Input schema**

```ts
{
  "biz_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_type": z.string().describe("表示修改内容的业务类型").optional(),
  "opt_type": z.string().describe("操作的具体类型").optional()
}
```

### alipay_open_search_box_apply

**Environment variables**



**Input schema**

```ts
{
  "box_desc": z.string().describe("品牌介绍，5-15个中文字符。\t小程序直达不支持设置此项").optional(),
  "brand_id": z.string().describe("品牌id，参考<a href=\"https://opendocs.alipay.com/rules/029uy4\"> 品牌认证说明 </a>").optional(),
  "business_benefit_switch": z.boolean().describe("可通过配置来开启商圈权益模块，关闭后搜索直达不展示商圈权益模块").optional(),
  "business_district_ids": z.array(z.string()).describe("小程序已关联商圈时，可添加商圈id（目前仅对品牌直达开放，小程序直达暂未开放）").optional(),
  "custom_keywords": z.array(z.string()).describe("自定义触发词，最多可配置10个，限1-8个中文字符。\t小程序直达不支持设置此项").optional(),
  "image_id": z.string().describe("氛围图片id，调用 <a href=\"https://opendocs.alipay.com/mini/03hvl1?ref=api\">支付宝文件上传接口</a> 上传图片获取图片id(bizCode：search_box_atmosphere)。 <a href=\"https://opendocs.alipay.com/b/03al6f\">图片规范</a> \t小程序直达不支持设置此项。").optional(),
  "image_name": z.string().describe("氛围图片名。\t小程序直达不支持设置此项").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "related_accounts": z.array(z.object({ "app_name": z.string().describe("应用名称").optional(), "app_type": z.string().describe("应用类型，TINY_APP-小程序/PUBLIC_APP-生活号").optional(), "relate_appid": z.string().describe("应用ID").optional() })).describe("关联账号信息，1-3个。 内部字段均需设置。当为品牌直达时，数组中的第1个账号会被设置为\"账号1\"，也就是将作为搜索直达专区头部的跳转地址").optional(),
  "service_infos": z.array(z.object({ "service_category_code": z.string().describe("服务类目编码").optional(), "service_category_name": z.string().describe("服务类目名称").optional(), "service_code": z.string().describe("服务编码").optional(), "service_name": z.string().describe("服务名称").optional() })).describe("\"服务信息，服务必须审核通过才能申请搜索直达。品牌直达最多可配置同一品牌认证下的小程序4个，小程序直达最多可配置2个。 内部字段均需设置。\"").optional(),
  "target_appid": z.string().describe("小程序id，小程序直达时必传，需要和申请的商户主体保持一致，且符合<a href=\"https://opendocs.alipay.com/b/03al6e\"> 准入类目 </a>").optional()
}
```

### alipay_open_search_box_batchquery

**Environment variables**



**Input schema**

```ts
{
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "page_number": z.number().int().describe("分页查询的当前页号,从1开始").optional(),
  "page_size": z.number().int().describe("每页查询的数量，默认10，不得超过50").optional()
}
```

### alipay_open_search_box_consult

**Environment variables**



**Input schema**

```ts
{
  "area_keywords": z.string().describe("小程序直达配置的常用服务中带有门店信息时，可添加简称触发词").optional(),
  "box_desc": z.string().describe("品牌介绍，5-15个中文字符。 \t小程序直达不支持设置此项").optional(),
  "brand_id": z.string().describe("品牌id，参考<a href=\"https://opendocs.alipay.com/rules/029uy4\">品牌认证说明</a>").optional(),
  "business_benefit_switch": z.boolean().describe("可通过配置来开启商圈权益模块，关闭后搜索直达不展示商圈权益模块").optional(),
  "business_district_ids": z.array(z.string()).describe("小程序已关联商圈时，可添加商圈id（目前仅对品牌直达开放，小程序直达暂未开放）").optional(),
  "custom_keywords": z.array(z.string()).describe("自定义触发词，最多可配置6个，限1-8个中文字符。 \t小程序直达不支持设置此项").optional(),
  "image_id": z.string().describe("氛围图片id，调用 <a href=\"https://opendocs.alipay.com/mini/03hvl1?ref=api\">支付宝文件上传接口</a> 上传图片获取图片id(bizCode：search_box_atmosphere)。 <a href=\"https://opendocs.alipay.com/b/03al6f\">图片规范</a> \t小程序直达不支持设置此项。").optional(),
  "image_name": z.string().describe("氛围图片名。 \t小程序直达不支持设置此项").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "related_accounts": z.array(z.object({ "app_name": z.string().describe("应用名称").optional(), "app_type": z.string().describe("应用类型，TINY_APP-小程序/PUBLIC_APP-生活号").optional(), "relate_appid": z.string().describe("应用ID").optional() })).describe("关联账号信息，1-2个。 内部字段均需设置。").optional(),
  "service_infos": z.array(z.object({ "service_category_code": z.string().describe("服务类目编码").optional(), "service_category_name": z.string().describe("服务类目名称").optional(), "service_code": z.string().describe("服务编码").optional(), "service_name": z.string().describe("服务名称").optional() })).describe("服务信息，服务必须审核通过才能申请搜索直达。 内部字段均需设置。").optional(),
  "target_appid": z.string().describe("小程序id，小程序直达时必传，需要和申请的商户主体保持一致，且符合<a href=\"https://opendocs.alipay.com/b/03al6e\">准入类目</a>").optional()
}
```

### alipay_open_search_box_modify

**Environment variables**



**Input schema**

```ts
{
  "box_desc": z.string().describe("品牌介绍，5-15个中文字符。当修改品牌介绍模块(module_type=BOX_EXCLUSIVE_BASE)时传入。\t小程序直达时不支持设置").optional(),
  "box_id": z.string().describe("搜索直达配置id").optional(),
  "brand_id": z.string().describe("品牌id，参考<a href=\"https://opendocs.alipay.com/rules/029uy4\"> 品牌认证说明 </a>").optional(),
  "business_benefit_switch": z.boolean().describe("可通过配置来开启商圈权益模块，关闭后搜索直达不展示商圈权益模块").optional(),
  "business_district_ids": z.array(z.string()).describe("小程序已关联商圈时，可添加商圈id（目前仅对品牌直达开放，小程序直达暂未开放）").optional(),
  "custom_keywords": z.string().describe("1024").optional(),
  "image_id": z.string().describe("氛围图片id，调用 <a href=\"https://opendocs.alipay.com/mini/03hvl1?ref=api\">支付宝文件上传接口</a> 上传图片获取图片id(bizCode：search_box_atmosphere)。 <a href=\"https://opendocs.alipay.com/b/03al6f\">图片规范</a> \t小程序直达不支持设置此项。").optional(),
  "image_name": z.string().describe("氛围图片名，当修改氛围图模块(module_type=BOX_ATMOSPHERE_IMAGE)时传入。\t小程序直达不支持设置").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "module_id": z.string().describe("搜索直达模块配置id，新增模块时可不传，更新模块时必传。从alipay.open.search.box.query详情接口查询可获取已存在模块的配置id").optional(),
  "module_type": z.string().describe("搜索直达模块类型，参考<a href=\"https://opendocs.alipay.com/mini/03fjba#%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E\"> 搜索直达模块说明 </a>。").optional(),
  "related_accounts": z.array(z.object({ "app_name": z.string().describe("应用名称").optional(), "app_type": z.string().describe("应用类型，TINY_APP-小程序/PUBLIC_APP-生活号").optional(), "relate_appid": z.string().describe("应用ID").optional() })).describe("\"关联账号信息，可配置1-2个。传入账号需归属于商家主体。品牌直达修改官方账号(module_type=BOX_EXCLUSIVE_ACCOUNTS)时传入，小程序直达修改常用服务模块时也需传值。 当为品牌直达时，数组中的第1个账号会被设置为\"账号1\"，也就是将作为搜索直达专区头部的跳转地址。\"").optional(),
  "service_infos": z.array(z.object({ "service_category_code": z.string().describe("服务类目编码").optional(), "service_category_name": z.string().describe("服务类目名称").optional(), "service_code": z.string().describe("服务编码").optional(), "service_name": z.string().describe("服务名称").optional() })).describe("服务信息，服务必须审核通过才能申请搜索直达，可配置1-4个。当修改常用服务模块(module_type=BOX_EXCLUSIVE_FUNCTIONS)时传入").optional(),
  "target_appid": z.string().describe("小程序id，小程序直达时必传，需要和申请的商户主体保持一致，且符合<a href=\"https://opendocs.alipay.com/b/03al6e\"> 准入类目 </a>").optional()
}
```

### alipay_open_search_box_offline

**Environment variables**



**Input schema**

```ts
{
  "box_id": z.string().describe("搜索直达配置id").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional()
}
```

### alipay_open_search_box_online

**Environment variables**



**Input schema**

```ts
{
  "box_id": z.string().describe("搜索直达配置id").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional()
}
```

### alipay_open_search_box_query

**Environment variables**



**Input schema**

```ts
{
  "box_id": z.string().describe("搜索直达配置id").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional()
}
```

### alipay_open_search_boxactivity_apply

**Environment variables**



**Input schema**

```ts
{
  "action_url": z.string().describe("活动链接，必须为关联的小程序的页面链接（链接以 alipays 开头），可参考<a href=\"https://opendocs.alipay.com/support/01rb18\"> 小程序scheme链接介绍 </a>").optional(),
  "background_word": z.string().describe("创建banner活动时，可添加底纹推广词，有机会在首页搜索框内展示，提升banner活动曝光机会").optional(),
  "box_id": z.string().describe("搜索直达配置id").optional(),
  "end_time": z.string().describe("活动结束时间，开始和结束时间之间不得超过90天").optional(),
  "material_id": z.string().describe("当material_type=\"IMAGE\"时，为图片id；当material_type=\"VIDEO\"时，为视频id。小程序直达仅支持图片类型。图片id可以通过调用<a href=\"https://opendocs.alipay.com/mini/03hvl1?ref=api\"> 支付宝文件上传接口 </a>上传图片，获取图片id(bizCode：search_box_banner)。<a href=\"https://opendocs.alipay.com/b/03al6f\"> 图片规范 </a>").optional(),
  "material_type": z.string().describe("IMAGE-图片/VIDEO-视频").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "oriented_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "start_time": z.string().describe("活动开始时间，开始和结束时间之间不得超过90天").optional(),
  "target_appid": z.string().describe("跳转应用ID").optional(),
  "target_appname": z.string().describe("跳转小程序名称").optional(),
  "target_regions": z.array(z.object({ "region_code": z.string().describe("区域编码，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional(), "region_name": z.string().describe("区域名，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional(), "region_type": z.string().describe("区域类型，1代表全国，2代表省级区域，3代表市级区域，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional() })).describe("投放目标区域列表").optional(),
  "title": z.string().describe("活动标题").optional(),
  "video_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_open_search_boxactivity_batchquery

**Environment variables**



**Input schema**

```ts
{
  "box_id": z.string().describe("搜索直达id").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "page_number": z.number().int().describe("分页查询的当前页号,从1开始").optional(),
  "page_size": z.number().int().describe("每页查询的数量，默认10，不超过50").optional()
}
```

### alipay_open_search_boxactivity_modify

**Environment variables**



**Input schema**

```ts
{
  "action_url": z.string().describe("活动链接，必须为关联的小程序的页面链接（链接以 alipays 开头），可参考<a href=\"https://opendocs.alipay.com/support/01rb18\"> 小程序scheme链接介绍 </a>").optional(),
  "background_word": z.string().describe("创建banner活动时，可添加底纹推广词，有机会在首页搜索框内展示，提升banner活动曝光机会").optional(),
  "box_activity_id": z.string().describe("搜索直达活动id").optional(),
  "end_time": z.string().describe("活动结束时间，开始时间和结束时间之间不能超过90天").optional(),
  "material_id": z.string().describe("当material_type=\"IMAGE\"时，为图片id；当material_type=\"VIDEO\"时，为视频id。图片id可以通过调用接口alipay.open.file.upload上传图片，获取图片id(bizCode：search_box_banner)。规范详情可查看 <a href=\"https://opendocs.alipay.com/b/03al6f\"> 图片规范 </a>。").optional(),
  "material_type": z.string().describe("IMAGE-图片/VIDEO-视频").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "oriented_rule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "start_time": z.string().describe("活动开始时间，开始时间和结束时间之间不能超过90天").optional(),
  "target_appid": z.string().describe("跳转应用ID").optional(),
  "target_appname": z.string().describe("目标小程序名称").optional(),
  "target_regions": z.array(z.object({ "region_code": z.string().describe("区域编码，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional(), "region_name": z.string().describe("区域名，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional(), "region_type": z.string().describe("区域类型，1代表全国，2代表省级区域，3代表市级区域，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional() })).describe("投放目标区域列表").optional(),
  "title": z.string().describe("活动标题").optional(),
  "video_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_open_search_boxactivity_offline

**Environment variables**



**Input schema**

```ts
{
  "box_activity_id": z.string().describe("搜索直达活动id").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional()
}
```

### alipay_open_search_boxactivity_query

**Environment variables**



**Input schema**

```ts
{
  "box_activity_id": z.string().describe("搜索直达活动id").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional()
}
```

### alipay_open_search_orderdetail_query

**Environment variables**



**Input schema**

```ts
{
  "biz_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_type": z.string().describe("表示修改内容的业务类型").optional(),
  "opt_type": z.string().describe("进行具体操作的类型比如：create、mod、cancel").optional()
}
```

### alipay_open_search_serviceorder_batchquery

**Environment variables**



**Input schema**

```ts
{
  "biz_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_type": z.string().describe("表示查询内容的类型").optional(),
  "opt_type": z.string().describe("操作的类型，如query").optional()
}
```

### alipay_open_search_subservicekeyword_apply

**Environment variables**



**Input schema**

```ts
{
  "config_id": z.string().describe("关键词配置id，由支付宝生成，关键词申请通过后会通知接口返回，也可以申请单状态获取").optional(),
  "key_words": z.array(z.string()).describe("服务关键词列表，每批最多传入30个，关键词长度小于12个汉字。 超过数量限制会申请失败，剩余关键词可通过 <a href=\"https://opendocs.alipay.com/mini/062ndt?pathHash=e3e78b68&ref=api&scene=common\">alipay.open.search.appkeywordquota.query</a>查询").optional(),
  "sub_service_code": z.string().describe("子服务code，提报服务关键词，alipay.open.app.service.list.query(服务批量查询)这个接口可以获取").optional(),
  "target_appid": z.string().describe("小程序id").optional()
}
```

### alipay_open_search_subservicekeyword_batchquery

**Environment variables**



**Input schema**

```ts
{
  "target_appid": z.string().describe("小程序id").optional(),
  "status": z.string().describe("审核状态，服务关键词的审核状态，枚举值，不传该字段表示查询所有状态").optional(),
  "page_number": z.number().int().describe("分页参数，分页查询时使用").optional(),
  "page_size": z.number().int().describe("分页参数，分页查询时使用").optional()
}
```

### alipay_open_search_subservicekeyword_delete

**Environment variables**



**Input schema**

```ts
{
  "config_id": z.string().describe("关键词配置ID").optional(),
  "target_appid": z.string().describe("小程序id").optional()
}
```

### alipay_open_search_subservicekeyword_querystatus

**Environment variables**



**Input schema**

```ts
{
  "target_appid": z.string().describe("小程序id").optional(),
  "apply_no": z.string().describe("审核工单id，提报接口的返回值").optional()
}
```

### alipay_open_servicemarket_commodity_shop_offline

**Environment variables**



**Input schema**

```ts
{
  "commodity_id": z.string().describe("服务商户ID").optional(),
  "shop_id": z.string().describe("门店ID").optional()
}
```

### alipay_open_servicemarket_commodity_shop_online

**Environment variables**



**Input schema**

```ts
{
  "commodity_id": z.string().describe("服务插件ID").optional(),
  "shop_id": z.string().describe("店铺ID").optional()
}
```

### alipay_open_servicemarket_order_accept

**Environment variables**



**Input schema**

```ts
{
  "commodity_order_id": z.string().describe("服务商品订单ID").optional()
}
```

### alipay_open_servicemarket_order_create

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_servicemarket_order_item_cancel

**Environment variables**



**Input schema**

```ts
{
  "cancel_reason": z.string().describe("当前门店区域不支持实施").optional(),
  "commodity_order_id": z.string().describe("订购服务订单ID，通过支付宝发送的 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.open.servicemarket.order.notify\">服务市场商户确认订购通知</a> 通知获取。").optional(),
  "mini_app_id": z.string().describe("商家订购服务选择的某一小程序的APPID，如果该订单为蚂蚁服务市场发布的小程序插件服务所产生的订单，则此字段必填").optional(),
  "shop_id": z.string().describe("商家订购服务选择的某一门店的ID。若该订单： \t为支付宝服务市场发布的服务所产生订单则该参数可选。").optional()
}
```

### alipay_open_servicemarket_order_item_complete

**Environment variables**



**Input schema**

```ts
{
  "commodity_order_id": z.string().describe("订购服务插件订单号").optional(),
  "mini_app_id": z.string().describe("商家订购服务选择的某一小程序的APPID，如果该订单为蚂蚁服务市场发布的小程序插件服务所产生的订单，则此字段必填").optional(),
  "shop_id": z.string().describe("商家订购服务选择的某一门店的ID。若该订单：\t为支付宝服务市场发布的服务所产生订单则该参数可选。").optional()
}
```

### alipay_open_servicemarket_order_item_confirm

**Environment variables**



**Input schema**

```ts
{
  "commodity_order_id": z.string().describe("订购服务插件订单号").optional(),
  "mini_app_id": z.string().describe("商家订购服务选择的某一小程序的APPID，如果该订单为蚂蚁服务市场发布的小程序插件服务所产生的订单，则此字段必填").optional(),
  "shop_id": z.string().describe("商家订购服务选择的某一门店的ID。若该订单： \t为支付宝(蚂蚁)服务市场发布的服务所产生订单则该参数可选。").optional()
}
```

### alipay_open_servicemarket_order_notify

**Environment variables**



**Input schema**

```ts
{
  "notify_url": z.string().describe("通知地址").optional()
}
```

### alipay_open_servicemarket_order_query

**Environment variables**



**Input schema**

```ts
{
  "commodity_order_id": z.string().describe("订购服务订单ID，通过支付宝发送的 <a href=\"https://opendocs.alipay.com/isv/b7f7864a_alipay.open.servicemarket.order.notify?scene=common&pathHash=af6ed436\">服务市场商户确认订购通知</a> 获取。").optional(),
  "start_page": z.string().describe("查询开始页码，1 为第一页。").optional()
}
```

### alipay_open_servicemarket_order_reject

**Environment variables**



**Input schema**

```ts
{
  "commodity_order_id": z.string().describe("订购服务商品订单ID").optional(),
  "reject_reason": z.string().describe("拒绝接单原因").optional()
}
```

### alipay_open_servicemarket_promotiontask_relation_query

**Environment variables**



**Input schema**

```ts
{
  "commodity_id": z.string().describe("服务商品ID，并不是uid，取值来源于前端的获取").optional(),
  "page_size": z.number().int().describe("每页数量，范围(1-100)。默认：10").optional(),
  "page_num": z.number().int().describe("当前页码，从1开始。默认：1").optional()
}
```

### alipay_open_sp_blueseaactivity_create

**Environment variables**



**Input schema**

```ts
{
  "address": z.string().describe("详细地址。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "biz_scene": z.string().describe("蓝海活动的场景，支持场景如下：\t* 直连餐饮（BLUE_SEA_FOOD_APPLY）；\t* 直连快消（BLUE_SEA_FMCG_APPLY）；\t* 间连餐饮（BLUE_SEA_FOOD_INDIRECT_APPLY）；\t* 间连快消（BLUE_SEA_FMCG_INDIRECT_APPLY）。").optional(),
  "business_lic": z.string().describe("营业执照，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "city_code": z.string().describe("城市编码。请按照<a href='https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx'>表格</a> 中内容填写。 （请参考资料：<a href='http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/'> 统计用区划和城乡划分代码</a>）").optional(),
  "district_code": z.string().describe("区县编码。请按照<a href='https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx'>表格</a> 中内容填写。 （请参考资料：<a href='http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/'> 统计用区划和城乡划分代码</a>）").optional(),
  "food_business_lic": z.string().describe("食品经营许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "food_circulate_lic": z.string().describe("食品流通许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "food_health_lic": z.string().describe("食品卫生许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 \t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "food_production_lic": z.string().describe("食品生产许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "food_service_lic": z.string().describe("餐饮服务许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "indoor_pic": z.string().describe("内景照，要求图片清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "merchant_logon": z.string().describe("参与蓝海活动的商户支付宝账号，只有当参与直连蓝海活动场景（BLUE_SEA_FOOD_APPLY/BLUE_SEA_FMCG_APPLY）时必填，间连场景可空。").optional(),
  "province_code": z.string().describe("省份编码。请按照<a href='https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx'>表格</a> 中内容填写。 （请参考资料：<a href='http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/'>  统计用区划和城乡划分代码</a>）").optional(),
  "shop_entrance_pic": z.string().describe("门头照，要求图片清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "sub_merchant_id": z.string().describe("参与蓝海活动的间连商户账号，只有当参与间连蓝海活动场景（BLUE_SEA_FOOD_INDIRECT_APPLY/BLUE_SEA_FMCG_INDIRECT_APPLY）时必填，直连场景可空。").optional(),
  "tobacco_lic": z.string().describe("烟草专卖零售许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 \t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional()
}
```

### alipay_open_sp_blueseaactivity_modify

**Environment variables**



**Input schema**

```ts
{
  "address": z.string().describe("详细地址").optional(),
  "business_lic": z.string().describe("营业执照，要求证件文本信息清晰可见。 请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "city_code": z.string().describe("城市编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "district_code": z.string().describe("区县编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "food_business_lic": z.string().describe("食品经营许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "food_circulate_lic": z.string().describe("食品流通许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "food_health_lic": z.string().describe("食品卫生许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "food_production_lic": z.string().describe("食品生产许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "food_service_lic": z.string().describe("餐饮服务许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "indoor_pic": z.string().describe("门头照，要求内景照片清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "order_id": z.string().describe("申请单 id。通过 <a href=\"https://opendocs.alipay.com/apis/01ebig\">alipay.open.sp.blueseaactivity.create</a>接口获取。").optional(),
  "province_code": z.string().describe("省份编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "shop_entrance_pic": z.string().describe("门头照，要求店铺外观照片清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "tobacco_lic": z.string().describe("烟草专卖零售许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional()
}
```

### alipay_open_sp_blueseaactivity_query

**Environment variables**



**Input schema**

```ts
{
  "order_id": z.string().describe("申请单 id。通过 <a href=\"https://opendocs.alipay.com/apis/01ebig\">alipay.open.sp.blueseaactivity.create</a>接口获取").optional()
}
```

### alipay_open_sp_image_upload

**Environment variables**



**Input schema**

```ts
{}
```

### alipay_open_sp_isv_bill_sync

**Environment variables**



**Input schema**

```ts
{
  "end_time": z.string().describe("账单结束时间").optional(),
  "generate_time": z.string().describe("出账时间，回传出账信息时，必须传递").optional(),
  "item_code": z.string().describe("服务优选商品编码").optional(),
  "out_biz_no": z.string().describe("外部业务号，传isv系统生成的账单号，需要保证唯一").optional(),
  "pay_time": z.string().describe("账单支付时间，回传支付数时，必须传递").optional(),
  "price": z.string().describe("账单金额，这里填写的是整数，单位为分，比如1元，那么输入100").optional(),
  "promotor_pid": z.string().describe("推广服务商(S2)pid").optional(),
  "start_time": z.string().describe("账单开始时间").optional(),
  "status": z.string().describe("GENERATE_BILL代表”已出账“，PAID_BILL代表”已支付“，选择这两者之一").optional(),
  "sub_promotor_pid": z.string().describe("S1回传的S2的操作员工子账号，如果是子账号操作，请回传").optional()
}
```

### alipay_open_sp_isv_operation_sync

**Environment variables**



**Input schema**

```ts
{
  "customer_type": z.string().describe("客户类型，PERSONAL表示个人，ALIPAY_RECOMMEND表示支付宝推荐").optional(),
  "ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "implement_end_time": z.string().describe("实施结束时间").optional(),
  "implement_object_name": z.string().describe("实施对象名称").optional(),
  "implement_place": z.string().describe("实施地点").optional(),
  "implement_result": z.string().describe("实施结果，SUCCESS表示实施成功，FAIL表示实施失败").optional(),
  "implement_result_image": z.string().describe("实施结果的照片").optional(),
  "implement_result_remark": z.string().describe("实施结果的备注").optional(),
  "implement_start_time": z.string().describe("实施开始时间").optional(),
  "item_code": z.string().describe("服务优选商品编码").optional(),
  "item_price": z.string().describe("商品价格，这里填写的是整数，单位为分，比如1元，那么输入100").optional(),
  "merchant_pid": z.string().describe("商户pid").optional(),
  "mini_appid": z.string().describe("商品小程序appid，若推广的商品不为小程序，则不传此参数").optional(),
  "oppor_id": z.string().describe("拓展助手中的商机id").optional(),
  "order_id": z.string().describe("下单订单号").optional(),
  "out_biz_no": z.string().describe("外部业务号，传isv系统生成的账单号，需要保证唯一").optional(),
  "promotor_pid": z.string().describe("推广服务商(S2)pid").optional(),
  "shop_id": z.string().describe("店铺id").optional(),
  "sub_promotor_pid": z.string().describe("推广服务商(S2)子账号pid").optional()
}
```

### alipay_open_sp_isv_relation_query

**Environment variables**



**Input schema**

```ts
{
  "commodity_id": z.string().describe("服务市场商品Code").optional(),
  "page_size": z.string().describe("每页数量，范围(1-100)。默认：10").optional(),
  "page_num": z.string().describe("当前页码，从1开始。默认：1").optional()
}
```

### alipay_open_sp_isv_sales_sync

**Environment variables**



**Input schema**

```ts
{
  "merchant_sales_detail": z.array(z.object({ "coupons_quantity": z.string().describe("配券数").optional(), "device_detail": z.string().describe("设备详情").optional(), "merchant_pid": z.string().describe("商户pid").optional(), "mini_appid": z.string().describe("小程序appid，若推广的商品不为小程序，则不传此参数").optional(), "operation_place": z.string().describe("作业地").optional(), "out_biz_no": z.string().describe("外部业务号，传isv系统生成的账单号，需要保证唯一").optional(), "promotor_pid": z.string().describe("推广服务商(S2)pid").optional(), "sales_amount": z.string().describe("销售金额，这里填写的是整数，单位为分，比如1元，那么输入100").optional(), "sales_quantity": z.string().describe("销售笔数").optional(), "sub_promotor_pid": z.string().describe("推广服务商(S2)子账号pid").optional(), "write_off_amount": z.string().describe("核销金额，这里填写的是整数，单位为分，比如1元，那么输入100").optional(), "write_off_quantity": z.string().describe("核销数").optional() })).describe("商户销售数据回传的参数对象，形式为一个列表，每天回传昨日商户的销售数据。").optional()
}
```

### alipay_open_sp_isv_signauth_create

**Environment variables**



**Input schema**

```ts
{
  "isv_auth_scene_infos": z.array(z.object({ "scene_code": z.string().describe("运营场景编码\tOPERATION_POINTS：管理运营积分\tSHOP_MANAGE：管理门店信息\tMINI_APP_OPER：运营支付宝小程序\tPROMOTION_MANAGE：运营营销活动").optional(), "scene_permissions": z.string().describe("运营场景下的权限编码，多个权限编码以,隔开\t1、管理门店信息：SHOP_MANAGE；基础权限（升级）：SHOP_MANAGE_BASE\t2、运营营销活动：PROMOTION_MANAGE ；基础权限（升级）：PROMOTION_MANAGE_BASE\t3、运营支付宝小程序：MINI_APP_OPER；基础权限（升级）：MINI_APP_OPER_BASE\t4、管理运营积分：OPERATION_POINTS；基础权限（升级）：OPERATION_POINTS_BASE").optional() })).describe("代运营授权场景信息").optional(),
  "merchant_logon_id": z.string().describe("商户登录账号\t支持手机号和邮箱账号；不支持pid").optional(),
  "need_app_auth": z.string().describe("1表示需要，0表示不需要\t不传参数默认是需要（1）\t是否创建三方应用授权子任务，也就是是否需要给三方应用授权").optional(),
  "sign_order_no": z.string().describe("签约单号\t可通过alipay.open.agent.confirm接口获取签约单号").optional()
}
```

### alipay_open_sp_isv_signauth_query

**Environment variables**



**Input schema**

```ts
{
  "order_id": z.string().describe("签约授权一体化订单ID\t可通过alipay.open.sp.isv.signauth.create 接口获取").optional()
}
```

### alipay_open_sp_leads_expand_create

**Environment variables**



**Input schema**

```ts
{
  "address": z.string().describe("拓展助手商机地址").optional(),
  "city_code": z.string().describe("拓展助手商机地址市code").optional(),
  "city_name": z.string().describe("拓展助手商机地址市名称").optional(),
  "district_code": z.string().describe("拓展助手商机地址区code").optional(),
  "district_name": z.string().describe("拓展助手商机地址区名称").optional(),
  "email": z.string().describe("拓展助手商机邮箱").optional(),
  "latitude": z.string().describe("拓展助手商机地址纬度").optional(),
  "longitude": z.string().describe("拓展助手商机地址经度").optional(),
  "mcc": z.string().describe("mcc行业").optional(),
  "merchant_pid": z.string().describe("2088账号").optional(),
  "name": z.string().describe("拓展助手商机名称").optional(),
  "out_biz_no": z.string().describe("外部幂等唯一键").optional(),
  "phone": z.string().describe("拓展助手商机联系电话").optional(),
  "province_code": z.string().describe("拓展助手商机地址省code").optional(),
  "province_name": z.string().describe("拓展助手商机地址省名称").optional(),
  "scene": z.string().describe("拓展助手场景，参数约定").optional()
}
```

### alipay_open_sp_merchant_inconsistent_approve

**Environment variables**



**Input schema**

```ts
{
  "back_card": z.string().describe("身份证背面照，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。 请传入<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。").optional(),
  "commitment_letter": z.string().describe("实际经营人承诺函照片，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。 请传入<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 该资质是否必传请参见报名资质要求。").optional(),
  "front_card": z.string().describe("身份证正面照，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式. 请传<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。").optional(),
  "handheld_business_license": z.string().describe("手持营业执照合照，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。 请传入<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 该资质是否必传请参见报名资质要求。").optional(),
  "handheld_card": z.string().describe("手持身份证合照，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。 请传入<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 该资质是否必传请参见报名资质要求。").optional(),
  "item_code": z.string().describe("服务优选商品编码").optional(),
  "merchant_pid": z.string().describe("商家pid").optional(),
  "mini_appid": z.string().describe("商家小程序appId").optional(),
  "out_biz_no": z.string().describe("外部业务号，需不重复").optional(),
  "promotor_pid": z.string().describe("推广服务商(S2)pid").optional()
}
```

### alipay_open_sp_operation_apply

**Environment variables**



**Input schema**

```ts
{
  "access_product_code": z.string().describe("接入的产品编号。 枚举如下：\t* OPENAPI_BIND_DEFAULT：操作类型为账号绑定。\t* OPENAPI_AUTH_DEFAULT：操作类型为代运营授权时。").optional(),
  "alipay_account": z.string().describe("支付宝登录账号，通常为手机号或者邮箱。\t间连场景必填。\t直连场景选填，特别注意merchant_no和alipay_account不能同时为空，都有值优先取merchant_no。").optional(),
  "isv_scene_permissions": z.string().describe("场景授权列表结构结构：场景codeA:权限code1,权限code2;场景codeB:权限code1,权限code2;\t说明：\t* 本参数和access_product_code只需要传一个。\t* 场景 + 权限Code含义：\t   SHOP_MANAGE:SHOP_MANAGE_BASE：管理门店信息\t   MINI_APP_OPER:MINI_APP_OPER_BASE：运营支付宝小程序\t   PROMOTION_MANAGE:PROMOTION_MANAGE_BASE：运营营销活动\t   OPERATION_POINTS:OPERATION_POINTS_BASE：管理运营积分\t   INCENTIVE_POINT_MANAGE:INCENTIVE_POINT_MANAGE_BASE：管理激励点数").optional(),
  "merchant_no": z.string().describe("支付宝商户号。\t间连场景，merchant_no必填，传入商户smid，特别注意仅支持2088开头的间连商户。\t直连场景，merchant_no选填，传入商户支付宝pid，特别注意merchant_no和alipay_account不能同时为空，优先取merchant_no。").optional(),
  "operate_type": z.string().describe("代运营操作类型。枚举如下：\t* ACCOUNT_BIND：代表绑定支付宝账号，仅对于间连商户。\t* OPERATION_AUTH：代表代运营授权，支持间连和直连商户，其中间连场景包含绑定支付宝账号。").optional(),
  "out_biz_no": z.string().describe("外部操作流水，ISV自定义。每次操作需要确保唯一。").optional()
}
```

### alipay_open_sp_operation_qrcode_query

**Environment variables**



**Input schema**

```ts
{
  "out_biz_no": z.string().describe("外部操作流水，由服务商自定义，需确保每次操作唯一。仅支持数字、字母、下划线组合。").optional(),
  "operate_type": z.string().describe("代运营操作类型。取值如下：\t* ACCOUNT_BIND：账号绑定，仅支持间连商户。\t* OPERATION_AUTH：代运营授权，支持间连、直连商户。").optional(),
  "merchant_no": z.string().describe("支付宝商户号。注意仅支持 2088 开头的间连商户。\t若被代运营者是间连商户，则 merchant_no 必填；\t若为直连商户，则 merchant_no 和 alipay_account 不能同时为空，都有值优先取 merchant_no。").optional(),
  "alipay_account": z.string().describe("支付宝登录账号。通常为手机号或者邮箱。\t若被代运营者是间连商户，该字段无需填写。\t若为直连商户，则 merchant_no 和 alipay_account 不能同时为空，都有值优先取 merchant_no。").optional(),
  "access_product_code": z.string().describe("接入的产品编号。\t操作类型为绑定的，填OPENAPI_BIND_DEFAULT;\t操作类型为授权的，填OPENAPI_AUTH_DEFAULT").optional(),
  "isv_scene_permissions": z.string().describe("场景授权列表结构结构：场景codeA:权限code1,权限code2;场景codeB:权限code1,权限code2;").optional()
}
```

### alipay_open_sp_operation_result_query

**Environment variables**



**Input schema**

```ts
{
  "operate_type": z.string().describe("代运营操作类型。取值如下 ACCOUNT_BIND：账号绑定； OPERATION_AUTH：代运营授权。").optional(),
  "batch_no": z.string().describe("支付宝操作批次号。\tbatch_no提供基于操作批次的精确查询，只查询本操作批次的代运营操作结果，不反映最终代运营操作结果。\t注意：\t1.access_product_code、merchant_no、alipay_account三个参数组合与传入 batch_no 为两种查询方式，不可同时为空且以 batch_no 优先。\t2.access_product_code、merchant_no、alipay_account三个参数组合可以查询最终代运营操作结果。").optional(),
  "access_product_code": z.string().describe("接入的产品编号。未传batch_no时必填，枚举如下：\tOPENAPI_BIND_DEFAULT：操作类型为账号绑定；\tOPENAPI_AUTH_DEFAULT：操作类型为代运营授权。").optional(),
  "merchant_no": z.string().describe("支付宝商户号。支持间连、直连商户，值为2088开头。\t未传batch_no时需注意：\t若查询间连商户则 merchant_no 必填； \t若查询直连商户，则merchant_no和alipay_account不能同时为空，都有值优先取merchant_no。").optional(),
  "alipay_account": z.string().describe("支付宝登录账号，通常为手机号或者邮箱。未传batch_no时需注意：\t1.当查询merchant_no为间连商户时：\t  * 若 operate_type=ACCOUNT_BIND，则alipay_account必填。\t  * 若 operate_type=OPERATION_AUTH，则alipay_account无需传入。\t2.当查询merchant_no为直连商户时：\t  * merchant_no和alipay_account不能同时为空，都有值优先取merchant_no。").optional(),
  "isv_scene_permissions": z.string().describe("场景授权列表结构结构：场景codeA:权限code1,权限code2;场景codeB:权限code1,权限code2;").optional()
}
```

### alipay_open_sp_oppor_detail_query

**Environment variables**



**Input schema**

```ts
{
  "isv_pid": z.string().describe("服务商pid").optional(),
  "oppor_id": z.string().describe("商机作业Id").optional()
}
```

### alipay_open_sp_oppor_feedback_modify

**Environment variables**



**Input schema**

```ts
{
  "expand_result": z.string().describe("拓展助手商机拓展结果").optional(),
  "isv_pid": z.string().describe("服务商pid").optional(),
  "leads_id": z.string().describe("商机id").optional(),
  "merchant_pid": z.string().describe("拓展助手商机商家pid").optional(),
  "oppor_id": z.string().describe("商机作业id").optional(),
  "sn": z.string().describe("拓展设备sn号").optional()
}
```

### alipay_open_sp_oppor_page_query

**Environment variables**



**Input schema**

```ts
{
  "isv_pid": z.string().describe("服务商pid").optional(),
  "status_list": z.string().describe("作业记录状态列表,以,拼接传入").optional(),
  "page_size": z.string().describe("页大小").optional(),
  "page_num": z.string().describe("页数").optional()
}
```

### alipay_open_violation_violationdetail_query

**Environment variables**



**Input schema**

```ts
{
  "violation_record_id": z.string().describe("支付宝侧生成的违规记录唯一标识").optional()
}
```

### alipay_open_violation_violationevent_batchquery

**Environment variables**



**Input schema**

```ts
{
  "begin_time": z.string().describe("查询开始时间 时间格式：yyyy-MM-dd HH:mm:ss 若不填写，则默认当前时间30天前。 注意：begin_time和end_time时间跨度最大一年").optional(),
  "end_time": z.string().describe("查询结束时间 时间格式：yyyy-MM-dd HH:mm:ss 若不填写，则默认当前时间。 注意：begin_time和end_time时间跨度最大一年").optional(),
  "status": z.string().describe("违规工单状态").optional()
}
```

### alipay_pcredit_huabei_auth_accumulation_query

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号。").optional(),
  "period": z.string().describe("协议结算周期，使用支付宝端回传的周期信息。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional()
}
```

### alipay_pcredit_huabei_auth_agreement_close

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("花芝协议号，支付宝系统中用以唯一标识用户签约记录的编号，即花芝协议号。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "out_request_no": z.string().describe("外部请求号").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "quit_type": z.string().describe("用户主动意愿退出：USER_CANCEL_QUIT; 商户结算退出：SETTLE_APPLY_QUIT; 默认值为SETTLE_APPLY_QUIT；这个字段会影响用户在芝麻信用合约的状态").optional()
}
```

### alipay_pcredit_huabei_auth_agreement_query

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号，即花芝轻会员。传入该参数，会忽略其它所有参数。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "out_sign_no": z.string().describe("外部签约号，由商户提供，花芝轻会员协议中标识用户的唯一签约号（确保在商户系统中唯一）。").optional(),
  "auth_scene": z.string().describe("花芝轻会员签约场景，商户和支付宝签约时确定。该值需要与系统/页面签约接口调用时传入的值保持一致。").optional()
}
```

### alipay_pcredit_huabei_auth_order_query

**Environment variables**



**Input schema**

```ts
{
  "auth_opt_id": z.string().describe("支付宝侧花呗冻结、解冻操作单据id。在原先的冻结或者解冻接口调用中同步返回给商户，或者通过商户通知返回给商户。按订单号查询时，此字段不可为空。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id。通过userid+请求流水号组合查询时，此字段不可为空。").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "out_request_no": z.string().describe("商户原先调用冻结、解冻接口传入的请求流水号。按照流水号查询订单时，此字段不能为空。").optional()
}
```

### alipay_pcredit_huabei_auth_order_unfreeze

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号，即花呗先享协议号").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "need_terminated": z.string().describe("true表示需要解约。false或者不填写表示仅解冻。").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "order_title": z.string().describe("商户业务订单的简单描述，如商品名称等，长度不超过100个字母或50个汉字").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，用于标识请求流水的唯一性，不能包含除中文、英文、数字以外的字符，需要保证在商户端不重复。").optional(),
  "seller_id": z.string().describe("商户的支付宝用户id。如果该值为空，则默认为商户签约账号对应的支付宝用户ID。").optional(),
  "unfreeze_amount": z.string().describe("需要解冻的金额，单位为：元（人民币），精确到小数点后两位").optional()
}
```

### alipay_pcredit_huabei_auth_refund_apply

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("签约花芝的业务协议号，在签约成功、结算成功等通知中回回传给商户。").optional(),
  "alipay_user_id": z.string().describe("支付宝用户ID").optional(),
  "auth_opt_id": z.string().describe("支付宝侧授权操作单据id,在结算扣款成功的通知消息中会回传。在周期扣款场景下，和trade_no必传其中一个值。").optional(),
  "memo": z.string().describe("本次退款说明").optional(),
  "open_id": z.string().describe("支付宝用户ID").optional(),
  "out_request_no": z.string().describe("外部请求号").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "refund_amount": z.string().describe("退款金额，单位为：元（人民币），精确到小数点后两位").optional(),
  "refund_type": z.string().describe("MEMBER_FEE_REFUND 会员费结算退款\tWITHHOLD_FEE_REFUND 周期扣款金额退款\t默认为MEMBER_FEE_REFUND").optional(),
  "trade_no": z.string().describe("支付宝交易号,在结算扣款成功的通知中会回传。\t在周期扣款场景下，和auth_opt_id必传其中一个值。").optional()
}
```

### alipay_pcredit_huabei_auth_settle_apply

**Environment variables**



**Input schema**

```ts
{
  "action_type": z.string().describe("操作类型，默认为 MERCHANT_SETTLE（结算）。枚举值如下：\t*  MERCHANT_SETTLE：结算（需要主动退出在发起结算）;\t*  QUIT_SETTLE：退出协议（解约协议）;\t*  PERIOD_SETTLE：分阶段结算（不解约协议）。").optional(),
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号。").optional(),
  "alipay_user_id": z.string().describe("用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "need_terminated": z.string().describe("是否解约，该参数控制结算完成之后的操作，为空则表示结算后解约。枚举值如下：\t*  true：代表解约，默认为true。\t*  false：代表不解约。").optional(),
  "open_id": z.string().describe("用户在支付宝的唯一标识").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，用于标示请求流水的唯一性，不能包含除中文、英文、数字以外的字符，需要保证在商户端不重复。").optional(),
  "pay_amount": z.string().describe("需要支付的金额，单位为：元（人民币），精确到小数点后两位").optional(),
  "seller_id": z.string().describe("支付宝商家ID，即商家账号在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。\t说明：若该值为空，则默认为商户签约账号对应的支付宝用户ID。").optional()
}
```

### alipay_security_data_sss_create

**Environment variables**



**Input schema**

```ts
{
  "a": z.number().int().describe("path.数字，无枚举，有注意事项"),
  "b": z.string().describe("有枚举，必须，有openid，有注意事项").optional(),
  "b_open_id": z.string().describe("有枚举，必须，有openid，有注意事项").optional(),
  "area_code": z.string().describe("body,可选，无openid，有枚举值，注意事项").optional(),
  "f": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_security_prod_sss_query

**Environment variables**



**Input schema**

```ts
{
  "bbb": z.string().describe("activity_id 词条描述"),
  "aaa": z.string().describe("1").optional(),
  "aaa_open_id": z.string().describe("1").optional(),
  "tesst": z.array(z.object({ "auth_status": z.boolean().describe("授权状态").optional(), "create_time": z.string().describe("任务创建时间").optional(), "end_time": z.string().describe("任务结束时间").optional(), "final_time": z.string().describe("任务到达终态的时间").optional(), "finish_periods": z.number().int().describe("任务完成期数").optional(), "merchant_id": z.string().describe("芝麻侧的商户id").optional(), "merchant_logo": z.string().describe("商户logo").optional(), "merchant_name": z.string().describe("商户名称").optional(), "out_biz_no": z.string().describe("生活记录加入时的外部业务号").optional(), "period_type": z.string().describe("周期类型").optional(), "promise_name": z.string().describe("生活记录模板名称").optional(), "record_id": z.string().describe("生活记录主记录id").optional(), "record_status": z.string().describe("主任务状态").optional(), "start_time": z.string().describe("任务开始时间").optional(), "sub_record_status": z.string().describe("子记录状态").optional(), "sub_title": z.string().describe("副标题").optional(), "template_id": z.string().describe("生活记录模板id").optional(), "total_periods": z.number().int().describe("任务总期数").optional() })).describe("stst").optional(),
  "xxx": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### alipay_security_risk_customerrisk_send

**Environment variables**



**Input schema**

```ts
{
  "bank_card_no": z.string().describe("交易对应的银行卡的卡号（支付宝直连和间连合作伙伴均可回传此参数）").optional(),
  "business_license_no": z.string().describe("该账号对应的营业执照号码（支付宝直连和间连合作伙伴均可回传此参数）").optional(),
  "cert_no": z.string().describe("该用户对应的身份证号码（支付宝直连和间连合作伙伴均可回传此参数）").optional(),
  "email_address": z.string().describe("账户注册时填写的邮箱地址(适用于支付宝直连商户回传此信息)").optional(),
  "external_id": z.string().describe("适用于间连业务场景下，商户在银行被分配的ID（适用于支付宝间连合作伙伴回传此信息）").optional(),
  "merch_name": z.string().describe("该笔风险交易购买的具体商品名称（适用于支付宝直连商户回传此信息）").optional(),
  "mobile": z.string().describe("手机（支付宝直连和间连合作伙伴均可回传此参数）").optional(),
  "mobile_ip": z.string().describe("该账号登录合作伙伴平台时的IP地址（适用于支付宝直连商户回传此信息）").optional(),
  "order_ip": z.string().describe("该账户在商户平台下单时的MAC地址或IP地址（适用于支付宝直连商户回传此信息）").optional(),
  "pid": z.string().describe("适用于直连商户场景下的支付宝合作伙伴ID（适用于支付宝直连合作伙伴回传此信息）").optional(),
  "plat_account": z.string().describe("指第三方在商户平台注册成功后，平台给予的账户号（适用于支付宝直连商户回传此信息）").optional(),
  "process_code": z.string().describe("直连场景下，商户对该账户采取的措施：\r\t多种处理结果可调用多次，每次回传一种处理结果。\r\t（01：暂停发货；\r\t02：延迟结算；\r\t03：关停账户；\r\t04：暂停发货+关停账户；\r\t05：延迟结算+关停账户；\r\t06：其他；\r\t07：平台进行退款退订；\r\t08：平台跟用户沟通后，用户撤诉。\r\t间连场景下，商户回传处理结果：\r\t对商户的处理情况：\r\t01：已延迟结算，02：关停商户，99：其他\r\t多重处理结果可调用多次，每次回传一种处理结果").optional(),
  "smid": z.string().describe("指间连交易场景下商家被支付宝分配的ID（适用于支付宝间连合作伙伴回传此信息）").optional(),
  "trade_no": z.string().describe("支付宝推送的风险消息中的交易号（支付宝直连和间连合作伙伴均需回传此参数）").optional()
}
```

### alipay_security_risk_verifyidentity_miniapp_confirm

**Environment variables**



**Input schema**

```ts
{
  "challenge": z.string().describe("业务的业务流水号，例如订单id").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID，验证时会与做身份认证时候会话中的openid做比对，如不相符核验结果不通过").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID，验证时会与做身份认证时候会话中的userId做比对，如不相符核验结果不通过").optional(),
  "verify_id": z.string().describe("核身校验id，是一次核身校验服务中唯一性的id").optional()
}
```

### alipay_social_base_contentlib_standardcontent_batchquery

**Environment variables**



**Input schema**

```ts
{
  "need_detail": z.boolean().describe("指示是否返回内容详情, 默认为false\tfalse: 仅返回内容ID列表\ttrue:返回 content_details").optional(),
  "page_num": z.number().int().describe("当页分页,默认为1").optional(),
  "page_size": z.number().int().describe("分页记录数，最大20,默认20").optional(),
  "public_id": z.string().describe("生活号+号ID，只有MCN机构为达人号ID查询内容才需要传入").optional(),
  "status": z.string().describe("内容状态，默认查询所有状态").optional()
}
```

### alipay_system_oauth_token

**Environment variables**



**Input schema**

```ts
{
  "code": z.string().describe("授权码，用户对应用授权后得到。本参数在 grant_type 为 authorization_code 时必填；为 refresh_token 时不填。").optional(),
  "grant_type": z.string().describe("授权方式").optional(),
  "refresh_token": z.string().describe("刷新令牌，上次换取访问令牌时得到。本参数在 grant_type 为 authorization_code 时不填；为 refresh_token 时必填，且该值来源于此接口的返回值 app_refresh_token（即至少需要通过 grant_type=authorization_code 调用此接口一次才能获取）。").optional()
}
```

### alipay_trade_advance_consult

**Environment variables**



**Input schema**

```ts
{
  "alipay_user_id": z.string().describe("支付宝用户 id，2088开头的16为数字。\t除单笔订单风险预评估场景(即consult_scene指定ORDER_RISK_EVALUATION)外，其他场景必选。").optional(),
  "consult_scene": z.string().describe("订单咨询类型，用以选择咨询的服务。不传时默认为垫资咨询，其他的场景需要按照对接的服务传入指定的值。\tORDER_RISK_EVALUATION：表示单笔订单风险预评估。").optional(),
  "industry_product_code": z.string().describe("行业产品信息，咨询时会从该产品对应的销售方案中获取相关垫资规则配置。").optional(),
  "sub_merchant_id": z.string().describe("子商户id").optional(),
  "sub_merchant_type": z.string().describe("子商户类型").optional(),
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ） ，在进行单笔订单风险评估预咨询时必传。").optional(),
  "estimated_order_amount": z.string().describe("预估订单总金额，单位为元，精确到小数点后两位，单笔订单风险预评估时使用，取值范围[0.01,100000000]。").optional(),
  "out_trade_no": z.string().describe("商户请求时的外部订单号，在花芝场景下非空。").optional(),
  "need_user_risk_prediction": z.string().describe("是否需要进行用户风险预测").optional(),
  "trade_digest": z.string().describe("交易信息摘要，需要进行用户风险预测时可传，用于结合场景的更加精细的预测。具体信息结构服务接入前咨询约定。").optional(),
  "user_out_binding_phone": z.string().describe("用户在外部域账号系统绑定的手机号，需要进行用户风险预测时必传，用于预测用户是否面临被二次放号的场景。使用时需要对请求加密，加密后请求在公网传输时为加密文本。详见：https://opendocs.alipay.com/open/common/104567；https://opendocs.alipay.com/isv/grefvl/getaes").optional()
}
```

### alipay_trade_applepay_authentication_submit

**Environment variables**



**Input schema**

```ts
{
  "authentication_results": z.array(z.object({ "authentication_data": z.string().describe("已加密的鉴权数据").optional(), "authentication_mechanism": z.string().describe("鉴权类型，如：支付密码、数字签名").optional() })).describe("ApplePay核身鉴权结果，包括：支付密码、用户确认、数字签名").optional(),
  "device_identifier": z.string().describe("Apple端的设备ID").optional(),
  "dpan_identifier": z.string().describe("Apple绑定的BundleId").optional(),
  "transaction_identifier": z.string().describe("交易标识").optional()
}
```

### alipay_trade_batch_settle

**Environment variables**



**Input schema**

```ts
{
  "biz_product": z.string().describe("收单产品码，商家和支付宝签约的产品码").optional(),
  "extend_params": z.string().describe("扩展参数").optional(),
  "out_request_no": z.string().describe("结算请求外部流水号，32个字符以内、可包含字母、数字、下划线；需保证在商户端不重复，如果重复则返回该流水号对应的结算单据的状态。").optional(),
  "settle_clauses": z.array(z.object({ "amount": z.string().describe("结算金额，单位为元").optional(), "currency": z.string().describe("结算币种，支持人民币：CNY").optional(), "settle_account_entity": z.string().describe("结算账号所属于的结算主体类型。\tsecondMerchant 二级商户的结算账号\tstore 门店的结算账号\t如果不填，默认为settleEntityType对应的类型").optional(), "settle_account_id": z.string().describe("结算账户id。\t\t当结算账户id类型是cardSerialNo时，本参数为用户在支付宝绑定的卡编号；当结算账户id类型是userId时，本参数为用户的支付宝账号对应的支付宝唯一用户号；当结算账户id类型是loginName时，本参数为用户的支付宝登录号; 当 settle_account_type 为defaultSettle时，本参数必须为空").optional(), "settle_account_id_type": z.string().describe("结算账户id类型。当 settle_account_type 为 defaultSettle 时，本参数必须为空。 \t当settle_account_type 为bankCard时，本参数为cardSerialNo，表示结算账户id是银行卡编号; 当settle_account_type 为alipayBalance时，本参数为userId或者loginName，其中userId表示结算账户id是支付宝唯一用户号，loginName表示结算账户id是支付宝登录号。").optional(), "settle_account_type": z.string().describe("结算账户类型。\t\tbankCard: 结算账户为银行卡；\talipayBalance: 结算账户为支付宝余额户；\tdefaultSettle: 按默认结算规则结算").optional(), "settle_entity_biz_type": z.string().describe("已结算资产").optional(), "settle_entity_id": z.string().describe("结算主体账号。\t当结算主体类型为SecondMerchant，传二级商户ID(smid)；结算主体类型为Store时，传门店ID").optional(), "settle_entity_type": z.string().describe("结算主体类型。\tSecondMerchant：结算主体为二级商户\tStore：结算主体为门店").optional(), "sub_merchant": z.object({ "merchant_id": z.string().describe("支付宝二级商户编号。\t间连受理商户的支付宝商户编号，通过间连商户入驻接口后由支付宝生成。\t直付通和机构间连业务场景下必传。").optional(), "merchant_type": z.string().describe("二级商户编号类型。\t枚举值：\talipay:支付宝分配的间联商户编号；\t目前仅支持alipay，默认可以不传。").optional() }).optional() })).describe("结算明细条款").optional(),
  "settle_type": z.string().describe("结算方式，目前仅支持提前放款结算quickSettlement，提前放款结算需要商户开通快收服务，不填则为普通结算方式").optional()
}
```

### alipay_trade_batch_settle_query

**Environment variables**



**Input schema**

```ts
{
  "extend_params": z.string().describe("扩展参数").optional(),
  "out_request_no": z.string().describe("批量结算时传入的外部流水号，与settle_no二者必填其一。 out_request_no和settle_no如果同时存在，优先取settle_no").optional(),
  "settle_no": z.string().describe("结算单据号，与out_request_no二者必填其一").optional()
}
```

### alipay_trade_batch_transfer

**Environment variables**



**Input schema**

```ts
{
  "extend_params": z.string().describe("业务扩展参数").optional(),
  "out_request_no": z.string().describe("结算请求外部流水号，32个字符以内、可包含字母、数字、下划线；需保证在商户端不重复").optional(),
  "royalty_parameters": z.array(z.object({ "amount": z.string().describe("分账金额，单位为元").optional(), "desc": z.string().describe("分账描述").optional(), "scene": z.string().describe("分账场景，目前仅支持5中类型，RETURN_MONEY(垫资还款), CHARGE（费用）, REPLENISH（补贴），FUND_TRANS_IN_SWITCHING（存量资金搬迁），PUNISHMENT（处罚）").optional(), "trans_in_account_id": z.string().describe("分账转入账户id。当分账账户id类型是cardSerialNo时，本参数为用户在支付宝绑定的卡编号；当分账账户id类型是userId时，本参数为用户的支付宝账号对应的支付宝唯一用户号；当分账账户id类型是loginName时，本参数为用户的支付宝登录号;当分账账户id类型是openId时，本参数为用户的在该应用下的支付宝OpenId; 当 trans_in_account_type 为defaultSettle时，本参数必须为空").optional(), "trans_in_account_id_type": z.string().describe("分账转入账户id类型。 当trans_in_account_type 为bankCard时，本参数为cardSerialNo，表示分账账户id是银行卡编号; 当trans_in_account_type 为alipayBalance时，本参数为userId或者loginName或者openId，其中userId表示分账账户id是支付宝唯一用户号，loginName表示分账账户id是支付宝登录号，openId表示分账账户id是支付宝OpenId; 当 trans_in_account_type 为 defaultSettle 时，本参数必须为空。").optional(), "trans_in_account_type": z.string().describe("分账账户类型。 bankCard: 分账账户为银行卡； alipayBalance: 分账账户为支付宝余额户; defaultSettle: 按默认结算规则分账").optional(), "trans_in_entity_biz_type": z.string().describe("分账账户业务类型，目前仅支持已结算类型 settled").optional(), "trans_in_entity_id": z.string().describe("分账转出主体账 号。\r\t\r\t当分账转出主体类型为SecondMerchant，本参数为二级商户的SecondMerchantID\r\t\r\t当分账转出类型为Store，本参数为StoreID").optional(), "trans_in_entity_type": z.string().describe("分账转入主体类型。 SecondMerchant：分账转入主体为二级商户\tStore: 分账转入主体为门店").optional(), "trans_in_sub_merchant": z.object({ "merchant_id": z.string().describe("支付宝二级商户编号。\t间连受理商户的支付宝商户编号，通过间连商户入驻接口后由支付宝生成。\t直付通和机构间连业务场景下必传。").optional(), "merchant_type": z.string().describe("二级商户编号类型。\t枚举值：\talipay:支付宝分配的间联商户编号；\t目前仅支持alipay，默认可以不传。").optional() }).optional(), "trans_out_entity_biz_type": z.string().describe("分账转出方主体业务类型，目前仅支持已结算类型 settled").optional(), "trans_out_entity_id": z.string().describe("分账转出主体账。\r\t\r\t当分账转出主体类型为SecondMerchant，本参数为二级商户的SecondMerchantId\r\t\r\t当分账转出类型为Store，本参数为StoreID").optional(), "trans_out_entity_type": z.string().describe("分账转出主体类型。 SecondMerchant：结算主体为二级商户\tStore: 结算主体为门店").optional(), "trans_out_sub_merchant": z.object({ "merchant_id": z.string().describe("支付宝二级商户编号。\t间连受理商户的支付宝商户编号，通过间连商户入驻接口后由支付宝生成。\t直付通和机构间连业务场景下必传。").optional(), "merchant_type": z.string().describe("二级商户编号类型。\t枚举值：\talipay:支付宝分配的间联商户编号；\t目前仅支持alipay，默认可以不传。").optional() }).optional() })).describe("分账条款明细\t特别注意：最好一次只传一个分账条款。\t如果传多个，则要求出账方只能有一个，\t举例：A分给B+A分给C+A分给D=OK\tA分给B+C分给D=不行").optional()
}
```

### alipay_trade_batch_transfer_query

**Environment variables**



**Input schema**

```ts
{
  "out_request_no": z.string().describe("批量结算时传入的外部流水号，与settle_no二者必填其一。 out_request_no和settle_no如果同时存在，优先取settle_no").optional(),
  "settle_no": z.string().describe("结算单据号，与out_request_no二者必填其一").optional(),
  "extend_params": z.string().describe("扩展字段").optional()
}
```

### alipay_trade_cancel

**Environment variables**



**Input schema**

```ts
{
  "out_trade_no": z.string().describe("原支付请求的商户订单号,和支付宝交易号不能同时为空").optional(),
  "trade_no": z.string().describe("支付宝交易号，和商户订单号不能同时为空").optional()
}
```

### alipay_trade_close

**Environment variables**



**Input schema**

```ts
{
  "notify_url": z.string().describe("通知地址").optional(),
  "operator_id": z.string().describe("商家操作员编号 id，由商家自定义。").optional(),
  "out_trade_no": z.string().describe("订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 trade_no,out_trade_no如果同时存在优先取trade_no").optional(),
  "trade_no": z.string().describe("该交易在支付宝系统中的交易流水号。最短 16 位，最长 64 位。和out_trade_no不能同时为空，如果同时传了 out_trade_no和 trade_no，则以 trade_no为准。").optional()
}
```

### alipay_trade_create

**Environment variables**



**Input schema**

```ts
{
  "agreement_sign_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "alipay_store_id": z.string().describe("支付宝店铺编号。\t指商户创建门店后支付宝生成的门店ID。").optional(),
  "bkagent_req_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "body": z.string().describe("订单附加信息。\t如果请求时传递了该参数，将在异步通知、对账单中原样返回，同时会在商户和用户的pc账单详情中作为交易描述展示").optional(),
  "business_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "buyer_id": z.string().describe("买家支付宝用户ID。\t2088开头的16位纯数字，小程序场景下获取用户ID请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/introduce/authcode\" >用户授权</a>;\t其它场景下获取用户ID请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/open/284/106001/#s4\" >网页授权获取用户信息</a>;\t注：交易的买家与卖家不能相同。").optional(),
  "buyer_logon_id": z.string().describe("买家支付宝登录账号。 建议通过open_id来传递买家信息。").optional(),
  "buyer_open_id": z.string().describe("买家支付宝用户唯一标识").optional(),
  "disable_pay_channels": z.string().describe("禁用渠道,用户不可用指定渠道支付，多个渠道以逗号分割\r\t注，与enable_pay_channels互斥\r\t<a href=\"https://docs.open.alipay.com/common/wifww7\">渠道列表</a>").optional(),
  "discountable_amount": z.string().describe("可打折金额。\t参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional(),
  "enable_pay_channels": z.string().describe("指定支付渠道。\t用户只能使用指定的渠道进行支付，多个渠道以逗号分割。\t与disable_pay_channels互斥，支持传入的值：<a target=\"_blank\" href=\"https://docs.open.alipay.com/common/wifww7\">渠道列表</a>。\t注：如果传入了指定支付渠道，则用户只能用指定内的渠道支付，包括营销渠道也要指定才能使用。该参数可能导致用户支付受限，慎用。").optional(),
  "ext_user_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "goods_detail": z.array(z.object({ "alipay_goods_id": z.string().describe("支付宝定义的统一商品编号").optional(), "body": z.string().describe("商品描述信息").optional(), "categories_tree": z.string().describe("商品类目树，从商品类目根节点到叶子节点的类目id组成，类目id值使用|分割").optional(), "goods_category": z.string().describe("商品类目").optional(), "goods_id": z.string().describe("商品的编号，该参数传入支付券上绑定商品goods_id,\t倘若无支付券需要消费，该字段传入商品最小粒度的商品ID（如：若商品有sku粒度，则传商户sku粒度的ID）").optional(), "goods_name": z.string().describe("商品名称").optional(), "out_item_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\">https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "out_sku_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\" >https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "price": z.string().describe("商品单价，单位为元").optional(), "quantity": z.number().int().describe("商品数量").optional(), "show_url": z.string().describe("商品的展示地址").optional() })).describe("订单包含的商品列表信息，json格式。").optional(),
  "logistics_detail": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_order_no": z.string().describe("商户的原始订单号").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "op_app_id": z.string().describe("小程序支付中，商户实际经营主体的小程序应用的appid").optional(),
  "op_buyer_open_id": z.string().describe("买家支付宝用户唯一标识（商户实际经营主体的小程序应用关联的买家open_id）").optional(),
  "operator_id": z.string().describe("商户操作员编号。").optional(),
  "out_trade_no": z.string().describe("商户订单号。\t由商家自定义，64个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "passback_params": z.string().describe("公用回传参数。\t如果请求时传递了该参数，支付宝会在异步通知时将该参数原样返回。").optional(),
  "product_code": z.string().describe("产品码。\t商家和支付宝签约的产品码。 枚举值（点击查看签约情况）：\t<a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/486/487\">FACE_TO_FACE_PAYMENT</a>：当面付产品；\t默认值为FACE_TO_FACE_PAYMENT。").optional(),
  "query_options": z.array(z.string()).describe("返回参数选项。 商户通过传递该参数来定制需要额外返回的信息字段，数组格式。包括但不限于：[\"enterprise_pay_info\",\"hyb_amount\"]").optional(),
  "receiver_address_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "royalty_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "seller_id": z.string().describe("卖家支付宝用户ID。\t当需要指定收款账号时，通过该参数传入，如果该值为空，则默认为商户签约账号对应的支付宝用户ID。\t收款账号优先级规则：门店绑定的收款账户>请求传入的seller_id>商户签约账号对应的支付宝用户ID；\t注：直付通和机构间联场景下seller_id无需传入或者保持跟pid一致；\t如果传入的seller_id与pid不一致，需要联系支付宝小二配置收款关系；").optional(),
  "settle_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "store_id": z.string().describe("商户门店编号。\t指商户创建门店时输入的门店编号。").optional(),
  "sub_merchant": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "subject": z.string().describe("订单标题。\t注意：不可使用特殊字符，如 /，=，& 等。").optional(),
  "terminal_id": z.string().describe("商户机具终端编号。").optional(),
  "time_expire": z.string().describe("订单绝对超时时间。\t格式为yyyy-MM-dd HH:mm:ss。\t注：time_expire和timeout_express两者只需传入一个或者都不传，如果两者都传，优先使用time_expire。").optional(),
  "timeout_express": z.string().describe("订单相对超时时间。从交易创建时间开始计算。\t该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。\t当面付场景默认值为3h，如需指定，推荐设置5m及以上。\t\t注：time_expire和timeout_express两者只需传入一个或者都不传，如果两者都传，优先使用time_expire。").optional(),
  "total_amount": z.string().describe("订单总金额。\t单位为元，精确到小数点后两位，取值范围：[0.01,100000000] 。").optional(),
  "undiscountable_amount": z.string().describe("不可打折金额。\t不参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional()
}
```

### alipay_trade_customs_declare

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("报关金额，单位为人民币“元”，精确到小数点后2位。").optional(),
  "buyer_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "customs_place": z.string().describe("海关编号（大小写皆可）。参见“ <a href=\"https://opendocs.alipay.com/pre-open/01x3kh#%E6%B5%B7%E5%85%B3%E7%BC%96%E5%8F%B7\">海关编号</a>”。").optional(),
  "declare_mode": z.number().int().describe("报关模式，默认可空，1表示需要强校验买家和支付人的身份信息。").optional(),
  "deposit_trade_no": z.string().describe("定金在支付宝系统中的交易流水号，最长64位。当该参数不为空时，代表为”定金+尾款“报关场景。").optional(),
  "is_split": z.string().describe("商户控制本单是否拆单的报关参数。\r\t仅当该参数传值为T或者t时，才会触发拆单。").optional(),
  "merchant_customs_code": z.string().describe("商户在海关备案的编号。").optional(),
  "merchant_customs_name": z.string().describe("商户海关备案名称。").optional(),
  "merchant_id": z.string().describe("国际站商户标识").optional(),
  "out_request_no": z.string().describe("报关流水号。商户生成的用于唯一标识一次报关操作的业务编号。\t建议生成规则：yyyymmdd型8位日期拼接4位序列号。每个报关请求号仅允许传入：数字、英文字母、下划线”_”、短横线”－” 。长度6-64位前后不能有空格").optional(),
  "out_trade_no": z.string().describe("国际站外部订单号").optional(),
  "sub_out_biz_no": z.string().describe("拆单报关的商户子订单号。 用于区别拆单时不同子单。拆单时必须传入，否则会报INVALID_PARAMETER错误码。").optional(),
  "trade_no": z.string().describe("支付宝交易号。该交易在支付宝系统中的交易流水号，最长64位。").optional()
}
```

### alipay_trade_customs_query

**Environment variables**



**Input schema**

```ts
{
  "out_request_nos": z.string().describe("报关请求号。需要查询的商户端报关请求号，支持批量查询，\r\t多个值用英文半角逗号分隔，单次请求最多10个;").optional()
}
```

### alipay_trade_fastpay_refund_query

**Environment variables**



**Input schema**

```ts
{
  "org_pid": z.string().describe("银行间联模式下有用，其它场景请不要使用；\r\t双联通过该参数指定需要查询的交易所属收单机构的pid;").optional(),
  "out_request_no": z.string().describe("退款请求号。\t请求退款接口时，传入的退款请求号，如果在退款请求时未传入，则该值为创建交易时的商户订单号。").optional(),
  "out_trade_no": z.string().describe("商户订单号。\t订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 trade_no,out_trade_no如果同时存在优先取trade_no").optional(),
  "query_options": z.array(z.string()).describe("查询选项，商户通过上送该参数来定制同步需要额外返回的信息字段，数组格式。枚举支持：\trefund_detail_item_list：本次退款使用的资金渠道；\tgmt_refund_pay：退款执行成功的时间；\tdeposit_back_info：银行卡冲退信息；").optional(),
  "trade_no": z.string().describe("支付宝交易号。\t和商户订单号不能同时为空").optional()
}
```

### alipay_trade_order_pay

**Environment variables**



**Input schema**

```ts
{
  "advance_payment_type": z.string().describe("垫资支付模式。支付时需要垫资的场景才传入。具体传参需与支付宝约定。\tCREDIT_FULFILLMENT_ZM 表示先用后付产品履约动作支持芝麻垫资。").optional(),
  "buyer_id": z.string().describe("买家的支付宝用户id\r\t\r\t注：\r\t1.用于校验与已存交易中的买家是否相等").optional(),
  "buyer_open_id": z.string().describe("买家支付宝用户唯一标识\t\t注：\t1.用于校验与已存交易中的买家是否相等").optional(),
  "buyer_pay_detail": z.array(z.object({ "amount": z.string().describe("买家支付金额，单位：元。").optional(), "pay_channel": z.string().describe("支付渠道").optional() })).describe("买家支付明细\r\t\r\t目前支持的支付渠道为：\r\t- offline_pos：本次买家使用的是pos刷卡支付\r\t\r\t注：\r\t各支付工具金额总和=订单总金额").optional(),
  "fulfillment_amount": z.string().describe("本次履约支付金额，单位为元，精确到小数点后两位。履约支付场景才需要传入。").optional(),
  "is_async_pay": z.boolean().describe("是否异步支付，传入true时，表明本次期望走异步支付，会先将支付请求受理下来，再异步推进。商户可以通过交易的异步通知或者轮询交易的状态来确定最终的交易结果").optional(),
  "order_pay_mode": z.string().describe("订单支付模式。特殊支付场景才需要传入。具体传参需与支付宝约定。\tCREDIT_FULFILLMENT_ZM表示基于芝麻授信的履约支付模式，比如芝麻先用后付产品。").optional(),
  "out_request_no": z.string().describe("商户请求号，标识一次请求的唯一id，用于幂等控制。").optional(),
  "product_code": z.string().describe("销售产品码").optional(),
  "total_amount": z.string().describe("订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]\r\t\r\t注：\r\t1.用于校验与已存交易中的金额是否相等").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}
```

### alipay_trade_order_settle

**Environment variables**



**Input schema**

```ts
{
  "extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "operator_id": z.string().describe("操作员 ID，商家自定义操作员编号。").optional(),
  "out_request_no": z.string().describe("结算请求流水号，由商家自定义。32个字符以内，仅可包含字母、数字、下划线。需保证在商户端不重复。").optional(),
  "royalty_mode": z.string().describe("分账模式，目前有两种分账同步执行sync，分账异步执行async，不传默认同步执行").optional(),
  "royalty_parameters": z.array(z.object({ "amount": z.string().describe("分账的金额，单位为元").optional(), "amount_percentage": z.number().int().describe("分账信息中分账百分比。取值范围为大于0，少于或等于100的整数。").optional(), "desc": z.string().describe("分账描述").optional(), "royalty_scene": z.string().describe("可选值：达人佣金、平台服务费、技术服务费、其他").optional(), "royalty_type": z.string().describe("分账类型.").optional(), "trans_in": z.string().describe("收入方账户。如果收入方账户类型为userId，本参数为收入方的支付宝账号对应的支付宝唯一用户号，以2088开头的纯16位数字；如果收入方类型为cardAliasNo，本参数为收入方在支付宝绑定的卡编号；如果收入方类型为loginName，本参数为收入方的支付宝登录号；").optional(), "trans_in_name": z.string().describe("分账收款方姓名，上送则进行姓名与支付宝账号的一致性校验，校验不一致则分账失败。不上送则不进行姓名校验").optional(), "trans_in_type": z.string().describe("收入方账户类型。").optional(), "trans_out": z.string().describe("支出方账户。如果支出方账户类型为userId，本参数为支出方的支付宝账号对应的支付宝唯一用户号，以2088开头的纯16位数字；如果支出方类型为loginName，本参数为支出方的支付宝登录号。 泛金融类商户分账时，该字段不要上送。").optional(), "trans_out_type": z.string().describe("支出方账户类型。").optional() })).describe("分账明细信息。单独调用分账完结时，可以不传此参数。其他场景必传。\t注意：商家分账场景下分账收入方 trans_in 只支持支付宝账户，不支持使用 cardAliasNo 卡编号。").optional(),
  "trade_no": z.string().describe("支付宝订单号").optional()
}
```

### alipay_trade_order_settle_query

**Environment variables**



**Input schema**

```ts
{
  "settle_no": z.string().describe("支付宝分账请求单号，传入该字段，无需再传外部请求号和支付宝交易号").optional(),
  "out_request_no": z.string().describe("调用分账接口时指定的外部请求号。分账查询时需要和支付宝交易号一起传入").optional(),
  "trade_no": z.string().describe("支付宝交易号，传入该字段，需要和外部请求号一起传入").optional()
}
```

### alipay_trade_orderinfo_sync

**Environment variables**



**Input schema**

```ts
{
  "biz_type": z.string().describe("交易信息同步对应的业务类型，具体值与支付宝约定；\r\t信用授权场景下传CREDIT_AUTH\r\t信用代扣场景下传CREDIT_DEDUCT").optional(),
  "order_biz_info": z.string().describe("商户传入同步信息，具体值要和支付宝约定；用于芝麻信用租车、单次授权等信息同步场景，格式为json格式。\t状态枚举如下：\t\tCOMPLETE：同步用户已履约\t适用场景：发起扣款后，芝麻生成待履约记录，如果用户通过其他方式完成订单支付，请反馈该状态，芝麻将完结待履约记录对用户形成一条良好履约记录；同步该状态时需要同步调用 取消扣款 接口关闭交易订单。\t\tCLOSED： 同步履约已取消\t适用场景：发起扣款后，芝麻生成待履约记录，如果发现该笔扣款无效需要取消，请反馈该状态，芝麻将取消用户待履约记录；同步该状态时需要同步调用 取消扣款 接口关闭交易订单。").optional(),
  "orig_request_no": z.string().describe("原始业务请求单号。如对某一次退款进行履约时，该字段传退款时的退款请求号").optional(),
  "out_request_no": z.string().describe("外部请求号，商家自定义且保证商家系统中唯一。需要注意的是，支付宝会对外部请求号做幂等控制，如果一笔交易再次使用相同的外部请求号发起请求，订单信息不会更新。").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}
```

### alipay_trade_overseas_settle

**Environment variables**



**Input schema**

```ts
{
  "amount": z.string().describe("跨境结算的人民币金额，单位为元；等于交易金额 (实际为实收金额)，加上净补差金额，减去已退款金额，减去净收费金额，再减去净分账金额，").optional(),
  "extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "foreign_settle_currency": z.string().describe("跨境结算的外币币种").optional(),
  "out_request_no": z.string().describe("外部请求号，开发者自行生成并保证唯一性，作为业务幂等性控制").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}
```

### alipay_trade_pay

**Environment variables**



**Input schema**

```ts
{
  "advance_payment_type": z.string().describe("支付模式类型,若值为ENJOY_PAY_V2表示当前交易允许走先享后付2.0垫资").optional(),
  "agreement_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "alipay_store_id": z.string().describe("支付宝店铺编号。\t指商户创建门店后支付宝生成的门店ID。").optional(),
  "auth_code": z.string().describe("支付授权码。\t当面付场景传买家的付款码（25~30开头的长度为16~24位的数字，实际字符串长度以开发者获取的付款码长度为准）或者刷脸标识串（fp开头的35位字符串）；\t周期扣款或代扣场景无需传入，协议号通过agreement_params参数传递； \t支付宝预授权和新当面资金授权场景无需传入，授权订单号通过 auth_no字段传入。\t注：交易的买家与卖家不能相同。").optional(),
  "auth_confirm_mode": z.string().describe("预授权确认模式。\t适用于支付宝预授权和新当面资金授权场景。枚举值：\tCOMPLETE：转交易完成后解冻剩余冻结金额；\tNOT_COMPLETE：转交易完成后不解冻剩余冻结金额；\t默认值为NOT_COMPLETE。").optional(),
  "auth_no": z.string().describe("资金预授权单号。\t支付宝预授权和新当面资金授权场景下必填。").optional(),
  "bkagent_req_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "body": z.string().describe("订单附加信息。\t如果请求时传递了该参数，将在异步通知、对账单中原样返回，同时会在商户和用户的pc账单详情中作为交易描述展示").optional(),
  "business_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "buyer_id": z.string().describe("买家支付宝用户ID。\t支付宝预授权和新当面资金授权场景下必填，其它场景不需要传入。").optional(),
  "buyer_open_id": z.string().describe("买家支付宝用户唯一标识").optional(),
  "disable_pay_channels": z.string().describe("禁用支付渠道。\t多个渠道以逗号分割，如同时禁用信用支付类型和积分，则传入：\"credit_group,point\"。\t支持传入的值：<a target=\"_blank\" href=\"https://docs.open.alipay.com/common/wifww7\">渠道列表</a>").optional(),
  "discountable_amount": z.string().describe("可打折金额。\t参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional(),
  "ext_user_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "goods_detail": z.array(z.object({ "alipay_goods_id": z.string().describe("支付宝定义的统一商品编号").optional(), "body": z.string().describe("商品描述信息").optional(), "categories_tree": z.string().describe("商品类目树，从商品类目根节点到叶子节点的类目id组成，类目id值使用|分割").optional(), "goods_category": z.string().describe("商品类目").optional(), "goods_id": z.string().describe("商品的编号，该参数传入支付券上绑定商品goods_id,\t倘若无支付券需要消费，该字段传入商品最小粒度的商品ID（如：若商品有sku粒度，则传商户sku粒度的ID）").optional(), "goods_name": z.string().describe("商品名称").optional(), "out_item_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\">https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "out_sku_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\" >https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "price": z.string().describe("商品单价，单位为元").optional(), "quantity": z.number().int().describe("商品数量").optional(), "show_url": z.string().describe("商品的展示地址").optional() })).describe("订单包含的商品列表信息，json格式。").optional(),
  "is_async_pay": z.boolean().describe("是否异步支付，传入true时，表明本次期望走异步支付，会先将支付请求受理下来，再异步推进。商户可以通过交易的异步通知或者轮询交易的状态来确定最终的交易结果。\t只在代扣场景下有效，其它场景无需传入。").optional(),
  "merchant_order_no": z.string().describe("商户的原始订单号").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operator_id": z.string().describe("商户操作员编号。").optional(),
  "out_trade_no": z.string().describe("商户订单号。\t由商家自定义，64个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "passback_params": z.string().describe("公用回传参数。\t如果请求时传递了该参数，支付宝会在异步通知时将该参数原样返回。").optional(),
  "pay_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "product_code": z.string().describe("产品码。 商家和支付宝签约的产品码。 枚举值（点击查看签约情况）： <a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/486/487\">FACE_TO_FACE_PAYMENT</a>：当面付产品； <a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/807/1419\">CYCLE_PAY_AUTH</a>：周期扣款产品； GENERAL_WITHHOLDING：代扣产品； <a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/712/1471\">PRE_AUTH_ONLINE</a>：支付宝预授权产品； PRE_AUTH：新当面资金授权产品； 默认值为FACE_TO_FACE_PAYMENT。 注意：非当面付产品使用本接口时，本参数必填。请传入对应产品码。").optional(),
  "promo_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "query_options": z.array(z.string()).describe("返回参数选项。\t商户通过传递该参数来定制同步需要额外返回的信息字段，数组格式。包括但不限于：[\"fund_bill_list\",\"voucher_detail_list\",\"enterprise_pay_info\",\"discount_goods_detail\",\"discount_amount\",\"mdiscount_amount\"]").optional(),
  "request_org_pid": z.string().describe("收单机构(例如银行）的标识，填写该机构在支付宝的pid。只在机构间联场景下传递该值。").optional(),
  "royalty_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "scene": z.string().describe("支付场景。枚举值：\tbar_code：当面付条码支付场景；\tsecurity_code：当面付刷脸支付场景，对应的auth_code为fp开头的刷脸标识串；\t周期扣款或代扣场景无需传入，协议号通过agreement_params参数传递； \t支付宝预授权和新当面资金授权场景无需传入，授权订单号通过 auth_no字段传入。\t默认值为bar_code。").optional(),
  "seller_id": z.string().describe("卖家支付宝用户ID。\t当需要指定收款账号时，通过该参数传入，如果该值为空，则默认为商户签约账号对应的支付宝用户ID。\t收款账号优先级规则：门店绑定的收款账户>请求传入的seller_id>商户签约账号对应的支付宝用户ID；\t注：直付通和机构间联场景下seller_id无需传入或者保持跟pid一致；\t如果传入的seller_id与pid不一致，需要联系支付宝小二配置收款关系；\t支付宝预授权和新当面资金授权场景下必填。").optional(),
  "settle_currency": z.string().describe("商户指定的结算币种，支持英镑：GBP、港币：HKD、美元：USD、新加坡元：SGD、日元：JPY、加拿大元：CAD、澳元：AUD、欧元：EUR、新西兰元：NZD、韩元：KRW、泰铢：THB、瑞士法郎：CHF、瑞典克朗：SEK、丹麦克朗：DKK、挪威克朗：NOK、马来西亚林吉特：MYR、印尼卢比：IDR、菲律宾比索：PHP、毛里求斯卢比：MUR、以色列新谢克尔：ILS、斯里兰卡卢比：LKR、俄罗斯卢布：RUB、阿联酋迪拉姆：AED、捷克克朗：CZK、南非兰特：ZAR、人民币：CNY").optional(),
  "settle_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "store_id": z.string().describe("商户门店编号。\t指商户创建门店时输入的门店编号。").optional(),
  "sub_merchant": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "subject": z.string().describe("订单标题。\t注意：不可使用特殊字符，如 /，=，& 等。").optional(),
  "terminal_id": z.string().describe("商户机具终端编号。").optional(),
  "terminal_params": z.string().describe("IOT设备信息。\t通过集成IOTSDK的机具发起的交易时传入，取值为IOTSDK生成的业务签名值。").optional(),
  "time_expire": z.string().describe("订单绝对超时时间。\t格式为yyyy-MM-dd HH:mm:ss。超时时间范围：1m~15d。\t注：time_expire和timeout_express两者只需传入一个或者都不传，如果两者都传，优先使用time_expire。").optional(),
  "timeout_express": z.string().describe("订单相对超时时间。从交易创建时间开始计算。\t\t该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。\t\t当面付场景默认值为3h；\t\t其它场景默认值为15d;").optional(),
  "total_amount": z.string().describe("订单总金额。\t单位为元，精确到小数点后两位，取值范围：[0.01,100000000] 。").optional(),
  "trans_currency": z.string().describe("标价币种,  total_amount 对应的币种单位。支持英镑：GBP、港币：HKD、美元：USD、新加坡元：SGD、日元：JPY、加拿大元：CAD、澳元：AUD、欧元：EUR、新西兰元：NZD、韩元：KRW、泰铢：THB、瑞士法郎：CHF、瑞典克朗：SEK、丹麦克朗：DKK、挪威克朗：NOK、马来西亚林吉特：MYR、印尼卢比：IDR、菲律宾比索：PHP、毛里求斯卢比：MUR、以色列新谢克尔：ILS、斯里兰卡卢比：LKR、俄罗斯卢布：RUB、阿联酋迪拉姆：AED、捷克克朗：CZK、南非兰特：ZAR、人民币：CNY").optional(),
  "undiscountable_amount": z.string().describe("不可打折金额。\t不参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional()
}
```

### alipay_trade_precreate

**Environment variables**



**Input schema**

```ts
{
  "alipay_store_id": z.string().describe("支付宝店铺编号。\t指商户创建门店后支付宝生成的门店ID。").optional(),
  "bkagent_req_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "body": z.string().describe("订单附加信息。\t如果请求时传递了该参数，将在异步通知、对账单中原样返回，同时会在商户和用户的pc账单详情中作为交易描述展示").optional(),
  "business_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "buyer_logon_id": z.string().describe("买家支付宝账号").optional(),
  "code_type": z.string().describe("码类型，如果请求时传入了share_code，将在响应参数返回吱口令；如果为空，则默认为订单码").optional(),
  "disable_pay_channels": z.string().describe("禁用渠道,用户不可用指定渠道支付，多个渠道以逗号分割\t注，与enable_pay_channels互斥\t<a href=\"https://docs.open.alipay.com/common/wifww7\">渠道列表</a>").optional(),
  "discountable_amount": z.string().describe("可打折金额。\t参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional(),
  "enable_pay_channels": z.string().describe("指定支付渠道。\t用户只能使用指定的渠道进行支付，多个渠道以逗号分割。\t与disable_pay_channels互斥，支持传入的值：<a target=\"_blank\" href=\"https://docs.open.alipay.com/common/wifww7\">渠道列表</a>。\t注：如果传入了指定支付渠道，则用户只能用指定内的渠道支付，包括营销渠道也要指定才能使用。该参数可能导致用户支付受限，慎用。").optional(),
  "ext_user_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "goods_detail": z.array(z.object({ "alipay_goods_id": z.string().describe("支付宝定义的统一商品编号").optional(), "body": z.string().describe("商品描述信息").optional(), "categories_tree": z.string().describe("商品类目树，从商品类目根节点到叶子节点的类目id组成，类目id值使用|分割").optional(), "goods_category": z.string().describe("商品类目").optional(), "goods_id": z.string().describe("商品的编号，该参数传入支付券上绑定商品goods_id,\t倘若无支付券需要消费，该字段传入商品最小粒度的商品ID（如：若商品有sku粒度，则传商户sku粒度的ID）").optional(), "goods_name": z.string().describe("商品名称").optional(), "out_item_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\">https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "out_sku_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\" >https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "price": z.string().describe("商品单价，单位为元").optional(), "quantity": z.number().int().describe("商品数量").optional(), "show_url": z.string().describe("商品的展示地址").optional() })).describe("订单包含的商品列表信息.json格式. 其它说明详见：“商品明细说明”").optional(),
  "merchant_order_no": z.string().describe("商户的原始订单号").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operator_id": z.string().describe("商户操作员编号。").optional(),
  "out_trade_no": z.string().describe("商户订单号。\t由商家自定义，64个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "passback_params": z.string().describe("公用回传参数。\t如果请求时传递了该参数，支付宝会在异步通知时将该参数原样返回。").optional(),
  "product_code": z.string().describe("产品码。\t商家和支付宝签约的产品码。 枚举值（点击查看签约情况）：\t<a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/486/487\">FACE_TO_FACE_PAYMENT</a>：当面付产品；\t默认值为FACE_TO_FACE_PAYMENT。").optional(),
  "qr_code_timeout_express": z.string().describe("二维码订单相对超时时间。\t该笔订单允许的最晚付款时间，逾期将关闭交易，从生成二维码开始计时。 取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。\t注：二维码最长有效期是2小时，不管该参数传递的值是多少，超过2小时后二维码都将失效不能再进行扫码支付。").optional(),
  "query_options": z.array(z.string()).describe("返回参数选项。 商户通过传递该参数来定制需要额外返回的信息字段，数组格式。包括但不限于：[\"hyb_amount\",\"enterprise_pay_info\"]").optional(),
  "royalty_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "seller_id": z.string().describe("卖家支付宝用户ID。\t当需要指定收款账号时，通过该参数传入，如果该值为空，则默认为商户签约账号对应的支付宝用户ID。\t收款账号优先级规则：门店绑定的收款账户>请求传入的seller_id>商户签约账号对应的支付宝用户ID；\t注：直付通和机构间联场景下seller_id无需传入或者保持跟pid一致；\t如果传入的seller_id与pid不一致，需要联系支付宝小二配置收款关系；").optional(),
  "settle_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "store_id": z.string().describe("商户门店编号。\t指商户创建门店时输入的门店编号。").optional(),
  "sub_merchant": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "subject": z.string().describe("订单标题。\t注意：不可使用特殊字符，如 /，=，& 等。").optional(),
  "terminal_id": z.string().describe("商户机具终端编号。").optional(),
  "time_expire": z.string().describe("订单绝对超时时间。\t格式为yyyy-MM-dd HH:mm:ss。\t注：time_expire和timeout_express两者只需传入一个或者都不传，如果两者都传，优先使用time_expire。").optional(),
  "timeout_express": z.string().describe("订单相对超时时间。 从预下单请求时间开始计算。\t该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。 \t当面付场景默认值为3h，如需指定，推荐设置5m及以上\t\t注：\t1. 二维码最长有效期是2小时，不管该参数传递的值是多少，超过2小时后二维码都将失效不能再进行扫码支付。\t2. time_expire和timeout_express两者只需传入一个或者都不传，如果两者都传，优先使用time_expire。").optional(),
  "total_amount": z.string().describe("订单总金额。\t单位为元，精确到小数点后两位，取值范围：[0.01,100000000] 。").optional(),
  "undiscountable_amount": z.string().describe("不可打折金额。\t不参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional()
}
```

### alipay_trade_query

**Environment variables**



**Input schema**

```ts
{
  "org_pid": z.string().describe("银行间联模式下有用，其它场景请不要使用；\r\t双联通过该参数指定需要查询的交易所属收单机构的pid;").optional(),
  "out_trade_no": z.string().describe("订单支付时传入的商户订单号,和支付宝交易号不能同时为空。\r\ttrade_no,out_trade_no如果同时存在优先取trade_no").optional(),
  "query_options": z.array(z.string()).describe("查询选项，商户传入该参数可定制本接口同步响应额外返回的信息字段，数组格式。").optional(),
  "trade_no": z.string().describe("支付宝交易号，和商户订单号不能同时为空").optional()
}
```

### alipay_trade_refund

**Environment variables**



**Input schema**

```ts
{
  "goods_detail": z.array(z.object({ "alipay_goods_id": z.string().describe("支付宝定义的统一商品编号").optional(), "body": z.string().describe("商品描述信息").optional(), "categories_tree": z.string().describe("商品类目树，从商品类目根节点到叶子节点的类目id组成，类目id值使用|分割").optional(), "goods_category": z.string().describe("商品类目").optional(), "goods_id": z.string().describe("商品的编号，该参数传入支付券上绑定商品goods_id,\t倘若无支付券需要消费，该字段传入商品最小粒度的商品ID（如：若商品有sku粒度，则传商户sku粒度的ID）").optional(), "goods_name": z.string().describe("商品名称").optional(), "out_item_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\">https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "out_sku_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\" >https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "price": z.string().describe("商品单价，单位为元").optional(), "quantity": z.number().int().describe("商品数量").optional(), "show_url": z.string().describe("商品的展示地址").optional() })).describe("退款包含的商品列表信息，Json格式。").optional(),
  "operator_id": z.string().describe("商户的操作员编号").optional(),
  "org_pid": z.string().describe("银行间联模式下有用，其它场景请不要使用；\r\t双联通过该参数指定需要退款的交易所属收单机构的pid;").optional(),
  "out_request_no": z.string().describe("退款请求号。\t标识一次退款请求，需要保证在交易号下唯一，如需部分退款，则此参数必传。\t注：针对同一次退款请求，如果调用接口失败或异常了，重试时需要保证退款请求号不能变更，防止该笔交易重复退款。支付宝会保证同样的退款请求号多次请求只会退一次。").optional(),
  "out_trade_no": z.string().describe("商户订单号。\t订单支付时传入的商户订单号，商家自定义且保证商家系统中唯一。与支付宝交易号 trade_no 不能同时为空。").optional(),
  "query_options": z.array(z.string()).describe("查询选项。\t商户通过上送该参数来定制同步需要额外返回的信息字段，数组格式。").optional(),
  "refund_advance_account": z.string().describe("指定垫资退款账号主体，可能是用户id或登录名").optional(),
  "refund_advance_account_type": z.string().describe("指定垫资退款账号的类型，取值范围：default，userId，loginName").optional(),
  "refund_amount": z.string().describe("退款金额。\t需要退款的金额，该金额不能大于订单金额，单位为元，支持两位小数。\t注：如果正向交易使用了营销，该退款金额包含营销金额，支付宝会按业务规则分配营销和买家自有资金分别退多少，默认优先退买家的自有资金。如交易总金额100元，用户支付时使用了80元自有资金和20元无资金流的营销券，商家实际收款80元。如果首次请求退款60元，则60元全部从商家收款资金扣除退回给用户自有资产；如果再请求退款40元，则从商家收款资金扣除20元退回用户资产以及把20元的营销券退回给用户（券是否可再使用取决于券的规则配置）。").optional(),
  "refund_currency": z.string().describe("订单退款币种信息。支持英镑：GBP、港币：HKD、美元：USD、新加坡元：SGD、日元：JPY、加拿大元：CAD、澳元：AUD、欧元：EUR、新西兰元：NZD、韩元：KRW、泰铢：THB、瑞士法郎：CHF、瑞典克朗：SEK、丹麦克朗：DKK、挪威克朗：NOK、马来西亚林吉特：MYR、印尼卢比：IDR、菲律宾比索：PHP、毛里求斯卢比：MUR、以色列新谢克尔：ILS、斯里兰卡卢比：LKR、俄罗斯卢布：RUB、阿联酋迪拉姆：AED、捷克克朗：CZK、南非兰特：ZAR、人民币：CNY").optional(),
  "refund_goods_detail": z.array(z.object({ "goods_id": z.string().describe("商品编号。\t对应支付时传入的goods_id").optional(), "out_certificate_no_list": z.array(z.string()).describe("外部商品凭证编号列表").optional(), "out_item_id": z.string().describe("商家侧小程序商品ID，对应支付时传入的out_item_id").optional(), "out_sku_id": z.string().describe("商家侧小程序商品sku ID，对应支付时传入的out_sku_id").optional(), "refund_amount": z.string().describe("该商品的退款总金额，单位为元").optional() })).describe("退款包含的商品列表信息").optional(),
  "refund_reason": z.string().describe("退款原因说明。\t商家自定义，将在会在商户和用户的pc退款账单详情中展示").optional(),
  "refund_royalty_parameters": z.array(z.object({ "amount": z.string().describe("分账的金额，单位为元").optional(), "amount_percentage": z.number().int().describe("分账信息中分账百分比。取值范围为大于0，少于或等于100的整数。").optional(), "desc": z.string().describe("分账描述").optional(), "royalty_scene": z.string().describe("可选值：达人佣金、平台服务费、技术服务费、其他").optional(), "royalty_type": z.string().describe("分账类型.").optional(), "trans_in": z.string().describe("收入方账户。如果收入方账户类型为userId，本参数为收入方的支付宝账号对应的支付宝唯一用户号，以2088开头的纯16位数字；如果收入方类型为cardAliasNo，本参数为收入方在支付宝绑定的卡编号；如果收入方类型为loginName，本参数为收入方的支付宝登录号；").optional(), "trans_in_name": z.string().describe("分账收款方姓名，上送则进行姓名与支付宝账号的一致性校验，校验不一致则分账失败。不上送则不进行姓名校验").optional(), "trans_in_type": z.string().describe("收入方账户类型。").optional(), "trans_out": z.string().describe("支出方账户。如果支出方账户类型为userId，本参数为支出方的支付宝账号对应的支付宝唯一用户号，以2088开头的纯16位数字；如果支出方类型为loginName，本参数为支出方的支付宝登录号。 泛金融类商户分账时，该字段不要上送。").optional(), "trans_out_type": z.string().describe("支出方账户类型。").optional() })).describe("退分账明细信息。\t 注： 1.当面付且非直付通模式无需传入退分账明细，系统自动按退款金额与订单金额的比率，从收款方和分账收入方退款，不支持指定退款金额与退款方。 \t2.直付通模式，电脑网站支付，手机 APP 支付，手机网站支付产品，须在退款请求中明确是否退分账，从哪个分账收入方退，退多少分账金额；如不明确，默认从收款方退款，收款方余额不足退款失败。不支持系统按比率退款。").optional(),
  "refund_trans_out": z.string().describe("指定退款账号，对应指定账号退款合约中的约定账号\t\t与refund_trans_out_type绑定使用\t1、refund_trans_out_type=userId时，传入对应的支付宝2088账号\t2、refund_trans_out_type=loginName时，传入对应的支付宝账号登录名").optional(),
  "refund_trans_out_type": z.string().describe("指定退款账号类型\tuserId：支付宝账号id\tloginName：支付宝账号登录名").optional(),
  "related_settle_confirm_no": z.string().describe("针对账期交易，在确认结算后退款的话，需要指定确认结算时的结算单号。").optional(),
  "store_id": z.string().describe("商户门店编号，由商家自定义。需保证当前商户下唯一。").optional(),
  "terminal_id": z.string().describe("商户的终端编号").optional(),
  "trade_no": z.string().describe("支付宝交易号。\t和商户订单号 out_trade_no 不能同时为空，两者同时存在时，优先取值trade_no").optional()
}
```

### alipay_trade_refund_apply

**Environment variables**



**Input schema**

```ts
{
  "extend_params": z.string().describe("商户传入业务信息，具体值要和支付宝约定，格式为json格式。\r\t医保退款场景下，DESIGNATED_REFUND_ASSET为INNER_ASSET表示只退自费部分，DESIGNATED_REFUND_ASSET为OUTSIDE_ASSET表示只退医保部分，医保部分不支持部分退。退医保资金必需传cancel_bill_no和cancel_serial_no。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operator_id": z.string().describe("商户的操作员编号").optional(),
  "out_request_no": z.string().describe("标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传。").optional(),
  "out_trade_no": z.string().describe("订单支付时传入的商户订单号,不能和 trade_no同时为空").optional(),
  "refund_amount": z.string().describe("需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数").optional(),
  "refund_fund_details": z.array(z.object({ "funds": z.array(z.string()).describe("退款资金明细\r\t详：\r\t若type为paySerialNo则funds为\r\t[{\"paySerialNo\":\"支付流水1\",\"refundFee\":\"退款金额1\"},{\"paySerialNo\":\"支付流水2\",\"refundFee\":\"退款金额2\"}]").optional(), "trans_in": z.string().describe("收入方账户\r\t为空则原路退回").optional(), "trans_in_type": z.string().describe("收入方账户类型").optional(), "type": z.string().describe("描述资金明细类型\r\t详：若type为paySerialNo\r\t则funds参数中体现的都为对应支付流水的退款明细").optional() })).describe("退款资金明细\r\t注：目前只有SETTLE_OFFLINE_GROUP产品的退款支持该字段").optional(),
  "refund_reason": z.string().describe("退款的原因说明").optional(),
  "store_id": z.string().describe("商户的门店编号").optional(),
  "terminal_id": z.string().describe("商户的终端编号").optional(),
  "trade_no": z.string().describe("支付宝交易号，和商户订单号不能同时为空").optional()
}
```

### alipay_trade_royalty_rate_query

**Environment variables**



**Input schema**

```ts
{
  "out_request_no": z.string().describe("外部请求号，由商家自定义。32个字符以内，仅可包含字母、数字、下划线。需保证在商户端不重复。").optional()
}
```

### alipay_trade_royalty_relation_batchquery

**Environment variables**



**Input schema**

```ts
{
  "out_request_no": z.string().describe("外部请求号，由商家自定义。32个字符以内，仅可包含字母、数字、下划线。需保证在商户端不重复。").optional(),
  "page_num": z.number().int().describe("几页，起始页为 1。不填默认为 1。").optional(),
  "page_size": z.number().int().describe("页面大小。每页记录数，取值范围是(0,100]。不填默认为20").optional()
}
```

### alipay_trade_royalty_relation_bind

**Environment variables**



**Input schema**

```ts
{
  "out_request_no": z.string().describe("外部请求号，由商家自定义。32个字符以内，仅可包含字母、数字、下划线。需保证在商户端不重复。").optional(),
  "receiver_list": z.array(z.object({ "account": z.string().describe("分账接收方账号。 当分账方类型是userId时，本参数为用户的支付宝账号对应的支付宝唯一用户号，以2088开头的纯16位数字； 当分账方类型是loginName时，本参数为用户的支付宝登录号；当分账方类型是openId时，本参数传递支付宝openId信息。").optional(), "account_open_id": z.string().describe("分账接收方openId，本参数为分账接收方在该应用（AppId）下的唯一用户标识，仅用于分账关系查询接口出参。").optional(), "bind_login_name": z.string().describe("作为查询返回结果：分账收款方绑定时的支付宝登录号。分账关系绑定（alipay.trade.royalty.relation.bind）时，通过type为loginName绑定传入的支付宝登录号，若使用userId绑定则不返回。").optional(), "login_name": z.string().describe("作为查询返回结果：当前userId对应的支付宝登录号。当login_name与bind_login_name不相等时，表明该支付宝账户发生了登录号变更。").optional(), "memo": z.string().describe("分账关系描述").optional(), "name": z.string().describe("分账接收方真实姓名。\t绑定分账关系时：\t当分账方类型是userId时，本参数可以不传，若上传则进行校验不上传不会校验。\t当分账方类型是loginName时，本参数必传。\t解绑分账关系时：作为请求参数可不填，分账关系查询时不作为返回结果返回").optional(), "type": z.string().describe("分账接收方类型。").optional() })).describe("分账接收方列表，单次传入最多20个").optional()
}
```

### alipay_trade_royalty_relation_unbind

**Environment variables**



**Input schema**

```ts
{
  "out_request_no": z.string().describe("外部请求号，由商家自定义。32个字符以内，仅可包含字母、数字、下划线。需保证在商户端不重复。").optional(),
  "receiver_list": z.array(z.object({ "account": z.string().describe("分账接收方账号。 当分账方类型是userId时，本参数为用户的支付宝账号对应的支付宝唯一用户号，以2088开头的纯16位数字； 当分账方类型是loginName时，本参数为用户的支付宝登录号；当分账方类型是openId时，本参数传递支付宝openId信息。").optional(), "account_open_id": z.string().describe("分账接收方openId，本参数为分账接收方在该应用（AppId）下的唯一用户标识，仅用于分账关系查询接口出参。").optional(), "bind_login_name": z.string().describe("作为查询返回结果：分账收款方绑定时的支付宝登录号。分账关系绑定（alipay.trade.royalty.relation.bind）时，通过type为loginName绑定传入的支付宝登录号，若使用userId绑定则不返回。").optional(), "login_name": z.string().describe("作为查询返回结果：当前userId对应的支付宝登录号。当login_name与bind_login_name不相等时，表明该支付宝账户发生了登录号变更。").optional(), "memo": z.string().describe("分账关系描述").optional(), "name": z.string().describe("分账接收方真实姓名。\t绑定分账关系时：\t当分账方类型是userId时，本参数可以不传，若上传则进行校验不上传不会校验。\t当分账方类型是loginName时，本参数必传。\t解绑分账关系时：作为请求参数可不填，分账关系查询时不作为返回结果返回").optional(), "type": z.string().describe("分账接收方类型。").optional() })).describe("分账接收方列表，单次传入最多 20 个信息。").optional()
}
```

### alipay_trade_settle_confirm

**Environment variables**



**Input schema**

```ts
{
  "extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "out_request_no": z.string().describe("确认结算请求流水号，开发者自行生成并保证唯一性，作为业务幂等性控制").optional(),
  "settle_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}
```

### alipay_trade_settle_receivables_query

**Environment variables**



**Input schema**

```ts
{
  "biz_product": z.string().describe("收单产品码，商家和支付宝签约的产品码").optional(),
  "extend_params": z.string().describe("扩展参数").optional(),
  "merchant_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "out_request_no": z.string().describe("外部请求号，32个字符以内，可包含字母、数字、下划线。").optional(),
  "query_his_date": z.string().describe("当trade_no不为空时，该字段不生效。\t查询历史日期，格式为 yyyyMMdd ，取值范围为昨日起至往前30日内；\t不传入时，查询实时待结算余额返回；\t传入过去某一天日期，查询对应日期的日终待结算余额返回（注意：日常场景下，昨日日终待结算余额只可在当天 02:00 后查询，在当天 02:00 前查询返回查询错误；大促场景下昨日日终可查时间会适当延后）；\t传入过去某一天非近30天内，返回参数错误。").optional(),
  "trade_no": z.string().describe("支付宝交易号，当该笔交易为直付通账期模式，查询该笔交易待确认结算金额时必传").optional()
}
```

### alipay_user_agreement_executionplan_modify

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("周期性扣款产品，授权免密支付协议号").optional(),
  "deduct_time": z.string().describe("商户下一次扣款时间").optional(),
  "memo": z.string().describe("具体修改原因").optional()
}
```

### alipay_user_agreement_migrate

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ）").optional(),
  "target_app_id": z.string().describe("需要迁移的目标商户应用id").optional(),
  "target_invoke_app_id": z.string().describe("需要迁移的目标商户调用应用id").optional(),
  "target_partner_id": z.string().describe("需要迁移的目标商户id").optional()
}
```

### alipay_user_agreement_permission_create

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ）").optional(),
  "business_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "notice_template": z.string().describe("目前共两种类型SERVIOCE_NOTICE和DEFAULT_PERMISSION，如果是服务变更提醒，需传入SERVIOCE_NOTICE").optional(),
  "out_request_no": z.string().describe("商户请求号。 由商家自定义，64个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "total_amount": z.string().describe("订单总金额。 单位为元，精确到小数点后两位，取值范围：[0.01,100000000] 。").optional()
}
```

### alipay_user_agreement_query

**Environment variables**



**Input schema**

```ts
{
  "personal_product_code": z.string().describe("协议产品码，商户和支付宝签约时确定，商户可咨询技术支持。").optional(),
  "alipay_user_id": z.string().describe("用户的支付宝账号对应 的支付宝唯一用户号，以 2088 开头的 16 位纯数字 组成。\t本参数与alipay_logon_id若都填写，则以本参数为准，优先级高于 alipay_logon_id。").optional(),
  "alipay_open_id": z.string().describe("用户的支付宝账号对应 的支付宝唯一用户号，\t本参数与alipay_logon_id若都填写，则以本参数为准，优先级高于 alipay_logon_id。").optional(),
  "alipay_logon_id": z.string().describe("用户的支付宝登录账号，支持邮箱或手机号码格式。本参数与alipay_open_id 或 alipay_user_id 同时填写，优先按照 alipay_open_id 或 alipay_user_id 处理。").optional(),
  "sign_scene": z.string().describe("签约场景码，该值需要与系统/页面签约接口调用时传入的值保持一 致。如：周期扣款场景与调用 alipay.user.agreement.page.sign(支付宝个人协议页面签约接口) 签约时的 sign_scene 相同。 \t注意：当传入商户签约号 external_agreement_no 时，该值不能为空或默认值 DEFAULT|DEFAULT。\t").optional(),
  "external_agreement_no": z.string().describe("代扣协议中标示用户的唯一签约号(确保在商户系统中\t唯一)。\t格式规则:支持大写小写字母和数字，最长 32 位。").optional(),
  "third_party_type": z.string().describe("签约第三方主体类型。对于三方协议，表示当前用户和哪一类的第三方主体进行签约。\t默认为PARTNER。").optional(),
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ） ，如果传了该参数，其他参数会被忽略").optional()
}
```

### alipay_user_agreement_transfer

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ），如果传了该参数，其他参数会被忽略").optional(),
  "period_rule_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "target_product_code": z.string().describe("协议产品码，商户和支付宝签约时确定，不同业务场景对应不同的签约产品码。这里指的是需要修改目标产品码的值").optional()
}
```

### alipay_user_agreement_unsign

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ），如果传了该参数，其他参数会被忽略\t。\t本参数与 external_agreement_no 不可同时为空。").optional(),
  "alipay_logon_id": z.string().describe("用户的支付宝登录账号，支持邮箱或手机号码格式。本参数与alipay_user_id 不可同时为空，若都填写，则以alipay_user_id 为准。").optional(),
  "alipay_open_id": z.string().describe("用户的支付宝账号对应的支付宝唯一用户号，\t本参数与alipay_logon_id 不可同时为空，若都填写，则以本参数为准，优先级高于alipay_logon_id。").optional(),
  "alipay_user_id": z.string().describe("用户的支付宝账号对应的支付宝唯一用户号，以2088 开头的 16 位纯数字 组成;\r\t本参数与alipay_logon_id 不可同时为空，若都填写，则以本参数为准，优先级高于alipay_logon_id。").optional(),
  "extend_params": z.string().describe("扩展参数").optional(),
  "external_agreement_no": z.string().describe("代扣协议中标示用户的唯一签约号(确保在商户系统中\t唯一)。\t格式规则:支持大写小写字母和数字，最长 32 位。\t注意：若调用 alipay.user.agreement.page.sign(支付宝个人协议页面签约接口) 签约时传入 external_agreement_no 则该值必填且需与签约接口传入值相同。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operate_type": z.string().describe("注意：仅异步解约需传入，其余情况无需传递本参数。").optional(),
  "personal_product_code": z.string().describe("协议产品码，商户和支付宝签约时确定，不同业务场景对应不同的签约产品码。").optional(),
  "sign_scene": z.string().describe("签约协议场景，该值需要与系统/页面签约接口调用时传入的值保持一 致。如：周期扣款场景，需与调用 alipay.user.agreement.page.sign(支付宝个人协议页面签约接口) 签约时的 sign_scene 相同。\t当传入商户签约号 external_agreement_no时，场景不能为空或默认值 DEFAULT|DEFAULT。\t").optional(),
  "third_party_type": z.string().describe("签约第三方主体类型。对于三方协议，表示当前用户和哪一类的第三方主体进行签约。").optional()
}
```

### alipay_user_agreement_userverify_apply

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("协议号").optional()
}
```

### alipay_user_agreement_userverify_query

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("协议号").optional(),
  "apply_token": z.string().describe("申请时获取的token").optional()
}
```

### alipay_user_alipaypoint_budgetlib_query

**Environment variables**



**Input schema**

```ts
{
  "budget_code": z.string().describe("集分宝预算库编码").optional()
}
```

### alipay_user_alipaypoint_send

**Environment variables**



**Input schema**

```ts
{
  "budget_code": z.string().describe("签约商户的集分宝的预算库，扣除此预算库的集分宝发放给用户。会校验budgetcode和业务方appId的签约商户pid的关联关系，若无关则发放失败。").optional(),
  "memo": z.string().describe("商户关于该笔发放的描述或者信息补充，仅存储，无实际校验功能，该信息会在\"集分宝\"小程序的\"集分宝明细\"中展示给用户。").optional(),
  "open_id": z.string().describe("被发放集分宝用户ID，商户app_id维度下的用户标识，与user_account字段二选一。 建议优先使该字段指定发放用户，接口性能更佳").optional(),
  "partner_biz_no": z.string().describe("接入方自己交易的唯一流水ID号，不同交易请保证幂等号唯一性，集分宝服务将依据该字段来进行幂等控制，重试请求不要更换幂等号，需要慎重传递，否则可能会造成损失。").optional(),
  "point_amount": z.number().int().describe("发放给用户的集分宝个数。个数区间为 [1,10000000]，需为整数。").optional(),
  "user_account": z.string().describe("被发放集分宝用户的支付宝登录号，邮箱地址或者手机号均可，与user_id字段二选一，在有user_id时，优先使用user_id字段。").optional(),
  "user_id": z.string().describe("被发放集分宝用户的蚂蚁统一会员ID，与user_account字段二选一。\t建议优先使用user_id，接口性能更佳，user_id和user_account都传递时，系统优先使用本字段。").optional()
}
```

### alipay_user_certdoc_certverify_consult

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "verify_id": z.string().describe("信息校验验证ID。通过<a href=\"https://opendocs.alipay.com/apis/api_2/alipay.user.certdoc.certverify.preconsult\">alipay.user.certdoc.certverify.preconsult</a>(实名证件信息比对验证预咨询)接口获取。").optional()
}
```

### alipay_user_certdoc_certverify_preconsult

**Environment variables**



**Input schema**

```ts
{
  "cert_no": z.string().describe("证件号").optional(),
  "cert_type": z.string().describe("证件类型。暂仅支持 IDENTITY_CARD （身份证）。").optional(),
  "ext_info": z.string().describe("拓展字段,JSON格式").optional(),
  "logon_id": z.string().describe("支付宝登录名").optional(),
  "mobile": z.string().describe("手机号码").optional(),
  "user_name": z.string().describe("真实姓名").optional()
}
```

### alipay_user_certify_open_initialize

**Environment variables**



**Input schema**

```ts
{
  "biz_code": z.string().describe("认证场景码。入参支持的认证场景码和商户签约的认证场景相关，取值如下:\tFACE：多因子人脸认证\tCERT_PHOTO：多因子证照认证\tCERT_PHOTO_FACE ：多因子证照和人脸认证\tSMART_FACE：多因子快捷认证").optional(),
  "face_contrast_picture": z.string().describe("自定义人脸比对图片的base64编码格式的string字符串").optional(),
  "identity_param": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "outer_order_no": z.string().describe("商户请求的唯一标识，商户要保证其唯一性，值为32位长度的字母数字组合。建议：前面几位字符是商户自定义的简称，中间可以使用一段时间，后段可以使用一个随机或递增序列").optional()
}
```

### alipay_user_certify_open_query

**Environment variables**



**Input schema**

```ts
{
  "certify_id": z.string().describe("本次申请操作的唯一标识，通过alipay.user.certify.open.initialize(身份认证初始化服务)接口同步响应获取。").optional()
}
```

### alipay_user_info_share

**Environment variables**



**Input schema**

```ts
{
  "auth_token": z.string().describe("用户授权令牌").optional()
}
```

### alipay_user_twostage_common_use

**Environment variables**



**Input schema**

```ts
{
  "dynamic_id": z.string().describe("商户扫描用户的付款码值。").optional(),
  "pay_check_strategy": z.string().describe("传1表示 校验pid(pay_pid)和来支付的时候的pid一致性；\t传2表示校验pid(pay_pid)和来支付的时候的pid一致性、校验scene_no和来支付时DYNAMIC_TOKEN_OUT_BIZ_NO属性一致；                       \t不传值和value=2的表现一致").optional(),
  "pay_pid": z.string().describe("商家进行二阶段支付的PID信息。").optional(),
  "sence_no": z.string().describe("外部业务号，用于标识这笔解码请求，对同一个码的重复解码请求，sence_no必须与上一次保持一致，每次请求的sence_no必须不一样，如alipay.user.twostage.common.use接口配合alipay.trade.pay（统一收单交易支付接口）一并使用时，alipay.trade.pay接口的extend_params属性中必须设置DYNAMIC_TOKEN_OUT_BIZ_NO，且值必须与sence_no保持一致。").optional()
}
```

### alipay_user_twostage_indirect_use

**Environment variables**



**Input schema**

```ts
{
  "dynamic_id": z.string().describe("商户扫描用户的付款码值。18~24位，25~30开头，例如28开头的18位的数字；或人脸支付的ftoken等。").optional(),
  "org_pid": z.string().describe("进件信息中，SMID对应的银行机构的PID信息，一般为2088开头的16位数字。").optional(),
  "pay_smid": z.string().describe("进件信息中，二级商户ID（ sub_merchant_id)信息，一般为2088开头的16位数字。").optional(),
  "sence_no": z.string().describe("外部业务号，用于标识这笔解码请求，对同一个码的重复解码请求，sence_no必须与上一次保持一致，每次请求的sence_no必须不一样，如alipay.user.twostage.common.use接口配合alipay.trade.pay（统一收单交易支付接口）一并使用时，alipay.trade.pay接口的extend_params属性中必须设置DYNAMIC_TOKEN_OUT_BIZ_NO，且值必须与sence_no保持一致").optional(),
  "source_pid": z.string().describe("进件信息中，SMID对应渠道的PID信息，一般为2088开头的16位数字。").optional()
}
```

### alipay_user_userinfo_share

**Environment variables**



**Input schema**

```ts
{}
```

### ant_merchant_expand_apprecommend_account_create

**Environment variables**



**Input schema**

```ts
{
  "acc_no": z.string().describe("待绑定账号PID").optional(),
  "app_no": z.string().describe("待绑定小程序的app_id").optional()
}
```

### ant_merchant_expand_apprecommend_account_delete

**Environment variables**



**Input schema**

```ts
{
  "app_no": z.string().describe("待解绑小程序的app_id").optional(),
  "acc_no": z.string().describe("待解绑账号PID").optional()
}
```

### ant_merchant_expand_apprecommend_account_query

**Environment variables**



**Input schema**

```ts
{
  "app_no": z.string().describe("已关联小程序的app_id").optional(),
  "page_size": z.number().int().describe("单页行数，不能超过100行，单位：行").optional(),
  "page_number": z.number().int().describe("页码").optional()
}
```

### ant_merchant_expand_apprecommend_available_query

**Environment variables**



**Input schema**

```ts
{
  "page_size": z.number().int().describe("单页行数，不能超过100行").optional(),
  "page_number": z.number().int().describe("页码").optional()
}
```

### ant_merchant_expand_info_query

**Environment variables**



**Input schema**

```ts
{
  "merchant_no": z.string().describe("商户号，目前是商户pid").optional()
}
```

### ant_merchant_expand_item_create

**Environment variables**



**Input schema**

```ts
{
  "detail_url": z.string().describe("详情地址").optional(),
  "ext_info": z.string().describe("商品扩展信息：可以解析成 Map<String, String> 的 json string").optional(),
  "external_item_id": z.string().describe("外部商品ID").optional(),
  "front_category_id": z.string().describe("前台类目id：target_type + target_id 和 front_category_id 二选一").optional(),
  "label_list": z.array(z.object({ "label_key": z.string().describe("标签键\r\tOIL_NUM：油号").optional(), "label_value": z.string().describe("标签值：\r\tOIL_NUM对应的值为：95# 92# 98# 等等").optional() })).describe("商品标签列表").optional(),
  "main_pic": z.string().describe("主图地址").optional(),
  "name": z.string().describe("商品名称").optional(),
  "scene": z.string().describe("场景：GAS_CHARGE（加油）").optional(),
  "sku_list": z.array(z.object({ "cost_price": z.number().int().describe("成本价，单位分").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("扩展信息的key").optional(), "ext_value": z.string().describe("扩展信息的值").optional() })).describe("SKU扩展信息").optional(), "external_sku_id": z.string().describe("外部SKU ID").optional(), "inventory": z.number().int().describe("库存").optional(), "original_price": z.number().int().describe("标价，单位分").optional(), "price": z.number().int().describe("售价，单位分").optional() })).describe("商品sku列表，至少有一个").optional(),
  "target_id": z.string().describe("商户归属主体id").optional(),
  "target_type": z.string().describe("商品归属主体类型：target_type + target_id 和 front_category_id 二选一\r\t\r\t商品归属主体类型:\r\t5: 店铺\r\t4: 主站MID\r\t3: 参与者\r\t2: 角色\r\t1: 联系人").optional()
}
```

### ant_merchant_expand_item_delete

**Environment variables**



**Input schema**

```ts
{
  "item_id": z.string().describe("商品ID（item_id不为空则以item_id作为删除KEY,item_id为空则以external_item_id作为删除KEY,两者不能同时为空）").optional(),
  "external_item_id": z.string().describe("外部商品ID（item_id不为空则以item_id作为删除KEY,item_id为空则以external_item_id作为删除KEY,两者不能同时为空）").optional()
}
```

### ant_merchant_expand_item_modify

**Environment variables**



**Input schema**

```ts
{
  "detail_url": z.string().describe("商品详情地址").optional(),
  "ext_info": z.string().describe("商品扩展信息：可以解析成 Map<String, String> 的 json string").optional(),
  "external_item_id": z.string().describe("外部商品ID（item_id不为空时作为普通更新项，item_id为空时作为更新KEY）").optional(),
  "front_category_id": z.string().describe("前台类目id, null表示未分类").optional(),
  "item_id": z.string().describe("商品id(和external_item_id不能同时为空)").optional(),
  "label_list": z.array(z.object({ "label_key": z.string().describe("标签键\r\tOIL_NUM：油号").optional(), "label_value": z.string().describe("标签值：\r\tOIL_NUM对应的值为：95# 92# 98# 等等").optional() })).describe("商品标签列表，null表示不修改标签列表，空list表示清空标签").optional(),
  "main_pic": z.string().describe("商品主图").optional(),
  "name": z.string().describe("商品名称").optional(),
  "op_timestamp": z.number().int().describe("更新时间戳（只处理时间戳最大的一次请求）").optional(),
  "scene": z.string().describe("场景：GAS_CHARGE（加油）").optional(),
  "sku_list": z.array(z.object({ "cost_price": z.number().int().describe("成本价，单位分").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("扩展信息的key").optional(), "ext_value": z.string().describe("扩展信息的值").optional() })).describe("SKU扩展信息").optional(), "external_sku_id": z.string().describe("外部skuId（sku_id不为空时作为普通更新项,sku_id为空时作为更新key,sku_id和该字段同时为空则新增该条数据）").optional(), "inventory": z.number().int().describe("库存").optional(), "original_price": z.number().int().describe("标价，单位分").optional(), "price": z.number().int().describe("售价，单位分").optional(), "sku_id": z.string().describe("skuId").optional(), "status": z.string().describe("商品SKU状态：EFFECT、INVALID").optional() })).describe("SKU列表（会和商品已存在SKU做差异化比较后做增删改操作）").optional(),
  "status": z.string().describe("商品状态：\r\tEFFECT（有效）、 INVALID（无效）").optional()
}
```

### ant_merchant_expand_item_open_batchquery

**Environment variables**



**Input schema**

```ts
{
  "item_id_list": z.array(z.string()).describe("商品ID列表").optional()
}
```

### ant_merchant_expand_item_open_create

**Environment variables**



**Input schema**

```ts
{
  "description": z.string().describe("商品描述").optional(),
  "ext_info": z.array(z.object({ "ext_key": z.string().describe("扩展信息的key").optional(), "ext_value": z.string().describe("扩展信息的值").optional() })).describe("商品扩展信息（具体KEY请参见产品文档）。 小程序订单中心场景接入参见 <a href=\"https://opendocs.alipay.com/mini/024hj4\">接入指南</a>。").optional(),
  "material_list": z.array(z.object({ "content": z.string().describe("素材内容（素材地址或素材KEY）").optional(), "type": z.string().describe("素材类型").optional() })).describe("素材列表（最多3个），素材内容为素材key（素材key为<a href=\"https://opendocs.alipay.com/apis/api_4/alipay.merchant.item.file.upload\">alipay.merchant.item.file.upload</a> 接口返回的 material_key）").optional(),
  "name": z.string().describe("商品名称").optional(),
  "property_list": z.array(z.object({ "property_key": z.string().describe("属性名称").optional(), "property_value_list": z.array(z.string()).describe("属性值列表").optional() })).describe("商品属性列表").optional(),
  "scene": z.string().describe("业务场景码。").optional(),
  "sku_list": z.array(z.object({ "inventory": z.number().int().describe("库存").optional(), "material_list": z.array(z.object({ "content": z.string().describe("素材内容（素材地址或素材KEY）").optional(), "type": z.string().describe("素材类型").optional() })).describe("SKU素材列表（最多3个）").optional(), "original_price": z.number().int().describe("标价，单位分").optional(), "price": z.number().int().describe("售价，单位分").optional(), "property_list": z.array(z.object({ "property_key": z.string().describe("属性").optional(), "property_value": z.string().describe("属性值").optional() })).describe("SKU属性列表").optional() })).describe("商品SKU列表（至少1个，最多20个）").optional(),
  "standard_category_id": z.string().describe("商品所属标准类目ID，标品及非标品都需传入。 请填入 <a href=\"https://opendocs.alipay.com/mini/011lxt\">小程序商品类目表</a> 中三级类目ID。").optional(),
  "target_id": z.string().describe("商品归属主体ID\t例：商品归属主体类型target_type为店铺，则商品归属主体ID为店铺ID（支付宝侧店铺ID）；归属主体类型target_type为小程序，则归属主体ID为小程序ID").optional(),
  "target_type": z.string().describe("商品归属主体类型。枚举如下：\t5：店铺。\t8：小程序。").optional(),
  "type": z.string().describe("商品类型。枚举支持：\tSTANDARD_GOODS：标品，一般是具有明确、标准规格、型号、参数的商品，如：手机、数码产品、大多数的家电 。\tNON_STANDARD_GOODS：非标品，则是在这些方面没有统一的行业标准和参数规格的商品，如：服装、鞋袜等。").optional()
}
```

### ant_merchant_expand_item_open_delete

**Environment variables**



**Input schema**

```ts
{
  "item_id": z.string().describe("商品ID").optional()
}
```

### ant_merchant_expand_item_open_modify

**Environment variables**



**Input schema**

```ts
{
  "description": z.string().describe("商品描述").optional(),
  "ext_info": z.array(z.object({ "ext_key": z.string().describe("扩展信息的key").optional(), "ext_value": z.string().describe("扩展信息的值").optional() })).describe("商品扩展信息（覆盖商品已存在扩展信息、具体KEY请参见产品文档）").optional(),
  "item_id": z.string().describe("商品ID").optional(),
  "material_list": z.array(z.object({ "content": z.string().describe("素材内容（素材地址或素材KEY）").optional(), "type": z.string().describe("素材类型").optional() })).describe("商品素材列表（会和商品已存在素材做差异化比较后做增删改操作）").optional(),
  "name": z.string().describe("商品名称").optional(),
  "property_list": z.array(z.object({ "property_key": z.string().describe("属性名称").optional(), "property_value_list": z.array(z.string()).describe("属性值列表").optional() })).describe("商品属性列表（覆盖商品已存在属性）").optional(),
  "sku_list": z.array(z.object({ "inventory": z.number().int().describe("库存").optional(), "material_list": z.array(z.object({ "content": z.string().describe("素材内容（素材地址或素材KEY）").optional(), "type": z.string().describe("素材类型").optional() })).describe("SKU素材列表（会和SKU已存在素材做差异化比较后做增删改操作）").optional(), "original_price": z.number().int().describe("标价，单位分").optional(), "price": z.number().int().describe("售价，单位分").optional(), "property_list": z.array(z.object({ "property_key": z.string().describe("属性").optional(), "property_value": z.string().describe("属性值").optional() })).describe("SKU属性列表（覆盖SKU已存在属性）").optional(), "sku_id": z.string().describe("SKU ID（传空表示新增对应SKU）").optional() })).describe("SKU列表（会和商品已存在SKU做差异化比较后做增删改操作）").optional(),
  "standard_category_id": z.string().describe("商品所属标准类目ID，当 type 为STANDARD_GOODS（标品）时必填。 请填入 https://opendocs.alipay.com/mini/011lxt 小程序商品类目表中三级类目ID。").optional(),
  "status": z.string().describe("商品状态").optional(),
  "type": z.string().describe("商品类型：STANDARD_GOODS（标品）、NON_STANDARD_GOODS（非标品）").optional()
}
```

### ant_merchant_expand_item_open_query

**Environment variables**



**Input schema**

```ts
{
  "target_id": z.string().describe("商品归属主体ID\t例：商品归属主体类型target_type为店铺，则商品归属主体ID为店铺ID（支付宝侧店铺ID）；归属主体类型target_type为小程序，则归属主体ID为小程序ID").optional(),
  "scene": z.string().describe("场景码（具体值请参见产品文档）。").optional(),
  "target_type": z.string().describe("商品归属主体类型。枚举如下：\t5：店铺。\t8：小程序。").optional(),
  "status": z.string().describe("商品状态").optional()
}
```

### ant_merchant_expand_item_query

**Environment variables**



**Input schema**

```ts
{
  "target_type": z.string().describe("商品归属主体类型:\r\t5: 店铺\r\t4: 主站MID\r\t3: 参与者\r\t2: 角色\r\t1: 联系人").optional(),
  "target_id": z.string().describe("商品归属主体id").optional(),
  "undefined_category": z.boolean().describe("未分类类目: true 的时候 front_category_id 必须不填（null）").optional(),
  "front_category_id": z.string().describe("商品前台类目id: null 表示所有分类").optional(),
  "status": z.string().describe("商品状态：EFFECT、INVALID、PAUSE；不填返回所有状态商品").optional()
}
```

### ant_merchant_expand_item_status_modify

**Environment variables**



**Input schema**

```ts
{
  "item_id": z.string().describe("商品ID").optional(),
  "status": z.string().describe("商品状态：EFFECT、INVALID").optional()
}
```

### ant_merchant_expand_shop_consult

**Environment variables**



**Input schema**

```ts
{
  "biz_cards": z.array(z.object({ "account_branch_name": z.string().describe("开户支行名").optional(), "account_holder_name": z.string().describe("卡户名").optional(), "account_inst_city": z.string().describe("开户行所在地-市").optional(), "account_inst_id": z.string().describe("开户行简称缩写").optional(), "account_inst_name": z.string().describe("银行名称").optional(), "account_inst_province": z.string().describe("开户行所在地-省").optional(), "account_no": z.string().describe("银行卡号").optional(), "account_type": z.string().describe("卡类型\r\t借记卡-DC\r\t信用卡-CC").optional(), "bank_code": z.string().describe("联行号").optional(), "usage_type": z.string().describe("账号使用类型\r\t对公-01\r\t对私-02").optional() })).describe("\"门店结算卡信息。本业务当前只允许传入一张结算卡。 说明：本参数仅直付通业务使用，其余业务无需关注。\"").optional(),
  "brand_id": z.string().describe("品牌id，非加油站等特殊门店无需关注。").optional(),
  "business_address": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "business_time": z.array(z.object({ "close_time": z.string().describe("关门时间 格式：HH:mm").optional(), "open_time": z.string().describe("开门时间 格式：HH:mm").optional(), "week_day": z.number().int().describe("本对象表示周几的营业时间。1~6表示周一到周六，7表示周日").optional() })).describe("店铺经营时间。").optional(),
  "cert_image": z.string().describe("营业执照图片KEY。通过<a href=\"https://opendocs.alipay.com/apis/api_1/ant.merchant.expand.indirect.image.upload\">ant.merchant.expand.indirect.image.upload</a> 接口上传图片后得到的 image_id").optional(),
  "cert_name": z.string().describe("营业执照名称，填写值为营业执照或统一社会信用代码证上的名称。").optional(),
  "cert_no": z.string().describe("证件号码，请填写店铺营业执照号。").optional(),
  "cert_type": z.string().describe("证件类型").optional(),
  "contact_infos": z.array(z.object({ "email": z.string().describe("电子邮箱").optional(), "id_card_no": z.string().describe("身份证号").optional(), "mobile": z.string().describe("手机号").optional(), "name": z.string().describe("联系人名字").optional(), "phone": z.string().describe("电话").optional(), "tag": z.array(z.string()).describe("商户联系人业务标识枚举，表示商户联系人的职责").optional(), "type": z.string().describe("联系人类型，取值范围：LEGAL_PERSON：法人；CONTROLLER：实际控制人；AGENT：代理人；OTHER：其他").optional() })).describe("联系人信息。如果填写，其中名称必填，手机、固话、email 三选一必填。").optional(),
  "contact_mobile": z.string().describe("店铺联系手机，与店铺联系固话二选一必填").optional(),
  "contact_phone": z.string().describe("店铺的联系固话，和店铺联系手机二选一必填").optional(),
  "ext_infos": z.array(z.object({ "key_name": z.string().describe("KV数据对的key，表示该kv对象表示什么含义。").optional(), "value": z.string().describe("kv对象的值").optional() })).describe("扩展信息列表。key值需要向对应行业的bd进行申请。").optional(),
  "ip_role_id": z.string().describe("商户角色id，表示将要开的店属于哪个商户角色。对于直连开店场景，填写商户pid；对于间连开店场景（线上、线下、直付通），填写商户smid。特别说明：IoT设备三绑定场景统一填写商户pid").optional(),
  "legal_cert_no": z.string().describe("法人身份证号").optional(),
  "legal_name": z.string().describe("法人名称。").optional(),
  "license_auth_letter_image": z.string().describe("营业执照授权函。需传入<a href=\"https://opendocs.alipay.com/apis/api_1/ant.merchant.expand.indirect.image.upload\">ant.merchant.expand.indirect.image.upload</a> 接口上传图片后得到的 image_id。\t蚂蚁门店管理场景可选。").optional(),
  "memo": z.string().describe("备注").optional(),
  "out_door_images": z.string().describe("门头照 id，需传入 <a href=\"https://opendocs.alipay.com/apis/api_1/ant.merchant.expand.indirect.image.upload\">ant.merchant.expand.indirect.image.upload</a> 接口上传图片后得到的 image_id").optional(),
  "qualifications": z.array(z.object({ "industry_qualification_image": z.string().describe("商户行业资质图片。其值为通过ant.merchant.expand.indirect.image.upload上传图片得到的image_id").optional(), "industry_qualification_type": z.string().describe("<a href=\"https://gw.alipayobjects.com/os/bmw-prod/7aa3a36b-2bc2-4d57-815f-08edd55ef67e.xlsx\">商户行业资质类型，具体选值参见文档</a>").optional() })).describe("行业特殊资质。").optional(),
  "scene": z.string().describe("场景，非加油站等特殊门店无需关注。").optional(),
  "settle_alipay_logon_id": z.string().describe("结算支付宝账号的登录号，需传入小程序归属账号。若需增加收款账号，可在创建门店后登录<a href=\"https://b.alipay.com/index2.htm\">商家中心</a> ，在 账户中心 > 经营信息 > 门店管理 中选择对应门店选择 更多 > 编辑 > 新增收款账号。").optional(),
  "shop_category": z.string().describe("新版门店类目标准二级类目code。类目标准及与原类目映射关系参见 <a href=\"https://ur.alipay.com/4cmn0n\">支付宝门店类目-最新</a> 表格。").optional(),
  "shop_name": z.string().describe("店铺名称。直连开店要保证全局店铺名称+地址唯一，间连开店要保证服务商pid下店铺名称+地址唯一").optional(),
  "shop_type": z.string().describe("店铺经营类型，01表示直营，02表示加盟").optional(),
  "store_id": z.string().describe("门店编号，表示该门店在该商户角色id(直连pid，间连smid)下，由商户自己定义的外部门店编号").optional()
}
```

### ant_merchant_expand_shop_receiptaccount_save

**Environment variables**



**Input schema**

```ts
{
  "promise": z.string().describe("是否承诺收单账号信息准确。具体承诺信息可查看 <a href=\"https://gw.alipayobjects.com/os/bmw-prod/922bafa8-a712-4f79-aa32-6f08d7359a5c.docx\">门店信息承诺函</a>。\tY 是\tN 否").optional(),
  "receipt_account_id": z.string().describe("收单账号").optional(),
  "shop_id": z.string().describe("店铺ID").optional()
}
```

### ant_merchant_expand_indirect_image_upload

**Environment variables**



**Input schema**

```ts
{}
```

### ant_merchant_expand_mcc_query

**Environment variables**



**Input schema**

```ts
{
  "mcc_code_list": z.string().describe("传入需要查询的code列表，以英文逗号分隔").optional()
}
```

### ant_merchant_expand_order_query

**Environment variables**



**Input schema**

```ts
{
  "order_id": z.string().describe("申请单 id。 1.蚂蚁门店管理场景：通过 <a href=\"https://opendocs.alipay.com/open/05afbc4a_ant.merchant.expand.shop.create?scene=common&pathHash=bf443b73\"> ant.merchant.expand.shop.create</a>(蚂蚁店铺创建)接口进件时返回的order_id。 2.直付通二级商户进件场景：通过<a href=\"https://opendocs.alipay.com/open/028xr0?pathHash=c9ca6d68\">ant.merchant.expand.indirect.zft.create</a>(直付通二级商户创建)接口进件时返回的order_id。 ")
}
```

### ant_merchant_expand_shop_query

**Environment variables**



**Input schema**

```ts
{
  "shop_id": z.string().describe("蚂蚁店铺id").optional(),
  "store_id": z.string().describe("门店编号，表示该门店在该商户角色id(直连pid，间连smid)下，由商户自己定义的外部门店编号").optional(),
  "ip_role_id": z.string().describe("商户角色id，表示将要开的店属于哪个商户角色。对于直连开店场景，填写商户pid；对于间连开店场景（线上、线下、直付通），填写商户smid").optional(),
  "address_version": z.string().describe("行政区划版本，当前可传空值(取默认版本)、2022Q2、UPTODATE(取最新版本)，其中空值默认为：2020Q1版本（ address_version=''或null），想要查看版本是2022年2季度版本则传入:(address_version='2022Q2')，想要获取最新版本则传入:(address_version ='UPTODATE')").optional(),
  "need_recommend": z.string().describe("门店不置信时，是否需要返回shop_recommend_info").optional(),
  "need_industry_info": z.string().describe("need_industry_info=0时不返回行业信息；need_industry_info=1时返回不需要审核的行业信息、审核通过的行业信息").optional(),
  "need_industry_license": z.string().describe("need_industry_license=0时不返回行业资质；need_industry_license=1时返回审核通过的行业资质").optional()
}
```

### ant_merchant_expand_shop_modify

**Environment variables**



**Input schema**

```ts
{
  "biz_cards": z.array(z.object({ "account_branch_name": z.string().describe("开户支行名").optional(), "account_holder_name": z.string().describe("卡户名").optional(), "account_inst_city": z.string().describe("开户行所在地-市").optional(), "account_inst_id": z.string().describe("开户行简称缩写").optional(), "account_inst_name": z.string().describe("银行名称").optional(), "account_inst_province": z.string().describe("开户行所在地-省").optional(), "account_no": z.string().describe("银行卡号").optional(), "account_type": z.string().describe("卡类型\r\t借记卡-DC\r\t信用卡-CC").optional(), "bank_code": z.string().describe("联行号").optional(), "usage_type": z.string().describe("账号使用类型\r\t对公-01\r\t对私-02").optional() })).describe("\"门店结算卡信息。本业务当前只允许传入一张结算卡。 说明：本参数仅直付通业务使用，其余业务无需关注。\"").optional(),
  "brand_id": z.string().describe("品牌id。若无需更新本信息项，可以不填写。可以从B/P站品牌工具箱获取品牌id").optional(),
  "business_address": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "business_time": z.array(z.object({ "close_time": z.string().describe("关门时间 格式：HH:mm").optional(), "open_time": z.string().describe("开门时间 格式：HH:mm").optional(), "week_day": z.number().int().describe("本对象表示周几的营业时间。1~6表示周一到周六，7表示周日").optional() })).describe("店铺经营时间。若无需更新本信息项，可以不填写").optional(),
  "cert_image": z.string().describe("营业执照图片KEY").optional(),
  "cert_name": z.string().describe("营业执照名称，填写值为营业执照或统一社会信用代码证上的名称。").optional(),
  "cert_no": z.string().describe("证件号码。请填写店铺营业执照号。").optional(),
  "cert_type": z.string().describe("证件类型").optional(),
  "contact_infos": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "contact_mobile": z.string().describe("店铺联系手机").optional(),
  "contact_phone": z.string().describe("店铺的联系固话").optional(),
  "cover": z.string().describe("封面图，其值为使用ant.merchant.expand.indirect.image.upload上传图片得到的一串oss key。若无需更新本信息项，可以不填写。若填写则会整体覆盖原有的封面图").optional(),
  "ext_infos": z.array(z.object({ "key_name": z.string().describe("KV数据对的key，表示该kv对象表示什么含义。").optional(), "value": z.string().describe("kv对象的值").optional() })).describe("扩展信息列表。key值需要向对应行业的bd进行申请。传入本项时，按key进行更新或补充").optional(),
  "industry_info": z.array(z.object({ "info_code": z.string().describe("行业信息CODE").optional(), "info_value": z.array(z.string()).describe("行业信息值，具体值根据info_code决定。\t当info_code=SHOP_MEDICAL_LOGO/SHOP_MEDICAL_IN_PIC这类文件信息时，\t需要传入ant.merchant.expand.indirect.image.upload接口上传的文件key；当info_code= SHOP_MEDICAL_LEVEL_TAG时，需要<a href=\"https://mdn.alipayobjects.com/mrcheshop/afts/file/ZuDmQKgBifgAAAAAAAAAAAAADiWmAQBr?af_filename=医院类型.xlsx\">医院类型</a>中CODE；其他场景传入自定义文本即可。").optional() })).describe("行业信息，例如所属集团、特殊标签").optional(),
  "industry_license": z.array(z.object({ "license_pic": z.string().describe("资质图片信息").optional(), "license_type": z.string().describe("行业资质类型，需使用<a href=\"https://mdn.alipayobjects.com/mrcheshop/afts/file/DfOPQYKgg_sAAAAAAAAAAAAAeiWmAQBr\">资质列表</a>中类型").optional() })).describe("门店资质信息").optional(),
  "ip_role_id": z.string().describe("商户角色id，表示将要修改的店属于哪个商户角色，和store_id一起定位待修改的门店。对于直连场景，填写商户pid；对于间连场景（线上、线下、直付通），填写商户smid。本信息项不可修改").optional(),
  "legal_cert_no": z.string().describe("法人身份证号。如果要更新，必须和legal_name成对传入").optional(),
  "legal_name": z.string().describe("法人名称。如果要更新，必须和legal_cert_no成对传入").optional(),
  "license_auth_letter_image": z.string().describe("营业执照授权函。其值为使用ant.merchant.expand.indirect.image.upload上传图片得到的一串oss key。若无需更新本信息项，可以不填写").optional(),
  "memo": z.string().describe("备注").optional(),
  "out_door_images": z.array(z.string()).describe("门头照，其值为使用ant.merchant.expand.indirect.image.upload上传图片得到的一串oss key。若无需更新本信息项，可以不填写。若填写则会整体覆盖原有的门头照列表").optional(),
  "qualifications": z.array(z.object({ "industry_qualification_image": z.string().describe("商户行业资质图片。其值为通过ant.merchant.expand.indirect.image.upload上传图片得到的image_id").optional(), "industry_qualification_type": z.string().describe("<a href=\"https://gw.alipayobjects.com/os/bmw-prod/7aa3a36b-2bc2-4d57-815f-08edd55ef67e.xlsx\">商户行业资质类型，具体选值参见文档</a>").optional() })).describe("行业特殊资质。若无需更新本信息项，可以不填写。填写会按类型进行更新或补充").optional(),
  "scene": z.string().describe("场景。若无需更新本信息项，可以不填写").optional(),
  "settle_alipay_logon_id": z.string().describe("结算支付宝账号的登录号。若无需更新本信息项，可以不填写").optional(),
  "shop_category": z.string().describe("新版门店类目标准二级类目code。类目标准及与原类目映射关系参见 <a href=\"https://gw.alipayobjects.com/os/bmw-prod/4b3f82df-e53e-4b84-bc41-fe025101e726.xlsx\">支付宝门店类目-最新</a> 表格。").optional(),
  "shop_id": z.string().describe("蚂蚁店铺id，用于查出待修改的门店。填写本参数的话，store_id和ip_role_id可以不填。本信息项不可修改").optional(),
  "shop_main_type": z.string().describe("主要针对医疗行业门店主体类型进件使用，不同门店认证主体需要相应的主体资质证书。 \t企业营业执照: ENTERPRISE; \t事业单位法人证书: INST_RGST_CTF; \t民办非企业单位登记证书 PRIVATE_NON_ENTERPRISE").optional(),
  "shop_name": z.string().describe("店铺名称。直连开店要保证全局店铺名称+地址唯一，间连开店要保证服务商pid下店铺名称+地址唯一。若无需更新本信息项，可以不填写").optional(),
  "store_id": z.string().describe("门店编号，表示该门店在该商户角色id(直连pid，间连smid)下，由商户自己定义的外部门店编号。用于查出待修改的门店。").optional()
}
```

### ant_merchant_expand_shop_create

**Environment variables**



**Input schema**

```ts
{
  "biz_cards": z.array(z.object({ "account_branch_name": z.string().describe("开户支行名").optional(), "account_holder_name": z.string().describe("卡户名").optional(), "account_inst_city": z.string().describe("开户行所在地-市").optional(), "account_inst_id": z.string().describe("开户行简称缩写").optional(), "account_inst_name": z.string().describe("银行名称").optional(), "account_inst_province": z.string().describe("开户行所在地-省").optional(), "account_no": z.string().describe("银行卡号").optional(), "account_type": z.string().describe("卡类型\r\t借记卡-DC\r\t信用卡-CC").optional(), "bank_code": z.string().describe("联行号").optional(), "usage_type": z.string().describe("账号使用类型\r\t对公-01\r\t对私-02").optional() })).describe("门店结算卡信息。本业务当前只允许传入一张结算卡。 说明：本参数仅直付通业务使用，其余业务无需关注。").optional(),
  "brand_id": z.string().describe("品牌id，非加油站等特殊门店无需关注。通过BP站品牌工具箱可以获取品牌id").optional(),
  "business_address": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "business_time": z.array(z.object({ "close_time": z.string().describe("关门时间 格式：HH:mm").optional(), "open_time": z.string().describe("开门时间 格式：HH:mm").optional(), "week_day": z.number().int().describe("本对象表示周几的营业时间。1~6表示周一到周六，7表示周日").optional() })).describe("店铺经营时间。").optional(),
  "cert_image": z.string().describe("营业执照图片KEY").optional(),
  "cert_name": z.string().describe("营业执照名称，填写值为营业执照或统一社会信用代码证上的名称。").optional(),
  "cert_no": z.string().describe("证件号码，请填写店铺营业执照号。").optional(),
  "cert_type": z.string().describe("证件类型").optional(),
  "contact_infos": z.array(z.object({ "email": z.string().describe("电子邮箱").optional(), "id_card_no": z.string().describe("身份证号").optional(), "mobile": z.string().describe("手机号").optional(), "name": z.string().describe("联系人名字").optional(), "phone": z.string().describe("电话").optional(), "tag": z.array(z.string()).describe("商户联系人业务标识枚举，表示商户联系人的职责").optional(), "type": z.string().describe("联系人类型，取值范围：LEGAL_PERSON：法人；CONTROLLER：实际控制人；AGENT：代理人；OTHER：其他").optional() })).describe("联系人信息").optional(),
  "contact_mobile": z.string().describe("店铺联系手机号").optional(),
  "contact_phone": z.string().describe("店铺的联系固定电话").optional(),
  "cover": z.string().describe("需传入<a href=\"https://opendocs.alipay.com/apis/api_1/ant.merchant.expand.indirect.image.upload\">ant.merchant.expand.indirect.image.upload</a> 接口上传图片后得到的 image_id。").optional(),
  "ext_infos": z.array(z.object({ "key_name": z.string().describe("KV数据对的key，表示该kv对象表示什么含义。").optional(), "value": z.string().describe("kv对象的值").optional() })).describe("扩展信息列表。key值需要向对应行业的bd进行申请。").optional(),
  "industry_info": z.array(z.object({ "info_code": z.string().describe("行业信息CODE").optional(), "info_value": z.array(z.string()).describe("行业信息值，具体值根据info_code决定。\t当info_code=SHOP_MEDICAL_LOGO/SHOP_MEDICAL_IN_PIC这类文件信息时，\t需要传入ant.merchant.expand.indirect.image.upload接口上传的文件key；当info_code= SHOP_MEDICAL_LEVEL_TAG时，需要<a href=\"https://mdn.alipayobjects.com/mrcheshop/afts/file/ZuDmQKgBifgAAAAAAAAAAAAADiWmAQBr?af_filename=医院类型.xlsx\">医院类型</a>中CODE；其他场景传入自定义文本即可。").optional() })).describe("行业信息，例如所属集团、特殊标签").optional(),
  "industry_license": z.array(z.object({ "license_pic": z.string().describe("资质图片信息").optional(), "license_type": z.string().describe("行业资质类型，需使用<a href=\"https://mdn.alipayobjects.com/mrcheshop/afts/file/DfOPQYKgg_sAAAAAAAAAAAAAeiWmAQBr\">资质列表</a>中类型").optional() })).describe("门店资质信息").optional(),
  "ip_role_id": z.string().describe("当前门店归属的商户角色 ID，表示当前进件的店铺的归属商户。对于直连开店场景，填写商户 PID。对于间连开店场景（线上、线下、直付通），商户SMID").optional(),
  "legal_cert_no": z.string().describe("法人身份证号").optional(),
  "legal_name": z.string().describe("法人名称").optional(),
  "license_auth_letter_image": z.string().describe("营业执照授权函图片id，通过 ant.merchant.expand.indirect.image.upload 接口上传图片后得到的 image_id").optional(),
  "memo": z.string().describe("备注").optional(),
  "out_door_images": z.array(z.string()).describe("需传入<a href=\"https://opendocs.alipay.com/apis/api_1/ant.merchant.expand.indirect.image.upload\">ant.merchant.expand.indirect.image.upload</a> 接口上传图片后得到的 image_id。").optional(),
  "qualifications": z.array(z.object({ "industry_qualification_image": z.string().describe("商户行业资质图片。其值为通过ant.merchant.expand.indirect.image.upload上传图片得到的image_id").optional(), "industry_qualification_type": z.string().describe("<a href=\"https://gw.alipayobjects.com/os/bmw-prod/7aa3a36b-2bc2-4d57-815f-08edd55ef67e.xlsx\">商户行业资质类型，具体选值参见文档</a>").optional() })).describe("行业特殊资质。").optional(),
  "scene": z.string().describe("场景，非加油站/酒店等特殊门店无需关注。").optional(),
  "settle_alipay_logon_id": z.string().describe("门店结算收款的支付宝账号").optional(),
  "shop_category": z.string().describe("新版门店类目标准二级类目code。类目标准及与原类目映射关系参见 <a href=\"https://gw.alipayobjects.com/os/bmw-prod/4b3f82df-e53e-4b84-bc41-fe025101e726.xlsx\">支付宝门店类目-最新</a> 表格。").optional(),
  "shop_main_type": z.string().describe("主要针对医疗行业门店主体类型进件使用，不同门店认证主体需要相应的主体资质证书。 \t企业营业执照: ENTERPRISE; \t事业单位法人证书: INST_RGST_CTF; \t民办非企业单位登记证书 PRIVATE_NON_ENTERPRISE").optional(),
  "shop_name": z.string().describe("店铺名称, 由商户定义在支付宝内的店铺名称").optional(),
  "shop_type": z.string().describe("店铺经营类型，01表示直营，02表示加盟").optional(),
  "store_id": z.string().describe("门店编号，表示该门店在该商户角色id(直连pid，间连smid)下，由商户自己定义的外部门店编号").optional()
}
```

### ant_merchant_expand_shop_close

**Environment variables**



**Input schema**

```ts
{
  "ip_role_id": z.string().describe("商户角色id，表示将要开的店属于哪个商户角色。对于直连开店场景，填写商户pid；对于间连开店场景（线上、线下、直付通），填写商户smid。若未传入shop_id 则本参数与store_id均必填。").optional(),
  "shop_id": z.string().describe("支付宝侧蚂蚁店铺 id。传入本参数后可不填 store_id 及 ip_role_id。").optional(),
  "store_id": z.string().describe("商户侧门店编号。表示该门店在该商户角色id(直连pid，间连smid)下，由商户自己定义的外部门店编号。若未传入 shop_id 则本参数与与ip_role_id均必填。").optional()
}
```

### ant_merchant_expand_shop_page_query

**Environment variables**



**Input schema**

```ts
{
  "ip_role_id": z.string().describe("商户角色id，表示将要开的店属于哪个商户角色。对于直连开店场景，填写商户pid；对于间连开店场景（线上、线下、直付通），填写商户smid。特别说明：IoT设备三绑定场景统一填写商户pid").optional(),
  "page_num": z.number().int().describe("查询页数").optional(),
  "page_size": z.number().int().describe("每页查询大小，限制100以内").optional(),
  "address_version": z.string().describe("行政区划版本，当前可传空值(取默认版本)、2022Q2、UPTODATE(取最新版本)，其中空值默认为：2020Q1版本(address_version=''或null)，想要查看版本是2022年2季度版本则传入:(address_version='2022Q2')，想要获取最新版本则传入:(address_version ='UPTODATE')").optional()
}
```

### datadigital_fincloud_generalsaas_face_certify_initialize

**Environment variables**



**Input schema**

```ts
{
  "biz_code": z.string().describe("H5人脸核身场景码。入参支持的场景码。").optional(),
  "face_contrast_picture": z.string().describe("自定义人脸比对图片的base64编码格式的string字符串").optional(),
  "identity_param": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "outer_order_no": z.string().describe("商户请求的唯一标识，商户要保证其唯一性，值为32位长度的字母数字组合。建议：前面几位字符是商户自定义的简称，中间可以使用一段时间，后段可以使用一个随机或递增序列").optional()
}
```

### datadigital_fincloud_generalsaas_face_certify_query

**Environment variables**



**Input schema**

```ts
{
  "certify_id": z.string().describe("本次申请操作的唯一标识，通过datadigital.fincloud.generalsaas.face.certify.initialize\t接口同步响应获取。").optional()
}
```

### datadigital_fincloud_generalsaas_face_certify_verify

**Environment variables**



**Input schema**

```ts
{
  "certify_id": z.string().describe("本次申请操作的唯一标识，由H5人脸核身初始化接口调用后生成，后续的操作都需要用到").optional()
}
```

### datadigital_fincloud_generalsaas_face_check_initialize

**Environment variables**



**Input schema**

```ts
{
  "biz_code": z.string().describe("DATA_DIGITAL_BIZ_CODE_FACE_CHECK_LIVE，代表活体检测。").optional(),
  "outer_order_no": z.string().describe("客户业务单据号。").optional()
}
```

### datadigital_fincloud_generalsaas_face_check_query

**Environment variables**



**Input schema**

```ts
{
  "certify_id": z.string().describe("传入初始化接口datadigital.fincloud.generalsaas.face.check.initialize 得到的certify_id").optional(),
  "need_alive_photo": z.string().describe("是否需要返回活体结果图片，needAlivePhoto：Y_O （原始图片）、Y_M（虚化，背景马赛克）、N（不返图）。非必填，默认为N").optional(),
  "need_score": z.string().describe("该入参已经废弃。").optional(),
  "need_quality_score": z.string().describe("是否需要返回图片质量分，非必填，默认值为N。 N表示不需要，Y表示需要").optional(),
  "need_attack_result": z.string().describe("该参数已废弃").optional()
}
```

### datadigital_fincloud_generalsaas_face_source_certify

**Environment variables**



**Input schema**

```ts
{}
```

### datadigital_fincloud_generalsaas_face_verification_initialize

**Environment variables**



**Input schema**

```ts
{
  "biz_code": z.string().describe("人脸核身具体类型目前仅支持：DATA_DIGITAL_BIZ_CODE_FACE_VERIFICATION").optional(),
  "cert_name": z.string().describe("真实姓名").optional(),
  "cert_no": z.string().describe("证件号").optional(),
  "cert_type": z.string().describe("证件类型，当前枚举支持：\tIDENTITY_CARD：身份证\tRESIDENCE_HK_MC：港澳居民居住证\tRESIDENCE_TAIWAN：台湾居民居住证").optional(),
  "face_reserve_strategy": z.string().describe("人脸保存策略，非必填。具体取值为：reserve(保存活体人脸)/never(不保存活体人脸)，不传默认为reserve").optional(),
  "identity_type": z.string().describe("认证类型，固定值为：CERT_INFO").optional(),
  "nation": z.string().describe("国家地区代码，当证件类型为外国人永久居留证时必填。").optional(),
  "outer_order_no": z.string().describe("商户请求的唯一标识，商户要保证其唯一性，值为64位长度的字母数字组合。建议：前面几位字符是商户自定义的简称，中间可以使用一段时间，后段可以使用一个随机或递增序列").optional(),
  "phone_no": z.string().describe("手机号码").optional()
}
```

### datadigital_fincloud_generalsaas_face_verification_query

**Environment variables**



**Input schema**

```ts
{
  "certify_id": z.string().describe("填入人脸核身初始化阶段获取到的certify_id").optional(),
  "need_alive_photo": z.string().describe("是否需要返回活体结果图片，默认为N（不返图）").optional()
}
```

### datadigital_fincloud_generalsaas_ocr_mobile_initialize

**Environment variables**



**Input schema**

```ts
{
  "biz_code": z.string().describe("bizCode，代表当前使用的能力类型。").optional(),
  "outer_order_no": z.string().describe("客户业务单据号。请保持唯一。").optional()
}
```

### datadigital_fincloud_generalsaas_ocr_server_detect

**Environment variables**



**Input schema**

```ts
{}
```

### monitor_heartbeat_syn

**Environment variables**



**Input schema**

```ts
{
  "biz_content": z.string().describe("验签时该参数不做任何处理").optional()
}
```

### zhima_credit_payafteruse_creditagreement_query

**Environment variables**



**Input schema**

```ts
{
  "out_agreement_no": z.string().describe("商户外部协议号").optional(),
  "credit_agreement_id": z.string().describe("芝麻开通/授权协议号，out_agreement_no与credit_agreement_id必填一个，推荐使用credit_agreement_id。").optional()
}
```

### zhima_credit_payafteruse_creditagreement_transfer

**Environment variables**



**Input schema**

```ts
{
  "category_id": z.string().describe("芝麻外部类目").optional(),
  "credit_agreement_id": z.string().describe("芝麻开通/授权协议号，在用户开通芝麻先享服务后，由芝麻生成并返回给商户；只有当opertaion_type传入AGREEMENT_TRANSFER值是，该字段必传；其他场景不需要传入").optional(),
  "deduct_agreement_no": z.string().describe("用户的代扣协议号").optional(),
  "extend_params": z.string().describe("业务扩展参数，Json格式").optional(),
  "operation_type": z.string().describe("AGREEMENT_TRANSFER代表是存量先享协议的主体切换功能；其他场景不需要传入；默认为空；").optional(),
  "out_agreement_no": z.string().describe("商户外部协议号，不同的支付宝用户需要传递不同的外部单号").optional(),
  "product_code": z.string().describe("商户签约的芝麻产品的产品码").optional(),
  "zm_service_id": z.string().describe("芝麻信用服务ID").optional()
}
```

### zhima_credit_payafteruse_creditbizorder_finish

**Environment variables**



**Input schema**

```ts
{
  "credit_biz_order_id": z.string().describe("信用服务订单号").optional(),
  "is_fulfilled": z.string().describe("字符串类型，用户此订单是否守约。\t传\"true\"时，用户在芝麻信用-守约记录中，该笔订单是已守约状态；\t传\"false\"时，用户在芝麻信用-守约记录中，该笔订单是已取消状态。").optional(),
  "out_request_no": z.string().describe("商户外部请求号").optional(),
  "remark": z.string().describe("商户对本次操作的附言描述").optional()
}
```

### zhima_credit_payafteruse_creditbizorder_order

**Environment variables**



**Input schema**

```ts
{
  "amount_type": z.string().describe("只有当传递了order_amount时，该参数才有意义； 1）该参数不传时，默认为ORDER_AMOUNT。 2）传ORDER_AMOUNT时，表示order_amount传入的金额为后付金额，在发起扣款时，最大扣款支付金额为order_amount传入的值（取值单位为元）； 3）传RISK_AMOUNT时，表示order_amount传入的金额为风险预估金额，在发起扣款时，最大扣款支付金额为商户签约时约定的上限额度（取值单位为元）。").optional(),
  "body": z.string().describe("订单描述").optional(),
  "category_id": z.string().describe("芝麻外部类目，芝麻先享接入无差异化风控诉求可不传").optional(),
  "commercial_sub_mode": z.string().describe("业务子模式。默认的单次付模式无需传入，阶段付模式传入以区分是分次还是分期子模式。").optional(),
  "credit_agreement_id": z.string().describe("芝麻开通协议号").optional(),
  "credit_commercial_mode": z.string().describe("信用业务模式，不填默认为单次扣款模式。阶段付模式为STAGE_PAYMENT，其它模式请根据对应的技术支持文档传入").optional(),
  "extend_params": z.string().describe("业务扩展参数").optional(),
  "order_amount": z.string().describe("订单金额，该金额为当前订单扣款的累计最大额度。例如，下单时传递10.00，则扣款时最大支付金额为10元。若该参数不传，则默认使用商户签约时约定的上限额度。芝麻速办业务场景（极速回收、极速返利、极速退款等）商户请求时，order_amount必传，且amount_type类型需传递ORDER_AMOUNT。").optional(),
  "out_order_no": z.string().describe("商户外部订单号，保证不重复").optional(),
  "payment_total_times": z.string().describe("多阶段订单次数，业务模式为阶段付模式下时需传入").optional(),
  "product_code": z.string().describe("产品码，不传默认为CREDIT_PAY_AFTER_USE").optional(),
  "stage_period_type": z.string().describe("阶段付分期类型。阶段付模式，且子业务模式为分期模式下需要传入，分次不需要").optional(),
  "subject": z.string().describe("订单标题。\t注意：不可使用特殊字符，如 /，=，& 等。").optional()
}
```

### zhima_credit_payafteruse_creditbizorder_query

**Environment variables**



**Input schema**

```ts
{
  "credit_biz_order_id": z.string().describe("信用服务订单号，out_order_no与credit_biz_order_id至少传一个").optional(),
  "out_order_no": z.string().describe("商户外部单号，out_order_no与credit_biz_order_id至少传一个").optional()
}
```

### zhima_credit_pe_zmgo_agreement_query

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号，即花芝轻会员。传入该参数，会忽略其它所有参数。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional()
}
```

### zhima_credit_pe_zmgo_agreement_unsign

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号。").optional(),
  "alipay_user_id": z.string().describe("支付宝的用户id").optional(),
  "open_id": z.string().describe("支付宝的用户id").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "quit_type": z.string().describe("quit_type为USER_CANCEL_QUIT或者SETTLE_APPLY_QUIT").optional()
}
```

### zhima_credit_pe_zmgo_bizopt_close

**Environment variables**



**Input schema**

```ts
{
  "alipay_user_id": z.string().describe("支付宝用户Id").optional(),
  "open_id": z.string().describe("支付宝用户Id").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，由商户生成，请确保唯一性").optional(),
  "partner_id": z.string().describe("商户Id").optional(),
  "template_id": z.string().describe("芝麻GO配置模板Id").optional()
}
```

### zhima_credit_pe_zmgo_cumulation_sync

**Environment variables**



**Input schema**

```ts
{
  "agreement_no": z.string().describe("芝麻go协议号，唯一标识一个芝麻go协议。为必传入参。").optional(),
  "amount_type_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_action": z.string().describe("数据回传的动作类型，为枚举值，为必传入参。\t可取值：\t(\"ORDER_PAID\", \"正向支付\")，(\"ORDER_REFUND\", \"逆向退款\")。\t其中ORDER_PAID表示回传为正向的，即订单金额累加，优惠累加，任务次数累加；而ORDER_REFUND表示回传为逆向的，即订单金额退款，优惠退款，任务次数回退。").optional(),
  "biz_time": z.string().describe("交易发生时间，包括：订单交易时间，优惠核销时间，以及任务完成时间。为必传入参。\t如：用户在【2019-03-08 00:00:00】核销了一个红包，但是【2019-03-10 00:00:00】才进行数据回传，此时biz_time取值红包核销的时间，也就是【2019-03-08 00:00:00】。").optional(),
  "cumulate_data_type": z.string().describe("累计类型。为枚举值，为必传入参。\t可取值：(\"AMOUNT\", \"金额类型\")，(\"TASK\", \"任务类型\")，(\"AMOUNT_TASK\", \"额度和任务类型\")。\t其中，交易解耦模式仅允许AMOUNT或TASK。而交易绑定模式下，仅允许AMOUNT_TASK。").optional(),
  "ext_info": z.string().describe("扩展字段，格式为Json格式的字符串，非必传。").optional(),
  "has_alipay_trade": z.boolean().describe("是否为支付宝交易。仅在累计模式为【交易绑定模式】下被消费。当芝麻Go模板配置的累计模式为交易绑定模式时，此时需传入扩展参数是否为支付宝交易。若是支付宝交易，传值true，否则为false。若不传此字段，默认为false。\t若为true，则会对交易号trade_no进行校验，校验是否为支付宝交易，以及用户userId和商户partnerId是否一致，若校验不通过，累计失败。").optional(),
  "open_id": z.string().describe("用户userId，蚂蚁统一会员ID，为必传入参。").optional(),
  "out_biz_no": z.string().describe("外部业务号。需保证唯一，为必传入参。\t若接口调用失败，提示信息为更换幂等号，商户更换此字段重新发起调用。").optional(),
  "partner_id": z.string().describe("商户ID，为必传入参。").optional(),
  "pay_out_biz_no": z.string().describe("逆向对应的正向外部业务号。逆向场景为必传入参。也就是biz_action为ORDER_REFUND时为必传入参。\t逆向时需通过此字段明确对应的正向的外部业务号。").optional(),
  "request_from": z.string().describe("取固定值ExternalMerchantSource，为必传入参。表示数据回传来源为外部商户，数据回传内部逻辑需感知。").optional(),
  "task_type_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "user_id": z.string().describe("用户userId，蚂蚁统一会员ID，为必传入参。").optional()
}
```

### zhima_credit_pe_zmgo_preorder_create

**Environment variables**



**Input schema**

```ts
{
  "alipay_open_id": z.string().describe("支付宝用户ID。同一个外部请求号，调用方要确保支付宝userId取值不变").optional(),
  "alipay_user_id": z.string().describe("支付宝用户ID。同一个外部请求号，调用方要确保支付宝userId取值不变").optional(),
  "biz_time": z.string().describe("业务发生时间，如2016-07-06 00:00:02\t签约超时关单时间依赖这个时间\t这个时间会做幂等校验，如果创单幂等，但时间不同会失败").optional(),
  "custom_temp_conf": z.string().describe("废弃字段，勿用").optional(),
  "expire_aisle_data": z.string().describe("协议到期后通知").optional(),
  "ext_template_conf": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "freeze_amount": z.string().describe("冻结金额，单位：元").optional(),
  "isv_pid": z.string().describe("ISV商户ID").optional(),
  "out_request_no": z.string().describe("外部请求号，唯一").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "partner_user_identifier": z.string().describe("商户侧用户唯一标识。ex.商户侧uid").optional(),
  "pay_aisle_data": z.string().describe("结算成功后通知").optional(),
  "sign_aisle_data": z.string().describe("签约成功后通知").optional(),
  "template_id": z.string().describe("签约芝麻GO的模板ID").optional(),
  "timeout_express": z.string().describe("超时关单时间\t默认1H。1m～15d。m表示分钟，h表示小时，d表示天。该参数数值不接受小数点， 如1.5h，可转换为90m\t签约超时关单时间依赖这个时间").optional()
}
```

### zhima_credit_pe_zmgo_settle_apply

**Environment variables**



**Input schema**

```ts
{
  "action_type": z.string().describe("DEFAULT_SETTLE 默认结算模式;\tPAY_TO_ZERO 支付转0元；").optional(),
  "agreement_id": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号。").optional(),
  "alipay_open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，用于标示请求流水的唯一性，不能包含除中文、英文、数字以外的字符，需要保证在商户端不重复。").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "pay_amount": z.string().describe("需要支付的金额，单位为：元（人民币），精确到小数点后两位").optional(),
  "settle_extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "total_discount_amount": z.string().describe("芝麻GO任务开始到到期过程中和任务相关享受的总优惠金额，单位为：元（人民币），精确到小数点后两位。").optional(),
  "total_real_pay_amount": z.string().describe("芝麻GO任务开始到到期过程中和任务相关支付的总金额，单位为：元（人民币），精确到小数点后两位。").optional(),
  "total_task_count": z.string().describe("芝麻GO任务开始到到期过程中和任务相关完成的任务次数").optional(),
  "withhold_plan_no": z.string().describe("芝麻GO结算时，需要传入的扣款单据号。来源于协议到期通知消息，外部商户接入时，该参数必填").optional()
}
```

### zhima_credit_pe_zmgo_settle_refund

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("签约芝麻GO的业务协议号，在签约成功、结算成功等通知中回回传给商户。").optional(),
  "alipay_open_id": z.string().describe("支付宝用户ID").optional(),
  "alipay_user_id": z.string().describe("支付宝用户ID").optional(),
  "memo": z.string().describe("本次退款说明").optional(),
  "out_request_no": z.string().describe("外部请求号").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "refund_amount": z.string().describe("退款金额，单位为：元（人民币），精确到小数点后两位").optional(),
  "refund_type": z.string().describe("退款类型：\tMEMBER_FEE_REFUND 会员费结算退款 ，WITHHOLD_FEE_REFUND 周期扣款金额退款。\t不填写默认为 MEMBER_FEE_REFUND").optional(),
  "withhold_plan_no": z.string().describe("芝麻侧扣款计划单据号，在结算扣款成功的通知消息中会回传。").optional()
}
```

### zhima_credit_pe_zmgo_settle_unfreeze

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号，即花呗先享协议号").optional(),
  "alipay_open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "biz_time": z.string().describe("解冻成功时间").optional(),
  "order_title": z.string().describe("解冻的描述").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，用于标识请求流水的唯一性，不能包含除中文、英文、数字以外的字符，需要保证在商户端不重复。由商户传入，最终返回给商户。").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "unfreeze_amount": z.string().describe("解冻金额").optional(),
  "unfreeze_extend_params": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### zhima_customer_jobworth_authentication_query

**Environment variables**



**Input schema**

```ts
{
  "conn_key": z.string().describe("调用第一步创建接口的out_agreement_no，由外部传入").optional(),
  "once_token": z.string().describe("查询身份认证结果的凭证，在认证结果到达终态后只允许查询成功一次，若需要再次查询，则需要调用第一个接口再拉起受理台").optional(),
  "query_type": z.string().describe("exact:精确查询,dim:模糊查询").optional(),
  "identity_type": z.string().describe("04:教师，其它身份类型联系芝麻技术支持确认").optional(),
  "service_id": z.string().describe("信用服务id，商家接入产品功能包时有运营同学分配").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID\t和身份证任选一个传入").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID\t和身份证任选一个传入").optional(),
  "cert_no": z.string().describe("证件号").optional(),
  "cert_type": z.string().describe("\"身份证 : 0\"，\"护照: 1\"，\"台湾往来通行证：4\",\"港澳往来通行证：3\", \"回乡证: 2\"；\"港澳证件：5\"").optional()
}
```

### zhima_customer_jobworth_cloudresume_query

**Environment variables**



**Input schema**

```ts
{
  "conn_key": z.string().describe("长效的认证令牌：zhima.credit.payafteruse.creditagreement.sign 的out_agreement_no").optional(),
  "once_token": z.string().describe("交换云简历的单次token：zhima.credit.payafteruse.creditagreement.sign 的\t\textra_param入参onceToken（授权后5分钟内，单次有效").optional()
}
```

### zhima_customer_jobworth_info_query

**Environment variables**



**Input schema**

```ts
{
  "user_name": z.string().describe("姓名").optional(),
  "conn_key": z.string().describe("外部订单号，zhima.credit.payafteruse.creditagreement.sign的入参 out_agreement_no智能简历场景支持只传该值").optional(),
  "cert_no": z.string().describe("证件号 ，根据cert_type类型设置对应证件号码，选择身份证校验时必传").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID ，为2088开头的唯一标识\t选择支付宝uid检验时必传，支付宝uid或身份证+身份证类型 查询2选1，都设置时uid优先").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID ，为2088开头的唯一标识\t选择支付宝uid检验时必传，支付宝uid或身份证+身份证类型 查询2选1，都设置时uid优先").optional(),
  "back_url": z.string().describe("若用户没有开通工作证或者芝麻，成功开通后回跳的链接 ，支持http或schema地址").optional(),
  "cert_type": z.string().describe("证件类型 ，枚举值：\t0:身份证1:护照2:台湾同胞回乡证3:港澳居民往来内地通行证4:台湾居民通行证5:港澳居民通行证\t选择身份证校验时必传，支付宝uid或身份证+身份证类型 查询2选1，都设置时uid优先").optional(),
  "ka_visitor_id": z.string().describe("商户内部的唯一id如果是需要返回h5页面必填").optional(),
  "visitor_type": z.string().describe("访问类型\tC = company  or P = person\t如果是需要返回h5页面必填").optional(),
  "visitor_name": z.string().describe("商户侧配置访客名称\t如果是需要返回h5页面必填").optional(),
  "company_certificate": z.string().describe("公司社会统一代码h5页面访客展示使用").optional(),
  "visitor_url": z.string().describe("上传图片接口返回的id").optional(),
  "has_button": z.boolean().describe("在h5页面是否展示底部跳转按钮").optional(),
  "has_number": z.boolean().describe("true or false\t是否展示").optional(),
  "has_qr_code": z.boolean().describe("是否展示二维码").optional(),
  "has_html": z.boolean().describe("是否需要返回h5页面").optional(),
  "job_id": z.string().describe("对外使用的jobid").optional(),
  "industry_id": z.string().describe("行业描述ID").optional(),
  "cloud_resume_scene": z.string().describe("子场景").optional()
}
```

### zhima_customer_jobworth_jobdata_add

**Environment variables**



**Input schema**

```ts
{
  "cert_no": z.string().describe("身份证证件号").optional(),
  "cert_type": z.string().describe("0:身份证1:护照2:台湾同胞回乡证3:港澳居民往来内地通行证4:台湾居民通行证5:港澳居民通行证").optional(),
  "conn_key": z.string().describe("关联key，受理台返回").optional(),
  "job_data_list": z.array(z.object({ "certificate_grant_institution": z.string().describe("证书发证机构").optional(), "certificate_id": z.string().describe("证书编号").optional(), "certificate_level": z.string().describe("证书等级：中文").optional(), "certificate_name": z.string().describe("证书名称").optional(), "certificate_pic_id": z.string().describe("工作证图片上传接口返回的id").optional(), "company_name": z.string().describe("公司名称").optional(), "degree": z.string().describe("学历，可以用以下字段HIGHSCHOOL_AND_BELOW（高中及以下），POLYTECHNIC（中专），COLLEGE（大专），BACHELOR（本科），MASTER（硕士），DOCTOR_AND_ABOVE（博士及以上）").optional(), "delivery_position_id": z.string().describe("商户侧投递岗位id").optional(), "delivery_time": z.number().int().describe("投递时间戳").optional(), "education_status": z.string().describe("教育状态只有两种，GRADUATE(毕业)，STUDY（未毕业）").optional(), "entry_no": z.string().describe("报名流水号").optional(), "exam_score": z.string().describe("考试分数").optional(), "head_pic_id": z.string().describe("工作证图片上传接口返回的id").optional(), "intention_city": z.string().describe("求职意向，城市的adccode  例如110000（北京市）").optional(), "intention_city_name": z.string().describe("意向城市名，例如北京市，传入北京即可，大理白族自治州，传入大理即可").optional(), "issue_date": z.string().describe("发证日期，ms时间戳").optional(), "job_id": z.string().describe("岗位对应的职业id，字段参考https://www.yuque.com/wx3dkp/gwckr4/bs03t3").optional(), "job_name": z.string().describe("职业名称").optional(), "ka_job_id": z.string().describe("商户职业Id").optional(), "ka_job_name": z.string().describe("商户职业名称").optional(), "ka_profession_id": z.string().describe("商户行业Id").optional(), "ka_profession_name": z.string().describe("商户行业名称").optional(), "location": z.string().describe("省份").optional(), "month": z.string().describe("毕业的月").optional(), "once_token": z.string().describe("对应类型相关接口生成").optional(), "profession_id": z.string().describe("岗位对应的行业id，字段参考https://www.yuque.com/wx3dkp/gwckr4/bs03t3").optional(), "profession_name": z.string().describe("行业名称").optional(), "salary_max": z.string().describe("求职意向，薪水范围，不能低于salary_min").optional(), "salary_min": z.string().describe("求职意向，薪水范围，不能高于salary_max").optional(), "salary_unit": z.string().describe("薪资单位，元/日(DAY)、元/次(TIME)、元/月(MONTH)、元/小时(HOUR)、元/件 (NUM)、元/周 (WEEK)、其他 (OTHER)").optional(), "school_name": z.string().describe("学校").optional(), "skill_name": z.string().describe("用英文逗号分隔，最多6项").optional(), "start_time": z.string().describe("参加工作的时间，格式形如 2011-07").optional(), "type": z.string().describe("信息类型").optional(), "valid_date_end": z.string().describe("有效期：开始结束 ms 时间戳").optional(), "valid_date_start": z.string().describe("有效期：开始时间 ms时间戳").optional(), "verify_status": z.string().describe("校验状态").optional(), "work_desc": z.string().describe("工作描述").optional(), "work_end_time": z.string().describe("工作结束时间，毫秒级时间戳").optional(), "work_place": z.string().describe("工作经历工作地").optional(), "work_property": z.string().describe("岗位属性：全职(FULL_TIME)或者兼职(PART_TIME)").optional(), "work_start_time": z.string().describe("工作开始时间，毫秒级时间戳").optional(), "year": z.string().describe("毕业的年").optional() })).describe("回传信息").optional(),
  "open_id": z.string().describe("支付宝uid").optional(),
  "user_id": z.string().describe("支付宝uid").optional(),
  "user_name": z.string().describe("用户中文名").optional()
}
```

### zhima_customer_jobworth_picture_upload

**Environment variables**



**Input schema**

```ts
{
  "content": z.string().describe("图片对应的base64字符串，支持jpg和png，1M之内").optional(),
  "pic_type": z.string().describe("只能传入指定类型，具体类型看文档").optional()
}
```

### zhima_customer_jobworth_position_add

**Environment variables**



**Input schema**

```ts
{
  "jobworth_position_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### zhima_merchant_subsidiaries_apply

**Environment variables**



**Input schema**

```ts
{
  "pid": z.string().describe("商户pid").optional(),
  "service_id": z.string().describe("信用服务id").optional(),
  "smid": z.string().describe("二级商户进件id").optional(),
  "sub_merchant_contact_number": z.string().describe("子商户联系电话").optional(),
  "sub_merchant_jump_link": z.string().describe("子商户跳转链接").optional(),
  "sub_merchant_logo_url": z.string().describe("子商户logo地址").optional(),
  "sub_merchant_name": z.string().describe("子商户名").optional(),
  "sub_pid": z.string().describe("子商户id").optional()
}
```

### zhima_merchant_subsidiaries_close

**Environment variables**



**Input schema**

```ts
{
  "order_no": z.string().describe("工单标识").optional()
}
```

### zhima_merchant_zmgo_cumulate_query

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("芝麻go协议号，唯一标识一个芝麻go协议。").optional(),
  "user_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "open_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "provider_pid": z.string().describe("数据回传的商户 ID，即和用户发生业务来往的 PID 主体。商户账号在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "need_detail": z.boolean().describe("是否需要回传明细。枚举支持：\t* true：需要回传明细。\t* false：不需要回传明细。").optional(),
  "page_no": z.number().int().describe("分页参数，当need_detail=true时需要，代表当前页数，从1开始。").optional(),
  "page_size": z.number().int().describe("分页参数，当need_detail=true时需要，代表每页大小，不能大于20。").optional()
}
```

### zhima_merchant_zmgo_cumulate_sync

**Environment variables**



**Input schema**

```ts
{
  "agreement_id": z.string().describe("芝麻go协议号，唯一标识一个芝麻go协议。").optional(),
  "amount_type_sync_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "biz_action": z.string().describe("数据回传的动作类型。枚举如下：\t* POSITIVE：正向回传，即订单金额累加，优惠累加，任务次数累加。\t* REVERSE：逆向回传，即订单金额退款，优惠退款，任务次数回退。").optional(),
  "biz_time": z.string().describe("回传数据发生的实际时间，包括：订单交易时间，优惠核销时间，以及任务完成时间。为必传入参。 如：用户在【2019-03-08 00:00:00】核销了一个红包，但是【2019-03-10 00:00:00】才进行数据回传，此时biz_time取值红包核销的时间，也就是【2019-03-08 00:00:00】。").optional(),
  "data_type": z.string().describe("回传数据类型，枚举：\tTASK - 进度型，影响进度\tDISCOUNT - 优惠型").optional(),
  "discount_type_sync_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "open_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "out_biz_no": z.string().describe("外部业务号，唯一标识一笔回传数据。").optional(),
  "provider_pid": z.string().describe("数据回传的商户 ID，即和用户发生业务来往的 PID 主体。商户账号在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "refer_out_biz_no": z.string().describe("逆向对应的正向外部业务号。逆向场景为必传入参。也就是biz_action为REVERSE时为必传入参。 逆向时需通过此字段明确对应的正向的外部业务号。").optional(),
  "sub_biz_action": z.string().describe("数据回传动作子类型，枚举值，为必传入参。\tADD - 新增数据\tUPDATE - 修改数据\t备注：UPDATE只能更新金额信息。").optional(),
  "times_type_sync_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "user_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。\t").optional()
}
```

### zhima_merchant_zmgo_template_create

**Environment variables**



**Input schema**

```ts
{
  "basic_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ext_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "obligation_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "open_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "quit_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "right_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "settlement_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### zhima_merchant_zmgo_template_query

**Environment variables**



**Input schema**

```ts
{
  "template_no": z.string().describe("模板ID，由创建模板接口返回结果提供").optional(),
  "partner_id": z.string().describe("商户ID").optional()
}
```

### zoloz_authentication_customer_facemanage_create

**Environment variables**



**Input schema**

```ts
{
  "areacode": z.string().describe("地域编码").optional(),
  "biz_type": z.string().describe("人脸产品能力，预热场景，需要传college，k12，scenic，subway，traffic。具体值视具体场景").optional(),
  "bizscale": z.string().describe("业务量规模").optional(),
  "brandcode": z.string().describe("商户品牌").optional(),
  "devicenum": z.string().describe("商户机具唯一编码，关键参数\t人脸预热，传logicGroupId").optional(),
  "extinfo": z.string().describe("拓展参数").optional(),
  "facetype": z.string().describe("入库类型 IDCARD:身份证 ALIPAY_USER:支付宝用户id, ALIPAY_TEL:手机号入库 CUSTOMER:自定义 DIRECT_CLIENT_PRE：本地预写入 DIRECT_CLIENT：本地客户端库 ENCLOSED：封闭场景").optional(),
  "faceval": z.string().describe("入库用户信息 人脸预热，alipayUid必填").optional(),
  "group": z.string().describe("分组5").optional(),
  "storecode": z.string().describe("门店编码").optional(),
  "validtimes": z.string().describe("有效期天数，如7天、30天、365天").optional()
}
```

### zoloz_authentication_customer_facemanage_delete

**Environment variables**



**Input schema**

```ts
{
  "areacode": z.string().describe("地域编码").optional(),
  "biz_type": z.string().describe("人脸产品能力").optional(),
  "bizscale": z.string().describe("业务量").optional(),
  "brandcode": z.string().describe("商户品牌").optional(),
  "devicenum": z.string().describe("商户机具唯一编码，关键参数").optional(),
  "extinfo": z.string().describe("拓展参数").optional(),
  "facetype": z.string().describe("入库类型\tIDCARD:身份证\tALIPAY_USER:支付宝用户id,\tALIPAY_TEL:手机号入库\tCUSTOMER:自定义").optional(),
  "faceval": z.string().describe("入库用户信息").optional(),
  "group": z.string().describe("分组").optional(),
  "storecode": z.string().describe("门店编码").optional(),
  "validtimes": z.string().describe("有效期天数，如7天、30天、365天").optional()
}
```

### zoloz_authentication_customer_ftoken_query

**Environment variables**



**Input schema**

```ts
{
  "biz_type": z.string().describe("1、1：1人脸验证能力\r\t2、1：n人脸搜索能力（支付宝uid入库）\r\t3、1：n人脸搜索能力（支付宝手机号入库）\r\t4、手机号和人脸识别综合能力").optional(),
  "ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ftoken": z.string().describe("人脸token").optional(),
  "zim_id": z.string().describe("刷脸初始化流程中产生的zimId值").optional()
}
```

### zoloz_authentication_customer_smilepay_initialize

**Environment variables**



**Input schema**

```ts
{
  "service_id": z.string().describe("刷脸服务Id").optional(),
  "service_params": z.string().describe("商户可传入刷脸服务所需的扩展参数，json格式").optional(),
  "zimmetainfo": z.string().describe("{ \"apdidToken\": \"设备指纹\", \"appName\": \"应用名称\", \"appVersion\": \"应用版本\", \"bioMetaInfo\": \"生物信息如2.3.0:3,-4\" }").optional()
}
```

### zoloz_authentication_smilepay_initialize

**Environment variables**



**Input schema**

```ts
{
  "apdid_token": z.string().describe("设备指纹，用于唯一标识一台设备").optional(),
  "app_name": z.string().describe("人脸识别应用名称").optional(),
  "app_version": z.string().describe("人脸识别应用版本号").optional(),
  "base_ver": z.string().describe("基础包版本号").optional(),
  "bio_meta_info": z.string().describe("生物识别元信息").optional(),
  "device_model": z.string().describe("设备型号").optional(),
  "device_type": z.string().describe("设备类型").optional(),
  "ext_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "machine_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "merchant_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "os_version": z.string().describe("操作系统版本号").optional(),
  "remote_log_id": z.string().describe("业务ID").optional(),
  "zim_ver": z.string().describe("ZIM版本号").optional()
}
```
