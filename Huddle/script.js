function showMsg(e) {
  e.preventDefault();
  if (e.target[0].value === '') {
    return;
  }
  const msg = document.getElementById('msg_success');
  const btn_submit = document.getElementById('btn_submit');
  msg.style.display = 'block';
  btn_submit.style.cursor = 'not-allowed';
  btn_submit.disabled = true;
  setInterval(() => {
    msg.style.display = 'none';
    btn_submit.style.cursor = 'pointer';
    btn_submit.disabled = false;
    e.target[0].value = '';
  }, 2000);
}
