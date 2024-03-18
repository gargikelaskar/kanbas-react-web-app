import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import { HiDotsVertical } from "react-icons/hi";


function ModuleList() {
  const { cid } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group border border-light">
      <li className="list-group-item">
        <input className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        /><br/>
        <textarea className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <span className="float-end">
          <button className="btn btn-success me-1"
            onClick={() => dispatch(addModule({ ...module, course: cid }))}
          >Add Module
          </button>
          <button onClick={() => dispatch(updateModule(module))} className="btn btn-secondary me-1"
          >Update Module</button>
        </span>
      </li>
      {moduleList
        .filter((module) => module.course === cid)
        .map((module, index) => (
          <li key={index} className="list-group-item c">
            
            <div className="modHeading"><HiDotsVertical />{module.name}</div>
            <span>{module.description}</span>
            <span className="float-end">
              <button
                className="btn btn-secondary me-1"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-danger me-1"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;