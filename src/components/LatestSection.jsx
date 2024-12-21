import Button from "./Button/Button"
import './LatestSection.css';
import CourseCard from "./CourseCard/CourseCard";

const LatestSection = () => {
    return (
        <section>
            <div className="header">
                <h1>Latest Courses</h1>
                <div className="view-all">
                    <Button text="View All" color="yellow" style="outline" onClick={() => {}}/>
                </div>
            </div>
            <div className="course-container responsive">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
            <div className="view">
                <Button text="View All" color="purple" style="outline" onClick={() => {}}/>
            </div>
        </section>
    )
}

export default LatestSection;