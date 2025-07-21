import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import BeginPreFooter from "./BeginPreFooter";
import Footer from "./Footer";

function FormMusteri() {
  const [Sehir, setSehir] = useState([]);
  const [formData, setFormData] = useState({
    strName: "",
    strSurname: "",
    strMail: "",
    strGSM: "",
    strAdres: "",
    cmbCity: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://private-99d50-melike.apiary-mock.com/sehir")
      .then((response) => setSehir(response.data.Sehir || []))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://private-99d50-melike.apiary-mock.com/button", formData);
      setMessage("İşlem başarılı bir şekilde gerçekleştirilmiştir.");
    } catch (error) {
      setMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
      console.error("Post işlemi hatası:", error);
    }
  };

  return (
    <div>
      <div className="page-header">
        <Header />
        <HeaderMenu />
      </div>

      <div className="page-container">
        <div className="page-content">
          <div className="container">
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a><i className="fa fa-circle" />
              </li>
              <li>
                <a href="form_controls.html">Müşteri Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Müşteri Kayıt Formu</li>
            </ul>

            <div className="row">
              <div className="col-md-12 ">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">Müşteri Kayıt Formu</span>
                    </div>
                  </div>

                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ad *</label>
                          <div className="col-md-9">
                            <input type="text" name="strName" className="form-control input-sm" value={formData.strName} onChange={handleChange} placeholder="Adınızı Giriniz..." required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Soyad *</label>
                          <div className="col-md-9">
                            <input type="text" name="strSurname" className="form-control input-sm" value={formData.strSurname} onChange={handleChange} placeholder="Soyadınızı Giriniz..." required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Mail Adresi *</label>
                          <div className="col-md-9">
                            <input type="email" name="strMail" className="form-control input-sm" value={formData.strMail} onChange={handleChange} placeholder="adiniz@ymail.com" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">GSM</label>
                          <div className="col-md-9">
                            <input type="text" name="strGSM" className="form-control input-sm" value={formData.strGSM} onChange={handleChange} placeholder="5054443322" />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Adres</label>
                          <div className="col-md-9">
                            <textarea className="form-control" rows={3} name="strAdres" value={formData.strAdres} onChange={handleChange}></textarea>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Şehir</label>
                          <div className="col-md-9">
                            <select className="form-control" name="cmbCity" value={formData.cmbCity} onChange={handleChange} required>
                              <option value="">Şehir Seçiniz</option>
                              {Sehir.map((item) => (
                                <option key={item.SehirID} value={item.SehirID}>
                                  {item.SehirName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form-actions right">
                          <button type="submit" className="btn green">Kaydet</button>
                        </div>

                        {message && <p className="text-success mt-3">{message}</p>}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BeginPreFooter />
      <Footer />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
    </div>
  );
}

export default FormMusteri;