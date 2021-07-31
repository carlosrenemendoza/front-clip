import React, { Component } from "react";
import { Row, Card, CardBody, Button } from "reactstrap";
import cardImg from '../assets/cardImg.jpeg';
/*=============================================
=            Dashboard Component              =
=============================================*/
class creditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  /*=============================================
  =            Get Info Dashboard Function      =
  =============================================*/
  getInfoDashBoard = async () => {
    try {
    } catch (error) {
      console.log("error", error);
    }
  };

  componentDidMount() {
    this.getInfoDashBoard();
  }

  getEpisodio = () => {};

  // buildRows = (name, item, flat2) => {
  //   let rows = config[name].map((e) => {
  //     return (
  //       <div
  //         style={{ paddingTop: "1px", marginBottom: "10px" }}
  //         className={
  //           e.id === "personajeepisode"
  //             ? "col-md-12"
  //             : flat2
  //             ? "col-md-12"
  //             : "col-md-6"
  //         }
  //       >
  //         <div className="row">
  //           <div className={"col-md-6"}>
  //             <span
  //               style={{
  //                 color: "rgb(84 83 80 / 75%)",
  //                 fontWeight: "bold",
  //                 fontSize: "12px",
  //               }}
  //             >
  //               {e.label}
  //             </span>
  //           </div>
  //           <div style={{ color: "#e36a6a" }} className="col-md-12 ">
  //             {e.id === "image" ? (
  //               <img
  //                 src={item[e.id]}
  //                 style={{ borderRadius: "3em" }}
  //                 className={flat2 ? "imgAvanzada" : "imgPers"}
  //                 alt="logo"
  //               />
  //             ) : e.id === "personajelocation" ? (
  //               <span>{item.location.name ? item.location.name : ""}</span>
  //             ) : e.id === "personajeepisode" ? (
  //               this.getEpisodio(item.episodiolink)
  //             ) : e.id === "ubicacionresidents" ? (
  //               <span>{item.residents ? item.residents.length : ""}</span>
  //             ) : e.id === "created" ? (
  //               <span>
  //                 {item[e.id] ? moment(item[e.id]).format("YYYY-MM-DD") : ""}
  //               </span>
  //             ) : (
  //               <span>{item[e.id] ? item[e.id] : ""}</span>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  //   return rows;
  // };

  render() {
    const {} = this.state;

    return (
      <>
        <section className="App-content">
          <div className="col-md-12">
            <div className="cardimgone">
              <div className="divtreecard">
                <div className="divsecond">
                  <div className="divprime">
                  <img src={cardImg} className="card-img" alt="cardImg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 containerCenter">
              <Card className="myCard">
                <CardBody>hola</CardBody>
              </Card>
            </div>
          </div>{" "}
        </section>{" "}
      </>
    );
  }
}

export default creditCard;
