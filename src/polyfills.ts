/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
* BROWSER POLYFILLS
*/


/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js';  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following for the Reflect API. */
import 'core-js/es6/reflect';


/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.



/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.



/***************************************************************************************************
 * APPLICATION IMPORTS
 */

import { loadTranslations } from '@angular/localize';

let zhTranslations = {
    // navbar, general
    'login': '登录',
    'lang': 'English',
    'description': '描述',
    'save': '保存',
    'cancel': '取消',
    'delete': '删除',
    'view': '查看',
    // app left menu
    'cert_mgmt': '证书管理',
    'app_mgmt': '应用管理',
    'node_mgmt': '节点管理',
    'user_mgmt': '用户管理',
    'dashboard': '仪表盘',
    'waf_mgmt': 'WAF管理',
    'waf_logs': 'WAF日志',
    'cc_logs': 'CC日志',    
    // frontpage
    'product_name': 'JANUSEC应用网关V0.9.7',
    'product_desc': 'JANUSEC应用网关，提供WAF、CC攻击防御、OAuth2身份认证、统一Web化管理入口、证书私钥保护、Web SSH安全运维，Web路由以及可扩展的负载均衡等功能。',
    'feature_title': 'JANUSEC应用网关主要特性：',
    'feature_waf': 'WAF(Web应用防火墙)，CC防护',
    'feature_encryped_private_key': '私钥加密',
    'feature_oauth': 'OAuth2（企业微信/钉钉/飞书扫码登录应用）',
    'support': '支持',
    'official_site': 'JANUSEC官方网站',
    'source_code': '源代码',
    'user_agreement': '用户协议',
    // login form
    'login_title': '管理登录',
    'submit': '提交',
    // certificates
    'add_cert': '添加证书',
    // certificate-detail
    'cert_detail_title': '证书详情',
    'cert_common_name': '通用名/使用者可选名称',
    'cert_public': '证书公钥（以-----BEGIN CERTIFICATE-----开头）',
    'cert_priv': '证书私钥（以-----BEGIN PRIVATE KEY-----开头）',
    'cert_expire': '到期时间',
    'cert_self_sign': '自签名证书',
    // Applications
    'add_app': '添加应用',
    // Application Detail
    'app_detail': '应用详情',
    'app_name': '应用名称',
    'app_internal_scheme': '后端/内部Scheme（网关访问后端使用HTTP还是HTTPS，默认HTTP）',
    'app_destination': '目标地址及端口（如：10.10.10.10:80 或者 [::1%lo]:8080 ）',
    'add_destination': '添加新的目标地址及端口',
    'domain_name': '域名（可编辑）',
    'certificate': '证书',
    'redirect': '（默认不勾选）重定向到： ',
    'add_domain': '添加域名',
    'ip_for_waf': '网关获取用户IP地址的方式（默认REMOTE_ADDR，流量来自其他CDN时才需要修改）',
    'redirect_https': '将HTTP请求重定向到HTTPS',
    'hsts_enabled': '启用HSTS（添加头部Strict-Transport-Security，告诉浏览器接下来一年内只使用HTTPS）',
    'waf_enabled': '启用WAF（Web应用防火墙）',
    'oauth_required': '启用OAuth2扫码登录（仅用于内部员工登录企业内部网站）',
    'session_seconds': '启用OAuth2时，会话超时时间（默认7200秒）',
    'owner': '应用负责人（使用登录用户名或完整的英文ID，只有应用管理员和应用负责人才能操作应用）',
    // nodes
    'node_notice': '请复制如下node_key到所有从节点config.json文件中：',
    // User Management
    'add_user': '添加用户',
    // User Details
    'user_details': '用户详情',
    'confirm_password': '确认口令',
    'email': '邮箱地址',
    'authorization_admin': '授权及WAF管理员（授予/撤销用户权限，管理WAF/CC规则）',
    'certificate_admin': '证书管理员（可管理所有证书内容）',
    'application_admin': '应用管理员（可管理所有应用）',
    // Dash Board
    'application': '请选择应用',
    'all': '所有',
    'vulnerability': '请选择漏洞类型',
    // WAF, Firewall, CC
    'global_vuln_policy': '全局漏洞防护规则',
    'cc_policy': 'CC攻击防护规则',
    'enabled': '启用',
    'add_policy': '添加规则',
    'global_cc_title': '全局CC防护规则（当应用存在自定义规则时，全局规则无效）',
    'custom_cc_title': '自定义CC防护规则（请先选中一个应用）',
    'select_application': '选择一个应用',
    'add_custom_cc_policy': '添加自定义CC规则',
    'count_each_url': '单独统计每个URL地址的访问次数（当只需要统计无差别的全站访问次数时，不勾选）',
    'count_each_ua': '单独统计每个User-Agent的访问次数（当不需要区分用户User-Agent时，不勾选）',
    'count_each_cookie': '单独统计每个不同的Cookie串（默认不勾选，当Cookie中使用了时间戳或Cookie会经常变化时，不勾选）',
    'enable_policy': '启用该规则',
    "interval_seconds": '统计时间窗（秒数）',
    'max_count': '一个时间窗内最大请求数量',
    'block_seconds': '超过最大请求数量时锁定秒数',
    'action': '触发动作(阻断/旁路/验证码/放行)',
    // Policy
    'policy_detail': 'WAF规则详情',
    'policy_description': '规则名称或描述',
    'apply_to': '用于哪个应用',
    'check_point': '检查点',
    'operation': '运算(正则匹配/字符串相等且不区分大小写/大于某个整数/等于某个整数)',
    'designated_headerkey': '指定HTTP头部Key',
    'value_or_regex': '值，或正则表达式（使用Google RE2规则，(?i)开头表示不区分大小写）',
    'add_new_checkpoint': '添加新的检查点',
    'update_time': '更新时间',
    'regex_test_tool': '正则表达式测试工具',
    'regex_pattern': '正则表达式（采用Google RE2正则）',
    'payload_to_test': '用来测试的payload用例',
    'matched_result': '匹配结果',
    'regex_preprocess': '使用内置WAF预处理（建议勾选，会统一删除单双引号和/**/，自定义规则不需要额外处理单双引号和/**/）',
    // WAF log
    'begin_time': '开始时间(00:00:00)',
    'end_time': '结束时间(23:59:59)',
    'query_waf_logs': '查询WAF日志',
    'query_cc_logs': '查询CC日志',
    'log_details': 'WAF日志详情',
    // CC Log
    'cc_log_details': 'CC日志详情',
    'go_back': '后退',
    // Web SSH
    'web_ssh_term': '在线SSH运维终端',
    'ip_address': '目标主机IP地址',
    'port': '端口',
    'username': '用户名',
    'password': '口令',
}


var lang = localStorage.getItem('lang');
switch(lang) {
    case 'zh-cn':
        loadTranslations(zhTranslations);
        break;
    default:
        break;
}