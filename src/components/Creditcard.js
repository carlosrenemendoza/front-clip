import React, { Component } from 'react';
import { Row, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import { message } from 'antd';
import cardImg from '../assets/fondo1.jpeg';
import chip from '../assets/traschip.png';
import VISA from '../assets/visa.png';
import UNIONPAY from '../assets/unionpay.png';
import MASTERCARD from '../assets/mastercard.png';
import DISCOVER from '../assets/discover.png';
import JCB from '../assets/jcb.png';
import AMERICAN_EXPRESS from '../assets/AMERICAN _EXPRESS.png';
import DINERS_CLUB from '../assets/DINERS_CLUB.png';
import ELO from '../assets/ELO.png';
import HIPERCARD from '../assets/HIPERCARD.png';
import HIPER from '../assets/HIPER.png';
import MAESTRO from '../assets/MAESTROS.png';
import MIR from '../assets/MIR.png';
import VALIDATION from '../validation';
const creditCardType = require('credit-card-type');
const ValidationService = new VALIDATION();
const styles = { marginTop: '8vh' };
const key = 'Clip';

const imgMar = {
  Visa: VISA,
  UnionPay: UNIONPAY,
  Mastercard: MASTERCARD,
  'American Express': AMERICAN_EXPRESS,
  'Diners Club': DINERS_CLUB,
  Discover: DISCOVER,
  Elo: ELO,
  Hipercard: HIPERCARD,
  Hiper: HIPER,
  JCB: JCB,
  Maestro: MAESTRO,
  Mir: MIR,
};

const catForm = {
  EXPIRECTIODATE: [
    { value: 1, label: '01' },
    { value: 2, label: '02' },
    { value: 3, label: '03' },
    { value: 4, label: '04' },
    { value: 5, label: '05' },
    { value: 6, label: '06' },
    { value: 7, label: '07' },
    { value: 8, label: '08' },
    { value: 9, label: '09' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' },
  ],
  YEARCARD: [
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 2024, label: '2024' },
    { value: 2025, label: '2025' },
    { value: 2026, label: '2026' },
    { value: 2027, label: '2027' },
    { value: 2028, label: '2028' },
    { value: 2029, label: '2029' },
    { value: 2030, label: '2030' },
    { value: 2031, label: '2031' },
    { value: 2032, label: '2032' },
  ],
};
class creditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formCardCred: [
        {
          id: 'cardNumber',
          required: true,
          name: 'cardNumber',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Card Number',
          classNameLabel: 'card-input__label',
          datatype: 'Input',
          type: 'number',
          inputClass: '__input',
          value: '',
          maxlength: '16',
          regExp: /^[0-9]{0,16}$/,
          style: {},
        },
        {
          id: 'cardName',
          required: true,
          name: 'cardName',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Card Name',
          classNameLabel: 'card-input__label',
          type: '',
          datatype: 'Input',
          inputClass: '__input',
          value: '',
          maxlength: '34',
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: 'expirateMonth',
          required: true,
          name: 'expirateMonth',
          className: 'card-input col-md-4 marginBform',
          labelText: 'Expiration Date',
          classNameLabel: 'card-input__label',
          type: 'number',
          datatype: 'Select',
          inputClass: '__input _select',
          value: '',
          options: 'EXPIRECTIODATE',
          style: {},
        },
        {
          id: 'yeardCard',
          required: true,
          name: 'yeardCard',
          className: 'card-input col-md-4 marginBform',
          labelText: '',
          classNameLabel: 'card-input__label',
          type: '',
          datatype: 'Select',
          inputClass: '__input _select',
          value: '',
          options: 'YEARCARD',
          style: {},
        },
        {
          id: 'cvv',
          required: true,
          name: 'cvv',
          className: 'card-input col-md-4 marginBform',
          labelText: 'CVV',
          classNameLabel: 'card-input__label',
          datatype: 'Input',
          type: 'number',
          inputClass: '__input',
          value: '',
          maxlength: '4',
          regExp: /^[0-9]{0,4}$/,
          style: {},
        },
      ],
      search: '',
      Inputs: [],
      creditCard: [],
      infocard: {
        cardNumber: '',
        cardName: '',
        cvv: '',
        expirateMonth: '1',
        yeardCard: '2021',
        // expiration
      },
    };
  }

  getInfoDashBoard = async () => {
    try {
      this.buildForm();
    } catch (error) {
      console.warn('error', error);
    }
  };

  componentDidMount() {
    this.getInfoDashBoard();
  }

  separatorNumber = (inputNum) => {
    var newval = '';
    let val = inputNum.replace(/\s/g, '');

    for (var i = 0; i < val.length; i++) {
      if (i % 4 === 0 && i > 0) newval = newval.concat(' ');
      newval = newval.concat(val[i]);
    }
    return newval;
  };

  changeInput = (id, exp) => (event) => {
    let { infocard, formCardCred } = this.state;
    formCardCred.forEach((e) => {
      e.style = { color: '#000001' };
      e.error = '';
    });
    let visaCards = '';
    if (exp) {
      const emailRegex = new RegExp(exp);
      if (emailRegex.test(event.target.value)) {
        infocard[id] = event.target.value;
        visaCards = creditCardType(event.target.value);
        this.setState({ infocard, creditCard: visaCards }, () => {
          this.buildForm();
        });
      }
    } else {
      infocard[id] = event.target.value;
      visaCards = creditCardType(event.target.value);
      this.setState({ infocard, creditCard: visaCards }, () => {
        this.buildForm();
      });
    }
  };

  changeSelect = (id) => (event) => {
    let { infocard } = this.state;
    infocard[id] = event.target.value;
    this.setState({ infocard }, () => {
      this.buildForm();
    });
  };

  buildForm = () => {
    let { infocard, formCardCred } = this.state;
    let Inputs = formCardCred.map((e) => {
      if (e.datatype === 'Input')
        return (
          <div class={e.className}>
            <label style={e.style} for={e.name} class={e.classNameLabel}>
              {e.labelText}
            </label>
            <input
              type={e.type}
              id={e.id}
              onChange={this.changeInput(e.id, e.regExp)}
              class={e.inputClass}
              value={infocard[e.id]}
              maxlength={e.maxlength}
              data-card-field
              autocomplete='off'
            />
          </div>
        );
      else if (e.datatype === 'Select')
        return (
          <div class={e.className}>
            <label
              style={{ marginBottom: e.labelText === '' ? '4em' : '' }}
              for={e.name}
              class={e.classNameLabel}
            >
              {e.labelText}
            </label>
            <select
              style={e.style}
              class={e.inputClass}
              id={e.id}
              value={infocard[e.id]}
              change=''
              onChange={this.changeSelect(e.id)}
              data-card-field
            >
              {catForm[e.options].map((e) => {
                return <option value={e.value}>{e.label}</option>;
              })}
            </select>
          </div>
        );

      return 0;
    });
    this.setState({
      Inputs,
    });
  };

  submitData = async () => {
    let { infocard } = this.state;
    let newArray = {
      cardNumber: infocard.cardNumber,
      cardName: infocard.cardName,
      cvv: infocard.cvv,
      expiration: `${this.minTwoDigits(infocard.expirateMonth)}-${
        infocard.yeardCard
      }`,
    };
    try {
      await axios.post('http://localhost:4219/back/createContact', {
        newArray,
      });
      message.success({
        content: 'Credit card information saved',
        key,
        style: styles,
        duration: 2,
      });
    } catch (error) {
      message.error('Internal server Error');
    }
  };

  minTwoDigits = (n) => {
    return (n < 10 ? '0' : '') + n;
  };

  validateCardCred = async () => {
    let { infocard, formCardCred } = this.state;

    let BODY = {
      headerDetails: infocard,
    };
    ValidationService.validate({
      target: 'CREDIT-CARD',
      data: BODY,
    })
      .then(() => {
        formCardCred.forEach((e) => {
          e.style = { color: '#000001' };
          e.error = '';
        });
        this.setState(
          {
            formCardCred,
          },
          () => {
            this.buildForm();
            this.submitData();
          }
        );
      })
      .catch((errors) => {
        console.warn('ERROR', errors);
        let Element = document.getElementById(Object.keys(errors)[0]);
        if (Element) {
          Element.scrollIntoView({ block: 'end', behavior: 'smooth' });
          Element.focus();
        }
        formCardCred.forEach((e) => {
          if (errors[e.id]) {
            e.style = { color: '#e57373' };
            e.error = errors[e.id].label;
          } else {
            e.error = '';
            e.style = { color: '#000001' };
          }
        });
        this.setState({ formCardCred }, () => {
          this.buildForm();
          message.error({
            content: 'There are some errors',
            className: 'classCustomMessa',
          });
        });
      });
  };

  render() {
    const { Inputs, infocard, creditCard } = this.state;
    return (
      <>
        <section className='App-content'>
          <div className='col-md-12'>
            <div className='cardimgone'>
              <div className='divtreecard flip'>
                <div className='divsecond  flip-1'>
                  <div className='divprime  '>
                    <img src={cardImg} className='card-img ' alt='cardImg' />
                  </div>
                  <div className='card-item__wrapper'>
                    <div className='card-text_top'>
                      <img src={chip} className='card-chip' alt='card-chip' />
                      <div className='card-imgmarca'>
                        <img
                          src={
                            imgMar[
                              creditCard.length > 0
                                ? creditCard[0].niceType !== ''
                                  ? creditCard[0].niceType
                                  : 'JCB'
                                : 'JCB'
                            ]
                          }
                          className='img-marca'
                          alt='card-chip'
                        />
                      </div>
                    </div>
                    <label className='card-number'>
                      {this.separatorNumber(
                        infocard.cardNumber === ''
                          ? '****************'
                          : infocard.cardNumber
                      )}
                    </label>
                    {/* <div className='card-content col-12'> */}
                    <Row className='card-content col-md-12'>
                      <div className='card-content col-md-7'>
                        <Row>
                          <label class='col-md-12'>Card Holder</label>
                          <label style={{ fontSize: '15px' }} class='col-md-12'>
                            {infocard.cardName ? infocard.cardName : ''}
                          </label>
                        </Row>
                      </div>
                      <div className='card-content col-md-5'>
                        <Row>
                          <label class='col-md-12'>Expires</label>
                          <label style={{ fontSize: '18px' }} class='col-md-1'>
                            {infocard.expirateMonth
                              ? this.minTwoDigits(infocard.expirateMonth)
                              : 'MM'}
                          </label>
                          <label style={{ fontSize: '18px' }} class='col-md-1'>
                            /
                          </label>
                          <label style={{ fontSize: '18px' }} class='col-md-1'>
                            {infocard.yeardCard ? infocard.yeardCard : 'YY'}
                          </label>
                        </Row>
                      </div>
                    </Row>
                    {/* </div> */}
                  </div>
                </div>
                <div className='divsecond flip-2'>
                  <div className='divprime'>
                    <img src={cardImg} className='card-img ' alt='cardImg' />
                  </div>
                  <div className='card-item__wrapper'>
                    {/* <div className='card-content col-12'> */}
                    <Row className='card-content col-md-12'>
                      <div className='card-content col-md-12'>
                        <div class='card-input'>
                          <label for='cardCvv' class='card-input__label'>
                            {'cvv'}
                          </label>
                          <input
                            disabled='true'
                            type='tel'
                            class='card-input__input'
                            id='fields.cardCvv'
                            maxlength='4'
                            value={infocard.cvv ? infocard.cvv : ''}
                            input='changeCvv'
                            data-card-field
                            autocomplete='off'
                          />
                        </div>
                      </div>
                      <div className='card-content col-md-12'>
                        <div class='card-form__col -cvv'>
                          <div
                            style={{ width: '10em' }}
                            class='card-input'
                          ></div>
                        </div>
                      </div>
                    </Row>
                  </div>
                  <div className='band_balck'></div>
                  <div className='card-imgmarca2'>
                    <img
                      src={
                        imgMar[
                          creditCard.length > 0
                            ? creditCard[0].niceType !== ''
                              ? creditCard[0].niceType
                              : 'JCB'
                            : 'JCB'
                        ]
                      }
                      className='img-marca'
                      alt='card-chip'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <Card className='myCard'>
                <CardBody>
                  {Inputs}
                  <button class='__button' onClick={this.validateCardCred}>
                    {'Submit'}
                  </button>
                </CardBody>
              </Card>
            </div>
            <div className='col-md-3'></div>
          </div>{' '}
        </section>{' '}
      </>
    );
  }
}

export default creditCard;
