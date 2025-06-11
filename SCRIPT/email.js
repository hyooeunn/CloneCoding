const languageData = {
  ko: {
    emailFind: "이메일 찾기",
    text: "전화번호 또는 복구 이메일을 입력하세요.",
    placeholder: "전화번호 또는 이메일",
    next: "다음",
    help: "도움말",
    alone: "개인정보처리방침",
    ToU: "약관"
  },

  en: {
    emailFind: "Find your email",
    text: "Enter your phone number or recovery email",
    placeholder: "Phone number or email",
    next: "Next",
    help: "Help",
    alone: "Privacy",
    ToU: "Terms"
  },

  ja: {
    emailFind: "メールアドレスを探す",
    text: "電話番号または再設定用のメールアドレスを入力してください",
    placeholder: "電話番号またはメールアドレス",
    next: "次へ",
    help: "ヘルプ",
    alone: "プライバシー",
    ToU: "規約"
  }

};

const select = document.getElementById('language-box');
const emailFindText = document.getElementById('emailFind');
const textText = document.getElementById('text');
const emailInput = document.querySelector('.email');
const nextText = document.getElementById('next');
const helpBtn = document.getElementById('help');
const aloneBtn = document.getElementById('alone');
const ToUBtn = document.getElementById('ToU');

select.addEventListener('change', function () {
  const selectedLang = this.value;
  emailFindText.textContent = languageData[selectedLang].emailFind;
  textText.textContent = languageData[selectedLang].text;
  emailInput.placeholder = languageData[selectedLang].placeholder;
  nextText.textContent = languageData[selectedLang].next;
  helpBtn.value = languageData[selectedLang].help;
  aloneBtn.value = languageData[selectedLang].alone;
  ToUBtn.value = languageData[selectedLang].ToU;
});