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