import React from "react";


export default function Mapa(){

    return (
        <div className="login-large">
          <div className="div">
            <div className="text-wrapper">Copyright 2022</div>
            <div className="group">
              <div className="login-form">
                <div className="text-wrapper-2">Esqueceu a senha?</div>
                <div className="button-entrar">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="text-wrapper-3">Entrar</div>
                    </div>
                  </div>
                </div>
                <div className="tile-login">
                  <div className="text-wrapper-4">Login</div>
                  <p className="p">Solicite o resgate do seu veículo.</p>
                </div>
                <div className="password-input">
                  <div className="overlap-group-2">
                    <div className="group-2">
                      <div className="overlap-group-2">
                        <div className="group-2">
                          <div className="rectangle" />
                          <div className="text-wrapper-5">Senha</div>
                        </div>
                        <div className="text-wrapper-6">****************</div>
                      </div>
                    </div>
                    <img className="visibility" alt="Visibility" src="visibility.png" />
                    <div className="rectangle-2" />
                    <img className="lock" alt="Lock" src="lock.svg" />
                  </div>
                </div>
                <div className="email-input">
                  <div className="overlap">
                    <div className="rectangle-3" />
                    <div className="group-3">
                      <div className="overlap-group-3">
                        <div className="group-3">
                          <img className="img" alt="Rectangle" src="rectangle-11.svg" />
                          <div className="text-wrapper-7">Email</div>
                        </div>
                        <a
                          className="text-wrapper-8"
                          href="mailto:email@dominio.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          email@dominio.com
                        </a>
                      </div>
                    </div>
                    <div className="rectangle-4" />
                    <img className="person" alt="Person" src="person.svg" />
                  </div>
                </div>
              </div>
              <img className="towing-pana" alt="Towing pana" src="pana.png" />
            </div>
            <div className="logotipo">
              <img className="logo-holding" alt="Logo holding" src="logo-holding-portoseguro-positivo-3.png" />
              <div className="rectangle-5" />
              <div className="text-wrapper-9">Help</div>
            </div>
          </div>
        </div>
      );
    };