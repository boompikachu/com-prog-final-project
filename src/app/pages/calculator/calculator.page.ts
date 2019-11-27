import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  ngOnInit() {
  }
  
  constructor(private toast: ToastController,
    private alertController: AlertController) {}

  count(input: string) {
    var i: number;
    var s: number;
    s = 0;
    for (i = 0; i < input.length; i++) {
      if (input[i] === '+') {
        s += 1;
      }
    }
    return s;
  }

  multiplyDivide(input: string) {

    let result = 1;
    let operatorIndex = 0
    const arrayOfOperators = [];
    arrayOfOperators.push('*');
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) === '*') {
        arrayOfOperators.push('*')
      } else if (input.charAt(i) === '/') {
        arrayOfOperators.push('/')
      }
    }
    const splittedMultiplyDivide = input.split(/\*|\//);
    for (let i = 0; i < splittedMultiplyDivide.length; i++) {
      const value = splittedMultiplyDivide[i];
      if (arrayOfOperators[operatorIndex] === '*') {
        result *= Number(value);
        operatorIndex += 1;
      } else if (arrayOfOperators[operatorIndex] === '/') {
        result /= Number(value);
        operatorIndex += 1;
      }
    }

    return String(result);
  
  }

  calculate(input: string) {
    
    if (input === null) {
      this.show('Error: No input')
    }

    let result = 0;
    let operatorIndex2 = 0
    const arrayOfOperators = [];
    arrayOfOperators.push('+');
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) === '+') {
        arrayOfOperators.push('+');
      } else if (input.charAt(i) === '-') {
        arrayOfOperators.push('-');
      }
    };
    /*for (let i = 0; i < arrayOfOperators.length; i++) {
      console.log(arrayOfOperators[i])
    };*/
    const splittedAddSubtract = input.split(/\+|-/);
    
    for (let i = 0; i < splittedAddSubtract.length; i++) {
      //console.log(splittedAddSubtract[i]);
      splittedAddSubtract[i] = this.multiplyDivide(splittedAddSubtract[i])
    }

    for (let i = 0; i < splittedAddSubtract.length; i++) {
      const value = splittedAddSubtract[i];
      console.log(value);
      console.log(arrayOfOperators);
      console.log(operatorIndex2);
      console.log(arrayOfOperators[operatorIndex2]);
      if (arrayOfOperators[operatorIndex2] === '+') {
        result += Number(value);
        operatorIndex2 += 1;
      } else if (arrayOfOperators[operatorIndex2] === '-') {
        result -= Number(value);
        operatorIndex2 +=1;
      }
    }
  
    this.show(String(result));
  }

  async show(output: string) {
    const a = await this.alertController.create({
      header: 'Your answer is:',
      message: output,
      buttons: ['OK']
    });

    await a.present();
  }

}
