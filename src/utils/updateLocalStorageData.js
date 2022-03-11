export default function updateLocalStorageData(data) {
    const newData = JSON.parse(localStorage.getItem('users'));
    const index = newData.findIndex(d => d.id === data.id);
    newData[index] = data;
    localStorage.setItem('users', JSON.stringify(newData));
}