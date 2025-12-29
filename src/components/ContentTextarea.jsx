const ContentTextarea = ({ value, onChange }) => {
  return (
    <textarea
      className="content-textarea"
      maxLength={2000}
      rows={8}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  );
};
export default ContentTextarea;
