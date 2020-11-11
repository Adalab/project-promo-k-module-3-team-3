import React from "react";
import "../../stylesheets/layout/_form-share.scss";
import Collapsable from "./Collapsable";

class Share extends React.Component {
  render() {
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
            >
              <i className="far fa-address-card"></i>Crear tarjeta
            </button>
            <div className="form__share--message js-form__share--message">
              <h3 className="form__box__title h3 txt-lg js-created">
                La tarjeta ha sido creada:
              </h3>
              <a
                href="www.adalab.es" // Esto lo hemos añadido para que no de error
                className="card-link js-card-link txt-bright txt-xs"
                target="_blank"
                title="Link a la nueva tarjeta"
              >
                Link a la nueva tarjeta
              </a>

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
  }
}
export default Share;
