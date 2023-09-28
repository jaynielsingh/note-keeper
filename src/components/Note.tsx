interface Props {
  title: string;
  content: string;
  id: number;
  time: string;
  deleteItem: (id: number) => void;
}

const Note = ({ title, content, time, id, deleteItem }: Props) => {
  const handleClick = () => {
    deleteItem(id);
  };
  return (
    <div className="py-10 ">
      <div className="m-5 break-words whitespace-pre-wrap my-auto box-border bg-white p-4 border-4 rounded-2xl">
        <h1 className="p-2 m-1">
          <span className="text-orange-400 pr-5">Title: </span>
          <br />
          {title}
        </h1>
        <p className="p-2 m-1">
          <span className="text-orange-400 pr-5 ">Content:</span>
          <br />
          {content}
        </p>
        <p className="p-3 mt-5 text-orange-900 font-thin">{time}</p>

        <button
          onClick={handleClick}
          className="p-3  rounded-2xl text-orange-400 float-right justify-end hover:bg-orange-500 hover:text-white bg-slate-200 relative"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
