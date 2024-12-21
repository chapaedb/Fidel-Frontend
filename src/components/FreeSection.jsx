import React from 'react';
import Button from './Button/Button';
import './FreeSection.css';
import CourseCard from './CourseCard/CourseCard';

const FreeSection = () => {
    return (
        <section>
            <div className="header">
                <h1>Free Courses</h1>
                <div className="view-all">
                    <Button text="View All" style="outline" color="yellow" />
                </div>
            </div>
            <div className="course-container responsive">
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
            <div className="view">
                <Button text="View All" style="outline" color="purple" />
            </div>
        </section>
    );
}

export default FreeSection;