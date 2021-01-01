export let updateObjectInArray = (items, itemId, objectName, object) => {
    return items.map(u => {
        if (u[objectName] === itemId) {
            return {...u, ...object};
        }
        return u;
    })
}