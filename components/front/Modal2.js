import Image from "next/image";
import { useContext } from "react";
import { NavSmallFormSection } from "./my-styled-component";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { AppContext } from "../../app";
const my_validation = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.number()
    .min(8, "Too short!")
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
});
export default function SmallFormSectionPage() {
  const { pdfFormActive, setPdfFormActive } = useContext(AppContext);
  return (
    <NavSmallFormSection className={pdfFormActive ? "active" : ""}>
      <div className="close-modal" onClick={() => setPdfFormActive(false)} />
      <div className="container">
        <Formik
          validationSchema={my_validation}
          initialValues={{
            fullName: "",
            phoneNumber: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            const name = values.fullName;
            const phone = values.phoneNumber;
            const data = {
              name,
              phone,
            };
            if ((phone, name)) {
              await fetch("/api/action_phone", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
              })
                .catch((e) => {
                  console.log("error", e);
                })
                .then((res) => {
                  if (res.status == 200) {
                    setPdfFormActive(false);
                    resetForm({ fullName: "", phoneNumber: "" });
                  }
                });
            } else {
              e.preventDefault();
            }
          }}
        >
          {({ errors, touched, isValid }) => {
            return (
              <Form className="form-box">
                <div
                  className="close-btn"
                  onClick={() => setPdfFormActive(false)}
                >
                  <Image
                    alt=""
                    layout="fill"
                    src="/images/Certificate/close-btn.png"
                  />
                </div>
                <h2 className="title">
                  Bestellen Sie hier einen Anruf und wir werden Sie zurückrufen:
                </h2>
                <div className="item-box">
                  <label htmlFor="fullName">Vor- und Nachname</label>
                  <div
                    className={`input-box ${
                      touched.fullName && errors.fullName ? "error-class" : ""
                    }`}
                  >
                    <div className="icon icon1">
                      <Image
                        alt=""
                        src="/images/Contact/email_icon.png"
                        layout="fill"
                        objectFit={"cover"}
                      />
                    </div>
                    <Field type="text" name="fullName" id="fullName" />
                  </div>
                </div>
                <div className="item-box">
                  <label htmlFor="phoneNumber">Phone</label>
                  <div
                    className={`input-box ${
                      touched.phoneNumber && errors.phoneNumber
                        ? "error-class"
                        : ""
                    }`}
                  >
                    <div className="icon icon2">
                      <Image
                        alt=""
                        src="/images/Contact/email_icon.png"
                        layout="fill"
                        objectFit={"cover"}
                      />
                    </div>
                    <Field type="tel" name="phoneNumber" id="phoneNumber" />
                  </div>
                </div>
                <div className="submit-box">
                  <button type="submit" disabled={!isValid}>
                    senden
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </NavSmallFormSection>
  );
}
