import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import { useState } from "react";

interface Props {
  title: string;
  content: string;
  index?: number;
}
function App() {
  const [notes, setNotes] = useState<Props[]>([]);

  const addItem = (inputText: Props) => {
    setNotes((prevValue) => {
      return [...prevValue, inputText];
    });
  };

  const deleteItem = (id: number) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Navbar />
      <CreateNote addItem={addItem} />
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 xl:grid-col-5 gap-4 auto-cols-fr">
        {notes.map((note, index) => {
          return (
            <Note
              id={index}
              key={index}
              title={note.title}
              content={note.content}
              deleteItem={() => deleteItem(index)}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
