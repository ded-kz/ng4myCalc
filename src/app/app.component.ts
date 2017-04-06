import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyFields } from './myFields';
import { rangeValidator } from './control-validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  userForm: FormGroup;
  myField: MyFields=new MyFields();


  // возвращает коэффициент надежности по ответственности трубопровода
 public workPressure: number;
 public pipeOuterDiameter: number;
 public pipeRelCoef: number;

 GetCriticallyBasedSafetyFactor() {
      if (this.workPressure !== undefined && this.pipeOuterDiameter !== undefined) {
      if (this.workPressure <= 5.4) {
        if (this.pipeOuterDiameter < 1200) {
          this.pipeRelCoef = 1.15;
        }
        else {
          this.pipeRelCoef = 1.20;
        }
      }
      else if (this.workPressure > 5.4 && this.workPressure <= 7.4) {
        if (this.pipeOuterDiameter < 1200) {
          this.pipeRelCoef = 1.15;
        }
        else if (this.pipeOuterDiameter >= 1200 && this.pipeOuterDiameter < 1400) {
          this.pipeRelCoef = 1.20;
        }
        else {
          this.pipeRelCoef = 1.25;
        }
      }
      else if (this.workPressure > 7.4 && this.workPressure <= 9.8) {
        if (this.pipeOuterDiameter < 600) {
          this.pipeRelCoef = 1.15;
        }
        else if (this.pipeOuterDiameter >= 600 && this.pipeOuterDiameter < 1200) {
          this.pipeRelCoef = 1.20;
        }
        else if (this.pipeOuterDiameter >= 1200 && this.pipeOuterDiameter < 1400) {
          this.pipeRelCoef = 1.25;
        }
        else {
          this.pipeRelCoef = 1.30;
        }
      }
    }
    else{
       this.pipeRelCoef = 0;
    }
  }
  // Материалы труб
  pipeMaterialsArray= [
    { name: 'К50-500 МПа (50кг/мм2)', pressure: 500 },
    { name: 'К52-520 МПа (52 кг/мм2)', pressure: 520 },
    { name: 'К56-560 МПа (56 кг/мм2)', pressure: 560 },
    { name: 'К60-600 МПа (60 кг/мм2)', pressure: 600 },
    { name: 'К70-700 МПа (70 кг/мм2)', pressure: 700 },
    { name: 'Х50-450 МПа (45кг/мм2)', pressure: 450 },
    { name: 'Х60-500 МПа (50кг/мм2)', pressure: 500 },
    { name: 'Х70-600 МПа (60кг/мм2)', pressure: 600 },
    { name: 'Сталь 10-355 МПа (35кг/мм2)', pressure: 355 },
    { name: 'Сталь 20-355 МПа (35кг/мм2)', pressure: 355 },
    { name: 'Сталь 20-480 МПа (47кг/мм2)', pressure: 480 },
    { name: '09Г2С-470 МПа (47кг/мм2)', pressure: 470 },
    { name: '09Г2С-550 МПа (55кг/мм2)', pressure: 550 },
    { name: '09Г2С-588 МПа (58кг/мм2)', pressure: 588 },
    { name: '09Г2ФБ-575 МПа (57кг/мм2)', pressure: 575 },
    { name: '10Г2ФБ-575 МПа (57кг/мм2)', pressure: 575 },
    { name: '10Г2ФБЮ-570 МПа (57кг/мм2)', pressure: 570 },
    { name: '12Г2СБ-570 МПа (57кг/мм2)', pressure: 570 },
    { name: '13Г1С-У-570 МПа (57кг/мм2)', pressure: 570 },
    { name: '14Г2САФ-588 МПа (58кг/мм2)', pressure: 588 },
    { name: '17ГС-510 МПа (51кг/мм2)', pressure: 510 },
    { name: '17ГС-610 МПа (61кг/мм2)', pressure: 610 },
    { name: '17Г1С-510 МПа (51кг/мм2)', pressure: 510 },
    { name: '17Г1С-630 МПа (63кг/мм2)', pressure: 630 },
    { name: '17Г1С-У-670 МПа (67кг/мм2)', pressure: 670 },
    { name: '17Г2С-480 МПа (47кг/мм2)', pressure: 480 },
    { name: '17Г2С-540 МПа (54кг/мм2)', pressure: 540 },
    { name: '17Г2СФ-480 МПа (47кг/мм2)', pressure: 480 },
    { name: '17Г2СФ-540 МПа (54кг/мм2)', pressure: 540 }
  ];

  //Категория участка
  categoryArray = [
    { value: '0.7', display: 'I' },
    { value: '0.85', display: 'II' },
    { value: '1', display: 'III' }
  ];

  //Коэффициент надежности по материалу труб:
  pipeMatRelRatioArray = [
    { value: '1.34'},
    { value: '1.40'},
    { value: '1.47'},
    { value: '1.55'}
  ];


