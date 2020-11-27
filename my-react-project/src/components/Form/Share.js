import React from "react";
import "../../stylesheets/layout/_form-share.scss";
import Collapsable from "./Collapsable";
import { useState } from "react";

const Share = (props) => {
  const [twitter] = useState(
    encodeURIComponent(
      "He creado una tarjeta de visita gracias a las Skriptonitas"
    )
  );
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(false);
    props.handleShareClick();
  };

  return (
    <fieldset className="form__share column">
      <Collapsable
        classTitle="share"
        icon="fas fa-share-alt icon-menu"
        name="Comparte"
      >
        <div className="form__share--container">
          <button
            type="submit"
            className="form__share--button js-reset js-form__share--button txt-lg txt-wh txt-up txt-fsec"
            title="Crear tarjeta"
            onClick={handleClick}
          >
            <i className="far fa-address-card"></i>Crear tarjeta
          </button>
          <div
            className={
              isHidden === true
                ? "form__share--message-hidden js-form__share--message"
                : "form__share--message-block js-form__share--message"
            }
          >
            {props.state.apiCardUrl ? (
              <>
                <h3 className="form__box__title h3 txt-lg js-created">
                  La tarjeta ha sido creada:
                </h3>
                <a
                  href={props.state.apiCardUrl}
                  className="card-link js-card-link txt-bright txt-xs"
                  target="_blank"
                  rel="noreferrer"
                  title="Link a la nueva tarjeta"
                >
                  {props.state.apiCardUrl}
                </a>
              </>
            ) : (
              <>
                <h3 className="form__box__title h3 txt-lg js-created">Error</h3>
                <p>{props.apiError}</p>
              </>
            )}

            <a
              href="www.adalab.es" // Esto lo hemos añadido para que no de error
              className="twitter-share-button js-twitter share-twitter txt-wh txt-fsec txt-sm"
              target="_blank"
            >
              <i className="fab fa-twitter"></i> Compartir en twitter
            </a>
          </div>
        </div>
      </Collapsable>
    </fieldset>
  );
};
export default Share;
