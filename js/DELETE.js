const deleteBtn = document.getElementById('deleteBtn');
const result = document.getElementById('result');

deleteBtn.addEventListener('click', () => {
    const postId = document.getElementById('postId').value;

    if (!postId) {
        result.innerHTML = '<span style="color:red;">Введите ID поста</span>';
        return;
    }

    result.innerHTML = 'Отправляем запрос на удаление... ';

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                result.innerHTML = `<span style="color:green;">Пост с ID ${postId} успешно удалён </span>`;
            } else {
                throw new Error(`Ошибка: ${response.status}`);
            }
        })
        .catch(error => {
            result.innerHTML = `<span style="color:red;">${error.message}</span>`;
        });
});
