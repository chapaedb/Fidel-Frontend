import { useEffect } from 'react';
import Button from "./Button/Button"
import './HeroSection.css'

const HeroSection = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('k', '');
                const speed = target > 1000 ? 100 : 200;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target >= 1000 ? (target / 1000).toFixed(1) + 'k' : target;
                }
            };
            updateCount();
        });
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-left">
                <h1>With Fidel <br/> Excitement for Learning is Boosted!</h1>
                <div className="CTAs">
                    <Button text="Enroll Now" color="yellow" style="fill" onClick={() => {}}/>
                    <Button text="View All Courses" color="purple" style="outline" onClick={() => {}}/>
                </div>
            </div>
            <div className="hero-right">
                <div className="left">
                    <div className="box1">
                        <img src="/images/student1.png"/>
                    </div>
                    <div className="box2">
                        <h1 className="counter" data-target="21000">0</h1>
                        <p>Happy Students</p>
                    </div>
                    <div className="box3">
                        <img src="/images/student2.png"/>
                    </div>
                </div>
                <div className="right">
                    <div className="box4">
                        <h1 className="counter" data-target="32">0</h1>
                        <p>Skillfull Instructors</p>
                    </div>
                    <div className="box5">
                        <video className="background-clip" src="/videos/tutor.mp4" autoPlay loop muted></video>
                        <h1>240</h1>
                        <p>Live Classes</p>
                    </div>
                    <div className="box6">
                        <div className="innerbox1">
                            <video className="background-clip" src="/videos/globe.mp4" autoPlay loop muted></video>
                        </div>
                        <div className="innerbox2">
                            <h1 className="counter" data-target="56">0</h1>
                            <p>Video Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
