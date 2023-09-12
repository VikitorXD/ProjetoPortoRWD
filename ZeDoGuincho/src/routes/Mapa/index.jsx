export default function Mapa(){

    return(
        <div className="solicitation-maps">
      <div className="div">
        <div className="overlap">
          <header className="header">
            <div className="logotipo">
              <img className="logo-holding" alt="Logo holding" src="" />
              <div className="rectangle" />
              <div className="text-wrapper">Help</div>
            </div>
            <img className="user" alt="User" src="user.svg" />
          </header>
          <div className="logotipo">
            <img className="logo-holding" alt="Logo holding" src="image.png" />
            <div className="rectangle" />
            <div className="text-wrapper">Help</div>
          </div>
        </div>
        <div className="main">
          <div className="search-bar">
            <div className="overlap-group">
              <div className="text-wrapper-2">Selecione sua localização...</div>
              <img className="search" alt="Search" src="search.svg" />
            </div>
          </div>
        </div>
        <button className="button">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Seguinte</div>
          </div>
        </button>
      </div>
    </div>
  );
};