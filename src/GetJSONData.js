export function loadData ()  {
  fetch("./data.json")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
}