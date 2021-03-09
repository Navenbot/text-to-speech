import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  text: string;
  rate: number;
  locale: string;
  spk1: any;
  constructor(private tts: TextToSpeech) {
    this.text = this.spk1;
    this.rate = 0.5;
    this.locale = 'en-US';
  }

  speak1(){
    this.tts.speak({
      text: this.text,
      rate: this.rate / 10,
      locale: this.locale
    })
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));

  }
}
