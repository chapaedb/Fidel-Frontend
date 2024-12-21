import './CategoryCard.css';

const CategoryCard = (props) => {
    return (
        <div className="category-card">
            <img src={props.icon} alt={props.name}/>
            <p className="category-name">{props.name}</p>
        </div>
    );
}

export default CategoryCard;