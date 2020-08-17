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
firebase.analytics();


var database = firebase.database();
let room = "chat_room";
const send = document.getElementById("send");
const name = document.getElementById("name");
const message = document.getElementById("message");
const output = document.getElementById("output");

//送信処理
send.addEventListener('click', function () {
	var now = new Date();
	database.ref(room).push({
		name: name.value,
		message: message.value,
		date: now.getFullYear() + '年' + now.getMonth() + 1 + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分'
	});
	message.value = "";
	name.value = "";
});

//受信処理
database.ref(room).on("child_added", function (data) {
	const v = data.val();
	const k = data.key;
	let str = "";
	str += '<div class="name">名前：' + v.name + '</div>';
	str += '<div class="text">日時：' + v.date + '</div>';
	str += '<div class="text">メッセージ：' + v.message + '</div><hr>';
	output.innerHTML += str;
});