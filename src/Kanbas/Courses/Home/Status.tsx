import "./index.css"; 
import { AiOutlineStop,AiOutlineCloudDownload } from "react-icons/ai";
import { FaCheckCircle,FaRegBell,FaCalendarAlt } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";


function Status(){
    return (
        
          
        <div className=" wd-modules-container cust-subcol-right flex-grow-0 me-2 d-none d-lg-block wd-publish">
        <h5>Course Status</h5>
            <div>
                <button type="button" className="unpublished"><AiOutlineStop />Unpublish</button>
            <button type="button" className="published"><FaCheckCircle />Published</button>
            </div>
            <ul>
                <li><a href=""><button type="button"><CiImport />Import Existing Content</button></a></li>
                <li><a href=""><button type="button"><AiOutlineCloudDownload/>Import From Commons</button></a></li>
                <li><a href=""><button type="button"><FaHome />Choose Home Page</button></a></li>
                <li><a href=""><button type="button"><IoBarChartSharp />View Course Stream</button></a></li>
                <li><a href=""><button type="button"><CiBullhorn />New Announcement</button></a></li>
                <li><a href=""><button type="button"><IoBarChartSharp />New Analytics</button></a></li>
                <li><a href=""><button type="button"><FaRegBell/>View Course Notifications</button></a></li>
            </ul>
            <div className="upcoming">
                <span className="coming-up">Coming Up</span>
                <span className="view-calendar"><FaCalendarAlt/><a href="#">View Calendar</a></span>
            </div>
            <hr/>
            <ul>
                <li><FaCalendarAlt/><span><a href="#">Lecture </a><br/>CS4550.12631.202410<br/> Sep 7 at 11:45am</span></li>
                <li><FaCalendarAlt/><span><a href="#">Lecture </a><br/>CS4550.12631.202410<br/> Sep 11 at 11:45am</span></li>
                <li><FaCalendarAlt/><span><a href="#">Lecture </a><br/>CS5610.06 SP23<br/> Sep 11 at 6pm</span></li>
                
            </ul>
    
</div>
        
      );
}
export default Status