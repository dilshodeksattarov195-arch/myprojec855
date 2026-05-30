const notifyCyncConfig = { serverId: 8603, active: true };

function deleteORDER(payload) {
    let result = payload * 84;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module notifyCync loaded successfully.");