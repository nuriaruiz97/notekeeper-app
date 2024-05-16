import { useState, useEffect } from "react";
import { getAllNotes, deleteNote } from "../../services/notes/notesServices.js";

export const List = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes().then((notes) => setNotes(notes));
  }, []);

  const handleDelete = (id) => {
    deleteNote(id)
      .then(() => getAllNotes())
      .then((notes) => setNotes(notes));
  };
  return (
    <>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.id} |{note.name} | {note.description} | {note.status} |
            {note.due_date}
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
// import { useEffect, useState } from "react";
// import { getAllNotes, deleteNote } from "../../services/notes/notesServices.js";

// export const List = () => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     getAllNotes()
//       .then((response) => {
//         const notesArray = response.notes; // Extrae el array de notas del objeto de respuesta
//         if (Array.isArray(notesArray)) {
//           setNotes(notesArray);
//         } else {
//           console.error(
//             "getAllNotes() did not return an array of notes:",
//             notesArray
//           );
//         }
//       })
//       .catch((error) => console.error("Error fetching notes:", error));
//   }, []);

//   const handleDelete = (id) => {
//     deleteNote(id)
//       .then(() => setNotes(notes.filter((note) => note.id !== id)))
//       .catch((error) => console.error("Error deleting note:", error));
//   };

//   return (
//     <ul>
//       {notes.map((note, index) => (
//         <li key={index}>
//           {note.id} | {note.name} | {note.description} | {note.status} |{" "}
//           {note.due_date}
//           <button onClick={() => handleDelete(note.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };
