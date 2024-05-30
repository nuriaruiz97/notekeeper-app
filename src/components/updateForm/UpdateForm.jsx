import PropTypes from "prop-types";
import { getAllNotes, updateNote } from "../../services/notes/notesServices";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const UpdateForm = ({ setNotes, note, setForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedNote = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
      due_date: event.target.due_date.value,
    };

    updateNote(note.id, updatedNote)
      .then(() => getAllNotes())
      .then(({ notes }) => {
        setNotes(notes);
      })
      .then(() => {
        setForm(false);
      });
  };

  const Status = {
    Pending: "pending",
    In_progress: "in progress",
    Done: "done",
  };

  const statusOptions = Object.values(Status);

  return (
    <FormContainer>
      <FormTitle>Update this note</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          defaultValue={note.name}
          required
        />

        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          defaultValue={note.description}
          required
        />

        <Label htmlFor="status">Status</Label>
        <Select id="status" name="status" required defaultValue={note.status}>
          {statusOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>

        <Label htmlFor="due_date">Due Date</Label>
        <Input
          type="date"
          id="due_date"
          name="due_date"
          placeholder="Due Date"
          defaultValue={note.due_date}
          required
        />

        <Button type="submit">Update Note</Button>
      </StyledForm>
    </FormContainer>
  );
};

UpdateForm.propTypes = {
  setNotes: PropTypes.func.isRequired,
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
  }).isRequired,
  setForm: PropTypes.func.isRequired,
};
