const add = (a: number, b: number) => {
  alert(`${a} + ${b} = ${a + b}`);
};
function ClickEvent() {
  const hello = () => {
    alert("Hello World!");
  };
  const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
  };
  return (
    <div>
      <h2>Click Event</h2>
      <button onClick={hello} className="btn btn-primary">Click Hello</button>
      <button onClick={() => lifeIs("Good!")} className="btn btn-primary">Click Good</button>
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}
        className="btn btn-primary"
      >
        Click Hello 3
      </button>
    </div>
  );
}
export default ClickEvent;
