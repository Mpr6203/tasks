let inputGun = document.getElementById("gun");
let bulletCount = 0;

let throttleGun = throttle(fireGun, 1000);
// throttleGun('rapid fire')

let debounceGun = debounce(ultimateBlast, 4000);

inputGun.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  throttleGun(e.target.value);
});

function throttle(attackFunc, delay) {
  let lastFireTime = 0;
  return function (firemsg) {
    let currentTime = Date.now();
    if (currentTime - lastFireTime > delay) {
      // console.log(firemsg)
      attackFunc(firemsg);
      lastFireTime = currentTime;
    } else {
      console.log("wait a second for bullet loading and shot cooldown");
    }
  };
}

function debounce(orgFunc, delay) {
  return function (bullets) {
    let bulletsCount = bullets;
    if (bulletsCount === 4) {
      orgFunc();
    }
  };
}

function fireGun(msg) {
  bulletCount += 1;

  if (bulletCount > 3) {
    debounceGun(bulletCount);
    console.log("reload gun no more bullets, shoot all 3 bullets to trigger ultimate attack again");
    bulletCount = 0;
    inputGun.value = ""
  } else {
    console.log("bullet " + bulletCount);
    console.log("keep firing", msg);
  }
}

function ultimateBlast() {
  console.log("kaboom ultimate blast");
  alert('kaboooooom ultimate blastttt')
}
