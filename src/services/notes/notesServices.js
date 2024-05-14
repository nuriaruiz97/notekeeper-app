const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllNotes = () => {
  return fetch("BASE_URL", { method: "GET" }).then((response) => {
    return response.json();
  });
};

export const createNote = (newNote) => {
  return fetch("BASE_URL", {
    method: "POST",
    body: JSON.stringify(newNote),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteNote = (id) => {
  return fetch("BASE_URL", {
    method: "DELETE",
  });
};

export const updateNote = (id, updatedNote) => {
  return fetch("BASE_URL", {
    method: "PUT",
    body: JSON.stringify(updatedNote),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

console.log(BASE_URL);
console.log(id);