import "./index.css";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFilter } from "react-icons/fa";

function GradesButtons() {
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-6">
          <h5>Student Names</h5>
          <div className="input-group">
            <span className="input-group-prepend">
              <span className="input-group-text">
                <IoSearch />
              </span>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Students"
            />
            <span className="input-group-append">
              <span className="input-group-text">
                <IoMdArrowDropdown />
              </span>
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <h5>Assignment Names</h5>
          <div className="input-group">
            <span className="input-group-prepend">
              <span className="input-group-text">
                <IoSearch />
              </span>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Students"
            />
            <span className="input-group-append">
              <span className="input-group-text">
                <IoMdArrowDropdown />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <button type="button" className="btn btn-primary">
            <FaFilter />
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}
export default GradesButtons;
