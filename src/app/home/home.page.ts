import { Component } from '@angular/core';

interface CurrencyRates {
  [key: string]: {
    [key: string]: number;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  amount: number = 0;
  fromCurrency: string = 'MXN';
  toCurrency: string = 'USD';
  result: number = 0;

  // Si quieres agregar mas monedas agregalas aquí
  currencies = [
    { code: 'MXN', name: 'Peso Mexicano' },
    { code: 'USD', name: 'Dólar Estadounidense' },
    { code: 'EUR', name: 'Euro' }
  ];

  // Esto es la tasa de cambio de cada moneda rana
  private rates: CurrencyRates = {
    MXN: { USD: 0.050, EUR: 0.046 },
    USD: { MXN: 20.0, EUR: 0.92 },
    EUR: { MXN: 21.74, USD: 1.09 }
  };

  constructor() {}


  get filteredCurrencies() {
    return this.currencies.filter(currency => currency.code !== this.fromCurrency);
  }


  convert() {
    if (this.fromCurrency === this.toCurrency) {
      this.result = this.amount;
    } else {
      this.result = this.amount * this.rates[this.fromCurrency][this.toCurrency];
    }
  }
}
