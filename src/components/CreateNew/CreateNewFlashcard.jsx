import React from "react";
import CardImage from "./CardImage";
import Terms from "./Terms";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues } from "./initialValues";
import { formSchema } from "../FormValidation";
import { useDispatch } from "react-redux";
import cardApp from "../../features/flashcards";
import { successToast } from "../ToastifyNotification";

function CreateNewFlashcard() {
  // component for creating new flashcard

  const dispatch = useDispatch(); //dispatch to upadate state
  return (
    <>
      <div className="md:mt-10 px-5 2xl:pl-44 2xl:pr-[20%] xl:px-20 my-5">
        <div>
          {/* initiating formik for handling form data and values */}
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema} //custom form schema implemented using yup
            onSubmit={(values, actions) => {
              actions.resetForm(); //resetting the form to no value
              dispatch(cardApp({ values })); //dispatching the value to store
              successToast("Flashcard Created", "top-center "); //Toasing the success message
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <div className="bg-white p-5 rounded-5 space-y-4">
                  <div className="grid md:flex">
                    <div
                      className={`flex flex-col md:order-first ${
                        props.values.cardImg === "" ? "order-1" : "order-2"
                      }`}
                    >
                      <h1 className="font-semibold text-slate-500">
                        Create Group*
                      </h1>
                      {/* Card Name Field - for Card group name & errors related to card Name */}
                      <Field
                        className="border-slate-400 focus:ring-0 active:ring-0 rounded-md md:w-96 p-2 bg-gray-100 border tex-md"
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cardName}
                        name="cardName"
                        maxLength={15}
                        placeholder={"Please enter Group Name [Max:15 Chars]"}
                      />
                      {
                        <p className="mx-auto text-sm text-[var(--color-red)]">
                          <ErrorMessage name={`cardName`} />
                        </p>
                      }
                    </div>
                    <div
                      className={`grid place-content-center md:inline-block md:mx-20 ${
                        props.values.cardImg === "" ? "order-2" : "order-1"
                      }`}
                    >
                      {/* Card image component - for Card image & errors related to description */}
                      <CardImage />
                    </div>
                  </div>
                  {/* Card description Field - for Card description & errors related to description */}
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-500">
                      Group Description*
                    </span>
                    <Field
                      as="textarea"
                      className="w-full border-slate-400 resize-none rounded-md md:w-3/4 md:h-40 p-2 bg-gray-100 border text-md "
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.cardDesc}
                      maxLength={500}
                      name="cardDesc"
                      placeholder={
                        "Please enter Group Desription [Max:500 Chars]"
                      }
                    />
                    <div>
                      <span className="text-sm text-slate-500">{`Chars left:${
                        500 - props.values.cardDesc.length
                      }`}</span>
                      <span className="mx-5 text-sm text-[var(--color-red)]">
                        <ErrorMessage name={`cardDesc`} />
                      </span>
                    </div>
                  </div>
                </div>
                {/* handling component for handling all the terms details */}
                <div>
                  {" "}
                  <Terms values={props.values} />
                </div>
                {/* handle submit button for the form */}
                <div className="grid place-content-center">
                  <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    data-testid="create"
                    className="mt-6 border-[var(--color-red)] border w-32 p-2 text-[var(--color-red)] rounded-lg shadow-md hover:-translate-y-px hover:bg-[var(--color-red)] hover:text-white transition-all ease-in-out grid place-content-center font-semibold"
                    type="submit"
                  >
                    Create
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default CreateNewFlashcard;
