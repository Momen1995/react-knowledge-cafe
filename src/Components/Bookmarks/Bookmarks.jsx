import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="bg-gray-100 w-4/12">
      <h3 className="text-xl font-semibold p-5 text-center">
        Bookmarks add: {bookmarks.length}
      </h3>
      <ol className="list-style:decimal">
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </ol>
    </div>
  );
};

export default Bookmarks;