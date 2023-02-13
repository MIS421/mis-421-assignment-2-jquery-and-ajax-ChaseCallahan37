// Time function, finds element with clock and updates to current time

//Sets inner text of button to current time
function showTime() {
  // $("#time").dialog(generateTimeFormat());
  const time = $("#time");
  time.css("visibility", "visible");
  time.text(generateTimeFormat());
  time.dialog({
    dialogClass: "no-close",
    buttons: [
      {
        text: "OK",
        click: function () {
          $(this).dialog("close");
          this.css("visibility", "hidden");
        },
      },
    ],
    title: "Current Time",
  });
}

function generateTimeFormat() {
  now = new Date();
  return now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

function clockHydration() {
  $("#clock-btn").click(() => {
    showTime();
  });
}
