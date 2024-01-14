const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.header__lower');

if (burgerMenu) {
    burgerMenu.addEventListener('click', function () {
        if (menu) {
            menu.classList.toggle('show');
        }
    });
}

const search = document.querySelector('.header__search--icon');
const searchInput = document.querySelector('.header__search--mobile');

if (search) {
    search.addEventListener('click', function () {
        if (searchInput) {
            searchInput.classList.toggle('show');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const selects = document.querySelectorAll('.filter__select');

    selects.forEach((select) => {
        const header = select.querySelector('.select__header');
        const options = select.querySelector('.select__options');

        if (header && options) {
            header.addEventListener('click', function () {
                options.style.display =
                    options.style.display === 'block' ? 'none' : 'block';
            });

            options.addEventListener('click', function (e) {
                if (e.target.tagName === 'LI') {
                    const selectedValue = e.target.getAttribute('data-value');
                    header.textContent = e.target.textContent;
                    options.style.display = 'none';
                    console.log(`Selected value: ${selectedValue}`);
                }
            });
        }
    });

    window.addEventListener('click', function (e) {
        if (selects) {
            selects.forEach((select) => {
                if (!select.contains(e.target)) {
                    select.querySelector('.select__options').style.display =
                        'none';
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.querySelector('.modal__open-button');
    const closeModalBtn = document.querySelector('.modal__close-button');
    const modalOverlay = document.querySelector('.modal__overlay');

    openModalBtn.addEventListener('click', function () {
        modalOverlay.classList.add('active');
    });

    closeModalBtn.addEventListener('click', function () {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', function (event) {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
});
