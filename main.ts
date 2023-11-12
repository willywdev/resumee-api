const submitButton: HTMLElement | null =
  document.querySelector("#fetchSubmitButton");
const fetchForm: HTMLElement | null = document.querySelector("#fetchForm");
const outputField: HTMLElement | null = document.querySelector("#output");
const pathLabel: HTMLElement | null = document.querySelector("#pathLabel");

fetchForm?.addEventListener("submit", async (event: Event) => {
  event.preventDefault();
  const formData: FormData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData);
  const { path } = data;
  if (sanitizePath(path)) {
    const dataFromFetch = await triggerFetch(path);
    if (submitButton) {
      submitButton.textContent = "Fetching ";
    }
    const smallAnimation = setInterval(() => {
      if (submitButton) {
        submitButton.textContent += ".";
      }
      if (dataFromFetch) {
        clearInterval(smallAnimation);
        submitButton ? (submitButton.textContent = "Fetch ") : "";
        pasteOutput(dataFromFetch);
      }
    }, 350);
  }
});

async function triggerFetch(url) {
  const response = await fetch(
    `https://resumee-api-production.up.railway.app${url}`
  );
  if (!response.ok) {
    console.error(response.statusText);
    return null;
  }
  const data = await response.json();
  return data;
}

function sanitizePath(path) {
  if (
    path === "/" ||
    path === "/skills" ||
    path === "/info" ||
    path === "/learning" ||
    path === "/projects"
  ) {
    return true;
  } else {
    if (pathLabel) {
      const tempClasslist = pathLabel.classList.value;
      pathLabel.textContent = "Please only use Paths that exist. Aborted.";
      pathLabel.classList.add("bg-red-600", "rounded-md", "text-center");
      setTimeout(() => {
        pathLabel.textContent = "Desired path:";
        pathLabel.className = tempClasslist;
      }, 1500);
    }
    return false;
  }
}

function pasteOutput(data) {
  const jsonString = JSON.stringify(data, null, 2);
  if (outputField) {
    outputField.textContent = jsonString;
  }
}
