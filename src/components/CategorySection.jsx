import React from "react";
import Button from "./Button/Button";
import './CategorySection.css'
import CategoryCard from "./CategoryCard/CategoryCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
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
      items: 2
    }
  };

const categories = [
  {name: "Biology", icon: "/images/Biology.png"},
  {name: "Chemistry", icon: "/images/Chemistry.png"},
  {name: "History", icon: "/images/History.png"},
  {name: "Geography", icon: "/images/GeographyBook.png"},
  {name: "Physics", icon: "/images/Physics.png"},
];

const CategorySection = () => {
    return (
        <div className="category-section">
            <div className="header">
                <h1>Popular Categories</h1>
                <div className="view-all">
                  <Button text="View All" color="yellow" style="outline" onClick={() => {}}/>
                </div>
            </div>
        <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        showDots={false}
        draggable={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="transform 400ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        {categories.map((category) => {
          return (
            <CategoryCard name={category.name} icon={category.icon}/>
          )
        })}
      </Carousel>
      <div className="view">
        <Button text="View All" color="purple" style="outline" onClick={() => {}}/>
      </div>

    </div>
    );
}

export default CategorySection;