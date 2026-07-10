AOS.init({
  duration:1000
});

/* TYPING */

new Typed(".typing",{
  strings:[
    "Cloud Engineer",
    "DevOps Learner",
    "AWS Enthusiast",
    "MERN STACK Beginner"
  
   
  ],
  typeSpeed:70,
  backSpeed:50,
  loop:true
});

/* PARTICLES */

particlesJS("particles-js",{
  particles:{
    number:{
      value:80
    },
    color:{
      value:"#38bdf8"
    },
    shape:{
      type:"circle"
    },
    opacity:{
      value:0.5
    },
    size:{
      value:3
    },
    line_linked:{
      enable:true,
      color:"#38bdf8"
    },
    move:{
      enable:true,
      speed:2
    }
  }
});
