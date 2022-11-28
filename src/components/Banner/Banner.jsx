import './Banner.css';

export default function Banner({ src, title, alt }) {
    return(
        <div class="banner"> 
            <div class="bannerContent">
                <img class="img" src={ src } alt={ alt }/>
                <h1 class="title">{ title }</h1>
            </div>
        </div>
    )
}



