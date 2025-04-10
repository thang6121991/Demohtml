    function gtag(a){ dataLayer.push(a); }

function onClick(linkUrl, label = '') {
  // Gửi event đến GA4
  gtag('event', 'click', {
    event_category: 'link',
    event_label: label || linkUrl,
    link_url: linkUrl
  });

  // Mở liên kết
  window.open(linkUrl, '_blank');

  // Ngăn chặn hành vi mặc định của thẻ <a>
  return false;
}
