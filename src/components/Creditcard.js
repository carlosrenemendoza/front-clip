import React, { Component } from "react";
import { Row, Card, CardBody, Button } from "reactstrap";
import cardImg from "../assets/fondo1.jpeg";
import chip from "../assets/traschip.png";
import macarandom from "../assets/visa.png";

/*=============================================
=            Dashboard Component              =
=============================================*/

let catForm = {
  EXPIRECTIODATE: [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ],
  YEARCARD: [
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
    { value: 2024, label: "2024" },
    { value: 2025, label: "2025" },
    { value: 2026, label: "2026" },
    { value: 2027, label: "2027" },
    { value: 2028, label: "2028" },
    { value: 2029, label: "2029" },
    { value: 2030, label: "2030" },
    { value: 2031, label: "2031" },
    { value: 2032, label: "2032" },
  ],
};

let formCardCred = [
  {
    id: "cardNumber",
    required: true,
    name: "cardNumber",
    className: "card-input col-md-12 marginBform",
    labelText: "Card Number",
    classNameLabel: "card-input__label",
    datatype: "Input",
    type: "tel",
    inputClass: "__input",
    value: "",
    maxlength: "14",
  },
  {
    id: "cardName",
    required: true,
    name: "cardName",
    className: "card-input col-md-12 marginBform",
    labelText: "Card Name",
    classNameLabel: "card-input__label",
    type: "",
    datatype: "Input",
    inputClass: "__input",
    value: "",
    maxlength: "34",
  },
  {
    id: "expirateMonth",
    required: true,
    name: "expirateMonth",
    className: "card-input col-md-4 marginBform",
    labelText: "Expiration Date",
    classNameLabel: "card-input__label",
    type: "",
    datatype: "Select",
    inputClass: "__input _select",
    value: "",
    options: "EXPIRECTIODATE",
  },
  {
    id: "yeardCard",
    required: true,
    name: "yeardCard",
    className: "card-input col-md-4 marginBform",
    labelText: "",
    classNameLabel: "card-input__label",
    type: "",
    datatype: "Select",
    inputClass: "__input _select",
    value: "",
    options: "YEARCARD",
  },
  {
    id: "cvv",
    required: true,
    name: "cvv",
    className: "card-input col-md-4 marginBform",
    labelText: "CVV",
    classNameLabel: "card-input__label",
    datatype: "Input",
    type: "tel",
    inputClass: "__input",
    value: "",
    maxlength: "4",
  },
];
class creditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      Inputs: [],
      infocard: {
        cardNumber: '',
        cardName: '',
        cvv: '',
        expirateMonth:'',
        yeardCard:''
        // expiration 
      }
    };
  }

  /*=============================================
  =            Get Info Dashboard Function      =
  =============================================*/
  getInfoDashBoard = async () => {
    try {
      this.buildForm();
    } catch (error) {
      console.log("error", error);
    }
  };

  componentDidMount() {
    this.getInfoDashBoard();
  }

  separatorNumber = (valor) => {
    var str = valor;
    var len = 4;
    var regex = new RegExp(".{" + len + "}", "g");
    var trail = str.length - (str.length % len);

    var parts = str.match(regex);
    parts.push(str.substring(trail));

    let newString = parts.join("   ");

    let newString2 = newString.substr(0, newString.length - 1);

    console.log(newString2);
    return newString2;
  };

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

  changeInput = (id) => event => {
    console.log("id",id);
    console.log("event.target.value",event.target.value);
    let {infocard} = this.state
    infocard[id] = event.target.value
    this.setState({ infocard }, () => {
        this.buildForm()
    })
  }



  buildForm = () => {
    let  { infocard} = this.state;
    console.log("entre a la funcion de logs");
    let Inputs = formCardCred.map((e, i) => {
      console.log("entre al for---->>>", e);

      if (e.datatype === "Input")
        return (
          <div class={e.className}>
            <label for={e.name} class={e.classNameLabel}>
              {e.labelText}
            </label>
            <input
              type={e.type}
              id={e.id}
              onChange={this.changeInput(e.id)}
              // input="changeNumber"
              // focus="focusCardNumber"
              // blur="blurCardNumber"
              class={e.inputClass}
              value={infocard[e.id]}
              maxlength={e.maxlength}
              data-card-field
              autocomplete="off"
            />
          </div>
        );
      else if (e.datatype === "Select")
        return (
          <div class={e.className}>
            <label
              style={{ marginBottom: e.labelText === "" ? "4em" : "" }}
              for={e.name}
              class={e.classNameLabel}
            >
              {e.labelText}
            </label>
            <select class={e.inputClass} id={e.id} value={infocard[e.id]} change="" data-card-field>
              {catForm[e.options].map((e, i) => {
                return <option value={e.value}>{e.label}</option>;
              })}
            </select>
          </div>
        );
    });
    this.setState({
      Inputs,
    });
  };

  render() {
    const { Inputs } = this.state;

    console.log("Inputs", Inputs);
    return (
      <>
        <section className="App-content">
          <div className="col-md-12">
            <div className="cardimgone">
              <div className="divtreecard flip">
                <div className="divsecond  flip-1">
                  <div className="divprime  ">
                    <img src={cardImg} className="card-img " alt="cardImg" />
                  </div>
                  <div className="card-item__wrapper">
                    <div className="card-text_top">
                      <img src={chip} className="card-chip" alt="card-chip" />
                      <div className="card-imgmarca">
                        <img
                          src={macarandom}
                          className="img-marca"
                          alt="card-chip"
                        />
                      </div>
                    </div>
                    <label className="card-number">
                      {this.separatorNumber("5433543354335433")}
                    </label>
                    {/* <div className="card-content col-12"> */}
                    <Row className="card-content col-md-12">
                      <div className="card-content col-md-7">
                        <Row>
                          <label class="col-md-12">Card Holder</label>
                          <label style={{ fontSize: "18px" }} class="col-md-12">
                            FULL NAME
                          </label>
                        </Row>
                      </div>
                      <div className="card-content col-md-5">
                        <Row>
                          <label class="col-md-12">Expires</label>
                          <label style={{ fontSize: "18px" }} class="col-md-1">
                            MM
                          </label>
                          <label style={{ fontSize: "18px" }} class="col-md-1">
                            /
                          </label>
                          <label style={{ fontSize: "18px" }} class="col-md-1">
                            YY
                          </label>
                        </Row>
                      </div>
                    </Row>
                    {/* </div> */}
                  </div>
                </div>
                <div className="divsecond flip-2">
                  <div className="divprime">
                    <img src={cardImg} className="card-img " alt="cardImg" />
                  </div>
                  <div className="card-item__wrapper">
                    {/* <div className="card-content col-12"> */}
                    <Row className="card-content col-md-12">
                      <div className="card-content col-md-12">
                        <div class="card-input">
                          <label for="cardCvv" class="card-input__label">
                            {"cvv"}
                          </label>
                          <input
                            type="tel"
                            class="card-input__input"
                            v-number-only
                            id="fields.cardCvv"
                            maxlength="4"
                            value="formData.cardCvv"
                            input="changeCvv"
                            data-card-field
                            autocomplete="off"
                          />
                        </div>
                      </div>
                      <div className="card-content col-md-12">
                        <div class="card-form__col -cvv">
                          <div
                            style={{ width: "10em" }}
                            class="card-input"
                          ></div>
                        </div>
                      </div>
                    </Row>
                    {/* </div> */}
                  </div>
                  <div className="band_balck"></div>
                  <div className="card-imgmarca2">
                    <img
                      src={macarandom}
                      className="img-marca"
                      alt="card-chip"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Card className="myCard">
                <CardBody>
                  {Inputs}
                  <button class="__button" onClick="">
                    {"Submit"}
                  </button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-3"></div>
          </div>{" "}
        </section>{" "}
      </>
    );
  }
}

export default creditCard;
