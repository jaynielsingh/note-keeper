interface Props {
  title: string;
  content: string;
  id: number;
  deleteItem: (id: number) => void;
}

const Note = ({ title, content, id, deleteItem }: Props) => {
  const handleClick = () => {
    deleteItem(id);
  };
  return (
    <div className="py-10 ">
      <div className="m-5 break-words whitespace-pre-wrap my-auto box-border bg-white p-4 border-4 rounded-2xl">
        <h1 className="p-5 m-1">
          <span>Title: </span>
          {title}
        </h1>
        <p className="p-5 m-1">Content: {content}</p>
        <button
          onClick={handleClick}
          className="p-3 mt-5 rounded-2xl text-orange-400 float-right justify-end bg-slate-200 relative"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
