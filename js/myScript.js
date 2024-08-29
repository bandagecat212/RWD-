document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in-up');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var moreButtons = document.querySelectorAll('.more-btn');
    moreButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var card = button.closest('.card');
        var title = card.querySelector('.card-title').innerText;
        var imageSrc = card.querySelector('.card-img-top').src;
        var text = card.querySelector('.card-text').innerText;
  
        document.getElementById('exampleModalLabel').innerText = title;
        document.getElementById('modalImage').src = imageSrc;
        document.getElementById('modalText').innerText = text;
  
        // 顯示模態框
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
      });
    });
  });
  // JavaScript代碼，用於點擊導航欄中的連結後滑動至特定位置
document.addEventListener("DOMContentLoaded", function() {
  var scrollLinks = document.querySelectorAll('.navbar-nav a.nav-link');

  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', function(e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var offsetTop = targetElement.offsetTop - 100; // 調整滑動後的位置偏移量

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth' // 平滑滾動效果
        });
      }
    });
  });
});