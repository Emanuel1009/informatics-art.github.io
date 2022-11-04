const Comments = () => {
  return (
    <div className="mt-5">
      <div className="ml-8">
        <label className="label">
          <span className="label-text font-['Open Sans'] font-semibold text-[15px]">
            Nama
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-10 w-[900px]"
          placeholder="put your comments here"
        ></textarea>
      </div>
    </div>
  );
};
export default Comments;
