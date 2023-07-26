window.onload = function () {
  let count = document.getElementById("count");
  let display = document.getElementById("display");
  display.style.visibility = "hidden";

  count.innerText = 10;
  setTimeout(function () {
    count.innerText = 9;
    setTimeout(function () {
      count.innerText = 8;
      setTimeout(function () {
        count.innerText = 7;
        setTimeout(function () {
          count.innerText = 6;
          setTimeout(function () {
            count.innerText = 5;
            setTimeout(function () {
              count.innerText = 4;
              setTimeout(function () {
                count.innerText = 3;
                setTimeout(function () {
                  count.innerText = 2;
                  setTimeout(function () {
                    count.innerText = 1;
                    setTimeout(function () {
                      count.style.visibility = "hidden";
                      display.style.visibility = "visible";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
