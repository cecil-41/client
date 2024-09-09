import React from "react";
import { PriceContext, ItemContext } from "../../App";

export default function ComponentZ() {
    return (
      <div className="text-center">
        <PriceContext.Consumer>
          {(price) => (
            <ItemContext.Consumer>
              {(item) => (
                <h1>
                  Price context {price} - Item context {item}
                </h1>
              )}
            </ItemContext.Consumer>
          )}
        </PriceContext.Consumer>
      </div>
    );
}
  