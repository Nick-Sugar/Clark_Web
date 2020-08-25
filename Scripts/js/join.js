// Get a reference to the database service
var database = firebase.database();

let databaseRoot = 'clark-bf1df/Rooms';
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("join").onclick = function ()
{
    if (document.getElementById('roomname').value == "") {
        alert('ƒ‹[ƒ€–¼‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢');
    }
    else
    {
        roomcheck(document.getElementById('roomname').value == "");
    }
};
function roomcheck(roomname)
{
    let key = database.ref(databaseRoot + roomname + '/_join_').push({ joined: 'unknown' }).key

    clientId = 'member_' + key;

    database.ref(databaseRoot + room + '/_join_/' + key).update({ joined: clientId });
    }
});