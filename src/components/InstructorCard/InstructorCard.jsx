import './InstructorCard.css';

const InstructorCard = (props) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= props.rating) {
                stars.push(
                    <img key={i} src="/images/Star.png" alt="star" className="star"/>
                );
            } else if (i === Math.ceil(props.rating) && props.rating % 1 !== 0) {
                stars.push(
                    <img key={i} src="/images/half-star.png" alt="half-star" className="star"/>
                );
            } else {
                stars.push(
                    <img key={i} src="/images/Star.png" alt="star" className="star empty"/>
                );
            }
        }
        return stars;
    };

    return (
        <div className="instructor-card">
            <img className='profile' src={props.picture} alt={props.name}/>
            <p className="instructor-name">{props.name}</p>
            <div className="rating">
                {renderStars()}
            </div>
        </div>
    );
}

export default InstructorCard;
