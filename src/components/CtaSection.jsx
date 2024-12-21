import Button from './Button/Button';
import './CtaSection.css';

const CtaSection = () => {
    return (
        <section className="CTA-section">
            <h1>Start learning anywhere, anytime...</h1>
            <p>Use Fidel LMS to access high-quality education materials without any limitations in the easiest way.</p>
            <div className='cta-button-container'>
                <Button text='Get Started' style='fill' color='purple'/>
                <Button text='Learn More' style='outline' color='white'/>
            </div>
            <div className='email-section-container'>
                <div>
                    <h2>Join Us Today</h2>
                    <p>We will send the best deals and offers your way!</p>
                </div>
                <div className='email-input'>
                    <input type='email' placeholder='Enter your email'/>
                    <button type='submit'>Join Us</button>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;