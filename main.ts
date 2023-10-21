const submitButton: HTMLElement | null =
  document.querySelector("#fetchSubmitButton");
const fetchForm: HTMLElement | null = document.querySelector("#fetchForm");
const outputField: HTMLElement | null = document.querySelector("#output");

fetchForm?.addEventListener("submit", async (event: Event) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData);
  const { path } = data;
  if (sanitizePath(path) === true) {
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
  console.log(data);
  return data;
}

function sanitizePath(path) {
  return true;
}

function pasteOutput(data) {
  console.log(Object.values(data));
  if (outputField) {
    outputField.textContent;
  }
}
