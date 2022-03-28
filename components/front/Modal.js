import Image from "next/image";
import { useContext } from "react";
import { SThreeSmallFormSection } from "./my-styled-component";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { AppContext } from "../../app";

const myValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function SmallFormSectionPage() {
  const { navPhoneActive, setNavPhoneActive } = useContext(AppContext);

  return (
    <SThreeSmallFormSection className={navPhoneActive ? "active" : ""}>
      <div className="close-modal" onClick={() => setNavPhoneActive(false)} />
      <div className="container">
        <Formik
          validationSchema={myValidationSchema}
          initialValues={{
            fullName: "",
            email: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            const name = values.fullName;
            const email = values.email;
            const data = {
              name,
              email,
            };
            await fetch("/api/action_pdf", {
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
                console.log("xatoo", e);
              })
              .then((res) => {
                if (res.status == 200) {
                  setNavPhoneActive(false);
                  resetForm({ fullName: "", email: "" });
                  const element = document.createElement("a");
                  element.href = "/FAM TRIP 2021-2022 in Uzbekistan..pdf";
                  element.download = "FAM TRIP 2021-2022 in Uzbekistan..pdf";
                  element.click();
                }
              });
          }}
        >
          {({ errors, touched, isValid }) => {
            return (
              <Form className="form-box">
                <div
                  className="close-btn"
                  onClick={() => setNavPhoneActive(false)}
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
                    <Field type="text" name="fullName" />
                  </div>
                </div>
                <div className="item-box">
                  <label htmlFor="email">E-mail</label>
                  <div
                    className={`input-box ${
                      touched.email && errors.email ? "error-class" : ""
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
                    <Field type="email" name="email" />
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
    </SThreeSmallFormSection>
  );
}
