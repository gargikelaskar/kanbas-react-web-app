import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { cid } = useParams();
  const modulesList = modules.filter((module) => module.course === cid);
  const [selectedModuleId, setSelectedModuleId] = useState(modulesList[0]?._id);

  return (
    <>
    
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            key={module._id}
            className="list-group-item"
            onClick={() => setSelectedModuleId(module._id)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModuleId === module._id && module.lessons && (
              <ul className="list-group">
                {module.lessons.map((lesson) => (
                  <li key={lesson._id} className="list-group-item">
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
      </ul>
    </>
  );
}

export default ModuleList;
