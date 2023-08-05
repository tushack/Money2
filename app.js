var num = Math.floor(Math.random() * 4) + 1;


$(".card").wScratchPad({
  size: 70, // The size of the brush/scratch.
  bg: `Images/Gpay_Card ${num }.png`, // Background (image path or hex color).
  fg: `#ffffff`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});