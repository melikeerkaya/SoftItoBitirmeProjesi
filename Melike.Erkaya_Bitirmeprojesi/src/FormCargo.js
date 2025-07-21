import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import BeginPreFooter from "./BeginPreFooter";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

function FormCargo() {
  const [cargoNo, setCargoNo] = useState([]);
  const [cargoStatus, setCargoStatus] = useState([]);
  const [cargoCompany, setCargoCompany] = useState([]);
  const [result, setResult] = useState("");  // Sonuç mesajı için state

  const [formData, setFormData] = useState({
    cargoNoID: "",
    cargoDate: "",
    deliveryDate: "",
    cargoStatusID: "",
    cargoCompanyID: ""
  });

  useEffect(() => {
    axios
      .get("https://private-99d50-melike.apiary-mock.com/cargo")
      .then((response) => setCargoNo(response.data.CargoNo || []))
      .catch((error) => console.error("Veri çekme hatası:", error));

    axios
      .get("https://private-99d50-melike.apiary-mock.com/cargostatus")
      .then((response) => setCargoStatus(response.data.CargoStatusList || []))
      .catch((error) => console.error("Veri çekme hatası:", error));

    axios
      .get("https://private-99d50-melike.apiary-mock.com/cargocompany")
      .then((response) => setCargoCompany(response.data.CargoCompanyList || []))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  // Form verisini güncellemek için kullanılan fonksiyon
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = async (e) => {
    e.preventDefault();  // Formun varsayılan submit işlemini engelle

    // Gönderilecek veriyi oluştur
    const requestBody = {
      cargoNoID: formData.cargoNoID,
      cargoDate: formData.cargoDate,
      deliveryDate: formData.deliveryDate,
      cargoStatusID: formData.cargoStatusID,
      cargoCompanyID: formData.cargoCompanyID,
    };

    try {
      // POST isteği gönder
      const response = await axios.post("https://private-99d50-melike.apiary-mock.com/button", requestBody);

      // Gelen cevaba göre sonucu ayarla
      if (response.data.result === "success") {
        setResult("Kargo Kaydı Başarıyla Kaydedildi");
      } else {
        setResult("kayıt başırılı bir şekilde olşturuldu.");
      }
    } catch (error) {
      console.error("POST isteği hatası:", error);
      setResult("tekrar deneyin.");
    }
  };

  return (
    <div className="page-md">
      <div className="page-header">
        <Header />
        <HeaderMenu />
      </div>
      <div className="page-container">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Kargo Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Kargo No</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cargoNoID"
                              value={formData.cargoNoID}
                              onChange={handleChange}
                            >
                              {cargoNo.map((item) => (
                                <option key={item.CargoNoID} value={item.CargoNoID}>
                                  {item.CargoNoName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">Kargo Tarihi</label>
                          <div className="col-md-9">
                            <input
                              className="form-control input-medium date-picker"
                              type="date"
                              name="cargoDate"
                              value={formData.cargoDate}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">Teslim Tarihi</label>
                          <div className="col-md-9">
                            <input
                              className="form-control input-medium date-picker"
                              type="date"
                              name="deliveryDate"
                              value={formData.deliveryDate}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Kargo Durumu</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cargoStatusID"
                              value={formData.cargoStatusID}
                              onChange={handleChange}
                            >
                              {cargoStatus.map((item) => (
                                <option key={item.CargoStatusID} value={item.CargoStatusID}>
                                  {item.CargoStatusName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Kargo Firması</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cargoCompanyID"
                              value={formData.cargoCompanyID}
                              onChange={handleChange}
                            >
                              <option value="">Kargo Firması Seçiniz</option>
                              {cargoCompany.map((item) => (
                                <option key={item.CargoCompanyID} value={item.CargoCompanyID}>
                                  {item.CargoCompanyName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-actions right">
                        <button type="submit" className="btn green">
                          Kaydet
                        </button>
                      </div>
                    </form>
                    {/* Sonuç mesajı */}
                    {result && <div className="alert alert-info">{result}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BeginPreFooter />
      <Footer />
    </div>
  );
}

export default FormCargo;