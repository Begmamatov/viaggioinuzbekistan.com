import Image from "next/image";
import { SectionEight } from "./my-styled-component";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "yup-phone";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const my_validation = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  agencyName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  agencyAdress: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  pasportNumber: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.number()
    .min(8, "Too short!")
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  time: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function Section_Eight() {
  return (
    <SectionEight id="contact">
      <h2 className="title" id="sign-up">
        Vuoi partecipare? Registrati!
      </h2>
      <div className="container">
        <div className="content-box">
          <Formik
            validationSchema={my_validation}
            initialValues={{
              fullName: "",
              agencyName: "",
              agencyAdress: "",
              pasportNumber: "",
              phoneNumber: "",
              email: "",
              website: "",
              time: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              const name = values.fullName;
              const agent = values.agencyAdress;
              const location = values.agencyAdress;
              const pasport = values.pasportNumber;
              const phone = values.phoneNumber;
              const email = values.email;
              const website = values.website;
              const date = values.time;
              const data = {
                name,
                email,
                agent,
                location,
                pasport,
                phone,
                website,
                date,
              };
              await fetch("/api/action_bron", {
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
                    resetForm({
                      fullName: "",
                      agencyName: "",
                      agencyAdress: "",
                      pasportNumber: "",
                      phoneNumber: "",
                      email: "",
                      website: "",
                      time: "",
                    });
                  }
                });
            }}
          >
            {({ errors, touched, isValid }) => {
              return (
                <Form className="form">
                  <h3 className="form-title">Modulo di registrazione:</h3>
                  <div className="form-items">
                    <div className="form-left-box">
                      <div className="item-box">
                        <label htmlFor="fullName">Nome, Cognome</label>
                        <div
                          className={`input-box ${
                            touched.fullName && errors.fullName
                              ? "error-class"
                              : ""
                          }`}
                        >
                          <div className="icon">
                            <Image
                              alt=""
                              src="/form/icon-1.webp"
                              layout="fill"
                            />
                          </div>
                          <Field type="text" name="fullName" id="fullName" />
                        </div>
                      </div>

                      <div className="item-box">
                        <label htmlFor="agencyName">Agenzia</label>
                        <div
                          className={`input-box ${
                            touched.agencyName && errors.agencyName
                              ? "error-class"
                              : ""
                          }`}
                        >
                          <div className="icon">
                            <Image
                              alt=""
                              src="/form/icon-2.webp"
                              layout="fill"
                            />
                          </div>
                          <Field
                            type="text"
                            name="agencyName"
                            id="agencyName"
                          />
                        </div>
                      </div>

                      <div className="item-box">
                        <label htmlFor="agencyAdress">
                          L’indirizzo dell’agenzia
                        </label>
                        <div
                          className={`input-box ${
                            touched.agencyAdress && errors.agencyAdress
                              ? "error-class"
                              : ""
                          }`}
                        >
                          <div className="icon">
                            <Image
                              alt=""
                              src="/form/icon-3.webp"
                              layout="fill"
                            />
                          </div>
                          <Field
                            type="text"
                            name="agencyAdress"
                            id="agencyAdress"
                          />
                        </div>
                      </div>

                      <div className="item-box">
                        <label htmlFor="pasportNumber">
                          Numero di passaporto
                        </label>
                        <div
                          className={`input-box ${
                            touched.pasportNumber && errors.pasportNumber
                              ? "error-class"
                              : ""
                          }`}
                        >
                          <div className="icon">
                            <Image
                              alt=""
                              src="/form/icon-4.webp"
                              layout="fill"
                            />
                          </div>
                          <Field
                            type="text"
                            name="pasportNumber"
                            id="pasportNumber"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-right-box">
                      <div className="item-box">
                        <label htmlFor="phoneNumber">Telefono</label>
                        <div
                          className={`input-box ${
                            touched.phoneNumber && errors.phoneNumber
                              ? "error-class"
                              : ""
                          }`}
                        >
                          <div className="icon">
                            <Image
                              alt=""
                              src="/form/icon-5.webp"
                              layout="fill"
                            />
                          </div>
                          <Field
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                          />
                        </div>
                      </div>

                      <div className="item-box">
                        <label htmlFor="email">E-mail</label>
                        <div
                          className={`input-box ${
                            touched.email && errors.email ? "error-class" : ""
                          }`}
                        >
                          <div className="icon">
                            <Image
                              alt=""
                              src="/form/icon-6.webp"
                              layout="fill"
                            />
                          </div>
                          <Field type="email" name="email" id="email" />
                        </div>
                      </div>

                      <div className="item-box">
                        <label htmlFor="website">Web site</label>
                        <div className={`input-box`}>
                          <div className="icon">
                            <Image
                              alt=""
                              src="/form/icon-7.webp"
                              layout="fill"
                            />
                          </div>
                          <Field type="text" name="website" id="website" />
                        </div>
                      </div>

                      <div className="item-box">
                        <label htmlFor="website">
                          Scegli la data di partenza
                        </label>
                        <div
                          className={`input-box last-input-box ${
                            touched.time && errors.time ? "error-class" : ""
                          }`}
                        >
                          <Field as="select" name="time" id="time">
                            <option value="">Sciegliere</option>
                            <option value="03 - 09 Novembre 2021">
                              03 - 09 Novembre 2021
                            </option>
                            <option value="16 - 22 Marzo 2022">
                              16 - 22 Marzo 2022
                            </option>
                            <option value="08 - 14 Giugno 2022">
                              08 - 14 Giugno 2022
                            </option>
                            <option value="03 - 09 Agosto 2022">
                              03 - 09 Agosto 2022
                            </option>
                            <option value="02 - 08 Novembre 2022">
                              02 - 08 Novembre 2022
                            </option>
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button type="submit" disabled={!isValid}>
                      Registrati
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </SectionEight>
  );
}
