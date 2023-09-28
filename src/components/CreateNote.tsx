import { useState } from "react";

interface Props {
  title: string;
  content: string;
}

interface CreateNoteProp {
  addItem: (newItem: Props) => void;
}

const CreateNote = ({ addItem }: CreateNoteProp) => {
  const [note, setNote] = useState<Props>({ title: "", content: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevNotes) => {
      return { ...prevNotes, [name]: value };
    });
  };

  const handleAddItem = (
    e: React.MouseEvent<HTMLButtonElement | undefined>
  ) => {
    addItem(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <form className="flex relative  justify-center py-7 flex-col w-1/3 box-content">
        <input
          onChange={handleChange}
          value={note.title}
          className="p-3 rounded-2xl"
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          className="p-3 resize-none rounded-2xl my-2"
          name="content"
          placeholder="take note"
          rows={3}
          value={note.content}
        />
        <button
          onClick={handleAddItem}
          className="absolute right-5 bg-orange-500 text-white rounded-3xl w-14 h-10 mt-40 "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
