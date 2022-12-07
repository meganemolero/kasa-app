import './Banner.css';

export default function Banner({ src, title, alt }) {
    return(
        <div className="bannerContainer"> 
            <img className="bannerImg" src={ src } alt={ alt }/>
            <h1 className="bannerTitle">{ title }</h1>
        </div>    
    )
}



