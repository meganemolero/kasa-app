import './Banner.css';

export default function Banner({ src, title, alt }) {
    return(
        <div className="bannerContainer"> 
            <div className="bannerContent">
                <img className="bannerImg" src={ src } alt={ alt }/>
                <h1 className="bannerTitle">{ title }</h1>
            </div>
        </div>
    )
}



