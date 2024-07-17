import scoopLogo from '../assets/ScoopNBunsLogo.svg';

function Logo() {
    return (
        <div className="logo">
            <img src={scoopLogo} alt='logo' width={50} height={50}/>
        </div>
    )
}

export default Logo;