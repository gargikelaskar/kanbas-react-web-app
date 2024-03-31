import { useState, useEffect } from "react";
import "./index.css";
// import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import Modal from "react-bootstrap/Modal";
import * as client from "./client";

function ModuleList() {
  const { cid } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  //CRUD operations

  const handleCreate = () => {
    handleAddModule();
    showAddEditModal(false);
    clearModule();
  };
  const handleAddModule = () => {
    client.createModule(cid, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const fetchModules = async (cid?: string) => {
    const modules = await client.fetchModulesForCourse(cid);
    dispatch(setModules(modules));
  };

  const handleUpdate = () => {
    handleUpdateModule();
    showAddEditModal(false);
    clearModule();
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDelete = () => {
    handleDeleteModule(module?._id);
    showDeleteModal(false);
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  useEffect(() => {
    fetchModules(cid);
  }, [cid]);

  const [selectedModule, setSelectedModule] = useState<any>(moduleList[0]);
  const [addModal, showAddEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  const clearModule = () => dispatch(setModule([]));

  return (
    <>
      <div className="row justify-content-end p-3">
        <div className="wd-modules-buttons col-auto">
          <button type="button">Collapse All</button>
          <button type="button">View Progress</button>
          <select>
            <option value="Publish All">Publish All</option>
          </select>
          <button
            className="btn btn-danger"
            onClick={() => {
              clearModule();
              showAddEditModal(true);
            }}
          >
            + Module
          </button>
        </div>
      </div>
      <hr />

      <ul className="list-group wd-modules">
        {moduleList &&
          moduleList
            .filter((module: any) => module.course === cid)
            .map((module: any) => (
              <li
                className="list-group-item"
                onClick={() => setSelectedModule(module)}
              >
                <div className="d-flex">
                  <div style={{ alignSelf: "center" }}>
                    <FaEllipsisV className="me-2" />
                  </div>
                  <div className="p-1">
                    {module.name}
                    <br />
                    <small>
                      {module.description} | {module._id}
                    </small>
                  </div>
                  <div className="ms-auto" style={{ alignSelf: "center" }}>
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaPlusCircle className="ms-2" />
                      <FaEllipsisV className="ms-2" />
                      <a
                        onClick={() => {
                          dispatch(setModule(module));
                          showAddEditModal(true);
                        }}
                      >
                        <span className="ms-2 editBtn">Edit</span>
                      </a>
                      <a
                        onClick={() => {
                          dispatch(setModule(module));
                          showDeleteModal(true);
                        }}
                      >
                        <span className="ms-2 delBtn">
                          Delete
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
                {selectedModule?._id === module._id && (
                  <ul className="list-group">
                    {module.lessons?.map((lesson: any) => (
                      <li className="list-group-item">
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        {addModal && (
          <Modal
            show={addModal}
            onHide={() => {
              showAddEditModal(false);
            }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="modalHeading">
                {" "}
                Add or Edit Module
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container align-items-center">
                <div className="p-2">
                  <input
                    className="form-control m-2"
                    value={module?.name}
                    placeholder="Enter Module Name"
                    onChange={(e) =>
                      dispatch(
                        setModule({
                          ...module,
                          name: e.target.value,
                        })
                      )
                    }
                  />
                  <textarea
                    className="form-control m-2"
                    value={module?.description}
                    placeholder="Enter Module Description"
                    onChange={(e) =>
                      dispatch(
                        setModule({
                          ...module,
                          description: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="row m-2">
                  <div className="wd-modules-buttons">
                    <button
                      className="btn btn-success w-100"
                      onClick={handleCreate}
                    >
                      Add
                    </button>
                  </div>
                  <div className="wd-modules-buttons">
                    <button
                      className="btn btn-secondary w-100"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
        {deleteModal && (
          <Modal
            show={deleteModal}
            backdrop="static"
            onHide={() => {
              showDeleteModal(false);
            }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="modalHeading">
                Confirm deletion of Module?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container align-items-center">
                <div style={{ color: "red" }}>
                  Confirm Module: {module.name} to be deleted
                </div>
                <hr />
                <div className="wd-modules-buttons">
                  <button
                    className="btn btn-secondary m-2 w-100"
                    onClick={() => showDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-outline-danger m-2 w-100"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </ul>
    </>
  );
}
export default ModuleList;
