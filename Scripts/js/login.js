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
    // ���O�C���������̃��_�C���N�g��
    signInSuccessUrl: 'index.html',

    // ���p����F�؋@�\
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],

    // ���p�K���URL(�C�ӂŐݒ�)
    tosUrl: 'terms.html',
    // �v���C�o�V�[�|���V�[��URL(�C�ӂŐݒ�)
    privacyPolicyUrl: 'privacy.html'
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);