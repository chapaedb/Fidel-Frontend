import './DownloadSection.css';

const DownloadSection = () => {
    return (
        <div className="download-section">
            <h1>Download <br/>Our App</h1>
            <div className='cta-container'>
                <div className='mockup'>
                    <img src='/images/Mockup.png'/>
                </div>
                <div className='button-container'>
                    <button>
                        <div>
                            <img src='/images/GooglePlay.png'/>
                            <h2>Google Play</h2>
                        </div>
                        <img className='arrow' src='/images/RightArrow.png'/>
                    </button>
                    <button>
                        <div>
                            <img src='/images/AppStore.png'/>
                            <h2>App Store</h2>
                        </div>
                        <img className='arrow' src='/images/RightArrow.png'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;