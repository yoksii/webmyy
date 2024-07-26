// script.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



function showContent(contentId) {
    // 모든 콘텐츠를 숨깁니다.
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 클릭된 콘텐츠를 표시합니다.
    const contentToShow = document.getElementById(`content-${contentId}`);
    if (contentToShow) {
        contentToShow.classList.add('active');
    }
}
