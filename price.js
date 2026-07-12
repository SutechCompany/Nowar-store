// config.js - ملف الإعدادات الموحد للأسعار
const EXCHANGE_RATE = 1600;      // سعر الصرف (تغيره من هنا فقط ليحدث كل الموقع)
const PROFIT_MARGIN = 1.45;      // نسبة الربح والعمولة المضافة

/**
* دالة لحساب السعر المحلي وتحويله لنص منسق
* @param {string|number} usdAmount - السعر بالدولار
* @returns {string} - السعر بالجنيه السوداني منسقاً
*/
function getCalculatedPrice(usdAmount) {
    const usd = parseFloat(usdAmount);
    if (isNaN(usd)) return "ج.س 0";
   
    const finalBasePrice = usd * PROFIT_MARGIN;
    const localPriceNumber = finalBasePrice * EXCHANGE_RATE;
    return "ج.س " + Math.round(localPriceNumber).toLocaleString('en-US');
}