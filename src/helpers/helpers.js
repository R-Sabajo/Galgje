function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

// function checkWin(correct, wrong, word) {
//   let status = 'win';

//   // check fo win

// }

export { showNotification };
