import './styles/styles.scss';

document.querySelector('.contact form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-status').textContent =
    'Đây là biểu mẫu minh họa. Thông tin của bạn chưa được gửi.';
});
