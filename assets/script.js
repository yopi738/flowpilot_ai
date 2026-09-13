'use strict';
// CTA settings: set a real URL here only when replacing this concept with a live service.
const CTA_URLS = { free: '', pro: '', team: '', signin: '' };
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'メニューを開く'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く'); });
navigation.querySelectorAll('a,button').forEach(el => el.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width:951px)').addEventListener('change', closeMenu);
const dialog = document.querySelector('#info-dialog');
const modalContent = {
 free: ['Freeプランを体験する', 'FlowPilot AIは、ポートフォリオ用の架空サービスです。実際のアカウント登録や課金は行われません。\nダッシュボードのタスク完了操作や、画面切り替えをお試しください。'],
 pro: ['Proプランのご案内', '月額¥980はコンセプト上の料金設定です。AI提案、カレンダー連携、週次レビューなどを想定しています。\n実際の契約や決済は行われません。画面デモをお楽しみください。'],
 team: ['Teamプランのご案内', '1人あたり月額¥1,980はコンセプト上の料金設定です。チームの担当や進捗を共有する機能を想定しています。\n実際の登録や招待は行われません。'],
 signin: ['サンプルワークスペースへ', 'このサイトには実際のログイン機能はありません。アカウントやパスワードの入力なしで、サンプルのダッシュボードをご覧いただけます。'],
 privacy: ['プライバシーについて', 'このサイトは架空サービスの紹介作品です。会員登録、個人情報の入力フォーム、アクセス解析、Cookieによる追跡は実装していません。\nデモの操作状態はページ内のみで保持され、再読み込みするとリセットされます。公開先のホスティングサービスがアクセスログを記録する場合があります。'],
 terms: ['このサイトのご利用について', 'FlowPilot AIはConcept Work / Sample Workです。記載されたサービス、料金、機能、画面上の人物・プロジェクトは架空の設定です。\n実際の業務管理サービスの提供や、契約・課金は行いません。AIの提案と表示データはあらかじめ用意したサンプルです。']
};
document.querySelectorAll('[data-modal]').forEach(button => button.addEventListener('click', () => {
 const key = button.dataset.modal;
 if (CTA_URLS[key]) { window.location.assign(CTA_URLS[key]); return; }
 const [title, description] = modalContent[key];
 document.querySelector('#dialog-title').textContent = title;
 document.querySelector('#dialog-description').textContent = description;
 document.querySelector('#dialog-demo').hidden = ['privacy','terms'].includes(key);
 dialog.showModal(); document.body.classList.add('modal-open');
}));
function closeDialog() { dialog.close(); }
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
document.querySelector('#dialog-demo').addEventListener('click', () => { showView('today'); closeDialog(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDialog(); });
const taskInputs = [...document.querySelectorAll('.demo-task input')];
taskInputs.forEach(input => input.addEventListener('change', () => { const count = taskInputs.filter(item => item.checked).length; document.querySelector('#daily-progress').value = count; document.querySelector('#progress-text').textContent = `${Math.round(count / 3 * 100)}%`; document.querySelector('#task-count').textContent = `${count} / 3 完了`; }));
const views = {
 inbox: ['Inbox', '思いついたことを、まずはここへ。', [['来月のコンテンツ案を考える','未整理 · コンテンツ制作'],['請求書の内容を確認する','未整理 · クライアント業務']]],
 projects: ['Projects','進めている仕事を、プロジェクトごとに。', [['Webサイトリニューアル','デザインレビュー中 · 担当 Yuki / Ken'],['コンテンツ制作','記事構成を確認中 · 担当 Mika'],['チーム運営','週次レポート作成中 · 担当 Yuki']]],
 calendar: ['Calendar','6月15日（月）のサンプルスケジュール', [['09:00–10:30','集中タイム / 企画書作成'],['11:00–11:30','チームミーティング'],['12:00–13:00','お昼休み'],['14:00–15:00','デザインレビュー']]],
 assistant: ['AI Assistant','今日の予定をもとに、進め方を提案します。', [['✦ まずは企画書に集中しましょう。','午前中に90分確保すると、午後のデザインレビューに備えられます。'],['✦ 大きなタスクは、小さく分けて。','「構成を決める → 要点を書く → 内容を確認する」の3つに分けるのがおすすめです。']]]
};
function showView(name) {
 document.querySelectorAll('[data-view]').forEach(button => { const selected = button.dataset.view === name; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
 document.querySelector('#today-view').hidden = name !== 'today'; const alternate = document.querySelector('#alternate-view'); alternate.hidden = name === 'today';
 document.querySelector('#breadcrumb').textContent = name === 'today' ? 'Today' : views[name][0];
 if (name !== 'today') { const [title, description, cards] = views[name]; alternate.replaceChildren(); const heading = document.createElement('h3'); heading.textContent = title; const intro = document.createElement('p'); intro.textContent = description; alternate.append(heading, intro); cards.forEach(([title, text]) => { const card = document.createElement('div'); card.className = 'alternate-card'; const strong = document.createElement('strong'); strong.textContent = title; const small = document.createElement('small'); small.textContent = text; card.append(strong,small); alternate.append(card); }); }
}
document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
showView('today');
document.querySelector('#apply-plan').addEventListener('click', event => { const applied = event.currentTarget.getAttribute('aria-pressed') !== 'true'; event.currentTarget.setAttribute('aria-pressed', String(applied)); event.currentTarget.textContent = applied ? '✓ プランを反映しました（デモ）' : 'このプランを試す ＋'; document.querySelector('#plan-status').textContent = applied ? '5つの作業をプランに反映したサンプル状態です。もう一度押すと元に戻ります。' : '提案は、確認するまで反映されません。'; });
