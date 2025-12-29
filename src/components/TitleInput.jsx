const TitleInput = ({ value, onChange }) => {
  return (
    <input
      className="title-input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="제목을 입력하세요"
    ></input>
  );
};
export default TitleInput;
