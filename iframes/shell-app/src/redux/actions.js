
export const navigateTo = (view) => ({
    type: 'NAVIGATION',
    payload: view
});

export const storageUpdate = (update) => ({
    type: 'STORE_UPDATE',
    payload: update
});