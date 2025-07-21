  import React, { useState, useEffect } from "react"; // useState ve useEffect import edilmesi gerek
  import axios from "axios"; // axios import edilmesi gerek
  import Header from "./Header";
  import HeaderMenu from "./HeaderMenu";
  import PageHead from "./PageHead";
  import BeginPreFooter from "./BeginPreFooter";
  import Footer from "./Footer";

  function ListCargo() {
    // State'ler: Kargo listesi
    const [cargoList, setCargoList] = useState([]);

    // useEffect ile API'den veri çekme
    useEffect(() => { 
      // Asenkron veri çekme işlemi
      const getCargoList = async () => {
        const response = await axios.get("https://private-f2e779-itoapi.apiary-mock.com/cargo");
        setCargoList(response.data.Cargos); // JSON verisini state'e kaydediyoruz
      };

      getCargoList(); // API'yi çağırıyoruz
    }, []); // Bileşen yüklendiğinde bir kere çalışacak

    return (
      <div className="page-md">
        <div className="page-header">
          <Header />
          <HeaderMenu />
        </div>

        <div className="page-container">
          {/* PAGE HEAD */}
          <PageHead />
          
          {/* PAGE CONTENT */}
          <div className="page-content">
            <div className="container">
              <PageHead/>

              {/* Tablo ve Veriler */}
              <div className="row">
                <div className="col-md-12">
                  <div className="portlet light">
                    <div className="portlet-title">
                      <div className="caption">
                        <span className="caption-subject font-green-sharp bold">Kargo Listesi</span>
                      </div>
                      <div className="tools">
                        <a href="javascript:;" className="collapse"></a>
                      </div>
                    </div>
                    <div className="portlet-body flip-scroll">
                      <table className="table table-bordered table-striped table-condensed flip-content">
                        <thead className="flip-content">
                          <tr>
                            <th width="20%">Sipariş No</th>
                            <th>Kargo Tarihi</th>
                            <th>Teslim Tarihi</th>
                            <th>Kargo Durumu</th>
                            <th>Kargo Firması</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Dinamik olarak veriyi döngü ile tabloya ekliyoruz */}
                          {cargoList.map((cargo, index) => (
                            <tr key={index}>
                              <td>{cargo.CargoNo}</td>
                              <td className="numeric">{cargo.CargoDate}</td>
                              <td className="numeric">{cargo.DeliveryDate}</td>
                              <td>{cargo.CargoStatus}</td>
                              <td>{cargo.CargoCompany}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <BeginPreFooter />
        <Footer />

        <div className="scroll-to-top">
          <i className="icon-arrow-up" />
        </div>
      </div>
    );
  }

  export default ListCargo;