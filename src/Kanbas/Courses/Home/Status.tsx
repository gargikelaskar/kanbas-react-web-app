import "./index.css"; 

function Status(){
    return (
        
          
        <div className=" wd-modules-container cust-subcol-right flex-grow-0 me-2 d-none d-lg-block wd-publish">
        <h5>Course Status</h5>
            <div>
                <button type="button" className="unpublished"><i className="fa fa-ban" aria-hidden="true"></i>Unpublish</button>
            <button type="button" className="published"><i className="fa fa-check-circle" aria-hidden="true"></i>Published</button>
            </div>
            <ul>
                <li><a href=""><button type="button"><i className="fa fa-upload" aria-hidden="true"></i>Import Existing Content</button></a></li>
                <li><a href=""><button type="button"><i className="fa fa-cloud-upload" aria-hidden="true"></i>Import From Commons</button></a></li>
                <li><a href=""><button type="button"><i className="fa fa-bullseye" aria-hidden="true"></i>Choose Home Page</button></a></li>
                <li><a href=""><button type="button"><i className="fa fa-bar-chart" aria-hidden="true"></i>View Course Stream</button></a></li>
                <li><a href=""><button type="button"><i className="fa fa-bullhorn" aria-hidden="true"></i>New Announcement</button></a></li>
                <li><a href=""><button type="button"><i className="fa fa-bar-chart" aria-hidden="true"></i>New Analytics</button></a></li>
                <li><a href=""><button type="button"><i className="fa fa-bell-o" aria-hidden="true"></i>View Course Notifications</button></a></li>
            </ul>
            <div className="upcoming">
                <span className="coming-up">Coming Up</span>
                <span className="view-calendar"><i className="fa fa-calendar" aria-hidden="true"></i><a href="#">View Calendar</a></span>
            </div>
            <hr/>
            <ul>
                <li><i className="fa fa-calendar" aria-hidden="true"></i><span><a href="#">Lecture </a><br/>CS4550.12631.202410<br/> Sep 7 at 11:45am</span></li>
                <li><i className="fa fa-calendar" aria-hidden="true"></i><span><a href="#">Lecture </a><br/>CS4550.12631.202410<br/> Sep 11 at 11:45am</span></li>
                <li><i className="fa fa-calendar" aria-hidden="true"></i><span><a href="#">Lecture </a><br/>CS5610.06 SP23<br/> Sep 11 at 6pm</span></li>
                
            </ul>
    
</div>
        
      );
}
export default Status