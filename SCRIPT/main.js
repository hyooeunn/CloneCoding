document.querySelector(".make-button").addEventListener("click", function() {
  document.querySelector(".make-content").style.display = 
    (document.querySelector(".make-content").style.display === 'none') ? 'block' : 'none';
});

const languageData = {
  ko: {
    title: "로그인 - Google 계정",
    login: "로그인",
    description: "Google 계정으로 로그인합니다. 이 계정은 브라우저의 다른 Google 앱에서 사용할 수 있습니다.",
    placeholder: "이메일 또는 휴대전화",
    emailForgot: '<a href="../EMAIL/email.html">이메일을 잊으셨나요?</a>',
    text: "내 컴퓨터가 아닌가요? 게스트 모드를 사용하여 비공개로 로그인하세요.",
    hyper: '<a href="https://support.google.com/chrome/answer/6130773?hl=ko"> 게스트 모드 사용 방법 자세히 알아보기</a>',
    next: "다음",
    make: "계정 만들기",
    help: "도움말",
    alone: "개인정보처리방침",
    ToU: "약관"
  },

  en: {
    title: "Sign in - Google Accounts",
    login: "Sign in",
    description: "with your Google Account. This account will be available to other Google apps in the browser.",
    placeholder: "Email or phone",
    emailForgot: '<a href="../EMAIL/email.html">Forgot email?',
    text: "Not your computer? Use Guest mode to sign in privately.",
    hyper: '<a href="https://support.google.com/chrome/answer/6130773?hl=en"> Learn more about using Guest mode</a>',
    next: "Next",
    make: "Create account",
    help: "Help",
    alone: "Privacy",
    ToU: "Terms"
  },

  ja: {
    title: "ログイン - Google アカウント",
    login: "ログイン",
    description: "Google アカウントでログインします。このアカウントは、ブラウザ内の他の Google アプリで利用できます。",
    placeholder: "メールアドレスまたは電話番号",
    emailForgot: '<a href="../EMAIL/email.html">メールアドレスを忘れた場合',
    text: "ご自分のパソコンでない場合は、ゲストモードを使用して非公開でログインしてください。",
    hyper: '<a href="https://support.google.com/chrome/answer/6130773?hl=ja">ゲストモードの使い方の詳細</a>',
    next: "次へ",
    make: "アカウントを作成",
    help: "ヘルプ",
    alone: "プライバシー",
    ToU: "規約"
  }

};

const select = document.getElementById('language-box');
const loginText = document.getElementById('login');
const descriptionText = document.getElementById('description');
const emailInput = document.querySelector('.email');
const emailForgotText = document.getElementById('emailForgot');
const textText = document.getElementById('text');
const hyperText = document.querySelector('.hyper');
const nextText = document.getElementById('next');
const makeText = document.getElementById('make');
const helpBtn = document.getElementById('help');
const aloneBtn = document.getElementById('alone');
const ToUBtn = document.getElementById('ToU');

select.addEventListener('change', function () {
  const selectedLang = this.value;
  document.title = languageData[selectedLang].title;
  loginText.textContent = languageData[selectedLang].login;
  descriptionText.textContent = languageData[selectedLang].description;
  emailInput.placeholder = languageData[selectedLang].placeholder;
  emailForgotText.innerHTML = languageData[selectedLang].emailForgot;
  textText.textContent = languageData[selectedLang].text;
  hyperText.innerHTML = languageData[selectedLang].hyper;
  nextText.textContent = languageData[selectedLang].next;
  makeText.textContent = languageData[selectedLang].make;
  helpBtn.value = languageData[selectedLang].help;
  aloneBtn.value = languageData[selectedLang].alone;
  ToUBtn.value = languageData[selectedLang].ToU;
});