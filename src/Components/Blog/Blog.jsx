import PropTypes from "prop-types";

const Blog = ({blog , handleClickTwo}) => {

  const { title, cover, author_img, author, reading_time, posted_date,hashtag } = blog;

  return (
    <div className="mb-10">
      <img src={cover} alt={`cover picture of the title${title}`}></img>
      <div className="flex justify-between p-4 items-center">
        <div className="flex gap-6 items-center">
          <img src={author_img}></img>
          <div>
            <h4 className="text-[18px] text-slate-800 font-semibold">
              {author}
            </h4>
            <p className="text-[16px] text-slate-600">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[16px] text-slate-600 font-normal">
            {reading_time} min read
          </span>
          <button onClick={()=>handleClickTwo(blog)} className="text-[16px] text-slate-600">Bookmarks</button>
        </div>
      </div>
      <h3 className="text-4xl text-[#111] font-bold py-3">{title}</h3>
      <p>
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog : PropTypes.object.isRequired
}
export default Blog;
