function PageHead(){
    return(
        
      <ul className="page-breadcrumb breadcrumb">
      <li>
        <a href="#">Ana Sayfa</a><i className="fa fa-circle" />
      </li>
      <li>
        <a href="FormOrder.html">Sipariş Yönetimi</a>
        <i className="fa fa-circle" />
      </li>
      <li className="active">
        Kargo Listesi
      </li>
    </ul>
    );
}
export default PageHead;