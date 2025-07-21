import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import BeginPreFooter from "./BeginPreFooter";
import Footer from "./Footer";

function FormProduct() {
  const [cargoProductList, setCargoProductList] = useState([]);
  const [cargoMoneyList, setCargoMoneyList] = useState([]);
  const [message, setMessage] = useState(""); // Başarı mesajı için state

  useEffect(() => {
    axios
      .get("https://private-99d50-melike.apiary-mock.com/cargoproduct")
      .then((response) => {
        setCargoProductList(response.data.CargoProductList || []); 
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://private-99d50-melike.apiary-mock.com/cargomoney")
      .then((response) => {
        setCargoMoneyList(response.data.CargoMoneyList || []);
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      strName: e.target.strName.value,
      strId: e.target.strId.value,
      strStck: e.target.strStck.value,
      strPrice: e.target.strPrice.value,
      cmbCtgry: e.target.cmbCtgry.value,
      cmbCurrency: e.target.cmbCurrency.value,
    };

    try {
      await axios.post("https://private-99d50-melike.apiary-mock.com/button", formData);
      setMessage("Ürün başarılı bir şekilde kaydedildi.");
    } catch (error) {
      setMessage("Ürün kaydında bir hata oluştu.");
      console.error("Kayıt hatası:", error);
    }
  };

  return (
    <div>
      {/* BEGIN HEADER */}
      <div className="page-header">
        <Header />
        <HeaderMenu />
      </div>
      {/* END HEADER */}

      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="form_controls.html">Ürün Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Ürün Kayıt</li>
            </ul>

            {/* FORM PORTLET */}
            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Ürün Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form
                      className="form-horizontal"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-body">
                        {/* Ürün Adı */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ürünün Adı *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strName"
                              className="form-control input-sm"
                              maxLength={50}
                              placeholder="Ürün Adını Giriniz..."
                              required
                            />
                          </div>
                        </div>

                        {/* Ürün ID */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ürün ID *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strId"
                              className="form-control input-sm"
                              maxLength={50}
                              placeholder="Ürün Id'sini Giriniz..."
                              required
                            />
                          </div>
                        </div>

                        {/* Kategori */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">Kategori</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cmbCtgry"
                              required
                            >
                              <option value={1}>*Lütfen Seçim Yapınız</option>
                              {cargoProductList.map((item) => (
                                <option key={item.CargoProductID} value={item.CargoProductID}>
                                  {item.CargoProductName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Stok Durumu */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">Stok Durumu *</label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strStck"
                              className="form-control input-sm"
                              placeholder="Stok Durumunu Giriniz..."
                              required
                            />
                          </div>
                        </div>

                        {/* Fiyat */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">Fiyat</label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strPrice"
                              className="form-control input-sm"
                              placeholder="Fiyat Bilgisi Giriniz..."
                            />
                          </div>
                        </div>

                        {/* Para Birimi */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">Para Birimi</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cmbCurrency"
                            >
                              {cargoMoneyList.map((item) => (
                                <option key={item.CargoMoneyID} value={item.CargoMoneyID}>
                                  {item.CargoMoneyName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form-actions right">
                          <button type="submit" className="btn green">
                            Kaydet
                          </button>
                        </div>
                      </div>
                    </form>
                    {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END PAGE CONTENT */}

      <BeginPreFooter />
      <Footer />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
    </div>
  );
}

export default FormProduct;