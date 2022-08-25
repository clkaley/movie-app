# Movie App


#### Componentler oluşturuldu.
cmd ye

> ng g c 'component ismi'


#### Tüm componentler app.componnet.html içine yazıldı.

####  Tüm componentler kendi içerisinde özelleştirildi.

#### Binding işlemi gerçekleştirildi.

data.component.ts içinde tanımladığım bir değişken
```
 title:string = "Deneme";
```

data.component.html
```
<h2> Title: </h2> 
{{title}}
Change Title : <input [(ngModel)]="title" type="text" class="form-control"/>
```


#### Modeller oluşturuldu. Bunun için bir Model Folder Açıldı. Bu iki çeşit oluşturulabilirdi 1. Class şeklinde 2. ise Interface şeklinde olabilir. Burda interface şeklinde tanımlandı


category.ts
```
export interface Category{
    id:number;
    name:string;
}
```

Bu işlemden sonra repolar oluştruldu uygulamada kullanılacak fonksiyonlar burada tanımlandı 
category.repository.ts
 ```
import { Category } from "./category";

export class CategoryRepository{
    private categories:Category[];
    constructor (){
        this.categories=[
            {
              id:1,
              name:"Macera"
            },
            {
              id:2,
              name:"Romantik"
            },
            {
              id:3,
              name:"Bilim Kurgu"
            },
            {
              id:4,
              name:"Komedi"
            },
          ]
    }

    getCategories():Category[]{
        return this.categories;
    }
}
 ```

#### Template eklendi bu kısmı tam anlamadım açıklayabileceğimi düşünmüyorum ama mantık şu bir component i birden fazla şekilde kullanabiliriz.

#### Pipes
DatePipe
UpperCasePipe
LowerCasePipe
CurrencyPipe gibi çeşitleri mevcuttur. 

```
{{ value_expression | uppercase }}
```

```
   <h2 class="card-title">{{item.title | uppercase }}</h2>
```

```
<h4>lower upper-title pipe</h4>
<p>{{'Samsung S20' }}</p>
<p>{{'Samsung S20' | uppercase}}</p>
<p>{{'Samsung S20' | lowercase }}</p>
<p>{{'Samsung S20' | titlecase}}</p>
```
Çıktıları şu şekildedir:
- Samsung S20
- SAMSUNG S20
- samsung s20
- Samsung S20

* Date Pipe

movies.component.ts
``` 
today=new Date();
```

movies.component.html
```
<h4>Date Pipe</h4>
<p>{{today}}</p>
<p>{{today | date}}</p>
<p>{{today | date:'fullDate'}}</p>
<p>{{today | date:'shortDate'}}</p>
<p>{{today | date:'medium'}}</p>

```
Çıktılar şu şekildedir:
- Thu Aug 25 2022 12:27:39 GMT+0300 (GMT+03:00)
- 25 Ağu 2022
- 25 Ağustos 2022 Perşembe
- 25.08.2022


* Decimal Pipe

```
<h4>Decimal Pipe</h4>
<p>{{2.5454858545 | number}}</p>
<p>{{2.5454858545 | number: '4.0-7'}}</p>
```

Çıktılar şu şekildedir:
- 2,545
- 0.002,5454859


* Currency Pipe

```
<h4>Currency Pipe</h4>
<p>{{395 | currency}}</p>
<p>{{395 | currency:"EUR"}}</p>
<p>{{395 | currency:"TR"}}</p>
```

Çıktılar şu şekildedir:
- $395,00
- €395,00
- TR395,00


* Percent Pipe

```
<h4>Percent Pipe</h4>
<p>{{0.259 }}</p>
<p>{{0.259 | percent}}</p>
<p>{{0.0259 | percent}}</p>
<p>{{1.259 | percent:"2.2-4"}}</p>
```

Çıktılar şu şekildedir:
- 0.259
- %26
- %3
- %125,90



* Dili türkçe yapmak için şu pipe çıktılarında öncelikle angular.json içine yazılır.

```
 "i18n": {
        "sourceLocale":"tr"
      },
```

ardından localize paketi indirilir
Terminale -> 
> ng add @angular/localize


#### Custom Pipes
Biz bu projede description için pipe oluşturucaz. Neden eğer description alanı istediğimizden uzunsa diye

Terminalden ekleyebiliriz -> ng g pipe pipe-ismi
ve bu app.module.ts içindeki declarations kısmına eklenir.

Ama kendimiz oluşturmak istiyor isek: app folder ın altına pipes isimli folder create edilir.
Ardından bu folder a oluşturucağımız pipe ismi verilir.
summary.pipe.ts

```
<!-- Pipe olduğu belli eden şey angulardan import edilir. -->
import { Pipe } from "@angular/core";
export class SummaryPipe{
}
```

```
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform{
    //! description bizim string olduğu için
    transform(value:string,limit?:number){
        if(!value) return null;

        limit=limit? limit:20;
        if(limit>value.length){
            return value
        }
        return value.substring(0,limit)+'...';
    }
}

```

* Filtreleme İşlemi için two way binding ardından pipe işlemi
[(ngModel)]="expression"

movies.component.html
```
  <div class="mb-3">
        <input 
        [(ngModel)]="filterText"
        type="text" class="form-control" placeholder="Searching...">
    </div>
```

```
filterText:string="deneme"
```

bind işlemi oldu mu olmadı mı onun kontrolü

![Ekran Görüntüsü (517)](https://user-images.githubusercontent.com/74673470/186638437-4ab7cd7a-67ec-41b6-b936-25da7bd249f8.png)


bu sefer pipe ı otomatik oluşturduk
Terminal'e ->ng g pipe pipes/movie-filter şeklinde oluşturduk.


```
import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies:Movie[],filterText:string): Movie[] {
    filterText=filterText.toLowerCase();
    console.log("filterText",filterText);
    console.log("movies",movies);
    return movies;
  }
}
```


```
  <div class="card mb-3" *ngFor="let item of movies | movieFilter:filterText">
```


```
 transform(movies:Movie[],filterText:string): Movie[] {
    filterText=filterText.toLowerCase();
    console.log("filterText",filterText);
    console.log("movies",movies);
<!-- hem title hem description a göre filtreleme işlemi yapıldı -->
    return filterText? movies.filter((m:Movie)=>m.title.toLowerCase().indexOf(filterText)!== -1 || m.description.toLowerCase().indexOf(filterText)!== -1): movies;
  }
```