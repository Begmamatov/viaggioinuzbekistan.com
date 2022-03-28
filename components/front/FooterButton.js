import { useState, useEffect } from "react";
import { Footerbtns } from "./my-styled-component";
import data from "/data.json";

export default function Footer_Section() {
  const [money, setMoney] = useState("");
  const [date, setDate] = useState(0);

  const obj = data["footer-button"];
  const submitHandler = async (e) => {};

  const btnClickHandle = (e) => {
    e.target.classList.add("click");
    setTimeout(() => {
      e.target.classList.remove("click");
    }, 250);
  };
  useEffect(() => {
    let newData = Date.now();
    setDate(newData);
  }, []);

  return (
    <Footerbtns>
      <div className="container">
        <div className="content-box">
          <h2 className="content-title">{obj["content-title"]}</h2>
          <form
            onSubmit={submitHandler}
            action="https://pay.ofb.uz"
            method="POST"
            className="content-btn"
          >
            <div className="content-input">
              <input
                type="number"
                min={0}
                onChange={(e) => setMoney(e.target.value)}
                value={money}
              />
            </div>
            <button type="submit" onClick={btnClickHandle}>
              {obj["content-btn"]}
            </button>
            <input
              type="hidden"
              name="merchantId"
              value="666fbf0b490841a5a8a8f4c8ec268d2cSzRkMlYwRTdKUUVnNllvYS80Y2xaTFFJMDNxK3hueitnVUlPUmpEZ3k0azdsVktQZ2lZQWtYNm92SEcwMUM2OQ=="
            />
            <input type="hidden" name="amount" value={100 * money} />
            <input type="hidden" name="currency" value="USD" />
            <input
              type="hidden"
              name="description"
              value="viaggioinuzbekistan.com"
            />
            <input
              type="hidden"
              name="callback"
              value="https://viaggioinuzbekistan.com"
            />
            <input type="hidden" name="order_id" value={date} />
          </form>
        </div>
      </div>
    </Footerbtns>
  );
}
