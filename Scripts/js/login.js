// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAEsag1GH4FkhudK62m1nCN6C9N-B5g_HE",
	authDomain: "clark-bf1df.firebaseapp.com",
	databaseURL: "https://clark-bf1df.firebaseio.com",
	projectId: "clark-bf1df",
	storageBucket: "clark-bf1df.appspot.com",
	messagingSenderId: "855228051818",
	appId: "1:855228051818:web:3338c5713d38c942737513",
	measurementId: "G-G21RR8RQNZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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