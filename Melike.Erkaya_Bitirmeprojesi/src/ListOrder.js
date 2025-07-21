
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import BeginPreFooter from "./BeginPreFooter";
import Footer from "./Footer";
function ListOrder() {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    axios
      .get("https://private-99d50-melike.apiary-mock.com/orderlist")
      .then((response) => setorders(response.data.orders || []))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

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
          <div className="page-head">
            <div className="container">
              {/* BEGIN PAGE TITLE */}
              {/* END PAGE TITLE */}
              {/* BEGIN PAGE TOOLBAR */}
              <div className="page-toolbar">
                {/* BEGIN THEME PANEL */}
                <div className="btn-group btn-theme-panel">
                  <a href="javascript:;" className="btn dropdown-toggle" data-toggle="dropdown">
                    <i className="icon-settings" />
                  </a>
                  <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <h3>THEME COLORS</h3>
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <ul className="theme-colors">
                              <li className="theme-color theme-color-default" data-theme="default">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Default</span>
                              </li>
                              <li className="theme-color theme-color-blue-hoki" data-theme="blue-hoki">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Blue Hoki</span>
                              </li>
                              <li className="theme-color theme-color-blue-steel" data-theme="blue-steel">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Blue Steel</span>
                              </li>
                              <li className="theme-color theme-color-yellow-orange" data-theme="yellow-orange">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Orange</span>
                              </li>
                              <li className="theme-color theme-color-yellow-crusta" data-theme="yellow-crusta">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Yellow Crusta</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <ul className="theme-colors">
                              <li className="theme-color theme-color-green-haze" data-theme="green-haze">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Green Haze</span>
                              </li>
                              <li className="theme-color theme-color-red-sunglo" data-theme="red-sunglo">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Red Sunglo</span>
                              </li>
                              <li className="theme-color theme-color-red-intense" data-theme="red-intense">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Red Intense</span>
                              </li>
                              <li className="theme-color theme-color-purple-plum" data-theme="purple-plum">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Purple Plum</span>
                              </li>
                              <li className="theme-color theme-color-purple-studio" data-theme="purple-studio">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Purple Studio</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                        <h3>LAYOUT</h3>
                        <ul className="theme-settings">
                          <li>
                            Theme Style
                            <select className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" data-original-title="Change theme style" data-container="body" data-placement="left">
                              <option value="boxed" selected="selected">Square corners</option>
                              <option value="rounded">Rounded corners</option>
                            </select>
                          </li>
                          <li>
                            Layout
                            <select className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips" data-original-title="Change layout type" data-container="body" data-placement="left">
                              <option value="boxed" selected="selected">Boxed</option>
                              <option value="fluid">Fluid</option>
                            </select>
                          </li>
                          <li>
                            Top Menu Style
                            <select className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change top menu dropdowns style" data-container="body" data-placement="left">
                              <option value="dark" selected="selected">Dark</option>
                              <option value="light">Light</option>
                            </select>
                          </li>
                          <li>
                            Top Menu Mode
                            <select className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
                              <option value="fixed">Fixed</option>
                              <option value="not-fixed" selected="selected">Not Fixed</option>
                            </select>
                          </li>
                          <li>
                            Mega Menu Style
                            <select className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change mega menu dropdowns style" data-container="body" data-placement="left">
                              <option value="dark" selected="selected">Dark</option>
                              <option value="light">Light</option>
                            </select>
                          </li>
                          <li>
                            Mega Menu Mode
                            <select className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) mega menu" data-container="body" data-placement="left">
                              <option value="fixed" selected="selected">Fixed</option>
                              <option value="not-fixed">Not Fixed</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END THEME PANEL */}
              </div>
              {/* END PAGE TOOLBAR */}
            </div>
          </div>
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
                  <a href="FormOrder.html">Sipariş Yönetimi</a>
                  <i className="fa fa-circle" />
                </li>
                <li className="active">
                  Sipariş Listesi
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
                        <span className="caption-subject font-green-sharp bold">Sipariş Listesi</span>
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
                              Siparişini Veren
                            </th>
                            <th>
                              Ürün ID
                            </th>
                            <th>
                              Adet
                            </th>
                            <th>
                              Birim Fiyat
                            </th>
                            <th>
                              Toplam Fiyat
                            </th>
                            <th>
                              Para Birimi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                           {/* Dinamik olarak veriyi döngü ile tabloya ekliyoruz */}
                           {orders.map((orders) => (
                            <tr key={orders.customer}>
                              <td>{orders.customer}</td>
                              <td>{orders.product_id}</td>
                              <td>{orders.quantity}</td>
                              <td>{orders.unit_price}</td>
                              <td>{orders.total_price}</td>
                              <td>{orders.currency}</td>
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
  export default ListOrder;