import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import BeginPreFooter from "./BeginPreFooter";
import Footer from "./Footer";

function FormOrder() {
  const [Para, setPara] = useState([]);
  const [message, setMessage] = useState(""); // Başarı mesajı için state

  useEffect(() => {
    axios
      .get("https://private-99d50-melike.apiary-mock.com/ParaBirimi")
      .then((response) => setPara(response.data.Para || []))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      strName: e.target.strName.value,
      strId: e.target.strId.value,
      strPiece: e.target.strPiece.value,
      strPrice: e.target.strPrice.value,
      strTotalPrice: e.target.strTotalPrice.value,
      cmbCurrency: e.target.cmbCurrency.value,
    };

    try {
      await axios.post("https://private-99d50-melike.apiary-mock.com/button", formData);
      setMessage("İşlem başarılı bir şekilde gerçekleştirilmiştir.");
    } catch (error) {
      setMessage("Kayıt sırasında bir hata oluştu.");
      console.error("Kayıt hatası:", error);
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
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="FormOrder.html">Sipariş Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Sipariş</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Sipariş Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Siparişi Veren</label>
                          <div className="col-md-9">
                            <input type="text" name="strName" className="form-control input-sm" placeholder="Müşteri Adını Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ürün ID</label>
                          <div className="col-md-9">
                            <input type="text" name="strId" className="form-control input-sm" placeholder="Ürün ID Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Adet</label>
                          <div className="col-md-9">
                            <input type="number" name="strPiece" className="form-control input-sm" placeholder="Adet Bilgisi Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Birim Fiyat</label>
                          <div className="col-md-9">
                            <input type="number" name="strPrice" className="form-control input-sm" placeholder="Birim Fiyatı Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Toplam Fiyat</label>
                          <div className="col-md-9">
                            <input type="number" name="strTotalPrice" className="form-control input-sm" placeholder="Toplam Fiyatı Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Para Birimi</label>
                          <div className="col-md-9">
                            <select className="form-control" name="cmbCurrency" required>
                              <option value="">Para Birimi Seçiniz</option>
                              {Para.map((item) => (
                                <option key={item.ParaID} value={item.ParaID}>
                                  {item.ParaName}
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

      <BeginPreFooter />
      <Footer />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
    </div>
  );
}

export default FormOrder;