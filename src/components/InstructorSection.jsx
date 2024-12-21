import React from "react";
import Button from "./Button/Button";
import './InstructorSection.css'
import InstructorCard from "./InstructorCard/InstructorCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const instructors = [
  {name: "John Doe", picture: "/images/tutor3.png", rating: 4.5},
  {name: "Jane Smith", picture: "/images/tutor1.png", rating: 4},
  {name: "Emily Johnson", picture: "/images/tutor2.png", rating: 5},
  {name: "Jenna Olsen", picture: "/images/student1.png", rating: 3.5},
];

const InstructorSection = () => {
    return (
        <div className="instructor-section">
            <div className="header">
                <h1>Our Instructors</h1>
                <div className="view-all">
                  <Button text="View All" color="yellow" style="outline" onClick={() => {}}/>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                draggable={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="transform 400ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                arrows={true}
                showDots={false}
                dotListClass="dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {instructors.map((instructor) => {
                    return (
                        <InstructorCard name={instructor.name} picture={instructor.picture} rating={instructor.rating}/>
                    )
                })}
            </Carousel>
            <div className="view">
                <Button text="View All" color="purple" style="outline" onClick={() => {}}/>
            </div>
        </div>
    );
}

export default InstructorSection;
