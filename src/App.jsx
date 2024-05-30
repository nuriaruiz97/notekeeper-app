import { Form } from "./components/notesForm/Form";
import { List } from "./components/notesList/List";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <Form setNotes={setNotes} />

      <List notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
