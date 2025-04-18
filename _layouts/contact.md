---
layout: page
title: 聯繫我
description: 有問題嗎？我很樂意回答。
background: '/img/bg-contact.jpg'
---

<p>想要聯繫我？填寫下面的表單，我會盡快回覆你！</p>
<form name="sentMessage" id="contactForm" novalidate>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>姓名</label>
      <input type="text" class="form-control" placeholder="姓名" id="name" required data-validation-required-message="請輸入你的姓名。">
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>電子郵件</label>
      <input type="email" class="form-control" placeholder="電子郵件" id="email" required data-validation-required-message="請輸入你的電子郵件地址。">
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>電話號碼</label>
      <input type="tel" class="form-control" placeholder="電話號碼" id="phone" required data-validation-required-message="請輸入你的電話號碼。">
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>留言</label>
      <textarea rows="5" class="form-control" placeholder="留言" id="message" required data-validation-required-message="請輸入你的留言。"></textarea>
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <br>
  <div id="success"></div>
  <button type="submit" class="btn btn-primary" id="sendMessageButton">發送</button>
</form>
