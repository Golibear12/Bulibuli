const c = document.querySelector(".c");
const o = document.querySelector("#j");
var u = o.getBoundingClientRect();
var bp=document.querySelector(".bp")
console.log(u.width);
var cn = 10;
var cm = 0;
var level = 1;
var bnm = 0;
const q = [100, 200, 300, 400, 500, 1000, 2000, 300, 4000, 5000, 10000];





function time(t) {
  var gol = t * 1200;
  return gol;
}

o.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  c.style.width = `${cn}px`;
  c.style.height = `${cn}px`;

  if (12 < y <= 0) {
    c.style.display = "none";
  } else if (12 < x <= 0) {
    c.style.display = "none";
  } else if (y > 710) {
    c.style.display = "none";
  } else if (x > 1530) {
    c.style.display = "none";
  } else {
    c.style.left = x + "px";
    c.style.top = y + "px";
    c.style.display = "block";
  }
});
const img = [
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/1572B/production/_88615878_976x1024n0037151.jpg",
  "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  "https://media.istockphoto.com/id/152944790/photo/blue-and-red-fire-against-black-background.jpg?s=612x612&w=0&k=20&c=gjS_DtCp8z9Gd3eqBls9bsaeqxOCorai4OhpyKus3XE=",
  "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Earthday_TeamsBackground_Dark?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=382&hei=252&qlt=100&fmt=png-alpha&fit=stretch",
  "https://e1.pxfuel.com/desktop-wallpaper/597/83/desktop-wallpaper-3d-full-color-7920-backgrounds-full-color-thumbnail.jpg",
  "https://i.pinimg.com/originals/c0/d8/fb/c0d8fb6f4f972efdeda5079af328851c.jpg",
  "https://c4.wallpaperflare.com/wallpaper/422/203/755/black-cool-dark-laptop-background-wallpaper-preview.jpg",
  "https://png.pngtree.com/thumb_back/fw800/background/20230705/pngtree-nature-s-embrace-a-3d-rendering-of-a-rock-amidst-lush-image_3727334.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeaIbriXLE-UU4LQKJ_aJ1yEHvQDUjqHZSQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwn6VO3Uugnbz7dKLzHsFQPgKgILrVjmjXYg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCMegiIIYZ9n32oeV9jSwQxQWvGKVFJLBh3Onlj8QQ_IpL2FzWc5uhNuISz8YrJLhhbc&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosVhkEwavRsEiHcZ-xropGHiRcr2BP60WUxKwGAUp7mSw-Rdont_8q-CX056XnVBEPPM&usqp=CAU",
  "https://i.pinimg.com/564x/00/7a/ba/007aba072487eb404aa33a7eae804224.jpg",
  "https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmboGjB2dbKR4Y86UJk5mh9-F9SC4e86BosQ&usqp=CAU",
];
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};
function rob(v, z = 0) {
  var sv = (-1) ** Math.floor(Math.random() * z);
  var s = Math.floor(Math.random() * v * sv);

  return s;
}

var n = document.querySelector("#j");
n.addEventListener(
  "mousemove",
  throttleFunction((e) => {
    console.log("Hello");
    var x = e.pageX;
    var y = e.pageY;
    console.log(x);

    console.log(y);
    var m = document.createElement("div");
    var h = document.createElement("img");
    var mj=document.querySelector(".imj")
    var hb = img[rob(img.length)];
    console.log(hb);
    h.setAttribute(`src`, `${hb}`);
    h.classList.add("imgh");
    m.appendChild(h);
   
    if (y <= 0) {
      m.style.display = "none";
    } else if (x < 0) {
      m.style.display = "none";
    } else if (y > 400) {
      m.style.display = "none";
    } else if (x > 1300) {
      m.style.display = "none";
    } else {
      m.style.left = x + "px";
      m.style.top = y + "px";
      m.style.transform = `rotateX(${rob(20, 30)}deg) rotateY(${rob(
        30,
        60
      )}deg) rotateZ(${rob(16, 100)}deg)`;
      m.style.perspective = "200px";
    }

    document.querySelector("#j").appendChild(m);
    m.classList.add("q");
    m.addEventListener("click",()=>{
      mj.setAttribute(`src`,`${hb}`)
      document.querySelector("body img").style.display="block"

      
    })

    setInterval(() => {
      m.remove();
    }, time(level));
  }, 600)
);

function color() {
  const randomnumber = Math.floor(Math.random() * 16777215);
  const randomcode = "#" + randomnumber.toString(16);
  document.querySelector(".c").style = "background-color:" + randomcode + ";";

  console.log(randomnumber);
  console.log(randomcode);
}
setInterval(() => {
  color();
}, 1000);

setInterval(() => {
  let a = rob(70) + 30;
  let b = rob(255);
  let rt = rob(255);
  let ry = rob(255);

  var box = document.createElement("div");

  // var imj=document.createElement("nim")
  // var hb=nim[rob(nim.length)]

  // imj.setAttribute(`src`,`${hb}`)

  // imj.classList.add("im")
  // box.appendChild(imj)
  box.classList.add("box");
  o.appendChild(box);
  box.style.width = `${a}px`;
  box.style.height = `${a}px`;
  box.style.backgroundColor = `rgb(${b},${rt},${ry})`;
  box.style.left = `${rob(86)}%`;
  box.style.top = `${rob(86)}%`;
  box.addEventListener("mouseover", () => {
    cn = cn + 6;
    bnm=Math.floor((cn / q[cm]) * 100);

    o.style.backgroundColor = `rgb(${b},${rt},${ry},0.64)`;
    c.style.width = `${cn}px`;
    c.style.height = `${cn}px`;
    bp.innerHTML=`${bnm}%`;
    if (bnm>=100) {
        cn=10
        cm+=1
        level+=1
        alert(`Your on ${level} level.`)
    }
    box.remove();

    // var mb=document.querySelector(".imb")
    // mb.setAttribute(`src`,`${hb}`)
  });

  setInterval(() => {
    box.remove();
  }, (3600 + level*100));
}, 400);
setInterval(() => {
  let a = rob(70) + 30;

  var hoo = document.createElement("div");
  hoo.classList.add("hoo");
  hoo.style.width = `${a}px`;
  hoo.style.height = `${a}px`;
  hoo.style.left = `${rob(86)}%`;
  hoo.style.top = `${rob(86)}%`;
  o.appendChild(hoo);
  hoo.addEventListener("mouseover", () => {
    cn = cn / 2;
    bp.innerHTML=`${bnm}%`;


  });
  setInterval(() => {
    hoo.remove();
  }, time(level));
}, 1200);
