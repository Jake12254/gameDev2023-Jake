function chop() {
  document.getElementById('axe').style.display = 'block';
  setTimeout(function() {
    document.getElementById('axe').style.display = 'none';
    document.getElementById('tree').style.backgroundImage = 'url("stump.png")';
  }, 1000);
}
