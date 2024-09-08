import { closeAllMenues, getElement, showDropBlock, fadeIn, fadeOut, $, $$, $body, $html } from "./utils.js";

const $mobileSize = 1024;

const activateMenu = (deviceType, deviceSize) => {
    const menu = getElement('.main_menu');
    const headerCallBack = getElement('.header .call_block');
    const headerDropBtn = getElement('.header .actions_block');
    let openedSubs, menuDelayTime = null;

    const burgerBtn = $('.menu_btn');

    const creatSubContent = () => {
        const pageLg = $html.hasAttribute('lang') ? $html.getAttribute('lang') : 'en';

        if (deviceType) {
            $$('.submenu_btn').forEach((item) => {
                if (item.hasAttribute('href') && item.getAttribute('href').length > 3) {
                    const itemHref = item.getAttribute('href');
                    const submenuList = item.closest('li').querySelector('.submenu_list');
                }
            })
        }
        let i = 1;
        $$('.main_menu > li > .submenu_list').forEach((submenu) => {
            submenu.closest('li').insertAdjacentHTML('beforeend', '<div class="submenu_block"><span class="menu_close icon_close"></span></div>');
            const submenuBlock = submenu.closest('li').querySelector('.submenu_block');
            submenuBlock.append(submenu);
            if (submenu.querySelectorAll('.submenu_list').length > 0) {
                submenuBlock.insertAdjacentHTML('beforeend', '<div class="submenu_block"></div>');
            }
            const sublevelBlock = submenuBlock.querySelector('.submenu_block');
            submenu.querySelectorAll(':scope > li').forEach((sublevel) => {
                sublevel.querySelector('a').setAttribute('data-id', `sub_${i}`);
                if (sublevel.querySelector('.submenu_list')) {
                    sublevel.querySelector('.submenu_list').setAttribute('data-id', `sub_${i}`);
                    sublevelBlock.append(sublevel.querySelector('.submenu_list'));
                }

                if (sublevel.querySelector('a').hasAttribute('data-image')) {
                    const image = document.createElement('img');
                    image.src = sublevel.querySelector('a').getAttribute('data-image');
                    image.setAttribute('data-id', `sub_${i}`);
                    image.setAttribute('alt', sublevel.querySelector('a').innerHTML);
                    submenuBlock.querySelector('.category_image').append(image);
                }
                i++;
            })
        })
    }

    creatSubContent();

    const closeOpenedSubs = ($sub) => {
        for (let i = 0; i < $sub.length; i++) {
            $sub[i].classList.remove('opened');
            if ($sub[i].querySelectorAll('.submenu_list li.selected').length > 0) {
                $sub[i].querySelector('.submenu_list li.selected').classList.remove('selected');
            };
            if ($sub[i].querySelectorAll('.submenu_list.showed').length > 0) {
                $sub[i].querySelector('.submenu_list.showed').classList.remove('showed');
            };
        }
    }

    const closeSubWithBtn = (e) => {
        if (e.target.classList.contains('menu_close')) {
            if (window.innerWidth < deviceSize) {
                $('li.opened .menu_close span:last-child').remove();
            }
            if (window.innerWidth < deviceSize && $$('.submenu_list.showed').length > 0) {
                $('.submenu_list.showed').classList.remove('showed');
            } else {
                closeOpenedSubs(menu.querySelectorAll('.opened'));
            }
        }
    }

    const mouseLeaveItem = (e) => {
        let current = e.target;
        if (!deviceType && current.parentNode.querySelectorAll('.hovered').length > 0 && !current.classList.contains('hovered')) {
            for (let i = 0; i < current.parentNode.querySelectorAll('.hovered').length; i++) {
                current.parentNode.querySelectorAll('.hovered')[i].classList.remove('hovered');
            }
        }
    }

    const togglemobileMenu = () => {
        if ($body.classList.contains('menu_opened')) {
            $body.classList.remove('menu_opened');
        } else {
            openedSubs = menu.querySelectorAll('.opened').length > 0 ? menu.querySelectorAll('.opened') : null;
            if (openedSubs) {
                $('.main_menu li.opened .menu_close').innerHTML = ' ';
                closeOpenedSubs(openedSubs);
                openedSubs = null;
                if ($$('.submenu_list.showed').length > 0) {
                    $('.submenu_list.showed').classList.remove('showed');
                };
            }
            $('.submenu_list').scrollTo({ top: 0 });
            $body.classList.add('menu_opened');
        }
    };

    const toggleSearch = (evt) => {
        if (!$('.search_block').classList.contains('opened')) {
            closeAllMenues(evt);
            evt.stopPropagation();
            $('.search_block').classList.add('opened');
            $('.search_form input').focus();
            if ($body.classList.contains('menu_opened')) {
                $body.classList.remove('menu_opened');
            }
        }
    }

    const openSubWithClick = (evt) => {
        if (evt.target.classList.contains('submenu_btn')) {
            if (evt.target.classList.contains('submenu_btn')) {
                evt.preventDefault();
            }
            const subBtn = evt.target;
            const subParent = subBtn.closest('li');
            const parentList = subBtn.closest('ul');

            if (deviceType && window.innerWidth > deviceSize) {
                evt.stopPropagation();
                if (subBtn.closest('ul').classList.contains('main_menu')) {
                    if (subParent.classList.contains('opened')) {
                        openedSubs = parentList.querySelectorAll('.opened').length > 0 ? parentList.querySelectorAll('.opened') : null;
                        if (openedSubs) {
                            closeOpenedSubs(openedSubs);
                        }
                        subParent.classList.remove('opened');
                    } else {
                        openedSubs = parentList.querySelectorAll('.opened').length > 0 ? parentList.querySelectorAll('.opened') : null;
                        if (openedSubs) {
                            closeOpenedSubs(openedSubs);
                        }
                        subParent.classList.add('opened');
                        const firstSubItem = subBtn.nextElementSibling.querySelectorAll('li')[0];
                        const itemKey = firstSubItem.querySelector('a').getAttribute('data-id');
                        firstSubItem.classList.add('selected');
                        if ($$(`img[data-id="${itemKey}"]`).length > 0) {
                            $(`img[data-id="${itemKey}"]`).classList.add('active');
                        };
                        if ($$(`.submenu_list[data-id="${itemKey}"]`).length > 0) {
                            $(`.submenu_list[data-id="${itemKey}"]`).classList.add('showed');
                        };
                    }
                } else {
                    if (subBtn.hasAttribute('data-id') && !subParent.classList.contains('opened')) {
                        if (parentList.querySelectorAll('.opened').length > 0) {
                            parentList.querySelector('.opened').classList.remove('opened');
                        };
                        if ($$('.submenu_list li.selected').length > 0) {
                            $('.submenu_list li.selected').classList.remove('selected');
                        };
                        if ($$('.submenu_list.showed').length > 0) {
                            $('.submenu_list.showed').classList.remove('showed');
                        };
                        if ($$('.category_image img.active').length > 0) {
                            $('.category_image img.active').classList.remove('active');
                        };

                        subParent.classList.add('opened');
                        const itemKey = subBtn.getAttribute('data-id');

                        if ($$(`img[data-id="${itemKey}"]`).length > 0) {
                            $(`img[data-id="${itemKey}"]`).classList.add('active');
                        };
                        if ($$(`.submenu_list[data-id="${itemKey}"]`).length > 0) {
                            $(`.submenu_list[data-id="${itemKey}"]`).classList.add('showed');
                        };
                    }
                }
            } else if (window.innerWidth < deviceSize) {
                if (!subBtn.hasAttribute('data-id')) {
                    subParent.classList.add('opened');
                } else {
                    const itemKey = subBtn.getAttribute('data-id');
                    $(`.submenu_list[data-id="${itemKey}"]`).classList.add('showed');
                    $(`.submenu_list[data-id="${itemKey}"]`).scrollTo({ top: 0 })
                }

                let navEl = document.createElement('span');
                navEl.innerHTML = subBtn.innerHTML;
                $('li.opened .menu_close').append(navEl)
            }
        }
    }

    const openSubWithHover = (evt) => {
        if (evt.target.classList.contains('submenu_btn') || evt.target.tagName == 'A' && evt.target.hasAttribute('data-id')) {
            if (!deviceType && window.innerWidth > deviceSize) {
                if (menuDelayTime) {
                    clearTimeout(menuDelayTime);
                }

                let subBtn = evt.target;
                let subParent = subBtn.closest('li');
                let subParentList = subParent.closest('ul');
                if (subParentList.querySelectorAll('.opened').length > 0 && !subParent.classList.contains('opened')) {
                    closeOpenedSubs(subParentList.querySelectorAll('.opened'))
                }
                subParent.classList.add('hovered');
                menuDelayTime = setTimeout(() => {
                    if (subParent.classList.contains('hovered')) {
                        subParent.classList.add('opened');
                        if (subBtn.closest('ul').classList.contains('main_menu') && subParent.querySelectorAll('.opened').length < 1) {
                            const firstSubItem = subBtn.nextElementSibling.querySelectorAll('li')[0];
                            const itemKey = firstSubItem.querySelector('a').getAttribute('data-id');
                            firstSubItem.classList.add('selected');
                            if ($$(`img[data-id="${itemKey}"]`).length > 0) {
                                $(`img[data-id="${itemKey}"]`).classList.add('active');
                            };
                            if ($$(`.submenu_list[data-id="${itemKey}"]`).length > 0) {
                                $(`.submenu_list[data-id="${itemKey}"]`).classList.add('showed');
                            };
                        } else {
                            if (subBtn.hasAttribute('data-id')) {
                                const itemKey = subBtn.getAttribute('data-id');
                                if ($$('.submenu_list li.selected').length > 0) {
                                    $('.submenu_list li.selected').classList.remove('selected');
                                };
                                if ($$('.submenu_list.showed').length > 0) {
                                    $('.submenu_list.showed').classList.remove('showed');
                                };
                                if ($$('.category_image img.active').length > 0) {
                                    $('.category_image img.active').classList.remove('active');
                                };

                                if ($$(`img[data-id="${itemKey}"]`).length > 0) {
                                    $(`img[data-id="${itemKey}"]`).classList.add('active');
                                };
                                if ($$(`.submenu_list[data-id="${itemKey}"]`).length > 0) {
                                    $(`.submenu_list[data-id="${itemKey}"]`).classList.add('showed');
                                };
                            }
                        }
                    }
                }, 300)
            }
        }
    }

    const closeAllSubs = () => {
        if (!deviceType && deviceSize > $mobileSize) {
            if (menu.querySelectorAll('.hovered').length > 0) {
                for (let i = 0; i < menu.querySelectorAll('.hovered').length; i++) {
                    menu.querySelectorAll('.hovered')[i].classList.remove('hovered');
                }
            }
            ;
            if (menu.querySelectorAll('.opened').length > 0) {
                closeOpenedSubs(menu.querySelectorAll('.opened'));
            }
        }
    }

    const handleClickOutside = (e) => {
        if (!menu.contains(e.target)) {
            closeOpenedSubs(menu.querySelectorAll('.opened'));
            if ($$('.submenu_list.showed').length > 0) {
                $('.submenu_list.showed').classList.remove('showed');
            }
        }
    }

    document.addEventListener('click', handleClickOutside);

    burgerBtn.addEventListener('click', togglemobileMenu);
    menu.addEventListener('click', openSubWithClick);
    menu.addEventListener('click', closeSubWithBtn);
    menu.addEventListener('mouseover', openSubWithHover);
    menu.addEventListener('mouseout', mouseLeaveItem);
    menu.addEventListener('mouseleave', closeAllSubs);

    headerDropBtn.addEventListener('click', showDropBlock);
    headerCallBack.addEventListener('click', showDropBlock);
    $('.search_toggle').addEventListener('click', toggleSearch);
}

export {
    activateMenu
}
