// Ubah Sesuai keperluan bae;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");
var bodyContent = document.getElementById("main");

function toggleSidebar() {
  if (!sidebarOpen) {
    bodyContent.classList.add("blur");
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    bodyContent.classList.remove("blur");
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}