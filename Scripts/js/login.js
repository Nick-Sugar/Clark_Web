var uiConfig = {
    // ログイン完了時のリダイレクト先
    signInSuccessUrl: 'index.html',

    // 利用する認証機能
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],

    // 利用規約のURL(任意で設定)
    tosUrl: 'terms.html',
    // プライバシーポリシーのURL(任意で設定)
    privacyPolicyUrl: 'privacy.html'
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

const logoutBtn = document.getElementById('logout')

logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    // 成功
  }).catch(err => {
    // 失敗
  })
})