const localStorageForm = document.getElementById("localStorageForm");
const sessionStorageForm = document.getElementById("sessionStorageForm");

function dataSetInFields() {
  const localStorageData = JSON.parse(localStorage.getItem("userData"));
  const sessionStorageData = JSON.parse(sessionStorage.getItem("userData"));

  if (localStorageData !== null) {
    localStorageForm.lname.value = localStorageData.userName || "";
    localStorageForm.lemail.value = localStorageData.userEmail || "";
  }

  if (sessionStorageData !== null) {
    sessionStorageForm.sname.value = sessionStorageData.userName || "";
    sessionStorageForm.semail.value = sessionStorageData.userEmail || "";
  }
}

dataSetInFields();

// LocalStorage Form Submit
localStorageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const { lname, lemail } = e.target;

  const data = {
    userName: lname.value,
    userEmail: lemail.value,
  };

  localStorage.setItem("userData", JSON.stringify(data));

  lname.value = "";
  lemail.value = "";
  alert("Data Submitted into localStorage");
});

// LocalStorage Form Reset
localStorageForm.addEventListener("reset", function (e) {
  e.preventDefault();
  localStorage.clear();
  alert("LocalStorage cleared");
});

// SessionStorage Form Submit
sessionStorageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const { sname, semail } = e.target;

  const data = {
    userName: sname.value,
    userEmail: semail.value,
  };

  sessionStorage.setItem("userData", JSON.stringify(data));

  sname.value = "";
  semail.value = "";
  alert("Data Submitted into sessionStorage");
});

// SessionStorage Form Reset
sessionStorageForm.addEventListener("reset", function (e) {
  e.preventDefault();
  sessionStorage.clear();
  alert("SessionStorage cleared");
});
