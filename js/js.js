let $navMenuButton = document.querySelector('.navigation--button'),
    $headerNav = document.querySelector('.header-nav'),
    $headerNavWrap = document.querySelector('.header-nav-wrap'),
    $navBtnExit = document.querySelector('.nav-btn_exit');


$navMenuButton.addEventListener('click', hideShow);
$navBtnExit.addEventListener('click', hideShow);

function hideShow() {
    if ($headerNav.classList.contains('show')) {
        $headerNav.classList.remove('show');
    } else {
        $headerNav.classList.add('show');
    }
}