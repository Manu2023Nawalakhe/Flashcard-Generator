import * as Yup from "yup";

//getting yup for form validation

export const formSchema = Yup.object({
  cardName: Yup.string()
    .min(3, "Card Name Should be atleast 3 chars long")
    .max(15)
    .required("Please enter a Title"), //displays error if the card name is less than 3 chars and does not allow more than 15 chars
  cardDesc: Yup.string()
    .min(3, "Card Description Should be atleast 3 chars long")
    .max(500)
    .required("Please enter Description"), //displays error if card less than 3 chars and does not allow more than 15 chars
  cardImg: Yup.mixed().required("Required"), //displays error - required when the image is not uploaded
  terms: Yup.array(
    //expects an array value  called terms with following object value
    Yup.object({
      termName: Yup.string()
        .min(3, "Term Name must be atleast 3 chars long")
        .max(15)
        .required("Please enter a Term Name"), //displays error if the term name is less than 3 chars and does not allow more than 15 chars
      termDef: Yup.string()
        .min(3, "Term Defination must be atleast 3 Chars long")
        .max(500)
        .required("please enter a Term defination"), //displays error if term defination is less tha 3 chars and does not allow more than 15 chars
      termImg: Yup.mixed(), //expects an image file but not required
    })
  ),
});
