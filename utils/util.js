function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 转换成xxxx年xx月xx日
*/
function formatDate(time) {
  var date = new Date(time)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return year + "年" + month + "月" + day + "日"
}

/**
 * 转换成xxxx-xx-xx
*/
function formatDate_(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}

/**
 * 转换成xxxx年xx月
*/
function formatMonth(date) {
  var year = date.getFullYear()
  var month = formatNumber(date.getMonth() + 1)
  var day = date.getDate()
  return year + "年-" + month + "月"
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 时间字符分割
 * retun xxxx年xx月
*/
function splitDate(val) {
  var strs = new Array()
  strs = val.split("-")
  return strs[0] + "年-" + strs[1] + "月"
}

/**
 * 时间字符分割
 * retun []
 */
function arraySplitDate(val) {
  var strs = new Array()
  strs = val.split("-")
  return strs
}

/**
 * 字符截取
 * val：要截取的字符 length:截取的长度
 */
function subString(val, length) {
  return val.substring(0, length)
}

/**
 * 手机号验证
 */
function verifyPhoneNumber(n) {
  var partten = /^1[3-9]\d{9}$/
  return partten.test(n)
}

/**
 * 身份证验证
 */
function verifyCard(n) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(n)
}

/**
 * 邮箱验证
 */
function verifyEmail(n) {
  var szreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return szreg.test(n)
}

/**
 * 计算工作时间
 */
function experience(date) {
  var time = (new Date().getTime() - new Date(date).getTime()) / (24 * 60 * 60 * 1000 * 365);
  time = time > 1 ? time : 1;
  return Math.round(time);
}

module.exports = {
  formatTime: formatTime,
  formatMonth: formatMonth,
  formatDate: formatDate,
  formatDate_: formatDate_,
  splitDate: splitDate,
  arraySplitDate: arraySplitDate,
  subString: subString,
  verifyPhoneNumber: verifyPhoneNumber,
  verifyCard: verifyCard,
  verifyEmail: verifyEmail,
  experience: experience
}
