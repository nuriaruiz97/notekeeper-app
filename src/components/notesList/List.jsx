// import { useState, useEffect } from "react";
// import { getAllNotes, deleteNote } from "./services/notesServices";

// export const List = () => {
//   const handleDelete = (id) => {
//     deleteNote(id)
//       .then(() => getAllNotes())
//       .then((notes) => setNotes(notes));
//   };
//   return (
//     <>
//       <ul>
//         {notes.map((note, index) => (
//           <li key={index}>
//             {student.name} |{student.age}
//             <button onClick={() => handleDelete(student.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
