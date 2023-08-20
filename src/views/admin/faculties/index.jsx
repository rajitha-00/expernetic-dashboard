import FacultyCard from "./components/FacultyCard";
import FacultyCardLef from "./components/FacultyCardLef";

import MGR from "assets/img/mgr.png";
import CS from "assets/img/cs.png";
import ENG from "assets/img/eng.png";
import DOC from "assets/img/doc.png";
import HRM from "assets/img/hrm.png";
import MUSIC from "assets/img/music.png";

const Courses = () => {
  return (
    < >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <FacultyCardLef
            imgUrl={CS}
            faculty="Computer Science"
        />
        <FacultyCard
            imgUrl={HRM}
            faculty="HRM"
        />
        <FacultyCard
            imgUrl={ENG}
            faculty="Engineering"
        />
        <FacultyCardLef
            imgUrl={DOC}
            faculty="Medicine"
        />
        <FacultyCardLef
            imgUrl={MGR}
            faculty="Business Management"
        />
        <FacultyCard
            imgUrl={MUSIC}
            faculty="Artss"
        />
    </div>
    </>
  );
};

export default Courses;
