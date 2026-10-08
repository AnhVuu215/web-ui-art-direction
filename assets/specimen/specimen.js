const query = new URLSearchParams(location.search);
const themeToggle = document.querySelector('#theme-toggle');
function setTheme(dark) { document.body.classList.toggle('dark', dark); themeToggle.setAttribute('aria-pressed', String(dark)); themeToggle.textContent = dark ? 'Xem nền sáng' : 'Xem nền tối'; }
setTheme(query.get('theme') === 'dark');
themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));
const menu = document.querySelector('#menu-toggle');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); document.querySelector('#site-nav').classList.toggle('open', open); });
document.querySelector('#site-nav').addEventListener('keydown', event => { if (event.key === 'Escape') { menu.setAttribute('aria-expanded', 'false'); document.querySelector('#site-nav').classList.remove('open'); menu.focus(); } });
document.querySelectorAll('#site-nav a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); document.querySelector('#site-nav').classList.remove('open'); }));
const tabs = [...document.querySelectorAll('[role=tab]')];
function selectTab(tab) { tabs.forEach(item => { const selected = item === tab; item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1; document.getElementById(item.getAttribute('aria-controls')).hidden = !selected; }); }
tabs.forEach((tab, index) => { tab.addEventListener('click', () => selectTab(tab)); tab.addEventListener('keydown', event => { let next; if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length]; if (event.key === 'ArrowLeft') next = tabs[(index + tabs.length - 1) % tabs.length]; if (event.key === 'Home') next = tabs[0]; if (event.key === 'End') next = tabs.at(-1); if (next) { event.preventDefault(); selectTab(next); next.focus(); } }); });
const rows = [...document.querySelectorAll('tbody tr')];
const filter = document.querySelector('#filter');
filter.addEventListener('input', () => { const text = filter.value.toLocaleLowerCase('vi'); rows.forEach(row => { row.hidden = !row.dataset.name.includes(text); }); const empty = rows.every(row => row.hidden); document.querySelector('.table-scroll').hidden = empty; document.querySelector('#no-results').hidden = !empty; });
document.querySelector('#reset-filter').addEventListener('click', () => { filter.value = ''; filter.dispatchEvent(new Event('input')); filter.focus(); });
const checkboxes = [...document.querySelectorAll('tbody input[type=checkbox]')];
function showSelection() { const count = checkboxes.filter(input => input.checked).length; document.querySelector('#selection-status').textContent = count ? `Đã chọn ${count} tài liệu` : 'Chưa chọn tài liệu'; document.querySelector('#clear-selection').hidden = !count; }
checkboxes.forEach(input => input.addEventListener('change', showSelection));
document.querySelector('#clear-selection').addEventListener('click', () => { checkboxes.forEach(input => { input.checked = false; }); showSelection(); checkboxes[0].focus(); });
const dialog = document.querySelector('#editor');
const opener = document.querySelector('#open-editor');
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...dialog.querySelectorAll('button:not(:disabled), input:not(:disabled)')];
  const first = controls[0], last = controls.at(-1);
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
});
let attempts = 0;
opener.addEventListener('click', () => { attempts = 0; document.querySelector('#save-status').hidden = true; document.querySelector('#edit-name').value = document.querySelector('#project-title').textContent; dialog.showModal(); document.querySelector('#edit-name').focus(); });
for (const id of ['close-editor', 'cancel-editor']) document.getElementById(id).addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => opener.focus());
document.querySelector('#edit-form').addEventListener('submit', event => { event.preventDefault(); const field = document.querySelector('#edit-name'); if (!field.value.trim()) { field.setCustomValidity('Nhập tên dự án.'); field.reportValidity(); return; } attempts += 1; const status = document.querySelector('#save-status'); status.hidden = false; if (attempts === 1) { status.className = 'error feedback'; status.textContent = 'Lỗi mạng mô phỏng: chưa lưu được. Tên bạn nhập vẫn được giữ; nhấn “Lưu tên” để thử lại.'; } else { document.querySelector('#project-title').textContent = field.value.trim(); status.className = 'success feedback'; status.textContent = 'Đã lưu tên trong mẫu thử. Bạn có thể đóng hộp để tiếp tục.'; } });
document.querySelector('#edit-name').addEventListener('input', event => event.target.setCustomValidity(''));
if (query.get('dialog') === 'error') { opener.click(); document.querySelector('#edit-name').value = 'Những khoảng thở trong thành phố'; document.querySelector('#edit-form').requestSubmit(); }
