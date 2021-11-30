function toggleMobileMenu (e) {
  const navMobile = $("nav.mobile");
  console.log("Oi");
  
  navMobile.toggleClass("invisible");
  navMobile.toggleClass("active-menu");
 
  return false;
}

function hideMobileMenu() {
  const navMobile = $("nav.mobile");
  navMobile.removeClass("active-menu");
  navMobile.addClass("invisible");
}

$(document).ready(() => {
  $("nav button").bind("click", toggleMobileMenu);
  $("body").bind("click", hideMobileMenu);
})
