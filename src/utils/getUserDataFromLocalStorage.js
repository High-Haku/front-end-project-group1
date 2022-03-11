export default function getUsedDataFromLocalStorage(id) {
    const users = JSON.parse(localStorage.getItem('users'));
    return users.find(u => u.id == id)
}