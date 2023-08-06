
let divider = document.createElement("div");
      document.body.append(divider);
      let screen = document.getElementById("result");

      function display(number) {
        screen.value += number;
      }
      function calculate() {
        try {
          screen.value = eval(screen.value);
        } catch (err) {
          alert("Invalid");
        }
      }
      function Clear() {
        screen.value = "";
      }
      function del() {
        screen.value = screen.value.slice(0, -1);
      }

      
      document.onkeydown = numberValue;
function numberValue(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (
    charCode !== 8 && // Allow backspace
    charCode !== 13 && // Allow enter key
    (charCode < 48 || charCode > 57) // Check if the pressed key is not a number
  ) {
    alert("Only numbers are allowed");
    event.preventDefault();
  }
}
