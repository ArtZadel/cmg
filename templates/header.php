<div class="header">
    <div class="header_top">
        <div class="main_logo">
            <?php if (strpos($_SERVER['SCRIPT_FILENAME'], 'index.php') == false): ?> <a href="index.php">Company
                name<?php endif ?>
                <img class="web_logo" src="css/images/main_logo.svg" alt="" title="" width="115" height="26"/>
                <img class="mobile_logo" src="css/images/mobile_logo.svg" alt="" title="" width="115" height="26"/>
                <?php if (strpos($_SERVER['SCRIPT_FILENAME'], 'index.php') == false): ?> </a><?php endif ?>
        </div>
        <div class="center_block">
            <div class="search_block">
                <button class="search_toggle icon_search" aria-label="search toggle"></button>
                <form class="search_form">
                    <div class="search_field">
                        <input type="text" name="search" maxlength="200" autocomplete="off" placeholder="Որոնել..." aria-label="որոնել"/>
                    </div>
                    <button class="search_btn icon_search" type="submit" aria-label="որոնել"></button>
                </form>
            </div>
            <div class="top_action">
                <a href="" class="icon_avatar">Իմ Մեդգեն</a>
                <a href="" class="icon_cart">Զամբյուղ</a>
            </div>

        </div>
        <div class="actions_block">
            <div class="locations_block drop_block">
                <button class="drop_btn" aria-label="որտեղից գնել"><span>ք. Երևան</span></button>
                <div class="drop_inner">
                    <div class="drop_body">
                        <a href="" class="location_btn icon_arrow">ք.Աբովյան</a>
                    </div>
                </div>
            </div>
            <div class="lg_block drop_block">
                <button class="drop_btn icon_globe" aria-label="կայքի լեզու">Հայերեն</button>
                <div class="drop_inner">
                    <ul>
                        <li><a href="" class="icon_arrow">Русский</a></li>
                        <li><a href="" class="icon_arrow">English</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <div class="header_bottom">
        <div class="menu_block">
            <div class="menu_inner">
                <ul class="main_menu">
                    <li><a href="listing.php" class="submenu_btn">Ընկերության մասին</a>
                        <div class="submenu_list">
                            <ul>
                                <li>
                                    <a href="listing.php">
                                        <span>Մեր մասին</span>
                                        Մենք առաջ ենք մղում գենոմային գիտության ոլորտը
                                    </a>
                                </li>
                                <li>
                                    <a href="listing.php">
                                        <span>Բժշկական անձնակազմ</span>
                                        Մեր մասնագետների թիմը
                                    </a>
                                </li>
                                <li>
                                    <a href="listing.php">
                                        <span>Լիցենզիաներ և սերտիֆիկատներ</span>
                                        Մասնագիտական հավատարմագրեր
                                    </a>
                                </li>
                                <li>
                                    <a href="listing.php">
                                        <span>Գործունեության ոլորտ և կառուցվածք</span>
                                        Շրջանակ և կառուցվածք
                                    </a>
                                </li>
                                <li>
                                    <a href="listing.php">
                                        <span>Գործընկերներ</span>
                                        Համագործակցային գործընկերներ
                                    </a>
                                </li>
                                <li>
                                    <a href="listing.php">
                                        <span>Հեռախոսահամարներ և հասցեներ</span>
                                        Որտեղ գտնել մեզ
                                    </a>
                                </li>
                            </ul>
                            <span class="svg_menu">
                             <svg width="280" height="234" viewBox="0 0 265 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16344 0 16V218C0 226.837 7.16344 234 16 234H36C44.8366 234 52 226.837 52 218V16C52 7.16344 44.8366 0 36 0H16ZM69 0C60.1634 0 53 7.16344 53 16V218C53 226.837 60.1634 234 69 234H223C246.196 234 265 215.196 265 192V42C265 18.804 246.196 0 223 0H69Z" fill="url(#img1)"/>
                                 <pattern id="img1" patternUnits="userSpaceOnUse" width="280px" height="234px" x="0" y="0">
                                    <image href="images/menu_img.jpg" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"></image>
                                </pattern>
                            </svg>
                        </span>
                    </div>
                    </li>
                    <li><a href="listing.php" class="submenu_btn">Կրթություն և գիտություն</a>
                        <div class="submenu_list">
                            <ul>
                                <li>
                                    <a href="listing.php">
                                        <span>ԵՊԲՀ բժշկական գենետիկայի ամբիոն</span>
                                   Ծանոթացեք ԵՊՀ մեր թիմին
                                        <img src="images/Ellipse 5.png" class="img_menu" width="59" height="59" title="" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="listing.php">
                                        <span>Միջազգային գիտական նախագծեր</span>
                                        Մեր գլոբալ համագործակցությունները
                                        <img src="images/Ellipse 6.png" class="img_menu" width="59" height="59" title="" alt="" />

                                    </a>
                                </li>
                                <li>
                                    <a href="listing.php">
                                        <span>Գիտական հրապարակումներ</span>
                                        Բացահայտեք մեր գիտական ներդրումները
                                        <img src="images/Ellipse 7.png" class="img_menu" width="59" height="59" title="" alt="" />
                                    </a>
                                </li>
                            </ul>
                            <span class="svg_menu">
                            <svg width="350" height="262" viewBox="0 0 424 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16345 0 16V246C0 254.837 7.16344 262 16 262H36C44.8366 262 52 254.837 52 246V16C52 7.16344 44.8366 0 36 0H16ZM53 16C53 7.16345 60.1634 0 69 0H89C97.8366 0 105 7.16344 105 16V246C105 254.837 97.8366 262 89 262H69C60.1634 262 53 254.837 53 246V16ZM122 0C113.163 0 106 7.16345 106 16V246C106 254.837 113.163 262 122 262H142C150.837 262 158 254.837 158 246V16C158 7.16344 150.837 0 142 0H122ZM159 16C159 7.16345 166.163 0 175 0H195C203.837 0 211 7.16344 211 16V246C211 254.837 203.837 262 195 262H175C166.163 262 159 254.837 159 246V16ZM212 16C212 7.16345 219.163 0 228 0H382C405.196 0 424 18.804 424 42V220C424 243.196 405.196 262 382 262H228C219.163 262 212 254.837 212 246V16Z" fill="url(#img2)"/>
                                   <pattern id="img2" patternUnits="userSpaceOnUse" width="350px" height="262px" x="0" y="0">
                                    <image href="images/menu_img.jpg" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"></image>
                                 </pattern>
                            </svg>
                        </span>
                        </div>
                    </li>
                    <li>
                        <a href="listing.php" class="submenu_btn">Գնացուցակ</a>
                        <div class="submenu_list">
                            <ul>
                                <li>
                                    <a href="listing.php">
                                        <span>Գնացուցակ ք. Երևան</span>
                                        Գների մանրամասները
                                    </a>
                                </li>
                                <li>
                                    <a href="listing.php">
                                        <span>Գնացուցակ ք. Աբովյան</span>
                                        Գների մանրամասները
                                    </a>
                                </li>
                            </ul>
                            <span class="svg_menu">
                                <svg width="583" height="150" viewBox="0 0 583 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16345 0 16V134C0 142.837 7.16344 150 16 150H36C44.8366 150 52 142.837 52 134V16C52 7.16344 44.8366 0 36 0H16ZM53 16C53 7.16345 60.1634 0 69 0H89C97.8366 0 105 7.16344 105 16V134C105 142.837 97.8366 150 89 150H69C60.1634 150 53 142.837 53 134V16ZM122 0C113.163 0 106 7.16345 106 16V134C106 142.837 113.163 150 122 150H142C150.837 150 158 142.837 158 134V16C158 7.16344 150.837 0 142 0H122ZM159 16C159 7.16345 166.163 0 175 0H195C203.837 0 211 7.16344 211 16V134C211 142.837 203.837 150 195 150H175C166.163 150 159 142.837 159 134V16ZM228 0C219.163 0 212 7.16345 212 16V134C212 142.837 219.163 150 228 150H248C256.837 150 264 142.837 264 134V16C264 7.16344 256.837 0 248 0H228ZM265 16C265 7.16345 272.163 0 281 0H301C309.837 0 317 7.16344 317 16V134C317 142.837 309.837 150 301 150H281C272.163 150 265 142.837 265 134V16ZM334 0C325.163 0 318 7.16345 318 16V134C318 142.837 325.163 150 334 150H354C362.837 150 370 142.837 370 134V16C370 7.16344 362.837 0 354 0H334ZM387 0C378.163 0 371 7.16345 371 16V134C371 142.837 378.163 150 387 150H541C564.196 150 583 131.196 583 108V42C583 18.804 564.196 0 541 0H387Z" fill="url(#img3)"/>
                                   <pattern id="img3" patternUnits="userSpaceOnUse" width="424px" height="262px" x="0" y="0">
                                     <image href="images/menu_img.jpg" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"></image>
                                    </pattern>
                                </svg>
                        </span>
                        </div>
                    </li>
                </ul>
                <ul class="secondary_menu">
                    <li><a href="history.php">Լաբորատոր հետազոտություններ</a></li>
                    <li><a href="achievements.php">Կաբինետային ծառայություններ</a></li>
                    <li><a href="news_listing.php">Տնայց</a></li>
                </ul>
            </div>
        </div>

        <div class="drop_block call_block">
            <button class="drop_btn icon_phone" aria-label="Զանգեր">Զանգեր</button>
            <div class="drop_inner">
                <ul>
                    <li>
                        <a href="" class="phones_block icon_phone">
                            +(374) 015 800 800
                        </a>
                    </li>
                    <li>
                        <a href="" class="phones_block icon_phone">
                            Պատվիրել հետադարձ զանգ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <button class="menu_btn" aria-label="mobile menu">
            <span></span>
        </button>
    </div>
</div>




