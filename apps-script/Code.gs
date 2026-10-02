/**
 * Google Apps Script: paste into Extensions → Apps Script of your leads Sheet.
 * Script Properties: SECRET (same as APPS_SCRIPT_SECRET), NOTIFY_TO (your email).
 * Deploy → Web app → Execute as: Me → Who has access: Anyone. Copy the /exec URL
 * into APPS_SCRIPT_URL.
 */
const SHEET_NAME = 'Leads';
const HEADERS = ['Timestamp (IST)', 'Lead ID', 'Name', 'Mobile', 'Locality', 'Brand', 'Machine Type', 'Problem',
  'Address', 'Preferred Date', 'Preferred Slot', 'CTA Source', 'Page URL', 'Referrer', 'gclid', 'utm_source',
  'utm_medium', 'utm_campaign', 'utm_term', 'reCAPTCHA Score', 'IP Hash', 'User Agent', 'Status'];

function doPost(e) {
  const props = PropertiesService.getScriptProperties();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents);
    if (d.secret !== props.getProperty('SECRET')) return out({ ok: false, error: 'unauthorized' });

    const ss = SpreadsheetApp.getActive();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(HEADERS);

    const now = new Date();
    const leadId = 'WM-' + Utilities.formatDate(now, 'Asia/Kolkata', 'yyMMdd-HHmmss');
    const safe = v => /^[=+\-@]/.test(String(v || '')) ? "'" + v : (v || '');

    sh.appendRow([
      Utilities.formatDate(now, 'Asia/Kolkata', 'dd-MMM-yyyy HH:mm:ss'),
      leadId, safe(d.name), safe(d.mobile), safe(d.locality), safe(d.brand),
      safe(d.machineType), safe(d.problem), safe(d.address),
      safe(d.preferredDate), safe(d.preferredSlot), safe(d.source),
      safe(d.pageUrl), safe(d.referrer), safe(d.gclid),
      safe(d.utm_source), safe(d.utm_medium), safe(d.utm_campaign), safe(d.utm_term),
      d.recaptchaScore, d.ipHash, safe(d.userAgent), 'New'
    ]);

    const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
    MailApp.sendEmail({
      to: props.getProperty('NOTIFY_TO'),
      subject: 'New repair enquiry ' + leadId + ' – ' + d.name + ' (' + (d.locality || 'n/a') + ')',
      htmlBody:
        '<p><b>' + esc(d.name) + '</b> – <a href="tel:' + esc(d.mobile) + '">' + esc(d.mobile) + '</a></p>' +
        '<p>' + esc(d.brand) + ' ' + esc(d.machineType) + ' · ' + esc(d.locality) + '</p>' +
        '<p>' + esc(d.problem) + '</p>' +
        '<p>' + esc(d.address) + '</p>' +
        '<p>Preferred: ' + esc(d.preferredDate) + ' ' + esc(d.preferredSlot) + '</p>' +
        '<p style="color:#64748b">Source: ' + esc(d.source) + ' · ' + esc(d.utm_campaign) + '</p>'
    });
    return out({ ok: true, leadId: leadId });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
