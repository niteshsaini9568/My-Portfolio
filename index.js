document.querySelector(".menu").addEventListener("click",()=>{
    document.querySelector("header").style.display = "block";
    document.querySelector(".cross").style.display = "block";
  })

  document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector("header").style.display = "none";
  })

  let x=0;
  document.querySelector("#skill-next").addEventListener("click",()=>{
    if(x==0){
      document.querySelector(".technical-icons").style.display = "none";
      document.querySelector(".technical-content").style.display = "none";
      document.querySelector(".frontend-icons").style.display = "block";
      document.querySelector(".frontend-content").style.display = "block";
      document.querySelector("#skill-tc").firstChild = '<path fill="#b6ccfe" fill-rule="evenodd" d="M1 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1" clip-rule="evenodd"/>';
      document.querySelector("#skill-ft").firstChild = '<path fill="#3f4cb4" fill-rule="evenodd" d="M1 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1" clip-rule="evenodd"/>';
      x=1;
    }else if(x==1){
      document.querySelector(".frontend-icons").style.display = "none";
      document.querySelector(".frontend-content").style.display = "none";
      document.querySelector(".backend-icons").style.display = "block";
      document.querySelector(".backend-content").style.display = "block";
      console.log("backend");
      x=2;
    }else if(x==2){
      document.querySelector(".backend-icons").style.display = "none";
      document.querySelector(".backend-content").style.display = "none";
      document.querySelector(".technical-icons").style.display = "block";
      document.querySelector(".technical-content").style.display = "block";
      console.log("Technical");
      x=0;
    }    
  })

  let y = 0;
document.querySelector(".project-right").addEventListener("click", () => {
  if (y == 0) {
      document.querySelector(".project-1").style.display = "none";
      document.querySelector(".project-2").style.display = "block";
      y++;
  } else if (y == 1) {
      document.querySelector(".project-2").style.display = "none";
      document.querySelector(".project-3").style.display = "block";
      y++;
  } else if (y == 2) {
      document.querySelector(".project-3").style.display = "none";
      document.querySelector(".project-4").style.display = "block";
      y++;
  } else if (y == 3) {
      document.querySelector(".project-4").style.display = "none";
      document.querySelector(".project-5").style.display = "block";
      y++;
  } else if (y == 4) {
      document.querySelector(".project-5").style.display = "none";
      document.querySelector(".project-6").style.display = "block";
      y++;
  } else if (y == 5) {
      document.querySelector(".project-6").style.display = "none";
      document.querySelector(".project-7").style.display = "block";
      y++;
  } else if (y == 6) {
      document.querySelector(".project-7").style.display = "none";
      document.querySelector(".project-1").style.display = "block";
      y = 0;
  }
});

document.querySelector(".project-left").addEventListener("click", () => {
  if (y == 0) {
      document.querySelector(".project-1").style.display = "none";
      document.querySelector(".project-7").style.display = "block";
      y = 6;
  } else if (y == 1) {
      document.querySelector(".project-2").style.display = "none";
      document.querySelector(".project-1").style.display = "block";
      y--;
  } else if (y == 2) {
      document.querySelector(".project-3").style.display = "none";
      document.querySelector(".project-2").style.display = "block";
      y--;
  } else if (y == 3) {
      document.querySelector(".project-4").style.display = "none";
      document.querySelector(".project-3").style.display = "block";
      y--;
  } else if (y == 4) {
      document.querySelector(".project-5").style.display = "none";
      document.querySelector(".project-4").style.display = "block";
      y--;
  } else if (y == 5) {
      document.querySelector(".project-6").style.display = "none";
      document.querySelector(".project-5").style.display = "block";
      y--;
  } else if (y == 6) {
      document.querySelector(".project-7").style.display = "none";
      document.querySelector(".project-6").style.display = "block";
      y--;
  }
});

let socialIcons1 = document.querySelectorAll('.social_icon_home');
console.log(socialIcons1);
// Loop through all social icons (assuming multiple icons with class social_icon_home)
socialIcons1.forEach(socialIcon => {
socialIcon.addEventListener('click', () => {
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    // Improved scrolling: Handle potential missing hero section gracefully
    heroSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error('Hero section with ID "hero" not found!');
  }
});
});

let socialIcons2 = document.querySelectorAll('.social_icon_about');
console.log(socialIcons2);
// Loop through all social icons (assuming multiple icons with class social_icon_home)
socialIcons2.forEach(socialIcon => {
socialIcon.addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error('About section with ID "hero" not found!');
  }
});
});

let socialIcons3 = document.querySelectorAll(".social_icon_skill");
console.log(socialIcons3);
socialIcons3.forEach(socialIcon=>{
  socialIcon.addEventListener("click",()=>{
  document.getElementById("skill").scrollIntoView({behavior:"smooth"});
})
})

let socialIcons4 = document.querySelectorAll( ".social_icon_project" );
socialIcons4.forEach(socialIcon=>{
socialIcon.addEventListener("click",()=>{
  document.getElementById("project").scrollIntoView({behavior:"smooth"})
})
})
  
let socialIcons5 = document.querySelectorAll( ".social_icon_contact" );
socialIcons5.forEach(socialIcon=>{
socialIcon.addEventListener("click",()=>{
  document.getElementById("contact").scrollIntoView({behavior:"smooth"})
})
})

document.querySelector("#top").addEventListener("click",()=>{
document.getElementById("hero").scrollIntoView({behavior:"smooth"});
})

document.querySelector(".contact-submit").addEventListener("click",()=>{
console.log("clicked")
let params = {
  name : document.getElementById("name").value,
  email : document.getElementById("email").value,
  phone : document.getElementById("phone").value,
  message : document.getElementById("message").value
}

emailjs.send("service_2kkt8rg","template_wdd8l2m", params).then((res) =>{
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  alert("Your message has been sent succesfully");
}).catch((err) =>{console.log(err)});
})

