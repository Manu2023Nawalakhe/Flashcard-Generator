import React from "react";
import { useFormikContext } from "formik";
import { MdOutlineDeleteForever } from "react-icons/md";
import { errorToast } from "../ToastifyNotification/index";
import { IMAGE_FORMATS } from "./ImageFormat";

function TermImage(props) {
  const formikProps = useFormikContext(); //formik context cause handling formik values via a child component
  return (
    <>
      {props.term.termImg === "" ? (
        //in case the termImg is empty string, then show the select img button
        <label htmlFor={`img${props.index}`}>
          <div
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mt-7 mb-[4px] border-[var(--color-red)] border mx-auto w-32 p-2 text-[var(--color-red)] rounded-lg shadow-md hover:translate-y-px hover:bg-[var(--color-red)] hover:text-white transition-all ease-in-out grid place-content-center font-semibold"
          >
            Select Image
          </div>
        </label>
      ) : (
        //else show the 95px variant of the image with delete button to reset the img to empty
        <div className="grid place-content-center md:flex md:space-x-4 md:space-y-4 md:my-5">
          <div className="w-[130px] relative p-4 overflow-hidden flex">
            <MdOutlineDeleteForever
              className="absolute top-4 -right-0.5 cursor-pointer "
              color="var(--color-red)"
              size={"1.2rem"}
              onClick={() =>
                formikProps.setFieldValue(`terms[${props.index}].termImg`, "")
              }
            />
            <label htmlFor={`img${props.index}`}>
              <img
                className="border-2 border-[var(--color-red)] border-solid rounded-md min-w-[95px] min-h-[95px] max-w-[95px] max-h-[95px] "
                src={props.term.termImg}
                alt={props.term.termName}
              />
            </label>
          </div>
        </div>
      )}
      {/* input field to handel the image and the image file type */}
      <input
        type="file"
        name={`terms.${props.index}.termImg`}
        id={`img${props.index}`}
        className="hidden"
        onChange={(e) => {
          if (
            e.target.files[0] &&
            !IMAGE_FORMATS.includes(e.target.files[0].type)
            // if image type is not supported,toast file not supported
          ) {
            errorToast("Image format not supported", "top-center");
          } else if (IMAGE_FORMATS.includes(e.target.files[0].type)) {
            // else set the termImg to data blob
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = () => {
              formikProps.setFieldValue(
                `terms[${props.index}].termImg`,
                fileReader.result
              );
            };
          }
        }}
      />
    </>
  );
}

export default TermImage;
