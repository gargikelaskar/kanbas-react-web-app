import ModuleList from "../Modules/List";
import Modules from "../Modules";
import Status from "./Status";


function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <ul className="list-group wd-modules">
        <Modules/>
        </ul>
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
        <Status/>
      </div>
    </div>
  );
}
export default Home;