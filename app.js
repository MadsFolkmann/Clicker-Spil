

// Bolde forsvinder

function forsvind() {
  document.querySelector("#bold_container").classList.add("paused");
  document.querySelector("#bold_sprite").classList.add("zoom_out");
}

document.querySelector("#bold_sprite").addEventListener("mousedown", forsvind);

function forsvind2() {
  document.querySelector("#bold2_container").classList.add("paused");
  document.querySelector("#bold2_sprite").classList.add("zoom_out");
}

document.querySelector("#bold2_sprite").addEventListener("mousedown", forsvind2);

function forsvind3() {
  document.querySelector("#bold3_container").classList.add("paused");
  document.querySelector("#bold3_sprite").classList.add("zoom_out");
}

document.querySelector("#bold3_sprite").addEventListener("mousedown", forsvind3);

function forsvind4() {
  document.querySelector("#guld-bold_container").classList.add("paused");
  document.querySelector("#guld-bold_sprite").classList.add("zoom_out");
}

document.querySelector("#guld-bold_sprite").addEventListener("mousedown", forsvind4);


