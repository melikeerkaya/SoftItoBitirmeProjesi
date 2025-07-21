import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import BeginPreFooter from "./BeginPreFooter";
import Footer from "./Footer";
import PageHead from "./PageHead";
function ListMusteri() {
    // State'ler: Kargo listesi
    const [MusteriBilgi, setMusteriBilgi] = useState([]);

    // useEffect ile API'den veri çekme
    useEffect(() => { 
      // Asenkron veri çekme işlemi
      const getListMusteri = async () => {
        const response = await axios.get("https://private-99d50-melike.apiary-mock.com/musteribilgi");
        setMusteriBilgi(response.data.MusteriBilgi); // JSON verisini state'e kaydediyoruz
      };

      getListMusteri(); // API'yi çağırıyoruz
    }, []); // Bileşen yüklendiğinde bir kere çalışacak

    return (
        <div>
        <div className="page-header">
          {/* BEGIN HEADER TOP */}
      <Header/>
          {/* END HEADER TOP */}
          {/* BEGIN HEADER MENU */}
          <HeaderMenu/>
          {/* END HEADER MENU */}
        </div>
        {/* END HEADER */}
        {/* BEGIN PAGE CONTAINER */}
        <div className="page-container">
          {/* BEGIN PAGE HEAD */}
      <PageHead/>
          {/* END PAGE HEAD */}
          {/* BEGIN PAGE CONTENT */}
          <div className="page-content">
            <div className="container">
              {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
              <div className="modal fade" id="portlet-config" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
                      <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                      Widget settings form goes here
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn blue">Save changes</button>
                      <button type="button" className="btn default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
              {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
              {/* BEGIN PAGE BREADCRUMB */}
              <ul className="page-breadcrumb breadcrumb">
                <li>
                  <a href="#">Ana Sayfa</a><i className="fa fa-circle" />
                </li>
                <li>
                  <a href="form_controls.html">Müşteri Yönetimi</a>
                  <i className="fa fa-circle" />
                </li>
                <li className="active">
                  Müşteri Listesi
                </li>
              </ul>
              {/* END PAGE BREADCRUMB */}
              {/* BEGIN PAGE CONTENT INNER */}
              <div className="row">
                <div className="col-md-12">
                  {/* BEGIN SAMPLE TABLE PORTLET*/}
                  <div className="portlet light">
                    <div className="portlet-title">
                      <div className="caption">
                        <span className="caption-subject font-green-sharp bold">Müşteri Listesi</span>
                      </div>
                      <div className="tools">
                        <a href="javascript:;" className="collapse">
                        </a>
                      </div>
                    </div>
                    <div className="portlet-body flip-scroll">
                      <table className="table table-bordered table-striped table-condensed flip-content">
                        <thead className="flip-content">
                          <tr>
                            <th width="20%">
                              Ad
                            </th>
                            <th>
                              Soyad
                            </th>
                            <th>
                              Mail Adresi
                            </th>
                            <th>
                              GSM
                            </th>
                            <th>
                              Adres
                            </th>
                            <th>
                              Şehir
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                           {/* Dinamik olarak veriyi döngü ile tabloya ekliyoruz */}
                           {MusteriBilgi.map((musteribilgi, index) => (
                            <tr key={index}>
                              <td>{musteribilgi.CargoAd}</td>
                              <td className="numeric">{musteribilgi.CargoSoyad}</td>
                              <td>{musteribilgi.CustomerMail}</td>
                              <td className="numeric">{musteribilgi.CargoGsm}</td>
                              <td>{musteribilgi.CargoAdres}</td>
                              <td>{musteribilgi.CargoSehir}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* END PAGE CONTENT INNER */}
            </div>
          </div>
          {/* END PAGE CONTENT */}
        </div>
        {/* END PAGE CONTAINER */}
        {/* BEGIN PRE-FOOTER */}
        <BeginPreFooter/>
        {/* END PRE-FOOTER */}
        {/* BEGIN FOOTER */}
        <Footer/>
        <div className="scroll-to-top">
          <i className="icon-arrow-up" />
        </div>
      </div>
    );
  }
  export default ListMusteri;