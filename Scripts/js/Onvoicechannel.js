//もしボイスチャンネルに接続しようとしたら
//IDをとってきてルームを作成
let RoomName = "";

if (!RoomName == null)
{
    database.ref("Rooms/" + RoomName).push({ joined: 'unknown' }).key
}