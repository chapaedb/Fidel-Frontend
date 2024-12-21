import './CourseCard.css';
import star from '../../assets/icons/Star.png';
import halfStar from '../../assets/icons/half-star.png';
import clock from '../../assets/icons/Time.png';
import categoryIcon from '../../assets/icons/Category.png';

const CourseCard = () =>  {
    const courseInfo = {
        thumbnail: '/images/course1.png',
        creator: {
            name: 'Fidel Admin',
            profile: '/images/Fidel.png'
        },
        date: 'November 15 2024',
        title: 'Grade 11 History',
        subtitle: 'Chapter 1 | Part One',
        reviews: 5323,
        rating: 4.5,
        duration: '1:05hrs',
        category: 'Grade 11',
        price: 700,
    }

    return (
        <div className='card'>
            <div className="thumbnail">
                <img src={courseInfo.thumbnail} alt="course thumbnail" />
            </div>
            <div className="course-info">
                <div className="course-heading">
                    <div>
                        <img src={courseInfo.creator.profile} alt="" />
                        <h2>By {courseInfo.creator.name}</h2>
                    </div>
                    <h2>{courseInfo.date}</h2>
                </div>
                <div className='course-title'>
                    <h1>{courseInfo.title}</h1>
                    <p>{courseInfo.subtitle}</p>
                </div>
                <div className='course-details'>
                    <div className='card-left'>
                        <div className='rating'>
                            {[...Array(Math.floor(courseInfo.rating))].map((_, i) => (
                                <img key={i} src={star} alt="star" />
                            ))}
                            {courseInfo.rating % 1 !== 0 && (
                                <img src={halfStar} alt="half star" />
                            )}
                            <span>({courseInfo.reviews})</span>
                        </div>
                        <div className='detail'>
                            <img src={clock}/>
                            <h2>{courseInfo.duration}</h2>
                        </div>
                        <div className='detail'>
                            <img src={categoryIcon}/>
                            <h2>{courseInfo.category}</h2>
                        </div>
                    </div>
                    <div className='card-right'>
                        <h1>{courseInfo.price}ETB</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;