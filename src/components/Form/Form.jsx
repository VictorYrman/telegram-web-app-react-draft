import React, { useCallback, useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Form.css";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const { telegram } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };

    telegram.sendData(JSON.stringify(data));
  }, []);

  useEffect(() => {
    telegram.onEvent("mainButtonCLicked", onSendData);
    return () => {
      telegram.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

  useEffect(() => {
    telegram.MainButton.setParams({
      text: "Отправить данные",
    });
  }, []);

  useEffect(() => {
    if (!country || !street) {
      telegram.MainButton.hide();
    } else {
      telegram.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        type="text"
        className={"input"}
        placeholder={"Страна"}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        type="text"
        className={"input"}
        placeholder={"Улица"}
        value={street}
        onChange={onChangeStreet}
      />
      <select className={"select"} value={subject} onChange={onChangeSubject}>
        <option value={"physical"}>Физ. лицо</option>
        <option value={"legal"}>Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;
