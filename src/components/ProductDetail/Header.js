import { useState } from "react";
import { Link } from "react-router-dom";

import ChangeImage from "./ChangeImage";
import ConfirmDeleteItem from "./ConfirmDeleteItem";
import DeleteItem from "./DeleteItem";
import EditItem from "../ProductDetail/EditItem";
import UploadImage from "./UploadImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const [showConfirmDeleteItem, setShowConfirmDeleteItem] = useState(false);

  return (
    <div className="pb-4">
      <div className="text-lg">
        <Link to="/" className="no-underline text-tufts-blue">
          <FontAwesomeIcon icon={faAngleLeft} /> Inventory
        </Link>
        <span className="text-granite-gray">
          {" "}
          / Item #{props.activeProductId}
        </span>
      </div>
      <div className="flex justify-between pt-3">
        <div>
          <h2 className="phone-screen:text-2xl tablet-screen:text-3xl">
            {props.activeProduct[0].name}
          </h2>
        </div>
        <div className="flex">
          {props.activeProduct[0].img === undefined ? (
            <UploadImage
              activeProductId={props.activeProductId}
              forceRender={props.forceRender}
            />
          ) : (
            <ChangeImage
              activeProductId={props.activeProductId}
              activeProduct={props.activeProduct}
              // forceRender={props.forceRender}
            />
          )}
          <EditItem
            activeProductId={props.activeProductId}
            activeProduct={props.activeProduct}
            forceRender={props.forceRender}
          />
          <DeleteItem
            showConfirmDeleteItem={showConfirmDeleteItem}
            setShowConfirmDeleteItem={setShowConfirmDeleteItem}
            activeProductId={props.activeProductId}
          />
        </div>
      </div>
      {showConfirmDeleteItem ? (
        <ConfirmDeleteItem
          showConfirmDeleteItem={showConfirmDeleteItem}
          setShowConfirmDeleteItem={setShowConfirmDeleteItem}
          activeProductId={props.activeProductId}
        />
      ) : (
        ""
      )}
    </div>
  );
}