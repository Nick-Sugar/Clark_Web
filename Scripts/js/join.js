let databaseRoot = 'clark-bf1df/';
    let key = database.ref(databaseRoot + room + '/_join_').push({ joined : 'unknown'}).key
    clientId = 'member_' + key;
    database.ref(databaseRoot + room + '/_join_/' + key).update({ joined : clientId});