formErrors={
  "km": "",
  "gosTex": "",
  "manufacturer": "",
  "pipeMaterialsArray": "",
  "category": "",
  "workingPressure": "",
  "frameWidth": "",
  "outerWidth": "",
  "loadRatio": "",
  "pipeMatRelRatio": "",
  "tempDelta": "",
  "lVelocity": "",
  "dVelocity": ""
};

validationMessages={
  "pipeMaterialsArray": {
    "required": "Обязательное поле."
  },
  "category": {
    "required": "Обязательное поле."
  },
  "workingPressure": {
    "required": "Обязательное поле.",
    "rangeValidator": "Значение должно быть в диапазоне от 0 до 9.8"
  },
  "frameWidth": {
    "required": "Обязательное поле.",
    "rangeValidator": "Значение должно быть в диапазоне от 0 до 25"
  },
  "outerWidth": {
    "required": "Обязательное поле.",
    "rangeValidator": "Значение должно быть в диапазоне от 0 до 1420"
  },
  "loadRatio": {
    "required": "Обязательное поле.",
    "rangeValidator": "Значение должно быть в диапазоне от 0.8 до 1.5"
  },
  "pipeMatRelRatio": {
    "required": "Обязательное поле."
  },
  "tempDelta": {
    "rangeValidator": "Значение должно быть в диапазоне от -100 до 100"
  },
  "lVelocity": {
    "rangeValidator": "Значение должно быть в диапазоне от 0 до 10"
  },
  "dVelocity": {
    "rangeValidator": "Значение должно быть в диапазоне от 0 до 10"
  }
};

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.userForm=this.fb.group({
      "km": [this.myField.km, [
        // нет правил.
      ]],
      "gosTex": [this.myField.gosTex,[
        // нет правил.
      ]],
      "manufacturer": [this.myField.manufacturer,[
        // нет правил.
      ]],
      "pipeMaterialsArray": [this.myField.pipeMaterialsArray,[
        Validators.required
      ]],
      "category": [this.myField.category,[
        Validators.required
      ]],
      "workingPressure": [this.myField.workingPressure, [
        Validators.required,
        rangeValidator(0, 9.8)
      ]],
      "frameWidth": [this.myField.frameWidth, [
        Validators.required,
        rangeValidator(1, 25)
      ]],
      "outerWidth": [this.myField.outerWidth, [
        Validators.required,
        rangeValidator(0, 1420)
      ]],
      "loadRatio": [this.myField.loadRatio, [
        Validators.required,
        rangeValidator(0.8, 1.5)
      ]],
      "pipeMatRelRatio": [this.myField.pipeMatRelRatio,[
        Validators.required
      ]],
      "tempDelta": [this.myField.tempDelta, [
        rangeValidator(-100, 100)
      ]],
      "lVelocity": [this.myField.lVelocity, [
        rangeValidator(0, 10)
      ]],
      "dVelocity": [this.myField.dVelocity, [
        rangeValidator(0, 10)
      ]]
    });

  this.userForm.valueChanges
    .subscribe(data=>this.onValueChange(data));

  this.onValueChange();
}

  onValueChange(data?: any){
    if (!this.userForm) return;
    let form=this.userForm;

    for (let field in this.formErrors) {
      this.formErrors[field]="";
      let control=form.get(field);

      if (control  && !control.valid) {
        let message=this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field]+=message[key]+" ";
        }
      }
    }


  }

  onSubmit() {
    console.log("submitted");
    console.log(this.userForm.value);
  }
}
