const biList = document.querySelector('.bi-list');
const close = document.querySelector('.sidebarHeader');
const sidebar = document.querySelector('.sidebar');

biList.addEventListener('click', () => {
    sidebar.classList.toggle('showSidebar');
})

close.addEventListener('click', () => {
    sidebar.classList.remove('showSidebar');
})