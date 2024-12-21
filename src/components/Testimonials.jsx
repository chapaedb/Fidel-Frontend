import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        { id: 1,  text: "As a long-time user of Fidel Tutor, I can confidently say that their courses have revolutionized the way I learn. The instructors are knowledgeable and the content is engaging. I have seen a significant improvement in my skills.", name: "Artemisia Udinese", title: "Marketing Specialist", rating: 5},
        { id: 2,  text: "Fidel Tutor offers a wide range of courses that are perfect for anyone looking to expand their knowledge. The platform is user-friendly and the support team is always ready to help. Highly recommend!", name: "Jasper Camembert", title: "Software Engineer", rating: 4},
        { id: 3,  text: "I love the flexibility that Fidel Tutor provides. I can learn at my own pace and revisit the material whenever I need to. The live classes are a great way to interact with instructors and other students.", name: "Milo Provolone", title: "Web Developer", rating: 4},
        { id: 4,  text: "Great experience overall! The video courses are well-structured and the instructors are very supportive. I have gained a lot of practical knowledge that I can apply in my job.", name: "Cleo Brie", title: "Product Manager", rating: 5},
    ];

    return (
        <div className='testimonials'>
            <h1>Testimonials</h1>
            <div className='testimonial-container'>
                <div className='testimonial-track'>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className='testimonial-card'>
                            <div>
                                <img src='/images/quotes.png' alt='quotes'/>
                                <p>{testimonial.text}</p>
                            </div>
                            <div>
                                <h2>{testimonial.name}</h2>
                                <h3>{testimonial.title}</h3>
                            </div>
                        </div>
                    ))}
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className='testimonial-card'>
                            <div>
                                <img src='/images/quotes.png' alt='quotes'/>
                                <p>{testimonial.text}</p>
                            </div>
                            <div>
                                <h2>{testimonial.name}</h2>
                                <h3>{testimonial.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials;