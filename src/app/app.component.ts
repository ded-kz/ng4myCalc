import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

//Категория участка
  public categoryArray = [
    { value: '0.7', display: 'I' },
    { value: '0.85', display: 'II' },
    { value: '1', display: 'III' }
  ]
	// Материалы труб
 public pipeMaterialsArray = [
    	{name: 'К50-500 МПа (50кг/мм2)', pressure: 500},
    	{name: 'К52-520 МПа (52 кг/мм2)', pressure: 520},
    	{name: 'К56-560 МПа (56 кг/мм2)', pressure: 560},
    	{name: 'К60-600 МПа (60 кг/мм2)', pressure: 600},
    	{name: 'К70-700 МПа (70 кг/мм2)', pressure: 700},
    	{name: 'Х50-450 МПа (45кг/мм2)', pressure: 450},
    	{name: 'Х60-500 МПа (50кг/мм2)', pressure: 500},
    	{name: 'Х70-600 МПа (60кг/мм2)', pressure: 600},
    	{name: 'Сталь 10-355 МПа (35кг/мм2)', pressure: 355},
    	{name: 'Сталь 20-355 МПа (35кг/мм2)', pressure: 355},
    	{name: 'Сталь 20-480 МПа (47кг/мм2)', pressure: 480},
    	{name: '09Г2С-470 МПа (47кг/мм2)', pressure: 470},
    	{name: '09Г2С-550 МПа (55кг/мм2)', pressure: 550},
    	{name: '09Г2С-588 МПа (58кг/мм2)', pressure: 588},
    	{name: '09Г2ФБ-575 МПа (57кг/мм2)', pressure: 575},
    	{name: '10Г2ФБ-575 МПа (57кг/мм2)', pressure: 575},
    	{name: '10Г2ФБЮ-570 МПа (57кг/мм2)', pressure: 570},
    	{name: '12Г2СБ-570 МПа (57кг/мм2)', pressure: 570},
    	{name: '13Г1С-У-570 МПа (57кг/мм2)', pressure: 570},
    	{name: '14Г2САФ-588 МПа (58кг/мм2)', pressure: 588},
    	{name: '17ГС-510 МПа (51кг/мм2)', pressure: 510},
    	{name: '17ГС-610 МПа (61кг/мм2)', pressure: 610},
    	{name: '17Г1С-510 МПа (51кг/мм2)', pressure: 510},
    	{name: '17Г1С-630 МПа (63кг/мм2)', pressure: 630},
    	{name: '17Г1С-У-670 МПа (67кг/мм2)', pressure: 670},
    	{name: '17Г2С-480 МПа (47кг/мм2)', pressure: 480},
    	{name: '17Г2С-540 МПа (54кг/мм2)', pressure: 540},
    	{name: '17Г2СФ-480 МПа (47кг/мм2)', pressure: 480},
    	{name: '17Г2СФ-540 МПа (54кг/мм2)', pressure: 540}
    ];

}
