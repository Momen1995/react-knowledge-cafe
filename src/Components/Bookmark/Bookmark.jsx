
const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className="px-6 py-2 text-[16px] font-semibold">
      <li>{title}</li>
    </div>
  );
};

export default Bookmark;