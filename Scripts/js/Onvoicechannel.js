//�����{�C�X�`�����l���ɐڑ����悤�Ƃ�����
//ID���Ƃ��Ă��ă��[�����쐬
let RoomName = "";

if (!RoomName == null)
{
    database.ref("Rooms/" + RoomName).push({ joined: 'unknown' }).key
}