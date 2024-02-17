import ModuleList from "./List";
function Modules() {
  return (
    <div>
      <div className=" wd-modules-buttons">
        <button type="button">Collapse All</button>
        <button type="button">View Progress</button>
        <select>
          <option value="Publish All">Publish All</option>
        </select>
        <button type="button">+ Module</button>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;
